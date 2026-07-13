import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("editorial foundation includes accessible interaction and motion rules", async () => {
  const css = await source("styles/editorial.css");

  assert.match(css, /--editorial-accent:\s*#1f5c3f/i);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /min-height:\s*44px/);
});

test("price card exposes a real link and tax-exclusive price slot", async () => {
  const component = await source("components/ui/PriceCard.astro");

  assert.match(component, /<a[\s\S]*href=\{href\}/);
  assert.match(component, /priceLabel/);
  assert.match(component, /taxNote/);
});

test("shared CTA and split components preserve semantic slots", async () => {
  const cta = await source("components/ui/CtaBand.astro");
  const split = await source("components/ui/EditorialSplit.astro");

  assert.match(cta, /<section/);
  assert.match(cta, /<slot/);
  assert.match(split, /<section/);
  assert.match(split, /name="media"/);
});

test("newsletter email field has an accessible name", async () => {
  const newsletter = await source("components/NewsletterPopup.astro");

  assert.match(newsletter, /id="nl-email"[\s\S]*aria-label=/);
  assert.match(newsletter, /event\.key === 'Escape'/);
  assert.match(newsletter, /event\.key === 'Tab'/);
  assert.match(newsletter, /previouslyFocused\?\.focus/);
});
