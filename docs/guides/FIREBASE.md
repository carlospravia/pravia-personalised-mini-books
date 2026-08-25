# Firebase — Pravia Personalised Mini Books

## Project

| Field | Value |
|-------|-------|
| **projectId** | `personalised-mini-books` |
| **Hosting** | Target product deploy (Phase 4) |
| **CLI pointer** | [`.firebaserc`](../../.firebaserc) |

## Static Hosting note

v1 is a **static** site on Firebase Hosting. The Firebase **web SDK** (`initializeApp` / `apiKey` / `appId`) is **not required** to serve HTML/CSS/JS from Hosting.

Do **not** commit client SDK config blobs into the repo unless a future change explicitly needs Auth, Firestore, or other client SDKs. Prefer Firebase Console + CLI for Hosting deploy.

## Auth domains (reference only)

- `personalised-mini-books.firebaseapp.com`
- Storage bucket name (unused in v1): `personalised-mini-books.firebasestorage.app`

## Next

- Add `firebase.json` (`public` → `public/`) in the Hosting skeleton change (Roadmap Phase 2+)
- Deploy with `firebase deploy --only hosting` once the page exists
