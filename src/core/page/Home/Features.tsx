'use client';

import Button from '@/core/components/Button';
import { features } from '@/data';
import Image from 'next/image';
import React, { useState } from 'react';

const Features = () => {
  const [activeTab, setActiveTab] = useState<
    'marketing' | 'design-and-development'
  >('marketing');
  return (
    <section className="h-full w-full" id="features">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:py-24">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">
          Take Your Business To Next Level
        </h2>
        <p className="mx-auto mb-10 mt-6 max-w-lg text-center text-lg text-neutral-500">
          Expertly designed for an enchanting user experience you&rsquo;ll
          adore. Seamless, intuitive, and captivating. Welcome to a new era of{' '}
          <span className="border-0 border-b-4 border-black text-neutral-500">
            Digital Delight.
          </span>
        </p>
        <div>
          <div className="m-auto flex max-w-max flex-wrap items-center justify-center gap-3 rounded-full bg-s-100 p-1">
            <Button
              rounded="rounded-full"
              className="relative overflow-hidden !bg-transparent px-10 py-2 !shadow-none"
              aria-checked={activeTab === 'marketing'}
              onClick={() => setActiveTab('marketing')}
            >
              <div
                className="absolute inset-0 translate-x-40 bg-s-100 transition-all aria-checked:translate-x-0 aria-checked:bg-white"
                aria-checked={activeTab === 'marketing'}
              ></div>
              <p
                className="relative z-10 font-normal text-neutral-500 aria-checked:text-black"
                aria-checked={activeTab === 'marketing'}
              >
                Marketing
              </p>
            </Button>
            <Button
              rounded="rounded-full"
              className="relative overflow-hidden !bg-transparent px-10 py-2 !shadow-none"
              aria-checked={activeTab === 'design-and-development'}
              onClick={() => setActiveTab('design-and-development')}
            >
              <div
                className="absolute inset-0 -translate-x-40 bg-s-100 transition-all aria-checked:translate-x-0 aria-checked:bg-white"
                aria-checked={activeTab === 'design-and-development'}
              ></div>
              <p
                className="relative z-10 font-normal text-neutral-500 aria-checked:text-black"
                aria-checked={activeTab === 'design-and-development'}
              >
                Design & Development
              </p>
            </Button>
          </div>
          <div className="m-auto flex w-full max-w-6xl gap-10 overflow-hidden pb-20 pt-12 max-md:flex-col max-md:items-center sm:px-5 md:gap-7 lg:gap-10">
            {features[activeTab].map((item, index) => {
              return (
                <div
                  className="w-full max-w-sm overflow-hidden rounded-xl shadow-card aria-[activedescendant=design-and-development]:animate-side-in-right aria-[activedescendant=marketing]:animate-side-in-left"
                  aria-activedescendant={activeTab}
                  key={index}
                >
                  <div
                    className="w-full space-y-3"
                    style={{
                      padding: '7% 10% 13% 10%',
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={60}
                    />
                    <h3 className="text-xl">{item.name}</h3>
                    <p className="text-lg text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-center text-neutral-500">
          Our nearly 30 committed{' '}
          <span className="text-blue">staff members</span> are ready to help.
        </p>
      </div>
    </section>
  );
};

export default Features;
