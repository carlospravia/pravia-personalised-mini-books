# DEC-TECH-003 — Code query parameter and Hosting URL

**Domain**: Technology  
**Status**: Accepted  
**Date**: 2026-08-25  
**Source**: Change `default-welcome-and-codes`

## Context

Need a stable URL shape for printed QRs before personalization UI ships.

## Decision

- Query parameter: `code`
- Base URL: `https://personalised-mini-books.web.app/?code={CODE}`
- Nine opaque alphanumeric codes (length 8) stored in `config/codes.json`

## Consequences

- No Hosting rewrites required for v1
- QRs regenerated via `npm run generate:codes-qrs` if the base URL changes
- Default page treats missing/invalid codes the same (no enumeration)
