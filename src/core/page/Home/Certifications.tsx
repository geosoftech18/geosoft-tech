'use client';
import React from 'react';
import Image from 'next/image';

interface CertificationItem {
  name: string;
  image: string;
  description?: string;
}

const certifications: CertificationItem[] = [
  {
    name: 'Tredmark',
    image: '/home/certifications/tredmark.png', // Place your tredmark image in public/home/certifications/
    description: 'Trademark Certification',
  },
  {
    name: 'MSME',
    image: '/home/certifications/msme.png', // Place your MSME image in public/home/certifications/
    description: 'MSME Registered',
  },
  {
    name: 'DPIIT',
    image: '/home/certifications/dpiit.png', // Place your third image in public/home/certifications/
    description: 'Quality Certified',
  },
];

const Certifications = () => {
  return (
    <section className="h-full w-full border-0 border-b border-solid border-neutral-200">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:py-24">
        <div className="mb-12 flex flex-col items-center justify-center gap-4">
          <p className="w-max rounded-full bg-gradient-to-r from-blue to-green px-4 py-2 text-center text-xs font-medium text-white">
            CERTIFICATIONS & RECOGNITIONS
          </p>
          <h2 className="text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
            Trusted & Certified
          </h2>
          <p className="w-full max-w-lg text-center text-lg text-neutral-500">
            Our certifications and recognitions reflect our commitment to
            excellence and quality standards.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-s-100 p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-100"
            >
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue/0 via-blue/0 to-t/0 opacity-0 transition-all duration-500 group-hover:opacity-10" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
                {/* Image container with modern styling */}
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-white p-6 shadow-inner transition-all duration-500 ">
                  <div className="flex h-full w-full items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={150}
                      className="object-contain"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </div>
                </div>
                
                {/* Text content */}
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-semibold text-black transition-colors duration-300 group-hover:text-t">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue to-green transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

