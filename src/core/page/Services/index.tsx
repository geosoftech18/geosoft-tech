import React from 'react';
import Herosection from './Herosection';
import Services from '@/core/page/Home/Services';
import RiseToTop from './RiseToTop';
import FadeInOnScroll from '@/core/components/FadeInScroll';
import Approach from '@/core/page/Home/Approach';
import Testimonials from '@/core/page/Home/Testimonials';

type Props = {};

const ServicePage = (props: Props) => {
  return (
    <main
      className="bg-cover"
      style={{
        backgroundImage: 'url(/services/bg.webp)',
      }}
    >
      <Herosection />
      <FadeInOnScroll>
        <Services />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <RiseToTop />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Approach />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Testimonials />
      </FadeInOnScroll>
    </main>
  );
};

export default ServicePage;
