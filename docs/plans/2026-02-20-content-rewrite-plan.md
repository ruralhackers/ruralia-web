# Content Rewrite Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite all Ruralia.gal content with "El Atajo" positioning — targeting 30-45 year old professionals who need to catch up with AI, featuring a tools grid, redesigned 4-day program, concrete personas, updated form, and gender-inclusive language.

**Architecture:** Static Astro site with page-level content in `.astro` files. No component extraction needed — content lives inline in each page. CSS stays in `<style>` blocks per page. Form is Netlify-integrated on retiro page.

**Tech Stack:** Astro, HTML, CSS (custom properties defined in Base.astro layout)

**Design doc:** `docs/plans/2026-02-20-content-rewrite-design.md`

---

### Task 1: Rewrite Homepage (index.astro)

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Update the frontmatter data**

Replace the `days` array (lines 17-38) with the new 4-day program:

```javascript
const days = [
  {
    num: '01',
    title: '¿Dónde estoy? — Mapa del terreno',
    desc: 'Te situamos. Qué herramientas existen, para qué sirve cada una, cuáles son humo y cuáles merecen tu tiempo.',
  },
  {
    num: '02',
    title: '¿Qué puedo automatizar? — Tu trabajo bajo la lupa',
    desc: 'Analizamos tu flujo de trabajo real. Identificamos qué tareas puedes automatizar, delegar a IA o hacer en la mitad de tiempo.',
  },
  {
    num: '03',
    title: '¿Puedo construir cosas? — De idea a prototipo',
    desc: 'Aunque no sepas programar. Con Cursor, Bolt, Lovable y v0 construyes herramientas que antes habrías encargado.',
  },
  {
    num: '04',
    title: '¿Con qué me quedo? — Tu stack personalizado',
    desc: 'Montas tu kit definitivo. Sesión guiada para dejarlo todo configurado. Sales con todo listo para volver al trabajo con IA.',
  },
];
```

Replace the `stats` array (lines 40-44) with updated, gender-inclusive stats:

```javascript
const stats = [
  { num: '600K', label: 'profesionales en España sin formación en IA' },
  { num: '+56%', label: 'de productividad con herramientas de IA integradas' },
  { num: '0', label: 'retiros inmersivos de IA en España' },
];
```

Update the schema description (line 12):

```javascript
description: 'Retiro inmersivo de IA aplicada para profesionales. 4 días en Galicia.',
```

Update the `<Base>` title/description/keywords (lines 48-51) to remove "tech":

```
title="Rural IA — Retiro inmersivo de IA aplicada en Galicia"
description="4 días en Galicia para ponerte al día con IA. Sin investigar. Sin perder más tiempo. Formación práctica, alojamiento y comidas incluidas. 12 plazas."
keywords={['retiro IA España', 'curso IA inmersivo', 'formación IA Galicia', 'retiro inteligencia artificial', 'curso IA aplicada presencial', 'ponerse al día con IA']}
```

**Step 2: Rewrite the Hero section (S1)**

Replace lines 53-68 (the hero section HTML) with the new copy:

```html
<!-- ==================== S1: Hero ==================== -->
<section class="hero bg-crema">
  <div class="hero-inner">
    <p class="hero-badge">Junio 2026 · Anceu Coliving, Pontevedra</p>
    <Image src={logo} alt="Rural IA" class="hero-logo" height={48} />
    <h1>Ponte al día con IA en 4 días. Sin investigar. Sin perder más tiempo.</h1>
    <p class="hero-sub">
      Retiro inmersivo en Galicia para profesionales que no tienen tiempo de estar al día.
      Nosotros investigamos por ti — y lo seguimos haciendo cada semana.
      Vienes 4 días y te vas con todo montado.
    </p>
    <div class="hero-cta">
      <a href="/retiro-ia-galicia/#reservar" class="btn btn-primary btn-lg">Reserva tu plaza</a>
    </div>
    <p class="hero-price">Desde 697 EUR todo incluido</p>
  </div>
</section>
```

**Step 3: Rewrite the Problem section (S3)**

Replace lines 82-96 with:

```html
<!-- ==================== S3: El Problema ==================== -->
<section class="section bg-niebla">
  <div class="section-inner text-center">
    <h2>Eras quien siempre sabía qué herramienta usar</h2>
    <p>
      Llevas años siendo la persona de referencia en tu entorno.
      Quien montaba las webs, quien dominaba Figma antes que nadie,
      quien configuraba servidores cuando el resto ni sabía qué era un hosting.
    </p>
    <p>
      Pero la IA avanzó demasiado rápido. Cada semana salen 3 herramientas nuevas.
      No tienes tiempo de probarlas todas. Tu trabajo real te come el día.
      Y la brecha entre lo que sabes y lo que deberías saber crece cada semana.
    </p>
    <p class="highlight-quote">
      No es que seas menos capaz.<br />
      Es que no tienes horas.
    </p>
  </div>
</section>
```

**Step 4: Rewrite the Solution section (S4)**

Replace lines 98-109 with:

```html
<!-- ==================== S4: La Solución ==================== -->
<section class="section bg-crema">
  <div class="section-inner text-center">
    <h2>El Rincón del Vago de la IA — pero da igual que te pillen</h2>
    <p>
      ¿Te acuerdas del Rincón del Vago? Alguien hacía el trabajo y tú
      llegabas al examen sabiendo lo justo.
    </p>
    <p>
      Esto es parecido, pero mejor: nuestro equipo investiga, prueba y descarta
      herramientas de IA cada semana. Separamos lo que funciona de lo que es humo.
      Y en 4 días te transferimos todo ese conocimiento para que lo apliques
      directamente a tu trabajo.
    </p>
    <p class="highlight-quote">
      La diferencia: aquí da igual que te pillen.<br />
      De hecho, tu clientela va a notar la diferencia.
    </p>
  </div>
</section>
```

**Step 5: Add Tools Grid section (new, between S4 and S5)**

Insert a new section after the Solution section and before the Program section. Add a `tools` data array in the frontmatter:

```javascript
const tools = [
  { name: 'ChatGPT', desc: 'El asistente más versátil para texto, análisis y conversación' },
  { name: 'Claude', desc: 'Razonamiento profundo y trabajo con documentos largos' },
  { name: 'Gemini', desc: 'La IA de Google integrada con tu ecosistema' },
  { name: 'Kimi 2.5', desc: 'Modelo open source para tareas avanzadas' },
  { name: 'Cursor', desc: 'Programa y edita código con IA como copiloto' },
  { name: 'Pencil', desc: 'Diseña interfaces con IA sin tocar código' },
  { name: 'Bolt', desc: 'De idea a prototipo funcional en minutos' },
  { name: 'Lovable', desc: 'Crea aplicaciones web completas sin programar' },
  { name: 'v0', desc: 'Genera componentes UI con una descripción' },
  { name: 'Make', desc: 'Automatiza flujos de trabajo entre aplicaciones' },
  { name: 'Perplexity', desc: 'Búsqueda inteligente con fuentes verificadas' },
  { name: 'NotebookLM', desc: 'Convierte documentos en conocimiento interactivo' },
];
```

HTML section:

```html
<!-- ==================== S4b: Herramientas ==================== -->
<section class="section bg-niebla">
  <div class="section-inner text-center">
    <h2>Herramientas que aprenderás a usar</h2>
    <p>No todas las herramientas de IA sirven para lo mismo. Nosotros las probamos, tú te llevas las que encajan con tu trabajo.</p>
  </div>
  <div class="tools-grid">
    {tools.map((tool) => (
      <div class="tool-card">
        <h3>{tool.name}</h3>
        <p>{tool.desc}</p>
      </div>
    ))}
  </div>
</section>
```

Add CSS for `.tools-grid` and `.tool-card`:

```css
/* ===== Tools Grid ===== */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 820px;
  margin: 2rem auto 0;
  padding: 0 1.5rem;
}
.tool-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--verde-hoja);
  border-radius: 8px;
  padding: 1.25rem;
  text-align: center;
}
.tool-card h3 {
  font-size: 1rem;
  margin: 0 0 0.35rem;
  color: var(--verde-bosque);
}
.tool-card p {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
}
```

**Step 6: Rewrite the "For Whom" preview section (S7)**

Replace lines 144-156 with:

```html
<!-- ==================== S7: Para quién (preview) ==================== -->
<section class="section bg-niebla">
  <div class="section-inner text-center">
    <h2>Para profesionales que no tienen tiempo de investigar IA</h2>
    <p>
      Si trabajas con tecnología y sabes que deberías estar usando IA pero no encuentras el momento,
      esto es para ti. No hace falta saber programar. Sí hace falta tener ganas de cacharrear.
    </p>
    <p class="discover-link">
      <a href="/para-quien/">Descubre si es para ti →</a>
    </p>
  </div>
</section>
```

**Step 7: Update CTA final (S8)**

Replace lines 158-165 with:

```html
<!-- ==================== S8: CTA Final ==================== -->
<section class="cta-final bg-dark">
  <div class="cta-final-inner">
    <h2>El día 5 vuelves a tu trabajo. Pero diferente.</h2>
    <p>Mismo escritorio. Mismos clientes. Pero con IA integrada en tu flujo de trabajo. 12 plazas. Junio 2026.</p>
    <a href="/retiro-ia-galicia/#reservar" class="btn btn-gold btn-lg">Reserva tu plaza</a>
  </div>
</section>
```

**Step 8: Verify the build**

Run: `cd /home/agustin/src/propuesta-ruralia && npm run build`
Expected: Build succeeds with no errors.

**Step 9: Commit**

```bash
git add src/pages/index.astro
git commit -m "Rewrite homepage content with 'El Atajo' positioning

New hero, problem/solution sections, tools grid, redesigned program,
gender-inclusive language, and updated stats."
```

---

### Task 2: Rewrite Retiro page (retiro-ia-galicia.astro)

**Files:**
- Modify: `src/pages/retiro-ia-galicia.astro`

**Step 1: Update the Event schema description**

Replace line 9:

```javascript
description: 'Retiro inmersivo de IA aplicada para profesionales. 4 días de formación práctica + alojamiento + comidas en Anceu Coliving, Galicia.',
```

Update `<Base>` title/description/keywords (lines 58-62):

```
title="Retiro de IA en Galicia — 4 días, todo incluido | Rural IA"
description="Ponte al día con IA en 4 días. Formación práctica en Anceu Coliving, Pontevedra. Alojamiento, comidas y herramientas incluidas. 12 plazas. Desde 697 EUR."
keywords={['retiro IA Galicia', 'curso intensivo IA presencial', 'ponerse al día con IA', 'formación IA todo incluido', 'curso IA Anceu Coliving']}
```

**Step 2: Rewrite the hero section**

Replace lines 64-72:

```html
<!-- Hero -->
<section class="section hero-retiro">
  <div class="section-inner text-center">
    <h1>Ponte al día con IA en 4 días. Todo incluido.</h1>
    <p class="hero-sub">Nosotros investigamos por ti — y lo seguimos haciendo cada semana. Tú vienes 4 días a Galicia y te vas con las herramientas de IA configuradas para tu trabajo.</p>
    <a href="#reservar" class="btn btn-primary btn-lg">Reserva tu plaza</a>
    <p class="hero-price">Desde 697 EUR todo incluido · Junio 2026</p>
  </div>
</section>
```

**Step 3: Rewrite the Problem/Solution section**

Replace lines 98-105 with new content:

```html
<!-- Problema / Solución -->
<section class="section">
  <div class="section-inner text-center">
    <h2>El Rincón del Vago de la IA — pero da igual que te pillen</h2>
    <p>¿Te acuerdas del Rincón del Vago? Alguien hacía el trabajo y tú llegabas al examen sabiendo lo justo. Esto es parecido, pero mejor: nuestro equipo investiga, prueba y descarta herramientas de IA cada semana. Separamos lo que funciona de lo que es humo.</p>
    <p class="highlight-text">En 4 días te transferimos todo ese conocimiento. Tu clientela va a notar la diferencia.</p>
  </div>
</section>
```

**Step 4: Add Tools Grid section**

Insert after the "Qué incluye" section and before the "Programa" section. Add `tools` array in frontmatter (same as homepage) and the following HTML:

```html
<!-- Herramientas -->
<section class="section">
  <div class="section-inner">
    <h2>Herramientas que aprenderás a usar</h2>
    <p>No todas las herramientas de IA sirven para lo mismo. Nosotros las probamos, tú te llevas las que encajan con tu trabajo.</p>
    <div class="tools-grid">
      {tools.map((tool) => (
        <div class="tool-card">
          <h3>{tool.name}</h3>
          <p>{tool.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

Add CSS for `.tools-grid` and `.tool-card` (same styles as homepage).

**Step 5: Rewrite the 4-day program**

Replace the program section (lines 140-165) with:

```html
<!-- Programa detallado -->
<section class="section">
  <div class="section-inner">
    <h2>4 días. De "no me entero" a "ya lo tengo claro".</h2>

    <div class="day-detail">
      <h3>Día 1 — "¿Dónde estoy?" — Mapa del terreno</h3>
      <p>Te situamos. Qué herramientas existen, para qué sirve cada una, cuáles son humo y cuáles merecen tu tiempo. Sales del día 1 entendiendo el paisaje completo de la IA aplicada a trabajo real.</p>
    </div>

    <div class="day-detail">
      <h3>Día 2 — "¿Qué puedo automatizar?" — Tu trabajo bajo la lupa</h3>
      <p>Analizamos tu flujo de trabajo real. Identificamos qué tareas puedes automatizar, delegar a IA o hacer en la mitad de tiempo. Aprendes a usar las herramientas clave: ChatGPT, Claude, Gemini, Make.</p>
    </div>

    <div class="day-detail">
      <h3>Día 3 — "¿Puedo construir cosas?" — De idea a prototipo</h3>
      <p>Sí, puedes. Aunque no sepas programar. Con Cursor, Bolt, Lovable y v0 construyes herramientas que antes habrías encargado (y pagado). Una web, una app interna, un automatismo.</p>
    </div>

    <div class="day-detail">
      <h3>Día 4 — "¿Con qué me quedo?" — Tu stack personalizado</h3>
      <p>Montas tu kit definitivo. Las herramientas concretas que vas a usar cada día. Sesión guiada para dejarlo todo configurado. Sales con todo listo para el día 5: tu primer día de vuelta al trabajo, pero con IA.</p>
    </div>
  </div>
</section>
```

**Step 6: Rewrite the form — replace "perfil" with "sector" + add "cuéntanos más"**

Replace the form section (lines 265-310). Change the select from "perfil" to "sector" and add a textarea:

```html
<!-- Formulario lista de espera -->
<section class="section alt" id="reservar">
  <div class="section-inner form-section">
    <h2>Reserva tu plaza</h2>
    <p class="form-subtitle">Plazas limitadas. Déjanos tus datos y te avisamos cuando abramos inscripciones.</p>

    <form
      name="waitlist"
      method="POST"
      action="/gracias/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      class="waitlist-form"
    >
      <input type="hidden" name="form-name" value="waitlist" />
      <p class="hidden-field">
        <label>No rellenar: <input name="bot-field" /></label>
      </p>

      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="tu@email.com" />
      </div>

      <div class="form-group">
        <label for="sector">Sector</label>
        <select id="sector" name="sector" required>
          <option value="" disabled selected>¿En qué sector trabajas?</option>
          <option value="diseno">Diseño</option>
          <option value="desarrollo">Desarrollo / Programación</option>
          <option value="servicios">Servicios profesionales</option>
          <option value="administracion">Administración / Gestoría</option>
          <option value="marketing">Marketing / Publicidad</option>
          <option value="agencia">Agencia</option>
          <option value="consultoria">Consultoría</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div class="form-group">
        <label for="sobre-ti">Cuéntanos más sobre ti</label>
        <textarea id="sobre-ti" name="sobre-ti" rows="3" placeholder="¿A qué te dedicas? ¿Qué esperas del retiro?"></textarea>
      </div>

      <button type="submit" class="btn btn-primary btn-lg">Quiero reservar plaza</button>
    </form>

    <p class="form-note">Solo 12 plazas por edición. Primera edición: junio 2026.</p>
  </div>
</section>
```

Add textarea CSS inside the existing form styles:

```css
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: var(--font-body);
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #fff;
  color: var(--marron-tierra);
  transition: border-color 0.15s ease;
  resize: vertical;
}
.form-group textarea:focus {
  outline: none;
  border-color: var(--verde-musgo);
  box-shadow: 0 0 0 3px rgba(74, 124, 89, 0.1);
}
.form-group textarea::placeholder {
  color: #9ca3af;
}
```

**Step 7: Rewrite the inline FAQ**

Replace the 4 inline FAQ items (lines 239-262) with updated questions:

```html
<!-- FAQ inline -->
<section class="section">
  <div class="section-inner">
    <h2>Preguntas rápidas</h2>
    <div class="faq-inline">
      <details>
        <summary>¿Necesito saber programar?</summary>
        <p>No. Si sabes usar un navegador, puedes seguir el programa.</p>
      </details>
      <details>
        <summary>¿Es solo para gente de tecnología?</summary>
        <p>No. Es para cualquier profesional que quiera integrar IA en su trabajo: diseño, administración, marketing, consultoría, servicios...</p>
      </details>
      <details>
        <summary>¿Y si ya uso ChatGPT?</summary>
        <p>Perfecto, pero probablemente lo uses al 10% de su capacidad. Aquí vas mucho más allá.</p>
      </details>
      <details>
        <summary>¿Qué pasa si la IA que aprendo se queda obsoleta?</summary>
        <p>Por eso no te enseñamos UNA herramienta. Te enseñamos a evaluar y elegir. Y la comunidad alumni sigue activa con actualizaciones.</p>
      </details>
    </div>
    <p class="faq-more"><a href="/faq/">Ver todas las preguntas frecuentes</a></p>
  </div>
</section>
```

**Step 8: Verify the build**

Run: `cd /home/agustin/src/propuesta-ruralia && npm run build`
Expected: Build succeeds with no errors.

**Step 9: Commit**

```bash
git add src/pages/retiro-ia-galicia.astro
git commit -m "Rewrite retiro page with new positioning and updated form

New hero, tools grid, redesigned 4-day program, updated FAQ.
Form: replaced 'perfil' with 'sector' dropdown, added 'cuéntanos
más sobre ti' textarea field."
```

---

### Task 3: Rewrite Para Quién page (para-quien.astro)

**Files:**
- Modify: `src/pages/para-quien.astro`

**Step 1: Update meta tags**

Update `<Base>` title/description/keywords:

```
title="¿Es para ti? — Retiro de IA Rural IA"
description="Profesionales de 30-45 que siempre estuvieron al día con la tecnología pero se perdieron con la IA. Si te suena, este retiro es para ti."
keywords={['formación IA profesionales', 'curso IA diseño', 'IA para gestorías', 'IA para marketing', 'aprender IA sin programar']}
```

**Step 2: Rewrite the full page content**

Replace the entire `<section>` content (lines 20-59) with persona-based content:

```html
<section class="section">
  <div class="section-inner content">
    <h1>¿Te suena?</h1>

    <div class="persona">
      <h2>Lucía, 36, diseñadora gráfica</h2>
      <p>Lleva 10 años con Photoshop y Figma. Su clientela empieza a pedirle cosas "con IA" y no sabe por dónde empezar. Ha probado Midjourney por su cuenta pero siente que solo araña la superficie.</p>
    </div>

    <div class="persona">
      <h2>Marcos, 42, gestoría</h2>
      <p>Gestiona la contabilidad y trámites de 40 autónomos. Sabe que la IA podría ahorrarle horas de papeleo, pero no tiene tiempo de investigar cuál usar ni cómo integrarla sin liarla.</p>
    </div>

    <div class="persona">
      <h2>Andrea, 34, desarrolladora web freelance</h2>
      <p>Monta webs con WordPress desde 2015. Ve que herramientas como Cursor o Bolt están cambiando el juego pero entre proyectos y clientes no encuentra el momento de sentarse a aprenderlas.</p>
    </div>

    <div class="persona">
      <h2>Dani, 39, consultor de marketing digital</h2>
      <p>Lleva años vendiendo estrategia de SEO y redes. La IA está transformando su sector y necesita entender qué herramientas integrar antes de que su competencia lo haga primero.</p>
    </div>

    <h2>Esto es para ti si...</h2>
    <ul class="check-list">
      <li>Trabajas con tecnología y sabes que deberías estar usando IA, pero no encuentras el momento</li>
      <li>Eras la persona de referencia tech en tu entorno, pero la IA te ha adelantado</li>
      <li>Has probado ChatGPT o alguna herramienta de IA, pero sientes que solo arañas la superficie</li>
      <li>No tienes tiempo de investigar qué herramientas merecen la pena y cuáles son humo</li>
      <li>Quieres integrar IA en tu trabajo diario para ser más eficiente y ganar más</li>
    </ul>

    <h2>Esto NO es para ti si...</h2>
    <ul class="cross-list">
      <li>Buscas teoría académica o un máster de meses</li>
      <li>Ya trabajas con IA a diario y dominas varias herramientas</li>
      <li>No tienes portátil o no tienes ganas de experimentar</li>
      <li>Buscas un curso online para hacer a tu ritmo</li>
    </ul>

    <h2>Qué nivel necesitas</h2>
    <p><strong>No hace falta saber programar.</strong> Si sabes usar un navegador y herramientas digitales en tu trabajo, puedes seguir el programa sin problema. Esto no es un curso de programación. Es un curso de usar IA como herramienta profesional.</p>

    <h2>Todo incluido. Sin letra pequeña.</h2>
    <p>897 EUR (o 697 EUR early bird) incluye 4 días de formación, 3 noches de alojamiento, todas las comidas, acceso a herramientas, comunidad alumni y sesión de seguimiento. Son ~225 EUR/día con todo.</p>
    <ul>
      <li>Formación 100% <strong>deducible</strong> para autónomos y empresas</li>
      <li>Un bootcamp equivalente cuesta 2.500-7.000 EUR y dura meses</li>
      <li>Un retiro de IA en los Alpes cuesta 9.500 USD por 3 días</li>
    </ul>

    <div class="cta-block">
      <a href="/retiro-ia-galicia/#reservar" class="btn btn-lg">Reserva tu plaza</a>
    </div>
  </div>
</section>
```

**Step 3: Add persona CSS**

Add `.persona` styles to the `<style>` block:

```css
.persona {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--blanco-niebla);
  border-radius: 8px;
  border-left: 3px solid var(--verde-hoja);
}
.persona h2 {
  margin-top: 0;
  font-size: 1.2rem;
}
.persona p {
  margin-bottom: 0;
}
```

**Step 4: Verify the build**

Run: `cd /home/agustin/src/propuesta-ruralia && npm run build`
Expected: Build succeeds with no errors.

**Step 5: Commit**

```bash
git add src/pages/para-quien.astro
git commit -m "Rewrite para-quien page with concrete personas

Replace generic profiles with 4 named personas (Lucía, Marcos,
Andrea, Dani). Updated checklist, inclusive language, new pricing
context."
```

---

### Task 4: Rewrite FAQ page (faq.astro)

**Files:**
- Modify: `src/pages/faq.astro`

**Step 1: Update the FAQs array**

Replace the `faqs` array (lines 4-45) with updated questions. Keep logistics questions that don't change, update tone for new positioning, add new AI-specific questions:

```javascript
const faqs = [
  {
    q: '¿Necesito saber programar?',
    a: 'No. Si sabes usar un navegador y herramientas digitales en tu trabajo, puedes seguir el programa. Esto no es un curso de programación — es un curso de usar IA como herramienta profesional.',
  },
  {
    q: '¿Es solo para gente de tecnología?',
    a: 'No. Es para cualquier profesional que quiera integrar IA en su trabajo: diseño, administración, marketing, consultoría, servicios, agencias... Si usas un ordenador para trabajar, este retiro es para ti.',
  },
  {
    q: '¿Y si ya uso ChatGPT?',
    a: 'Perfecto, pero probablemente lo uses al 10% de su capacidad. En el retiro vas mucho más allá: asistentes personalizados, automatizaciones, herramientas de construcción, tu propio stack completo.',
  },
  {
    q: '¿Qué pasa si la IA que aprendo se queda obsoleta en 2 meses?',
    a: 'Por eso no te enseñamos UNA herramienta. Te enseñamos a evaluar, comparar y elegir. Además, nuestro equipo sigue investigando cada semana y la comunidad alumni se mantiene activa con actualizaciones.',
  },
  {
    q: '¿Cómo llego a Anceu?',
    a: 'Anceu está a 30 min de Pontevedra y 45 min de Vigo. Si vienes en avión, el aeropuerto más cercano es Vigo (VGO). Podemos coordinar transporte desde Pontevedra o Vigo.',
  },
  {
    q: '¿Qué tengo que llevar?',
    a: 'Tu portátil y ganas de aprender. Todo lo demás (alojamiento, comidas, materiales, software) está incluido.',
  },
  {
    q: '¿Puedo deducirme el coste?',
    a: 'Si eres autónomo o empresa, sí. Es un gasto de formación profesional deducible en tu IRPF o Impuesto de Sociedades.',
  },
  {
    q: '¿Cuál es la política de cancelación?',
    a: 'Cancelación gratuita hasta 15 días antes. Entre 15 y 7 días, devolvemos el 50%. Menos de 7 días, no hay devolución (pero puedes transferir tu plaza a otra persona).',
  },
  {
    q: '¿Hay wifi bueno?',
    a: '1 Gbps de fibra óptica. Anceu es un coliving tech, la conectividad es prioridad.',
  },
  {
    q: '¿Cuántas personas hay por edición?',
    a: 'Máximo 12. Grupos pequeños para atención personalizada.',
  },
  {
    q: '¿Qué me llevo al terminar?',
    a: 'Herramientas de IA configuradas y funcionando en tu trabajo real, flujos de automatización, un prototipo propio, acceso a la comunidad alumni, materiales y una sesión de follow-up online a las 2-3 semanas.',
  },
  {
    q: '¿Qué pasa si llueve?',
    a: 'Estamos en Galicia, así que es probable. Toda la formación es en interior. La lluvia es parte del encanto.',
  },
];
```

**Step 2: Update the Base meta tags**

```
title="Preguntas frecuentes — Retiro de IA Rural IA"
description="Todo lo que necesitas saber sobre el retiro de IA en Galicia: nivel necesario, qué herramientas se aprenden, política de cancelación y más."
keywords={['precio retiro IA', 'necesito saber programar IA', 'cómo llegar Anceu', 'qué incluye retiro IA', 'retiro IA preguntas']}
```

**Step 3: Verify the build**

Run: `cd /home/agustin/src/propuesta-ruralia && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/pages/faq.astro
git commit -m "Rewrite FAQ with new positioning questions

Add questions about ChatGPT usage, tool obsolescence, non-tech
professionals. Updated tone for inclusive, sector-agnostic language."
```

---

### Task 5: Final review and build verification

**Files:** All modified pages

**Step 1: Full build**

Run: `cd /home/agustin/src/propuesta-ruralia && npm run build`
Expected: Build succeeds with 0 errors.

**Step 2: Verify no broken links**

Check that all internal links in the modified pages point to existing routes:
- `/retiro-ia-galicia/`
- `/retiro-ia-galicia/#reservar`
- `/para-quien/`
- `/faq/`
- `/gracias/`

**Step 3: Verify form field names**

Ensure the form `name` attributes are consistent:
- `nombre` (text)
- `email` (email)
- `sector` (select, replaces old `perfil`)
- `sobre-ti` (textarea, new field)

Note: Since this is a Netlify form, the new fields will be automatically detected on the next deploy. No backend changes needed.

**Step 4: Commit if any final fixes were needed**

```bash
git add -A
git commit -m "Fix any final issues from content rewrite"
```
