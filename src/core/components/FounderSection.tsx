import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa6';

const FounderSection = () => {
  return (
    <section className="w-full py-10 md:py-20">
      <div className="relative mx-auto grid max-w-6xl grid-cols-4 items-center space-y-8 overflow-hidden rounded-lg border border-solid p-8 md:h-80 md:grid-cols-8 lg:grid-cols-12">
        <h2
          color="dark"
          className="col-span-full text-5xl font-bold text-neutral-800 md:col-span-2 lg:col-span-3 lg:!text-5xl"
        >
          Meet The Founder
        </h2>
        <div className="col-span-4 space-y-5 md:col-start-4 md:col-end-7 lg:col-start-5 lg:col-end-10">
          <h3 className="text-2xl font-semibold text-neutral-800 md:text-3xl">
            Amar Korde
          </h3>
          <p className="text-lg md:text-xl">
            Founder, Head of UX at Geosoft Tech. Behavioral science and
            Marketing expert.
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/amar-korde1818/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaLinkedinIn className="text-secondary-3 text-heading-s" />
            </Link>
          </div>
        </div>
        <Image
          src="/about/amar.png"
          width={225}
          height={340}
          alt="The Founder"
          className="bottom-0 right-0 col-span-4 justify-self-end max-md:-mx-8 max-md:!-mb-8 md:absolute"
        />
      </div>
    </section>
  );
};

export default FounderSection;
