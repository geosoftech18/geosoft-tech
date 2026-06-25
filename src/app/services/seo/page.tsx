import { services_meta_data } from '@/seo';
import { Metadata } from 'next';
import SeoPage from '@/core/page/Services/seo';
import { PageReviewSchema } from '@/seo/PageReviewSchema';

export const metadata: Metadata = {
  ...services_meta_data(),
  title: 'SEO Services - Technical, Local and Content SEO | GEO Softech',
  description:
    'Get SEO services from GEO Softech including technical SEO, local SEO and content optimization to increase rankings, traffic and leads.',
};

export default function Page() {
  return (
    <>
      <PageReviewSchema page="seo" />
      <SeoPage />
    </>
  );
}
