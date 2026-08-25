# AGENTS.md

Repository bootstrap and reference index.

The repository operational contract lives in `docs/REPOSITORY-RULES.md`. This file stays lightweight on purpose.

**Default change workflow:** [Siftia OpenSpec workflow](https://github.com/ExtendoDataIng/siftia-openspec-workflow) (see `docs/REPOSITORY-RULES.md` § Change workflow).

At the start of every session:

1. Read [docs/REPOSITORY-RULES.md](docs/REPOSITORY-RULES.md).
2. If present, read [docs/security/guardrails.yaml](docs/security/guardrails.yaml).
3. If present, read [docs/security/agent-operating-policy.md](docs/security/agent-operating-policy.md) (Agent Operating Policies).
4. If present, read [openspec/ACTIVE_CHANGE](openspec/ACTIVE_CHANGE) and use it as the default change pointer when valid.
5. Read [docs/PROJECT-INTRO.md](docs/PROJECT-INTRO.md) for project context.
6. Prefer repository-owned Siftia skills under `~/.cursor/skills/` for governance and validation.

## Repository-Owned Skills (Siftia)

Installed in `~/.cursor/skills/`:

| Skill | Trigger |
|-------|---------|
| `sdd-project-intro` | `/sdd-project-intro` |
| `sdd-strategic-roadmap` | `/sdd-strategic-roadmap` |
| `sdd-guardrails` | `/sdd-guardrails` |
| `sdd-decisions` | `/sdd-decisions` |
| `sdd-traceability` | `/sdd-traceability` |
| `sdd-security` | `/sdd-security` |
| `sdd-explore` … `sdd-archive` | Change lifecycle |
