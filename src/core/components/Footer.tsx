import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-p-3">
      <div className="m-auto max-w-7xl space-y-20 px-10 py-20">
        <div className="flex flex-wrap justify-between gap-10">
          <Link href="/">
            <Image
              src={'/logo/logo.webp'}
              alt="logo"
              width="200"
              height="200"
            />
          </Link>
          <address className="mb-5 not-italic">
            <div className="flex flex-col space-y-2 text-left">
              <h3 className="text-left text-xl text-p-4">Let&lsquo;s Chat</h3>
              <ul className="space-y-2 text-sm md:space-y-3 md:text-start">
                <li className="text-white">
                  <Link href={'mailto:contact@geosoftech.com'}>
                    Email: contact@geosoftech.com
                  </Link>
                </li>
                <li className="text-white">
                  <Link href={'tel:+919408928277'}>Phone: +919408928277</Link>
                </li>
              </ul>
            </div>
          </address>
        </div>

        <div className="flex flex-wrap justify-between">
          <ul className="mt-5 space-y-3">
            <h3 className="text-xl text-p-4">Company</h3>
            <li className="text-white">
              <Link href={'/about'}>About</Link>
            </li>
            <li className="text-white">
              <Link href={'/services'}>Services</Link>
            </li>
            <li className="text-white">
              <Link href={'/blogs'}>Blogs</Link>
            </li>
            <li className="text-white">
              <Link href={'/contact-us'}>Contact Us</Link>
            </li>
          </ul>

          <ul className="mt-5 space-y-3">
            <h3 className="text-xl text-p-4">Services</h3>
            <h4 className="text-white">Logistics & Transportation</h4>
            <li className="text-white">
              <Link href={'/full-truck-load'}>Full Truck Load</Link>
            </li>
            <li className="text-white">
              <Link href={'/less-than-truck-load'}>Less Than Truck Load</Link>
            </li>
            <li className="text-white">
              <Link href={'/odc-and-project-cargo'}>ODC & Project Cargo</Link>
            </li>
            <li className="text-white">
              <Link href={'/chemical-and-acid-tanker-transportation'}>
                Chemical & Acid Tanker Transportation
              </Link>
            </li>
          </ul>

          <ul className="mt-5 space-y-3">
            <h3 className="text-xl text-p-4">Services</h3>
            <h4 className="text-white">Chemical Trade Business</h4>
            <li className="text-white">
              <Link href={'/products'}>Product Portfolio</Link>
            </li>
          </ul>
          <ul className="mt-5 space-y-3">
            <h3 className="text-xl text-p-4">Legal</h3>
            <li className="text-white">
              <Link href={'/privacy-policy'}>Privacy Policy</Link>
            </li>
            <li className="text-white">
              <Link href={'/terms-and-conditions'}>Terms and Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-black p-3">
        <p className="text-center text-xs text-white">
          Developed & Maintained with ♥ © Copyright 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
