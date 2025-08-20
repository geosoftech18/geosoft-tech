import { services } from '@/data/about';
import Image from 'next/image';
import React from 'react';

type Props = {};

const WhyChooseUs = (props: Props) => {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 md:gap-20">
        <div className="w-full max-w-3xl space-y-5 text-center">
          <h3 className="font-medium uppercase tracking-widest md:text-lg">
            Features
          </h3>
          <h2 className="text-3xl font-bold md:text-4xl">
            heading - publishing and graphic design
          </h2>
          <p className="text-lg md:text-xl">
            description - publishing and graphic design, Lorem ipsum is a
            placeholder text commonly used to demonstrate the visual form of a
            document or a
          </p>
        </div>
        <div className="flex w-full justify-center gap-10 max-md:flex-col md:overflow-x-scroll">
          {services.map((item) => (
            <div
              className="md:min-w-96 md:max-w-96 flex w-full cursor-pointer flex-col items-center justify-center space-y-10 rounded-3xl bg-white p-5 text-center transition-all hover:shadow-2xl"
              key={item.heading}
            >
              <Image
                src={item.image}
                alt={item.heading}
                width={120}
                height={130}
              />
              <div className="space-y-4">
                <h3 className="text-shades-black text-xl font-semibold md:text-2xl">
                  {item.heading}
                </h3>
                <p className="text-shades-black md:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
