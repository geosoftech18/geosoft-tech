import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/seo/site';

/**
 * Proper robots.txt for GEO Softech.
 * Allows public pages, blocks admin/API/private paths, points to sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // /api/blog stays crawlable so client-side hydration of blog pages is never blocked.
        allow: ['/', '/api/blog'],
        disallow: [
          '/admin',
          '/admin/',
          '/api/',
          '/l/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/api/blog'],
        disallow: ['/admin', '/admin/', '/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
