#!/usr/bin/env bash
# ============================================================================
# Render privacy.md / terms.md into STATIC privacy.html / terms.html.
#
# These two pages are load-bearing in a way the rest of the site is not: they
# are the App Store Connect privacyPolicyUrl, the two links Apple requires on
# the purchase screen (Guideline 3.1.2), the links in the consent gate every new
# user must accept, and the links in Profile.
#
# They used to be 27-line shells that fetched the .md at runtime and rendered it
# with marked.min.js from cdn.jsdelivr.net. With JavaScript off, or jsDelivr
# blocked or slow, the reader got "Loading…" and then a fallback sentence — and
# every reader's IP went to a CDN the policy did not name. A legal document that
# needs a third party to be up is one you cannot prove was ever displayed.
#
# So the Markdown stays the source you edit, and the HTML is generated from it
# and committed. Run this after editing either .md file, then commit both.
#
#   ./build-legal.sh
#
# Needs node (for npx). Nothing is installed into the repo.
# ============================================================================
set -euo pipefail
cd "$(dirname "$0")"

render() {   # render <slug> <title>
  local slug="$1" title="$2"
  local body
  body="$(npx --yes marked@15 --gfm -i "${slug}.md")"
  cat > "${slug}.html" <<HTML
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <link rel="stylesheet" href="./style.css" />
  <link rel="icon" type="image/png" href="./icon.png" />
  <link rel="apple-touch-icon" href="./icon.png" />
  <!-- Generated from ${slug}.md by build-legal.sh. Edit the Markdown, not this file. -->
</head>
<body>
  <div class="wrap">
    <a class="brand" href="./index.html"><img class="brand-icon" src="./icon.png" alt="" /> SharedShots</a>
    <main id="content">
${body}
    </main>
  </div>
</body>
</html>
HTML
  echo "  wrote ${slug}.html ($(wc -c < "${slug}.html" | tr -d ' ') bytes)"
}

echo "rendering legal pages:"
render privacy "SharedShots Privacy Policy"
render terms   "SharedShots Terms of Service"
