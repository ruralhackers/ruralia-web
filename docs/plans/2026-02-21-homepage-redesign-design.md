# Homepage Redesign — Design Doc

**Fecha:** 2026-02-21
**Estado:** Aprobado

## Objetivo

Rediseñar la homepage de Rural IA para comunicar el producto de forma más distintiva. El cambio principal: un hero oscuro estilo interfaz de IA (ChatGPT/Gemini) que contrasta deliberadamente con las secciones cálidas del resto de la página.

## Estructura de secciones

### S1 — Hero oscuro (AI chat aesthetic)
- Fondo `#0A0A0A`, full viewport height
- Nav integrado en el hero: logo "Rural IA" izquierda, links centro, botón "Reservar" verde derecha
- Bloque central tipo interfaz de chat:
  - Icono de nodos (SVG) como avatar
  - Pregunta/prompt: "¿Te acuerdas del Rincón del Vago?"
  - "Respuesta" con el copy: fatiga por herramientas, 4 días, sin miedo a que te pillen
  - CTA "Reserva tu plaza" + "Desde 697 EUR · Junio 2026"

**Copy hero:**
> ¿Te acuerdas del Rincón del Vago?
>
> Todos los que lo usamos recordamos esa sensación de alivio al encontrar el camino corto. Nuestra propuesta te hará sentir lo mismo, pero sin el miedo a que te pillen.
>
> En 4 días eliminarás la fatiga por herramientas: separar lo que funciona de lo que es humo.

### S2 — Foto ancho completo
- Foto de Anceu, transición visual al mundo cálido
- Sin cambios respecto al estado actual

### S3 — Qué incluye
- Fondo crema
- Encabezado: "Ponte al día con IA en 4 días. Todo incluido."
- 6 tarjetas estilo Apple: icono SVG + título en negrita + descripción en una línea
- Eliminar el texto "Nosotros investigamos por ti"
- Items: Formación, Alojamiento, Comidas, Materiales, Comunidad alumni, Follow-up

### S4 — Herramientas
- Grid existente, sin cambios estructurales
- Actualizar descripción de ChatGPT: tono menos soberbio, más invitador

### S5 — Programa
- Añadir título "Programa" como H2 de sección
- Añadir subtítulo: "Nuestro objetivo es que las 12 personas seleccionadas lleguen con 'no me entero' y se vayan con 'esta es la herramienta que voy a usar cada día'."
- Cards de días: sin cambios de contenido

### S6 — Stats
- Sin cambios

### S7 — Para quién
- Sin cambios

### S8 — CTA final oscuro
- Sin cambios

## Decisiones de diseño

- **Paleta hero:** negro `#0A0A0A`, texto blanco/gris, acento verde del brand (`#2D5A3D` para el botón)
- **Tipografía:** Inter existente, sin cambios
- **Transición hero→foto:** la imagen full-width hace de puente entre el mundo oscuro y el cálido
- **Nav en hero:** integrado en el hero (no header separado) para que el efecto de pantalla completa funcione. El header normal aparece en scroll o en el resto de páginas.
- **Icono nodos:** SVG inline, reemplaza el logo actual en el hero

## Fuera de scope

- Página `/retiro-ia-galicia/` (siguiente iteración)
- Fotos del equipo (placeholders)
- Cambio de nombre de marca
- Cambio de favicon/logo principal
