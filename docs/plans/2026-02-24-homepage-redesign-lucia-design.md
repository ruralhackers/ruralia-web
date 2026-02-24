# Homepage Redesign (Lucía feedback) — Design Doc

**Fecha:** 2026-02-24
**Estado:** Aprobado
**Scope:** Solo homepage (`src/pages/index.astro`). Sin cambios de branding ni nombre.

## Objetivo

Rediseñar la homepage de Rural IA desde cero basándose en el feedback de Lucía (Ruralia-Anceu.pdf). El cambio principal: hero que simula literalmente una interfaz de chat IA (estilo Gemini), seguido de secciones minimalistas con mucho espacio en blanco (referencia: bulla.com.ar + Apple).

## Referencia visual

- **bulla.com.ar**: minimalismo, grid limpio, mucho whitespace, imagen protagonista
- **Gemini/ChatGPT**: interfaz de chat oscura, prompt + respuesta en burbuja
- **Apple (sección "Por qué comprar en Apple")**: iconos + título bold + descripción una línea

## Estructura de secciones

### S1 — Hero chat oscuro (full viewport, `100vh`)

- Fondo `#0A0A0A`, texto blanco/gris
- **Nav integrada** dentro del hero (el Header global se oculta solo en la homepage):
  - Izquierda: logo "Rural IA"
  - Centro: links (El retiro, Para quién, Blog, FAQ)
  - Derecha: botón "Reservar" (verde brand)
- **Bloque central tipo chat**:
  - Icono ✦ + texto "Hola." en pequeño
  - H1/prompt del usuario: `"¿Te acuerdas del Rincón del Vago?"`
  - Burbuja de respuesta (fondo `#1A1A1A`, borde `rgba(255,255,255,0.1)`, border-radius 12px):
    - Copy: *"Todos los que lo usamos recordamos esa sensación de alivio al encontrar el camino corto. Nuestra propuesta te hará sentir lo mismo, pero sin el miedo a que te pillen. En 4 días eliminarás la fatiga por herramientas: separar lo que funciona de lo que es humo."*
    - Botón "Reserva tu plaza" (verde brand, dentro de la burbuja)
    - Texto secundario: "Desde 697 EUR todo incluido · Junio 2026"

### S2 — Foto Anceu (full-width)

- Sin cambios respecto al estado actual
- `max-height: 520px`, `object-fit: cover`
- Transición visual del mundo oscuro al cálido

### S3 — Qué incluye

- Fondo: crema (`#F5F0E8`)
- H2: `"Ponte al día con IA en 4 días. Todo incluido."`
- Grid 3×2 de tarjetas estilo Apple: icono SVG + título bold + descripción en una línea
- **Items:**
  1. **Formación** — 4 días de talleres prácticos con herramientas de IA
  2. **Alojamiento** — 3 noches en [Anceu Coliving ↗](https://anceu.com) *(link externo)*
  3. **Comidas** — Desayuno, comida y cena los 4 días. Gastronomía gallega.
  4. **Materiales** — Acceso a todas las herramientas, licencias y materiales del curso
  5. **Comunidad alumni** — Acceso al grupo privado de alumni después del retiro
  6. **Follow-up** — Sesión online grupal de seguimiento a las 2-3 semanas
- **Eliminar** la frase "Nosotros investigamos por ti" (ya no aparece en ninguna sección)
- Hover: sombra sutil + borde verde más oscuro (sin animaciones agresivas, estilo bulla)

### S4 — Quiénes somos (sección nueva)

- Fondo: blanco niebla (`#FAFAF7`)
- H2: `"¿Quiénes somos?"`
- Subtítulo: *"Somos profesionales en actividad anticipándonos a este futuro. Probamos, rompemos y descartamos herramientas de IA cada semana para que cada asistente se lleve las que le van a funcionar en su actividad."*
- 3 tarjetas horizontales (foto + nombre + bio):
  - Foto: círculo gris placeholder (80×80px) hasta tener fotos reales
  - **Agustín Jamardo** — Fundador de Anceu Coliving. Desarrollador, 12+ años en remoto.
  - **África Rodríguez** — Cofundadora de Rural Hackers. Facilitadora de proyectos europeos (Erasmus+).
  - **Nacho Márquez** — Cofundador de Rural Hackers. Director de Noites Abertas. 20+ proyectos internacionales.
- Layout: 3 columnas en desktop, 1 columna en mobile

### S5 — Herramientas que aprenderás a usar

- Fondo: crema
- Sin cambios estructurales en el grid
- **Actualizar descripción de ChatGPT**: *"Probablemente ya la uses. Aquí vas mucho más allá del 10% de su capacidad."*
- Revisar todas las descripciones: quitar superlativos vacíos, tono más práctico y menos soberbio

### S6 — Programa

- Fondo: blanco niebla
- H2: `"Programa"`
- Subtítulo: *"Nuestro objetivo: las 12 personas seleccionadas llegan con 'no me entero' y se van con 'esta es la herramienta que voy a usar cada día'."*
- Grid 2×2 de días: sin cambios de contenido en los 4 días existentes

### S7 — Precio (sección nueva)

- Fondo: crema
- H2: `"Precio"`
- Subtítulo: `"Junio 2026 · Anceu Coliving, Galicia · 12 plazas"`
- Dos tarjetas lado a lado:
  - **Early Bird** (primeras 5 plazas): 697 EUR — tarjeta con borde verde destacado
  - **Normal**: 897 EUR — tarjeta estándar
  - Ambas incluyen el mismo listado: 4 días de formación, 3 noches de alojamiento, todas las comidas, materiales y licencias, comunidad alumni, sesión follow-up
- Botón "Reserva tu plaza" debajo de las tarjetas

### S8 — CTA final oscuro

- Sin cambios: fondo `#1A3A2A`, "El día 5 vuelves a tu trabajo. Pero diferente."
- Botón dorado

## Secciones eliminadas

- **Stats** (600K profesionales, +56% productividad, 0 retiros): quitada. Eran datos difíciles de verificar y añadían poco.
- **Sección problema** ("Eras quien siempre sabía"): quitada. El hero ya hace ese trabajo.
- **Sección solución** ("El Rincón del Vago" como sección separada): absorbida por el hero.
- **Para quién (preview)**: quitada de homepage. Sigue existiendo como página separada `/para-quien/`.
- **Un día típico**: quitada (Lucía: "para web medio raro", mejor para redes sociales).

## Decisiones de diseño

- **Nav en hero**: el Header global (`Header.astro`) se oculta con `display: none` en la homepage usando una clase en `<body>` o `<main>`. La nav del hero es CSS puro dentro de `index.astro`.
- **Paleta hero**: `#0A0A0A` fondo, `#FFFFFF` texto principal, `rgba(255,255,255,0.6)` texto secundario, `#1A1A1A` burbuja respuesta.
- **Transición de mundos**: la foto de Anceu (S2) hace de puente entre el mundo oscuro (hero) y el mundo cálido crema del resto.
- **Whitespace**: secciones con `padding: 100px 1.5rem` en desktop. Cards con mucho respiro interior.
- **Fotos equipo**: placeholders circulares grises por ahora. Cuando lleguen las fotos reales se reemplazan en `src/assets/images/team/`.

## Fuera de scope

- Cambio de nombre o branding (Rural IA, favicon, colores globales)
- Página `/retiro-ia-galicia/` (iteración posterior)
- FAQ (ajuste de tono es tarea separada, edición de texto en `/faq/`)
- Fotos reales del equipo
