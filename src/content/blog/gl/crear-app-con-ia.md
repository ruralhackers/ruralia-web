---
title: "Como crear unha app con IA sen saber programar: guía paso a paso"
description: "Crea a túa primeira aplicación usando IA con Cursor, Bolt e v0. Sen experiencia en programación. Da idea ao prototipo funcional nunha tarde."
date: "2026-02-18"
author: "Rural GPT"
keywords: ["crear app con ia", "crear aplicación intelixencia artificial", "app sen programar", "cursor ai", "bolt ai", "v0 vercel"]
translationKey: "crear-app-con-ia"
---

## Si, podes crear unha app con IA sen programar

Hai dous anos, **crear app con ia** era ciencia ficción. Hoxe é algo que podes facer nunha tarde, sen escribir unha soa liña de código a man.

A revolución non é que a IA "axude" a programar. É que a IA programa por ti. Describes o que queres — en galego ou castelán, coas túas palabras — e a ferramenta xera o código, execútao, móstrache o resultado e déixate iterar ata que quede como necesitas.

Isto cambia todo para freelancers, consultores e profesionais que ata agora dependían dun desenvolvedor (ou dun orzamento de 5.000 euros) para calquera ferramenta dixital.

O que necesitas para empezar: un portátil, unha idea (aínda que sexa vaga) e unha hora libre. Nada máis.

## As 3 ferramentas que necesitas

### Cursor AI: o teu IDE con copiloto integrado

Cursor é un editor de código baseado en VS Code que trae intelixencia artificial integrada de serie. Podes falarlle en linguaxe natural. Díslle "crea un formulario de contacto que envíe os datos a unha base de datos" e Cursor escribe o código por ti.

**Mellor para:** Proxectos completos onde queres control total. Aplicacións web, APIs, ferramentas internas.

**Prezo:** Plan gratuíto con 2.000 completions ao mes. Plan Pro a 20 dólares/mes.

### Bolt.new: aplicacións completas no navegador

Bolt é a ferramenta máis rápida para ir de cero a unha aplicación funcional. Non necesitas instalar nada. Abres o navegador, describes o que queres e Bolt xera unha aplicación full-stack completa: frontend, backend, base de datos, todo.

**Mellor para:** Prototipos rápidos, landing pages con funcionalidade, aplicacións sinxelas que necesitas xa.

**Prezo:** Plan gratuíto limitado. Plans de pago dende 20 dólares/mes.

### v0 by Vercel: xerador de compoñentes UI

v0 é unha ferramenta de Vercel especializada en xerar compoñentes de interface. Descríbeslle un compoñente e v0 xera o código React con Tailwind CSS, listo para usar.

**Mellor para:** Interfaces de usuario. Se xa tes un proxecto e necesitas compoñentes específicos.

**Prezo:** Plan gratuíto con xeracións limitadas. Plan Premium a 20 dólares/mes.

### Cal elixir

Se é a túa primeira vez, empeza por **Bolt**. É a curva de aprendizaxe máis suave e os resultados son inmediatos. Cando queiras máis control, pasa a **Cursor**. E usa **v0** como complemento para compoñentes puntuais.

## Tutorial: a túa primeira app con Cursor AI

Imos construír algo real: un **xestor de tarefas para clientes**. Unha app onde poidas crear proxectos, asignar tarefas e marcalas como completadas.

### Paso 1: instalar Cursor

Vai a [cursor.com](https://cursor.com) e descarga a aplicación. O plan gratuíto é suficiente para este tutorial.

### Paso 2: abrir o chat e describir a túa app

Pulsa `Cmd+L` (Mac) ou `Ctrl+L` (Windows/Linux) para abrir o panel de chat. Escribe o teu primeiro prompt:

```
Quero crear unha aplicación web de xestión de tarefas para freelancers.
Necesito:
- Unha páxina principal que mostre todos os meus proxectos
- Ao facer clic nun proxecto, ver as tarefas asociadas
- Poder crear proxectos novos con nome e cliente
- Poder engadir tarefas a cada proxecto con título, descrición e estado (pendente, en progreso, completada)
- Deseño limpo e moderno, cores neutras
- Que os datos se garden no navegador (localStorage)

Usa React e Tailwind CSS.
```

Cursor vai xerar toda a estrutura do proxecto: arquivos, compoñentes, estilos, lóxica.

### Paso 3: revisar e executar

No chat, escribe:

```
Cómo ejecuto esta aplicación en local?
```

Cursor dáche as instrucións exactas. Normalmente é abrir o terminal e escribir `npm install` e logo `npm run dev`.

### Paso 4: iterar con linguaxe natural

Cando ves o resultado no navegador, podes pedir cambios directamente:

- "Engade un campo de prioridade (alta/media/baixa) ás tarefas"
- "Cambia os botóns para que sexan máis grandes e de cor negra"
- "Engade a posibilidade de arquivar proxectos"

Cada cambio xérase en segundos. Non necesitas entender o código.

### Paso 5: despregue (opcional)

Cando esteas satisfeito co resultado, podes despregalo gratuitamente en Vercel ou Netlify. O propio Cursor pódete guiar a través do proceso.

## Tutorial: prototipo rápido con Bolt

Bolt é ideal cando queres resultados en minutos. Aquí vai un exemplo:

### O caso de uso: calculadora de tarifas freelance

Como freelancer, necesitas calcular rapidamente o prezo dun proxecto baseándose en horas, tipo de traballo e marxe. En vez de usar un Excel, imos crear unha ferramenta web.

Vai a [bolt.new](https://bolt.new) e escribe:

```
Crea unha calculadora de tarifas para freelancers.
O usuario introduce:
- Horas estimadas do proxecto
- Tarifa horaria (€/hora)
- Porcentaxe de marxe adicional
- Tipo de proxecto (web, deseño, consultoría, outro)

A calculadora mostra:
- Custo base (horas × tarifa)
- Marxe en euros
- Prezo total recomendado
- Prezo por fases (25%, 50%, 25%)

Deseño moderno, cores neutras, responsivo. Garda os últimos 5 cálculos no historial.
```

En 30-60 segundos, Bolt xera a aplicación completa. Podes verla funcionar directamente no navegador, compartir o enlace para probar con outros, e exportar o código se queres personalizarla máis.

## Erros frecuentes ao crear apps con IA

**Prompts demasiado vagos.** "Crea unha app de tarefas" dáche algo xenérico. "Crea unha app de tarefas para freelancers onde cada tarefa teña cliente, proxecto, horas estimadas e facturadas, e estado de pagamento" dáche algo útil.

**Non iterar.** O primeiro resultado rara vez é o definitivo. A clave é iterar: pide cambios específicos ata conseguir exactamente o que necesitas.

**Intentar construír demasiado dun golpe.** Empieza polo núcleo mínimo que resolve o problema. Engade funcionalidades pouco a pouco.

**Ignorar os erros.** Cando algo non funciona, cópialle o erro á IA e pídelle que o arrastre. En 2 de cada 3 casos, resólveo soa.

**Non facer probas en móbil.** Se a túa aplicación vai usarse en móbil, proba en pantalla pequena desde o primeiro día.

## O que antes custaba 5.000 EUR, agora cústache unha tarde

Un desenvolvedor freelance en España cobra entre 400 e 800 euros ao día. Un proxecto sinxelo — un panel de xestión, unha ferramenta de cálculo, un formulario con lóxica — pode custar facilmente 2.000-5.000 euros en desenvolvemento tradicional.

Con Cursor, Bolt ou v0, o mesmo proxecto podes telo en funcionamento en 2-4 horas, pagando 20 euros ao mes de suscripción.

Non estamos dicindo que os desenvolvedores van desaparecer. Para aplicacións complexas, con autenticación robusta, escala e integracións avanzadas, aínda necesitarás alguén que saiba. Pero para as ferramentas do día a día do teu negocio — as que antes non podías permitirte — agora podes facelas ti.

## O taller Web da Rural GPT

O taller **Web e Produto Dixital** (28 de novembro, Anceu) está dedicado a construír con IA: Cursor, Bolt, v0 e Lovable. Cada participante sae coa súa web despregada nun só día.

Non é teoría. É: aquí está o teu portátil, aquí está a ferramenta, agora constrúe a túa web. Con alguén ao lado que te resolve os bloqueos en tempo real.

Se tes algunha idea de ferramenta ou web que axudaría ao teu negocio pero nunca atopaches o momento ou os recursos para construíla, este é o teu momento.

[Ver programa e reservar](/talleres-otono-2026/) · [Descubre se é para ti](/para-quen/)
