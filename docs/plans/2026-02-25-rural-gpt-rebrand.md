# Rural GPT Rebrand + Sección GPT Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Renombrar "Rural IA" → "Rural GPT" y dominio `ruralia.gal` → `ruralgpt.gal` en todo el site, y añadir sección explicativa del acrónimo GPT en la homepage antes de la sección de herramientas.

**Architecture:** Cambios de texto puro en ficheros Astro + Markdown existentes, sin tocar estructura de URLs/slugs. La nueva sección GPT es un bloque HTML+CSS añadido a `index.astro`.

**Tech Stack:** Astro, CSS variables existentes (`--verde-bosque`, `--font-heading`, etc.), sin dependencias nuevas.

---

### Task 1: Actualizar constantes globales (SEO, layouts, content config)

**Files:**
- Modify: `src/components/SEO.astro:30`
- Modify: `src/layouts/Base.astro:39`
- Modify: `src/layouts/BlogPost.astro:17,26,35-36,44-45,80`
- Modify: `src/content.config.ts:10`
- Modify: `src/pages/rss.xml.ts:11`

**Step 1: Editar SEO.astro**

Línea 30, cambiar:
```
const siteName = 'Rural IA';
```
Por:
```
const siteName = 'Rural GPT';
```

**Step 2: Editar Base.astro**

Buscar y reemplazar:
```
title="Rural IA — Blog"
```
Por:
```
title="Rural GPT — Blog"
```

**Step 3: Editar BlogPost.astro**

Hacer los siguientes reemplazos:
- `https://ruralia.gal` → `https://ruralgpt.gal` (todas las ocurrencias en este fichero)
- `name: 'Rural IA'` → `name: 'Rural GPT'`
- `| Rural IA` → `| Rural GPT` (en el title)

**Step 4: Editar content.config.ts**

Línea 10:
```ts
author: z.string().default('Rural IA'),
```
Por:
```ts
author: z.string().default('Rural GPT'),
```

**Step 5: Editar rss.xml.ts**

```ts
title: 'Rural IA — Blog',
```
Por:
```ts
title: 'Rural GPT — Blog',
```

**Step 6: Verificar build**

```bash
npm run build
```
Expected: sin errores de compilación.

**Step 7: Commit**

```bash
git add src/components/SEO.astro src/layouts/Base.astro src/layouts/BlogPost.astro src/content.config.ts src/pages/rss.xml.ts
git commit -m "feat: rebrand Rural IA → Rural GPT in global constants and layouts"
```

---

### Task 2: Actualizar pages principales

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/pages/retiro-ia-galicia.astro`
- Modify: `src/pages/sobre-nosotros.astro`
- Modify: `src/pages/para-quien.astro`
- Modify: `src/pages/faq.astro`
- Modify: `src/pages/gracias.astro`
- Modify: `src/pages/404.astro`
- Modify: `src/pages/blog/index.astro`
- Modify: `src/pages/legal.astro`

**Step 1: index.astro**

Reemplazos:
- `name: 'Rural IA'` → `name: 'Rural GPT'`
- `https://ruralia.gal` → `https://ruralgpt.gal`
- `title="Rural IA —` → `title="Rural GPT —`
- `<a href="/" class="hero-nav-logo">Rural IA</a>` → `<a href="/" class="hero-nav-logo">Rural GPT</a>`

**Step 2: retiro-ia-galicia.astro**

Reemplazos:
- `name: 'Rural IA —` → `name: 'Rural GPT —`
- `name: 'Rural IA'` (organizer) → `name: 'Rural GPT'`
- `https://ruralia.gal` → `https://ruralgpt.gal`
- `| Rural IA"` → `| Rural GPT"`
- `Rural IA es una iniciativa` → `Rural GPT es una iniciativa`

**Step 3: sobre-nosotros.astro**

Reemplazos:
- `name: 'Rural IA'` → `name: 'Rural GPT'`
- `https://ruralia.gal` → `https://ruralgpt.gal`
- `| Rural IA"` → `| Rural GPT"`
- `Rural IA es una iniciativa` → `Rural GPT es una iniciativa`
- `equipo Rural IA` → `equipo Rural GPT`
- `Rural IA nace de` → `Rural GPT nace de`
- `Rural IA es la versión` → `Rural GPT es la versión`
- `Los instructores de Rural IA` → `Los instructores de Rural GPT`

**Step 4: para-quien.astro**

Reemplazos:
- `https://ruralia.gal` → `https://ruralgpt.gal`
- `Rural IA"` → `Rural GPT"`

**Step 5: faq.astro**

Reemplazos:
- `https://ruralia.gal` → `https://ruralgpt.gal`
- `Rural IA"` → `Rural GPT"`
- `hola@ruralia.gal` → `hola@ruralgpt.gal`

**Step 6: gracias.astro**

Reemplazos:
- `| Rural IA"` → `| Rural GPT"`
- `en Rural IA.` → `en Rural GPT.`
- `hola@ruralia.gal` → `hola@ruralgpt.gal`

**Step 7: 404.astro**

Reemplazos:
- `| Rural IA"` → `| Rural GPT"`
- `Rural IA."` → `Rural GPT."`

**Step 8: blog/index.astro**

Reemplazos:
- `| Rural IA"` → `| Rural GPT"`
- `Rural IA."` → `Rural GPT."`

**Step 9: legal.astro**

Reemplazos:
- `| Rural IA"` → `| Rural GPT"`
- `hola@ruralia.gal` → `hola@ruralgpt.gal`
- `https://ruralia.gal` → `https://ruralgpt.gal`
- `Rural IA` (menciones en texto body) → `Rural GPT`

**Step 10: Verificar build**

```bash
npm run build
```
Expected: sin errores.

**Step 11: Commit**

```bash
git add src/pages/
git commit -m "feat: rebrand Rural IA → Rural GPT across all pages"
```

---

### Task 3: Actualizar componentes y blog content

**Files:**
- Modify: `src/components/Header.astro:18`
- Modify: `src/components/Footer.astro:30`
- Modify: `src/content/blog/*.md` (8 ficheros)

**Step 1: Header.astro**

Línea 18:
```html
<Image src={logo} alt="Rural IA" height={32} />
```
Por:
```html
<Image src={logo} alt="Rural GPT" height={32} />
```

**Step 2: Footer.astro**

Reemplazar `hola@ruralia.gal` → `hola@ruralgpt.gal` (aparece dos veces: href y texto visible).

**Step 3: Blog posts — frontmatter author**

En los 8 ficheros de `src/content/blog/*.md`, el campo `author: "Rural IA"` se actualiza automáticamente cuando se cambia el default en `content.config.ts` (Task 1). Para los posts que tienen el campo explícito, cambiarlo:
```yaml
author: "Rural IA"
```
Por:
```yaml
author: "Rural GPT"
```

**Step 4: Blog posts — menciones en body**

Ficheros afectados y líneas clave (verificar con grep antes de editar):
- `herramientas-ia-freelancers.md:185` — `retiro Rural IA` → `retiro Rural GPT`
- `retiro-ia-pueblo-gallego.md:3,6` — `Rural IA` → `Rural GPT`
- `becas-fundae-formacion-ia.md:172` — `en Rural IA` → `en Rural GPT`
- `chatgpt-vs-gemini-vs-claude.md:218` — `retiro Rural IA` → `retiro Rural GPT`
- `ia-de-google-guia-gemini.md:139` — `retiro Rural IA` → `retiro Rural GPT`
- `crear-app-con-ia.md:59,366` — `retiro Rural IA` → `retiro Rural GPT`
- `curso-chatgpt.md:345` — `retiro de IA de Rural IA` → `retiro de IA de Rural GPT`
- `automatizaciones-ia.md:190,196` — `Rural IA` → `Rural GPT`

**Step 5: Verificar que no quedan rastros**

```bash
grep -rn "Rural IA" src/
```
Expected: 0 resultados.

**Step 6: Commit**

```bash
git add src/components/ src/content/
git commit -m "feat: rebrand Rural IA → Rural GPT in components and blog content"
```

---

### Task 4: Añadir sección GPT en homepage

**Files:**
- Modify: `src/pages/index.astro`

La sección se inserta entre S4 (La Solución, `bg-crema`) y S4b (Herramientas, `bg-niebla`). Buscar el comentario `<!-- ==================== S4b: Herramientas ==================== -->` e insertar antes de él.

**Step 1: Insertar HTML de la sección**

Insertar antes del bloque `S4b`:

```html
  <!-- ==================== S4c: ¿Qué significa GPT? ==================== -->
  <section class="section bg-niebla">
    <div class="section-inner text-center">
      <p class="gpt-intro">Millones de personas usan ChatGPT cada día. Tú le vas a dar un nuevo significado a estas letras.</p>
    </div>
    <div class="gpt-grid">
      <div class="gpt-col">
        <span class="gpt-letter">G</span>
        <h3>Generativo</h3>
        <p>No recupera información: la crea. Aprenderás a generar textos, ideas, código y prototipos que antes tardabas horas.</p>
      </div>
      <div class="gpt-col">
        <span class="gpt-letter">P</span>
        <h3>Preentrenado</h3>
        <p>Ha procesado más conocimiento del que podrás leer en tu vida. Aprenderás a aprovechar todo ese contexto para tu trabajo específico.</p>
      </div>
      <div class="gpt-col">
        <span class="gpt-letter">T</span>
        <h3>Transformador</h3>
        <p>El modelo transforma el lenguaje. El retiro te transforma a ti. Sales con una forma distinta de trabajar.</p>
      </div>
    </div>
  </section>
```

**Step 2: Insertar CSS de la sección**

Añadir al bloque `<style>` de `index.astro`, antes del cierre `</style>`:

```css
  /* ===== GPT Section ===== */
  .gpt-intro {
    font-size: 1.15rem;
    color: var(--color-text-secondary);
    max-width: 560px;
    margin: 0 auto 3rem;
    line-height: 1.7;
  }
  .gpt-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 820px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .gpt-col {
    text-align: center;
  }
  .gpt-letter {
    display: block;
    font-family: var(--font-heading);
    font-size: clamp(4rem, 8vw, 6rem);
    font-weight: 800;
    color: var(--verde-bosque);
    letter-spacing: -0.05em;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  .gpt-col h3 {
    font-size: 1.15rem;
    margin: 0 0 0.75rem;
  }
  .gpt-col p {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    line-height: 1.65;
    margin: 0;
  }
  @media (max-width: 768px) {
    .gpt-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }
```

**Step 3: Verificar build y vista previa**

```bash
npm run build && npm run preview
```
Expected: sección GPT visible entre "La Solución" y "Herramientas", responsive en mobile.

**Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add GPT acronym section to homepage"
```
