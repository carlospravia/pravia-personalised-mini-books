# Pravia Personalised Mini Books

Página móvil estática: al escanear un QR, cada compañero ve un mensaje de bienvenida y una imagen personalizados según un código fijo.

Este change (**Phase 0 — foundation**) deja el layout del repo y la documentación listos. Aún no hay página de producto ni deploy.

## Idiomas

| Ámbito | Idioma |
|--------|--------|
| UI de producto (mensajes fijos para niños) | English |
| Documentación del repo (este README, `docs/`) | Español |
| Identifiers de código | English |

## Árbol canónico

```
README.md
.gitignore
AGENTS.md
public/                 # Futura raíz de Firebase Hosting (placeholder)
  .gitkeep
config/
  codes.example.json    # Stub código → mensaje + imagen (sin códigos reales)
docs/
  STANDARD.md           # Convenciones HTML/CSS/JS
  PROJECT-INTRO.md
  ROADMAP.md
  REPOSITORY-RULES.md
  design/               # Design system / template (SoT)
    DESIGN.md
    code.html
    screen.png
  assets/               # 9 PNG fuente (SoT) — NO Hosting aún
    ajolote-mateo.png
    caballero-hector.png
    caballo-emma.png
    capibara-celeste.png
    chiwuawua-cata.png
    puccini-tessa.png
    pug-felipe.png
    squishi-barrantes.png
    teddy-samantha.png
openspec/               # Workflow SIFTIA / OpenSpec
```

### Design vs Hosting

- **`docs/design/`** — design system y template de referencia
- **`docs/assets/`** — fuentes de imagen (`{character}-{classmate}.png`); no se copian a `public/` en Phase 0
- **`public/`** — raíz futura de Hosting; la página y las imágenes públicas llegan en changes posteriores
- **`config/codes.example.json`** — schema stub; códigos/mensajes reales en un change posterior

## Servir localmente (placeholder)

Cuando exista contenido en `public/`:

```bash
cd public
python3 -m http.server 8080
```

Abrir `http://localhost:8080`. Phase 0 solo reserva el directorio; no requiere `firebase.json` ni deploy.

## Documentación útil

- [docs/STANDARD.md](docs/STANDARD.md) — convenciones del sitio
- [docs/PROJECT-INTRO.md](docs/PROJECT-INTRO.md) — charter
- [docs/ROADMAP.md](docs/ROADMAP.md) — fases
- [docs/REPOSITORY-RULES.md](docs/REPOSITORY-RULES.md) — contrato operativo
- [docs/design/DESIGN.md](docs/design/DESIGN.md) — design system

## Firebase

Proyecto Hosting: **`personalised-mini-books`** (ver [`.firebaserc`](.firebaserc) y [docs/guides/FIREBASE.md](docs/guides/FIREBASE.md)).  
`firebase.json` y el deploy llegan en fases posteriores; v1 no necesita el SDK web de Firebase en el cliente.

## Gobernanza

Cambios de producto vía [Siftia OpenSpec](https://github.com/ExtendoDataIng/siftia-openspec-workflow). Change activo: ver `openspec/ACTIVE_CHANGE`.
