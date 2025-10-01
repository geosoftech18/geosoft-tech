"use client"

import { motion, AnimatePresence } from "framer-motion"

import { Search, Ruler, Palette, Laptop, CheckCircle, Rocket, Wrench, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "Understanding your business, goals, and requirements.",
    icon: Search,
    delay: 0.1,
  },
  {
    id: 2,
    title: "Wireframe",
    description: "Planning structure and user flow.",
    icon: Ruler,
    delay: 0.2,
  },
  {
    id: 3,
    title: "Design",
    description: "Crafting modern, conversion-focused UI/UX.",
    icon: Palette,
    delay: 0.3,
  },
  {
    id: 4,
    title: "Development",
    description: "Building fast, scalable, and secure websites.",
    icon: Laptop,
    delay: 0.4,
  },
  {
    id: 5,
    title: "QA",
    description: "Testing across browsers, devices, and performance.",
    icon: CheckCircle,
    delay: 0.5,
  },
  {
    id: 6,
    title: "Launch",
    description: "Deploying your site with full optimization.",
    icon: Rocket,
    delay: 0.6,
  },
  {
    id: 7,
    title: "Support",
    description: "Ongoing updates, fixes, and maintenance.",
    icon: Wrench,
    delay: 0.7,
  },
]

const handleCTAClick = () => {
  const message = encodeURIComponent(
    "Hi! I'm interested in your web development process. Can you tell me more about how you can help build my website?",
  )
  const phoneNumber = "1234567890" // Replace with your actual WhatsApp number
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
}

export default function ProcessWorkflowSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [stepsPerSlide, setStepsPerSlide] = useState(4)
  const [totalSlides, setTotalSlides] = useState(Math.ceil(processSteps.length / 4))

  // Update steps per slide based on screen size
  useEffect(() => {
    const updateStepsPerSlide = () => {
      if (window.innerWidth < 768) {
        setStepsPerSlide(1) // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setStepsPerSlide(2) // Tablet: 2 cards
      } else {
        setStepsPerSlide(4) // Desktop: 4 cards
      }
    }

    updateStepsPerSlide()
    window.addEventListener('resize', updateStepsPerSlide)
    return () => window.removeEventListener('resize', updateStepsPerSlide)
  }, [])

  // Update total slides when stepsPerSlide changes
  useEffect(() => {
    setTotalSlides(Math.ceil(processSteps.length / stepsPerSlide))
    // Reset to first slide if current slide is out of bounds
    if (currentSlide >= Math.ceil(processSteps.length / stepsPerSlide)) {
      setCurrentSlide(0)
    }
  }, [stepsPerSlide, currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentSteps = () => {
    const startIndex = currentSlide * stepsPerSlide
    return processSteps.slice(startIndex, startIndex + stepsPerSlide)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#71e2f0] to-[#e9f8fd] rounded-full text-sm font-medium text-blue-700 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            ✨ Our Proven Process
          </motion.div>
          <h2 className="sm:text-5xl text-2xl md:text-6xl font-bold bg-gradient-to-r from-[#052c7f] via-blue-800 to-[#052c7f] bg-clip-text text-transparent mb-6 leading-tight">
            How We Build Your Success
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A systematic, client-focused approach that transforms your vision into a high-performing digital reality.
          </p>
        </motion.div>

        <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-12 shadow-xl border border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 gap-4">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="text-sm font-medium text-gray-500">
                Steps {currentSlide * stepsPerSlide + 1}-
                {Math.min((currentSlide + 1) * stepsPerSlide, processSteps.length)} of {processSteps.length}
              </div>
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`!w-3 !h-3 !p-0 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-blue-700 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex space-x-2">
              <motion.button
                onClick={prevSlide}
                className="p-2 sm:p-3 rounded-full bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="p-2 sm:p-3 rounded-full bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {getCurrentSteps().map((step, index) => {
                const IconComponent = step.icon
                const globalIndex = currentSlide * stepsPerSlide + index
                return (
                  <motion.div
                    key={step.id}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="relative bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 group-hover:border-blue-200/50 h-full">
                      <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 bg-[#072d7a] rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-lg">
                        {step.id}
                      </div>

                      <motion.div
                        className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#04bf63] to-[#acece9] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl"
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.3 },
                        }}
                      >
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </motion.div>

                      <div className="text-center space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                      </div>

                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 sm:mt-12 mb-6 sm:mb-8">
            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-2">
              <span>Progress</span>
              <span>{Math.round(((currentSlide + 1) / totalSlides) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
              <motion.div
                className="bg-gradient-to-r from-[#072d7a] to-[#acece9] h-1.5 sm:h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-[#072d7a] to-green-400 hover:from-[#072d7a]  hover:to-[#072d7a] text-white px-10 py-5 text-sm md:text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
            >
              See How We Can Build Yours →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
