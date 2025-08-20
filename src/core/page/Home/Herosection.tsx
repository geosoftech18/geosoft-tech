'use client';
import FlipButton from '@/core/components/FlipButton';
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { RiArrowRightSLine, RiArrowRightSFill } from 'react-icons/ri';
import Button from '@/core/components/Button';
import Dialog from '@/core/components/Dialog';
import ContactForm from '@/core/components/ContactForm';
import ReactPlayer from 'react-player';

const Herosection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <div className="h-full w-full" id="hero">
      <div className="h-screen w-full bg-[url(/home/hero.jpg)] bg-cover bg-center bg-no-repeat pt-16">
        <div className="absolute inset-0 z-0 h-full w-full bg-transparent bg-gradient-to-tr from-t to-s opacity-70" />
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
              trigger={
                <Button
                  variant="secondary"
                  rounded="rounded-full"
                  className="!p-4"
                >
                  <RiArrowRightSFill className="text-xl" />
                </Button>
              }
            >
              <div className="w-full">
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
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
