'use client';
import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface PartnerBadge {
  name: string;
  image: string;
}

const partnerBadges: PartnerBadge[] = [
  {
    name: 'Clutch',
    image: '/home/partners/1.png', // Place your Clutch badge image in public/home/partner-badges/
  },
  {
    name: 'GoodFirms',
    image: '/home/partners/2.png', // Place your GoodFirms badge image in public/home/partner-badges/
  },
  {
    name: 'Google Partner',
    image: '/home/partners/3.png', // Place your Google Partner badge image in public/home/partner-badges/
  },
  {
    name: 'IT Firms',
    image: '/home/partners/4.png', // Place your IT Firms badge image in public/home/partner-badges/
  },

];

const PartnerBadges = () => {
  return (
    <section className="h-full w-full border-0 border-b border-solid border-neutral-200">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:py-24">
        {/* Partner Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
          {partnerBadges.map((badge, index) => (
            <div
              key={index}
              className="group relative flex h-32 w-full items-center justify-center overflow-hidden rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:h-36 sm:w-auto sm:min-w-[140px] md:h-40 md:min-w-[160px] lg:h-44 lg:min-w-[180px]"
            >
              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  src={badge.image}
                  alt={badge.name}
                  width={180}
                  height={120}
                  className="object-contain"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Rating Section */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => {
              const rating = 4.7;
              const fullStars = Math.floor(rating);
              const hasPartialStar = rating % 1 !== 0 && i === fullStars;
              const partialFill = hasPartialStar ? (rating % 1) * 100 : 0;

              return (
                <div key={i} className="relative inline-block">
                  <Star
                    className={`h-6 w-6 ${
                      i < fullStars
                        ? 'fill-yellow-400 text-yellow-400'
                        : i === fullStars && hasPartialStar
                        ? 'text-yellow-400'
                        : 'fill-neutral-200 text-neutral-200'
                    }`}
                  />
                  {hasPartialStar && (
                    <div
                      className="absolute left-0 top-0 overflow-hidden"
                      style={{ width: `${partialFill}%` }}
                    >
                      <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-center text-base text-neutral-600 md:text-lg">
            Rated <span className="font-semibold text-black">4.7 / 5.0</span> by{' '}
            <span className="font-semibold text-black">350+ clients</span> for Web
            Development, mobile development and web designing services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerBadges;




