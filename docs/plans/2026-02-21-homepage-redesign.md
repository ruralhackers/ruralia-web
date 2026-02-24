# Homepage Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rediseñar la homepage con un hero oscuro estilo interfaz de IA que contrasta con las secciones cálidas del resto de la página.

**Architecture:** Modificar únicamente `src/pages/index.astro`. El hero pasa a ser full-viewport dark con estética de chat IA. Las secciones S3 (Qué incluye) y S5 (Programa) reciben cambios de copy y estructura. El resto de secciones se mantienen.

**Tech Stack:** Astro 5, CSS custom properties (ya definidas en Base.astro), Inter font, SVG inline.

---

### Task 1: Hero oscuro — estructura HTML

**Files:**
- Modify: `src/pages/index.astro`

**Contexto:** El hero actual es una sección con fondo crema y texto centrado. Hay que reemplazarlo por un hero full-viewport oscuro con estética de chat IA. El `<Header />` del layout sigue apareciendo en el resto de páginas; en el hero oscuro simplemente lo sobreescribimos visualmente con CSS (el header existente usa `position: sticky`, hay que ajustarlo).

**Step 1: Reemplazar la sección S1 hero con la nueva estructura**

Reemplazar el bloque `<!-- S1: Hero -->` completo en `src/pages/index.astro`:

```html
<!-- ==================== S1: Hero oscuro ==================== -->
<section class="hero-dark">
  <nav class="hero-nav">
    <Image src={logo} alt="Rural IA" class="hero-nav-logo" height={36} />
    <div class="hero-nav-links">
      <a href="/retiro-ia-galicia/">El retiro</a>
      <a href="/para-quien/">Para quién</a>
      <a href="/blog/">Blog</a>
      <a href="/faq/">FAQ</a>
    </div>
    <a href="/retiro-ia-galicia/#reservar" class="btn btn-primary hero-nav-cta">Reservar</a>
  </nav>

  <div class="hero-chat">
    <div class="hero-chat-prompt">
      <span class="hero-chat-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="10" cy="4" r="2" fill="#6B9B7A"/>
          <circle cx="4" cy="14" r="2" fill="#6B9B7A"/>
          <circle cx="16" cy="14" r="2" fill="#6B9B7A"/>
          <line x1="10" y1="6" x2="4" y2="12" stroke="#6B9B7A" stroke-width="1.5"/>
          <line x1="10" y1="6" x2="16" y2="12" stroke="#6B9B7A" stroke-width="1.5"/>
          <line x1="4" y1="14" x2="16" y2="14" stroke="#6B9B7A" stroke-width="1.5"/>
        </svg>
      </span>
      <h1>¿Te acuerdas del Rincón del Vago?</h1>
    </div>
    <div class="hero-chat-response">
      <p>Todos los que lo usamos recordamos esa sensación de alivio al encontrar el camino corto. Nuestra propuesta te hará sentir lo mismo, pero sin el miedo a que te pillen.</p>
      <p>En 4 días eliminarás la fatiga por herramientas: dejarás de perder tiempo probando cosas que no funcionan y te quedarás solo con las que sí sirven para tu trabajo real.</p>
      <p class="hero-chat-tagline">Somos profesionales que probamos, rompemos y descartamos herramientas de IA cada día. Y en este retiro te transferimos todo eso.</p>
    </div>
    <div class="hero-chat-cta">
      <a href="/retiro-ia-galicia/#reservar" class="btn btn-primary btn-lg">Reserva tu plaza</a>
      <p class="hero-chat-price">Desde 697 EUR todo incluido · Junio 2026 · Anceu Coliving, Pontevedra</p>
    </div>
  </div>
</section>
```

**Step 2: Verificar que el HTML es sintácticamente correcto**

```bash
npm run build 2>&1 | head -30
```

Esperado: sin errores de sintaxis Astro/HTML.

**Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add dark hero HTML structure"
```

---

### Task 2: Hero oscuro — estilos CSS

**Files:**
- Modify: `src/pages/index.astro` (bloque `<style>`)

**Contexto:** El header global (`<Header />`) tiene `position: sticky; top: 0`. En el hero oscuro queremos ocultar el header global y usar nuestro propio nav. Lo más limpio es ocultarlo solo en la homepage con CSS específico de página.

**Step 1: Ocultar el header global en homepage y añadir estilos del hero**

Añadir al bloque `<style>` de `index.astro`:

```css
/* ===== Ocultar header global en homepage ===== */
:global(body:has(.hero-dark) header) {
  display: none;
}

/* ===== Hero oscuro ===== */
.hero-dark {
  background: #0A0A0A;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
}

/* Nav del hero */
.hero-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.25rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.hero-nav-logo {
  filter: brightness(0) invert(1);
  height: 32px;
  width: auto;
}

.hero-nav-links {
  display: flex;
  gap: 1.75rem;
  flex: 1;
  justify-content: center;
}

.hero-nav-links a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.15s ease;
}

.hero-nav-links a:hover {
  color: #fff;
}

.hero-nav-cta {
  font-size: 0.9rem;
  padding: 0.6rem 1.4rem;
}

/* Chat block */
.hero-chat {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem 5rem;
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
}

.hero-chat-prompt {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
}

.hero-chat-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  background: rgba(107, 155, 122, 0.15);
  border: 1px solid rgba(107, 155, 122, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2rem;
}

.hero-chat-prompt h1 {
  color: #fff;
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  letter-spacing: -0.04em;
  line-height: 1.2;
  margin: 0;
  font-weight: 700;
}

.hero-chat-response {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.75rem 2rem;
  width: 100%;
  margin-bottom: 2.5rem;
}

.hero-chat-response p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.05rem;
  line-height: 1.75;
  margin: 0 0 1rem;
}

.hero-chat-response p:last-child {
  margin-bottom: 0;
}

.hero-chat-tagline {
  color: rgba(107, 155, 122, 0.9) !important;
  font-style: italic;
}

.hero-chat-cta {
  text-align: center;
  width: 100%;
}

.hero-chat-price {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
  margin: 1rem 0 0;
}

/* ===== Responsive hero ===== */
@media (max-width: 768px) {
  .hero-nav-links {
    display: none;
  }

  .hero-nav {
    padding: 1rem 1.25rem;
  }

  .hero-chat {
    padding: 2.5rem 1.25rem 4rem;
  }

  .hero-chat-response {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .hero-chat-prompt {
    flex-direction: column;
    gap: 0.75rem;
  }
}
```

**Step 2: Ver en el navegador**

```bash
npm run dev
```

Abrir `http://localhost:4321`. El hero debe ser pantalla completa negra con nav, pregunta y respuesta en formato chat.

**Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add dark hero styles"
```

---

### Task 3: Sección "Qué incluye" — rediseño

**Files:**
- Modify: `src/pages/index.astro`

**Contexto:** La sección actual (S4: La Solución) tiene el copy del Rincón del Vago. Ahora ese copy está en el hero. Hay que convertir esa sección en "Qué incluye" con las 6 tarjetas estilo Apple. El encabezado integra el mensaje "todo incluido".

**Step 1: Reemplazar sección S4 (La Solución) con "Qué incluye"**

Reemplazar el bloque `<!-- S4: La Solución -->` completo:

```html
<!-- ==================== S4: Qué incluye ==================== -->
<section class="section bg-crema">
  <div class="section-inner text-center">
    <h2>Ponte al día con IA en 4 días.<br/>Todo incluido.</h2>
    <p class="includes-subtitle">Formación práctica, alojamiento, comidas y comunidad. Sin investigar por tu cuenta.</p>
  </div>
  <div class="includes-grid">
    <div class="include-card">
      <span class="include-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
      </span>
      <strong>Formación</strong>
      <p>4 días de talleres prácticos con herramientas de IA reales</p>
    </div>
    <div class="include-card">
      <span class="include-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      </span>
      <strong>Alojamiento</strong>
      <p>3 noches en Anceu Coliving, Ponte Caldelas</p>
    </div>
    <div class="include-card">
      <span class="include-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
      </span>
      <strong>Comidas</strong>
      <p>Desayuno, comida y cena. Gastronomía gallega.</p>
    </div>
    <div class="include-card">
      <span class="include-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      </span>
      <strong>Materiales</strong>
      <p>Acceso a todas las herramientas, licencias y recursos del curso</p>
    </div>
    <div class="include-card">
      <span class="include-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </span>
      <strong>Comunidad alumni</strong>
      <p>Grupo privado activo después del retiro</p>
    </div>
    <div class="include-card">
      <span class="include-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      </span>
      <strong>Follow-up</strong>
      <p>Sesión online grupal a las 2-3 semanas del retiro</p>
    </div>
  </div>
</section>
```

**Step 2: Añadir estilos de "Qué incluye" al bloque `<style>`**

```css
/* ===== Qué incluye ===== */
.includes-subtitle {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
}

.includes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  max-width: 900px;
  margin: 3rem auto 0;
  padding: 0 1.5rem;
}

.include-card {
  background: #fff;
  border: 1px solid rgba(107, 155, 122, 0.2);
  border-radius: 12px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.include-icon {
  display: block;
  color: var(--verde-musgo);
  margin-bottom: 0.25rem;
}

.include-card strong {
  font-size: 1rem;
  font-weight: 700;
  color: var(--verde-bosque);
  letter-spacing: -0.02em;
}

.include-card p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .includes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .includes-grid {
    grid-template-columns: 1fr;
  }
}
```

**Step 3: Eliminar también la sección S3 (El Problema) que ya no tiene lugar**

La sección `<!-- S3: El Problema -->` (el bloque con "Eras quien siempre sabía qué herramienta usar") ya no es necesaria. El hero recoge ese rol. Eliminarla del HTML.

**Step 4: Verificar**

```bash
npm run dev
```

Comprobar que "Qué incluye" aparece después de la foto con las 6 tarjetas en grid de 3 columnas.

**Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: redesign includes section with card grid"
```

---

### Task 4: Sección Programa — copy y título

**Files:**
- Modify: `src/pages/index.astro`

**Contexto:** La sección S5 (Programa) necesita un H2 de sección "Programa" antes del título de los días, y un subtítulo con la frase de las 12 personas.

**Step 1: Actualizar sección S5**

Reemplazar la sección `<!-- S5: Programa -->`:

```html
<!-- ==================== S5: Programa ==================== -->
<section class="section bg-niebla">
  <div class="section-inner text-center">
    <p class="section-label">Programa</p>
    <h2>4 días. De "no me entero" a "ya lo tengo claro".</h2>
    <p class="program-objective">Nuestro objetivo es que las 12 personas seleccionadas lleguen con "no me entero" y se vayan con "esta es la herramienta que voy a usar cada día".</p>
  </div>
  <div class="program-grid">
    {days.map((day) => (
      <div class="program-day">
        <span class="day-label">Día {day.num}</span>
        <h3>{day.title}</h3>
        <p>{day.desc}</p>
      </div>
    ))}
  </div>
  <div class="section-inner text-center">
    <p class="program-link">
      <a href="/retiro-ia-galicia/">Ver programa completo →</a>
    </p>
  </div>
</section>
```

**Step 2: Añadir estilos al bloque `<style>`**

```css
/* ===== Programa — label y objetivo ===== */
.section-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
  color: var(--verde-musgo);
  margin: 0 0 0.75rem;
}

.program-objective {
  color: var(--color-text-secondary);
  font-size: 1rem;
  max-width: 560px;
  margin: 0.75rem auto 0;
  line-height: 1.65;
}
```

**Step 3: Verificar**

```bash
npm run dev
```

La sección Programa debe mostrar: label "PROGRAMA" + H2 + subtítulo de las 12 personas + cards de días.

**Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: update programa section with label and objective copy"
```

---

### Task 5: Verificación final y build de producción

**Step 1: Build de producción**

```bash
npm run build 2>&1
```

Esperado: `✓ Complete` sin errores ni warnings críticos.

**Step 2: Preview**

```bash
npm run preview
```

Revisar en `http://localhost:4321`:
- [ ] Hero oscuro full-viewport con nav propio
- [ ] Header global oculto solo en homepage
- [ ] Foto ancho completo como transición
- [ ] "Qué incluye" con 6 cards en 3 columnas
- [ ] Sección "Qué incluye" sin texto "nosotros investigamos por ti"
- [ ] Sección Programa con label + objetivo
- [ ] Resto de secciones sin cambios
- [ ] Mobile: nav del hero simplificado, cards en 1-2 columnas

**Step 3: Commit final**

```bash
git add -A
git commit -m "feat: homepage redesign — dark hero + includes + programa"
```
