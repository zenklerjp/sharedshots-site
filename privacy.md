# SharedShots — Privacy Policy

_Last updated: 2026-06-29_

This Privacy Policy describes how the SharedShots mobile application (the
"App") collects, uses, and shares information. SharedShots is operated by
Jaden Plaatjes ("we", "our", "us"). By using the App you agree to the
practices described here.

If you have questions, email **support@sharedshots.app**.

---

## 1. What we collect

We collect the minimum information needed to make shared-event photo
albums work.

| Category | Examples | Why we need it |
|---|---|---|
| **Account info** | Email address, display name, hashed password | To let you sign in and identify you to other event members. |
| **Event data** | Event name, date, description, 6-character join code, member list | To run the shared album feature. |
| **Photos** | The image files you capture or import, plus metadata (filter applied, upload time, uploader id, dimensions, file type) | To display photos in the album to other event members. |
| **Comments & reactions** | Text comments and "likes" you add to photos, with your display name | To show them to other members of that event. |
| **Subscription status** | Whether your Premium subscription is active (received from Apple via our billing provider) | To unlock Premium features. We never receive or store your card details. |
| **Device & app diagnostics** | Crash logs, app version, OS version, anonymized error messages | To fix bugs. We do NOT use third-party analytics SDKs. |

We do not collect: precise location, contacts, advertising IDs,
microphone audio, browsing history, or biometric data.

We do not sell, rent, or trade your personal information to anyone.

## 2. How we store it

Account info, event data, and photos are stored in our backend (currently
Supabase, hosted on AWS). Photos are stored in a cloud object store and
served over HTTPS via long, randomly-generated (UUID) URLs that are not
guessable and are only surfaced to members of the relevant event inside
the App.

We retain your data for as long as your account exists. When you delete
your account in-app (Profile → Delete account), your profile, the events
you own, your event memberships, and the photos you uploaded are all
removed within minutes. Cached copies in CDN edges may persist briefly
before they expire.

## 3. Who can see your photos

Photos in an event are visible to every member of that event. Members are
people who joined using the event's 6-character code (which is only ever
shared by you or another member). Photos are **not** visible to anyone
outside the event, and we never publish them.

## 4. Permissions the App requests

- **Camera** — to take photos in the App.
- **Photo library** — only when you tap "From library" to import an existing photo, or "Save to library" on a photo you want to keep locally.

These are requested via standard iOS prompts. You can revoke either in
**Settings → SharedShots** at any time.

## 5. Your choices

You can:
- **Edit your display name** by signing out, deleting your account in-app, and signing up again with the same email. (We're shipping in-app name editing in a future update.)
- **Delete an event you own** — removes that event's data for everyone in it (Settings inside the event → 3-dot menu → Delete event).
- **Delete an individual photo you uploaded** — from the photo detail screen.
- **Block a user on your device** — their photos disappear from your gallery (PhotoDetail → More → Block).
- **Report a photo** — emails our support address with the photo identifiers (PhotoDetail → More → Report photo).
- **Delete your entire account** — Profile → Delete account. Irreversible.

## 6. Children

SharedShots is not directed to children under 13. If you believe a child
has provided us personal information, contact **support@sharedshots.app**
and we will delete it.

## 7. International transfers

The App can be used worldwide. Your data is processed in our backend
region (currently EU or US depending on your project configuration). By
using the App you consent to your data being transferred to and processed
in those regions.

## 8. Security

We use TLS for data in transit and at-rest encryption provided by our
storage provider. No system is perfectly secure; if we detect a breach
that affects your account, we will notify you by email within a
reasonable time.

## 9. Changes

We may update this Policy. Material changes will be announced in the App
or via email. Continued use after a change indicates acceptance.

## 10. Contact

Privacy questions: **support@sharedshots.app**
