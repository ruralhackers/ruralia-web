# Rural GPT — Rebrand + Sección GPT

**Fecha:** 2026-02-25
**Estado:** Aprobado

## Objetivo

Renombrar el proyecto de "Rural IA" a "Rural GPT" en todo el site, y añadir una sección educativa/de marca en la homepage que explica el acrónimo GPT conectándolo con la experiencia del retiro.

## Scope

### 1. Rebrand: "Rural IA" → "Rural GPT"

Cambiar todas las menciones en:
- `src/pages/index.astro` — título, schema JSON-LD, hero nav logo, texto body
- `src/pages/retiro-ia-galicia.astro` — schema JSON-LD (name, organizer)
- `src/pages/sobre-nosotros.astro` — schema JSON-LD, texto body
- `src/pages/faq.astro` — menciones en texto
- `src/pages/para-quien.astro` — menciones en texto
- `src/pages/gracias.astro` — menciones en texto
- `src/components/Header.astro` — logo alt text
- `src/components/Footer.astro` — menciones en texto
- `src/layouts/Base.astro` — si hay menciones
- `src/content/blog/*.md` — menciones en frontmatter y body

**Dominio:** El cambio de `ruralia.gal` → `ruralgpt.gal` se documenta pero no se implementa en código (depende de disponibilidad y DNS). Actualizar las URLs hardcodeadas en schema JSON-LD cuando el dominio esté confirmado.

### 2. Nueva sección "¿Qué significa GPT?" en la homepage

**Posición:** Entre la sección "La Solución" (S4b actual — herramientas) y antes del tools grid. Es decir, después del bloque `bg-crema` de La Solución y antes del `bg-niebla` de Herramientas.

**Fondo:** `bg-crema`

**Estructura:**

```
[Título de sección]
"Millones de personas usan ChatGPT cada día. Tú le vas a dar un nuevo significado a estas letras."

[Tres columnas]

G                    P                      T
Generativo           Preentrenado           Transformador
No recupera          Ha procesado más       El modelo transforma
información: la      conocimiento del que   el lenguaje. El retiro
crea. Aprenderás     podrás leer en tu      te transforma a ti.
a generar textos,    vida. Aprenderás a     Sales con una forma
ideas, código y      aprovechar todo ese    distinta de trabajar.
prototipos que       contexto para tu
antes tardabas       trabajo específico.
horas.
```

**Diseño de columna:**
- Letra inicial grande (display, color `verde-bosque`)
- Palabra en negrita debajo
- Párrafo de descripción en texto secundario
- Grid de 3 columnas en desktop, 1 columna en mobile

## Fuera de scope

- Cambio real de DNS / dominio
- Cambio del logo imagen (archivo PNG)
- Cambio de URLs de página (slug `retiro-ia-galicia` se mantiene por SEO)
