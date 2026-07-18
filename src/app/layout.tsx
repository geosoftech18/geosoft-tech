import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { root_meta_data } from '@/seo';
import Navbar from '@/core/components/Navbar';
import Footer from '@/core/common/Footer';
import Script from 'next/script';
import { SiteOrganizationSchema } from '@/seo/SiteOrganizationSchema';

// Only load the weights used across the UI (skip unused italic faces to cut render-blocking)
const avantGarde = localFont({
  src: [
    {
      path: '../fonts/ITC Avant Garde Gothic CE Book/ITC Avant Garde Gothic CE Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ITC Avant Garde Gothic Medium/ITC Avant Garde Gothic Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/ITC Avant Garde Gothic Bold/ITC Avant Garde Gothic Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-avant-garde',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = root_meta_data();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/home/hero.jpg" fetchPriority="high" />
      </head>
      <body className={`${avantGarde.className} ${avantGarde.variable}`}>
        <Navbar
          logo={{
            url: '/logo/logo.png',
            alt: 'GEOSOFTECH',
          }}
          navlist={{
            links: [
              {
                name: 'Home',
                url: '/',
              },
              {
                name: 'About Us',
                url: '/about',
              },
              {
                name: 'Services',
                url: '/services',
              },
              {
                name: 'Portfolio',
                url: '/portfolio',
              },
              {
                name: 'Blogs',
                url: '/blog',
              },
              {
                name: 'Contact Us',
                url: '/contact-us',
              },
            ],
          }}
        />
        {children}
        <Footer />
        <SiteOrganizationSchema />

        {/* Third-party scripts deferred so they do not block LCP/FCP */}
        <Script id="linkedin-partner" strategy="lazyOnload">
          {`_linkedin_partner_id = "5967722";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
        </Script>
        <Script id="linkedin-insight" strategy="lazyOnload">
          {`(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=5967722&fmt=gif"
          />
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-710578432"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-710578432');
          `}
        </Script>
      </body>
    </html>
  );
}
