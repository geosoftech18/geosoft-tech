import type { Metadata } from 'next';
import { Chivo } from 'next/font/google';
import './globals.css';
import { root_meta_data } from '@/seo';
import Navbar from '@/core/components/Navbar';
import Footer from '@/core/common/Footer';
import Script from 'next/script';

const chivo = Chivo({ subsets: ['latin'] });

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
      </head>
      <body className={chivo.className}>
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
