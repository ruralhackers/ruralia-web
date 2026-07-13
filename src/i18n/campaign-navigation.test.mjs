import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

const productivityPosts = {
  gl: [
    "curso-chatgpt.md",
    "ia-de-google-guia-gemini.md",
    "chatgpt-vs-gemini-vs-claude.md",
    "ferramentas-ia-freelancers.md",
    "analizar-gastos-negocio-ia.md",
    "automatizacions-ia.md",
  ],
  es: [
    "curso-chatgpt.md",
    "ia-de-google-guia-gemini.md",
    "chatgpt-vs-gemini-vs-claude.md",
    "herramientas-ia-freelancers.md",
    "analizar-gastos-negocio-ia.md",
    "automatizaciones-ia.md",
  ],
};

const webPosts = {
  gl: ["crear-app-con-ia.md"],
  es: ["crear-app-con-ia.md"],
};

const archivePosts = {
  gl: ["retiro-ia-aldea-galega.md", "bolsas-fundae-formacion-ia.md"],
  es: ["retiro-ia-pueblo-gallego.md", "becas-fundae-formacion-ia.md"],
};

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

test("blog CTAs promote workshops or archive by topic", async () => {
  const ui = await read("i18n/ui.ts");
  assert.match(ui, /blog\.cta_link_href':\s*'\/talleres-otono-2026\/'/);
  assert.match(ui, /blog\.cta_link_href':\s*'\/es\/talleres-otono-2026\/'/);

  for (const file of productivityPosts.gl) {
    const content = await read(`content/blog/gl/${file}`);
    assert.match(content, /\/talleres-otono-2026\//);
    assert.doesNotMatch(content, /12 prazas por edición/);
    assert.doesNotMatch(content, /reserva a túa praza/i);
  }

  for (const file of productivityPosts.es) {
    const content = await read(`content/blog/es/${file}`);
    assert.match(content, /\/es\/talleres-otono-2026\//);
    assert.doesNotMatch(content, /12 plazas por edición/);
    assert.doesNotMatch(content, /reserva tu plaza/i);
  }

  for (const file of webPosts.gl) {
    const content = await read(`content/blog/gl/${file}`);
    assert.match(content, /\/talleres-otono-2026\//);
  }

  for (const file of webPosts.es) {
    const content = await read(`content/blog/es/${file}`);
    assert.match(content, /\/es\/talleres-otono-2026\//);
  }

  for (const file of archivePosts.gl) {
    const content = await read(`content/blog/gl/${file}`);
    assert.match(content, /\/residencia-ia-galicia\//);
    assert.match(content, /\/talleres-otono-2026\//);
  }

  for (const file of archivePosts.es) {
    const content = await read(`content/blog/es/${file}`);
    assert.match(content, /\/es\/residencia-ia-galicia\//);
    assert.match(content, /\/es\/talleres-otono-2026\//);
  }

  const glBlogFiles = await readdir(new URL("content/blog/gl/", root));
  const esBlogFiles = await readdir(new URL("content/blog/es/", root));

  for (const file of glBlogFiles) {
    const content = await read(`content/blog/gl/${file}`);
    assert.doesNotMatch(content, /Todo incluído\.\s*\n\s*\n\[Ver o programa\]\(\/residencia-ia-galicia\//);
  }

  for (const file of esBlogFiles) {
    const content = await read(`content/blog/es/${file}`);
    assert.doesNotMatch(content, /12 plazas, todo incluido/);
  }
});
