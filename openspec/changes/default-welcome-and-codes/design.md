# Design: Default welcome page and classmate codes/QRs

## Technical Approach

Static page in `public/` adapted from `docs/design/code.html` (Tailwind CDN, Quicksand/Nunito, playful stars). Default state removes the gift image frame and shows EN copy about scanning the Mini-Book QR.

Codes: one-time generation via Node script → `config/codes.json` (SoT) + copy to `public/data/codes.json`. QRs via `qrcode` package → `print/qrs/{character}-{classmate}.png` + `print/qr-sheet.html` (CSS grid, US Letter).

## Architecture Decisions

### Decision: Query param `?code=`
- **Choice**: Query over path (`/c/:code`)
- **Why**: Zero Hosting rewrite complexity for v1 static files

### Decision: Base URL `.web.app`
- **Choice**: `https://personalised-mini-books.web.app`
- **Why**: Default Firebase Hosting URL; regenerable if custom domain arrives

### Decision: Alphanumeric codes
- **Choice**: 8 chars from `ABCDEFGHJKLMNPQRSTUVWXYZ23456789` (no 0/O/1/I/L)
- **Why**: Easy to type if needed; opaque enough for finite set of 9

### Decision: Default-only UI this change
- **Choice**: Missing/invalid code → default page; valid code → same default (no image yet)
- **Why**: User asked for default version first; personalization is next change
- **Note**: Client still loads codes map so invalid detection works without leaking names

## File Changes

| File | Action |
|------|--------|
| `public/index.html` | Create — default welcome |
| `public/js/welcome.js` | Create — read `code`, show default |
| `public/data/codes.json` | Create — runtime copy |
| `config/codes.json` | Create — SoT |
| `scripts/generate-codes-and-qrs.mjs` | Create |
| `print/qrs/*.png` | Create |
| `print/qr-sheet.html` | Create |
| `firebase.json` | Create |
| `package.json` | Create — script + qrcode dep for generation only |

## Testing Strategy

Manual: open `public/` via `python3 -m http.server`; visit `/`, `/?code=bad`, `/?code=VALID`. Inspect QR sheet in browser print preview.
