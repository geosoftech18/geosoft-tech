import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { canonicalUrl } from '@/seo/site';

export type BreadcrumbItem = {
  name: string;
  /** Path used for link + schema (e.g. `/about`). Last item is shown as current page. */
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
  /** Use light text for dark hero backgrounds */
  variant?: 'default' | 'light';
};

function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.href),
    })),
  };
}

export function Breadcrumb({ items, className = '', variant = 'default' }: BreadcrumbProps) {
  if (!items?.length) return null;

  const isLight = variant === 'light';
  const linkClass = isLight
    ? 'text-white/80 hover:text-white'
    : 'text-muted-foreground hover:text-foreground';
  const currentClass = isLight ? 'text-white font-medium' : 'text-foreground font-medium';
  const sepClass = isLight ? 'text-white/50' : 'text-muted-foreground/60';

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={`mb-4 flex flex-wrap items-center gap-1 text-sm ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.name}-${index}`} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight className={`h-3.5 w-3.5 shrink-0 ${sepClass}`} aria-hidden />
                )}
                {!isLast ? (
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 transition-colors ${linkClass}`}
                  >
                    {index === 0 }
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <span className={`inline-flex items-center gap-1 ${currentClass}`} aria-current="page">
                    {index === 0 }
                    <span>{item.name}</span>
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema(items)),
        }}
      />
    </>
  );
}
