# Git Strategy — Pravia Personalised Mini Books

Pedagogical guide for the branching model declared in `docs/security/guardrails.yaml`.

## 1. Chosen model: github-flow

**github-flow** is a lightweight branching model:

- `main` is always deployable
- Short-lived feature branches for each change
- Merge to `main` via Pull Request
- Prefer continuous (or frequent) deployment after merge

### When to use

- Small teams / solo + AI agents
- Simple products (this static site)
- No long-lived release trains required

### When NOT to use

- Multiple concurrent release versions that must be supported in parallel
- Strict environment lanes (`develop` → staging → prod) with different deploy targets

## 2. Branch naming

| Type | Template |
|------|----------|
| Feature / OpenSpec change | `feature/{change-name}` or `change/{change-name}` |
| Bug fix | `fix/{change-name}` |
| Chore / docs | `chore/{change-name}` |

## 3. Protected branches

- `main` — no direct push, no force push, no deletion
- Changes enter `main` only via approved PR

## 4. Merge policy: squash

- Feature PRs into `main` use **squash** merge for a linear history
- Each PR becomes one Conventional Commit on `main` when possible

## 5. Conventional Commits

Required types include: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`, `revert`.

Enforcement: `commitlint.config.js`, `.husky/commit-msg` (when husky/commitlint installed), and `.github/workflows/commitlint.yml`.

## 6. Worktrees

This project does **not** require git worktrees (`use_worktrees: false`). Feature branches on the main checkout are sufficient.

## 7. Rationale for defaults

- Squash keeps `main` readable for a tiny static site
- github-flow avoids unused `develop` lane complexity

## 8. Interaction with external skills

`branch-pr` and related skills MUST respect protected branches and never force-push `main`.

See also: `docs/REPOSITORY-RULES.md`, `docs/security/guardrails.yaml`.
