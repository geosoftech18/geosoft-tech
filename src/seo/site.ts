import type { Metadata } from 'next';

export const SITE_URL = 'https://www.geosoftech.com';

/** Build absolute canonical URL from a path (e.g. `/about` → `https://www.geosoftech.com/about`). */
export function canonicalUrl(path: string = '/'): string {
  if (!path || path === '/') {
    return `${SITE_URL}/`;
  }
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${clean.replace(/\/+$/, '')}`;
}

/** Next.js metadata fragment for canonical URL. */
export function canonicalAlternates(path: string = '/'): Pick<Metadata, 'alternates'> {
  return {
    alternates: {
      canonical: canonicalUrl(path),
    },
  };
}
