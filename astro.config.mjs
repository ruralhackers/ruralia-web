// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ruralia.gal',
  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url.replace('https://ruralia.gal', '');

        // Home
        if (url === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Landing pages principales
        else if (['/retiro-ia-galicia/', '/para-quien/'].includes(url)) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        // Blog index
        else if (url === '/blog/') {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }
        // Blog posts
        else if (url.startsWith('/blog/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // Páginas secundarias
        else if (['/sobre-nosotros/', '/faq/'].includes(url)) {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        // Legal, gracias
        else {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }

        item.lastmod = new Date().toISOString().split('T')[0];

        return item;
      },
    }),
  ],
});
