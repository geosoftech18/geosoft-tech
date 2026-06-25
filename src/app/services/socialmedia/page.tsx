import { services_meta_data } from '@/seo';
import { Metadata } from 'next';
import SocialMediaPage from '@/core/page/Services/socialmedia';
import { PageReviewSchema } from '@/seo/PageReviewSchema';

export const metadata: Metadata = {
  ...services_meta_data(),
  title: 'Social Media Marketing Services for Brands | GEO Softech',
  description:
    'Social media marketing services to grow your brand on Facebook, Instagram and more. Get strategy, content and ads that convert. Contact GEO Softech to get started.',
};

export default function Page() {
  return (
    <>
      <PageReviewSchema page="socialMedia" />
      <SocialMediaPage />
    </>
  );
}
