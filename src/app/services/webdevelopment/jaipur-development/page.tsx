import { Metadata } from 'next';
import JaipurPage from '@/core/page/Services/webdevelopment/jaipur';
import { PageReviewSchema } from '@/seo/PageReviewSchema';
import { canonicalAlternates } from '@/seo/site';

export const metadata: Metadata = {
  title: 'Web Development Company in Jaipur – Modern Sites | GEO Softech',
  description:
    'Web development company in Jaipur delivering modern, SEO-friendly websites for local businesses. Contact GEO Softech Jaipur today.',
  ...canonicalAlternates('/services/webdevelopment/jaipur-development'),
};

export default function Page() {
  return (
    <>
      <PageReviewSchema page="jaipur" />
      <JaipurPage />
    </>
  );
}
