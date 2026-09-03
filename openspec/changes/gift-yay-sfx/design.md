# Design: Gift yay SFX

## Approach

Extender la página estática existente. Un `<audio id="yay-audio">` apunta a `./audio/yay.mp3`. Un botón `#yay-button` (copy EN “Tap me!”, icono Material Symbols) vive como overlay sobre `#gift-section` y empieza oculto (`is-hidden`).

`welcome.js` expone `playYayOnce()`:

1. Reset `currentTime`, `volume = 0.6`
2. `audio.play()` — si cumple, oculta el botón
3. Si rechaza (autoplay policy), muestra el botón y registra `pointerdown` `{ once: true }` en `document` para un disparo

`renderPersonalized` llama `playYayOnce()` tras mostrar la imagen. `renderDefault` oculta el botón, pausa y resetea el audio.

## Constraints

- Un solo disparo por carga de vista de regalo; sin `loop`
- No hotlink: asset versionado en el repo
- UI product copy en inglés (kids)
- Autoplay con sonido no es fiable tras QR scan; el fallback de gesto es el camino esperado en iOS

## Files

| File | Action |
|------|--------|
| `public/audio/yay.mp3` | Create (copia Pixabay yay-6326) |
| `public/audio/ATTRIBUTION.md` | Create (procedencia / licencia) |
| `public/index.html` | Audio + botón overlay |
| `public/js/welcome.js` | `playYayOnce` + wire en render |
| `README.md` | Documentar audio y flujo |
