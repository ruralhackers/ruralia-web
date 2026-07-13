// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://ruralgpt.gal',
  adapter: netlify(),
  i18n: {
    defaultLocale: 'gl',
    locales: ['gl', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    // Legacy redirect (keep working)
    '/retiro-ia-galicia': { status: 301, destination: '/residencia-ia-galicia/' },
    // Spanish pages that moved under /es/
    '/para-quien/':        { status: 301, destination: '/es/para-quien/' },
    '/sobre-nosotros/':    { status: 301, destination: '/es/sobre-nosotros/' },
    '/gracias/':           { status: 301, destination: '/es/gracias/' },
    '/gracias-contacto/':  { status: 301, destination: '/es/gracias-contacto/' },
    '/es/confirmacion-talleres/': { status: 302, destination: '/confirmacion-talleres/' },
  },
  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url.replace('https://ruralgpt.gal', '');

        // Exclude utility / noindex pages
        if (
          url === '/grazas/' || url === '/grazas-contacto/' || url === '/confirmacion-talleres/' ||
          url === '/es/gracias/' || url === '/es/gracias-contacto/' ||
          url === '/404/' || url === '/es/404/'
        ) {
          return undefined;
        }

        // ── GL pages ───────────────────────────────────────────────────
        if (url === '/') {
          item.priority = 1.0; item.changefreq = 'weekly';
        } else if (url === '/talleres-otono-2026/') {
          item.priority = 0.9; item.changefreq = 'weekly';
        } else if (['/residencia-ia-galicia/', '/para-quen/'].includes(url)) {
          item.priority = 0.8; item.changefreq = 'weekly';
        } else if (url === '/blog/') {
          item.priority = 0.7; item.changefreq = 'weekly';
        } else if (url.startsWith('/blog/')) {
          item.priority = 0.6; item.changefreq = 'monthly';
        } else if (['/sobre-nos/', '/faq/'].includes(url)) {
          item.priority = 0.5; item.changefreq = 'monthly';
        }
        // ── ES pages ───────────────────────────────────────────────────
        else if (url === '/es/') {
          item.priority = 0.9; item.changefreq = 'weekly';
        } else if (url === '/es/talleres-otono-2026/') {
          item.priority = 0.9; item.changefreq = 'weekly';
        } else if (['/es/residencia-ia-galicia/', '/es/para-quien/'].includes(url)) {
          item.priority = 0.8; item.changefreq = 'weekly';
        } else if (url === '/es/blog/') {
          item.priority = 0.7; item.changefreq = 'weekly';
        } else if (url.startsWith('/es/blog/')) {
          item.priority = 0.6; item.changefreq = 'monthly';
        } else if (['/es/sobre-nosotros/', '/es/faq/'].includes(url)) {
          item.priority = 0.5; item.changefreq = 'monthly';
        } else {
          item.priority = 0.3; item.changefreq = 'yearly';
        }

        item.lastmod = new Date().toISOString().split('T')[0];
        return item;
      },
    }),
  ],
});
