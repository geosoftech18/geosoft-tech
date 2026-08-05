import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { root_icons, root_robot } from '@/seo';
import { canonicalUrl } from '@/seo/site';
import { BlogPostingJsonLd } from '@/seo/BlogPostingJsonLd';
import BlogDetailPage from '@/core/page/Blog/[slug]';
import {
  getPublishedPostBySlug,
  getPublishedPosts,
  getRelatedPosts,
} from '@/lib/database/services/blogQueries';

const SITE_NAME = 'GEO Softech';
const DEFAULT_DESCRIPTION =
  "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.";

// Pre-render every published post at build time; new posts are picked up on revalidate.
export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonical = canonicalUrl(`/blog/${slug}`);

  let pageTitle = `Blog | ${SITE_NAME}`;
  let description = DEFAULT_DESCRIPTION;

  type BlogOgImage = { url: string; width?: number; height?: number; alt?: string };
  let ogImages: BlogOgImage[] = [
    {
      url: '/logo/thumbnail-desktop.jpg',
      width: 1800,
      height: 1600,
      alt: DEFAULT_DESCRIPTION,
    },
  ];

  const blog = await getPublishedPostBySlug(slug);

  if (blog) {
    const mt = blog.metaTitle?.trim();
    const md = blog.metaDescription?.trim();
    pageTitle = mt || blog.title || pageTitle;
    description = md || blog.excerpt?.trim() || DEFAULT_DESCRIPTION;

    if (blog.featuredImage && /^https?:\/\//i.test(blog.featuredImage)) {
      ogImages = [
        {
          url: blog.featuredImage,
          width: 1200,
          height: 630,
          alt: blog.title || pageTitle,
        },
      ];
    }
  }

  return {
    ...root_icons,
    ...root_robot,
    title: pageTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'en-US',
      type: 'article',
      images: ogImages as NonNullable<Metadata['openGraph']>['images'],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getPublishedPostBySlug(slug);

  // Return a real 404 instead of a soft-404 page that Google would index as thin content.
  if (!blog) {
    notFound();
  }

  const related = await getRelatedPosts(blog);

  return (
    <>
      <BlogPostingJsonLd
        title={blog.metaTitle?.trim() || blog.title}
        description={
          blog.metaDescription?.trim() || blog.excerpt?.trim() || DEFAULT_DESCRIPTION
        }
        slug={slug}
        image={blog.featuredImage}
        datePublished={blog.createdAt}
        dateModified={blog.updatedAt}
        authorName="GEO Softech"
      />
      <BlogDetailPage
        params={params}
        initialSlug={slug}
        initialPost={{
          ...blog,
          author: 'GEO Softech Team',
          readTime: '5 min read',
          likes: 0,
          comments: 0,
        }}
        initialRelatedPosts={related.map((post) => ({ ...post, content: '' }))}
      />
    </>
  );
}
