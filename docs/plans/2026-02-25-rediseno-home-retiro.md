# Rediseño Home + Retiro Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Aplicar una batería de cambios de copy, UX y funcionalidad en la home, `/retiro-ia-galicia/` y `/para-quien/`.

**Architecture:** Todos los cambios son en archivos `.astro` existentes y el componente `Header.astro`. No se crean páginas nuevas salvo el componente del newsletter popup. Sin dependencias externas nuevas.

**Tech Stack:** Astro, CSS scoped, vanilla JS inline, HTML

---

## Task 1: Menú — "El retiro" → "Residencia IA" + añadir "Quiénes somos"

**Files:**
- Modify: `src/pages/index.astro` (nav inline, líneas ~92-96)
- Modify: `src/components/Header.astro` (nav array, línea ~4-9)

**Step 1: Editar el nav de `index.astro`**

Cambiar:
```html
<a href="/retiro-ia-galicia/">El retiro</a>
```
Por:
```html
<a href="/retiro-ia-galicia/">Residencia IA</a>
<a href="/sobre-nosotros/">Quiénes somos</a>
```

**Step 2: Editar el array de nav en `Header.astro`**

Cambiar:
```js
{ href: '/retiro-ia-galicia/', label: 'El retiro' },
```
Por:
```js
{ href: '/retiro-ia-galicia/', label: 'Residencia IA' },
{ href: '/sobre-nosotros/', label: 'Quiénes somos' },
```

**Step 3: Commit**
```bash
git add src/pages/index.astro src/components/Header.astro
git commit -m "feat: rename 'El retiro' to 'Residencia IA' and add 'Quiénes somos' to nav"
```

---

## Task 2: Hero copy + animación de escritura + nuevo subtítulo

**Files:**
- Modify: `src/pages/index.astro` (sección hero, líneas ~104-126)

**Step 1: Actualizar el subtítulo**

Cambiar el bloque `.hero-sub-text`:
```html
<div class="hero-sub-text">
  <p>4 días en Galicia para integrar IA en tu flujo de trabajo real. 12 plazas. Todo incluido.</p>
  <p class="hero-date">3 – 7 junio 2026 · <a href="https://anceu.com" target="_blank" rel="noopener">Anceu Coliving</a>, Pontevedra</p>
</div>
```
Por:
```html
<div class="hero-sub-text">
  <p>La IA no te va a quitar el trabajo, pero un profesional que sabe usarla sí. Por eso esta residencia es un sprint para integrar IA en tu flujo de trabajo real. Sólo 12 profesionales podrán participar y la experiencia es un todo incluido desde la formación hasta el alojamiento, comida y ocio.</p>
  <p class="hero-date">3–7 de junio 2026 · <a href="https://anceu.com" target="_blank" rel="noopener">Anceu Coliving</a></p>
</div>
```

**Step 2: Añadir animación de escritura al h1**

El h1 actualmente es:
```html
<h1 class="hero-headline">LA IA AVANZA.<br/><span class="hero-headline-q">¿TU TRABAJO TAMBIÉN?</span></h1>
```

Añadir un `id` y script para que primero aparezca como pregunta y luego se reescriba como afirmación:
```html
<h1 class="hero-headline" id="hero-headline">
  <span id="hero-line1"></span><br/>
  <span class="hero-headline-q" id="hero-line2"></span>
</h1>
```

Script (añadir al bloque `<script>` existente):
```js
// Typing animation hero headline
(function() {
  const line1El = document.getElementById('hero-line1');
  const line2El = document.getElementById('hero-line2');
  if (!line1El || !line2El) return;

  const phases = [
    { l1: '¿LA IA AVANZA', l2: '¿Y TU TRABAJO TAMBIÉN?' },   // pregunta
    { l1: 'LA IA AVANZA.', l2: 'TU TRABAJO TAMBIÉN.' },       // afirmación
  ];

  function typeText(el, text, speed, done) {
    el.textContent = '';
    let i = 0;
    const iv = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) { clearInterval(iv); if (done) done(); }
    }, speed);
  }

  function eraseText(el, speed, done) {
    const iv = setInterval(() => {
      el.textContent = el.textContent.slice(0, -1);
      if (!el.textContent) { clearInterval(iv); if (done) done(); }
    }, speed);
  }

  // Fase 1: escribe la pregunta
  typeText(line1El, phases[0].l1, 55, () => {
    typeText(line2El, phases[0].l2, 55, () => {
      // Pausa 1.8s, luego borra y reescribe como afirmación
      setTimeout(() => {
        eraseText(line2El, 30, () => {
          eraseText(line1El, 30, () => {
            typeText(line1El, phases[1].l1, 55, () => {
              typeText(line2El, phases[1].l2, 55, null);
            });
          });
        });
      }, 1800);
    });
  });
})();
```

**Step 3: Commit**
```bash
git add src/pages/index.astro
git commit -m "feat: update hero subtitle and add typing animation to headline"
```

---

## Task 3: Reordenar home — foto, "Aprende IA en 4 días" después de la foto

**Files:**
- Modify: `src/pages/index.astro` (sección hero, ~líneas 104-126)

El orden del hero debe quedar:
1. Headline (con animación)
2. Subtítulo + fecha + botón reservar
3. Foto panorámica
4. Enlace/bloque "Aprende IA en 4 días" clickable → `/retiro-ia-galicia/`

Actualmente la foto ya está después del subtítulo. Sólo hay que añadir el bloque de "Aprende IA en 4 días" después de `.hero-photo`:

```html
<a href="/retiro-ia-galicia/" class="hero-learn-link">
  Aprende IA en 4 días en Galicia →
</a>
```

Con estos estilos:
```css
.hero-learn-link {
  display: block;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #555;
  letter-spacing: 0.03em;
  text-decoration: none;
  padding: 1rem 0 0.5rem;
  transition: color 0.15s;
}
.hero-learn-link:hover { color: #000; }
```

**Step 4: Commit**
```bash
git add src/pages/index.astro
git commit -m "feat: add 'Aprende IA en 4 días' link after hero photo"
```

---

## Task 4: "Qué es ruralGPT" — actualizar copy

**Files:**
- Modify: `src/pages/index.astro` (sección noise, línea ~132-133)

Cambiar:
```html
<p>Un retiro inmersivo de IA aplicada para profesionales. 4 días en Galicia. Formación práctica, alojamiento y comidas incluidas. Grupos de 12 personas.</p>
```
Por:
```html
<p>Una experiencia inmersiva de IA aplicada para profesionales. 4 días en Galicia. Formación práctica, alojamiento y comidas incluidas. Grupos de 12 personas.</p>
```

**Step 5: Commit**
```bash
git add src/pages/index.astro
git commit -m "fix: update 'Qué es ruralGPT' copy (retiro → experiencia)"
```

---

## Task 5: Reemplazar "Protocolo de 4 días" con nuevo copy

**Files:**
- Modify: `src/pages/index.astro` (sección protocol, línea ~147)

Cambiar el `<h2>`:
```html
<h2 class="protocol-h">El protocolo de 4 días</h2>
```
Por:
```html
<h2 class="protocol-h">No dejes que el ritmo de la tecnología te deje fuera del mercado.</h2>
<p class="protocol-intro">Esto es lo que haremos en 4 días para que actualices tu stack profesional y recuperes el control de tu carrera con IA aplicada de verdad.</p>
```

Añadir estilo:
```css
.protocol-intro {
  text-align: center;
  color: #666;
  max-width: 640px;
  margin: 0 auto 2.5rem;
  font-size: 1rem;
}
```

**Step 6: Commit**
```bash
git add src/pages/index.astro
git commit -m "feat: replace '4-day protocol' heading with urgency copy"
```

---

## Task 6: "La arquitectura del retiro" → "Dónde vivirás esta experiencia"

**Files:**
- Modify: `src/pages/index.astro` (línea ~189)

Cambiar:
```html
<p class="tag tag-italic">La arquitectura del retiro</p>
```
Por:
```html
<p class="tag tag-italic">Dónde vivirás esta experiencia</p>
```

**Step 7: Commit**
```bash
git add src/pages/index.astro
git commit -m "fix: rename 'La arquitectura del retiro' section"
```

---

## Task 7: "Lo que dicen los participantes" → nuevo texto

**Files:**
- Modify: `src/pages/index.astro` (línea ~219)

Cambiar:
```html
<p class="tag">Lo que dicen los participantes</p>
```
Por:
```html
<p class="tag">Lo que dicen quienes vivieron la experiencia Rural GPT</p>
```

**Step 8: Commit**
```bash
git add src/pages/index.astro
git commit -m "fix: update testimonials section label"
```

---

## Task 8: Quitar equipo de home, sección Quiénes somos ya existe en nav

**Files:**
- Modify: `src/pages/index.astro` (líneas ~296-307)

Eliminar completamente:
```html
<!-- ===== EQUIPO ===== -->
<section class="section team">
  <div class="team-grid">
    {team.map((person) => (
      <div class="team-card">
        <img src={person.photo} alt={person.name} class="team-photo" />
        <p class="team-name">{person.name}</p>
        <p class="team-bio" set:html={person.bio} />
      </div>
    ))}
  </div>
</section>
```

También eliminar la variable `const team = [...]` del frontmatter (líneas 46-50) si no se usa en otro sitio de la home.

**Step 9: Commit**
```bash
git add src/pages/index.astro
git commit -m "feat: remove team section from home (accessible via 'Quiénes somos' in nav)"
```

---

## Task 9: Countdown banner — coloreado y al inicio de la sección pricing

**Files:**
- Modify: `src/pages/index.astro` (estilos `.countdown-banner`)
- Modify: `src/pages/retiro-ia-galicia.astro` (estilos `.countdown-banner`)

El banner actualmente es gris (#f5f5f5). Hacerlo verde anceu con texto blanco:

Cambiar en ambos archivos:
```css
.countdown-banner {
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  ...
}
.countdown-label { color: #555; }
.countdown-timer { color: #000; }
.countdown-next { color: #555; }
```
Por:
```css
.countdown-banner {
  background: #00a66b;
  border: 1px solid #009060;
  ...
}
.countdown-label { color: rgba(255,255,255,0.85); }
.countdown-timer { color: #fff; }
.countdown-next { color: rgba(255,255,255,0.85); }
```

**Step 10: Commit**
```bash
git add src/pages/index.astro src/pages/retiro-ia-galicia.astro
git commit -m "feat: color countdown banner with Anceu green"
```

---

## Task 10: Botones — color verde Anceu #00a66b

**Files:**
- Modify: `src/layouts/Base.astro` (estilos globales `.btn-primary`, `.btn-gold`)
- Modify: `src/pages/index.astro` (`.btn-dark`, `.nav-cta`)

Cambiar en `Base.astro`:
```css
.btn-primary { background: #00a66b; color: #fff; }
.btn-primary:hover { background: #009060; color: #fff; }
.btn-gold { background: #00a66b; color: #fff; }
.btn-gold:hover { background: #009060; color: #fff; }
```

En `index.astro`, cambiar `.btn-dark` y `.nav-cta`:
```css
.btn-dark { background: #00a66b; color: #fff; }
.btn-dark:hover { background: #009060; }
.nav-cta { background: #00a66b; }
.nav-cta:hover { opacity: 0.85; }
```

**Step 11: Commit**
```bash
git add src/layouts/Base.astro src/pages/index.astro
git commit -m "feat: apply Anceu green #00a66b to all CTA buttons"
```

---

## Task 11: Favicon — R (Inter light) + GPT (Inter bold)

**Files:**
- Create: `public/favicon.svg` (reemplazar el existente)

Generar un SVG inline con el texto "R" en Inter 300 y "GPT" en Inter 700:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="6" fill="#000"/>
  <text x="3" y="23" font-family="Inter, sans-serif" font-size="15" font-weight="300" fill="#fff">R</text>
  <text x="13" y="23" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#fff">GPT</text>
</svg>
```

Nota: El favicon SVG se usa tal cual en navegadores modernos. Para IE/legacy ya existe el `favicon.ico`.

**Step 12: Commit**
```bash
git add public/favicon.svg
git commit -m "feat: new favicon with R (light) + GPT (bold) in Inter"
```

---

## Task 12: Newsletter popup al entrar

**Files:**
- Create: `src/components/NewsletterPopup.astro`
- Modify: `src/layouts/Base.astro` (importar y usar el componente)

El popup se muestra una sola vez por sesión (usando `sessionStorage`). Diseño minimalista, centrado, con overlay oscuro.

**`src/components/NewsletterPopup.astro`:**
```astro
---
---
<div id="newsletter-overlay" class="nl-overlay" style="display:none;" role="dialog" aria-modal="true" aria-label="Suscríbete a la newsletter">
  <div class="nl-modal">
    <button class="nl-close" id="nl-close" aria-label="Cerrar">✕</button>
    <p class="nl-eyebrow">Newsletter</p>
    <h2 class="nl-title">Cada semana, las herramientas de IA que merecen tu tiempo.</h2>
    <p class="nl-desc">Sin ruido. Sólo lo que funciona. Gratis.</p>
    <form class="nl-form" id="nl-form" action="#" method="POST">
      <input type="email" name="email" placeholder="tu@email.com" required class="nl-input" autocomplete="email" />
      <button type="submit" class="nl-btn">Suscribirme</button>
    </form>
    <button class="nl-skip" id="nl-skip">Ahora no</button>
  </div>
</div>

<style>
  .nl-overlay {
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(0,0,0,0.6);
    display: flex; align-items: center; justify-content: center;
    padding: 1.5rem;
  }
  .nl-modal {
    background: #fff; border-radius: 12px;
    padding: 2.5rem 2rem; max-width: 440px; width: 100%;
    position: relative; text-align: center;
  }
  .nl-close {
    position: absolute; top: 1rem; right: 1rem;
    background: none; border: none; cursor: pointer;
    font-size: 1rem; color: #999; padding: 0.25rem;
  }
  .nl-eyebrow { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #999; margin: 0 0 0.75rem; }
  .nl-title { font-size: 1.35rem; font-weight: 700; letter-spacing: -0.03em; margin: 0 0 0.75rem; line-height: 1.3; }
  .nl-desc { font-size: 0.95rem; color: #666; margin: 0 0 1.5rem; }
  .nl-form { display: flex; gap: 0.5rem; flex-wrap: wrap; }
  .nl-input {
    flex: 1; min-width: 0; padding: 0.75rem 1rem;
    border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;
    font-family: inherit; outline: none;
  }
  .nl-input:focus { border-color: #00a66b; }
  .nl-btn {
    background: #00a66b; color: #fff; border: none; border-radius: 6px;
    padding: 0.75rem 1.25rem; font-size: 0.95rem; font-weight: 600;
    cursor: pointer; font-family: inherit; white-space: nowrap;
    transition: background 0.15s;
  }
  .nl-btn:hover { background: #009060; }
  .nl-skip {
    background: none; border: none; cursor: pointer;
    font-size: 0.8rem; color: #aaa; margin-top: 1rem;
    font-family: inherit; text-decoration: underline;
  }
  .nl-skip:hover { color: #666; }
</style>

<script>
  (function() {
    if (sessionStorage.getItem('nl_dismissed')) return;
    const overlay = document.getElementById('newsletter-overlay');
    if (!overlay) return;
    // Mostrar tras 3 segundos
    setTimeout(() => { overlay.style.display = 'flex'; }, 3000);
    function dismiss() {
      overlay.style.display = 'none';
      sessionStorage.setItem('nl_dismissed', '1');
    }
    document.getElementById('nl-close')?.addEventListener('click', dismiss);
    document.getElementById('nl-skip')?.addEventListener('click', dismiss);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) dismiss(); });
    document.getElementById('nl-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      dismiss();
      // TODO: conectar a Mailchimp/ConvertKit/etc.
    });
  })();
</script>
```

**En `Base.astro`** añadir import y uso:
```astro
import NewsletterPopup from '../components/NewsletterPopup.astro';
```
Y dentro del `<body>`:
```html
<NewsletterPopup />
```

**Step 13: Commit**
```bash
git add src/components/NewsletterPopup.astro src/layouts/Base.astro
git commit -m "feat: add newsletter popup (shows after 3s, dismissed per session)"
```

---

## Task 13: Formulario de contacto al final de la home

**Files:**
- Modify: `src/pages/index.astro` (antes del cierre `</Base>`, después del CTA final)

Añadir antes de `</Base>`:
```html
<!-- ===== CONTACTO ===== -->
<section class="section contact-section" id="contacto">
  <div class="section-inner contact-inner">
    <h2>¿Tienes dudas? Escríbenos</h2>
    <form class="contact-form" name="contacto" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contacto" />
      <div class="contact-row">
        <input type="text" name="nombre" placeholder="Tu nombre" required class="contact-input" />
        <input type="email" name="email" placeholder="tu@email.com" required class="contact-input" />
      </div>
      <textarea name="mensaje" placeholder="Cuéntanos tu duda o situación..." rows="4" required class="contact-input contact-textarea"></textarea>
      <button type="submit" class="btn btn-primary">Enviar mensaje</button>
    </form>
  </div>
</section>
```

Estilos:
```css
.contact-inner { max-width: 640px; margin: 0 auto; }
.contact-form { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
.contact-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.contact-input {
  padding: 0.75rem 1rem; border: 1px solid #ddd; border-radius: 6px;
  font-size: 1rem; font-family: inherit; outline: none; width: 100%;
}
.contact-input:focus { border-color: #00a66b; }
.contact-textarea { resize: vertical; }
@media (max-width: 540px) { .contact-row { grid-template-columns: 1fr; } }
```

Nota: usa `data-netlify="true"` que ya está soportado por el hosting Netlify.

**Step 14: Commit**
```bash
git add src/pages/index.astro
git commit -m "feat: add contact form section at the bottom of home"
```

---

## Task 14: Reordenar secciones de la home según spec

**Files:**
- Modify: `src/pages/index.astro` (reordenar bloques HTML)

Orden final deseado:
1. NAV
2. HERO (headline + subtítulo + foto + "Aprende IA en 4 días")
3. Qué es ruralGPT (noise section)
4. "No dejes que el ritmo..." + protocolo de 4 días
5. Las herramientas que aprenderás
6. Dónde vivirás esta experiencia (arch)
7. Precio (con countdown)
8. Reseñas / Testimonials
9. "Millones de personas usan ChatGPT..." (GPT section)
10. CTA final
11. Contacto

Actualmente el orden es: hero → noise → protocol → GPT → arch → testimonials → pricing → equipo → herramientas → CTA

Hay que mover bloques de HTML. Identificar cada sección por su comentario `<!-- ===== NOMBRE ===== -->` y reordenarlos.

**Step 15: Commit**
```bash
git add src/pages/index.astro
git commit -m "feat: reorder home sections per spec"
```

---

## Task 15: `/para-quien/` — reordenar "Esto es para ti si..." primero, luego "¿Te suena?"

**Files:**
- Modify: `src/pages/para-quien.astro`

Mover el bloque `<h2>Esto es para ti si...</h2>` + `<ul class="check-list">` arriba del todo (antes de los `<div class="persona">`), y las personas debajo con un `<h2>¿Te suena?</h2>` como encabezado.

Nuevo orden:
```html
<h1>¿Es para ti?</h1>

<h2>Esto es para ti si...</h2>
<ul class="check-list">...</ul>

<h2>¿Te suena?</h2>
<div class="persona">Lucía...</div>
<div class="persona">Marcos...</div>
...

<h2>Esto NO es para ti si...</h2>
...
```

**Step 16: Commit**
```bash
git add src/pages/para-quien.astro
git commit -m "feat: reorder para-quien page (checklist first, then personas)"
```

---

## Task 16: `/retiro-ia-galicia/` — Hero copy actualizado

**Files:**
- Modify: `src/pages/retiro-ia-galicia.astro` (líneas ~102-106)

Cambiar:
```html
<h1>Ponte al día con IA en 4 días. Todo incluido.</h1>
<p class="hero-sub">Nosotros investigamos por ti — y lo seguimos haciendo cada semana. Tú vienes 4 días a Galicia y te vas con las herramientas de IA configuradas para tu trabajo.</p>
<a href="/#pricing" class="btn btn-primary btn-lg">Reserva tu plaza</a>
```
Por:
```html
<h1>Ponte al día con IA en 4 días. Todo incluido.</h1>
<p class="hero-sub">Esto es para ti si sientes que la IA va más rápido de lo que puedes procesar y quieres "un cortafuegos". En 4 días filtramos el ruido y te damos las herramientas exactas para que tu experiencia profesional se potencie, no se oxide.</p>
<p class="hero-sub">Nosotros investigamos por ti — y lo seguimos haciendo cada semana. Tú vienes 4 días a Galicia y te vas con las herramientas de IA configuradas para tu trabajo.</p>
<a href="/#pricing" class="btn btn-primary btn-lg">Aprovechar la oferta lanzamiento</a>
```

**Step 17: Commit**
```bash
git add src/pages/retiro-ia-galicia.astro
git commit -m "feat: update retiro hero copy and CTA button text"
```

---

## Task 17: `/retiro-ia-galicia/` — Quitar "Rincón del Vago", actualizar "retiro" → "Residencia IA", "Programa:"

**Files:**
- Modify: `src/pages/retiro-ia-galicia.astro`

**Step 1: Eliminar la sección "Rincón del Vago"** (líneas ~133-140):
```html
<!-- Problema / Solución -->
<section class="section">
  <div class="section-inner text-center">
    <h2>El Rincón del Vago de la IA — pero da igual que te pillen</h2>
    <p>¿Te acuerdas del Rincón del Vago?...</p>
    <p class="highlight-text">En 4 días te transferimos todo ese conocimiento...</p>
  </div>
</section>
```

**Step 2: En `Qué incluye`, cambiar instancias de "retiro" por "Residencia IA":**
- "Acceso al grupo privado de alumni después del retiro" → "...después de la Residencia IA"

**Step 3: Añadir "Programa:" al título del programa:**
```html
<h2>4 días. De "no me entero" a "ya lo tengo claro".</h2>
```
Por:
```html
<h2>Programa: De "no me entero" a "ya lo tengo claro".</h2>
```

**Step 18: Commit**
```bash
git add src/pages/retiro-ia-galicia.astro
git commit -m "feat: remove 'Rincón del Vago', rename to Residencia IA, add Programa: prefix"
```

---

## Task 18: Push final

```bash
git push
```

---

## Resumen de archivos tocados

| Archivo | Cambios |
|---|---|
| `src/pages/index.astro` | Nav, hero copy+animación, copy secciones, reordenado, botones, contacto |
| `src/components/Header.astro` | Nav links |
| `src/layouts/Base.astro` | Colores botones, newsletter popup import |
| `src/components/NewsletterPopup.astro` | Nuevo componente (crear) |
| `src/pages/para-quien.astro` | Reordenar secciones |
| `src/pages/retiro-ia-galicia.astro` | Hero copy, quitar sección, renombrar |
| `public/favicon.svg` | Nuevo favicon |
