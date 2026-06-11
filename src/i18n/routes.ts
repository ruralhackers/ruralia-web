/**
 * URL route mapping between GL (default, no prefix) and ES (/es/).
 * Key = GL path segment(s) after the root.
 * Value = ES path segment(s) after /es/.
 *
 * Used by Header / Footer / SEO for hreflang alternates and the lang switcher.
 */

export const routes: Record<string, string> = {
  // GL → ES
  '': '',                                    // / ↔ /es/
  'residencia-ia-galicia': 'residencia-ia-galicia',
  'para-quen': 'para-quien',
  'faq': 'faq',
  'sobre-nos': 'sobre-nosotros',
  'legal': 'legal',
  'grazas': 'gracias',
  'grazas-contacto': 'gracias-contacto',
  'blog': 'blog',
};

// Reverse mapping: ES slug → GL slug
export const routesEsToGl: Record<string, string> = Object.fromEntries(
  Object.entries(routes).map(([gl, es]) => [es, gl])
);

/**
 * Given the current pathname and locale, return the alternate URL.
 * e.g. getAlternateUrl('/para-quen/', 'gl')  → '/es/para-quien/'
 *      getAlternateUrl('/es/para-quien/', 'es') → '/para-quen/'
 */
export function getAlternateUrl(pathname: string, currentLocale: string): string {
  const cleanPath = pathname.replace(/\/$/, '');

  if (currentLocale === 'gl') {
    // GL → build ES URL
    const withoutLeading = cleanPath.replace(/^\//, '');
    // Handle blog post URLs: /blog/[post-id]/
    if (withoutLeading.startsWith('blog/')) {
      return `/es/${withoutLeading}/`.replace(/\/+$/, '/');
    }
    const esSlug = routes[withoutLeading] ?? withoutLeading;
    return esSlug === '' ? '/es/' : `/es/${esSlug}/`;
  } else {
    // ES → build GL URL
    const withoutEs = cleanPath.replace(/^\/es/, '').replace(/^\//, '');
    // Handle blog post URLs: es/blog/[post-id]
    if (withoutEs.startsWith('blog/')) {
      return `/${withoutEs}/`.replace(/\/+$/, '/');
    }
    const glSlug = routesEsToGl[withoutEs] ?? withoutEs;
    return glSlug === '' ? '/' : `/${glSlug}/`;
  }
}
