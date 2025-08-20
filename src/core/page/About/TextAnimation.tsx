import Marquee from '@/core/components/Marquee';
import React from 'react';

const TextAnimation = () => {
  return (
    <section className="w-full">
      <div className="w-full space-y-4 py-12 md:py-28">
        <Marquee>
          <p className="w-full text-clip whitespace-nowrap bg-gradient-to-br from-t via-green via-60% to-green bg-clip-text text-[177px] font-bold text-transparent">
            Cloud System - Hight Performance
          </p>
        </Marquee>
        <Marquee direction="toRight">
          <p className="text-outline w-full whitespace-nowrap text-[177px] font-bold">
            Art Direction - Strategy - Branding
          </p>
        </Marquee>
      </div>
    </section>
  );
};

export default TextAnimation;
