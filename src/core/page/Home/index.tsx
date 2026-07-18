import React from 'react';
import dynamic from 'next/dynamic';
import Herosection from './Herosection';
import HomeTabs from './HomeTabs';

const FadeInOnScroll = dynamic(() => import('@/core/components/FadeInScroll'), {
  ssr: true,
});

const Features = dynamic(() => import('./Features'), { ssr: true });
const Services = dynamic(() => import('./Services'), { ssr: true });
const Goal = dynamic(() => import('./Goal'), { ssr: true });
const Counters = dynamic(() => import('./Counters'), { ssr: true });
const Approach = dynamic(() => import('./Approach'), { ssr: true });
const Testimonials = dynamic(() => import('./Testimonials'), { ssr: true });
const Partners = dynamic(() => import('./Partners'), { ssr: true });
const Community = dynamic(() => import('./Community'), { ssr: true });
const FounderSection = dynamic(() => import('@/core/components/FounderSection'), {
  ssr: true,
});
const Certifications = dynamic(() => import('./Certifications'), { ssr: true });
const PartnerBadges = dynamic(() => import('./PartnerBadges'), { ssr: true });

const Home = () => {
  return (
    <main>
      {/* Hero is not fade-wrapped so LCP paints immediately */}
      <Herosection />
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
      <FadeInOnScroll>
        <Certifications />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <PartnerBadges />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Community />
      </FadeInOnScroll>
    </main>
  );
};

export default Home;
