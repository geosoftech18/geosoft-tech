import { services_meta_data } from '@/seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...services_meta_data(),
  title:
    'Elevate Your Business with Expert Social Media, SEO, and Website Solutions GEO Softech',
};

export { default } from '@/core/page/Services';
