import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'www.geosoftech.com';

/**
 * Redirect apex domain (geosoftech.com) → www (www.geosoftech.com)
 * so all traffic uses the canonical host matching SEO/canonical URLs.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase();

  if (host === 'geosoftech.com') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.host = CANONICAL_HOST;
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next.js internals and static assets
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)$).*)',
  ],
};
