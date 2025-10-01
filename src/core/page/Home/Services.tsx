'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import 'swiper/css';
import 'swiper/css/navigation';
import { services } from '@/data';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useRouter } from 'next/navigation';

const Services = () => {
  const router = useRouter();
  return (
    <section className="h-full w-full" id="services">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:py-24">
        <div className="flex flex-wrap items-center justify-between gap-5 pb-20">
          <div className="w-full max-w-lg space-y-4">
            <p className="w-max rounded-full bg-gradient-to-r from-blue to-green px-3 py-1.5 text-center text-xs text-white">
              SITE BUILDER
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Complete Toolkit.
            </h2>
          </div>
          <div className="w-full max-w-sm">
            <p className="text-lg text-neutral-500">
              Our design services starts and ends with a best-in-class
              experience strategy that builds brands.
            </p>
          </div>
          <div className="flex items-center gap-4 self-end">
            <div className="swiper-button-prev-custom cursor-pointer">
              <HiArrowLeft className="text-xl" />
            </div>
            <div className="swiper-button-next-custom cursor-pointer">
              <HiArrowRight className="text-xl" />
            </div>
          </div>
        </div>
        <Swiper
          centeredSlides={false}
          centerInsufficientSlides={true}
          grabCursor={true}
          slidesPerView={1}
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          spaceBetween={20}
          loop={true}
          className="!overflow-visible p-5"
          modules={[Navigation]}
        >
          {services.map((item, index) => (
            <SwiperSlide key={index} >
              <div onClick={() => router.push(item.link)} className="group relative h-96 w-full overflow-hidden rounded-md transition-all duration-500 hover:scale-105">
                <img
                  className="h-full w-full object-cover object-center"
                  src={item.url}
                  alt={item.name}
                />
                <div className="absolute inset-0 flex h-full w-full items-end justify-center bg-service-card p-8 group-hover:bg-service-card-hover">
                  <div className="space-y-2">
                    <p className="w-36 text-xs font-medium uppercase text-neutral-300">
                      {item.subtitle}
                    </p>
                    <h3 className="text-xl text-white">{item.name}</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
