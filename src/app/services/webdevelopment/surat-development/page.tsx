import { Metadata } from 'next';
import SuratPage from '@/core/page/Services/webdevelopment/surat';
import { PageReviewSchema } from '@/seo/PageReviewSchema';

export const metadata: Metadata = {
  title: 'Web Development Company in Surat – Business Websites | GEO Softech',
  description:
    'Web development company in Surat creating professional business websites with SEO-friendly development and mobile-first design.',
};

export default function Page() {
  return (
    <>
      <PageReviewSchema page="surat" />
      <SuratPage />
    </>
  );
}
