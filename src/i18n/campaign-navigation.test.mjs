import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("shared navigation promotes localized workshops and reservation", async () => {
  const [ui, routes, header, footer] = await Promise.all([
    read("i18n/ui.ts"),
    read("i18n/routes.ts"),
    read("components/Header.astro"),
    read("components/Footer.astro"),
  ]);

  assert.match(ui, /nav\.talleres/);
  assert.match(ui, /nav\.href\.talleres/);
  assert.match(ui, /Coñece os talleres de IA/);
  assert.match(ui, /Conoce los talleres de IA/);
  assert.match(routes, /talleres-otono-2026/);
  assert.match(header, /nav\.href\.talleres/);
  assert.match(header, /href=\{t\('nav\.href\.talleres'\)\}/);
  assert.match(footer, /nav\.href\.talleres/);
  assert.match(header, /min-height:\s*44px/);
  assert.match(header, /\.header-nav a\s*\{[\s\S]*?min-width:\s*44px/);
  assert.match(footer, /min-height:\s*44px/);
  assert.match(footer, /\.footer-nav a\s*\{[\s\S]*?min-width:\s*44px/);
});

test("FAQ routes share current workshop content", async () => {
  const [gl, es] = await Promise.all([
    read("pages/faq.astro"),
    read("pages/es/faq.astro"),
  ]);

  assert.match(gl, /FaqPage locale="gl"/);
  assert.match(es, /FaqPage locale="es"/);
});

test("sitemap config prioritizes workshop routes", async () => {
  const [config, robots] = await Promise.all([
    read("../astro.config.mjs"),
    read("../public/robots.txt"),
  ]);

  assert.match(config, /talleres-otono-2026/);
  assert.match(robots, /sitemap-index\.xml/);
});

test("audience and team pages no longer sell the completed residence", async () => {
  const pages = await Promise.all([
    read("pages/para-quen.astro"),
    read("pages/es/para-quien.astro"),
    read("pages/sobre-nos.astro"),
    read("pages/es/sobre-nosotros.astro"),
  ]);

  for (const page of pages) {
    assert.match(page, /talleres-otono-2026/);
    assert.doesNotMatch(page, /Lista de espera/);
  }
});

test("blog CTA promotes workshops while historical residence copy stays archived", async () => {
  const ui = await read("i18n/ui.ts");
  const [gl, esTools, esFunding] = await Promise.all([
    read("content/blog/gl/ia-de-google-guia-gemini.md"),
    read("content/blog/es/herramientas-ia-freelancers.md"),
    read("content/blog/es/becas-fundae-formacion-ia.md"),
  ]);

  assert.match(ui, /blog\.cta_link_href':\s*'\/talleres-otono-2026\/'/);
  assert.match(ui, /blog\.cta_link_href':\s*'\/es\/talleres-otono-2026\/'/);
  assert.match(gl, /\(\/residencia-ia-galicia\/\)/);
  assert.match(esTools, /\(\/es\/residencia-ia-galicia\/\)/);
  assert.match(esFunding, /\(\/es\/residencia-ia-galicia\/\)/);
});
