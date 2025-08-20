import { NextRequest, NextResponse } from 'next/server';
import { SitemapStream, SitemapStreamOptions, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export async function GET(req: NextRequest, res: NextResponse) {
  // An array with your links
  const links = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/about', changefreq: 'daily', priority: 1 },
    { url: '/services', changefreq: 'daily', priority: 1 },
    { url: '/privacy-policy', changefreq: 'daily', priority: 1 },
    { url: '/contact-us', changefreq: 'daily', priority: 1 },
    { url: '/portfolio', changefreq: 'daily', priority: 1 },
  ];

  const streamOptions: SitemapStreamOptions = {
    hostname: `https://www.geosoftech.com`,
    // @ts-ignore
    cacheTime: 600,
  };

  const stream = new SitemapStream(streamOptions);

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: any) => data);
  return new Response(xmlString);
}
