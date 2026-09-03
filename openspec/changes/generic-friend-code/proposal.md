# Proposal: Generic Friend code

## Intent

Añadir un décimo código genérico para mini-books cuyo destinatario aún no tiene nombre conocido. Al escanear el QR, la página muestra un saludo amigable a “Friend”, la imagen `happy-face.png` y copy infantil genérico. Incluir una hoja imprimible con 3 QRs idénticos para pegar en tres mini-books.

## Scope

### In Scope

- Entry `Friend` / `happy-face` en `config/codes.json` y `public/data/codes.json`
- QR PNG + hoja Letter 3-up (`print/generic-friend-qr-sheet.html`)
- Actualizar el generador para preservar el genérico sin meterlo en la hoja 3×3 de compañeros
- README + deploy Hosting

### Out of Scope

- Renombrar o regenerar los 9 códigos de compañeros
- CMS / edición en runtime
- i18n
- Regenerar el PDF de los 9 compañeros

## Capabilities

### New Capabilities

- `generic-friend-code`: código compartido Friend → mensaje genérico + happy-face; hoja 3-up imprimible

## Approach

Un solo código alfanumérico (mismo alfabeto que los compañeros). Tres stickers apuntan al mismo URL. La UI existente ya personaliza con `classmateName`; usar `Friend` evita cambios en `welcome.js`.

## Rollback

Quitar la entry Friend de ambos JSON, borrar QR/hoja genérica y revertir el change en el generador; redeploy.
