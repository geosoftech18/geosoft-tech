import { Metadata } from 'next';

export const root_icons: Metadata = {
  icons: {
    icon: [
      {
        url: '/logo/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/logo/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/logo/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/logo/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: ['/logo/apple-icon.png'],
    apple: [
      {
        url: '/logo/apple-icon-57x57.png',
        sizes: '57x57',
        type: 'image/png',
      },
      {
        url: '/logo/apple-icon-60x60.png',
        sizes: '60x60',
        type: 'image/png',
      },
      {
        url: '/logo/apple-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        url: '/logo/apple-icon-76x76.png',
        sizes: '76x76',
        type: 'image/png',
      },
      {
        url: '/logo/apple-icon-114x114.png',
        sizes: '114x114',
        type: 'image/png',
      },
      {
        url: '/logo/apple-icon-120x120.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        url: '/logo/apple-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        url: '/logo/apple-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        url: '/logo/apple-icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/logo/apple-icon-precomposed.png',
      },
    ],
  },
};

const default_root_props: seo.meta_data_props = {
  title: 'GEO Softech',
  description:
    "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.",
  locale: 'en-US',
  siteName: 'GEO Softech',
  template: 'GEO Softech - %s',
  type: 'website',
  url: '/',
};

const default_twitter_props: Partial<seo.meta_twitter_props> = {
  title: 'GEO Softech',
  description:
    "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.",
  // siteId: "twitter_id",
  // creator: '@QiHealthCo',
  // site: '@QiHealthCo',
  // creatorId: "twitter_id",
  images: {
    url: '/logo/thumbnail-desktop.jpg',
    alt: 'GEO Softech Desc',
  },
};

export const root_robot: Metadata = {
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const root_twitter = (props = default_twitter_props): Metadata => {
  const { title, description, siteId, site, images, creatorId, creator } =
    props;
  return {
    twitter: {
      card: 'app',
      title: title,
      description: description,
      creator: creator,
      images: images,
      site: site,
    },
  };
};

export const root_meta_data = (props = default_root_props): Metadata => {
  const { description, locale, siteName, template, title, type, url } = props;
  return {
    ...root_icons,
    ...root_robot,
    alternates: {
      canonical: `https://www.geosoftech.com/${url}`,
    },
    title: {
      default: 'GEO Softech',
      template: template,
    },
    description: description,
    generator: 'Next.js',
    applicationName: siteName,
    keywords: ['Expert Social Media', 'SEO', 'Website Solutions'],
    openGraph: {
      title: title,
      description: description,
      url: `https://www.geosoftech.com/${url}`,
      siteName: siteName,
      images: [
        {
          url: '/logo/thumbnail-mobile.jpg',
          width: 800,
          height: 600,
          alt: "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.",
        },
        {
          url: '/logo/thumbnail-desktop.jpg',
          width: 1800,
          height: 1600,
          alt: "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.",
        },
      ],
      locale: locale,
      type: type,
    },
    themeColor: '#008BD0',
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
    },
    category: 'Finance',
  };
};

export const services_meta_data = (props = default_root_props): Metadata => {
  const { description, locale, siteName, template, title, type, url } = props;
  return {
    ...root_icons,
    ...root_robot,
    alternates: {
      canonical: `https://www.geosoftech.com/services`,
    },
    title: {
      default: 'GEO Softech',
      template: template,
    },
    description: description,
    generator: 'Next.js',
    applicationName: siteName,
    keywords: ['Expert Social Media', 'SEO', 'Website Solutions'],
    openGraph: {
      title: title,
      description: description,
      url: `https://www.geosoftech.com/services`,
      siteName: siteName,
      images: [
        {
          url: '/logo/thumbnail-mobile.jpg',
          width: 800,
          height: 600,
          alt: "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.",
        },
        {
          url: '/logo/thumbnail-desktop.jpg',
          width: 1800,
          height: 1600,
          alt: "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.",
        },
      ],
      locale: locale,
      type: type,
    },
    themeColor: '#008BD0',
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
    },
    category: 'Finance',
  };
};

export const about_meta_data = (props = default_root_props): Metadata => {
  const { description, locale, siteName, template, title, type, url } = props;
  return {
    ...root_icons,
    ...root_robot,
    alternates: {
      canonical: `https://www.geosoftech.com/about`,
    },
    title: {
      default: 'GEO Softech',
      template: template,
    },
    description: description,
    generator: 'Next.js',
    applicationName: siteName,
    keywords: ['Expert Social Media', 'SEO', 'Website Solutions'],
    openGraph: {
      title: title,
      description: description,
      url: `https://www.geosoftech.com/about`,
      siteName: siteName,
      images: [
        {
          url: '/logo/thumbnail-mobile.jpg',
          width: 800,
          height: 600,
          alt: "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.",
        },
        {
          url: '/logo/thumbnail-desktop.jpg',
          width: 1800,
          height: 1600,
          alt: "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.",
        },
      ],
      locale: locale,
      type: type,
    },
    themeColor: '#008BD0',
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
    },
    category: 'Finance',
  };
};

export const projects_meta_data = (props = default_root_props): Metadata => {
  const { description, locale, siteName, template, title, type, url } = props;
  return {
    ...root_icons,
    ...root_robot,
    alternates: {
      canonical: `https://www.geosoftech.com/portfolio`,
    },
    title: {
      default: 'GEO Softech',
      template: template,
    },
    description: description,
    generator: 'Next.js',
    applicationName: siteName,
    keywords: ['Expert Social Media', 'SEO', 'Website Solutions'],
    openGraph: {
      title: title,
      description: description,
      url: `https://www.geosoftech.com/portfolio`,
      siteName: siteName,
      images: [
        {
          url: '/logo/thumbnail-mobile.jpg',
          width: 800,
          height: 600,
          alt: "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.",
        },
        {
          url: '/logo/thumbnail-desktop.jpg',
          width: 1800,
          height: 1600,
          alt: "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.",
        },
      ],
      locale: locale,
      type: type,
    },
    themeColor: '#008BD0',
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
    },
    category: 'Finance',
  };
};

export const contact_meta_data = (props = default_root_props): Metadata => {
  const { description, locale, siteName, template, title, type, url } = props;
  return {
    ...root_icons,
    ...root_robot,
    alternates: {
      canonical: `https://www.geosoftech.com/contact-us`,
    },
    title: {
      default: 'GEO Softech',
      template: template,
    },
    description: description,
    generator: 'Next.js',
    applicationName: siteName,
    keywords: ['Expert Social Media', 'SEO', 'Website Solutions'],
    openGraph: {
      title: title,
      description: description,
      url: `https://www.geosoftech.com/contact-us`,
      siteName: siteName,
      images: [
        {
          url: '/logo/thumbnail-mobile.jpg',
          width: 800,
          height: 600,
          alt: "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.",
        },
        {
          url: '/logo/thumbnail-desktop.jpg',
          width: 1800,
          height: 1600,
          alt: "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.",
        },
      ],
      locale: locale,
      type: type,
    },
    themeColor: '#008BD0',
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
    },
    category: 'Finance',
  };
};
