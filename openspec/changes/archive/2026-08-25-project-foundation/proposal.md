# Proposal: Project Foundation (Phase 0)

## Intent

Completar la base de repo restante tras bootstrap SIFTIA: layout canónico, README, `.gitignore` y `docs/STANDARD.md`. Documentar assets/diseño ya provistos. Listo para Phase 1 — sin personalización ni deploy.

## Scope

### In Scope
- `README.md` — propósito, serve local (placeholder), layout
- `.gitignore` — secrets, `node_modules`, cache Firebase, OS junk
- `docs/STANDARD.md` — convenciones light HTML/CSS/JS
- `public/` — Firebase Hosting public root (placeholder)
- `config/` — stub mapeo código→mensaje+imagen (sin códigos reales)
- Documentar `docs/design/` y `docs/assets/` (9 PNG fuente)

### Out of Scope
- Welcome page / code lookup
- `firebase.json` / deploy
- Copiar assets a `public/`
- Generar QRs
- Query vs path (Phase 1)
- Códigos o mensajes finales

## Capabilities

### New Capabilities
- `repo-foundation`: layout del repo, README, `.gitignore`, STANDARD para sitio estático; documenta design system y assets fuente

### Modified Capabilities
- None

## Approach

1. Crear `public/` y `config/` con placeholders (`.gitkeep` / stub vacío).
2. README (ES): propósito, servir `public/` localmente, árbol de carpetas.
3. `.gitignore` alineado a Hosting + Node opcional + secrets.
4. `docs/STANDARD.md`: HTML semántico, Tailwind CDN según diseño, JS vanilla; UI EN (niños); identifiers EN.
5. Documentar: `docs/design/` = design system + template; `docs/assets/` = `{character}-{classmate}.png`.

**Inputs (documentar; no implementar):** 9 PNG en `docs/assets/` — ajolote-mateo, caballero-hector, caballo-emma, capibara-celeste, chiwuawua-cata, puccini-tessa, pug-felipe, squishi-barrantes, teddy-samantha. Diseño: `docs/design/DESIGN.md`, `code.html` (lang=en, Quicksand/Nunito, Tailwind CDN), `screen.png`.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `README.md` | New | Propósito + serve + layout |
| `.gitignore` | New | Secrets / caches / OS |
| `docs/STANDARD.md` | New | Convenciones HTML/CSS/JS |
| `public/`, `config/` | New | Placeholders |
| `openspec/ACTIVE_CHANGE` | Modified | `project-foundation` |
| `docs/design/`, `docs/assets/` | Document only | Ya existen |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Confundir `docs/assets/` con hosting | Med | README: fuente vs copia futura a `public/` |
| Stub `config/` como códigos reales | Low | Stub vacío/comentado |
| Scope creep a welcome page | Med | Out of scope; Phase 1 aparte |

## Rollback Plan

Revertir commits del change; borrar solo `README.md`, `.gitignore`, `docs/STANDARD.md`, `public/`, `config/` placeholder; conservar bootstrap SIFTIA; limpiar `ACTIVE_CHANGE`.

## Dependencies

- Bootstrap SIFTIA hecho; assets/diseño ya en `docs/`
- Sin Firebase project ID para este change

## Success Criteria

- [ ] README: propósito, serve local, layout documentado
- [ ] `.gitignore` cubre secrets, node_modules, Firebase cache, OS
- [ ] `docs/STANDARD.md` light presente
- [ ] `public/` y `config/` existen (placeholders OK)
- [ ] Capability `repo-foundation` lista para sdd-spec
- [ ] Sin lookup, deploy ni copia de assets
