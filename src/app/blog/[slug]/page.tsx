import { Metadata } from 'next';
import connectDB from '@/lib/database/connection';
import Blog from '@/lib/database/models/Blog';
import { root_icons, root_robot } from '@/seo';

const SITE_NAME = 'GEO Softech';
const DEFAULT_DESCRIPTION =
  "Elevate your business with Geo SofTech's expert solutions in social media, SEO, and website development. Harness the power of strategic online presence for lasting success.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `https://www.geosoftech.com/blog/${slug}`;

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

  try {
    await connectDB();
    const blog = await Blog.findOne({ slug, status: 'published' }).lean();

    if (blog) {
      const doc = blog as {
        title?: string;
        excerpt?: string;
        metaTitle?: string;
        metaDescription?: string;
        featuredImage?: string | null;
      };
      const mt = doc.metaTitle?.trim();
      const md = doc.metaDescription?.trim();
      pageTitle = mt || doc.title || pageTitle;
      description = md || doc.excerpt?.trim() || DEFAULT_DESCRIPTION;

      if (doc.featuredImage && /^https?:\/\//i.test(doc.featuredImage)) {
        ogImages = [
          {
            url: doc.featuredImage,
            width: 1200,
            height: 630,
            alt: doc.title || pageTitle,
          },
        ];
      }
    }
  } catch {
    // Keep fallbacks if DB is unavailable
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

export { default } from '@/core/page/Blog/[slug]';
