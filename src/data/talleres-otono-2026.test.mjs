import test from "node:test";
import assert from "node:assert/strict";

import {
  STRIPE_LINKS,
  talleresOtono2026,
} from "./talleres-otono-2026.ts";

test("publishes both localized workshop campaigns", () => {
  assert.deepEqual(Object.keys(talleresOtono2026).sort(), ["es", "gl"]);
  assert.equal(talleresOtono2026.gl.workshops.length, 2);
  assert.equal(talleresOtono2026.es.workshops.length, 2);
});

test("uses the confirmed capacity and tax-exclusive prices everywhere", () => {
  for (const campaign of Object.values(talleresOtono2026)) {
    assert.equal(campaign.capacity, 15);
    assert.equal(campaign.pack.price, 350);
    assert.match(campaign.pack.priceLabel, /350 € \+ IVA/);

    for (const workshop of campaign.workshops) {
      assert.equal(workshop.capacity, 15);
      assert.equal(workshop.price, 199);
      assert.match(workshop.priceLabel, /199 € \+ IVA/);
    }
  }
});

test("contains the three confirmed live Stripe payment links", () => {
  assert.equal(
    STRIPE_LINKS.productivity,
    "https://buy.stripe.com/fZueVdgx54124ag0jVcAo04",
  );
  assert.equal(
    STRIPE_LINKS.web,
    "https://buy.stripe.com/cNibJ1dkT556ayE4AbcAo05",
  );
  assert.equal(
    STRIPE_LINKS.pack,
    "https://buy.stripe.com/8x24gz94D7de7ms0jVcAo06",
  );
});

test("lists all three team members in both locales", () => {
  for (const campaign of Object.values(talleresOtono2026)) {
    assert.deepEqual(
      campaign.team.map(({ name }) => name),
      ["Nacho Márquez", "Agustín Jamardo", "África Rodríguez"],
    );
  }
});
