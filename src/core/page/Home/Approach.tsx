'use client';
import Accordion from '@/core/components/Accordion';
import { approach, approachProcess } from '@/data';
import Image from 'next/image';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Approach = () => {
  {
  }
  return (
    <div className="h-full w-full" id="how-it-works">
      <div className="m-auto flex w-full max-w-7xl px-8 pb-16 pt-24 max-lg:flex-col-reverse max-lg:gap-5">
        <div className="lg:mr-20 lg:w-1/2 xl:mr-40">
          <p className="mb-5 w-max rounded-full bg-gradient-to-r from-blue to-green px-3 py-1.5 text-center text-xs text-white">
            HOW IT WORKS
          </p>
          <h2 className="mb-10 text-3xl md:text-4xl lg:text-5xl">
            Our Approach
          </h2>
          <div>
            {approach.map((item) => (
              <Accordion {...item} key={item.question} />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={'/home/approach/approach.jpg'}
            alt={'HOW IT WORKS'}
            width={1000}
            height={1000}
            className="w-full rounded-xl shadow-card"
          />
        </div>
      </div>
      <div className="m-auto flex w-full max-w-7xl px-8 pb-24">
        <div className="flex h-full w-full items-center justify-between gap-5 rounded-full border border-solid border-neutral-300 p-8 max-lg:flex-col">
          {approachProcess.map((item, index) => (
            <div
              className="group flex items-center gap-6 max-lg:flex-col"
              key={index}
            >
              <div className="flex items-center gap-6">
                <p className="flex h-11 w-11 items-center justify-center rounded-full bg-s-100 text-lg font-semibold transition-all duration-700 group-hover:bg-black group-hover:text-white">
                  {index + 1}
                </p>
                <h3 className="font-semibold">{item}</h3>
              </div>
              {index + 1 !== approachProcess.length && (
                <IoIosArrowForward className="text-lg max-lg:rotate-90" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
