'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface FadeInOnScrollProps {
  children: React.ReactNode;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = elementRef.current;

    if (element) {
      gsap.set(element, { autoAlpha: 0, y: 30 });

      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%', // Adjust the start position of trigger as needed
        onEnter: () => {
          gsap.to(element, {
            duration: 1,
            autoAlpha: 1,
            y: 0,
            ease: 'power2.out',
            overwrite: true,
          });
        },
      });
    }
  }, []);

  return <section ref={elementRef}>{children}</section>;
};

export default FadeInOnScroll;
