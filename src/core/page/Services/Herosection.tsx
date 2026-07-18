'use client';
import Button from '@/core/components/Button';
import ContactForm from '@/core/components/ContactForm';
import Dialog from '@/core/components/Dialog';
import FlipButton from '@/core/components/FlipButton';
import { Breadcrumb } from '@/core/components/Breadcrumb';
import Image from 'next/image';
import React, { useState } from 'react';
import { RiArrowRightSFill, RiArrowRightSLine } from 'react-icons/ri';
import { TypeAnimation } from 'react-type-animation';

const Herosection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <section className="h-full w-full" id="hero">
      <div className="mx-auto w-full max-w-7xl pt-16">
        <div className="px-8 pt-8">
          <Breadcrumb
            items={[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
            ]}
          />
        </div>
        <div className="flex w-full items-center gap-10 px-8 py-12 max-md:flex-col md:gap-20 md:py-20">
          <div className="w-full max-w-md space-y-6">
            <p className="w-max rounded-full text-xs font-medium text-neutral-800">
              CREATIVE SOLUTIONS FOR EVERYONE
            </p>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                'Our Services Social Media​',
                1000,
                'Our Services ​SEO',
                1000,
                'Our Services PPC',
                1000,
                'Our Services Web Design',
                1000,
                'Our Services Content',
                500,
              ]}
              speed={50}
              wrapper="h1"
              repeat={Infinity}
              className="text-3xl font-bold leading-10 tracking-tighter text-neutral-900 md:text-4xl lg:text-[44px]"
            />
            <p className="text-base text-neutral-600">
              Introducing our comprehensive Digital Consulting services! Our
              team of experts is here to cater to all your online marketing
              needs
            </p>
            <div className="flex items-center gap-9">
              <Dialog
                onChange={handleOpenModal}
                open={isOpen}
                trigger={
                  <FlipButton
                    default_text="Build yours"
                    hover_text="Lets connect"
                    type="dark"
                    rounded="rounded-full"
                    icon={<RiArrowRightSLine />}
                  />
                }
              >
                <ContactForm handleShowModel={handleOpenModal} />
              </Dialog>
              <Button
                variant="dark"
                rounded="rounded-full"
                className="!p-4"
                type="button"
                aria-label="Continue to services overview"
              >
                <RiArrowRightSFill className="text-xl" aria-hidden="true" focusable="false" />
                <span className="sr-only">Continue to services overview</span>
              </Button>
            </div>
          </div>
          <div>
            <Image
              className="animate-blob"
              src="/services/hero.webp"
              width={800}
              height={800}
              alt="Our Services"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
