import { about_meta_data } from '@/seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...about_meta_data(),
  title: 'About GEO Softech | Trusted Digital Marketing Company',
  description:
    'Learn about GEO Softech, a digital marketing and web development company helping brands grow with SEO, social media and custom websites. Discover our story and vision.',
};

export { default } from '@/core/page/About';
