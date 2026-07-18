import { Metadata } from 'next';
import connectDB from '@/lib/database/connection';
import Blog from '@/lib/database/models/Blog';
import { root_icons, root_robot } from '@/seo';
import { canonicalUrl } from '@/seo/site';
import { BlogPostingJsonLd } from '@/seo/BlogPostingJsonLd';
import BlogDetailPage from '@/core/page/Blog/[slug]';

const SITE_NAME = 'GEO Softech';
const DEFAULT_DESCRIPTION =
  "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.";

type BlogDoc = {
  title?: string;
  excerpt?: string;
  metaTitle?: string;
  metaDescription?: string;
  featuredImage?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  author?: string;
};

async function getPublishedBlog(slug: string): Promise<BlogDoc | null> {
  try {
    await connectDB();
    const blog = await Blog.findOne({ slug, status: 'published' }).lean();
    return (blog as BlogDoc) || null;
  } catch {
    return null;
  }
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

  const blog = await getPublishedBlog(slug);

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
  const blog = await getPublishedBlog(slug);

  const datePublished = blog?.createdAt
    ? new Date(blog.createdAt).toISOString()
    : undefined;
  const dateModified = blog?.updatedAt
    ? new Date(blog.updatedAt).toISOString()
    : datePublished;

  return (
    <>
      {blog?.title && (
        <BlogPostingJsonLd
          title={blog.metaTitle?.trim() || blog.title}
          description={
            blog.metaDescription?.trim() ||
            blog.excerpt?.trim() ||
            DEFAULT_DESCRIPTION
          }
          slug={slug}
          image={blog.featuredImage}
          datePublished={datePublished}
          dateModified={dateModified}
          authorName={blog.author || 'GEO Softech'}
        />
      )}
      <BlogDetailPage params={params} />
    </>
  );
}
