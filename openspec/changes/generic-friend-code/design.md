# Design: Generic Friend code

## Approach

Extender el mapa de códigos con una décima entry:

| Field | Value |
|-------|--------|
| classmateName | Friend |
| character | happy-face |
| image | images/happy-face.png |
| message | Hi Friend! Yay! Big hugs from your happy smile. This gift is just for you! |

`scripts/generate-codes-and-qrs.mjs` incluye Friend en `CLASSMATES`. Al escribir `print/qr-sheet.html`, filtra `character !== "happy-face"`. Emite `print/generic-friend-qr-sheet.html` con tres tarjetas idénticas y `print/qrs/happy-face-friend.png`.

No se modifica `welcome.js`: el headline “Hi Friend!” y el bold del nombre en el mensaje funcionan con el render actual.

## Files

| File | Action |
|------|--------|
| `config/codes.json` | Add Friend entry |
| `public/data/codes.json` | Add Friend entry (runtime) |
| `public/images/happy-face.png` | Already present (operator) |
| `scripts/generate-codes-and-qrs.mjs` | CLASSMATES + sheets |
| `print/qrs/happy-face-friend.png` | Create |
| `print/generic-friend-qr-sheet.html` | Create (3-up) |
| `README.md` | Document Friend + hoja |
