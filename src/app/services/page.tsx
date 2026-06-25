import { services_meta_data } from '@/seo';
import { Metadata } from 'next';
import Services from '@/core/page/Services';
import { PageReviewSchema } from '@/seo/PageReviewSchema';

export const metadata: Metadata = {
  ...services_meta_data(),
  title: 'Digital Marketing Services – SEO, Social & Web | GEO Softech',
  description:
    'Explore digital marketing services including SEO, social media marketing and web development tailored to your business. Boost visibility, leads and sales. Contact us today.',
};

export default function Page() {
  return (
    <>
      <PageReviewSchema page="services" />
      <Services />
    </>
  );
}
