# PROJECT-INTRO — Pravia Personalised Mini Books

> Charter del proyecto y snapshot de meta-requerimientos.
> Fuente para roadmap, guardrails y decisiones de arquitectura.
> Generado 2026-08-25 desde bootstrap SIFTIA.

---

## 1. Identity

| Field | Value |
|-------|-------|
| **Name** | Pravia Personalised Mini Books (`pravia-personalised-mini-books`) |
| **Tagline** | Página móvil única que muestra un mensaje de bienvenida y una imagen personalizados según un código de QR |
| **Repository** | `pravia-personalised-mini-books` |
| **Documentation language** | Español (`es`) |
| **Code language** | English |
| **Agent communication** | Español (salvo que el usuario pida otro idioma) |

---

## 2. Problem and vision

### Problem

Cada compañero de escuela recibe un código QR impreso. Al escanearlo debe ver *su* mensaje e imagen de bienvenida, sin cuentas, formularios ni otras acciones. Hoy no existe una página simple, móvil y personalizada por código fijo.

### Vision (6 months)

- Página estática desplegada en Firebase Hosting, pensada para móvil y niños
- Los 9 códigos fijos resuelven de forma fiable a su mensaje e imagen
- Diseño cálido basado en el mockup/contenido que provee el operador
- Códigos inmutables; sin CMS ni edición en runtime

### Success metrics

1. **Resolución**: los 9 códigos válidos muestran el mensaje e imagen correctos en vista móvil
2. **Fallback**: código ausente o inválido muestra una página amable sin revelar otros códigos
3. **Deploy**: la app está publicada en el proyecto Firebase existente
4. **Fidelidad visual**: la UI refleja el diseño base provisto (mensaje + imagen central, sin CTA)

### Primary value

Que cada niño, al escanear su QR, vea de inmediato un mensaje e imagen pensados para él — sin fricción ni acciones adicionales.

---

## 3. Technical context

| Aspect | Detail |
|--------|--------|
| **Client** | Sitio estático HTML/CSS/JS (mobile-first) |
| **Hosting** | Firebase Hosting en proyecto Firebase existente (ID a proveer) |
| **Personalization** | Config versionada en el repo (JSON/YAML): 9 códigos → mensaje + imagen |
| **Entry** | Código único como parámetro (query o path); QRs ya impresos apuntan a esa URL |
| **Backend** | Ninguno — sin Firestore, Functions ni App Hosting |
| **Governance** | OpenSpec + SIFTIA SDD workflow |
| **Design** | Mockup/contenido provisto por el operador (Stitch opcional, no requerido) |

---

## 4. Actors

| Actor | Role |
|-------|------|
| **Niño / compañero de escuela** | Escanea el QR e ve mensaje + imagen personalizados |
| **Operador (Carlos)** | Prove nombres, imágenes, diseño base, proyecto Firebase y despliega |
| **AI coding agents** | Implementan cambios bajo OpenSpec y guardrails |

---

## 5. Scope

### In scope (v1)

- Una sola vista mobile-first: mensaje de bienvenida + imagen central, sin CTA
- Código único por query/path → lookup en config versionada del repo
- Exactamente 9 pares fijos código → mensaje + imagen
- Página amable para código ausente o inválido (sin revelar otros códigos)
- Deploy al proyecto Firebase existente (Hosting)
- Usar el diseño/contenido provisto como base visual

### Out of scope (v1)

- Generar o imprimir QRs (ya existen; layout 10 por hoja carta)
- Auth, formularios, analytics, CMS o admin para editar códigos
- Backend, Firestore, Cloud Functions, App Hosting
- Multi-página, PWA avanzada, i18n dinámico
- Más de 9 códigos o edición dinámica del mapeo

### Explicit TBDs (no bloquean el charter)

1. **Nombres de compañeros** — capturados en stub `config/codes.example.json` (Mateo, Hector, Emma, Celeste, Cata, Tessa, Felipe, Barrantes, Samantha); códigos/mensajes reales pendientes
2. **Imágenes** — **presentes** en `docs/assets/` (9 PNG `{character}-{classmate}.png`): ajolote-mateo, caballero-hector, caballo-emma, capibara-celeste, chiwuawua-cata, puccini-tessa, pug-felipe, squishi-barrantes, teddy-samantha. Copia a `public/` en change posterior
3. **Diseño inicial** — **presente** en `docs/design/` (`DESIGN.md`, `code.html`, `screen.png`)
4. **Firebase project ID** — proyecto existente a configurar en Hosting
5. **Forma del parámetro** — query (`?code=`) vs path (`/c/{code}`) — decidir en design del change de producto

---

## 6. Aspect evaluation

### Group A — Engineering practices

| Aspect | Depth | Notes |
|--------|-------|-------|
| Security (auth, authz, secrets) | Light | Sin auth; no filtrar lista de códigos; secrets mínimos de Firebase |
| Code Quality & Standards | Light | Estático pequeño; convenciones mínimas |
| Error Handling | Light | Fallback amable para código inválido/ausente |
| Test Strategy | Light | Verificación manual móvil + smoke de 9 códigos |
| Git / GitHub Strategy | Light | github-flow simple; capturado en guardrails |
| Commit Conventions | Light | Conventional Commits |
| Release Engineering | None | Deploy directo Hosting |
| Changelog & Versioning | None | — |
| PR Checklist | Light | PR a main cuando aplique |

### Group B — Architecture

| Aspect | Depth | Notes |
|--------|-------|-------|
| Modular Architecture | None | Una sola página |
| API Requirements | None | Sin API |
| Microservices | None | — |
| Multi-client Architecture | None | Solo web móvil |
| Cloud Strategy | Light | Firebase Hosting únicamente |
| Technology Stack | Light | HTML/CSS/JS + config JSON/YAML |
| Script Architecture Rules | None | — |
| AI / Intelligence Features | None | — |

### Group C — DevOps & Operations

| Aspect | Depth | Notes |
|--------|-------|-------|
| CI/CD Pipeline Design | None | Deploy manual o CLI Firebase |
| Infrastructure as Code | None | — |
| Terraform | None | — |
| Observability & Monitoring | None | — |
| Logging | None | — |
| Backup Strategy | None | Config en git |
| Tool / Infrastructure Assurance | None | — |

### Group D — UX & Documentation

| Aspect | Depth | Notes |
|--------|-------|-------|
| Frontend / UI | Standard | Mobile-first, tono cálido para niños |
| Style Guide | Light | Derivado del mockup provisto |
| Prototypes / Mockups | Light | Diseño base del operador |
| Dashboard / Control Panel | None | — |
| Decision Documentation (ADR) | Light | Solo si hay decisión arquitectónica |
| Runbook Framework | None | — |
| Onboarding Documentation | Light | README + este charter |
| New Client Onboarding Plan | None | — |
| Stitch Design Integration | None | Mockup humano; Stitch no requerido |

---

## 7. Constraints and risks

| Area | Detail |
|------|--------|
| **Timeline** | Sin deadline externo duro declarado; entrega corta esperada |
| **Budget / team** | Solo / AI-assisted; proyecto Firebase ya existente |
| **Technical constraints** | Debe usar el proyecto Firebase que proveerá el operador; sin backend |
| **Risk tolerance** | Conservador: estático, config en repo, proven Hosting |
| **AI guardrails** | Intent capturado — establecer baseline con `sdd-guardrails` (perfil `standard`) |
| **Content risk** | Dependencia de nombres/imágenes/diseño del operador antes del polish visual |
| **QR coupling** | URLs de QRs impresos deben coincidir con el esquema de parámetro elegido |

---

## 8. Open decisions (tracked)

| ID | Topic | Status |
|----|-------|--------|
| DEC-TECH-001 | Sitio estático HTML/CSS/JS en Firebase Hosting | Accepted (kickoff) |
| DEC-TECH-002 | Mapeo 9 códigos en config versionada del repo (JSON/YAML) | Accepted (kickoff) |
| TBD-PARAM-SHAPE | Query vs path para el código | Open — design del primer change |
| TBD-ASSETS | Nombres, imágenes, diseño base | Partially resolved — 9 PNG + design en `docs/assets/` y `docs/design/`; códigos/mensajes reales y copia a `public/` pendientes |
| TBD-FIREBASE-ID | ID del proyecto Firebase Hosting | Accepted — `personalised-mini-books` (Hosting; ver `.firebaserc`) |

---

## 9. Golden Rules

1. **Explicit is better than implicit** — todo comportamiento, configuración y decisión debe ser declarada y visible; nada implícito ni "mágico"
2. **Mindset de developer senior** para crear skills con experiencia en desarrollo de herramientas AI
3. **Documentación como sistema de registro** — `docs/` es la fuente de verdad
4. **Principios SOLID y DRY** aplicados al diseño de skills
5. **Simplicidad sobre complejidad** — skills claros y enfocados
6. **Seguridad primero** — considerar seguridad en cada skill
7. **Skills modulares y reutilizables** — cada skill tiene un propósito único
8. **Compatibilidad multi-herramienta** — debe funcionar en Claude Code, OpenCode, Cursor
9. **Skills externos no modificables** — delegar, no modificar
