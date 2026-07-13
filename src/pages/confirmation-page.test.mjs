import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("confirmation route includes clear next steps in both languages", async () => {
  const page = await read("pages/confirmacion-talleres.astro");

  assert.match(page, /Grazas/);
  assert.match(page, /Gracias/);
  assert.match(page, /hola@ruralgpt\.gal/);
  assert.match(page, /Revisa o teu correo/);
  assert.match(page, /Revisa tu correo/);
  assert.match(page, /robots="noindex, follow"/);
  assert.doesNotMatch(page, /<main class="language-grid">/);
});

test("Spanish confirmation alias redirects to the common bilingual route", async () => {
  const config = await read("../astro.config.mjs");

  assert.match(config, /'\/es\/confirmacion-talleres\/?'/);
  assert.match(config, /destination:\s*'\/confirmacion-talleres\/'/);
});
