# Design: Project Foundation (Phase 0)

## Technical Approach

Scaffold the static-site foundation without personalization. Maps to proposal capability `repo-foundation` and OpenSpec rule: static hosting + config-driven mapping later. Specs may land in parallel; same in/out scope as the proposal.

**Explicit non-goal:** no welcome page, code lookup, Firebase deploy, or copying assets into `public/` in this change.

## Architecture Decisions

| Decision | Options | Tradeoff | Choice |
|----------|---------|----------|--------|
| Asset SoT | A) `docs/assets/` only B) Copy to `public/` now C) Dual-write | B/C duplicate early | **A** — 9 PNGs stay in `docs/assets/`; README notes future copy |
| Config | A) `config/` stub B) Inline in `public/` C) Defer entirely | B mixes deploy root | **A** — placeholder schema, no real codes |
| Hosting root | A) `public/` empty B) Repo root C) `docs/` | B/C pollute tree | **A** — `public/` + `.gitkeep` |
| Design docs | A) Document in place B) Move under `public/` | Moving breaks docs layout | **A** — `docs/design/` unchanged |
| Filename map | Encoded names vs arbitrary IDs | Files already named | **`{character}-{classmate}.png`** → `character`, `classmateName`, `imagePath` |

### Why assets stay in `docs/assets` (Phase 0)

Operator originals live with design docs; site is not deployable yet. Avoids stale Hosting copies. Phase 1+ copies (or syncs) into `public/` and sets `image` / `imagePath` to the hosted relative path.

### Filename → future mapping

Pattern `{character}-{classmate}.png` (e.g. `ajolote-mateo.png`) → fields `character`, `classmateName`, `imagePath`. Documented set: ajolote-mateo, caballero-hector, caballo-emma, capibara-celeste, chiwuawua-cata, puccini-tessa, pug-felipe, squishi-barrantes, teddy-samantha.

## Target layout

```
README.md, .gitignore
public/.gitkeep          # future Firebase Hosting root
config/classmates.placeholder.json
docs/STANDARD.md         # new conventions
docs/design/             # existing DESIGN.md, code.html, screen.png
docs/assets/             # existing 9 PNG SoT
```

## Data Flow

Phase 0: documentation/scaffold only — no runtime.

```
Operator ──→ docs/assets/*.png (SoT)
Design   ──→ docs/design/* (STANDARD reference)
Stub     ──→ config/* (schema sketch; empty codes)
Future   : QR → lookup(config) → message + public image
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `README.md` | Create | ES: purpose, serve `public/` locally, tree, asset SoT |
| `.gitignore` | Create | secrets, `node_modules/`, `.firebase/`, OS junk |
| `docs/STANDARD.md` | Create | Semantic HTML; Tailwind CDN; vanilla JS; UI EN; ids EN |
| `public/.gitkeep` | Create | Reserve Hosting public root |
| `config/classmates.placeholder.json` | Create | Schema sketch; **no real codes** |
| `openspec/ACTIVE_CHANGE` | Modify | `project-foundation` if needed |
| `docs/design/`, `docs/assets/` | Document only | No move/copy |

### README / STANDARD / gitignore outline

- **README:** purpose; local static serve for `public/`; tree; assets remain in `docs/assets` until Phase 1; links to STANDARD + OpenSpec.
- **STANDARD:** HTML + Tailwind CDN + vanilla JS; Quicksand/Nunito; `lang=en` UI; asset naming; pointer to `docs/design/`.
- **.gitignore:** `.env*`, `node_modules/`, `.firebase/`, debug logs, `.DS_Store`; do not ignore `docs/assets/` or `public/.gitkeep`.

## Interfaces / Contracts

```json
[
  {
    "code": "",
    "classmateName": "",
    "character": "",
    "image": "",
    "message": ""
  }
]
```

`code` filled later (never commit real codes in Phase 0). `classmateName`/`character` from filename. `image` = future path under `public/`. `message` = EN welcome text.

## Testing Strategy

| Layer | What | Approach |
|-------|------|----------|
| Manual | Files exist; stub empty; README SoT clear | Verify checklist |

## Migration / Rollout

No migration. Rollback = delete foundation files; keep SIFTIA bootstrap and existing design/assets.

## Open Questions

- [ ] Stub as JSON vs `.gitkeep` + schema in STANDARD only (prefer JSON stub).
- [ ] README serve command (`python -m http.server` vs `npx serve`) — pick in tasks.
