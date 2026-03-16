"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa6"
import { ChevronLeft, ChevronRight, Play, Star, BadgeCheck } from "lucide-react"
import { testimonials as homeTestimonials } from "@/data"

const testimonials = [
  {
    id: 1,
    name: "Sanjay Kathuria",
    company: "CFA",
    role: " Founder & Chief Mentor",
    text: "Creating a standout website can significantly boost business visibility; Geo Softech seems well equipped for that.",
    avatar: "/services/Sanjay Kathuria, CFA.png",
    rating: 5,
    hasVideo: true,
  },
  {
    id: 2,
    name: "BK Dadhich",
    company: " Conscious Foundation",
    role: "Self-employed",
    text: "Totally agree! Crisp, clear,and impactful — exactly the kind of content businesses need more of.",
    avatar: "/services/BK Dadhich.png",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 3,
    name: "Saumya Dudeja",
    company: "InfluencerConnect",
    role: "Founder",
    text: "Nice share! Simple, clear, and straight to the point — exactly how good business communication should be. This is the kind of content that earns trust an shows your team’s expertise. Keep up the good work!",
    avatar: "/services/Saumya Dudeja.png",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 4,
    name: "Devvarth Chavriya",
    company: "Binplus Technologies",
    role: " Founder and Director ",
    text:  "Truly inspiring — simple yet impactful. Great to see such  meaningful work being shared.",
    avatar: "/services/Devvarth Chavriya.png",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 5,
    name: "Neeraj Arora",
    company: "",
    role: "  Business Administrator ",
    text:  "Very interesting! Shows a solid understanding of what modern businesses need in a web development partner.",
    avatar: "/services/Neeraj Arora.png",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 6,
    name: "Swapnil Mishra",
    company: "Nipundta",
    role: " Chief Executive Officer",
    text:  "Great initiative by Amar Korde👏 — clear, professional, and focused on real business value. Wishing you continued success!",
    avatar: "/services/Swapnil Mishra.png",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 7,
    name: "Gopal Tarpe",
    company: "",
    role: "Technical Manager",
    text:  "Great start, sir! Really impressive approach and clear presentation. Looking forward to seeing more amazing work from you. Keep it up!",
    avatar: "/services/Gopal Tarpe.png",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 8,
    name: "Indira Priyadarshini",
    company: "Icreativehub",
    role: "self-employed",
    text:  'Geo Softech nails custom websites with responsive design and SEO expertise—built to boost your visibility!" GEO Softech',
    avatar: "/services/Indira Priyadarshini Dash.png",
    rating: 5,
    hasVideo: false,
  },
]

const clientLogos = [
  { name: "Lodha Group", logo: "/partners/p1.webp" },
  { name: "Slim feel", logo: "/partners/p2.webp" },
  { name: "framezOmania", logo: "/partners/p3.webp" },
  { name: "Dheera", logo: "/partners/p4.webp" },
  { name: "Stationery", logo: "/partners/p5.webp" },
  { name: "Digital Dhaba", logo: "/partners/p6.webp" },
  { name: "Muscle", logo: "/partners/p7.webp" },
]

// Social media icons array (without Pinterest) for non-service testimonials
const socialIcons = [
  { icon: FaFacebook, color: "text-blue-600", bg: "bg-blue-50" },
  { icon: FaInstagram, color: "text-pink-600", bg: "bg-pink-50" },
  { icon: FaLinkedinIn, color: "text-blue-700", bg: "bg-blue-50" },
  { icon: FaTwitter, color: "text-sky-500", bg: "bg-sky-50" },
  { icon: FaYoutube, color: "text-red-600", bg: "bg-red-50" },
]

// Merge service testimonials with home page testimonials into single carousel list
const allTestimonials = [
  ...testimonials,
  ...homeTestimonials.map((item, index) => ({
    id: testimonials.length + index + 1,
    name: item.name,
    company: "",
    role: item.role,
    text: item.testimonial,
    avatar: item.url,
    rating: 5,
    hasVideo: false,
  })),
]

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (allTestimonials.length - slidesToShow + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [slidesToShow])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (allTestimonials.length - slidesToShow + 1))
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + (allTestimonials.length - slidesToShow + 1)) %
        (allTestimonials.length - slidesToShow + 1),
    )
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to be your next success story. Can we discuss my project?")
    window.open(`https://wa.me/7776085112?text=${message}`, "_blank")
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-avant-garde text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#032d7d] mb-3 sm:mb-4 px-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#0ab865] to-[#aeebe9] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="font-avant-garde text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Don't just take our word for it. Here's what industry leaders say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20">
          <div className="overflow-hidden px-2 sm:px-4">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {allTestimonials.map((testimonial, index) => {
                const isServiceTestimonial = index < testimonials.length
                const socialIconData = isServiceTestimonial
                  ? { icon: FaLinkedinIn, color: "text-blue-700", bg: "bg-blue-50" }
                  : socialIcons[(index - testimonials.length) % socialIcons.length]
                const SocialIcon = socialIconData.icon

                return (
                <motion.div
                  key={testimonial.id}
                  className={`flex-shrink-0 px-2 sm:px-4 ${
                    slidesToShow === 1 ? "w-full" : slidesToShow === 2 ? "w-1/2" : "w-1/3"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="h-full w-full overflow-hidden rounded-sm border-2 border-solid border-neutral-100">
                    <div className="flex items-center justify-between gap-5 border-0 border-b-2 border-solid border-neutral-100 px-6 py-4">
                      <div className="h-12 w-12 overflow-hidden rounded-full">
                        <img
                          src={testimonial.avatar || "/services/webdevelopment/placeholder.svg"}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="font-medium uppercase text-black">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs font-medium uppercase text-neutral-400">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="relative flex items-center justify-center">
                        {/* Verified Badge with Social Icon */}
                        <div className="relative flex items-center justify-center">
                          {/* Social Icon Background */}
                          <div
                            className={`h-12 w-12 rounded-full ${socialIconData.bg} flex items-center justify-center border-2 border-white shadow-md`}
                          >
                            <SocialIcon
                              className={`h-6 w-6 ${socialIconData.color}`}
                            />
                          </div>
                          {/* Verified Badge Overlay */}
                          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-white shadow-sm">
                            <BadgeCheck className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-sm sm:text-base lg:text-base leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                      {/* Rating Stars */}
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )})}
            </motion.div>
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 lg:p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 lg:p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-1">
            {Array.from({ length: allTestimonials.length - slidesToShow + 1 }).map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-colors duration-200 cursor-pointer ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                style={{ 
                  width: '8px', 
                  height: '8px',
                  minWidth: '8px',
                  minHeight: '8px',
                  maxWidth: '8px',
                  maxHeight: '8px'
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={handleWhatsApp}
            className="font-avant-garde bg-gradient-to-r from-[#032d7d] to-[#04bf63] hover:from-[#04bf63] hover:to-[#032d7d] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
          >
            Want to be our next success story? → Let's Talk
          </button>
        </motion.div>

        {/* Client Logos Strip */}
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 font-medium">Trusted by leading brands worldwide</p>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-2 sm:space-x-4 lg:space-x-4 items-center justify-center"
              animate={{ x: [0, -100] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <img
                    src={client.logo || "/services/webdevelopment/placeholder.svg"}
                    alt={client.name}
                    className="h-8 sm:h-10 lg:h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
