import { ORGANIZATION } from './review-data';
import { SITE_URL } from './site';
import { JsonLd } from './JsonLd';

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;

export function buildOrganizationGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: ORGANIZATION.name,
        url: ORGANIZATION.url,
        logo: {
          '@type': 'ImageObject',
          url: ORGANIZATION.logo,
        },
        image: ORGANIZATION.logo,
        email: ORGANIZATION.email,
        telephone: ORGANIZATION.telephone,
        sameAs: ORGANIZATION.sameAs,
        foundingDate: '2018',
        description:
          'GEO Softech is a digital marketing and web development company helping businesses grow with SEO, social media marketing, and custom websites.',
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: ORGANIZATION.name,
        description:
          'Digital marketing, SEO and web development services by GEO Softech.',
        publisher: { '@id': ORGANIZATION_ID },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'ProfessionalService',
        '@id': LOCAL_BUSINESS_ID,
        name: ORGANIZATION.name,
        url: ORGANIZATION.url,
        image: ORGANIZATION.logo,
        logo: ORGANIZATION.logo,
        email: ORGANIZATION.email,
        telephone: ORGANIZATION.telephone,
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Grant Road',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          postalCode: '400007',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 18.9628,
          longitude: 72.8132,
        },
        areaServed: [
          { '@type': 'City', name: 'Mumbai' },
          { '@type': 'City', name: 'Pune' },
          { '@type': 'City', name: 'Nagpur' },
          { '@type': 'City', name: 'Jaipur' },
          { '@type': 'City', name: 'Surat' },
        ],
        sameAs: ORGANIZATION.sameAs,
        parentOrganization: { '@id': ORGANIZATION_ID },
      },
    ],
  };
}

/** Sitewide Organization + WebSite + LocalBusiness JSON-LD */
export function SiteOrganizationSchema() {
  return <JsonLd data={buildOrganizationGraph()} />;
}
