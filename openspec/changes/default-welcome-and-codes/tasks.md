# Tasks: Default welcome page and classmate codes/QRs

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~250–400 (+ binary QR PNGs) |
| 400-line budget risk | Medium (binaries) |
| Chained PRs recommended | No |
| Delivery strategy | single-pr |
| Decision needed before apply | No |

## Phase 1: Codes + QRs

- [x] 1.1 Add `package.json` with `qrcode` and script `generate:codes-qrs`
- [x] 1.2 Implement `scripts/generate-codes-and-qrs.mjs` (9 codes, write config + public/data + print/qrs + sheet)
- [x] 1.3 Run generator; commit `config/codes.json`, `public/data/codes.json`, `print/`

## Phase 2: Default page + Hosting

- [x] 2.1 Create `public/index.html` default EN welcome (no image) from design system
- [x] 2.2 Create `public/js/welcome.js` (`?code=` parse; invalid/missing → default; no code leak)
- [x] 2.3 Add `firebase.json` hosting public dir
- [x] 2.4 Update README, PROJECT-INTRO (TBD-PARAM-SHAPE), FIREBASE guide, ROADMAP progress

## Phase 3: Verify

- [x] 3.1 Manual smoke: `/`, `/?code=nope`, `/?code=<valid>` all show default without image; QR sheet opens; 9 codes unique
