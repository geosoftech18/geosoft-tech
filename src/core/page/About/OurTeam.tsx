import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { team } from '@/data/about';

const OurTeam = () => {
  return (
    <section className="h-full w-full">
      <div className="m-auto w-full max-w-7xl px-6 py-10 md:px-10 md:py-20">
        <h2 className="text-tertiary mb-8 text-center text-2xl md:mb-12 md:text-3xl lg:text-4xl">
          Meet our Team
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {team.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center space-y-2 text-center"
                key={index}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="aspect-square rounded-full object-cover object-top"
                />
                <h3 className="text-xl">{item.name}</h3>
                <p>{item.role}</p>
                {/* <div className="flex gap-2">
                  {item.socialHandles &&
                    item.socialHandles.map((item, index) => {
                      let icon;
                      switch (item?.name) {
                        case 'linkedIn':
                          icon = (
                            <GrLinkedinOption className="rounded-full bg-black p-2 text-3xl text-white" />
                          );
                          break;
                        case 'instagram':
                          icon = (
                            <AiOutlineInstagram className="rounded-full bg-black p-2 text-3xl text-white" />
                          );
                          break;
                        case 'facebook':
                          icon = (
                            <BiLogoFacebook className="rounded-full bg-black p-2 text-3xl text-white" />
                          );
                      }
                      return (
                        <Link href={item.url} target="_blank" key={index}>
                          {icon}
                        </Link>
                      );
                    })}
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default OurTeam;
