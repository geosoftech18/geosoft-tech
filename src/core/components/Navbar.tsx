'use client';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';
import gsap from 'gsap';
import Button from '@/core/components/Button';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import Dialog from './Dialog';
import ContactForm from './ContactForm';

const Navbar: React.FC<navbar.index> = ({ logo, navlist }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (value: boolean) => {
    setIsOpen(value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust the scroll threshold as needed
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 w-full bg-white data-[scrolled=true]:bg-white data-[scrolled=true]:!transition-all `}
      data-aos="fade-down"
      data-aos-duration="400"
      data-aos-delay="0"
      data-scrolled={scrolled}
    >
      {navlist?.links && (
        <div className="flex w-full justify-end bg-neutral-100 lg:hidden ">
          <Button
            rounded="rounded-full"
            variant="secondary"
            className="my-1 mr-5 !bg-white py-1 hover:!bg-black"
          >
            Join Us
          </Button>
        </div>
      )}
      <div className="relative mx-auto flex w-full max-w-screen-2xl justify-between gap-2 px-10 py-2">
        <Link href={'/'}>
          <Image
            src={logo.url}
            alt={logo.alt}
            width={'200'}
            height={'200'}
            className="max-xsm:h-11 relative z-10 lg:h-16 h-14 w-full object-contain object-center"
          />
        </Link>
        {navlist?.links && <NavList links={navlist.links} />}
        <Dialog
          open={isOpen}
          onChange={handleOpenModal}
          trigger={
            <Button
              className={navlist?.links ? 'max-lg:hidden' : ''}
              rounded="rounded-full"
              variant="secondary"
            >
              Join Us
            </Button>
          }
        >
          <ContactForm handleShowModel={handleOpenModal} />
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;

const NavList: React.FC<navbar.navlist> = ({ links }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);

  const handleClickMenu = useCallback((value: boolean) => {
    // Only apply GSAP animations on mobile
    if (window.innerWidth >= 1024) {
      setIsOpenMenu(false);
      return;
    }

    const menuItems = document.querySelectorAll('#menu-item');
    if (value) {
      setIsOpenMenu(true);
      gsap.fromTo(
        menuItems,
        {
          opacity: 0,
          height: 0,
          y: 20,
        },
        {
          opacity: 1,
          height: 'auto',
          y: 0,
          stagger: 0.1,
        }
      );
    } else {
      gsap.fromTo(
        menuItems,
        {
          opacity: 1,
          height: 'auto',
          y: 0,
        },
        {
          opacity: 0,
          y: 20,
          stagger: -0.1, // Reverse stagger for fade-out effect
          onComplete: () => {
            setIsOpenMenu(false);
          },
        }
      );
    }
  }, []);

  // Ensure menu items are always visible on desktop
  useEffect(() => {
    const restoreDesktopMenu = () => {
      if (window.innerWidth >= 1024) {
        // Close mobile menu when on desktop
        if (isOpenMenu) {
          setIsOpenMenu(false);
        }
        // Reset GSAP animations and restore menu items visibility
        const menuItems = document.querySelectorAll('#menu-item');
        if (menuItems.length > 0) {
          menuItems.forEach((item) => {
            const element = item as HTMLElement;
            // Clear all inline styles set by GSAP
            gsap.killTweensOf(element);
            gsap.set(element, {
              opacity: 1,
              height: 'auto',
              y: 0,
              clearProps: 'all'
            });
            // Force remove any inline styles that might hide the element
            element.style.opacity = '';
            element.style.height = '';
            element.style.transform = '';
            element.style.display = '';
            element.style.visibility = '';
          });
        }
      }
    };

    const handleResize = () => {
      restoreDesktopMenu();
    };

    window.addEventListener('resize', handleResize);
    // Check immediately on mount
    setTimeout(() => {
      restoreDesktopMenu();
    }, 0);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpenMenu]);

  // Additional effect to ensure menu is visible on desktop mount
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const menuItems = document.querySelectorAll('#menu-item');
      menuItems.forEach((item) => {
        const element = item as HTMLElement;
        // Ensure no GSAP animations are running
        gsap.killTweensOf(element);
        // Clear any inline styles
        element.style.opacity = '';
        element.style.height = '';
        element.style.transform = '';
        element.style.display = '';
        element.style.visibility = '';
      });
    }
  }, []);

  // Close menu when clicking outside or on menu background (mobile only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpenMenu) return;
      
      // Only apply on mobile (screen width < 1024px)
      if (window.innerWidth >= 1024) return;
      
      const target = event.target as HTMLElement;
      
      // Don't close if clicking the menu button
      if (menuButtonRef.current?.contains(target)) {
        return;
      }
      
      // Close if clicking outside the menu
      if (menuRef.current && !menuRef.current.contains(target)) {
        handleClickMenu(false);
        return;
      }
      
      // Close if clicking on the menu background (ul element itself or empty space)
      if (menuRef.current && target === menuRef.current) {
        handleClickMenu(false);
        return;
      }
      
      // Close if clicking on a list item that doesn't contain a link
      const listItem = target.closest('li');
      if (listItem && menuRef.current?.contains(listItem)) {
        const hasLink = listItem.querySelector('a');
        if (!hasLink) {
          handleClickMenu(false);
        }
      }
    };

    if (isOpenMenu) {
      // Use capture phase and add a small delay to avoid immediate closing
      const timeoutId = setTimeout(() => {
        document.addEventListener('click', handleClickOutside, true);
      }, 50);
      
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('click', handleClickOutside, true);
      };
    }
  }, [isOpenMenu, handleClickMenu]);

  return (
    <>
      <div
        ref={menuButtonRef}
        className="z-10 ml-auto block h-max w-max cursor-pointer hover:animate-pulse lg:hidden"
        onClick={() => handleClickMenu(!isOpenMenu)}
      >
        {isOpenMenu ? (
          <CgClose className="h-8 w-8 text-black" />
        ) : (
          <HiOutlineMenuAlt1 className="h-8 w-8 text-black" />
        )}
      </div>
      <ul
        ref={menuRef}
        className="flex transition-all max-lg:absolute max-lg:left-0 max-lg:top-0 max-lg:!h-0 max-lg:w-0 max-lg:flex-col max-lg:overflow-hidden max-lg:data-[expand=true]:!h-screen max-lg:data-[expand]:!w-full max-lg:data-[expand=true]:py-[4.5rem] lg:items-center lg:justify-center lg:space-x-4 lg:rounded-full lg:shadow-head max-lg:z-50"
        data-expand={isOpenMenu}
        style={{
          transition: 'height 0.5s', // CSS transition for height change
        }}
        onClick={(e) => {
          // Close menu if clicking on the ul element itself (empty space) - mobile only
          if (window.innerWidth < 1024 && e.target === e.currentTarget) {
            handleClickMenu(false);
          }
        }}
      >
        {links?.map((link, index) => (
          <li key={index} className="group relative">
            {link.subLinks && Object.keys(link.subLinks).length > 0 ? (
              <a
                className="inline-block text-black max-lg:px-7 max-lg:py-5"
                id="menu-item"
              >
                {link.name}
              </a>
            ) : (
              <Link
                id="menu-item"
                href={link.url}
                className="inline-block px-4 py-2 font-bold text-p-2 max-lg:w-full max-lg:border-0 max-lg:border-b max-lg:border-gray-600 max-lg:bg-white max-lg:px-7 max-lg:py-4"
                onClick={() => {
                  // Only close menu on mobile
                  if (window.innerWidth < 1024) {
                    handleClickMenu(false);
                  }
                }}
              >
                {link.name}
              </Link>
            )}
            {link.subLinks && Object.keys(link.subLinks).length > 0 && (
              <div className="absolute left-0 z-10 hidden w-max border-t-2 border-transparent bg-transparent pt-2 shadow-lg group-hover:block">
                <div className="rounded-md bg-white ">
                  {Object.entries(link.subLinks).map(
                    ([category, subLinks], subIndex) => (
                      <div key={subIndex}>
                        <h6 className="bg-gray-200 px-4 py-2">{category}</h6>
                        <ul>
                          {subLinks.map((subLink, i) => (
                            <li
                              key={i}
                              onClick={() => {
                                // Only close menu on mobile
                                if (window.innerWidth < 1024) {
                                  handleClickMenu(false);
                                }
                              }}
                            >
                              <Link
                                href={subLink.url}
                                className="block px-4 py-2 hover:bg-gray-200"
                              >
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
