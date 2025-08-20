import React, { ReactNode } from 'react';
import Button from './Button';
type Props = {
  content: any;
};

const ContactInfo = ({ content }: Props) => {
  // to add glassmorphism : contact-info
  return (
    <div className="mt-14 flex flex-col items-center justify-center rounded-xl bg-gray-200 p-5 md:items-start md:bg-white">
      <h1 className="my-5 text-4xl  font-bold md:ml-5">Contact Us</h1>
      <div className="flex w-full flex-col items-center justify-center px-5">
        {content.map((item: any, index: number) => (
          <div
            className="my-3 flex w-full  items-center justify-start space-x-4"
            key={index}
          >
            <div>{item.icon}</div>
            <div>
              <p className="text-xl md:text-lg">{item.title}</p>
            </div>
          </div>
        ))}
        <Button variant="primary" className="my-5">
          VISIT ON GOOGLE MAPS
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
