import { about_meta_data } from '@/seo';
import { Metadata } from 'next';
import SolarProjectManagement from '@/core/page/Solar-Project-Management';


export const metadata: Metadata = {
  ...about_meta_data(),
  title: 'Solar Project Management | GEO Softech',
  description:
    'Solar Project Management is a platform that helps you manage your solar projects from start to finish. It is a cloud-based platform that allows you to manage your projects, leads, and customers.',
 
};

export default function Page() {
  return (
    <>
      
      <SolarProjectManagement />
    </>
  );
}
