---
title: "Como crear unha app con IA sen saber programar: guía paso a paso"
description: "Crea a túa primeira aplicación con IA usando Claude e Claude Design. Sen experiencia en programación: describes o que necesitas, iteras na conversa e nunha tarde tes un prototipo funcional."
date: "2026-02-18"
author: "Rural GPT"
keywords: ["crear app con ia", "crear aplicación intelixencia artificial", "app sen programar", "claude ia", "claude design", "prototipo con ia"]
translationKey: "crear-app-con-ia"
---

## Si, podes crear unha app con IA sen programar

Hai dous anos, **crear app con ia** era ciencia ficción. Hoxe é algo que podes facer nunha tarde, sen escribir unha soa liña de código a man.

A revolución non é que a IA "axude" a programar. É que a IA programa por ti. Describes o que queres — en galego ou castelán, coas túas palabras — e a ferramenta xera o código, ensínache o resultado e déixate iterar ata que quede como necesitas.

Isto cambia todo para freelancers, consultores e profesionais que ata agora dependían dun desenvolvedor (ou dun orzamento de 5.000 euros) para calquera ferramenta dixital. Non falamos de apps de xoguete: falamos de ferramentas pequenas que resolven un problema real do teu negocio.

O que necesitas para empezar: un portátil, unha idea (aínda que sexa vaga) e unha hora libre. Nada máis.

## As ferramentas: Claude e Claude Design

Para empezar non necesitas un catálogo de ferramentas. Con dúas, ambas de Anthropic, cobres case todo o percorrido da idea ao prototipo.

### Claude: describes, probas, axustas

Claude é un asistente de IA xeral, como ChatGPT ou Gemini, pero especialmente bo escribindo código e seguindo instrucións longas ao pé da letra. Descríbeslle en linguaxe natural a ferramenta que necesitas e constrúecha: unha calculadora, un formulario con lóxica, un pequeno panel. En moitos casos podes ver e probar o resultado directamente na conversa, sen instalar nada.

O importante non é o primeiro resultado, senón a conversa: "fai os botóns máis grandes", "engade un campo de IVE", "garda os últimos cálculos". Cada cambio tarda segundos.

**Mellor para:** ferramentas pequenas e prototipos funcionais que necesitas xa.

**Prezo:** plan gratuíto limitado. Plan Pro a uns 20 dólares/mes.

### Claude Design: a parte visual

Claude Design é a ferramenta de Anthropic pensada para a parte visual: pantallas, maquetas, prototipos e presentacións que se crean e se axustan conversando con Claude. É útil cando o que queres é ensinar como se verá algo — a un cliente, ao teu socio ou a quen o vaia desenvolver — antes de construílo en serio.

**Mellor para:** prototipos visuais, propostas de deseño e material para validar unha idea.

**Prezo:** vai coa túa conta de Claude; o que podes facer depende do plan, así que revisa que inclúe o teu.

### E se quero ir máis aló?

Cando o prototipo se che quede pequeno e queiras un proxecto con arquivos propios, despregue e máis control, o seguinte paso son ferramentas como **Cursor** (un editor de código con IA integrada) ou **Claude Code** (o asistente de Anthropic que traballa directamente cos arquivos do teu proxecto). Para a túa primeira app non che fan falta.

### Cal elixir

Se é a túa primeira vez, empeza por **Claude**: describe unha ferramenta pequena e vai axustándoa. Usa **Claude Design** cando o aspecto importe ou teñas que ensinarllo a alguén. E deixa Cursor ou Claude Code para cando queiras converter o prototipo en algo máis serio.

E se traballas nunha asesoría, nunha xestoría ou no departamento de administración dunha empresa, e o que buscas é aplicar a IA ao teu traballo diario con garantías de protección de datos, o [taller IA para Asesorías, Xestorías e Departamentos de Administración](/talleres/ia-asesorias-xestorias/) (28 de novembro, Anceu) está pensado para ti.

## Tutorial: a túa primeira ferramenta con Claude

Imos construír algo real: unha **calculadora de orzamentos para freelancers**. En vez de pelexar cun Excel cada vez que tes que dar un prezo, unha ferramenta que o calcula por ti.

### Paso 1: define o problema nunha frase

Antes de abrir nada, escribe que problema resolve a túa app e para quen. "Quero calcular rápido o prezo dun proxecto a partir das horas, a miña tarifa e unha marxe." Se non cabe nunha frase, a idea é demasiado grande para empezar: recórtaa.

### Paso 2: describe a app en linguaxe natural

Abre Claude e escribe algo así:

```
Crea unha calculadora de orzamentos para freelancers.
O usuario introduce:
- Horas estimadas do proxecto
- Tarifa por hora (€/hora)
- Porcentaxe de marxe adicional
- Tipo de proxecto (web, deseño, consultoría, outro)

A calculadora mostra:
- Custo base (horas × tarifa)
- Marxe en euros
- Prezo total recomendado, con e sen IVE (21%)
- Prezo dividido en tres pagamentos (25%, 50%, 25%)

Deseño limpo, cores neutras, que funcione ben no móbil.
Garda os últimos 5 cálculos nun historial.
```

Sé específico con **que** ten que facer, non con **como**. Non necesitas saber que tecnoloxía usar: se non lla dis, Claude escolle unha razoable. Se queres afinar esta habilidade, na nosa [guía de prompting](/blog/curso-chatgpt/) tes as claves, e serven para calquera asistente.

### Paso 3: proba o resultado

Claude xera a ferramenta e, normalmente, podes vela e usala na propia conversa. Próbaa como o faría un cliente: mete números raros, deixa campos baleiros, ábrea no móbil.

### Paso 4: itera na conversa

Aquí está a graza. Pide cambios concretos:

- "Se deixo as horas baleiras, mostra un aviso en vez dun erro."
- "Engade un botón para copiar o resumo do orzamento e pegalo nun email."
- "Pon o prezo total máis grande e en negra."

Se algo falla, cópialle o erro ou descríbelle o que ves ("ao premer calcular non pasa nada") e pídelle que o arranxe. Cinco ou dez roldas de axustes é o normal.

### Paso 5: dálle forma con Claude Design (opcional)

Se a ferramenta vai vela un cliente ou queres que teña a túa imaxe, leva a idea a Claude Design: describe o estilo que buscas (cores, tipografía, ton) e itera sobre as pantallas ata que te convenzan. Tamén serve para preparar a presentación da idea antes de construír nada.

### Paso 6: comparte ou exporta

Cando esteas contento co resultado, podes compartilo para que outros o proben ou levar o código para aloxalo onde queiras. Se non sabes como publicalo, pregúntallo a Claude: "Cal é a forma máis sinxela de publicar isto gratis?". Guiarate paso a paso.

Unha advertencia importante: mentres probas, **usa datos inventados**. Non pegues datos reais de clientes nun prototipo nin na versión de consumo de ningún chat.

## 5 ideas de apps que podes crear hoxe

Non necesitas unha idea revolucionaria. As mellores apps para empezar son as que resolven problemas cotiáns do teu traballo:

1. **Xerador de facturas.** Formulario con datos do cliente e conceptos, cálculo automático de subtotal, IVE e total, e exportación a PDF.
2. **Control de vencementos.** Lista de prazos (impostos, renovacións, entregas) con data, responsable e estado, ordenada por urxencia.
3. **CRM persoal.** Contactos con empresa, notas, última interacción e recordatorio de seguimento.
4. **Calendario de contidos.** Vista mensual de publicacións con plataforma, data e estado (borrador, programado, publicado).
5. **Construtor de propostas.** Modelo con resumo, alcance, prazos e prezo, con vista previa e exportación a PDF.

Para calquera delas, o prompt segue o mesmo patrón que no tutorial: que datos entran, que ten que mostrar e como queres que se vexa.

## Erros frecuentes ao crear apps con IA

**Prompts demasiado vagos.** "Crea unha app de tarefas" dáche algo xenérico. "Crea unha app de tarefas para freelancers onde cada tarefa teña cliente, proxecto, horas estimadas e estado de pagamento" dáche algo útil.

**Non iterar.** O primeiro resultado rara vez é o definitivo. Pide cambios concretos ata conseguir o que necesitas.

**Intentar construír demasiado dun golpe.** Empeza polo núcleo mínimo que resolve o problema. Engade funcionalidades pouco a pouco.

**Ignorar os erros.** Cando algo non funciona, cópialle o erro á IA e pídelle que o arranxe. Moitas veces resólveo soa.

**Non probar no móbil.** Se a túa ferramenta se vai usar no móbil, próbaa en pantalla pequena desde o primeiro día.

## Limitacións: que NON podes facer (aínda)

Sería irresponsable vendelo como maxia. Crear apps con IA ten límites claros:

- **Lóxica de negocio complexa.** Cálculos financeiros intrincados, fluxos de aprobación con varios niveis ou integracións con sistemas antigos: a IA xera a estrutura, pero os erros de lóxica serán difíciles de detectar sen coñecementos técnicos.
- **Datos sensibles.** Se a ferramenta vai manexar datos médicos, financeiros ou persoais de clientes, o código xerado necesita unha revisión profesional antes de usarse en serio. E o RGPD segue aplicando aínda que a app a fixeses ti.
- **Escala.** O que funciona para ti e o teu equipo non ten por que aguantar a miles de usuarios.

A regra xeral: se a ferramenta é para ti ou o teu equipo pequeno, podes facela ti. Se é un produto que vas vender ou un sistema crítico, usa a IA para o prototipo e logo busca a alguén que constrúa a versión de produción. Mesmo así, **o prototipo afórrache diñeiro**: dáslle ao desenvolvedor algo tanxible en vez dun documento de requisitos.

## O que antes custaba 5.000 EUR, agora cústache unha tarde

Un desenvolvedor freelance en España cobra entre 400 e 800 euros ao día. Un proxecto sinxelo — un panel de xestión, unha ferramenta de cálculo, un formulario con lóxica — pode custar facilmente 2.000-5.000 euros en desenvolvemento tradicional.

Con Claude, ese mesmo proxecto en versión prototipo podes telo funcionando nunhas horas, cunha subscrición de uns 20 euros ao mes.

Non estamos dicindo que os desenvolvedores vaian desaparecer. Para aplicacións complexas, con autenticación robusta, escala e integracións avanzadas, seguirás necesitando a alguén que saiba. Pero as ferramentas do día a día do teu negocio — as que antes non podías permitirte — agora podes facelas ti.

## Os talleres presenciais da Rural GPT

Se traballas nunha asesoría, nunha xestoría ou no departamento de administración dunha empresa, o 28 de novembro celebramos en Anceu Coliving (Ponte Caldelas) o taller **IA para Asesorías, Xestorías e Departamentos de Administración**: unha xornada para integrar a IA no día a día do despacho cumprindo o RGPD e a LOPDGDD, con modelos aloxados en Europa.

Non é un taller de desenvolvemento de apps, pero segue a mesma filosofía: nada de teoría, traballo práctico sobre os teus procesos reais — control de prazos e documentos, facturas de provedores, conciliacións, tarefas repetitivas — con alguén ao lado que che resolve as dúbidas no momento. De 10:00 a 18:00, 15 prazas, comida incluída.

[Ver o taller e reservar](/talleres/ia-asesorias-xestorias/) · [Todos os talleres de outono](/talleres-otono-2026/)
