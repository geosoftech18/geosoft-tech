import { contact_meta_data } from '@/seo';
import { Metadata } from 'next';
import Contact from '@/core/page/Contact';
import { PageReviewSchema } from '@/seo/PageReviewSchema';

export const metadata: Metadata = {
  ...contact_meta_data(),
  title:
    "Ready to Elevate Your Business? Let's Discuss Your Growth Trajectory!",
};

export default function Page() {
  return (
    <>
      <PageReviewSchema page="contact" />
      <Contact />
    </>
  );
}
