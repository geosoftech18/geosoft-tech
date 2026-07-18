import { Metadata } from 'next';
import NagpurPage from '@/core/page/Services/webdevelopment/nagpur';
import { PageReviewSchema } from '@/seo/PageReviewSchema';
import { canonicalAlternates } from '@/seo/site';

export const metadata: Metadata = {
  title: 'Web Development Company in Nagpur – Custom Sites | GEO Softech',
  description:
    'Web development company in Nagpur creating SEO-ready, mobile-friendly websites. Grow your business with high-converting web design. Contact GEO Softech Nagpur.',
  ...canonicalAlternates('/services/webdevelopment/development-in-nagpur'),
};

export default function Page() {
  return (
    <>
      <PageReviewSchema page="nagpur" />
      <NagpurPage />
    </>
  );
}
