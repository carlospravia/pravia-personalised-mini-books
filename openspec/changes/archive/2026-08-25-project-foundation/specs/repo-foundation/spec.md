# Repo Foundation Specification

## Purpose

Base de repo para sitio estático en Firebase Hosting: README, `.gitignore`, STANDARD light, carpetas canónicas y docs de design/assets — sin página de producto ni deploy.

## Requirements

### Requirement: README documents purpose and layout

El repo MUST incluir `README.md` con: propósito, árbol canónico, cómo servir `public/` localmente (placeholder OK), UI de producto en inglés, docs del repo en español.

#### Scenario: README mínimo presente

- GIVEN el change `project-foundation` aplicado
- WHEN un contribuidor abre `README.md`
- THEN MUST existir y cubrir propósito, layout, serve local, UI EN y docs ES

#### Scenario: Serve local placeholder aceptable

- GIVEN no hay serve definitivo
- WHEN el README documenta serve local
- THEN MAY usar comando placeholder apuntando a `public/`
- AND MUST NOT exigir `firebase.json` ni deploy

### Requirement: Gitignore excludes secrets and junk

`.gitignore` MUST excluir secretos, `node_modules/`, caches Firebase y basura de SO.

#### Scenario: Patrones de exclusión

- GIVEN `.gitignore` en la raíz
- WHEN se revisan patrones
- THEN MUST excluir secretos (p. ej. `.env*`), `node_modules/`, caches Firebase (p. ej. `.firebase/`) y OS junk (p. ej. `.DS_Store`)

#### Scenario: Foundation paths trackeables

- GIVEN `README.md`, `docs/STANDARD.md`, `public/` y `config/`
- WHEN Git evalúa tracking
- THEN esos paths MUST NOT estar ignorados

### Requirement: STANDARD defines static site conventions

`docs/STANDARD.md` MUST definir convenciones light: HTML semántico, Tailwind CDN, JS vanilla; identifiers EN; UI producto EN.

#### Scenario: STANDARD acotado

- GIVEN el change aplicado
- WHEN se abre `docs/STANDARD.md`
- THEN MUST existir y describir HTML semántico, Tailwind CDN y JS vanilla
- AND MUST NOT exigir SPA ni build toolchain

#### Scenario: Idioma UI vs docs

- GIVEN STANDARD y README
- WHEN se consultan idiomas
- THEN UI producto MUST ser inglés; docs repo SHOULD ser español; identifiers MUST ser inglés

### Requirement: public is Hosting root placeholder

`public/` MUST existir como raíz futura de Hosting. MAY contener solo `.gitkeep`. MUST NOT exigir página de producto.

#### Scenario: public placeholder

- GIVEN el change aplicado
- WHEN se inspecciona el árbol
- THEN `public/` MUST existir; MAY estar vacío salvo `.gitkeep`; MUST NOT exigir welcome page ni assets de producto

### Requirement: config stub for future code mapping

`config/` MUST existir como stub de mapeo código→mensaje+imagen. MUST ser placeholder; MUST NOT contener códigos ni mensajes reales.

#### Scenario: config sin datos de producto

- GIVEN el change aplicado
- WHEN se inspecciona `config/`
- THEN MUST existir; MAY ser `.gitkeep` o stub vacío/comentado; MUST NOT incluir códigos/mensajes reales

### Requirement: Design and assets sources documented

README (u otra doc foundation) MUST documentar `docs/design/` como design system/template y `docs/assets/` como 9 PNG fuente `{character}-{classmate}.png`. MUST NOT exigir copia a `public/`.

#### Scenario: Naming de assets

- GIVEN docs de foundation
- WHEN se describe `docs/assets/`
- THEN MUST indicar `{character}-{classmate}.png`
- AND MUST listar o referir: ajolote-mateo, caballero-hector, caballo-emma, capibara-celeste, chiwuawua-cata, puccini-tessa, pug-felipe, squishi-barrantes, teddy-samantha

#### Scenario: Design vs hosting

- GIVEN README documenta layout
- WHEN se distingue fuente vs Hosting
- THEN `docs/design/` MUST ser design fuente; `docs/assets/` MUST ser fuentes (no Hosting); MUST NOT exigir copia PNG a `public/` en Phase 0
