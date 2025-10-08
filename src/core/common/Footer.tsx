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
          >
            <animate
              fill="freeze"
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0 131.906L34.4 111.889C68.8 91.989 137.6 51.953 206.08 28.91C274.72 5.867 342.88 -0.418001 411.52 24.604C480 49.626 548.8 105.954 617.28 105.372C685.92 104.79 754.08 47.298 822.72 20.764C891.2 -5.771 960 -1.581 1028.48 4.704C1097.12 10.872 1165.28 19.019 1233.92 27.515C1302.4 36.127 1371.2 44.972 1405.6 49.515L1440 53.937V450.788H0L0 131.906Z; M0 122.906L36.5 109C71.5 96.372 102.52 67.98 171 44.937C239.64 21.894 354.36 51.478 423 76.5C491.48 101.522 546.52 19.097 615 18.515C683.64 17.933 799.36 58.534 868 32C936.48 5.46499 1039.52 54.715 1108 61C1176.64 67.168 1190.36 -6.996 1259 1.5C1327.48 10.112 1371.2 35.972 1405.6 40.515L1440 44.937V441.788H0L0 122.906Z; M0 131.906L34.4 111.889C68.8 91.989 137.6 51.953 206.08 28.91C274.72 5.867 342.88 -0.418001 411.52 24.604C480 49.626 548.8 105.954 617.28 105.372C685.92 104.79 754.08 47.298 822.72 20.764C891.2 -5.771 960 -1.581 1028.48 4.704C1097.12 10.872 1165.28 19.019 1233.92 27.515C1302.4 36.127 1371.2 44.972 1405.6 49.515L1440 53.937V450.788H0L0 131.906Z"
            />
          </path>
          <path
            d="m0 154.75 34.4-12.549c34.4-12.671 103.2-37.768 171.68-43.129 68.64-5.239 136.8 9.381 205.44 23.027 68.48 13.523 137.28 26.194 205.76 20.712 68.64-5.482 136.8-29.118 205.44-29.118 68.48 0 137.28 23.636 205.76 38.987 68.64 15.473 136.8 22.783 205.44 32.286 68.48 9.625 137.28 21.321 171.68 27.291l34.4 5.848v233.92H0V154.75Z"
            className="elementor-shape-fill"
          >
            <animate
              fill="freeze"
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="M0 154.75C0 154.75 12.8 142.902 34.4 142.201C56 141.5 140.02 160.111 208.5 154.75C277.14 149.511 334.36 112.57 403 126.216C471.48 139.739 552.52 190.448 621 184.966C689.64 179.484 745.36 116 814 116C882.48 116 950.52 161.149 1019 176.5C1087.64 191.973 1154.36 123.997 1223 133.5C1291.48 143.125 1371.2 206.287 1405.6 212.257L1440 218.105V452.025H0L0 154.75Z; M0 154.75C0 154.75 33.4 177.201 55 176.5C76.6 175.799 137.52 110.361 206 105C274.64 99.761 332.86 141.104 401.5 154.75C469.98 168.273 527.52 206.982 596 201.5C664.64 196.018 747.86 75 816.5 75C884.98 75 956.52 118.149 1025 133.5C1093.64 148.973 1163.36 87.497 1232 97C1300.48 106.625 1371.2 206.287 1405.6 212.257L1440 218.105V452.025H0L0 154.75Z; M0 154.75C0 154.75 12.8 142.902 34.4 142.201C56 141.5 140.02 160.111 208.5 154.75C277.14 149.511 334.36 112.57 403 126.216C471.48 139.739 552.52 190.448 621 184.966C689.64 179.484 745.36 116 814 116C882.48 116 950.52 161.149 1019 176.5C1087.64 191.973 1154.36 123.997 1223 133.5C1291.48 143.125 1371.2 206.287 1405.6 212.257L1440 218.105V452.025H0L0 154.75Z"
            />
          </path>
          <path
            d="m0 340.22 34.4-6.3c34.4-6.4 103.2-19 171.68-21.7 68.64-2.7 136.8 4.7 205.44 7.5 68.48 2.8 137.28 1.2 205.76-.8 68.64-2 136.8-4.4 205.44-2.9 68.48 1.5 137.28 6.9 205.76-6.6 68.64-13.5 136.8-45.9 205.44-58.4 68.48-12.5 137.28-5.1 171.68-1.5l34.4 3.7v200H0v-113Z"
            className="elementor-shape-fill"
          >
            <animate
              fill="freeze"
              attributeName="d"
              dur="6.5s"
              repeatCount="indefinite"
              values="M0 340.22L34.4 333.92C68.8 327.52 139.02 281.2 207.5 278.5C276.14 275.8 351.86 331.12 420.5 333.92C488.98 336.72 554.52 289 623 287C691.64 285 756.86 332.42 825.5 333.92C893.98 335.42 960 322.92 1028.48 309.42C1097.12 295.92 1163.36 236 1232 223.5C1300.48 211 1371.2 245.92 1405.6 249.52L1440 253.22V453.22H0L0 340.22Z; M0 340.22L37.5 323C71.9 316.6 137.52 336.62 206 333.92C274.64 331.22 339.86 272.2 408.5 275C476.98 277.8 551.02 304 619.5 302C688.14 300 759.36 266.5 828 268C896.48 269.5 962.02 336.5 1030.5 323C1099.14 309.5 1156.36 232.5 1225 220C1293.48 207.5 1364.1 249.62 1398.5 253.22L1440 253.22V453.22H0L0 340.22Z; M0 340.22L34.4 333.92C68.8 327.52 139.02 281.2 207.5 278.5C276.14 275.8 351.86 331.12 420.5 333.92C488.98 336.72 554.52 289 623 287C691.64 285 756.86 332.42 825.5 333.92C893.98 335.42 960 322.92 1028.48 309.42C1097.12 295.92 1163.36 236 1232 223.5C1300.48 211 1371.2 245.92 1405.6 249.52L1440 253.22V453.22H0L0 340.22Z"
            />
          </path>
          <path
            d="m1440 337.719-34.4 2.5c-34.4 2.5-103.2 7.5-171.68 10.2-68.64 2.6-136.8 3-205.44 1.8-68.48-1.2-137.28-3.8-205.76 4.8-68.64 8.7-136.8 28.7-205.44 38.9-68.48 10.1-137.28 10.5-205.76 0-68.64-10.5-136.8-31.9-205.44-36.5-68.48-4.7-137.28 7.3-171.68 13.3l-34.4 6v82h1440v-123Z"
            className="elementor-shape-fill"
          >
            <animate
              fill="freeze"
              attributeName="d"
              dur="5.5s"
              repeatCount="indefinite"
              values="M1440 337.719L1405.6 340.219C1371.2 342.719 1303.98 362.8 1235.5 365.5C1166.86 368.1 1090.14 324.2 1021.5 323C953.02 321.8 889.48 383.4 821 392C752.36 400.7 678.64 368.519 610 378.719C541.52 388.819 473.48 414.5 405 404C336.36 393.5 273.64 342.319 205 337.719C136.52 333.019 68.8 366.719 34.4 372.719L0 378.719V460.719H1440V337.719Z; M1440 337.719L1405.6 340.219C1371.2 342.719 1295.98 326.3 1227.5 329C1158.86 331.6 1081.64 391.2 1013 390C944.52 388.8 874.48 364.119 806 372.719C737.36 381.419 675.14 296.3 606.5 306.5C538.02 316.6 471.48 383.219 403 372.719C334.36 362.219 272.64 320.6 204 316C135.52 311.3 68.8 366.719 34.4 372.719L0 378.719V460.719H1440V337.719Z; M1440 337.719L1405.6 340.219C1371.2 342.719 1303.98 362.8 1235.5 365.5C1166.86 368.1 1090.14 324.2 1021.5 323C953.02 321.8 889.48 383.4 821 392C752.36 400.7 678.64 368.519 610 378.719C541.52 388.819 473.48 414.5 405 404C336.36 393.5 273.64 342.319 205 337.719C136.52 333.019 68.8 366.719 34.4 372.719L0 378.719V460.719H1440V337.719Z"
            />
          </path>
        </svg>
      </div>
      <section className=" h-full w-full">
        <div className="mx-auto w-full max-w-7xl px-5 ">
          <div className="mt-16 flex w-full flex-col items-start md:flex-row md:items-center ">
            <div className="flex w-full justify-center p-5 pl-0 pb-0 text-start md:w-1/2 md:justify-start md:text-center">
              <Image
                src={'/logo/logo.png'}
                alt="logo"
                width={200}
                height={200}
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
            <h3 className="text-xl sm:text-2xl font-bold  mb-3 sm:mb-4">GEO Softech</h3>
            
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
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Our Services</h4>
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
                <a href="#" className="hover:text-primary transition-colors">
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
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
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
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Cities We Serve</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-background/80">
            <li>
                <a href="/services/webdevelopment/mumbai-development" className="hover:text-primary transition-colors">
                  Mumbai
                </a>
              </li>
              <li>
                <a href="/services/webdevelopment/pune-development" className="hover:text-primary transition-colors">
                  Pune
                </a>
              </li>
              <li>
                <a href="/services/webdevelopment/development-in-nagpur" className="hover:text-primary transition-colors">
                  Nagpur
                </a>
              </li>
              <li>
                <a href="/services/webdevelopment/jaipur-development" className="hover:text-primary transition-colors">
                  Jaipur
                </a>
              </li>
              <li>
                <a href="/services/webdevelopment/surat-development" className="hover:text-primary transition-colors">
                  Surat
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
            <div className="flex  w-full  justify-center space-x-8 p-5 md:w-1/4">
              <a href="https://www.instagram.com/geosoftech/?hl=en"><FaInstagram className="text-3xl"  /></a>
              <a href="https://www.facebook.com/geosoftechsolutions/"><FaFacebook className="text-3xl" /></a>
                    <FaTwitter className="text-3xl" />
                <a href="https://www.linkedin.com/company/14536380/admin/dashboard"><FaLinkedinIn className="text-3xl" /></a>  
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
