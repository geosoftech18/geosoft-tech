import type { Metadata } from 'next';
import { Chivo } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { root_meta_data } from '@/seo';
import Navbar from '@/core/components/Navbar';
import Footer from '@/core/common/Footer';
import Script from 'next/script';

const chivo = Chivo({ subsets: ['latin'] });

// ITC Avant Garde Gothic font configuration
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
    {
      path: '../fonts/ITC Avant Garde Gothic CE Book Oblique/ITC Avant Garde Gothic CE Book Oblique.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/ITC Avant Garde Gothic Medium Oblique/ITC Avant Garde Gothic Medium Oblique.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/ITC Avant Garde Gothic Bold Oblique/ITC Avant Garde Gothic Bold Oblique.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-avant-garde',
  display: 'swap',
});

export const metadata: Metadata = root_meta_data();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script type="text/javascript" id="linkedin1">
          {`_linkedin_partner_id = "5967722";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
        </Script>
        <Script type="text/javascript" id="linkedin2">
          {`(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
`}
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
        
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-710578432"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-710578432');
          `}
        </Script>
      </head>
      <body className={`${avantGarde.className} ${avantGarde.variable}`}>
        <Navbar
          logo={{
            url: '/logo/logo.webp',
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
                name: 'Contact Us',
                url: '/contact-us',
              },
              // {
              //   name: 'Support/Help Desk',
              //   url: '/support-help-desk',
              // },
              // {
              //   name: 'Blogs',
              //   url: '/blogs',
              // },
            ],
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
