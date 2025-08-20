import Image from 'next/image';
import React from 'react';

const Story = () => {
  return (
    <div className="m-auto mt-24 flex w-full max-w-7xl items-center justify-center gap-16 border-0 border-y border-solid border-neutral-700 p-5 max-md:flex-col md:mt-0 md:py-20">
      <div className="w-full" data-aos="fade-right">
        <Image
          src={'/about/introduction.webp'}
          width={650}
          height={653}
          alt="Atharva Hotel Introduction"
        />
      </div>
      <div className="w-full max-w-xl space-y-5" data-aos="fade-left">
        <div className="w-full space-y-2">
          <h3 className="font-semibold uppercase text-t max-md:text-center">
            Our Story
          </h3>
          <h2 className="text-center font-extrabold uppercase text-neutral-800 md:text-start md:text-4xl">
            Born from Innovation, Driven by Impact
          </h2>
        </div>
        <p className="text-center text-xl md:text-start">
          GEO Softech wasn&lsquo;t just founded in 2018; it was ignited by a
          passion for progress. Amar Korde, fueled by a desire to empower
          businesses in the digital age, envisioned a company that
          wouldn&lsquo;t just build websites, but bridge the gap between
          potential and achievement. From those early sparks, we&lsquo;ve
          evolved into a trusted partner for businesses worldwide, delivering
          cutting-edge solutions that propel growth and unlock success.
        </p>
      </div>
    </div>
  );
};

export default Story;
