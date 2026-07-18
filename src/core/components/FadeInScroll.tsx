'use client';

import { useEffect, useRef, useState } from 'react';

interface FadeInOnScrollProps {
  children: React.ReactNode;
}

/**
 * Lightweight scroll reveal using CSS transforms (compositor-friendly)
 * instead of GSAP, to reduce main-thread work and layout thrashing.
 */
const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children }) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={elementRef}
      className={`transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      {children}
    </section>
  );
};

export default FadeInOnScroll;
