import { services_meta_data } from '@/seo';
import { Metadata } from 'next';
import WebDevelopmentPage from '@/core/page/Services/webdevelopment';
import { PageReviewSchema } from '@/seo/PageReviewSchema';

export const metadata: Metadata = {
  ...services_meta_data(),
  title: 'Web Development Services – Custom SEO-Ready Sites | GEO Softech',
  description:
    'Get web development services for fast, SEO-friendly websites. We design and build custom sites that convert visitors into leads. Contact GEO Softech to get started.',
};

export default function Page() {
  return (
    <>
      <PageReviewSchema page="webDevelopment" />
      <WebDevelopmentPage />
    </>
  );
}
