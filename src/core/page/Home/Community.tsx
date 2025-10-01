'use client';

import ContactForm from '@/core/components/ContactForm';
import Dialog from '@/core/components/Dialog';
import FlipButton from '@/core/components/FlipButton';
import React, { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

type Props = {};

const Community = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <div className="group relative h-full w-full bg-[url(/home/community.jpg)] bg-cover bg-no-repeat">
      <div className="absolute inset-0 z-0 w-full bg-black/30 group-hover:bg-black/50" />
      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center gap-5 px-5 py-14">
        <h2 className="text-center text-5xl font-bold text-white md:text-5xl lg:text-5xl">
          Build a stunning site today.
        </h2>
        <p className="text-center text-lg text-neutral-200">
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly.
        </p>
        <Dialog
          onChange={handleOpenModal}
          open={isOpen}
          trigger={
            <FlipButton
              default_text="Build yours"
              hover_text="Lets connect"
              type="secondary"
              rounded="rounded-full"
              icon={<RiArrowRightSLine />}
            />
          }
        >
          <ContactForm handleShowModel={handleOpenModal} />
        </Dialog>
      </div>
    </div>
  );
};

export default Community;
