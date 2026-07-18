import { Metadata } from 'next';
import PunePage from '@/core/page/Services/webdevelopment/pune';
import { PageReviewSchema } from '@/seo/PageReviewSchema';
import { canonicalAlternates } from '@/seo/site';

export const metadata: Metadata = {
  title: 'Web Development Company in Pune – Custom Sites | GEO Softech',
  description:
    'Web development company in Pune building custom, SEO-ready websites designed to rank on Google and convert visitors into customers.',
  ...canonicalAlternates('/services/webdevelopment/pune-development'),
};

export default function Page() {
  return (
    <>
      <PageReviewSchema page="pune" />
      <PunePage />
    </>
  );
}
