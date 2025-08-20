import { contact_meta_data } from '@/seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...contact_meta_data(),
  title:
    "Ready to Elevate Your Business? Let's Discuss Your Growth Trajectory!",
};

export { default } from '@/core/page/Contact';
