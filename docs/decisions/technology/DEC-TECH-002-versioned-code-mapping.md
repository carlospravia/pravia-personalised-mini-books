# DEC-TECH-002 — Versioned in-repo code mapping

**Domain**: Technology  
**Status**: Accepted  
**Date**: 2026-08-25  
**Source**: Project kickoff / SIFTIA project-intro

## Context

Hay exactamente 9 códigos fijos, cada uno con mensaje e imagen inmutables una vez generados. No se requiere edición en runtime.

## Decision

El mapeo código → mensaje + imagen MUST vivir en **config versionada en el repo** (JSON o YAML). No Firestore ni Remote Config para v1.

## Consequences

- Cambios de contenido pasan por git/PR
- Sin backend ni costos de DB
- La lista de códigos no debe exponerse en UI de error (ver security light)
