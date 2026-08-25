# Pravia Personalised Mini Books

Sitio web **móvil y estático** para el proyecto escolar de **Gabriel Pravia** (Term II English Project, 2º grado).

Cada compañero recibe un **Mini-Book** con un **código QR** en el reverso. Al escanearlo abre una página personalizada en inglés (nivel básico / “cute”) con **su nombre**, un **mensaje corto** y la **imagen de su amigo/regalo** — sin cuentas, sin formularios y sin botones.

**Live:** [https://personalised-mini-books.web.app](https://personalised-mini-books.web.app)

Crédito en la app: *A Mini-Book gift by Gabriel Pravia · Term II English Project*

---

## Propósito

| Qué | Por qué |
|-----|---------|
| Regalo digital por compañero | Celebrar el Mini-Book de forma personal y divertida |
| Inglés sencillo | Vocabulario apto para niños de ~8 años (ESL, Costa Rica) |
| QR impresos | Entregar el “premio” al escanear el código del libro |
| Sin backend | Simple de hospedar y mantener (Firebase Hosting + archivos en el repo) |

---

## Cómo funciona

1. El visitante abre la URL **sin** `code` → página **default**: invita a escanear el QR del Mini-Book.
2. Con `?code=XXXXXXXX` **válido** → título personalizado (nombre en azul), mensaje en inglés fácil (nombre en **negrita**), imagen del regalo, footer “Hope you enjoy it!”.
3. Con código **inválido** → misma página default (no se listan códigos ni nombres).

Ejemplos:

- Default: https://personalised-mini-books.web.app/
- Mateo: https://personalised-mini-books.web.app/?code=7XDVYZGL

Códigos y mensajes viven en [`config/codes.json`](config/codes.json) (fuente de verdad) y se publican en [`public/data/codes.json`](public/data/codes.json) para el navegador.

---

## Qué incluye este repo

- Página estática mobile-first (`public/`), diseño lúdico (Quicksand / Nunito, marco “toy”)
- **9 compañeros** mapeados a códigos alfanuméricos fijos
- Imágenes en `public/images/` (copia de `docs/assets/`)
- Hoja imprimible **US Letter** con los 9 QRs + nombre (sin spoilear el personaje): [`print/qr-sheet.html`](print/qr-sheet.html)
- Deploy en **Firebase Hosting** (`personalised-mini-books`)
- Gobernanza **SIFTIA / OpenSpec** (`docs/`, `openspec/`)

### Compañeros (referencia interna)

| Compañero | Código |
|-----------|--------|
| Mateo | `7XDVYZGL` |
| Hector | `72PYXPGB` |
| Emma | `W4AXKM89` |
| Celeste | `LZ47KKJC` |
| Cata | `W2RQGPRA` |
| Tessa | `UKU9343P` |
| Felipe | `CDTZABXB` |
| Barrantes | `LFZSHCFK` |
| Samantha | `KPEGW3FA` |

---

## Idiomas

| Ámbito | Idioma |
|--------|--------|
| UI del producto (niños) | English (fácil / cute) |
| Documentación del repo | Español |
| Identifiers de código | English |

---

## Estructura

```
public/                 # Raíz de Firebase Hosting
  index.html            # Página única
  js/welcome.js         # Default vs personalizado (?code=)
  data/codes.json       # Mapa publicado (code → message + image)
  images/               # 9 PNG del regalo
config/codes.json       # SoT de códigos / mensajes
print/
  pravia-mini-books-qr-print-sheet-letter.pdf  # PDF listo para imprimir (carta)
  qr-sheet.html         # Misma hoja en HTML (regenerable)
  qrs/                  # PNG de cada QR
docs/                   # Charter, roadmap, design, assets fuente
openspec/               # Changes SIFTIA / OpenSpec
scripts/generate-codes-and-qrs.mjs
firebase.json
```

---

## Uso local

```bash
npm install
npm run serve:public
# → http://localhost:8080
```

Probar:

- http://localhost:8080/
- http://localhost:8080/?code=7XDVYZGL
- http://localhost:8080/?code=bad

---

## Imprimir QRs (hoja carta)

### PDF listo para imprimir (recomendado)

Abrí o descargá el PDF ya generado (US Letter, 9 QRs con nombre, sin spoiler del personaje):

**[`print/pravia-mini-books-qr-print-sheet-letter.pdf`](print/pravia-mini-books-qr-print-sheet-letter.pdf)**

Imprimí a escala **100%** en papel **carta / Letter**.

### HTML (regenerable)

1. Abrir [`print/qr-sheet.html`](print/qr-sheet.html) en el navegador  
2. Imprimir → papel **Letter / Carta**, escala **100%**  
3. Cada celda muestra **nombre** + QR + código (sin el personaje, para no hacer spoiler)

Regenerar QRs / HTML (conserva códigos y mensajes; **no** regenera el PDF automáticamente):

```bash
npm run generate:codes-qrs
```

Forzar códigos nuevos (¡rompe QRs ya impresos y hay que reexportar el PDF!):

```bash
npm run generate:codes-qrs -- --force
```

---

## Deploy (Firebase Hosting)

```bash
firebase use personalised-mini-books
firebase deploy --only hosting
```

Más detalle: [docs/guides/FIREBASE.md](docs/guides/FIREBASE.md)

---

## Documentación

| Doc | Contenido |
|-----|-----------|
| [docs/PROJECT-INTRO.md](docs/PROJECT-INTRO.md) | Charter / meta-requerimientos |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Fases del proyecto |
| [docs/REPOSITORY-RULES.md](docs/REPOSITORY-RULES.md) | Contrato operativo del repo |
| [docs/STANDARD.md](docs/STANDARD.md) | Convenciones HTML/CSS/JS |
| [docs/design/DESIGN.md](docs/design/DESIGN.md) | Design system |
| [AGENTS.md](AGENTS.md) | Bootstrap para agentes AI |

Workflow de cambios: [Siftia OpenSpec](https://github.com/ExtendoDataIng/siftia-openspec-workflow). Change activo: `openspec/ACTIVE_CHANGE`.
