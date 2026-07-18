import { JsonLd } from './JsonLd';
import { ORGANIZATION } from './review-data';
import { SITE_URL, canonicalUrl } from './site';

export type BlogPostingInput = {
  title: string;
  description: string;
  slug: string;
  image?: string | null;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
};

export function buildBlogPostingSchema(post: BlogPostingInput) {
  const url = canonicalUrl(`/blog/${post.slug}`);
  const image =
    post.image && /^https?:\/\//i.test(post.image)
      ? post.image
      : ORGANIZATION.logo;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: [image],
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Person',
      name: post.authorName || 'GEO Softech',
    },
    publisher: {
      '@type': 'Organization',
      name: ORGANIZATION.name,
      logo: {
        '@type': 'ImageObject',
        url: ORGANIZATION.logo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    inLanguage: 'en-IN',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: ORGANIZATION.name,
      url: SITE_URL,
    },
  };
}

export function BlogPostingJsonLd(post: BlogPostingInput) {
  if (!post?.title || !post?.slug) return null;
  return <JsonLd data={buildBlogPostingSchema(post)} />;
}
