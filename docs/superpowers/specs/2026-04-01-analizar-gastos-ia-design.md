# Spec: Blog post — "Cómo analizar los gastos de tu negocio con IA (sin tocar una sola factura)"

**Fecha:** 2026-04-01  
**Proyecto:** ruralGPT blog  
**Archivo destino:** `src/content/blog/analizar-gastos-negocio-ia.md`

---

## Objetivo

Post de blog que demuestra el potencial práctico de la IA usando un caso real: el análisis de 305 facturas de Anceu Coliving para encontrar el gasto en café de 2025. El tono no es "yo hice esto" sino "esto es lo que puedes aprender a hacer en la Residencia IA de RuralGPT". El lector sale pensando: *quiero saber hacer eso con mis propios datos*.

## Audiencia

Freelancers, autónomos y pequeños negocios que usan herramientas digitales a diario. Tienen facturas acumuladas pero nunca las analizan porque es un rollo. No necesitan saber programar.

---

## Estructura del post

### Frontmatter

```yaml
title: "Cómo analizar los gastos de tu negocio con IA (sin tocar una sola factura)"
description: "Usamos Claude para analizar 305 facturas de Anceu Coliving en minutos. Así encontramos el gasto exacto en café de 2025 — y cómo puedes hacerlo tú con tus propios gastos."
date: "2026-04-01"
author: "Rural GPT"
keywords: ["analizar facturas con ia", "gestión gastos ia", "claude facturas", "ia para autónomos", "ia para negocios"]
```

### Sección 1 — El problema (intro, ~2 párrafos)

Gancho: cualquier negocio tiene las facturas guardadas pero nadie sabe realmente en qué gasta. El análisis manual no existe porque es tedioso. La consecuencia: decisiones sin datos, sin poder negociar con proveedores, sin visibilidad real del negocio.

Giro: la IA cambia esto. No necesitas un contable ni un spreadsheet. Necesitas hacer la pregunta correcta.

### Sección 2 — La demo en screenshots (~3-4 imágenes)

Muestra el proceso real con Claude:

1. **Screenshot 1:** El prompt inicial — subir los PDFs y pedir análisis de gastos en café
2. **Screenshot 2:** Claude procesando y devolviendo los datos estructurados (€ por mes, cantidad)
3. **Screenshot 3:** Follow-up — "¿en qué mes gastamos más?" o "¿cuál es el proveedor principal?"

*Nota de producción: los screenshots se fabrican reproduciendo la conversación real con Claude una vez tengamos los datos del análisis de facturas.*

### Sección 3 — El dato revelado (~1 párrafo + tabla)

Los números reales de Anceu en 2025: total €, mes pico, proveedor. Tabla simple en markdown.

*Nota: rellenar con datos reales del análisis de facturas pendiente.*

```markdown
| Mes       | Gasto café |
|-----------|-----------|
| ...       | ...€      |
| **Total** | **...€**  |
```

### Sección 4 — La consecuencia práctica (~2 párrafos)

Ángulo de negociación: con estos datos, Anceu ahora puede ir a su proveedor de café y negociar un precio mejor porque sabe exactamente cuánto compra al año. Eso es poder de negociación que antes no existía.

Generalización al lector: cualquier autónomo o pequeña empresa puede hacer lo mismo. Gastos en software, en materiales, en servicios recurrentes. Lo que antes requería horas de Excel ahora es una conversación de 10 minutos.

### Sección 5 — CTA / cierre (~1 párrafo)

"En RuralGPT enseñamos exactamente esto: a hacer preguntas útiles a la IA con tus propios documentos, datos y flujos de trabajo. En 3 días en Galicia." Link a `/residencia-ia-galicia/`.

---

## Imágenes necesarias

- 3-4 screenshots del chat Claude (fabricar una vez tengamos los datos reales)
- Guardar en `/public/images/` con nombres descriptivos, p.ej. `analizar-facturas-claude-1.png`

## Datos pendientes

Antes de publicar, ejecutar el análisis real de facturas:
- Directorio: `~/Dropbox/Contabilidad/Espacio Anceu SL/2025/*/PAGOS/`
- 305 ficheros (PDFs, PNGs, JPGs) organizados por mes
- Buscar líneas de producto con "café", "coffee", "nespresso", "cápsulas", "dolce gusto", "cafetera"
- Fuentes más probables: carpetas FROIZ (supermercado) y facturas de proveedores

## Lo que NO incluye este post

- Instrucciones técnicas paso a paso (no es un tutorial)
- Mención a precios de la residencia
- Datos personales de proveedores o importes totales del negocio más allá del café
