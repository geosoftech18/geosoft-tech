import {
  COMPANY_AGGREGATE_RATING,
  ORGANIZATION,
  SCHEMA_REVIEWS,
} from './review-data';

export type ServiceReviewSchemaOptions = {
  url: string;
  name: string;
  description: string;
  areaServed?: string;
};

function buildAggregateRating() {
  return {
    '@type': 'AggregateRating',
    ratingValue: COMPANY_AGGREGATE_RATING.ratingValue,
    bestRating: COMPANY_AGGREGATE_RATING.bestRating,
    worstRating: COMPANY_AGGREGATE_RATING.worstRating,
    ratingCount: COMPANY_AGGREGATE_RATING.ratingCount,
  };
}

function buildReviews() {
  return SCHEMA_REVIEWS.map((review) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: COMPANY_AGGREGATE_RATING.bestRating,
    },
    reviewBody: review.body,
  }));
}

export function buildServiceReviewSchema(options: ServiceReviewSchemaOptions) {
  const organizationId = `${ORGANIZATION.url}/#organization`;
  const serviceId = `${options.url}#service`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: ORGANIZATION.name,
        url: ORGANIZATION.url,
        logo: ORGANIZATION.logo,
        telephone: ORGANIZATION.telephone,
        email: ORGANIZATION.email,
        sameAs: ORGANIZATION.sameAs,
        aggregateRating: buildAggregateRating(),
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: options.name,
        description: options.description,
        url: options.url,
        provider: {
          '@id': organizationId,
        },
        brand: {
          '@type': 'Brand',
          name: ORGANIZATION.name,
        },
        ...(options.areaServed
          ? {
              areaServed: {
                '@type': 'City',
                name: options.areaServed,
              },
            }
          : {}),
        aggregateRating: buildAggregateRating(),
        review: buildReviews(),
      },
    ],
  };
}

export function ReviewStructuredData(options: ServiceReviewSchemaOptions) {
  const schema = buildServiceReviewSchema(options);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
