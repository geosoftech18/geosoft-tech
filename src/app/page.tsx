import { Metadata } from 'next';
import Home from '@/core/page/Home';
import { PageReviewSchema } from '@/seo/PageReviewSchema';

export const metadata: Metadata = {
  title: 'Digital Marketing, SEO & Web Development Services | GEO Softech',
  description:
    'Get expert digital marketing, SEO services and custom web development designed to grow your business online. Drive more leads and conversions. Contact us to learn more.',
};

export default function Page() {
  return (
    <>
      <PageReviewSchema page="home" />
      <Home />
    </>
  );
}
