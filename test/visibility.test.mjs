/**
 * Guards the web album's view window against the app's.
 *
 * This exists because the two drifted once and shipped: album.html decided
 * visibility from `events.is_unlocked`, a column set only by an Event Pass
 * redemption, so it never saw the two other ways an album is fully open — the
 * host being premium now, or the viewer being premium now. A premium host's
 * album holds 150 photos; in the browser every guest saw 50. The app was right
 * the whole time, because it asks my_event_entitlement instead of re-deriving
 * the rule.
 *
 * The function under test is read out of album.html rather than copied, so this
 * fails if the shipped rule changes rather than passing against a stale copy.
 *
 * Run: node --test test/
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../album.html', import.meta.url), 'utf8');

// Pull the real function and the real window size out of the shipped page.
const fnSrc = html.match(/function visibleTo\(rows\) \{[\s\S]*?\n\}/);
assert.ok(fnSrc, 'visibleTo() not found in album.html');
const windowSize = Number(html.match(/const FREE_WINDOW = (\d+);/)?.[1]);
assert.equal(windowSize, 50, 'FREE_WINDOW must match FREE_MAX_PHOTOS_PER_EVENT in the app');

// The page must ask the server, not re-derive the rule from a column.
test('visibility is server-decided, not inferred from is_unlocked', () => {
  assert.match(html, /my_event_entitlement/,
    'album.html must call my_event_entitlement');
  assert.ok(!/is_unlocked\s*\)\s*q\s*=\s*q\.limit/.test(html),
    'photo query must not be limited by is_unlocked');
  assert.ok(!/!eventRow\.is_unlocked && \(eventRow\.photo_count/.test(html),
    'the capped-album notice must key on the entitlement, not is_unlocked');
});

/** Instantiate the shipped function with a given entitlement/viewer. */
function makeVisibleTo(entitlement, me) {
  const FREE_WINDOW = windowSize;
  return new Function('entitlement', 'me', 'FREE_WINDOW',
    `${fnSrc[0]}; return visibleTo;`)(entitlement, me, FREE_WINDOW);
}

const rows = (n, uploader = 'host') =>
  Array.from({ length: n }, (_, i) => ({
    id: `p${i}`,
    uploaded_by: uploader,
    created_at: new Date(2026, 0, 1 + i).toISOString(),
  }));

test("premium host's 150-photo album shows all 150 to a guest", () => {
  // The exact bug: mode is 'all' because the HOST is premium, even though no
  // pass was ever bought and is_unlocked is false.
  const v = makeVisibleTo({ mode: 'all', cutoff: null }, { id: 'guest' });
  assert.equal(v(rows(150)).length, 150);
});

test('a genuinely free album still caps at the free window', () => {
  const v = makeVisibleTo({ mode: 'free', cutoff: null }, { id: 'guest' });
  assert.equal(v(rows(150)).length, 50);
});

test('a free viewer always keeps their own uploads', () => {
  const all = [...rows(60, 'host'), ...rows(3, 'guest').map((r, i) => ({ ...r, id: `mine${i}` }))];
  const v = makeVisibleTo({ mode: 'free', cutoff: null }, { id: 'guest' });
  const out = v(all);
  assert.equal(out.filter((r) => r.uploaded_by === 'guest').length, 3,
    "a guest's own photos must never be hidden from them");
});

test('a grandfathered viewer keeps everything on or before the cutoff', () => {
  const all = rows(120);
  const cutoff = all[99].created_at;             // first 100 are on/before it
  const v = makeVisibleTo({ mode: 'grandfathered', cutoff }, { id: 'guest' });
  assert.equal(v(all).length, 100);
});

test('the free window is the OLDEST N, matching the app', () => {
  // album.html orders created_at ascending, so the window is the first N here;
  // the app slices the last N off a newest-first list. Same photos.
  const v = makeVisibleTo({ mode: 'free', cutoff: null }, { id: 'guest' });
  const out = v(rows(60));
  assert.equal(out[0].id, 'p0');
  assert.equal(out.at(-1).id, 'p49');
});

// ---------------------------------------------------------------------------
// The three host types, which is what a guest's view actually turns on.
// mode comes from my_event_entitlement: 'all' when a pass is on the album, OR
// the host is premium now, OR the viewer is premium now. Only a genuinely free
// album falls through to the window — and a free album can hold just 50, so
// its guests still see every photo it has.
// ---------------------------------------------------------------------------

test('FREE host: album holds 50, guest sees all 50', () => {
  const v = makeVisibleTo({ mode: 'free', cutoff: null }, { id: 'guest' });
  assert.equal(v(rows(50)).length, 50, 'a free album is never truncated, it is only ever full');
});

test('PREMIUM host: album holds 150, guest sees all 150', () => {
  const v = makeVisibleTo({ mode: 'all', cutoff: null }, { id: 'guest' });
  assert.equal(v(rows(150)).length, 150);
});

test('EVENT PASS host: album holds whatever the pass bought, guest sees all of it', () => {
  const v = makeVisibleTo({ mode: 'all', cutoff: null }, { id: 'guest' });
  for (const size of [150, 350, 600, 1000, 1500, 3000]) {
    assert.equal(v(rows(size)).length, size, `pass sized ${size} must show ${size}`);
  }
});

test('a free guest and a premium guest see the same album identically', () => {
  // Capacity belongs to the ALBUM, not the person: whoever is looking, an open
  // album shows everything it holds.
  const free = makeVisibleTo({ mode: 'all', cutoff: null }, { id: 'freeGuest' });
  const prem = makeVisibleTo({ mode: 'all', cutoff: null }, { id: 'premGuest' });
  assert.equal(free(rows(150)).length, prem(rows(150)).length);
});

test('the photo fetch is paged, and does not stop on a short page', () => {
  // PostgREST truncates at max_rows (1000 on this project) with no error. A
  // single unpaged request returned 1000 of a 3000-photo pass album.
  assert.match(html, /\.range\(from, from \+ PAGE - 1\)/,
    'photos must be fetched with .range() paging');
  assert.match(html, /if \(page\.length === 0\) break;/,
    'paging must stop on an EMPTY page, not a short one');
  assert.ok(!/page\.length < PAGE/.test(html),
    'stopping on a short page silently returns only the first page if max_rows < PAGE');
});
