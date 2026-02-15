---
title: "Automatizaciones con IA: 10 flujos que todo freelancer necesita"
description: "Configura automatizaciones con IA usando Make y n8n. 10 flujos de trabajo listos para copiar: email, contenido, datos, facturación y más."
date: "2026-03-06"
author: "Rural IA"
keywords: ["automatizaciones", "automatizaciones con ia", "automatizar con ia", "make automatización", "n8n automatización", "flujos de trabajo ia"]
---

## Automatizaciones con IA: el superpoder que nadie te enseña

Las automatizaciones no son nada nuevo. Llevan años entre nosotros: reglas de email, zapeos entre apps, scripts que mueven datos de un sitio a otro. Pero hasta hace poco, automatizar era algo de programadores. Requería código, APIs complejas y horas de configuración para resultados mediocres.

Eso ha cambiado radicalmente. Las automatizaciones con IA son una categoría completamente nueva. Ya no solo mueves datos entre apps: ahora puedes **leer**, **interpretar**, **decidir** y **generar** contenido en medio del flujo. Y lo mejor es que no necesitas saber programar para montarlas.

La diferencia es enorme. Una automatización clásica dice: "cuando llegue un email con adjunto, guárdalo en Google Drive". Una automatización con IA dice: "cuando llegue un email con una factura adjunta, lee la factura, extrae el proveedor, el importe y la fecha de vencimiento, clasifica el gasto por categoría y añade una fila en tu hoja de cálculo con todos esos datos". Mismo trigger. Resultado 10 veces más útil.

Para un freelancer, esto es un antes y un después. Esas 2 horas diarias que pierdes en tareas administrativas — responder emails, organizar leads, generar informes, preparar propuestas — se convierten en 10 minutos de revisión. El resto lo hace la máquina.

Y no estamos hablando de teoría. En este artículo vas a ver 10 automatizaciones con IA concretas que puedes montar hoy, paso a paso, con las herramientas que ya existen. Algunas te llevarán 30 minutos. Otras, una hora. Pero todas van a devolverte tiempo cada semana durante meses.

Si además quieres profundizar en prompting antes de meterte con flujos automatizados, empieza por nuestra [guía práctica de ChatGPT](/blog/curso-chatgpt/).

## Make vs n8n: cuál elegir

Antes de meternos en los flujos, una pregunta práctica: ¿qué herramienta uso?

Las dos grandes opciones hoy son **Make** (antes Integromat) y **n8n**. Las dos son plataformas de automatización visual — arrastras y conectas módulos en un canvas — y las dos se integran con modelos de IA. Pero tienen diferencias importantes.

**Make** es SaaS puro. Te registras, abres el editor visual y empiezas a conectar apps. Tiene más de 1.500 integraciones nativas, una interfaz pulida y una curva de aprendizaje suave. El plan gratuito te da 1.000 operaciones al mes, que es suficiente para empezar. Su punto fuerte es la facilidad: si nunca has automatizado nada, Make te va a resultar más intuitivo.

**n8n** es open source y puedes autoalojarlo en tu propio servidor (o usar su cloud de pago). Tiene menos integraciones nativas que Make, pero a cambio ofrece mucha más flexibilidad: nodos de código JavaScript, control total sobre el flujo de datos, webhooks avanzados y sin límites de operaciones si lo alojas tú. Su punto fuerte es la potencia: si ya tienes experiencia técnica y quieres control total, n8n es para ti.

**Resumen rápido:**

- **Eres freelancer no técnico y quieres resultados rápidos:** empieza con Make.
- **Eres desarrollador o quieres control total sobre la infraestructura:** ve a n8n.
- **Quieres probar sin gastar nada:** ambas tienen plan gratuito, pero n8n autoalojado es literalmente gratis sin límites.

Para los 10 flujos que vienen a continuación, vamos a indicar si es más fácil montarlos en Make, en n8n o en cualquiera de las dos. En la práctica, todos se pueden hacer en ambas plataformas.

## 10 automatizaciones con IA que puedes montar hoy

Vamos a lo que importa. Cada automatización incluye qué hace, qué herramientas necesitas, cómo funciona paso a paso y cuánto vas a tardar en montarla.

### 1. Responder emails automáticamente con IA

**Qué hace:** Lee los emails nuevos que llegan a tu bandeja de entrada, analiza el contenido, genera un borrador de respuesta con IA y te lo deja listo para revisar y enviar. No envía nada sin tu aprobación — genera borradores.

**Herramientas:** Make o n8n + Gmail + API de OpenAI (ChatGPT).

**Cómo funciona:** El flujo se activa cada vez que llega un email nuevo a una etiqueta específica de Gmail (por ejemplo, "Clientes"). Make lee el asunto y el cuerpo del email, se lo envía al módulo de OpenAI con un prompt del tipo "Eres mi asistente. Genera una respuesta profesional y amable a este email. Mantén el tono informal pero respetuoso. Si piden presupuesto, responde que lo preparo en 24 horas". ChatGPT devuelve el borrador y Make crea un borrador en Gmail con esa respuesta, listo para que lo revises con un clic.

**Tiempo de montaje:** 30 minutos.

### 2. Generar contenido para redes sociales

**Qué hace:** Coge los últimos artículos de tu blog (o de cualquier fuente RSS), los resume con IA y genera publicaciones adaptadas a cada red social. Las programa automáticamente en tu herramienta de publicación.

**Herramientas:** Make o n8n + fuente RSS + API de OpenAI + Buffer o Hootsuite.

**Cómo funciona:** El flujo se ejecuta una vez al día. Revisa tu feed RSS en busca de artículos nuevos. Cuando encuentra uno, envía el título y el contenido al módulo de IA con instrucciones específicas: "Genera 3 publicaciones: una para LinkedIn (profesional, 150 palabras), una para Twitter (informal, 240 caracteres max) y una para Instagram (con emojis, incluye 5 hashtags relevantes)". La IA devuelve las tres variantes y Make las envía a Buffer, donde se programan para publicarse a las horas que hayas configurado.

**Tiempo de montaje:** 45 minutos.

### 3. Resumir reuniones y enviar actas

**Qué hace:** Cuando termina una reunión en Zoom o Google Meet, coge la transcripción, la resume con IA extrayendo decisiones clave y tareas asignadas, y envía el resumen por Slack o email a todos los participantes.

**Herramientas:** n8n (más flexible para este caso) + Zoom/Google Meet + API de OpenAI + Slack o Gmail.

**Cómo funciona:** Zoom y Meet generan transcripciones automáticas si activas la opción. El flujo se activa con un webhook cuando la reunión termina. n8n descarga la transcripción completa y la envía a OpenAI con el prompt: "Resume esta reunión en 3 secciones: Resumen general (3 frases), Decisiones tomadas (lista), Tareas pendientes (persona responsable + fecha límite)". El resultado se formatea en Markdown y se envía por Slack al canal del proyecto o por email a los asistentes.

**Tiempo de montaje:** 1 hora.

### 4. Extraer datos de facturas

**Qué hace:** Cuando recibes una factura por email (PDF adjunto), la IA lee el documento, extrae proveedor, concepto, importe, IVA y fecha de vencimiento, y añade una fila en tu hoja de cálculo de gastos.

**Herramientas:** Make (tiene mejor soporte nativo de adjuntos) + Gmail + API de OpenAI (GPT-4 Vision o modelo con lectura de PDFs) + Google Sheets.

**Cómo funciona:** El flujo se activa cuando llega un email a una etiqueta "Facturas" en Gmail. Make descarga el adjunto PDF y lo envía a la API de OpenAI con Vision activado (o lo convierte a texto primero). El prompt pide: "Extrae de esta factura los siguientes campos en formato JSON: proveedor, CIF, concepto, base_imponible, iva_porcentaje, iva_importe, total, fecha_emision, fecha_vencimiento". La IA devuelve el JSON y Make parsea cada campo para crear una nueva fila en Google Sheets con todos los datos en sus columnas correspondientes.

**Tiempo de montaje:** 45 minutos.

### 5. Clasificar y priorizar leads

**Qué hace:** Cuando alguien rellena un formulario de contacto en tu web, la IA analiza sus respuestas, les asigna una puntuación de calidad (lead scoring) y los clasifica en tu CRM con una prioridad automática.

**Herramientas:** Make o n8n + Typeform/Google Forms + API de OpenAI + HubSpot/Pipedrive/Notion.

**Cómo funciona:** El flujo se activa con cada nueva respuesta del formulario. Make envía los datos al módulo de IA con contexto sobre tu negocio: "Soy freelancer de diseño web. Analiza este lead y puntúalo del 1 al 10 según presupuesto probable, urgencia del proyecto y adecuación a mi perfil. Devuelve: puntuación, razón, y acción recomendada (contactar hoy / contactar esta semana / descartar)". La IA responde con la clasificación y Make crea el contacto en tu CRM con la puntuación y la nota de la IA en los campos personalizados. Si la puntuación es mayor de 7, te envía una notificación inmediata al móvil.

**Tiempo de montaje:** 1 hora.

### 6. Traducir contenido automáticamente

**Qué hace:** Cuando publicas un artículo nuevo en tu blog (WordPress), la IA lo traduce a uno o varios idiomas y publica la versión traducida automáticamente.

**Herramientas:** n8n (mejor para webhooks personalizados) + WordPress + API de OpenAI o DeepL + plugin multilingual (WPML o Polylang).

**Cómo funciona:** Configuras un webhook en WordPress que se dispara con cada nueva publicación. n8n recibe el título, el cuerpo y los metadatos del post. Envía el contenido a la API de traducción con instrucciones de contexto: "Traduce este artículo de blog al inglés. Mantén el tono informal y profesional. No traduzcas nombres propios ni marcas. Adapta los ejemplos al mercado anglosajón cuando tenga sentido". La IA devuelve la traducción y n8n la publica en WordPress como versión traducida vinculada al post original a través de la API REST.

**Tiempo de montaje:** 1 hora 30 minutos.

### 7. Monitorizar menciones y generar informes

**Qué hace:** Rastrea menciones de tu marca (o de tus competidores) en la web, las analiza con IA para detectar sentimiento y tendencias, y genera un informe semanal en Notion.

**Herramientas:** Make o n8n + Google Alerts (RSS) o Mention API + API de OpenAI + Notion.

**Cómo funciona:** Google Alerts genera un feed RSS con cada mención nueva de la palabra clave que configures. El flujo revisa ese feed cada día y acumula las menciones en una base de datos de Notion. Una vez a la semana, otro flujo coge todas las menciones de la semana, las envía a la IA en un lote con el prompt: "Analiza estas menciones de marca. Para cada una, clasifica el sentimiento (positivo/neutro/negativo). Al final, genera un resumen ejecutivo con: número total de menciones, sentimiento general, temas más frecuentes, y una recomendación de acción". El informe resultante se guarda como una página nueva en Notion, con fecha y gráficos basados en los datos.

**Tiempo de montaje:** 1 hora 30 minutos.

### 8. Generar propuestas para clientes

**Qué hace:** A partir de una plantilla y los datos específicos del cliente (extraídos de tu CRM o de un formulario), la IA genera una propuesta comercial personalizada lista para enviar.

**Herramientas:** Make o n8n + Google Docs (plantilla) + CRM o formulario + API de OpenAI + Gmail.

**Cómo funciona:** Tienes una plantilla de propuesta en Google Docs con marcadores de posición (nombre del cliente, tipo de proyecto, precio estimado, etc.). Cuando un lead llega a la fase "Enviar propuesta" en tu CRM, el flujo se activa. Make lee los datos del contacto y los envía a la IA junto con la estructura de tu plantilla: "Genera una propuesta personalizada para este cliente. Incluye una introducción que haga referencia a su sector y sus necesidades específicas. Adapta el tono según el tipo de empresa. Sugiere un timeline realista basado en el tipo de proyecto". La IA devuelve el texto personalizado, Make lo inserta en una copia de la plantilla de Google Docs y te envía un email con el enlace para revisar antes de enviárselo al cliente.

**Tiempo de montaje:** 1 hora 30 minutos.

### 9. Automatizar onboarding de clientes

**Qué hace:** Cuando un cliente paga (vía Stripe u otra pasarela), se dispara automáticamente toda la secuencia de bienvenida: email de onboarding personalizado con IA, creación de carpeta de proyecto, tarea en tu gestor de proyectos y mensaje de bienvenida en Slack.

**Herramientas:** Make (tiene integración nativa con Stripe) + Stripe + API de OpenAI + Gmail + Google Drive + Asana/Trello + Slack.

**Cómo funciona:** Stripe envía un webhook a Make cuando se confirma un pago. Make extrae los datos del cliente y del producto comprado. Primer paso: envía los datos a la IA para generar un email de bienvenida personalizado que incluya los próximos pasos adaptados al servicio contratado. Segundo paso: crea una carpeta en Google Drive con el nombre del cliente y subcarpetas estándar (Briefing, Entregas, Facturas). Tercer paso: crea una tarea en Asana o Trello con el checklist de onboarding. Cuarto paso: envía un mensaje en tu canal de Slack interno avisando al equipo del nuevo cliente. Todo esto ocurre en menos de 30 segundos tras el pago.

**Tiempo de montaje:** 2 horas.

### 10. Crear resumen semanal de métricas

**Qué hace:** Cada lunes por la mañana recibes un email con un resumen inteligente de tus métricas clave de la semana anterior: web, redes sociales, ingresos y cualquier otro dato relevante. No solo números: la IA te da contexto y recomendaciones.

**Herramientas:** n8n (mejor para múltiples APIs) + Google Analytics API + APIs de redes sociales + Stripe API + API de OpenAI + Gmail.

**Cómo funciona:** El flujo se ejecuta automáticamente cada lunes a las 8:00. Primero, n8n consulta las APIs de tus herramientas: Google Analytics (visitas, páginas más vistas, fuentes de tráfico), API de Twitter/LinkedIn (impresiones, engagement), Stripe (ingresos, nuevos clientes). Todos esos datos se envían juntos a la IA con el prompt: "Analiza estas métricas semanales. Compara con las medias de las 4 semanas anteriores. Destaca lo que ha ido bien, lo que ha empeorado y una recomendación concreta para esta semana. Formato: resumen ejecutivo (3 líneas) + detalle por área + acción recomendada". El resultado se formatea en HTML limpio y se envía por email. Llegas a las 9 con el café y ya sabes exactamente cómo va tu negocio.

**Tiempo de montaje:** 2 horas.

## Cómo empezar: tu primera automatización en 30 minutos

Teoría suficiente. Vamos a montar algo real ahora mismo. Vamos a crear la automatización número 1 (responder emails con IA) en Make, paso a paso.

**Paso 1: Crea tu cuenta en Make.**
Ve a [make.com](https://www.make.com) y regístrate. El plan gratuito es suficiente para esto. No necesitas tarjeta de crédito.

**Paso 2: Crea un nuevo escenario.**
Haz clic en "Create a new scenario". Verás un canvas vacío con un botón "+" en el centro. Aquí es donde vas a construir el flujo.

**Paso 3: Añade el trigger de Gmail.**
Haz clic en "+" y busca "Gmail". Selecciona el módulo "Watch Emails". Conecta tu cuenta de Gmail (te pedirá permisos OAuth). Configura el filtro: selecciona la etiqueta de donde quieres leer los emails (por ejemplo, "Clientes"). Marca la casilla para que solo procese emails no leídos.

**Paso 4: Añade el módulo de OpenAI.**
Haz clic en el "+" que aparece a la derecha del módulo de Gmail. Busca "OpenAI" y selecciona "Create a Chat Completion". Conecta tu cuenta de OpenAI (necesitarás una API key — la consigues en platform.openai.com). En el campo "Messages", configura el mensaje del sistema (tu prompt base) y en el mensaje del usuario, arrastra las variables del email anterior: asunto y cuerpo. Tu prompt de sistema podría ser algo como:

*"Eres mi asistente de email. Genera un borrador de respuesta profesional y amable. Mantén el tono cercano pero respetuoso. Si el email pide información sobre precios o presupuesto, responde que lo prepararé en 24 horas hábiles. Si es una consulta general, responde directamente. Firma como [tu nombre]."*

**Paso 5: Añade el módulo de Gmail para crear el borrador.**
Otro clic en "+". Busca "Gmail" de nuevo, pero esta vez selecciona "Create a Draft". En el campo "To", arrastra el email del remitente original. En "Subject", pon "Re: " + el asunto original. En "Body", arrastra la respuesta generada por OpenAI.

**Paso 6: Prueba el flujo.**
Haz clic en "Run once" (abajo a la izquierda). Envía un email de prueba a tu cuenta desde otra dirección. Espera unos segundos y comprueba que el borrador aparece en tu Gmail. Revísalo, edítalo si hace falta, y envíalo.

**Paso 7: Activa el escenario.**
Si el test ha ido bien, activa el escenario con el toggle de la esquina inferior izquierda. Configura la frecuencia de ejecución (cada 15 minutos es un buen punto de partida). Listo. A partir de ahora, cada email que llegue a esa etiqueta tendrá un borrador de respuesta esperándote.

Con eso ya tienes tu primera automatización con IA funcionando. El salto de "no tengo ni idea" a "esto funciona y me ahorra 30 minutos al día" acaba de ocurrir.

## Errores comunes al automatizar

Antes de que te lances a automatizar todo lo que se mueva, un par de avisos basados en lo que vemos una y otra vez.

**No automatices todo.** El error más común de los recién llegados a las automatizaciones es querer automatizarlo todo de golpe. Empieza por la tarea que más tiempo te quita o la que más te molesta hacer. Monta esa automatización, déjala funcionando una semana, ajústala, y solo entonces pasa a la siguiente. Automatizar es un proceso iterativo, no un sprint.

**Prueba más de lo que crees necesario.** Cada flujo tiene que funcionar con casos normales, pero también con casos raros. ¿Qué pasa si el email no tiene asunto? ¿Qué pasa si la factura es un JPG en vez de un PDF? ¿Qué pasa si el formulario llega con campos vacíos? Añade manejo de errores en Make (los módulos de "Error handler") o bloques try-catch en n8n. Un flujo sin control de errores es una bomba de relojería.

**Vigila los costes de las APIs.** Cada llamada a la API de OpenAI cuesta dinero. GPT-4 es más caro que GPT-3.5 Turbo. Si tu flujo se ejecuta 100 veces al día y cada ejecución hace 3 llamadas a GPT-4, la factura puede crecer rápido. Calcula antes de activar: ¿cuántas ejecuciones esperas al día? ¿Cuánto cuesta cada llamada? ¿Necesitas realmente GPT-4 o con un modelo más ligero basta? En muchos casos, GPT-4o mini es suficiente y cuesta una fracción.

**Empieza simple y ve añadiendo complejidad.** Tu primer flujo no necesita tener 15 módulos conectados. Empieza con 3: trigger, IA, acción. Cuando funcione bien, añade filtros, ramificaciones y acciones adicionales. Un flujo simple que funciona siempre es mejor que uno complejo que falla a veces.

**No ignores los logs.** Tanto Make como n8n tienen un historial de ejecuciones detallado. Revísalo periódicamente. Busca ejecuciones fallidas, tiempos de respuesta lentos o datos malformados. Los problemas pequeños que ignoras hoy se convierten en problemas grandes mañana.

**Documenta tus flujos.** Ponles nombres descriptivos a los escenarios. Añade notas en los módulos que expliquen qué hace cada uno y por qué. Dentro de tres meses no vas a recordar por qué pusiste ese filtro o ese condicional. Y si algún día otra persona tiene que mantener tus automatizaciones, te lo va a agradecer.

## El día 2 del retiro Rural IA es solo automatización

Todo lo que has leído aquí se puede hacer por tu cuenta, desde casa, con paciencia y tutoriales. Lo hemos escrito para que sea así de accionable.

Pero hay una diferencia entre montar una automatización siguiendo un tutorial y montar tu sistema completo de automatizaciones con alguien al lado que te guía, te resuelve los bloqueos en tiempo real y te ayuda a decidir qué tiene sentido automatizar en tu caso concreto.

En el [retiro Rural IA en Galicia](/retiro-ia-galicia/) dedicamos 4 días a formación práctica de IA aplicada: prompting avanzado, asistentes personalizados, [desarrollo con IA](/blog/crear-app-con-ia/) y creación de tu [stack personalizado](/blog/herramientas-ia-freelancers/). Todo en Anceu Coliving, un espacio de coworking y coliving con fibra de 1 Gbps en medio del rural gallego.

El retiro incluye alojamiento, comidas y grupos de 12 personas máximo. No es teoría. Te vas con herramientas funcionando en tu trabajo.

Si te interesa saber si es para ti, mira la página de [perfiles y requisitos](/para-quien/). Y si ya lo tienes claro, los detalles completos del programa están en la [página del retiro](/retiro-ia-galicia/).

Las automatizaciones con IA no son el futuro. Son el presente. La única pregunta es cuánto tiempo más vas a seguir haciendo a mano lo que una máquina puede hacer por ti en segundos.
