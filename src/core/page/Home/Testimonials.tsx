'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { BadgeCheck, CheckCircle } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import { testimonials } from '@/data';
import { Navigation } from 'swiper/modules';

// Social media icons array
const socialIcons = [
  { icon: FaFacebook, color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: FaInstagram, color: 'text-pink-600', bg: 'bg-pink-50' },
  { icon: FaLinkedinIn, color: 'text-blue-700', bg: 'bg-blue-50' },
  { icon: FaTwitter, color: 'text-sky-500', bg: 'bg-sky-50' },
 
  
];

// Function to get a social icon for each testimonial (based on index for consistency)
const getSocialIcon = (index: number) => {
  return socialIcons[index % socialIcons.length];
};

const Testimonials = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-neutral-50">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:py-24">
        <div className="flex flex-wrap items-center justify-start gap-5 pb-20">
          <div className="w-full max-w-lg">
            <h2 className="text-3xl font-medium text-black md:text-4xl lg:text-5xl">
              Our clients praise us for great results.
            </h2>
          </div>
          <div className="flex items-center gap-4">
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
          {testimonials.map((item, index) => {
            const socialIconData = getSocialIcon(index);
            const SocialIcon = socialIconData.icon;
            
            return (
              <SwiperSlide key={index}>
                <div className="h-full w-full overflow-hidden rounded-sm border-2 border-solid border-neutral-100">
                  <div className="flex items-center justify-between gap-5 border-0 border-b-2 border-solid border-neutral-100 px-6 py-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <img
                        src={item.url}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="font-medium uppercase text-black">
                        {item.name}
                      </h3>
                      <p className="text-xs font-medium uppercase text-neutral-400">
                        {item.role}
                      </p>
                    </div>
                    <div className="relative flex items-center justify-center">
                      {/* Verified Badge with Social Icon */}
                      <div className="relative flex items-center justify-center">
                        {/* Social Icon Background */}
                        <div className={`h-12 w-12 rounded-full ${socialIconData.bg} flex items-center justify-center border-2 border-white shadow-md`}>
                          <SocialIcon className={`h-6 w-6 ${socialIconData.color}`} />
                        </div>
                        {/* Verified Badge Overlay */}
                        <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-white shadow-sm">
                          <BadgeCheck className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">{item.testimonial}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
