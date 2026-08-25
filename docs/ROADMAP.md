# Strategic Implementation Roadmap: Pravia Personalised Mini Books

> Página móvil única que muestra un mensaje de bienvenida y una imagen personalizados según un código de QR
> **Generated**: 2026-08-25 | **Source**: docs/PROJECT-INTRO.md | **Version**: 1.0
> **Complexity Tier**: Simple
> **Development Model**: Single Sprint (1–2 iteraciones cortas)

---

## Overview

| Field | Value |
|-------|-------|
| **Primary Value** | Que cada niño, al escanear su QR, vea de inmediato su mensaje e imagen — sin fricción |
| **v1 Target** | Sitio estático en Firebase Hosting: 9 códigos → mensaje + imagen; fallback amable; UI mobile-first |
| **Repository** | `pravia-personalised-mini-books` — Topics: firebase-hosting, static-site, kids, qr |
| **Working Directory** | Repo root; app estática (p. ej. `public/` o `src/` — a fijar en Phase 1) |
| **Key Constraint** | Sin backend; 9 códigos fijos; proyecto Firebase existente; QRs ya impresos |
| **Sprint Cadence** | Single sprint / demo rápido |

---

## Included Activities

### Critical (All Present)
C1 Project Identity · C2 Git/GitHub Strategy · C3 Directory Structure · C4 Purpose & Actors · C5 Success Metrics · C6 Specifications · C7 Architecture · C8 Technical Design · C9 Security (Incremental + Final) · C10 Documentation · C11 Prioritization

### Complementary (Activated)
- **Frontend / UI** — producto es una página móvil (aspect Standard)
- **Style Guide (Light)** — derivado del mockup del operador
- **Prototypes / Mockups (Light)** — diseño base provisto
- **Cloud Strategy (Light)** — Firebase Hosting únicamente
- **Test Strategy (Light)** — smoke manual de 9 códigos + fallback
- **Code Quality / Error Handling (Light)** — STANDARD.md mínimo + fallback UI
- **Commit Conventions** — Conventional Commits + commitlint scaffold

### Deferred / Not Applicable
- Microservices, API, Multi-client, AI features — fuera de scope
- CI/CD profundo, IaC, Terraform — deploy CLI/manual suficiente en v1
- Observability / Logging / Backup — sitio estático sin datos runtime
- Stitch Design Integration — PROJECT-INTRO = None; mockup humano
- Dashboard, Runbook, Changelog/Release Engineering — Won't Have v1
- Auth / CMS / Analytics — explícitamente out of scope

---

## Parallel Tracks Overview

```
Phase 0 (Foundation restante)
    │
    ▼
Phase 1 (Specs & Architecture)
    │
    ├── Phase 2 (Core page + code lookup) ──┐
    │                                        ├── Phase 4 (Verify + Deploy)
    └── Phase 3B (Incremental docs) ─────────┘
              ▲
Phase 3 (Design polish + assets) ────────────┘
   [Depends on Phase 2; puede solaparse con 3B]
```

> Phase 3B puede correr en paralelo con Phase 3 tras Phase 2.
> Phase 0 de gobernanza (PROJECT-INTRO, guardrails, openspec) ya está **hecho en bootstrap**; Phase 0 del roadmap cubre lo restante.

---

## Progress Overview

| Phase | Status | Sprint | Key Milestone |
|-------|--------|--------|---------------|
| Phase 0 | Complete | Day 1 | M0 ✓ — README + layout + STANDARD; gobernanza bootstrap ✓ |
| Phase 1 | In Progress | Day 1–2 | M1 — Specs + `?code=` accepted |
| Phase 2 | In Progress | Day 2–3 | M2 — Default page + codes/QRs (personalization image deferred) |
| Phase 3 | Not Started | Day 3–4 | M3 — Diseño/assets integrados |
| Phase 3B | Not Started | Day 3–4 | M3b — README de uso + deploy notes (paralelo) |
| Phase 4 | Not Started | Day 4–5 | M4 — Smoke móvil + Hosting live |

**Status Values**: `Not Started` | `In Progress` | `Complete` | `Blocked`

> **Living Document**: actualizar Progress Overview al avanzar. Detalle de tareas en `openspec/changes/`.

---

## Phase 0 — Complete remaining foundation

**Status**: Complete
**Goal**: Repo listo para el primer change de producto (README, layout, STANDARD); gobernanza SIFTIA ya iniciada.
**Milestone M0**: README + `.gitignore` + `docs/STANDARD.md` (light) + directorio de app estático acordado — **✓ Complete**.
**Effort**: S | **Sprint**: Day 1
**Depends on**: none
**Blocks**: Phase 1
**Parallelism Score**: 0/5
**Coordination Overhead**: Low
**SDD Change Mapping**: `/sdd-new project-foundation`

| Deliverable | Activity | MoSCoW | Notes |
|-------------|----------|--------|-------|
| Gobernanza SIFTIA (ya hecha) | C1, C2, C4, C5 | Must Have | PROJECT-INTRO, REPOSITORY-RULES, guardrails, AGENTS, openspec |
| `git:` en guardrails.yaml | C2 | Must Have | github-flow + squash — **verificado ✓** |
| README + `.gitignore` | C1, C3, C10 | Must Have | **Hecho** |
| `docs/STANDARD.md` (light) | C8, DEV | Should Have | Convenciones HTML/CSS/JS mínimas — **Hecho** |
| Layout de directorios | C3 | Must Have | `public/`, `config/`, `docs/assets/` — **Hecho** |

**Security checkpoint**: No secrets en repo; `.gitignore` excluye `.env`, tokens Firebase locales.
**Documentation generated**: README draft, STANDARD.md; gobernanza ya en `docs/`.

**Validation Gate**:
- [x] `docs/security/guardrails.yaml` tiene `git.branching_model`, `merge_policy`, `protected_branches`, `branch_naming_templates`
- [x] README describe propósito y cómo correr localmente (placeholder OK)
- [x] Estructura de directorios documentada en README o STANDARD.md

**Rollback Plan**:
1. Revertir commits del change `project-foundation`
2. Eliminar archivos creados solo en esa phase (`README.md`, `STANDARD.md`, dirs vacíos)
3. Conservar artefactos de bootstrap SIFTIA
4. Documentar motivo en issue/nota
5. Re-planificar Phase 0

**Recommended action after milestone**: `/sdd-new welcome-page-specs` (Phase 1)

---

## Phase 1 — Write specs and architecture

**Status**: Not Started
**Goal**: Contrato observable de comportamiento (código → mensaje/imagen) y arquitectura de 1 página.
**Milestone M1**: Specs OpenSpec + diagrama Mermaid + decisión TBD-PARAM-SHAPE.
**Effort**: S | **Sprint**: Day 1–2
**Depends on**: Phase 0
**Blocks**: Phase 2
**Parallelism Score**: 3/5
**Coordination Overhead**: Low
**SDD Change Mapping**: `/sdd-new welcome-page-specs`

| Deliverable | Activity | MoSCoW | Notes |
|-------------|----------|--------|-------|
| Specs Given/When/Then (código válido, inválido, ausente) | C6 | Must Have | RFC 2119 |
| Arquitectura 1-pager + data flow | C7 | Must Have | Mermaid |
| Decisión query vs path | C8, DEC | Must Have | Cierra TBD-PARAM-SHAPE |
| Schema de config (9 entradas) | C8 | Must Have | JSON o YAML explícito |

**Security checkpoint**: Spec MUST exigir que errores no listen códigos válidos.
**Documentation generated**: `openspec/changes/.../specs/`, `design.md` light, decisión en `docs/decisions/`.

**Validation Gate**:
- [ ] Specs revisadas y aceptadas
- [ ] Forma del parámetro documentada y alineada con URLs de QR (o nota de riesgo si QRs pendientes de reimpresión)
- [ ] Schema de config con exactamente 9 slots

**Rollback Plan**:
1. Archivar o borrar el change OpenSpec incompleto
2. Limpiar `ACTIVE_CHANGE`
3. Revertir decisiones Accepted prematuras
4. Notificar
5. Reabrir con scope más chico

**Recommended action after milestone**: `/sdd-new core-welcome-page` (Phase 2)

---

## Phase 2 — Build core welcome page and code lookup

**Status**: Not Started
**Goal**: Demo local: URL con código muestra mensaje + imagen; inválido/ausente → fallback amable.
**Milestone M2**: Página estática funcional con config stub (placeholders OK si assets aún no llegan).
**Effort**: M | **Sprint**: Day 2–3
**Depends on**: Phase 1
**Blocks**: Phase 3, Phase 3B, Phase 4
**Parallelism Score**: 0/5
**Coordination Overhead**: Medium
**SDD Change Mapping**: `/sdd-new core-welcome-page`

| Deliverable | Activity | MoSCoW | Notes |
|-------------|----------|--------|-------|
| Página única mobile-first (mensaje + imagen, sin CTA) | UX, C8 | Must Have | |
| Lookup config versionada | C8 | Must Have | DEC-TECH-002 |
| Fallback inválido/ausente | C9 partial | Must Have | Sin filtrar códigos |
| Firebase Hosting config skeleton | Cloud Light | Should Have | `firebase.json` + `.firebaserc` placeholder |

**Security checkpoint**: Partial — revisar que el cliente no exponga el mapa completo en mensajes de error; assets públicos son esperados.
**Documentation generated**: Comentarios mínimos; actualizar README con cómo probar códigos.

**Validation Gate**:
- [ ] 9 códigos stub resuelven localmente
- [ ] Sin código / código basura → UI amable
- [ ] Sin CTA / formularios / navegación extra

**Rollback Plan**:
1. Revertir change en branch
2. Quitar `firebase.json` si rompe algo
3. Restaurar config stub previo
4. Notificar
5. Re-especificar si el fallo fue de contrato

**Recommended action after milestone**: Phase 3 + Phase 3B en paralelo (si hay assets)

---

## Phase 3 — Integrate design and provided assets

**Status**: Not Started
**Goal**: UI alineada al diseño base; nombres e imágenes reales de los 9 compañeros.
**Milestone M3**: Contenido real renderizado; tipografía/colores del mockup.
**Effort**: M | **Sprint**: Day 3–4
**Depends on**: Phase 2 (+ inputs: nombres, imágenes, diseño)
**Blocks**: Phase 4
**Parallelism Score**: 3/5 (paralelo con 3B)
**Coordination Overhead**: Low
**SDD Change Mapping**: `/sdd-new design-and-assets`

| Deliverable | Activity | MoSCoW | Notes |
|-------------|----------|--------|-------|
| Integrar mockup / STYLE light | UX | Must Have | |
| Assets de imágenes + mensajes finales | C8 | Must Have | Bloqueado por TBD-ASSETS |
| Optimización móvil básica | UX | Should Have | tamaños, contraste |

**Security checkpoint**: Nombres de niños solo en mensajes destinados a ellos; no analytics.
**Documentation generated**: Nota de provenance de assets en README o `docs/`.

**Validation Gate**:
- [ ] Los 9 mensajes/imágenes reales verificados visualmente en viewport móvil
- [ ] Sin CTA añadidos por error

**Rollback Plan**:
1. Revertir CSS/assets del change
2. Restaurar placeholders
3. Mantener lookup intacto
4. Notificar operador
5. Re-entregar assets corregidos

**Recommended action after milestone**: Phase 4 cuando 3B también listo

---

## Phase 3B — Write incremental docs

**Status**: Not Started
**Goal**: Documentación mínima para operar y desplegar.
**Milestone M3b**: README completo (local + deploy) + notas Firebase.
**Effort**: S | **Sprint**: Day 3–4
**Depends on**: Phase 2 (idealmente); puede empezar con stubs tras Phase 1
**Blocks**: Phase 4 (parcial — docs de deploy útiles)
**Parallelism Score**: 5/5
**Coordination Overhead**: Low
**SDD Change Mapping**: `/sdd-new incremental-docs`

| Deliverable | Activity | MoSCoW | Notes |
|-------------|----------|--------|-------|
| README: propósito, códigos de prueba, deploy | C10 | Must Have | |
| Notas Firebase project ID (cuando exista) | C10 | Must Have | TBD-FIREBASE-ID |
| Actualizar RTM-INDEX si hay change activo | GOVERN | Could Have | |

**Security checkpoint**: No documentar secretos; `.firebaserc` puede tener project ID público.
**Documentation generated**: README, posiblemente `docs/guides/DEPLOY.md` light.

**Validation Gate**:
- [ ] Un tercero puede seguir README para servir localmente
- [ ] Pasos de deploy listados

**Rollback Plan**:
1. Revertir docs del change
2. Restaurar README anterior
3. Notificar
4. —
5. —

**Recommended action after milestone**: Continuar Phase 4

---

## Phase 4 — Verify on mobile and ship to Firebase Hosting

**Status**: Not Started
**Goal**: v1 live en el proyecto Firebase provisto; smoke de los 9 códigos + fallback.
**Milestone M4**: URL pública Hosting; checklist de verificación PASS.
**Effort**: S | **Sprint**: Day 4–5
**Depends on**: Phase 3 + Phase 3B (+ TBD-FIREBASE-ID)
**Blocks**: none
**Parallelism Score**: 0/5
**Coordination Overhead**: Low
**SDD Change Mapping**: `/sdd-new ship-v1`

| Deliverable | Activity | MoSCoW | Notes |
|-------------|----------|--------|-------|
| Smoke: 9 códigos + ausente/inválido (móvil) | C5, Test Light | Must Have | |
| Deploy Firebase Hosting | Cloud Light | Must Have | |
| Security gate final (light) | C9 | Must Have | `docs/security/final-review.md` breve |
| Archive OpenSpec change(s) | GOVERN | Should Have | |

**Security checkpoint**: Final gate — sin secretos en cliente; errores no enumeran códigos; HTTPS Hosting.
**Documentation generated**: `docs/security/final-review.md`; URL en README.

**Validation Gate**:
- [ ] Deploy exitoso al proyecto Firebase indicado
- [ ] Los 9 QRs/URLs resuelven en dispositivo móvil real o emulación
- [ ] Fallback verificado
- [ ] Security light review documentada

**Rollback Plan**:
1. `firebase hosting:clone` / redeploy versión anterior si existe
2. O revertir release y redeploy desde git tag previo
3. Actualizar README con estado
4. Notificar operador
5. Abrir hotfix change

**Recommended action after milestone**: Celebrar v1; ítems deferred → BACKLOG

---

## Security Plan

| Phase | Scope | Type | Output |
|-------|-------|------|--------|
| Phase 2 | Fallback no filtra códigos; config solo en repo | Partial | Notas en verify-report / design |
| Phase 3 | Contenido infantil; sin tracking | Partial | Checklist en change |
| Phase 4 / Pre-launch | Hosting, secrets, superficie pública | Final gate | `docs/security/final-review.md` |

---

## Test Strategy

| Phase | Test Type | Coverage Target | Tool / Approach |
|-------|-----------|----------------|-----------------|
| Phase 0 | Estructura / lint opcional | N/A | Manual |
| Phase 2 | Smoke lookup | 9 códigos + 2 negativos | Browser / Playwright MCP |
| Phase 3 | Visual móvil | Viewports estrechos | Browser tools |
| Phase 4 | E2E smoke + deploy | Full v1 paths | Hosting URL + móvil |

Strict TDD: **disabled** hasta existir test runner (`openspec/config.yaml`).

---

## Documentation Plan (Incremental)

| Phase | Document | Status |
|-------|----------|--------|
| Bootstrap | PROJECT-INTRO, REPOSITORY-RULES, RTM, decisions, guardrails, AGENTS | Created |
| Phase 0 | README, STANDARD.md | Created |
| Phase 1 | OpenSpec specs + architecture | Pending |
| Phase 2–3 | README how-to-test | Pending |
| Phase 3B–4 | Deploy notes, final-review | Pending |

---

## Deferred (Won't Have v1)

| Item | Reason Deferred | Target |
|------|----------------|--------|
| Generación/impresión de QRs | Ya existen; out of scope | Future / offline |
| Auth, CMS, analytics | Out of scope explícito | Future |
| Firestore / Remote Config | DEC-TECH-002 | Future si códigos dejan de ser fijos |
| CI/CD deploy automático | Light; CLI suficiente | Future |
| Stitch design system | Aspect None | Future si se desea |
| PWA / multi-página / i18n | Out of scope | Future |
| Agent Operating Policy formal | Opt-out en bootstrap standard | Future si se endurece perfil |

---

## Milestone Map

```
Pravia Personalised Mini Books — Single Sprint

M0 ──── M1 ──── M2 ──── M3 (+M3b) ──── M4
│       │       │       │              │
Ph0     Ph1     Ph2     Ph3/3B         Ph4
S       S       M       M/S            S
Day1    D1-2    D2-3    D3-4           D4-5
```

**Status Legend**: `✓` Complete | `▶` In Progress | `⊘` Blocked | `○` Not Started

> Actualizar marcadores: `M0 ✓` cuando Phase 0 esté Complete.

---

## Next Immediate Actions

1. **Phase 0 Complete** — foundation scaffold + docs listos (`project-foundation`)
2. **Specs + arquitectura** — cerrar TBD-PARAM-SHAPE → `/sdd-new welcome-page-specs`
3. **Proveer inputs restantes** (humano) — códigos/mensajes reales, Firebase project ID; assets/diseño ya en `docs/`

---

## Golden Rules

- **Explicit is better than implicit** — todo comportamiento y config declarados
- Usar `docs/REPOSITORY-RULES.md` como contrato operativo
- Mantener `AGENTS.md` liviano
- `docs/` es la fuente de verdad
- Simplicidad sobre complejidad; sitio estático primero
- Seguridad primero: fallback amable; no filtrar códigos; sin secrets en cliente
- Skills modulares SIFTIA; no modificar skills externos
- **Language policy**: documentación en español; código/commits en inglés

---

## Traceability

| Roadmap Item | Source in PROJECT-INTRO | Priority |
|---|---|---|
| Página única mensaje + imagen | §5 In Scope | P1 |
| 9 códigos config en repo | §5 + DEC-TECH-002 | P1 |
| Fallback inválido/ausente | §5 In Scope | P1 |
| Firebase Hosting | §3 + DEC-TECH-001 | P1 |
| Diseño base del operador | §5 In Scope | P1 |
| Sin CTA / auth / CMS | §5 Out of Scope | P1 (boundary) |
| Frontend Standard | §6 Group D | P1 |
| Security/Tests/Git Light | §6 | P2 |
| Stitch / CI profundo | Deferred | P3 |
