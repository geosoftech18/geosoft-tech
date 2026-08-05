import { Metadata } from 'next';
import BlogPage from '@/core/page/Blog';
import { canonicalAlternates } from '@/seo/site';
import { getPublishedPosts } from '@/lib/database/services/blogQueries';

export const metadata: Metadata = {
  title:
    'Elevate Your Business with Expert Social Media, SEO, and Website Solutions GEO Softech',
  ...canonicalAlternates('/blog'),
};

// Keep the listing fresh while still serving crawlers pre-rendered HTML.
export const revalidate = 300;

export default async function Page() {
  const posts = await getPublishedPosts();

  return <BlogPage initialPosts={posts} />;
}
