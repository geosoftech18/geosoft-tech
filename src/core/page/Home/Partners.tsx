'use client';
import { partners } from '@/data';
import React from 'react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const Partners = () => {
  return (
    <div className="h-full w-full border-0 border-b border-solid border-neutral-200">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-6 px-5 py-14 max-md:flex-col">
        <div className="w-full sm:w-1/3">
          <h2 className="text-sm font-semibold uppercase text-black max-sm:text-center">
            TRUSTED BY GLOBAL BRANDS
          </h2>
        </div>
        <div className="w-full sm:w-2/3">
          <Swiper
            slidesPerView={2}
            freeMode={true}
            speed={1000}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1124: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, FreeMode]}
            className="mySwiper w-full !pb-10 !ease-linear"
          >
            {partners.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.image} alt={item.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
