import React from 'react';
import ContactInfo from '@/core/components/SideMap';
import { IoIosMail } from 'react-icons/io';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
type Props = {};

const Map = (props: Props) => {
  const ContactInfoContent = [
    {
      id: 1,
      title: 'Grant Road, Mumbai',
      icon: <FaLocationDot className="h-6 w-6" />,
    },
    {
      id: 2,
      title: 'info@geosoftech.com',
      icon: <IoIosMail className="h-6 w-6" />,
    },
    {
      id: 3,
      title: '+91 77760 85112',
      icon: <FaPhone className="h-6 w-6" />,
    },
  ];

  return (
    <section className="h-full w-full">
      <div className=" w-full">
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7546.5806293075075!2d72.81324824587253!3d18.962781875480278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce12f4696dc9%3A0xf43fc241ac0b5886!2sGrant%20Road%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708918833427!5m2!1sen!2sin"
            width="100%"
            height="550"
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className=" md:absolute md:right-12 md:top-4 md:p-0">
            <ContactInfo content={ContactInfoContent} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
