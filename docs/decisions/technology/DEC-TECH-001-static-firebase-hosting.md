# DEC-TECH-001 — Static site on Firebase Hosting

**Domain**: Technology  
**Status**: Accepted  
**Date**: 2026-08-25  
**Source**: Project kickoff / SIFTIA project-intro

## Context

La app es una única página móvil sin CTA, auth ni datos dinámicos. Existe un proyecto Firebase con permisos para este fin.

## Decision

Entregar un sitio estático (HTML/CSS/JS) desplegado en **Firebase Hosting**. Sin App Hosting, Functions ni SPA framework obligatoria.

## Consequences

- Deploy simple vía Firebase CLI
- Sin build pipeline obligatorio en v1
- Personalización vía assets y config en el repo, no vía servicios de datos

## Project pin (2026-08-25)

- **projectId**: `personalised-mini-books`
- Documented in [`docs/guides/FIREBASE.md`](../../guides/FIREBASE.md) and [`.firebaserc`](../../../.firebaserc)
- Client web SDK config is intentionally **not** committed; Hosting does not need it for v1
