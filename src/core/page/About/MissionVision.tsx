import Image from 'next/image';
import React from 'react';

const MissionVision = () => {
  return (
    <div className="m-auto mt-24 flex w-full max-w-7xl items-center justify-center gap-16 p-5 max-md:flex-col md:mt-0 md:py-20">
      <div className="w-full max-w-md" data-aos="fade-right">
        <Image
          src={'/about/introduction.webp'}
          width={650}
          height={653}
          alt="Atharva Hotel Introduction"
        />
      </div>
      <div className="flex flex-wrap justify-between gap-10 rounded-2xl bg-white p-10 shadow-card">
        <div
          className="w-full max-w-xl space-y-5 lg:w-[45%]"
          data-aos="fade-left"
        >
          <h2 className="text-center font-bold uppercase text-p md:text-start">
            Mission: Empowering Businesses, Amplifying Success
          </h2>
          <p className="text-center md:text-start">
            Our mission is clear: to equip businesses with comprehensive digital
            solutions that drive growth, elevate visibility, and fuel success in
            the ever-evolving digital landscape. We believe in harnessing the
            power of technology to not just survive, but thrive.
          </p>
        </div>
        <div
          className="w-full max-w-xl space-y-5 lg:w-[45%]"
          data-aos="fade-left"
        >
          <h2 className="text-center font-bold uppercase text-p md:text-start">
            Vision: Leading the Digital Frontier, Together:
          </h2>
          <p className="text-center md:text-start">
            We aspire to be a global leader in digital innovation, recognized
            for helping businesses of all sizes reach their full potential. We
            achieve this through our expertise, creativity, and unwavering
            commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};
export default MissionVision;
