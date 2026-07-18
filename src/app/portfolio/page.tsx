import { projects_meta_data } from '@/seo';
import { Metadata } from 'next';
import Portfolio from '@/core/page/Portfolio';
import { PageReviewSchema } from '@/seo/PageReviewSchema';
import { canonicalAlternates } from '@/seo/site';

export const metadata: Metadata = {
  ...projects_meta_data(),
  title: 'Digital Marketing & Web Design Portfolio | GEO Softech',
  description:
    'View GEO Softech’s digital marketing and web design portfolio. See real SEO, social media and website results we’ve delivered for clients. Explore projects and case studies.',
  ...canonicalAlternates('/portfolio'),
};

export default function Page() {
  return (
    <>
      <PageReviewSchema page="portfolio" />
      <Portfolio />
    </>
  );
}
