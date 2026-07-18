'use client';
import React, { useState, useEffect } from 'react';

const HomeTabs = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [sectionProgress, setSectionProgress] = useState({
    Features: 0,
    'How It Works': 0,
    'Case Studies': 0,
    Services: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const scrollPosition = window.scrollY;

      if (heroSection) {
        const heroSectionHeight = heroSection.clientHeight;

        if (scrollPosition > heroSectionHeight - 100) {
          setIsHeaderFixed(true);
        } else {
          setIsHeaderFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById('features');
      const howItWorksSection = document.getElementById('how-it-works');
      const caseStudiesSection = document.getElementById('case-studies');
      const servicesSection = document.getElementById('services');

      const scrollPosition = window.scrollY;

      const sections = [
        { section: 'Features', element: featuresSection },
        { section: 'Services', element: servicesSection },
        { section: 'How It Works', element: howItWorksSection },
        { section: 'Case Studies', element: caseStudiesSection },
      ];

      sections.forEach(({ section, element }) => {
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight =
            element.getBoundingClientRect().top + window.pageYOffset;

          const progress =
            ((scrollPosition - sectionTop) / sectionHeight) * 100;

          if (progress > 100) {
            setSectionProgress((prev) => ({ ...prev, [section]: 100 }));
          } else if (progress < 0) {
            setSectionProgress((prev) => ({ ...prev, [section]: 0 }));
          } else {
            setSectionProgress((prev) => ({ ...prev, [section]: progress }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const homePageTabs = [
    {
      name: 'Features',
      url: '#features',
      progress: sectionProgress['Features'],
    },
    {
      name: 'Services',
      url: '#services',
      progress: sectionProgress['Services'],
    },
    {
      name: 'How It Works',
      url: '#how-it-works',
      progress: sectionProgress['How It Works'],
    },
    {
      name: 'Case Studies',
      url: '#case-studies',
      progress: sectionProgress['Case Studies'],
    },
  ];

  const headerHeight = 160;

  const handleTabClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const topPos =
        section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      aria-label="Page sections"
      className={`inset-x-0 z-40 w-full bg-white shadow-sm ${
        isHeaderFixed ? 'fixed top-20 max-lg:top-28' : 'sticky top-0'
      }`}
    >
      <ul className="m-auto grid max-w-7xl list-none grid-cols-4 p-0">
        {homePageTabs.map((item, index) => (
          <li key={index} className="relative my-auto w-full list-none text-center">
            <button
              type="button"
              className="relative flex w-full cursor-pointer p-4 text-xs text-black md:text-base"
              onClick={() => handleTabClick(item.url.substring(1))}
              aria-label={`Go to ${item.name} section`}
            >
              <span className="mx-auto">{item.name}</span>
              <span
                style={{ width: `${item.progress}%` }}
                className="absolute bottom-0 left-0 h-0.5 bg-green-300"
                aria-hidden
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomeTabs;
