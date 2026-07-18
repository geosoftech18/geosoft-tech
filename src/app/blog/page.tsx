import { Metadata } from 'next';
import BlogPage from '@/core/page/Blog';
import { canonicalAlternates } from '@/seo/site';

export const metadata: Metadata = {
  title:
    'Elevate Your Business with Expert Social Media, SEO, and Website Solutions GEO Softech',
  ...canonicalAlternates('/blog'),
};

export default function Page() {
  return <BlogPage />;
}
