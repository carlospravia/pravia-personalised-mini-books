# Design: Personalized gift view

## Approach

Extend the existing static page. Gift frame markup (from `docs/design/code.html`) is present but hidden until a valid code resolves. `public/data/codes.json` includes `image` (relative path under `public/`) and `message`.

## Messages

Warm, kid-friendly English per classmate referencing their character. Editable later in `config/codes.json` + republish to `public/data/codes.json`.

## Files

| File | Action |
|------|--------|
| `public/images/*.png` | Create (copy from docs/assets) |
| `config/codes.json` | Update image + message |
| `public/data/codes.json` | Update runtime payload |
| `public/index.html` | Gift frame + default/personal sections |
| `public/js/welcome.js` | Branch renderDefault vs renderPersonalized |
| `scripts/generate-codes-and-qrs.mjs` | Preserve message; set image path on sync |
