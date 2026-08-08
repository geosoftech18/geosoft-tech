import React from 'react';
import { FaInstagram, FaMapPin, FaPhone, FaRegEnvelope,FaLinkedinIn,FaFacebook} from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="element-main h-full w-full">
      <div className="element-shape element-top overflow-hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={1440}
          height={461}
          fill="none"
          className="lqd-shape"
          preserveAspectRatio="none"
          viewBox="0 0 1440 461"
        >
          <path
            d="m0 131.906 34.4-20.017c34.4-19.9 103.2-59.936 171.68-82.979 68.64-23.043 136.8-29.328 205.44-4.306 68.48 25.022 137.28 81.35 205.76 80.768 68.64-.582 136.8-58.074 205.44-84.608C891.2-5.771 960-1.581 1028.48 4.704c68.64 6.168 136.8 14.315 205.44 22.811 68.48 8.612 137.28 17.457 171.68 22l34.4 4.422v396.851H0z"
            className="elementor-shape-fill"
          />
          <path
            d="m0 154.75 34.4-12.549c34.4-12.671 103.2-37.768 171.68-43.129 68.64-5.239 136.8 9.381 205.44 23.027 68.48 13.523 137.28 26.194 205.76 20.712 68.64-5.482 136.8-29.118 205.44-29.118 68.48 0 137.28 23.636 205.76 38.987 68.64 15.473 136.8 22.783 205.44 32.286 68.48 9.625 137.28 21.321 171.68 27.291l34.4 5.848v233.92H0V154.75Z"
            className="elementor-shape-fill"
          />
          <path
            d="m0 340.22 34.4-6.3c34.4-6.4 103.2-19 171.68-21.7 68.64-2.7 136.8 4.7 205.44 7.5 68.48 2.8 137.28 1.2 205.76-.8 68.64-2 136.8-4.4 205.44-2.9 68.48 1.5 137.28 6.9 205.76-6.6 68.64-13.5 136.8-45.9 205.44-58.4 68.48-12.5 137.28-5.1 171.68-1.5l34.4 3.7v200H0v-113Z"
            className="elementor-shape-fill"
          />
          <path
            d="m1440 337.719-34.4 2.5c-34.4 2.5-103.2 7.5-171.68 10.2-68.64 2.6-136.8 3-205.44 1.8-68.48-1.2-137.28-3.8-205.76 4.8-68.64 8.7-136.8 28.7-205.44 38.9-68.48 10.1-137.28 10.5-205.76 0-68.64-10.5-136.8-31.9-205.44-36.5-68.48-4.7-137.28 7.3-171.68 13.3l-34.4 6v82h1440v-123Z"
            className="elementor-shape-fill"
          />
        </svg>
      </div>
      <section className=" h-full w-full">
        <div className="mx-auto w-full max-w-7xl px-5 ">
          <div className="mt-16 flex w-full flex-col items-start md:flex-row md:items-center ">
            <div className="flex w-full justify-center p-5 pl-0 pb-2 text-start md:w-1/2 md:justify-start md:text-center">
              <Image
                src={'/logo/logo.png'}
                alt="GEO Softech logo"
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
              />
            </div>
            {/* <div className="flex flex-wrap justify-center space-x-4 p-5 md:w-1/2 md:justify-start">
              <Link href="/">
                <p>Home</p>
              </Link>
              <Link href="/about">
                <p>About</p>
              </Link>
              <Link href="/services">
                <p>Services</p>
              </Link>
              <Link href="/contact-us">
                <p>Contact Us</p>
              </Link>
            </div> */}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold  mb-3 sm:mb-4">GEO Softech</h2>
            
            <p className=" mb-4 sm:mb-6 text-xs sm:text-sm">
              Mumbai's leading website designing company, creating digital experiences that drive business growth since
              2018.
            </p>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <FaMapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span>+91 77760 85112</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegEnvelope className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span>info@geosoftech.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Our Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-background/80">
              <li>
                <a href="/services/webdevelopment" className="hover:text-primary transition-colors">
                  Website Design
                </a>
              </li>
              <li>
                <a href="/services/socialmedia" className="hover:text-primary transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  E-commerce Development
                </a>
              </li>
              <li>
                <a href="/services/seo" className="hover:text-primary transition-colors">
                  SEO Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Website Maintenance
                </a>
              </li>
             
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-background/80">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li> */}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Cities We Serve</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-background/80">
            <li>
                <a href="/services/webdevelopment/mumbai-development" className="hover:text-primary transition-colors">
                  Website Designing in Mumbai
                </a>
              </li>
              <li>
                <a href="/services/webdevelopment/pune-development" className="hover:text-primary transition-colors">
                  Website Designing in Pune
                </a>
              </li>
              <li>
                <a href="/services/webdevelopment/development-in-nagpur" className="hover:text-primary transition-colors">
                  Website Designing in Nagpur
                </a>
              </li>
              <li>
                <a href="/services/webdevelopment/jaipur-development" className="hover:text-primary transition-colors">
                  Web Development in Jaipur
                </a>
              </li>
              <li>
                <a href="/services/webdevelopment/surat-development" className="hover:text-primary transition-colors">
                  Website Designing in Surat
                </a>
              </li>
             
            </ul>
          </div>
        </div>

          <hr className="my-5" />
          <div className="flex w-full flex-col  items-start md:flex-row md:items-center ">
            <div className="w-full p-5 text-center md:ml-5 md:w-2/3  md:text-start">
              <p className="text-sm  text-neutral-500">
                GEO Softech is dedicated to catalyzing digital success.
                Established in 2018, we specialize in empowering businesses with
                bespoke solutions, driving expansion, and enhancing online
                presence. Our dynamic and committed team fosters innovation,
                consistently delivering excellence and surpassing client
                expectations. Collaborate with us to flourish in the digital
                landscape.
              </p>
            </div>
            <div className="flex w-full justify-center space-x-8 p-5 md:w-1/4" role="list" aria-label="Social media links">
              <a
                href="https://www.instagram.com/geosoftech/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
                role="listitem"
              >
                <span className="sr-only">GEO Softech on Instagram</span>
                <FaInstagram className="text-3xl" aria-hidden="true" focusable="false" />
              </a>
              <a
                href="https://www.facebook.com/geosoftechsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
                role="listitem"
              >
                <span className="sr-only">GEO Softech on Facebook</span>
                <FaFacebook className="text-3xl" aria-hidden="true" focusable="false" />
              </a>
              <a
                href="https://twitter.com/geosoftech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
                role="listitem"
              >
                <span className="sr-only">GEO Softech on Twitter</span>
                <FaTwitter className="text-3xl" aria-hidden="true" focusable="false" />
              </a>
              <a
                href="https://www.linkedin.com/company/14536380"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
                role="listitem"
              >
                <span className="sr-only">GEO Softech on LinkedIn</span>
                <FaLinkedinIn className="text-3xl" aria-hidden="true" focusable="false" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
