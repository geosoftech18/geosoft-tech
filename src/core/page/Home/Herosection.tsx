'use client';

import FlipButton from '@/core/components/FlipButton';
import React, { useState, lazy, Suspense } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { RiArrowRightSLine, RiArrowRightSFill } from 'react-icons/ri';
import Button from '@/core/components/Button';
import Dialog from '@/core/components/Dialog';
import ContactForm from '@/core/components/ContactForm';
import { Breadcrumb } from '@/core/components/Breadcrumb';
import Image from 'next/image';

const ReactPlayer = lazy(() => import('react-player/lazy'));

const Herosection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const handleOpenModal = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <div className="h-full w-full" id="hero">
      <div className="relative h-screen w-full overflow-hidden pt-16">
        <Image
          src="/home/hero.jpg"
          alt="GEO Softech digital marketing and web development"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
          quality={75}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-t to-s opacity-70" />
        <div className="absolute left-4 top-20 z-30 sm:left-8 md:top-24 lg:left-12">
          <Breadcrumb variant="light" items={[{ name: 'Home', href: '/' }]} />
        </div>
        <div className="relative z-20 m-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-5 pt-4 max-md:px-5">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "Elevate Your Business's Potential with Our Services Social Media​",
              1000,
              "Elevate Your Business's Potential with Our Services ​SEO",
              1000,
              "Elevate Your Business's Potential with Our Services PPC",
              1000,
              "Elevate Your Business's Potential with Our Services Web Design",
              1000,
              "Elevate Your Business's Potential with Our Services Content",
              500,
            ]}
            speed={50}
            wrapper="h1"
            repeat={Infinity}
            className="text-center text-3xl font-bold leading-10 tracking-tighter text-neutral-50 md:text-4xl lg:text-[44px]"
          />
          <p className="text-center text-lg text-neutral-300 md:text-xl">
            Our design services starts and ends with a best-in-class experience
            strategy that builds brands.
          </p>
          <div className="flex items-center gap-9">
            <Dialog
              onChange={handleOpenModal}
              open={isOpen}
              trigger={
                <FlipButton
                  default_text="Build yours"
                  hover_text="Lets connect"
                  rounded="rounded-full"
                  icon={<RiArrowRightSLine />}
                  type="secondary"
                />
              }
            >
              <ContactForm handleShowModel={handleOpenModal} />
            </Dialog>
            <Dialog
              open={videoOpen}
              onChange={(open) => {
                setVideoOpen(open);
                if (open) setShowPlayer(true);
              }}
              trigger={
                <Button
                  variant="secondary"
                  rounded="rounded-full"
                  className="!p-4 group"
                  type="button"
                  aria-label="Watch GEO Softech introduction video"
                >
                  <RiArrowRightSFill
                    className="text-xl group-hover:text-white"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <span className="sr-only">Watch GEO Softech introduction video</span>
                </Button>
              }
            >
              <div className="w-full min-h-[200px]">
                {showPlayer && (
                  <Suspense fallback={<div className="h-[200px] w-full animate-pulse bg-neutral-200" />}>
                    <ReactPlayer
                      style={{
                        minWidth: 300,
                        height: '100%',
                      }}
                      className="!w-full max-w-md sm:!w-[500px] md:!w-[600px] lg:!w-[700px]"
                      url="https://youtu.be/lIayeVb2UXk?si=FGwosuD_VtnRCjQ9"
                      config={{
                        youtube: {
                          playerVars: { showinfo: 1 },
                        },
                      }}
                    />
                  </Suspense>
                )}
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
