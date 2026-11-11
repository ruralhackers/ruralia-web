import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("provides Galician and Spanish route wrappers", async () => {
  const [gl, es] = await Promise.all([
    read("pages/talleres-otono-2026.astro"),
    read("pages/es/talleres-otono-2026.astro"),
  ]);

  assert.match(gl, /locale="gl"/);
  assert.match(es, /locale="es"/);
});

test("landing exposes the conversion sections and workshop reservation links", async () => {
  const [page, data] = await Promise.all([
    read("components/TalleresOtonoPage.astro"),
    read("data/talleres-otono-2026.ts"),
  ]);

  for (const id of [
    "contexto",
    "talleres",
    "reservas",
    "inclue",
    "proba-social",
    "onde",
    "equipo",
    "faq",
  ]) {
    assert.match(page, new RegExp(`id="${id}"`));
  }

  assert.match(page, /workshop\.stripeUrl/);
  assert.doesNotMatch(page, /campaign\.pack/);
  assert.doesNotMatch(data, /350|Pack Out|Pack Oto/);
  assert.match(page, /buildWorkshopEvent/);
  assert.match(data, /valueAddedTaxIncluded:\s*false/);
  assert.match(page, /getWorkshopPath\(locale, workshop\)/);
  assert.match(page, /loading="lazy"/);
  assert.match(page, /srcset=/);
  assert.match(page, /sizes=/);
  assert.match(page, /mobile-reserve/);
  assert.match(page, /\.contact-mail\s*\{[\s\S]*min-height:\s*44px/);
  assert.match(page, /\.contact-strip\s*\{[\s\S]*padding-bottom:\s*6rem/);
  assert.match(page, /hero\.seoSubtitle/);
  assert.match(page, /campaign\.internalLinks/);
  assert.match(page, /ogImageWidth=\{1600\}/);
  assert.doesNotMatch(page, /"@type":\s*"FAQPage"/);
  assert.match(data, /seoSubtitle:\s*"Talleres presenciais de IA en Galicia · Outono 2026"/);
  assert.match(data, /title:\s*"Taller de IA para Asesorías, Xestorías e Administración · 28 nov \| Rural GPT"/);
  assert.match(data, /title:\s*"Taller de IA para Asesorías, Gestorías y Administración · 28 nov \| Rural GPT"/);
  assert.match(page, /getWorkshopsOpenFirst\(campaign\)/);
  assert.doesNotMatch(data, /Podo cambiar de taller|cambiar de taller/);
});

test("each workshop has GL and ES landing routes built from the shared data", async () => {
  const [gl, es, landing, routes] = await Promise.all([
    read("pages/talleres/[slug].astro"),
    read("pages/es/talleres/[slug].astro"),
    read("components/WorkshopLandingPage.astro"),
    read("i18n/routes.ts"),
  ]);

  assert.match(gl, /locale="gl"/);
  assert.match(es, /locale="es"/);
  assert.match(gl, /getStaticPaths/);
  assert.match(es, /getStaticPaths/);
  assert.match(landing, /buildWorkshopEvent\(workshop, locale, pageUrl\)/);
  assert.match(landing, /canonicalURL=\{pageUrl\}/);
  assert.match(landing, /<PriceCard/);
  assert.match(landing, /getWorkshopFaq/);
  assert.match(routes, /'talleres\/ia-asesorias-xestorias': 'talleres\/ia-asesorias-gestorias'/);
  assert.match(routes, /'talleres\/ia-produtividade': 'talleres\/ia-productividad'/);
});
