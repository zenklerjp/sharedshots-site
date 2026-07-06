# SharedShots Privacy Policy

_Last updated: 2026-07-06_

This Privacy Policy describes how the SharedShots mobile application (the
"App") collects, uses, and shares information. In this Policy, "the user"
means the person using the App, and "the SharedShots team" means the operator
and provider of SharedShots. By using the App the user agrees to the
practices described here.

Questions can be emailed to **sharedshots.support@gmail.com**.

---

## 1. What is collected

The SharedShots team collects the minimum information needed to make
shared-event photo albums work.

| Category | Examples | Why it is needed |
|---|---|---|
| **Account info** | Email address, display name, hashed password | To let the user sign in and identify them to other event members. |
| **Event data** | Event name, date, description, 6-character join code, member list, join requests | To run the shared album feature, including host approval of new members. |
| **Photos** | The image files the user captures or imports, plus metadata (filter applied, upload time, uploader id, dimensions, file type) | To display photos in the album to other event members. |
| **Comments & reactions** | Text comments and "likes" the user adds to photos, with their display name | To show them to other members of that event. |
| **Purchase status** | Whether a subscription is active or an Event Pass was bought (received from Apple via the billing provider) | To unlock what the user bought. Card details are never received or stored. |
| **Device & app diagnostics** | Crash logs, app version, OS version, anonymized error messages | To fix bugs. No third-party analytics SDKs are used. |

The App does not collect: precise location, contacts, advertising IDs,
microphone audio, browsing history, or biometric data.

The SharedShots team does not sell, rent, or trade personal information to
anyone.

## 2. How data is handled

Account info, event data, and photos are processed in the App's backend
(currently Supabase, hosted on AWS). Photos are served over HTTPS via long,
randomly generated (UUID) URLs that are not guessable and are only surfaced
to members of the relevant event inside the App.

Data is retained for as long as the account exists. When the user deletes
their account in-app (Profile, then Delete account), their profile, the
events they own, their event memberships, and the photos they uploaded are
all removed within minutes. Cached copies at CDN edges may persist briefly
before they expire.

**SharedShots is a sharing service, not a storage or backup service.** No
guarantee is made that content will be retained or remain retrievable, and
the user should keep their own original copies of any photos that matter to
them.

## 3. Who can see the user's photos

Photos in an event are visible to every member of that event. Members are
people who joined using the event's 6-character code (which is only ever
shared by the user or another member). The host can require approval before
someone joins, and can remove a member at any time. Photos are **not**
visible to anyone outside the event, and the SharedShots team never publishes
them.

Because the App lets members save photos to their own device, any member of
an event can download and keep a copy of the photos shared in it. Copies that
a member has saved to their own device are outside the SharedShots team's
control and remain with that member even if the original is later deleted.
Users should only share content they are comfortable with the other members
of their event keeping.

## 4. Permissions the App requests

- **Camera:** to take photos in the App.
- **Photo library:** only when the user taps "From library" to import an
  existing photo, or "Save to library" on a photo they want to keep locally.

These are requested via standard iOS prompts and can be revoked at any time
in **Settings, then SharedShots**.

## 5. The user's choices

The user can:

- **Edit their display name** in the App: Profile, then tap the name. Photos
  already shared keep the name they were posted under.
- **Turn join approval on or off** for an album they host (Edit event).
- **Remove a member** from an album they host (Members list).
- **Delete an event they own:** removes that event's data for everyone in it.
- **Delete an individual photo they uploaded:** from the photo detail screen.
- **Block a user on their device:** that person's photos disappear from the
  user's gallery (PhotoDetail, More, then Block).
- **Report a photo:** emails the support address with the photo identifiers
  (PhotoDetail, More, then Report photo).
- **Delete their entire account:** Profile, then Delete account.
  Irreversible.

## 6. Children

SharedShots is not directed to children under 13. Anyone who believes a child
has provided personal information can contact
**sharedshots.support@gmail.com** and it will be deleted.

## 7. International transfers

The App can be used worldwide. Data is processed in the backend region
(currently the EU or US). By using the App the user consents to their data
being transferred to and processed in those regions.

## 8. Security

Data in transit is protected with TLS, and the storage provider applies
at-rest encryption. No system is perfectly secure, and no guarantee of
security is made; if a breach affecting the user's account is detected, the
SharedShots team will notify the user by email within a reasonable time.

## 9. Changes

This Policy may be updated. Material changes will be announced in the App or
by email. Continued use after a change indicates acceptance.

## 10. Contact

Privacy questions: **sharedshots.support@gmail.com**
