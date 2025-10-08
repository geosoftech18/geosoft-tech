"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react"

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
      setCurrentSlide((prev) => (prev + 1) % (testimonials.length - slidesToShow + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [slidesToShow])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (testimonials.length - slidesToShow + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (testimonials.length - slidesToShow + 1)) % (testimonials.length - slidesToShow + 1))
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
              {testimonials.map((testimonial, index) => (
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
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-8 h-full relative group hover:-translate-y-1 sm:hover:-translate-y-2">
                    {/* Video Play Button Overlay */}
                    {testimonial.hasVideo && (
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-blue-600 text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                        <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    )}

                    {/* Rating Stars */}
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 italic">"{testimonial.text}"</p>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar || "/services/webdevelopment/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover mr-3 sm:mr-4 border-2 border-gray-200"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg truncate">{testimonial.name}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm truncate">{testimonial.role}</p>
                        <p className="text-blue-600 font-medium text-xs sm:text-sm truncate">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
            {Array.from({ length: testimonials.length - slidesToShow + 1 }).map((_, index) => (
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
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4"
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
