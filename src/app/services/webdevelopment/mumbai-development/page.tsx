import { Metadata } from 'next';
import MumbaiPage from '@/core/page/Services/webdevelopment/mumbai';
import { PageReviewSchema } from '@/seo/PageReviewSchema';
import { canonicalAlternates } from '@/seo/site';

export const metadata: Metadata = {
  title: 'Web Development Company in Mumbai – Expert Sites | GEO Softech',
  description:
    'Web development company in Mumbai building fast, SEO-friendly websites. Get custom web design that converts visitors into leads. Contact GEO Softech Mumbai today.',
  ...canonicalAlternates('/services/webdevelopment/mumbai-development'),
};

export default function Page() {
  return (
    <>
      <PageReviewSchema page="mumbai" />
      <MumbaiPage />
    </>
  );
}
