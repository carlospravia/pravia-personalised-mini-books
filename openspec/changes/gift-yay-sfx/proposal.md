# Proposal: Gift yay SFX

## Intent

Al abrir una vista de regalo personalizada (`?code=` válido), reproducir un efecto corto “Yay!” (~2 s) una sola vez. Si el navegador bloquea el autoplay (típico en iPhone tras escanear un QR), mostrar un control grande “Tap me!” para desbloquear con un gesto.

## Scope

### In Scope

- Asset local `public/audio/yay.mp3` (Pixabay `yay-6326`, licencia Content License)
- Markup `<audio>` + botón overlay en la sección de regalo
- Intento de autoplay + fallback por gesto en `welcome.js`
- Solo en vista personalizada; default / código inválido sin audio
- Nota de atribución y actualización de README

### Out of Scope

- Música de fondo o loop
- Audio en la página default
- Deploy a Firebase (salvo petición explícita posterior)
- Cambiar códigos QR o mensajes

## Capabilities

### New Capabilities

- `gift-yay-sfx`: disparo único de SFX en gift view con fallback de gesto

## Approach

Hospedar el MP3 en el repo. Tras renderizar el regalo, llamar `audio.play()`. Si la promise rechaza, mostrar “Tap me!” y reproducir en el primer `pointerdown`. Volumen moderado (0.6), sin loop.

## Rollback

Eliminar `public/audio/`, quitar markup/JS de audio y revertir el change OpenSpec; la página vuelve al comportamiento visual actual sin sonido.
