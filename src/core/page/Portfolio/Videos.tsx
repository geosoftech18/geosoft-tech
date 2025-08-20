import LazyVideo from '@/core/components/LazyVideo';
import React from 'react';

const videos = [
  {
    src: '/portfolio/gyan-vihar.mp4',
    url: 'https://www.gyanvihar.org/',
    alt: 'Gyan Vihar',
  },
  {
    src: '/portfolio/aviation-legacy.mp4',
    url: 'https://www.avnlegacy.aero/',
    alt: 'Aviation Legacy',
  },
  {
    src: '/portfolio/genuine-filing.mp4',
    url: 'https://genuinefilings.com/',
    alt: 'Geniune Filing',
  },
  {
    src: '/portfolio/nhstudioz.mp4',
    url: 'https://www.nhstudioz.tv/',
    alt: 'NhStudioz',
  },
  { src: '/portfolio/elima.mp4', url: 'https://www.elima.in/', alt: 'Elima' },
  // Add more video objects as needed
];

const Videos = () => {
  return (
    <section
      className="h-full w-full border-0 border-b border-solid border-neutral-700"
      id="hero"
    >
      <div className="mx-auto w-full max-w-7xl space-y-4 px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10">
          {videos.map((video, index) => (
            <LazyVideo
              key={index}
              src={video.src}
              alt={video.alt}
              url={video.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
