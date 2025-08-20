import React from 'react';
import Herosection from './Herosection';
import Features from './Features';
import TextAnimation from './TextAnimation';
import Testimonials from '@/core/page/Home/Testimonials';
import Partners from '@/core/page/Home/Partners';
import Story from './Story';
import MissionVision from './MissionVision';
import OurTeam from './OurTeam';

type Props = {};

const About = (props: Props) => {
  return (
    <main
      className="w-full bg-green-200/5"
      // style={{
      //   // backgroundImage: 'linear-gradient(180deg, #FF00C414 0%, #FFFFFF 100%)',
      // }}
    >
      <Herosection />
      <Story />
      <Features />
      <MissionVision />
      <TextAnimation />
      <OurTeam />
      <Testimonials />
      <Partners />
    </main>
  );
};

export default About;
