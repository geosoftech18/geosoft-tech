'use client';
import { goal } from '@/data';
import React from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';

const Goal = () => {
  return (
    <section className="h-full w-full">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:py-24">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <p className="w-max rounded-full bg-s-100 px-4 py-2 text-center text-xs font-medium text-neutral-600">
            YOUR DREAM. OUR MISSION.
          </p>
          <h2 className="text-center text-3xl font-semibold md:text-4xl">
            We Believe In <br />
            <mark className="group relative bg-transparent">
              <span className="relative z-10">Hard Work And Dedication</span>
              <span className="absolute bottom-0 left-0 h-3 w-full bg-blue-200 transition-all duration-300 group-hover:h-full" />
            </mark>
            <br />
            to build.
          </h2>
          <p className="w-full max-w-md text-center text-lg text-neutral-500">
            Our team of experts put their hard work in timely delivery of
            assigned task and are fully dedicated towards their way of working.
          </p>
        </div>
        <div className="mt-20 flex gap-10 max-md:flex-col max-md:items-center">
          {goal.map((item, index) => (
            <div
              className="w-full max-w-xs space-y-4 overflow-hidden rounded-3xl p-3 transition-all duration-500 hover:scale-110 hover:bg-green-100"
              key={index}
            >
              <AiFillInfoCircle className="text-2xl text-neutral-700" />
              <h3 className="text-2xl font-semibold text-neutral-800">
                {item.heading}
              </h3>
              <p className="text-neutral-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goal;
