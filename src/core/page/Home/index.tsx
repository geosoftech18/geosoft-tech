import React from 'react';
import Herosection from './Herosection';
import FadeInOnScroll from '@/core/components/FadeInScroll';
import HomeTabs from './HomeTabs';
import Features from './Features';
import Services from './Services';
import Goal from './Goal';
import Counters from './Counters';
import Approach from './Approach';
import Testimonials from './Testimonials';
import Partners from './Partners';
import Community from './Community';
import FounderSection from '@/core/components/FounderSection';

const Home = () => {
  return (
    <main>
      <FadeInOnScroll>
        <Herosection />
      </FadeInOnScroll>
      <HomeTabs />
      <FadeInOnScroll>
        <Features />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Services />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Goal />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Counters />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Approach />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <FounderSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Testimonials />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Partners />
      </FadeInOnScroll>
      {/* <FadeInOnScroll>
        <Blogs />
      </FadeInOnScroll> */}
      <FadeInOnScroll>
        <Community />
      </FadeInOnScroll>
    </main>
  );
};

export default Home;
