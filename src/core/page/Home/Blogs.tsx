'use client';
import React from 'react';
import { blogs } from '@/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import moment from 'moment';

const Blogs = () => {
  return (
    <div
      className="h-full w-full border-0 border-b border-solid border-neutral-100"
      id="case-studies"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14">
        <div className="flex w-full flex-wrap items-center justify-between gap-6 pb-14">
          <div className="w-full max-w-lg space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">Latest posts</h2>
          </div>
          <div className="w-full max-w-md">
            <p className="text-lg text-neutral-500">
              Our design services starts and ends with a best-in-class
              experience strategy that builds brands.
            </p>
          </div>
        </div>
        <div>
          <Swiper
            centeredSlides={false}
            centerInsufficientSlides={true}
            grabCursor={true}
            slidesPerView={1}
            breakpoints={{
              500: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 70,
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            spaceBetween={30}
            loop={true}
            className="!overflow-visible p-5"
            modules={[Navigation]}
          >
            {blogs.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  //   href={`/blogs/${item.slug}`}
                  key={index}
                  className="w-full overflow-hidden rounded-md shadow-card"
                >
                  <Image
                    src={item.thumbnailImage.url}
                    width={400}
                    height={199}
                    alt={item.thumbnailImage.url}
                    className="h-52 w-full object-cover"
                  />
                  <div className="space-y-2 px-8 py-6">
                    <div className="flex items-center gap-3">
                      <p className="text-xs font-medium text-black">
                        {item.writer.role}
                      </p>
                      <p className="text-neutral-500">&#x2022;</p>
                      <p className="text-xs font-medium text-neutral-500">
                        {moment(item.publishedDate).format('MMMM DD, YYYY')}
                      </p>
                    </div>
                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
