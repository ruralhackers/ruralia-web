# Homepage Redesign (Lucía) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite `index.astro` with a dark AI-chat-style hero, plus 5 new/restructured sections (Qué incluye, Quiénes somos, Herramientas updated, Programa updated, Precio new).

**Architecture:** Single-file rewrite of `index.astro`. The global `Header.astro` is hidden on the homepage via a new `hideHeader` prop on `Base.astro`. The hero contains its own self-contained nav. All new sections are inline in `index.astro` with scoped `<style>` blocks.

**Tech Stack:** Astro 5, vanilla CSS (no Tailwind), Inter self-hosted font (already configured), `astro:assets` for images.

**Design doc:** `docs/plans/2026-02-24-homepage-redesign-lucia-design.md`

---

## Task 1: Add `hideHeader` prop to Base.astro

**Files:**
- Modify: `src/layouts/Base.astro`

**Context:** `Base.astro` always renders `<Header />`. We need to skip it on the homepage so the hero can embed its own full-screen nav.

**Step 1: Read the current Base.astro**

Open `src/layouts/Base.astro` and locate the `interface Props` block and the `<Header />` render.

**Step 2: Add the prop and conditional render**

In `interface Props`, add:
```typescript
hideHeader?: boolean;
```

In the destructure line, add:
```typescript
const { hideHeader, ...rest } = Astro.props;
// pass rest (without hideHeader) to SEO
```

Wait — SEO uses spread props. Cleaner approach: destructure hideHeader separately:

```typescript
const props = Astro.props;
const { hideHeader } = props;
```

Then wrap `<Header />` in the template:
```astro
{!hideHeader && <Header />}
```

**Step 3: Verify dev server still works**

Run: `npm run dev`

Open http://localhost:4321 — header should still appear (prop not passed yet, defaults to undefined = falsy). Open any other page — header still there.

**Step 4: Commit**

```bash
git add src/layouts/Base.astro
git commit -m "feat: add hideHeader prop to Base layout"
```

---

## Task 2: Hero — dark AI chat section

**Files:**
- Modify: `src/pages/index.astro`

**Context:** Replace the current hero (`<section class="hero bg-crema">`) with a full-viewport dark section that includes:
1. Integrated nav (logo left, links center, Reservar button right)
2. Chat-style prompt + response bubble

The current hero spans lines 69–84 in `index.astro`. Replace everything inside `<Base ...>` up to the `<!-- S2: Foto -->` comment.

**Step 1: Update the `<Base>` opening tag to hide the header**

Change:
```astro
<Base
  title="Rural IA — Retiro inmersivo de IA aplicada en Galicia"
  ...
>
```
To:
```astro
<Base
  title="Rural IA — Retiro inmersivo de IA aplicada en Galicia"
  description="..."
  keywords={[...]}
  schema={schema}
  hideHeader={true}
>
```

**Step 2: Replace the hero section**

Delete the old `<!-- S1: Hero -->` block and replace with:

```astro
<!-- ==================== S1: Hero oscuro (chat AI) ==================== -->
<section class="hero-chat">
  <!-- Nav integrada -->
  <nav class="hero-nav">
    <a href="/" class="hero-nav-logo">Rural IA</a>
    <div class="hero-nav-links">
      <a href="/retiro-ia-galicia/">El retiro</a>
      <a href="/para-quien/">Para quién</a>
      <a href="/blog/">Blog</a>
      <a href="/faq/">FAQ</a>
    </div>
    <a href="/retiro-ia-galicia/#reservar" class="hero-nav-cta">Reservar</a>
  </nav>

  <!-- Bloque central: chat -->
  <div class="hero-chat-inner">
    <p class="hero-prompt">
      <span class="hero-prompt-icon">✦</span>
      ¿Te acuerdas del Rincón del Vago?
    </p>
    <div class="hero-response">
      <p>
        Todos los que lo usamos recordamos esa sensación de alivio al encontrar
        el camino corto. Nuestra propuesta te hará sentir lo mismo, pero sin el
        miedo a que te pillen.
      </p>
      <p>
        En 4 días eliminarás la fatiga por herramientas: separar lo que funciona
        de lo que es humo.
      </p>
      <div class="hero-response-cta">
        <a href="/retiro-ia-galicia/#reservar" class="btn btn-hero">Reserva tu plaza</a>
        <span class="hero-response-price">Desde 697 EUR todo incluido · Junio 2026</span>
      </div>
    </div>
  </div>
</section>
```

**Step 3: Add hero styles to the `<style>` block**

```css
/* ===== Hero Chat ===== */
.hero-chat {
  min-height: 100vh;
  background: #0A0A0A;
  display: flex;
  flex-direction: column;
  color: #fff;
}

/* Nav integrada */
.hero-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  max-width: var(--wide-width);
  margin: 0 auto;
  width: 100%;
}
.hero-nav-logo {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.15rem;
  color: #fff;
  text-decoration: none;
  letter-spacing: -0.04em;
}
.hero-nav-links {
  display: flex;
  gap: 2rem;
}
.hero-nav-links a {
  color: rgba(255,255,255,0.65);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.15s ease;
}
.hero-nav-links a:hover {
  color: #fff;
}
.hero-nav-cta {
  background: var(--verde-bosque);
  color: #fff !important;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.15s ease;
}
.hero-nav-cta:hover {
  background: var(--verde-musgo);
}

/* Chat bloque central */
.hero-chat-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem 6rem;
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
  gap: 2rem;
}

/* Prompt (pregunta del usuario) */
.hero-prompt {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3.5vw, 2.25rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.04em;
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  line-height: 1.2;
  align-self: flex-start;
}
.hero-prompt-icon {
  color: rgba(255,255,255,0.5);
  font-size: 0.8em;
}

/* Respuesta (burbuja IA) */
.hero-response {
  background: #1A1A1A;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 2rem 2.25rem;
  width: 100%;
}
.hero-response p {
  color: rgba(255,255,255,0.8);
  font-size: 1.1rem;
  line-height: 1.75;
  margin: 0 0 1rem;
}
.hero-response p:last-of-type {
  margin-bottom: 2rem;
}
.hero-response-cta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.btn-hero {
  background: var(--verde-bosque);
  color: #fff;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.15s ease;
  display: inline-block;
}
.btn-hero:hover {
  background: var(--verde-musgo);
  color: #fff;
}
.hero-response-price {
  color: rgba(255,255,255,0.45);
  font-size: 0.9rem;
}

/* Hero mobile */
@media (max-width: 768px) {
  .hero-nav-links { display: none; }
  .hero-chat-inner { padding: 3rem 1.25rem 4rem; }
  .hero-response { padding: 1.5rem; }
  .hero-response-cta { flex-direction: column; align-items: flex-start; gap: 1rem; }
}
```

**Step 4: Verify visually**

Run: `npm run dev`
Open http://localhost:4321

Check:
- Fondo negro, full viewport height
- Nav con logo izq, links centro, botón verde derecha
- Prompt "¿Te acuerdas del Rincón del Vago?" visible
- Burbuja gris oscuro con copy y botón
- No aparece el header global (crema) encima

**Step 5: Commit**

```bash
git add src/pages/index.astro src/layouts/Base.astro
git commit -m "feat: add dark AI chat hero to homepage"
```

---

## Task 3: Sección "Qué incluye" (redesign + mover al tope)

**Files:**
- Modify: `src/pages/index.astro`

**Context:** Quitar las secciones S3 (El Problema) y S4 (La Solución) que ya no existen. Reemplazar por la nueva "Qué incluye" justo después de la foto de Anceu. Los iconos son SVG inline simples.

**Step 1: Eliminar S3 y S4**

Borrar los bloques:
- `<!-- S3: El Problema -->` (líneas 99–117)
- `<!-- S4: La Solución -->` (líneas 119–138)

**Step 2: Insertar la nueva sección Qué incluye**

Después del bloque `<!-- S2: Foto ancho completo -->`, insertar:

```astro
<!-- ==================== S3: Qué incluye ==================== -->
<section class="section bg-crema">
  <div class="section-inner">
    <h2>Ponte al día con IA en 4 días. Todo incluido.</h2>
  </div>
  <div class="incluye-grid">
    <div class="incluye-card">
      <svg class="incluye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/></svg>
      <h3>Formación</h3>
      <p>4 días de talleres prácticos con herramientas de IA</p>
    </div>
    <div class="incluye-card">
      <svg class="incluye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>
      <h3>Alojamiento</h3>
      <p>3 noches en <a href="https://anceu.com" target="_blank" rel="noopener">Anceu Coliving ↗</a></p>
    </div>
    <div class="incluye-card">
      <svg class="incluye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.371V6.75m-6 4.5v5.25m6-5.25v5.25m6-5.25v.75a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 14.25v-.75"/></svg>
      <h3>Comidas</h3>
      <p>Desayuno, comida y cena los 4 días. Gastronomía gallega.</p>
    </div>
    <div class="incluye-card">
      <svg class="incluye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25v2.625m-16.5-2.25v2.625m16.5 0v2.625m-16.5 0v2.625"/></svg>
      <h3>Materiales</h3>
      <p>Acceso a todas las herramientas, licencias y materiales del curso</p>
    </div>
    <div class="incluye-card">
      <svg class="incluye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/></svg>
      <h3>Comunidad alumni</h3>
      <p>Acceso al grupo privado de alumni después del retiro</p>
    </div>
    <div class="incluye-card">
      <svg class="incluye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/></svg>
      <h3>Follow-up</h3>
      <p>Sesión online grupal de seguimiento a las 2-3 semanas</p>
    </div>
  </div>
</section>
```

**Step 3: Add styles**

```css
/* ===== Qué incluye ===== */
.incluye-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  max-width: 900px;
  margin: 3rem auto 0;
  padding: 0 1.5rem;
  background: rgba(107,155,122,0.15);
  border: 1px solid rgba(107,155,122,0.15);
  border-radius: 12px;
  overflow: hidden;
}
.incluye-card {
  background: var(--crema-calido);
  padding: 2rem 1.75rem;
  transition: background 0.15s ease;
}
.incluye-card:hover {
  background: #EDE8DF;
}
.incluye-icon {
  width: 28px;
  height: 28px;
  color: var(--verde-bosque);
  margin-bottom: 1rem;
}
.incluye-card h3 {
  font-size: 1rem;
  margin: 0 0 0.4rem;
  color: var(--verde-bosque);
}
.incluye-card p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
}
.incluye-card a {
  color: var(--verde-bosque);
}

@media (max-width: 768px) {
  .incluye-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 480px) {
  .incluye-grid {
    grid-template-columns: 1fr;
  }
}
```

**Step 4: Verify**

- Sección visible con fondo crema, 6 tarjetas en 3 columnas
- Iconos verdes
- Link a anceu.com en "Alojamiento"
- No aparece "Nosotros investigamos por ti" en ningún sitio

**Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add Que incluye section with Apple-style grid"
```

---

## Task 4: Sección "Quiénes somos" (nueva)

**Files:**
- Modify: `src/pages/index.astro`

**Context:** Nueva sección después de "Qué incluye". 3 tarjetas de equipo con foto placeholder circular.

**Step 1: Insertar la sección después de "Qué incluye"**

```astro
<!-- ==================== S4: Quiénes somos ==================== -->
<section class="section bg-niebla">
  <div class="section-inner">
    <h2>¿Quiénes somos?</h2>
    <p class="equipo-intro">
      Somos profesionales en actividad anticipándonos a este futuro. Probamos,
      rompemos y descartamos herramientas de IA cada semana para que cada
      participante se lleve las que le van a funcionar en su actividad.
    </p>
  </div>
  <div class="equipo-grid">
    <div class="equipo-card">
      <div class="equipo-foto" aria-label="Foto de Agustín Jamardo"></div>
      <div class="equipo-info">
        <h3>Agustín Jamardo</h3>
        <p>Fundador de Anceu Coliving. Desarrollador, 12+ años en remoto.</p>
      </div>
    </div>
    <div class="equipo-card">
      <div class="equipo-foto" aria-label="Foto de África Rodríguez"></div>
      <div class="equipo-info">
        <h3>África Rodríguez</h3>
        <p>Cofundadora de Rural Hackers. Facilitadora de proyectos europeos (Erasmus+).</p>
      </div>
    </div>
    <div class="equipo-card">
      <div class="equipo-foto" aria-label="Foto de Nacho Márquez"></div>
      <div class="equipo-info">
        <h3>Nacho Márquez</h3>
        <p>Cofundador de Rural Hackers. Director de Noites Abertas. 20+ proyectos internacionales.</p>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Add styles**

```css
/* ===== Quiénes somos ===== */
.equipo-intro {
  color: var(--color-text-secondary);
  max-width: 620px;
  margin: 0.5rem auto 0;
}
.section-inner + .equipo-grid {
  margin-top: 3rem;
}
.equipo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 3rem auto 0;
  padding: 0 1.5rem;
}
.equipo-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}
.equipo-foto {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, #D4D0C8 0%, #B8B4AC 100%);
  flex-shrink: 0;
}
.equipo-info h3 {
  font-size: 1.05rem;
  margin: 0 0 0.35rem;
  color: var(--verde-bosque);
}
.equipo-info p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.55;
}

@media (max-width: 640px) {
  .equipo-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
}
```

**Step 3: Verify**

- 3 tarjetas centradas con círculo gris placeholder
- Nombre en verde, bio en gris
- Mobile: apilado en 1 columna

**Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add Quienes somos section with team placeholders"
```

---

## Task 5: Herramientas — actualizar descripciones

**Files:**
- Modify: `src/pages/index.astro`

**Context:** El grid de herramientas se mantiene. Solo actualizar el array `tools` para quitar el tono soberbio. Especialmente ChatGPT.

**Step 1: Actualizar el array `tools` en el frontmatter**

```typescript
const tools = [
  { name: 'ChatGPT', desc: 'Probablemente ya la uses. Aquí vas mucho más allá del 10% de su capacidad.', url: 'https://chatgpt.com' },
  { name: 'Claude', desc: 'Ideal para razonar sobre documentos largos y análisis en profundidad', url: 'https://claude.ai' },
  { name: 'Gemini', desc: 'Se integra bien con Google Workspace si ya lo usas en tu trabajo', url: 'https://gemini.google.com' },
  { name: 'Kimi', desc: 'Contexto muy largo, útil para proyectos con mucha documentación', url: 'https://kimi.ai' },
  { name: 'Cursor', desc: 'Editor de código con IA integrada. Aunque no programes, te va a sorprender', url: 'https://cursor.com' },
  { name: 'Pencil', desc: 'Diseña interfaces con IA sin necesitar a un diseñador', url: 'https://pencil.dev' },
  { name: 'Bolt', desc: 'De idea a prototipo funcional en minutos, sin código', url: 'https://bolt.new' },
  { name: 'Lovable', desc: 'Crea aplicaciones web completas describiendo lo que necesitas', url: 'https://lovable.dev' },
  { name: 'v0', desc: 'Genera componentes de UI con una descripción en lenguaje natural', url: 'https://v0.dev' },
  { name: 'Make', desc: 'Conecta apps y automatiza flujos sin programar', url: 'https://make.com' },
  { name: 'Perplexity', desc: 'Busca en internet con fuentes verificadas y respuestas directas', url: 'https://perplexity.ai' },
  { name: 'NotebookLM', desc: 'Sube tus documentos y convérsalos: resúmenes, preguntas, podcast', url: 'https://notebooklm.google.com' },
];
```

**Step 2: Verify**

- El grid se ve igual visualmente
- Descripción de ChatGPT ya no tiene tono soberbio
- El resto tampoco usa "el más X" ni superlativos vacíos

**Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "fix: update tool descriptions with less arrogant tone"
```

---

## Task 6: Programa — añadir título y subtítulo

**Files:**
- Modify: `src/pages/index.astro`

**Context:** La sección S5 (Programa) ya existe. Solo añadir el H2 "Programa" como título de sección y el subtítulo sobre las 12 personas.

**Step 1: Actualizar la sección Programa**

Cambiar el bloque:
```astro
<div class="section-inner text-center">
  <h2>4 días. De "no me entero" a "ya lo tengo claro".</h2>
</div>
```

Por:
```astro
<div class="section-inner text-center">
  <p class="section-label">Programa</p>
  <h2>4 días. De "no me entero" a "ya lo tengo claro".</h2>
  <p class="programa-sub">
    Nuestro objetivo: las 12 personas seleccionadas llegan con "no me entero"
    y se van con "esta es la herramienta que voy a usar cada día".
  </p>
</div>
```

**Step 2: Add styles**

```css
.section-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
  color: var(--verde-hoja);
  margin: 0 0 0.75rem;
}
.programa-sub {
  font-size: 1rem;
  color: var(--color-text-secondary);
  max-width: 560px;
  margin: 0.75rem auto 0;
  line-height: 1.65;
}
```

**Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add Programa label and subtitle about 12 participants"
```

---

## Task 7: Nueva sección "Precio"

**Files:**
- Modify: `src/pages/index.astro`

**Context:** Nueva sección antes del CTA final. Dos tarjetas: Early Bird (697 EUR, primeras 5 plazas) y Normal (897 EUR).

**Step 1: Insertar antes de S8 (CTA final)**

```astro
<!-- ==================== S7: Precio ==================== -->
<section class="section bg-niebla">
  <div class="section-inner text-center">
    <p class="section-label">Precio</p>
    <h2>Sin letra pequeña.</h2>
    <p class="precio-sub">Junio 2026 · Anceu Coliving, Galicia · 12 plazas</p>
  </div>
  <div class="precio-grid">
    <div class="precio-card precio-early">
      <p class="precio-tier">Early Bird</p>
      <p class="precio-amount">697 EUR</p>
      <p class="precio-desc">Primeras 5 plazas</p>
      <ul class="precio-lista">
        <li>4 días de formación</li>
        <li>3 noches de alojamiento</li>
        <li>Todas las comidas</li>
        <li>Materiales y licencias</li>
        <li>Comunidad alumni</li>
        <li>Sesión follow-up</li>
      </ul>
      <a href="/retiro-ia-galicia/#reservar" class="btn btn-primary">Reserva tu plaza</a>
    </div>
    <div class="precio-card">
      <p class="precio-tier">Precio normal</p>
      <p class="precio-amount">897 EUR</p>
      <p class="precio-desc">Todo incluido</p>
      <ul class="precio-lista">
        <li>4 días de formación</li>
        <li>3 noches de alojamiento</li>
        <li>Todas las comidas</li>
        <li>Materiales y licencias</li>
        <li>Comunidad alumni</li>
        <li>Sesión follow-up</li>
      </ul>
      <a href="/retiro-ia-galicia/#reservar" class="btn btn-primary">Reserva tu plaza</a>
    </div>
  </div>
</section>
```

**Step 2: Add styles**

```css
/* ===== Precio ===== */
.precio-sub {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  margin: 0.5rem 0 0;
}
.precio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 680px;
  margin: 3rem auto 0;
  padding: 0 1.5rem;
}
.precio-card {
  border: 1px solid rgba(107,155,122,0.25);
  border-radius: 12px;
  padding: 2rem 1.75rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.precio-early {
  border-color: var(--verde-bosque);
  border-width: 2px;
}
.precio-tier {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: var(--verde-hoja);
  margin: 0 0 0.75rem;
}
.precio-amount {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--verde-bosque);
  letter-spacing: -0.05em;
  margin: 0 0 0.25rem;
  line-height: 1;
}
.precio-desc {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin: 0 0 1.5rem;
}
.precio-lista {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}
.precio-lista li {
  font-size: 0.9rem;
  color: var(--color-text);
  padding-left: 1.25rem;
  position: relative;
}
.precio-lista li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--verde-bosque);
  font-weight: 600;
}

@media (max-width: 540px) {
  .precio-grid {
    grid-template-columns: 1fr;
    max-width: 360px;
  }
}
```

**Step 3: Verify**

- 2 tarjetas lado a lado
- Early Bird con borde verde más grueso (destacado)
- Lista de items con check verde
- Botones de reserva en ambas

**Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add Precio section with Early Bird and Normal tiers"
```

---

## Task 8: Limpieza — eliminar secciones obsoletas

**Files:**
- Modify: `src/pages/index.astro`

**Context:** Eliminar Stats, Para quién (preview) y código CSS huérfano de secciones eliminadas.

**Step 1: Eliminar sección Stats (S6)**

Borrar el bloque:
```astro
<!-- S6: Stats -->
<section class="section bg-crema">
  <div class="stats-row">...</div>
</section>
```

Y sus estilos: `.stats-row`, `.stat`, `.stat-num`, `.stat-label`.

**Step 2: Eliminar sección Para quién preview (S7)**

Borrar el bloque:
```astro
<!-- S7: Para quién (preview) -->
<section class="section bg-niebla">
  <div class="section-inner text-center">
    <h2>Para profesionales que no tienen tiempo...</h2>
    ...
  </div>
</section>
```

Y sus estilos: `.discover-link`.

**Step 3: Eliminar CSS de `.highlight-quote`**

Ya no existe la sección que lo usaba.

**Step 4: Verify**

- La página sigue sin errores en `npm run dev`
- No hay referencias a clases eliminadas en el HTML
- El orden final de secciones es: Hero → Foto → Qué incluye → Quiénes somos → Herramientas → Programa → Precio → CTA final

**Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "chore: remove Stats and Para quien preview sections from homepage"
```

---

## Task 9: Build check y revisión final

**Step 1: Run production build**

```bash
npm run build
```

Expected: sin errores. Si hay warnings de imágenes o links rotos, resolverlos antes de continuar.

**Step 2: Preview de producción**

```bash
npm run preview
```

Verificar en http://localhost:4321:

- [ ] Hero oscuro ocupa full viewport
- [ ] Nav integrada: logo, links, botón Reservar
- [ ] Burbuja de respuesta con copy correcto
- [ ] Foto de Anceu full-width tras el hero
- [ ] Qué incluye: 6 cards en grid 3×2, iconos verdes
- [ ] Link "Anceu Coliving ↗" abre anceu.com
- [ ] Quiénes somos: 3 placeholders grises + bios
- [ ] Herramientas: ChatGPT con nueva descripción
- [ ] Programa: label "Programa" + subtítulo 12 personas
- [ ] Precio: 2 tarjetas, Early Bird con borde destacado
- [ ] CTA final oscuro sigue al final
- [ ] Mobile (resize a 375px): hero nav sin links centro, todo apilado

**Step 3: Final commit**

```bash
git add .
git commit -m "chore: homepage redesign complete - lucia feedback"
```
