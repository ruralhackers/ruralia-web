# Waitlist Form — Design Doc

**Date:** 2026-02-14
**Status:** Implemented

## Context

The site is in validation phase — no Stripe, no confirmed dates. All "Reservar" CTAs pointed to `href="#"` (dead links). Need to capture interest before opening sales.

## Decision

Netlify Forms with email + name + profile select. Zero dependencies, zero JS, free tier (100 submissions/month).

## Implementation

### Form location
- Section `#reservar` in `/retiro-ia-galicia/` — below pricing cards
- All CTAs across the site point to `/retiro-ia-galicia/#reservar`

### Fields
- **nombre** (text, required)
- **email** (email, required)
- **perfil** (select, required): Freelancer, Indie hacker, Consultor/a, Profesional tech, Otro

### Anti-spam
- Honeypot field via `netlify-honeypot="bot-field"`

### Post-submit
- Redirect to `/gracias/` — confirmation page with social links

### CTA flow
1. Header "Reservar" → `/retiro-ia-galicia/#reservar`
2. Home hero CTA → `/retiro-ia-galicia/#reservar`
3. Home final CTA → `/retiro-ia-galicia/#reservar`
4. Pricing cards → `#reservar` (same page anchor)
5. Other pages → `/retiro-ia-galicia/` (existing links to program page)

## Accessing submissions
Netlify dashboard → Site → Forms → "waitlist". Export to CSV for email campaigns.

## Future migration
When ready to sell: replace form with Stripe checkout link. Keep form as fallback for "notify me" on sold-out editions.
