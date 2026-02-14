# Rural IA — Design Brief para Pencil

## Dirección de Diseño

### Concepto Visual: "Sosiego Creativo en la Aldea"

La web debe transmitir lo opuesto a una ciudad. No es tech fría, no es startup gris. Es **naturaleza viva, verde profundo, luz de mañana, lluvia gallega, calma productiva**. El visitante debe sentir que ya está respirando aire limpio al entrar en la página.

### Pilares de marca

1. **Naturaleza** — Bosques, árboles, musgo, helechos, lluvia suave, cielo gallego
2. **Comunidad** — Gente real alrededor de una mesa, conversaciones junto al fuego, grupo pequeño
3. **Animales** — Gallinas, caballos, perros, pájaros. Vida rural auténtica
4. **Sosiego creativo** — Concentración sin prisas. Trabajar con calma. Pensar con espacio

### Paleta de colores

| Rol | Color | Uso |
|-----|-------|-----|
| Verde bosque | `#2D5A3D` | Primario. Headings, botones, nav |
| Verde musgo | `#4A7C59` | Secundario. Backgrounds sutiles, hover |
| Verde hoja | `#6B9B7A` | Acentos suaves, iconos, badges |
| Crema cálido | `#F5F0E8` | Fondo principal. Calidez de papel viejo |
| Blanco niebla | `#FAFAF7` | Fondo alternativo. Como niebla de mañana |
| Marrón tierra | `#5C4A3A` | Texto principal. Tierra, no negro |
| Marrón claro | `#8B7355` | Texto secundario |
| Dorado sol | `#D4A843` | Acentos puntuales. CTAs, precios, highlights |
| Gris lluvia | `#9CA3AF` | Texto terciario, bordes suaves |
| Verde oscuro noche | `#1A3A2A` | Footer, secciones oscuras |

### Tipografía sugerida

- **Headings:** Serif con personalidad (estilo editorial rural). Algo como Playfair Display, Lora o similar
- **Body:** Sans-serif limpia y legible. Inter, DM Sans o similar
- **Contraste:** Los headings serif sobre fondos verdes dan sensación de editorial de naturaleza

### Principios de layout

**IMPORTANTE — Estilo minimalista, NO WordPress:**

- **Todo el contenido en 1 columna centrada.** No hay layouts de 2 columnas zigzag (imagen izda + texto dcha, luego al revés). Eso es genérico y predecible.
- **Cada sección ocupa el ancho completo del contenedor** (max-width ~800px centrado). Texto centrado o alineado a la izquierda según la sección.
- **Jerarquía vertical pura:** el ojo baja en línea recta. Heading, texto, CTA. Sin distracciones laterales.
- **Espacio generoso entre secciones** (80px–120px). Que la página respire.
- **Fotografía a ancho completo** cuando aparezca: edge-to-edge, sin columnas al lado. Que la imagen sea un momento de pausa visual, no un adorno lateral.
- **Cards del programa en grid** solo cuando hay items repetitivos (los 4 días, los 6 incluidos). Grid de 2x2 o lista vertical, nunca zigzag.
- **Stats en línea horizontal** o apilados en vertical. Simples, tipográficos, sin cards decorativas.
- Referentes de estilo: **Linear.app, Stripe, Vercel, Apple** — limpio, profesional, mucho aire, tipografía como protagonista.

### Texturas y elementos visuales

- Fondos limpios, color sólido. Sin texturas de papel ni lino (demasiado WordPress)
- Sin ilustraciones decorativas de hojas/ramas como separadores
- Fotografía de alta calidad como único recurso visual (naturaleza, lugar, gente)
- Bordes redondeados sutiles (8px)
- Sombras mínimas o ninguna
- Iconografía monocromática, geométrica, fina

### Contraposición ciudad vs aldea (concepto, no visual)

| Ciudad (lo que dejamos) | Aldea (lo que ofrecemos) |
|-------------------------|--------------------------|
| Ruido, notificaciones | Silencio, concentración |
| Gris hormigón | Verde naturaleza |
| Prisas, FOMO | Calma, presencia |
| Pantallas infinitas | Manos en la tierra |
| Aislamiento digital | Comunidad real |
| Cursos online abandonados | Inmersión presencial |

---

## Estructura del sitio

### Header (todas las páginas)
- **Layout: 1 columna centrada**
- Línea 1: Logo **Rural IA** (centrado)
- Línea 2: Nav horizontal centrada debajo: Inicio | El retiro | Para quién | Blog | FAQ | **[Reservar]**
- Fondo transparente o crema. Sin sticky header. Limpio.

---

## PAGINA 1: Homepage

### Sección 1 — Hero
**Layout: 1 columna centrada, texto centrado**

- **Badge:** `Mayo 2026 · Anceu Coliving, Pontevedra` (texto pequeño, verde hoja, uppercase tracking)
- **Logo:** Centrado arriba del H1
- **H1:** `4 días en Galicia para transformar tu forma de trabajar con IA`
- **Subtítulo:** `Retiro inmersivo para freelancers y profesionales tech. Formación práctica de IA aplicada, alojamiento y comidas incluidas. 12 plazas.`
- **CTA:** `Reserva tu plaza` (botón verde bosque)
- **Precio debajo del CTA:** `Desde 697 EUR todo incluido` (texto pequeño, marrón claro)
- **Fondo:** Crema cálido, limpio. Sin imagen hero. La tipografía es la protagonista.

### Sección 2 — Foto a ancho completo
**Layout: imagen edge-to-edge**

Foto de Anceu entre árboles con niebla matutina. Momento de pausa visual. Sin texto encima.

### Sección 3 — Problema
**Layout: 1 columna centrada, texto centrado o izquierda**

- **H2:** `Sabes que la IA va a cambiarlo todo`
- **Copy:** `Pero no encuentras el momento. Los cursos online se abandonan. Los bootcamps duran meses y cuestan miles de euros. Y cada semana salen 3 herramientas nuevas que no sabes si probar o ignorar.`
- **Frase destacada (tamaño grande, serif):** `Lo que necesitas no es más teoría. Es sentarte 4 días a construir cosas reales con IA.`
- **Fondo:** Blanco niebla

### Sección 4 — Solución
**Layout: 1 columna centrada**

- **H2:** `Un retiro inmersivo de IA, en un pueblo gallego`
- **Copy:** `4 días de formación práctica en Anceu Coliving. Vienes con tu portátil, te vas con herramientas de IA configuradas y funcionando en tu trabajo. Sin humo, sin teoría innecesaria. Rodeado de naturaleza, buena comida y gente como tú.`
- **Fondo:** Crema cálido

### Sección 5 — Programa
**Layout: 1 columna centrada. Los 4 días en grid 2x2 o lista vertical**

**Día 01 — Fundamentos IA aplicada**
`Prompting avanzado, elegir la herramienta correcta, casos de uso reales.`

**Día 02 — Automatización con IA**
`Make y n8n conectados a APIs de IA. Flujos automáticos para tu trabajo.`

**Día 03 — Construir con IA**
`Cursor, Bolt, v0: de idea a prototipo funcional en una tarde.`

**Día 04 — Tu stack personalizado**
`Monta tu propio setup de IA. Sesión guiada + demo final al grupo.`

- **Fondo:** Blanco niebla. Cards con borde fino verde hoja, padding generoso.

### Sección 6 — Stats
**Layout: 3 números en fila horizontal, tipográficos, sin cards**

| Número | Texto |
|--------|-------|
| `600K` | `profesionales tech en España sin formación en IA` |
| `+56%` | `prima salarial para quienes dominan IA` |
| `0` | `retiros inmersivos de IA para techies en España` |

- Números grandes en verde bosque o dorado sol. Texto debajo en marrón claro, pequeño.
- **Fondo:** Crema cálido

### Sección 7 — Para quién (preview)
**Layout: 1 columna centrada**

- **H2:** `Para freelancers, indie hackers y profesionales tech`
- **Copy:** `Si te buscas la vida con tecnología y quieres integrar IA en tu trabajo, esto es para ti. No hace falta saber programar. Sí hace falta tener ganas de cacharrear.`
- **Link:** `Descubre si es para ti →` (enlace simple, no botón)
- **Fondo:** Blanco niebla

### Sección 8 — CTA Final
**Layout: 1 columna centrada, fondo oscuro**

- **H2:** `Solo 12 plazas por edición`
- **Copy:** `Primera edición: mayo 2026 en Anceu Coliving, Pontevedra.`
- **CTA:** `Reserva tu plaza` (botón dorado sol sobre verde oscuro)
- **Fondo:** Verde oscuro noche. Texto en crema/blanco.

---

## PAGINA 2: El Retiro (`/retiro-ia-galicia/`)

### Sección 1 — Header de página
**Layout: 1 columna centrada**

- **H1:** `El retiro`
- **Subtítulo:** `4 días de formación práctica de IA en el rural gallego. Todo incluido.`

### Sección 2 — Datos clave
**Layout: 1 fila horizontal de 5 datos, tipográficos, sin cards**

| Campo | Valor |
|-------|-------|
| Cuándo | Mayo 2026 |
| Dónde | Anceu Coliving, Pontevedra |
| Duración | 4 días / 3 noches |
| Plazas | 12 personas |
| Precio | Desde 697 EUR |

### Sección 3 — Programa detallado
**Layout: 1 columna centrada, cada día como bloque vertical**

**Día 1 — Fundamentos de IA aplicada**
Prompting avanzado, elegir la herramienta correcta para cada tarea (ChatGPT, Claude, Gemini), casos de uso reales. Salir del "háblame como si fueras un experto en..." y empezar a usar IA de verdad.

**Día 2 — Automatización con IA**
Make y n8n conectados a APIs de IA. Montar flujos automáticos: generación de contenido, procesamiento de emails, atención al cliente, extracción de datos. Integración con WordPress, Notion, Google Sheets y las herramientas que ya usas.

**Día 3 — Construir con IA (sin código)**
Cursor, Bolt, v0: crear apps, landing pages, herramientas internas con IA como copiloto. De idea a prototipo funcional en una tarde.

**Día 4 — Tu stack de IA personalizado**
Cada asistente monta su propio setup: qué herramientas usa, qué automatiza, qué construye. Sesión de trabajo guiado + demo final al grupo.

### Sección 4 — Un día típico
**Layout: timeline vertical, 1 columna**

| Hora | Actividad |
|------|-----------|
| 9:00 | Desayuno juntos |
| 10:00–13:30 | Taller práctico (hands-on con herramientas) |
| 13:30 | Comida |
| 15:30–18:00 | Aplicar lo aprendido a tu propio proyecto |
| 18:00–19:30 | Tiempo libre, paseo, descanso |
| 20:00 | Cena |
| 21:30 | Sesión nocturna opcional — demos, preguntas, charla |

### Sección 5 — Qué incluye
**Layout: grid 2x3 o lista vertical de 6 items**

1. **Formación** — 4 días de talleres prácticos con herramientas de IA
2. **Alojamiento** — 3 noches en Anceu Coliving
3. **Comidas** — Desayuno, comida y cena los 4 días. Gastronomía gallega.
4. **Materiales** — Acceso a todas las herramientas, licencias y materiales del curso
5. **Comunidad alumni** — Acceso al grupo privado de alumni después del retiro
6. **Follow-up** — Sesión online grupal de seguimiento a las 2-3 semanas

### Sección 6 — Foto a ancho completo
Foto del coliving, entorno natural, espacios de trabajo. Edge-to-edge.

### Sección 7 — El lugar
**Layout: 1 columna centrada**

**Anceu Coliving, Ponte Caldelas**
El primer coliving del noroeste de España. Un pueblo de menos de 100 habitantes en Ponte Caldelas (Pontevedra), con 1 Gbps de fibra óptica, espacio de trabajo equipado, y rodeado de naturaleza. El 55% de los colivers repiten.

A 30 minutos de Pontevedra y 45 de Vigo. Si vienes en avión, el aeropuerto más cercano es Vigo (VGO).

### Sección 8 — Precios
**Layout: 2 bloques lado a lado (excepción al single-column: comparación directa de pricing)**

**Early Bird — 697 EUR**
Primeras 5 plazas
- 4 días formación práctica
- 3 noches alojamiento
- Todas las comidas
- Materiales y licencias
- Comunidad alumni
- Sesión follow-up

**Precio Normal — 897 EUR**
Todo incluido
- (mismos items)

**Nota debajo:** Son ~225 EUR/día con alojamiento, comida y formación. Un bootcamp de IA en Madrid cuesta 2.450–7.000 EUR.

### Sección 9 — CTA Final
**Layout: 1 columna centrada, fondo verde oscuro**

**Solo 12 plazas**
Primera edición: mayo 2026. No habrá otra igual hasta otoño.
**[Reservar mi plaza]**

---

## PAGINA 3: Para quién (`/para-quien/`)

### Sección 1 — Header
**Layout: 1 columna centrada**
- **H1:** `Para quién es Rural IA`

### Sección 2 — Esto es para ti si...
**Layout: 1 columna, lista vertical**

- Eres freelancer y quieres automatizar tareas repetitivas con IA
- Eres webmaster y quieres integrar IA en tus proyectos y los de tus clientes
- Eres indie hacker y quieres construir productos con IA como copiloto
- Eres consultor y quieres ofrecer servicios de IA a tus clientes
- Eres profesional tech y sientes que te estás quedando atrás con la IA
- Usas herramientas como Notion, Google Sheets, WordPress o Figma y quieres potenciarlas con IA

### Sección 3 — Esto NO es para ti si...
**Layout: 1 columna, lista vertical**

- Buscas teoría académica o un máster de meses
- No tienes portátil o no tienes ganas de cacharrear
- Ya eres ingeniero de ML y trabajas con modelos a diario
- Buscas un curso online para hacer a tu ritmo

### Sección 4 — Nivel necesario
**Layout: 1 columna centrada**

No hace falta saber programar. Sí hace falta ser usuario habitual de tecnología. Si ya usas herramientas digitales en tu trabajo (cualquier herramienta), vas a sacar partido del retiro.

Esto no es un curso de programación. Es un curso de usar IA como herramienta profesional.

### Sección 5 — Por qué merece la pena
**Layout: 1 columna centrada**

- Un profesional tech que gana 40.000 EUR/año podría ganar 60.000+ con skills de IA (prima salarial del 56% según PwC). La inversión se amortiza en menos de 1 mes.
- Es deducible como gasto de formación profesional
- Si tu empresa paga, es gasto de formación deducible al 100%
- Un bootcamp equivalente cuesta 2.500–7.000 EUR y dura meses
- Un retiro de IA en los Alpes cuesta 9.500 USD por 3 días

---

## PAGINA 4: Sobre nosotros (`/sobre-nosotros/`)

### Sección 1 — Header
**Layout: 1 columna centrada**
- **H1:** `Sobre nosotros`

### Sección 2 — La historia
**Layout: 1 columna centrada**

Rural IA nace de una idea simple: la mejor forma de aprender IA no es un vídeo de YouTube ni un máster de 8 meses. Es sentarte 4 días con gente como tú, en un sitio sin distracciones, y construir cosas reales.

Llevamos años organizando eventos tech en el rural gallego con Rural Hackers. Hemos visto que cuando juntas profesionales tech motivados, buena conexión a internet y un entorno que invite a concentrarse, pasan cosas buenas. Rural IA es la versión intensiva y enfocada en IA de esa experiencia.

### Sección 3 — Rural Hackers
**Layout: 1 columna centrada**

Comunidad de tecnólogos que exploran la intersección entre tecnología y mundo rural. Organizadores de los Hacker Days en Anceu y de eventos tech en pueblos de Galicia. Creen que la tecnología puede (y debe) funcionar fuera de las grandes ciudades.
ruralhackers.com

### Sección 4 — Anceu Coliving
**Layout: 1 columna centrada**

El primer coliving del noroeste de España. Un pueblo de menos de 100 habitantes en Ponte Caldelas (Pontevedra) con 1 Gbps de fibra, espacio de trabajo y una comunidad internacional de profesionales remotos. El 55% de los colivers repiten.
anceu.com

### Sección 5 — El equipo
**Layout: 1 columna centrada**

Los instructores de Rural IA son profesionales que usan IA en su trabajo a diario. No académicos, no evangelistas: gente que construye cosas con IA y quiere enseñarte a hacer lo mismo.

---

## PAGINA 5: FAQ (`/faq/`)

### Layout: 1 columna centrada, accordion vertical

**H1:** `Preguntas frecuentes`

**¿Necesito saber programar?**
No. El retiro está diseñado para profesionales tech que usan herramientas digitales pero no necesariamente programan.

**¿Cómo llego a Anceu?**
Anceu está a 30 min de Pontevedra y 45 min de Vigo. Si vienes en avión, el aeropuerto más cercano es Vigo (VGO).

**¿Qué tengo que llevar?**
Tu portátil y ganas de aprender. Todo lo demás está incluido.

**¿Puedo deducirme el coste?**
Si eres autónomo o empresa, sí. Es gasto de formación profesional deducible. Tipo marginal del 30% = 800 EUR cuesta 560 EUR realmente.

**¿Cuál es la política de cancelación?**
Cancelación gratuita hasta 15 días antes. 15-7 días: 50% devolución. Menos de 7 días: sin devolución pero plaza transferible.

**¿Qué pasa si llueve?**
Estamos en Galicia. Toda formación es en interior. La lluvia es parte del encanto.

**¿Hay wifi bueno?**
1 Gbps de fibra óptica. Anceu es coliving tech, la conectividad es prioridad.

**¿Cuántas personas hay por edición?**
Máximo 12. Grupos pequeños para atención personalizada.

**¿Habrá más ediciones?**
Sí. Planeamos ediciones regulares. Solo 12 plazas por edición.

**¿Qué me llevo al terminar?**
Herramientas de IA configuradas, flujos de automatización funcionando, un prototipo propio, acceso a comunidad alumni, materiales y sesión follow-up online.

**Contacto:** hola@ruralia.ai

---

## Footer
**Layout: 1 columna centrada, minimalista**

**Rural IA** — Retiro inmersivo de IA en Galicia.

Inicio · El retiro · Para quién · Blog · FAQ · Sobre nosotros

Aviso legal · Privacidad · Cookies

Instagram · Twitter · hola@ruralia.ai

(c) 2026 Rural IA

---

## Notas de diseño para Pencil

### Reglas de layout
- **1 columna siempre.** Max-width ~800px centrado. Excepciones: grid de cards (programa, incluido) y pricing (2 columnas).
- **Sin zigzag.** Nunca imagen-izda/texto-dcha ni al revés. Eso es WordPress 2018.
- **Fotos a ancho completo** como separadores visuales entre secciones de texto.
- **Jerarquía tipográfica es el diseño.** H1 grande (serif), H2 medio, body limpio (sans). El contraste tipográfico crea interés visual, no las columnas.
- **Mucho espacio.** 80-120px entre secciones. Padding interno generoso.
- **Fondos alternos** entre crema cálido y blanco niebla para ritmo visual. Secciones oscuras solo para CTA final y footer.

### Atmósfera
- Minimalismo cálido. Piensa Linear.app pero con verdes de bosque en vez de azules tech.
- La naturaleza se comunica con color (verdes) y fotografía (edge-to-edge), no con ilustraciones decorativas.
- Profesional y serio pero acogedor. No corporativo, no hippie.

### Lo que NO hacer
- No zigzag de columnas
- No sidebars
- No iconos coloridos ni ilustraciones cartoon
- No texturas de papel/grunge
- No sombras fuertes ni bordes gruesos
- No sticky header pesado
- No hero con imagen de fondo + texto encima (poco legible, poco elegante)
