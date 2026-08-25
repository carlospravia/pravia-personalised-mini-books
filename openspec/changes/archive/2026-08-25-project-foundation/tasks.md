# Tasks: Project Foundation (Phase 0)

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~120–220 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | single PR |
| Delivery strategy | single-pr |
| Chain strategy | pending |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: pending
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Full foundation scaffold + doc sync | PR 1 | Docs/scaffold only; well under 400 lines |

## Phase 1: Scaffold files

- [x] 1.1 Create `.gitignore` — exclude `.env*`, `node_modules/`, `.firebase/`, debug logs, `.DS_Store`; do not ignore `docs/assets/` or `public/.gitkeep`
- [x] 1.2 Create `docs/STANDARD.md` — semantic HTML, Tailwind CDN, vanilla JS; Quicksand/Nunito; product UI EN; identifiers EN; pointer to `docs/design/`; no SPA/build toolchain
- [x] 1.3 Create `public/.gitkeep` (optional one-line note only — NO welcome page / product HTML)
- [x] 1.4 Create `config/codes.example.json` — 9 stub entries from filenames (`ajolote-mateo` … `teddy-samantha`) with schema `{code,classmateName,character,image,message}`; codes like `TODO-01`…`TODO-09`; empty `message`/`image`; no real secrets

## Phase 2: Documentation

- [x] 2.1 Create `README.md` (ES) — purpose; canonical tree; local serve placeholder for `public/` (e.g. `python -m http.server` from `public/`); product UI EN / repo docs ES; `docs/design/` + `docs/assets/` as SoT (list 9 PNGs); no deploy/`firebase.json` required
- [x] 2.2 Update `docs/REPOSITORY-RULES.md` Language Policy **Product UI** line → English (kids-oriented fixed messages; no dynamic i18n in v1)
- [x] 2.3 Update `docs/PROJECT-INTRO.md` TBD-ASSETS — note assets present (9 files listed by `{character}-{classmate}.png` names); status no longer “missing design/assets”
- [x] 2.4 Update `docs/ROADMAP.md` Phase 0 progress markers to Complete / M0 ✓ **after** scaffold+docs land (apply-phase closeout)

## Phase 3: Verification

- [x] 3.1 Manual checklist vs `repo-foundation` spec: README/STANDARD/gitignore/`public/`/`config/` exist; stub has no real codes; foundation paths not gitignored; no welcome page, lookup, deploy, or asset copy to `public/`
