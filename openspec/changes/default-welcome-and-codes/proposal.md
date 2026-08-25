# Proposal: Default welcome page and classmate codes/QRs

## Intent

Entregar la página default (inglés, sin imagen) que invita a escanear el QR del Mini-Book, fijar el esquema `?code=`, generar 9 códigos alfanuméricos mapeados a los compañeros, y producir QRs hacia la URL de Firebase Hosting.

## Scope

### In Scope
- Página estática en `public/` basada en `docs/design/` — estado default: welcome EN + instrucción de escanear QR; **sin imagen**
- Parámetro de URL: query `?code=`
- Generar 9 códigos alfanuméricos (estables una vez escritos en config)
- Mapear códigos → compañeros/character en `config/codes.json` (+ copia servible en `public/`)
- Generar PNGs de QR + hoja imprimible (carta) apuntando a `https://personalised-mini-books.web.app/?code={CODE}`
- `firebase.json` mínimo (`public` → `public/`)

### Out of Scope
- Vista personalizada con imagen/mensaje por código (change posterior)
- Deploy live (puede ser follow-up)
- Auth, analytics, CMS
- Reimpresión física (solo artefactos digitales de QR)

## Capabilities

### New Capabilities
- `default-welcome-page`: página default EN sin imagen; instrucción de escanear QR
- `classmate-codes-qrs`: códigos alfanuméricos, mapeo en config, generación de QRs y hoja print

### Modified Capabilities
- (none)

## Approach

Sitio estático mobile-first desde el template de diseño. Códigos generados con script reproducible; QRs con librería local. Config SoT en `config/`; runtime lee `public/data/codes.json`.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `public/` | New | `index.html`, assets CSS/JS, data |
| `config/codes.json` | New | Mapeo real (reemplaza uso de example para runtime) |
| `print/` | New | QRs + sheet |
| `scripts/` | New | Generación códigos/QRs |
| `firebase.json` | New | Hosting root |
| `docs/` | Modified | Cerrar TBD-PARAM-SHAPE; Firebase URL |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| URL cambia tras custom domain | Med | Documentar base URL; regenerar QRs con script |
| Códigos débiles | Low | Alfanumérico sin caracteres ambiguos; longitud ≥8 |
| Scope creep a personalización | Med | Spec default-only sin imagen |

## Rollback Plan

Revertir change; borrar `public/*` de producto, `print/`, `config/codes.json`; restaurar placeholders.
