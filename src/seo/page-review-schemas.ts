import type { ServiceReviewSchemaOptions } from './schema';

const BASE = 'https://www.geosoftech.com';

export const PAGE_REVIEW_SCHEMAS = {
  home: {
    url: `${BASE}/`,
    name: 'Digital Marketing, SEO & Web Development Services',
    description:
      'Expert digital marketing, SEO services and custom web development designed to grow your business online and drive more leads and conversions.',
  },
  about: {
    url: `${BASE}/about`,
    name: 'About GEO Softech — Digital Marketing Company',
    description:
      'Learn about GEO Softech, a digital marketing and web development company helping brands grow with SEO, social media and custom websites.',
  },
  services: {
    url: `${BASE}/services`,
    name: 'Digital Marketing Services — SEO, Social Media & Web',
    description:
      'Digital marketing services including SEO, social media marketing and web development tailored to boost visibility, leads and sales.',
  },
  seo: {
    url: `${BASE}/services/seo`,
    name: 'SEO Services — Technical, Local and Content SEO',
    description:
      'SEO services from GEO Softech including technical SEO, local SEO and content optimization to increase rankings, traffic and leads.',
  },
  socialMedia: {
    url: `${BASE}/services/socialmedia`,
    name: 'Social Media Marketing Services for Brands',
    description:
      'Social media marketing services to grow your brand on Facebook, Instagram and more with strategy, content and ads that convert.',
  },
  webDevelopment: {
    url: `${BASE}/services/webdevelopment`,
    name: 'Web Development Services — Custom SEO-Ready Sites',
    description:
      'Web development services for fast, SEO-friendly websites. Custom sites designed and built to convert visitors into leads.',
  },
  nagpur: {
    url: `${BASE}/services/webdevelopment/development-in-nagpur`,
    name: 'Web Development Company in Nagpur — Custom Sites',
    description:
      'Web development company in Nagpur creating SEO-ready, mobile-friendly websites that grow your business with high-converting web design.',
    areaServed: 'Nagpur',
  },
  mumbai: {
    url: `${BASE}/services/webdevelopment/mumbai-development`,
    name: 'Web Development Company in Mumbai — Expert Sites',
    description:
      'Web development company in Mumbai building fast, SEO-friendly websites with custom web design that converts visitors into leads.',
    areaServed: 'Mumbai',
  },
  jaipur: {
    url: `${BASE}/services/webdevelopment/jaipur-development`,
    name: 'Web Development Company in Jaipur — Modern Sites',
    description:
      'Web development company in Jaipur delivering modern, SEO-friendly and mobile-responsive websites for local businesses.',
    areaServed: 'Jaipur',
  },
  pune: {
    url: `${BASE}/services/webdevelopment/pune-development`,
    name: 'Web Development Company in Pune — Custom Sites',
    description:
      'Web development company in Pune building custom, SEO-ready websites designed to rank on Google and convert visitors into customers.',
    areaServed: 'Pune',
  },
  surat: {
    url: `${BASE}/services/webdevelopment/surat-development`,
    name: 'Web Development Company in Surat — Business Websites',
    description:
      'Web development company in Surat creating professional business websites with SEO-friendly development and mobile-first design.',
    areaServed: 'Surat',
  },
  contact: {
    url: `${BASE}/contact-us`,
    name: 'Contact GEO Softech — Digital Marketing Consultation',
    description:
      'Contact GEO Softech for digital marketing, SEO and web development consultation. Get a free strategy discussion for your business growth.',
  },
  portfolio: {
    url: `${BASE}/portfolio`,
    name: 'Digital Marketing & Web Design Portfolio',
    description:
      'GEO Softech portfolio showcasing SEO, social media and website development results delivered for clients across industries.',
  },
} as const satisfies Record<string, ServiceReviewSchemaOptions>;
