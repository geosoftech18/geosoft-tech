'use client';
import Counter from '@/core/components/Counter';
import React from 'react';

const Counters = () => {
  const counters = [
    {
      name: 'AVARAGE GROWTH',
      value: '26x',
    },
    {
      name: 'CUSTOMER SATISFACTION',
      value: '88%',
    },
    {
      name: 'DAILY DATA INPUT',
      value: '302M',
    },
    {
      name: 'HUB IT EMPLOYEES',
      value: '287+',
    },
  ];
  return (
    <div className="h-full w-full bg-p-4">
      <div className="m-auto flex w-full max-w-7xl flex-col items-center justify-center space-y-4 px-8 py-14">
        <p className="text-xs font-semibold">GLOBAL CLIENTS AROUND THE WORLD</p>
        <div className="grid w-full grid-cols-1 place-items-center gap-11 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {counters.map((item, index) => (
            <div className="h-full space-y-3 text-center" key={index}>
              <Counter
                className="whitespace-nowrap text-6xl font-bold"
                value={item.value}
              />
              <h3 className="text-xs font-semibold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counters;
