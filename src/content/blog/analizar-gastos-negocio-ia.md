---
title: "Cómo analizar los gastos de tu negocio con IA (sin tocar una sola factura)"
description: "Usamos Claude para analizar 305 facturas de Anceu Coliving en minutos y descubrir cuánto gastamos en café en 2025. Así funciona — y así puedes hacerlo tú con tus propios gastos."
date: "2026-04-01"
author: "Rural GPT"
keywords: ["analizar facturas con ia", "gestión gastos ia", "claude facturas", "ia para autónomos", "ia para pequeños negocios", "analizar gastos negocio"]
---

## Las facturas que nadie mira

Todo negocio tiene el mismo problema: las facturas están guardadas, organizadas por mes, perfectamente escaneadas. Y ahí se quedan.

Nadie se sienta a analizarlas de verdad. Sería horas de trabajo: abrir cada PDF, apuntar los datos relevantes, montar un Excel, buscar patrones. Para cuando acabas, ya no recuerdas por qué empezaste. Así que no se hace. Y sin esos datos, tomas decisiones a ciegas — sin saber en qué gastas realmente, sin poder negociar con proveedores, sin visibilidad sobre qué meses te cuestan más.

La IA cambia esto. Lo que antes eran horas de trabajo manual se convierte en una conversación de diez minutos.

## La pregunta

Anceu Coliving tiene 305 facturas de pagos del año 2025, organizadas mes a mes en una carpeta de Dropbox. Facturas de supermercado, proveedores, servicios digitales, suministros.

La pregunta era simple: **¿cuánto gastamos en café?**

No porque sea el gasto más importante. Sino porque es el tipo de pregunta que nunca tiene respuesta inmediata — y debería tenerla.

## El proceso: así se ve en Claude

Para empezar, se adjuntan las facturas de Froiz de octubre directamente en el chat de Claude. Claude lee PDFs con texto, tablas y líneas de producto sin problema.

El prompt no tiene nada de especial:

> *"Aquí tienes las facturas de compras de octubre. Necesito saber cuánto hemos gastado en café: grano, molido, descafeinado, cápsulas. Dame el detalle por producto y el total."*

![Prompt enviado a Claude con las facturas de Froiz adjuntas](/images/cafe-post/captura-1.png)

La respuesta llegó en segundos. Claude leyó cada línea de cada factura, identificó los productos de café y devolvió esto:

![Respuesta de Claude con el desglose de café de octubre](/images/cafe-post/captura-2.png)

**Octubre 2025 — Compras de café (Froiz)**

| Fecha | Producto | Uds | P. unitario | Importe |
|-------|----------|-----|-------------|---------|
| 01/10 | Café Froiz grano natural 500g | 2 | 5,63€ | 11,26€ |
| 01/10 | Café Froiz molido descaf. natural 250g | 1 | 2,79€ | 2,79€ |
| 09/10 | Café Trópico natural grano 500g | 2 | 7,83€ | 15,66€ |
| 09/10 | Café Cumbre grano natural selecto 500g | 2 | 6,81€ | 13,62€ |
| 09/10 | Café Froiz molido descaf. natural 250g | 5 | 2,79€ | 13,95€ |
| 15/10 | Café Trópico natural grano 500g | 7 | 7,83€ | 54,81€ |

**Total octubre: 112,09€ / ~8 kg de café**

## El problema de hacerlo a mano

Bien. Esto funcionó para octubre. Pero Anceu tiene 305 facturas repartidas en 10 meses.

Con **Claude.ai** — la versión web que ya conoce mucha gente — tendrías que repetir este proceso mes a mes: abrir una conversación nueva, subir los PDFs de ese mes a mano, hacer la pregunta, copiar el resultado. Diez veces.

Con 305 facturas en 10 carpetas, eso sigue siendo trabajo.

![305 facturas de Anceu Coliving organizadas por mes en Dropbox](/images/cafe-post/find-305-invoices.png)

Aquí es donde entra **Claude Code**: en lugar de subir archivos, le dices dónde está la carpeta y lee todo directamente desde el sistema. Sin subir nada. Sin abrir carpetas. Un solo prompt para los 305 documentos.

El resultado del año completo:

![Claude Code devuelve el resumen anual de gasto en café](/images/cafe-post/screenshot-3.png)

| Mes | Gasto café | Kg aprox. |
|-----|-----------|-----------|
| Enero | 28€ | 2,0 kg |
| Marzo | 45€ | 3,5 kg |
| Abril | 52€ | 4,0 kg |
| Mayo | 38€ | 3,0 kg |
| Junio | 61€ | 4,5 kg |
| Julio | 78€ | 6,0 kg |
| Agosto | 85€ | 6,5 kg |
| Septiembre | 72€ | 5,5 kg |
| **Octubre** | **112€** | **8,0 kg** |
| Noviembre | 68€ | 5,0 kg |
| **Total 2025** | **~639€** | **~48 kg** |

*Nota: febrero y diciembre sin facturas disponibles en el período analizado.*

## Lo que estos datos permiten hacer

639 euros en café en un año. 48 kilos. Octubre como mes pico — coincide con la mayor ocupación del espacio.

Con este desglose, Anceu tiene ahora algo que antes no tenía: **poder de negociación**. Ir a Froiz — o a cualquier proveedor de café — y decir *"os compramos aproximadamente 50 kg al año, ¿qué podéis hacer por nosotros?"* es una conversación completamente diferente a llegar sin datos.

Lo mismo aplica a cualquier negocio. ¿Cuánto gastas en software por suscripciones? ¿En materiales? ¿En servicios recurrentes que quizás ya no necesitas? Las respuestas están en tus facturas. El problema nunca fue que los datos no existieran — es que extraerlos a mano no merecía la pena.

Ahora sí.

## Esto es lo que enseñamos en RuralGPT

En la Residencia IA de RuralGPT dedicamos un día entero a Claude Code: la versión de Claude que trabaja directamente con tus archivos, tu carpeta de proyectos, tu sistema. Sin subir nada a mano. Sin copiar y pegar. Sin límites de contexto por mes.

Lo que hemos hecho aquí con facturas lo puedes hacer tú con los documentos de tu negocio: presupuestos, contratos, historial de clientes, registros de ventas. La diferencia entre Claude.ai y Claude Code no es de precio — es de lo que puedes llegar a hacer con él.

No necesitas saber programar. Necesitas saber qué pregunta quieres responder.

[Mira si la Residencia IA es para ti](/para-quien/) o [consulta el programa completo](/residencia-ia-galicia/).
