import connectDB from '@/lib/database/connection';
import Blog from '@/lib/database/models/Blog';

/**
 * Server-side blog reads used by the public blog pages and the sitemap.
 * These bypass /api/blog so post content is present in the initial HTML,
 * which is what search engines index.
 */

export type PublicBlogPost = {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  status: 'published';
  featuredImage: string | null;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
  updatedAt: string;
};

export type PublicBlogSummary = Omit<PublicBlogPost, 'content'>;

type RawBlog = {
  _id: unknown;
  title?: string;
  content?: string;
  excerpt?: string;
  tags?: string[];
  featuredImage?: string | null;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

function toIsoString(value: Date | string | undefined): string {
  if (!value) return new Date(0).toISOString();
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

function serialize(doc: RawBlog): PublicBlogPost {
  return {
    _id: String(doc._id),
    title: doc.title ?? '',
    content: doc.content ?? '',
    excerpt: doc.excerpt ?? '',
    tags: Array.isArray(doc.tags) ? doc.tags : [],
    status: 'published',
    featuredImage: doc.featuredImage ?? null,
    slug: doc.slug ?? '',
    metaTitle: doc.metaTitle,
    metaDescription: doc.metaDescription,
    createdAt: toIsoString(doc.createdAt),
    updatedAt: toIsoString(doc.updatedAt ?? doc.createdAt),
  };
}

export async function getPublishedPosts(): Promise<PublicBlogSummary[]> {
  try {
    await connectDB();
    const docs = await Blog.find({ status: 'published' })
      .select('-content')
      .sort({ createdAt: -1 })
      .lean<RawBlog[]>();

    return docs.map((doc) => {
      const { content: _content, ...summary } = serialize(doc);
      return summary;
    });
  } catch (error) {
    console.error('Failed to load published blog posts:', error);
    return [];
  }
}

export async function getPublishedPostBySlug(
  slug: string
): Promise<PublicBlogPost | null> {
  try {
    await connectDB();
    const doc = await Blog.findOne({ slug, status: 'published' }).lean<RawBlog | null>();
    return doc ? serialize(doc) : null;
  } catch (error) {
    console.error(`Failed to load blog post "${slug}":`, error);
    return null;
  }
}

export async function getRelatedPosts(
  post: Pick<PublicBlogPost, '_id' | 'tags'>,
  limit = 2
): Promise<PublicBlogSummary[]> {
  if (!post.tags.length) return [];

  try {
    await connectDB();
    const docs = await Blog.find({
      status: 'published',
      _id: { $ne: post._id },
      tags: { $in: post.tags },
    })
      .select('-content')
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean<RawBlog[]>();

    return docs.map((doc) => {
      const { content: _content, ...summary } = serialize(doc);
      return summary;
    });
  } catch (error) {
    console.error('Failed to load related blog posts:', error);
    return [];
  }
}
