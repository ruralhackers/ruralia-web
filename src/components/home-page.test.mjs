import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("home routes use one localized shared component", async () => {
  const [gl, es] = await Promise.all([
    read("pages/index.astro"),
    read("pages/es/index.astro"),
  ]);

  assert.match(gl, /HomePage locale="gl"/);
  assert.match(es, /HomePage locale="es"/);
});

test("new home is a brand hub that links to the workshop landing", async () => {
  const home = await read("components/HomePage.astro");

  assert.match(home, /data-hero-line1/);
  assert.match(home, /prefers-reduced-motion/);
  assert.match(home, /campaign\.workshops/);
  assert.match(home, /talleres-otono-2026/);
  assert.match(home, /sara-testimonial\.webp/);
  assert.match(home, /sara-testimonial-480\.webp/);
  assert.match(home, /residencia-ia-galicia/);
  assert.doesNotMatch(home, /PUBLIC_STRIPE_LINK/);
  assert.doesNotMatch(home, /room-102/);
});
