import { PAGE_REVIEW_SCHEMAS } from './page-review-schemas';
import { ReviewStructuredData } from './schema';

export type ReviewSchemaPageKey = keyof typeof PAGE_REVIEW_SCHEMAS;

export function PageReviewSchema({ page }: { page: ReviewSchemaPageKey }) {
  return <ReviewStructuredData {...PAGE_REVIEW_SCHEMAS[page]} />;
}
