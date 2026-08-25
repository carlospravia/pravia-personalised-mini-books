# Proposal: Personalized gift view

## Intent

When a visitor opens a valid `?code=`, show their personalized English welcome message and classmate gift image. Missing/invalid codes keep the default page (no image, no code leak).

## Scope

### In Scope
- Copy 9 PNGs to `public/images/`
- Fill `image` + `message` in `config/codes.json` and publish them in `public/data/codes.json`
- Update `public/index.html` + `welcome.js` for personalized vs default states
- Deploy-ready static assets

### Out of Scope
- Editing messages via CMS
- Changing QR codes/URLs
- Auth/analytics

## Capabilities

### New Capabilities
- `personalized-gift`: valid code → message + image; invalid/missing → default

## Approach

Client loads `public/data/codes.json`, matches `code`, renders gift frame from design system. Messages are fixed English copy per classmate.
