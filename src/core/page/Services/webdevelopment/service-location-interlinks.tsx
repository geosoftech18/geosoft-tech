import Link from 'next/link';

export type ServiceCitySlug =
  | 'mumbai'
  | 'pune'
  | 'nagpur'
  | 'jaipur'
  | 'surat';

type CityLink = {
  slug: ServiceCitySlug;
  href: string;
  /** Keyword-rich anchor for SEO interlinking */
  label: string;
  city: string;
};

const CITY_LINKS: CityLink[] = [
  {
    slug: 'mumbai',
    href: '/services/webdevelopment/mumbai-development',
    label: 'Website Designing Company in Mumbai',
    city: 'Mumbai',
  },
  {
    slug: 'pune',
    href: '/services/webdevelopment/pune-development',
    label: 'Website Designing Services in Pune',
    city: 'Pune',
  },
  {
    slug: 'nagpur',
    href: '/services/webdevelopment/development-in-nagpur',
    label: 'Website Designing Company in Nagpur',
    city: 'Nagpur',
  },
  {
    slug: 'jaipur',
    href: '/services/webdevelopment/jaipur-development',
    label: 'Web Development Company in Jaipur',
    city: 'Jaipur',
  },
  {
    slug: 'surat',
    href: '/services/webdevelopment/surat-development',
    label: 'Website Designing Company in Surat',
    city: 'Surat',
  },
];

const MAIN_SERVICE = {
  href: '/services/webdevelopment',
  label: 'Web Development Services',
};

type Props = {
  /** When set, that city is excluded and a link back to the main service page is shown */
  currentCity?: ServiceCitySlug;
};

/**
 * SEO interlinking between /services/webdevelopment and city landing pages.
 * Uses descriptive keyword anchors; does not change forms or CTAs.
 */
export default function ServiceLocationInterlinks({ currentCity }: Props) {
  const cities = currentCity
    ? CITY_LINKS.filter((c) => c.slug !== currentCity)
    : CITY_LINKS;

  const current = currentCity
    ? CITY_LINKS.find((c) => c.slug === currentCity)
    : undefined;

  const heading = current
    ? `Web Development Services Across India`
    : `Website Designing Services in Major Cities`;

  const intro = current
    ? `Looking beyond ${current.city}? Explore our full ${MAIN_SERVICE.label.toLowerCase()} or browse website designing services in other cities we serve.`
    : `GEO Softech delivers professional website designing and web development services across India. Choose your city for local expertise and project delivery.`;

  return (
    <section
      aria-labelledby="service-location-interlinks-heading"
      className="py-10 sm:py-14 bg-white border-t border-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <h2
            id="service-location-interlinks-heading"
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3"
          >
            {heading}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {current ? (
              <>
                Looking beyond {current.city}? Explore our full{' '}
                <Link
                  href={MAIN_SERVICE.href}
                  className="font-medium text-[#00bf62] underline underline-offset-2 hover:text-[#00994e]"
                >
                  {MAIN_SERVICE.label}
                </Link>{' '}
                or browse website designing services in other cities we serve.
              </>
            ) : (
              intro
            )}
          </p>
        </div>

        <nav aria-label="Web development city pages">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {current && (
              <li>
                <Link
                  href={MAIN_SERVICE.href}
                  className="inline-flex items-center rounded-full border border-[#00bf62]/30 bg-[#00bf62]/5 px-3.5 py-2 text-xs sm:text-sm font-medium text-gray-800 hover:border-[#00bf62] hover:bg-[#00bf62]/10 hover:text-[#00994e] transition-colors"
                >
                  {MAIN_SERVICE.label}
                </Link>
              </li>
            )}
            {cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={city.href}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3.5 py-2 text-xs sm:text-sm font-medium text-gray-800 hover:border-[#00bf62]/50 hover:bg-[#00bf62]/5 hover:text-[#00994e] transition-colors"
                >
                  {city.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
