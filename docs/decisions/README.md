# Decision Ledger — Pravia Personalised Mini Books

Ledger maestro de decisiones de diseño, UX, proceso y proceso.

## Dominios

| Domain | Prefix | Path |
|--------|--------|------|
| Architecture | ARCH | [architecture/](architecture/) |
| Technology | TECH | [technology/](technology/) |
| User Experience | UX | [ux/](ux/) |
| Process | PROC | [process/](process/) |
| Security | SEC | [security/](security/) |

## Decisiones aceptadas en kickoff

| ID | Domain | Decision | Status |
|----|--------|----------|--------|
| DEC-TECH-001 | TECH | Sitio estático HTML/CSS/JS en Firebase Hosting | Accepted |
| DEC-TECH-002 | TECH | Mapeo de 9 códigos en config versionada del repo | Accepted |

Ver entradas en [technology/](technology/).

## Cómo capturar

- Change-scoped: `openspec/changes/{change}/decisions.md` (plantilla en `openspec/templates/decisions.md`)
- Repo-level: `docs/decisions/{domain}/DEC-{PREFIX}-NNN-*.md`
- Ejecutar `/sdd-decisions` tras propose/spec/design cuando haya decisiones nuevas
