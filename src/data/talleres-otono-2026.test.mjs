import test from "node:test";
import assert from "node:assert/strict";

import {
  STRIPE_LINKS,
  buildWorkshopEvent,
  getWorkshopFaq,
  getWorkshopPath,
  getWorkshopsOpenFirst,
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
    assert.equal("pack" in campaign, false);

    for (const workshop of campaign.workshops) {
      assert.equal(workshop.capacity, 15);
      assert.equal(workshop.price, 199);
      assert.match(workshop.priceLabel, /199 € \+ IVA/);
    }
  }
});

test("contains the confirmed live Stripe payment links (no pack)", () => {
  assert.equal(
    STRIPE_LINKS.productivity,
    "https://buy.stripe.com/fZueVdgx54124ag0jVcAo04",
  );
  assert.equal(
    STRIPE_LINKS.web,
    "https://buy.stripe.com/5kQcN65ya5lF5uTfbkeZ200",
  );
  assert.deepEqual(Object.keys(STRIPE_LINKS).sort(), ["productivity", "web"]);
});

test("lists all three team members in both locales", () => {
  for (const campaign of Object.values(talleresOtono2026)) {
    assert.deepEqual(
      campaign.team.map(({ name }) => name),
      ["Nacho Márquez", "Agustín Jamardo", "África Rodríguez"],
    );
  }
});

test("productivity workshop is closed; asesorías stays open", () => {
  for (const campaign of Object.values(talleresOtono2026)) {
    const byId = Object.fromEntries(campaign.workshops.map((w) => [w.id, w]));
    assert.equal(byId.productivity.closed, true);
    assert.notEqual(byId.web.closed, true);
    assert.ok(campaign.closedLabel.length > 0);
  }
});

test("workshop landings have clean localized slugs, own FAQs and a single Event", () => {
  const expected = {
    gl: {
      productivity: "/talleres/ia-produtividade/",
      web: "/talleres/ia-asesorias-xestorias/",
    },
    es: {
      productivity: "/es/talleres/ia-productividad/",
      web: "/es/talleres/ia-asesorias-gestorias/",
    },
  };
  for (const [locale, campaign] of Object.entries(talleresOtono2026)) {
    for (const workshop of campaign.workshops) {
      assert.equal(getWorkshopPath(locale, workshop), expected[locale][workshop.id]);
      assert.ok(workshop.seoDescription.length > 50);
      const faq = getWorkshopFaq(campaign, workshop);
      assert.ok(faq.length >= workshop.faq.length + 4);
      const event = buildWorkshopEvent(workshop, locale, "https://ruralgpt.gal/x/");
      assert.equal(event["@type"], "Event");
      assert.equal(event.url, "https://ruralgpt.gal/x/");
      if (workshop.closed) {
        assert.equal(event.offers, undefined);
      } else {
        assert.equal(event.offers.url, STRIPE_LINKS.web);
        assert.equal(event.offers.availability, "https://schema.org/InStock");
      }
    }
  }
});

test("open workshop is listed first and targets admin departments too", () => {
  for (const campaign of Object.values(talleresOtono2026)) {
    const [first, last] = getWorkshopsOpenFirst(campaign);
    assert.equal(first.id, "web");
    assert.equal(last.id, "productivity");
    assert.equal(first.title, "IA para datos sensibles");
    assert.match(first.kicker, /administración/);
    assert.match(first.dateLabel, /10:00–18:00/);
    assert.match(first.eventName, /^IA para datos sensibles: asesorías/);
    assert.ok(first.audience.some((item) => /[Dd]epartamentos de administración/.test(item)));
  }
});

test("the ChatGPT FAQ is on the open landing and the general FAQ", () => {
  for (const campaign of Object.values(talleresOtono2026)) {
    const open = campaign.workshops.find((w) => !w.closed);
    assert.ok(getWorkshopFaq(campaign, open).some((item) => /ChatGPT/.test(item.question)));
    assert.ok(campaign.faq.some((item) => /ChatGPT/.test(item.question)));
  }
});
