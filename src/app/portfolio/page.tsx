import { projects_meta_data } from '@/seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...projects_meta_data(),
  title: 'Digital Marketing & Web Design Portfolio | GEO Softech',
  description:
    'View GEO Softech’s digital marketing and web design portfolio. See real SEO, social media and website results we’ve delivered for clients. Explore projects and case studies.',
};

export { default } from '@/core/page/Portfolio';
