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
      worstRating: COMPANY_AGGREGATE_RATING.worstRating,
    },
    reviewBody: review.body,
  }));
}

export function buildServiceReviewSchema(options: ServiceReviewSchemaOptions) {
  // Google Review Snippets support Product (not Service or self-serving Organization ratings).
  // Structure matches: https://developers.google.com/search/docs/appearance/structured-data/review-snippet
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: options.name,
    description: options.description,
    url: options.url,
    image: ORGANIZATION.logo,
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
