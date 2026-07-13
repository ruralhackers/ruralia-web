---
title: "Como analizar os gastos do teu negocio con IA (sen tocar ningunha factura)"
description: "Usamos Claude para analizar 305 facturas de Anceu Coliving en minutos e descubrir canto gastamos en café en 2025. Así funciona — e así podes facelo ti cos teus propios gastos."
date: "2026-04-01"
author: "Rural GPT"
keywords: ["analizar facturas con ia", "xestión gastos ia", "claude facturas", "ia para autónomos", "ia para pequenos negocios", "analizar gastos negocio"]
translationKey: "analizar-gastos-negocio-ia"
---

## As facturas que ninguén mira

Todo negocio ten o mesmo problema: as facturas están gardadas, organizadas por mes, perfectamente escaneadas. E aí quedan.

Ninguén se senta a analizalas de verdade. Serían horas de traballo: abrir cada PDF, apuntar os datos relevantes, montar un Excel, buscar patróns. Para cando acabas, xa non lembras por que empezaches. Así que non se fai. E sen eses datos, tomas decisións ás cegas — sen saber en que gastas realmente, sen poder negociar con provedores, sen visibilidade sobre que meses che custan máis.

A IA cambia isto. O que antes eran horas de traballo manual convértese nunha conversa de dez minutos.

## A pregunta

Anceu Coliving ten 305 facturas de pagamentos do ano 2025, organizadas mes a mes nunha carpeta de Dropbox. Facturas de supermercado, provedores, servizos dixitais, subministracións.

A pregunta era simple: **¿canto gastamos en café?**

Non porque sexa o gasto máis importante. Senón porque é o tipo de pregunta que nunca ten resposta inmediata — e debería tela.

## O proceso: así se ve en Claude

Para comezar, adxúntanse as facturas de Froiz de outubro directamente no chat de Claude. Claude le PDFs con texto, táboas e liñas de produto sen problema.

O prompt non ten nada de especial:

> *"Aquí tes as facturas de compras de outubro. Necesito saber canto gastamos en café: gran, moído, descafeinado, cápsulas. Dame o detalle por produto e o total."*

![Prompt enviado a Claude coas facturas de Froiz adxuntas](/images/cafe-post/captura-1.png)

A resposta chegou en segundos. Claude leu cada liña de cada factura, identificou os produtos de café e devolveu isto:

![Resposta de Claude co desglose de café de outubro](/images/cafe-post/captura-2.png)

**Outubro 2025 — Compras de café (Froiz)**

| Data | Produto | Uds | P. unitario | Importe |
|------|---------|-----|-------------|---------|
| 01/10 | Café Froiz gran natural 500g | 2 | 5,63€ | 11,26€ |
| 01/10 | Café Froiz moído descaf. natural 250g | 1 | 2,79€ | 2,79€ |
| 09/10 | Café Trópico natural gran 500g | 2 | 7,83€ | 15,66€ |
| 09/10 | Café Cumbre gran natural selecto 500g | 2 | 6,81€ | 13,62€ |
| 09/10 | Café Froiz moído descaf. natural 250g | 5 | 2,79€ | 13,95€ |
| 15/10 | Café Trópico natural gran 500g | 7 | 7,83€ | 54,81€ |

**Total outubro: 112,09€ / ~8 kg de café**

## O problema de facelo a man

Ben. Isto funcionou para outubro. Pero Anceu ten 305 facturas repartidas en 10 meses.

Con **Claude.ai** — a versión web que xa coñece moita xente — terías que repetir este proceso mes a mes: abrir unha conversa nova, subir os PDFs dese mes a man, facer a pregunta, copiar o resultado. Dez veces.

Con 305 facturas en 10 carpetas, iso segue sendo traballo.

![305 facturas de Anceu Coliving organizadas por mes en Dropbox](/images/cafe-post/find-305-invoices.png)

Aquí é onde entra **Claude Code**: en lugar de subir arquivos, díslle onde está a carpeta e le todo directamente desde o sistema. Sen subir nada. Sen abrir carpetas. Un só prompt para os 305 documentos.

O resultado do ano completo:

![Claude Code devolve o resumo anual de gasto en café](/images/cafe-post/screenshot-3.png)

| Mes | Gasto café | Kg aprox. |
|-----|-----------|-----------|
| Xaneiro | 28€ | 2,0 kg |
| Marzo | 45€ | 3,5 kg |
| Abril | 52€ | 4,0 kg |
| Maio | 38€ | 3,0 kg |
| Xuño | 61€ | 4,5 kg |
| Xullo | 78€ | 6,0 kg |
| Agosto | 85€ | 6,5 kg |
| Setembro | 72€ | 5,5 kg |
| **Outubro** | **112€** | **8,0 kg** |
| Novembro | 68€ | 5,0 kg |
| **Total 2025** | **~639€** | **~48 kg** |

*Nota: febreiro e decembro sen facturas dispoñibles no período analizado.*

## O que estes datos permiten facer

639 euros en café nun ano. 48 quilos. Outubro como mes pico — coincide coa maior ocupación do espazo.

Con este desglose, Anceu ten agora algo que antes non tiña: **poder de negociación**. Ir a Froiz — ou a calquera provedor de café — e dicir *"comprámoslles aproximadamente 50 kg ao ano, ¿que podedes facer por nós?"* é unha conversa completamente diferente a chegar sen datos.

O mesmo aplica a calquera negocio. ¿Canto gastas en software por subscricións? ¿En materiais? ¿En servizos recorrentes que quizais xa non necesitas? As respostas están nas túas facturas. O problema nunca foi que os datos non existiran — é que extraelos a man non merecía a pena.

Agora si.

## Isto é o que practicamos no taller de Produtividade

No taller **IA e Produtividade** da Rural GPT (31 de outubro, Anceu) traballamos con Claude Code: a versión de Claude que traballa directamente cos teus arquivos, a túa carpeta de proxectos, o teu sistema. Sen subir nada a man. Sen copiar e pegar.

O que fixemos aquí con facturas podes facelo ti cos documentos do teu negocio: orzamentos, contratos, historial de clientes, rexistros de vendas. A diferenza entre Claude.ai e Claude Code non é de prezo — é do que podes chegar a facer con el.

Non necesitas saber programar. Necesitas saber que pregunta queres responder.

[Ver programa e reservar](/talleres-otono-2026/) · [Descobre se é para ti](/para-quen/)
