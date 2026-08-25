# STANDARD — Convenciones del sitio estático

> Convenciones light para HTML/CSS/JS. Sin SPA ni toolchain de build.

## Stack

| Capa | Elección |
|------|----------|
| Markup | HTML semántico (`main`, `header`, `img` con `alt`, etc.) |
| Estilos | Tailwind CSS vía CDN (como en `docs/design/code.html`) |
| Script | JavaScript vanilla (sin frameworks) |
| Tipografía | Quicksand / Nunito (Google Fonts), alineado al design system |
| Hosting | Firebase Hosting; raíz pública futura: `public/` |

**MUST NOT** exigir SPA, bundler, TypeScript ni npm build para v1.

## Idiomas

| Ámbito | Idioma |
|--------|--------|
| Product UI (mensajes fijos para niños) | English |
| Identifiers (variables, IDs, nombres de archivo de código) | English |
| Documentación del repo | Español (`es`) |

Sin i18n dinámico en v1: el contenido visible son mensajes fijos del operador.

## Design system y assets fuente

- **Design system / template:** `docs/design/` (`DESIGN.md`, `code.html`, `screen.png`)
- **Assets fuente (SoT):** `docs/assets/` — 9 PNG con patrón `{character}-{classmate}.png`
- La copia a `public/` para Hosting ocurre en un change posterior; Phase 0 no copia assets

## Config de personalización

Stub de schema en `config/codes.example.json`:

```json
{ "code", "classmateName", "character", "image", "message" }
```

- `code`: placeholder en Phase 0 (`TODO-01` … `TODO-09`); códigos reales en un change posterior
- `classmateName` / `character`: derivados del nombre de archivo
- `image`: ruta relativa futura bajo `public/` (vacía hasta copiar assets)
- `message`: texto EN de bienvenida (vacío hasta contenido final)

## Principios

1. Una sola página mobile-first; sin CTA ni formularios en v1
2. Config versionada en el repo; sin backend
3. Explicit is better than implicit — paths y schema documentados
