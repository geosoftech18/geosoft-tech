import { Metadata } from 'next';
import NagpurPage from '@/core/page/Services/webdevelopment/nagpur';
import { PageReviewSchema } from '@/seo/PageReviewSchema';

export const metadata: Metadata = {
  title: 'Web Development Company in Nagpur – Custom Sites | GEO Softech',
  description:
    'Web development company in Nagpur creating SEO-ready, mobile-friendly websites. Grow your business with high-converting web design. Contact GEO Softech Nagpur.',
};

export default function Page() {
  return (
    <>
      <PageReviewSchema page="nagpur" />
      <NagpurPage />
    </>
  );
}
