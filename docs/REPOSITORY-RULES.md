# Repository Rules — Pravia Personalised Mini Books

> Contrato operativo de este repositorio. Los agentes AI MUST leer este archivo al inicio de cada sesión.

---

## Core Philosophy

> **Explicit is better than implicit**
>
> This principle governs ALL decisions in this workflow. Every behavior, configuration, dependency, and decision MUST be declared and visible. No hidden magic, no implicit conventions, no "it just works" without documentation.
>
> - Skills MUST declare their prerequisites, triggers, and outputs explicitly
> - Guardrails MUST be written in `guardrails.yaml`, not assumed
> - Change scope MUST be explicit via `openspec/ACTIVE_CHANGE` or explicit argument
> - External skill invocations MUST be explicit, not inferred
> - Configuration MUST live in versioned files, not environment-only state
> - Agent instructions MUST be in SKILL.md, not tribal knowledge

---

## Session Bootstrap

Al inicio de cada sesión, leer en este orden:

1. `docs/REPOSITORY-RULES.md` (este archivo)
2. `docs/security/guardrails.yaml` (si existe)
3. `docs/security/agent-operating-policy.md` (si existe)
4. `openspec/ACTIVE_CHANGE` (si existe y no está vacío)
5. `docs/PROJECT-INTRO.md` (contexto del proyecto)
6. Preferir skills del repositorio / SIFTIA según la tabla de routing

---

## Change workflow (SIFTIA — default)

Todo trabajo de feature y arquitectura MUST seguir el [Siftia OpenSpec workflow](https://github.com/ExtendoDataIng/siftia-openspec-workflow):

1. Explore / propose → 2. Spec → 3. Design → 4. Tasks → 5. Apply → 6. Verify → 7. Archive

Usar comandos SIFTIA (`/sdd-explore` … `/sdd-archive`). Mantener `openspec/ACTIVE_CHANGE` apuntando al change en curso. No aterrizar código de producto fuera de un change OpenSpec salvo housekeeping trivial de docs acordado explícitamente.

---

## Language Policy

- **Code language**: All code (variable names, function names, class names, comments, commit messages) MUST be in English.
- **Documentation language**: Project documentation (README, guides, specs, designs, reports) SHOULD be written in Spanish (`es`).
- **Agent communication**: AI agents SHOULD communicate with the team in Spanish unless the user explicitly requests otherwise.
- **Product UI**: English (kids-oriented fixed messages; no dynamic i18n in v1).

---

## Team Tone Policy

- Frases cálidas ocasionales en mensajes conversacionales no críticos: **permitidas** (español, tono cercano).
- Solo en commentary o cierres cortos.
- **Nunca** en specs, designs, verification reports, security findings, decisions, backlog, RTM u otros artefactos formales.
- Desactivado automáticamente ante incidentes, producción, seguridad, fallos o conversaciones sensibles.

---

## Skill Routing

### Change lifecycle (SIFTIA / OpenSpec)

| Phase | Skill | Command |
|-------|-------|---------|
| Explore | `sdd-explore` | `/sdd-explore` |
| Propose | `sdd-propose` | `/sdd-new <name>` o `/sdd-propose` |
| Specify | `sdd-spec` | `/sdd-spec` |
| Design | `sdd-design` | `/sdd-design` |
| Tasks | `sdd-tasks` | `/sdd-tasks` |
| Implement | `sdd-apply` | `/sdd-apply` |
| Verify | `sdd-verify` | `/sdd-verify` |
| Archive | `sdd-archive` | `/sdd-archive` |

### Governance

| Skill | When |
|-------|------|
| `sdd-project-intro` | Kickoff (completado en bootstrap) |
| `sdd-guardrails` | Política de ejecución AI |
| `sdd-strategic-roadmap` | Roadmap y backlog |
| `sdd-decisions` | Decisiones de diseño/arquitectura |
| `sdd-traceability` | RTM y trazabilidad |
| `sdd-security` | Revisión de seguridad por fase (light) |

### Domain skills (cuando aplique)

| Domain | Preferred skills |
|--------|------------------|
| Firebase Hosting / CLI | `firebase-basics`, Firebase MCP |
| Frontend / UI | `frontend-design`, `web-design-guidelines`, `accessibility` |

### Prerequisites by phase

| Phase | Prerequisite |
|-------|--------------|
| `sdd-spec` | `proposal.md` existe |
| `sdd-design` | `specs/` existe |
| `sdd-tasks` | `design.md` existe |
| `sdd-apply` | `tasks.md` existe |
| `sdd-verify` | implementación completa |
| `sdd-archive` | `verify-report.md` con veredicto aceptable |
| `sdd-strategic-roadmap` | `docs/PROJECT-INTRO.md` existe |

---

## Active Change Lifecycle

- `openspec/ACTIVE_CHANGE` contiene el nombre del change activo (una línea, sin whitespace extra).
- Si está vacío, el usuario debe especificar el change explícitamente.
- Al archivar un change, limpiar `ACTIVE_CHANGE`.
- Artefactos bajo `openspec/changes/{change-name}/`.

---

## Git & Branching Policy

These rules are mandatory for all changes in this repository.

- **Branch per change**: Every change MUST be developed in a dedicated branch.
  - Format: `change/{change-name}` or `feature/{change-name}` (team-defined).
  - NEVER commit directly to `main` or `master`.

- **PR required for merge**: No code MAY be merged without an approved Pull Request.
  - Includes all agent-assisted changes.
  - PR MUST pass CI checks and any required reviews before merge.
  - Fast-forward merges via agent automation MUST be blocked unless PR exists and is approved.

- **Conventional Commits**: All commits MUST follow Conventional Commits standard.

### Branching Model

This project uses the **`github-flow`** branching strategy.

For a pedagogical description of this model (purpose, lifecycle, when to use,
when NOT to use, anti-patterns), see [`docs/guides/GIT-STRATEGY.md`](guides/GIT-STRATEGY.md).

**Protected branches** (no direct push, no force push, no deletion):

- `main`

**Branch naming templates**:

| Type | Template |
|------|----------|
| Feature / change | `feature/{change-name}` or `change/{change-name}` |
| Fix | `fix/{change-name}` |
| Chore | `chore/{change-name}` |

### Merge Policy

This project uses the **`squash`** merge policy.

| Branch type | Merge action |
|-------------|--------------|
| `feature/*` / `change/*` | squash |
| `fix/*` / `chore/*` | squash |
| other | squash |

For the rationale behind these defaults, see `docs/guides/GIT-STRATEGY.md` §7.

---

## Source of Truth

| Content | Canonical location |
|---------|-------------------|
| System behavior | `openspec/specs/{domain}/spec.md` |
| In-progress changes | `openspec/changes/{name}/` |
| Design / UX / process decisions | `docs/decisions/{domain}/` |
| Formal ADRs | `docs/adr/` |
| Roadmap | `docs/ROADMAP.md` |
| Backlog | `docs/BACKLOG.md` |
| RTM | `docs/rtm/` + `docs/RTM-INDEX.md` |
| Project charter | `docs/PROJECT-INTRO.md` |
| Code → message mapping | `config/codes.example.json` (stub Phase 0; códigos reales en change posterior) |
