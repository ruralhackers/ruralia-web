import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("residence routes use one localized archive component", async () => {
  const [gl, es] = await Promise.all([
    read("pages/residencia-ia-galicia.astro"),
    read("pages/es/residencia-ia-galicia.astro"),
  ]);

  assert.match(gl, /ResidenceArchivePage locale="gl"/);
  assert.match(es, /ResidenceArchivePage locale="es"/);
});

test("archive marks the event complete and routes visitors to workshops", async () => {
  const archive = await read("components/ResidenceArchivePage.astro");

  assert.match(archive, /EventCompleted/);
  assert.match(archive, /SoldOut/);
  assert.match(archive, /talleres-otono-2026/);
  assert.match(archive, /campaign\.testimonial/);
  assert.match(archive, /accommodationFaq/);
  assert.match(archive, /entorno-anceu-480\.webp/);
  assert.doesNotMatch(archive, /PUBLIC_STRIPE_LINK/);
  assert.doesNotMatch(archive, /Lista de espera/);
});
