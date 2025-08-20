'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

interface IProps {
  src: string;
  alt: string;
  url: string;
}

const LazyVideo: React.FC<IProps> = ({ src, alt, url }) => {
  const myRef = useRef<HTMLDivElement>(null);
  const { inViewport } = useInViewport(myRef, {}, { disconnectOnLeave: false });

  return (
    <Link href={url} target="_blank" referrerPolicy="no-referrer">
      <div ref={myRef}>
        {inViewport && (
          <video title={alt} autoPlay muted loop playsInline>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <h3 className="mt-5 text-center font-semibold uppercase text-p-2 lg:text-lg">
          {alt}
        </h3>
      </div>
    </Link>
  );
};

export default LazyVideo;
