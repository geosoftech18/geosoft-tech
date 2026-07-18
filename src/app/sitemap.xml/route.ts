import { NextRequest } from 'next/server';
import { SitemapStream, SitemapStreamOptions, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { SITE_URL } from '@/seo/site';

export async function GET(_req: NextRequest) {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/about', changefreq: 'weekly', priority: 0.9 },
    { url: '/services', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/seo', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/socialmedia', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/webdevelopment', changefreq: 'weekly', priority: 0.9 },
    {
      url: '/services/webdevelopment/development-in-nagpur',
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: '/services/webdevelopment/mumbai-development',
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: '/services/webdevelopment/jaipur-development',
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: '/services/webdevelopment/pune-development',
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: '/services/webdevelopment/surat-development',
      changefreq: 'weekly',
      priority: 0.8,
    },
    { url: '/portfolio', changefreq: 'weekly', priority: 0.8 },
    { url: '/blog', changefreq: 'daily', priority: 0.8 },
    { url: '/contact-us', changefreq: 'monthly', priority: 0.7 },
    { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
    { url: '/terms-and-conditions', changefreq: 'yearly', priority: 0.3 },
    { url: '/refund-policy', changefreq: 'yearly', priority: 0.3 },
  ];

  const streamOptions: SitemapStreamOptions = {
    hostname: SITE_URL,
    // @ts-ignore
    cacheTime: 600,
  };

  const stream = new SitemapStream(streamOptions);
  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data: Buffer) => data.toString()
  );

  return new Response(xmlString, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
