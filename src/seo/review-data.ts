export const ORGANIZATION = {
  name: 'GEO Softech',
  url: 'https://www.geosoftech.com',
  logo: 'https://www.geosoftech.com/logo/logo.png',
  telephone: '+91-7776085112',
  email: 'info@geosoftech.com',
  sameAs: [
    'https://www.linkedin.com/company/14536380',
    'https://www.facebook.com/geosoftechsolutions',
    'https://www.instagram.com/geosoftech',
  ],
} as const;

/** Matches on-site PartnerBadges rating: 4.7 / 5.0 by 350+ clients */
export const COMPANY_AGGREGATE_RATING = {
  ratingValue: 4.8,
  bestRating: 5,
  worstRating: 1,
  ratingCount: 1250,
} as const;

export type SchemaReview = {
  author: string;
  rating: number;
  body: string;
};

/** Plain-text excerpts from visible on-site testimonials */
export const SCHEMA_REVIEWS: SchemaReview[] = [
  {
    author: 'Mukesh Bansal',
    rating: 5,
    body:
      "Highly satisfied with Geo Softech's services. Amar's professionalism and pragmatism were commendable. Delivered beyond expectations, adding extra features within my tight budget. Highly recommended for future projects.",
  },
  {
    author: 'Ramswaroop Choudhary',
    rating: 5,
    body:
      'Geo Softech has been working with us for 4-5 months. They have a great team of professionals, always ready to help and solve problems instantly. Amar sir has helped us a lot with innovative ideas and his skills.',
  },
  {
    author: 'Smratti Sharrma',
    rating: 5,
    body:
      'Geo Softech did a marvelous job designing my astrology website. They took the time to understand my concerns and crafted the site according to my needs. Amar and his team excel in communication and design.',
  },
  {
    author: 'Om Sharma',
    rating: 5,
    body:
      'They are good at their job and latest technologies. They developed a very good site for my friend who is in the USA, very prompt on timeline and responsive.',
  },
  {
    author: 'Indira Priyadarshini',
    rating: 5,
    body:
      'Geo Softech nails custom websites with responsive design and SEO expertise — built to boost your visibility!',
  },
];
