"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { X ,ArrowLeft,ArrowRight} from "lucide-react"

import Image from "next/image"

const FloatingIcon = ({
  children,
  delay = 0,
  x = 0,
  y = 0,
}: {
  children: React.ReactNode
  delay?: number
  x?: number
  y?: number
}) => (
  <motion.div
    className="absolute text-2xl opacity-20"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
)



const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+7972221303" // Replace with your actual WhatsApp business number
    const message = encodeURIComponent(
      "Hi! I'm interested in your Website Design & Development services. Can we discuss my project?",
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
    >
      {/* <motion.button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-colors duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.7)", "0 0 0 20px rgba(34, 197, 94, 0)"],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </motion.button> */}

      <motion.div
        className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </motion.div>
    </motion.div>
  )
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  // City names for typewriter effect
  const cityNames = [
    "Mumbai",
    "Delhi", 
    "Bangalore",
    "Nagpur",
    "Thane",
    "Gurgaon",
    "Pune",
    "Ahmedabad",
    "Noida",
    "Surat"
  ]

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setIsFormOpen(true)
    setCurrentStep(1)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in  discussing my project requirements.",
    )
    window.open(`https://wa.me/7776085112?text=${message}`, "_blank")
  }

  


  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedService,
          formSource: 'hero-section',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        
        // Open WhatsApp with the formatted message
        if (result.whatsappUrl) {
          window.open(result.whatsappUrl, "_blank")
        }
        
        // Show success message
        setTimeout(() => {
          setIsFormOpen(false)
          setCurrentStep(1)
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            projectType: "",
            budget: "",
            timeline: "",
            message: "",
          })
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative pt-20 md:pt-10 min-h-screen overflow-hidden ">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Icons */}
      <FloatingIcon delay={0} x={10} y={20}>
        💻
      </FloatingIcon>
      <FloatingIcon delay={1} x={85} y={15}>
        📱
      </FloatingIcon>
      <FloatingIcon delay={2} x={15} y={70}>
        🌐
      </FloatingIcon>
      <FloatingIcon delay={1.5} x={80} y={80}>
        ⚡
      </FloatingIcon>
      <FloatingIcon delay={0.5} x={90} y={40}>
        🚀
      </FloatingIcon>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-center min-h-[80vh]">
            {/* Left Side - Content */}
            <motion.div
              className="lg:col-span-6 xl:col-span-5 space-y-8 lg:space-y-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Headline */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl mt-6 font-bold text-[#002a80] leading-none tracking-tight">
                  <div className=" text-[#002a80] bg-clip-text  -mb-4">
                   Your Trusted Website
                  </div>
                  <div className="bg-gradient-to-r from-white via-blue-100 to-purple-100 text-[#002a80] bg-clip-text  -mb-4">
                   Designing Partner 
                  </div>
                  <div className="text-[#002a80] mt-6">
                     <span className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl text-[#002a80]">in {" "}</span>
                    <TypeAnimation
                      sequence={[
                        ...cityNames.flatMap(city => [city, 2000])
                      ]}
                      speed={50}
                      deletionSpeed={30}
                      repeat={Infinity}
                      className="inline-block text-blue-700 text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold"
                    />
                    <div className="ml-2 text-[#002a80] text-xl md:text-2xl mt-6">That Drives Business Growth</div>
                  </div>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.div
                className="max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-lg sm:text-lg lg:text-xl text-[#6981b3] leading-relaxed font-light md:-mt-4">
                  We build fast, modern, and conversion-focused websites with Next.js, Node.js, and CMS solutions
                  tailored for your business success.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-row gap-2 sm:gap-3 md:gap-4 md:pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="group flex-1">
                  <button
                    onClick={() => handleServiceClick("Get Free Quote")}
                    className="bg-blue-700 hover:from-[#71e2f0] hover:to-[#adece9] text-sm sm:text-base font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 h-12 sm:h-14 rounded-2xl shadow-xl border-0 w-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-orange-500/25"
                  >
                    <span className="flex justify-center items-center gap-2 text-white">
                      🚀 <span className="hidden sm:inline text-white">Get Free Quote</span><span className="sm:hidden text-white">Get Quote</span>
                    </span>
                  </button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="group flex-1">
                  <button
                    onClick={() => handleWhatsAppClick()}
                    className="border-2 border-white/30 text-white hover:bg-white hover:text-purple-600 font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 h-12 sm:h-14 rounded-2xl shadow-xl w-full bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-white/25"
                  >
                    <span className="flex justify-center  items-center gap-2 text-[#032a7f]">
                      📞 <span className="hidden sm:inline">Schedule a Call</span><span className="sm:hidden">Call Now</span>
                    </span>
                  </button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className=""
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="space-y-6">
                  <p className="text-[#00bf5f] text-sm font-medium tracking-wide uppercase">
                    Trusted by 350+ Businesses Worldwide
                  </p>
                  {/* <div className="flex flex-wrap gap-6 items-center pb-5">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="w-24 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-xs text-[#4a6ca7] font-semibold tracking-wider">LOGO</span>
                      </motion.div>
                    ))}
                  </div> */}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual Mockup */}
            <motion.div
              className="lg:col-span-6 xl:col-span-7 relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative max-w-2xl w-full">
                {/* Laptop Mockup */}
                <motion.div
                  className="relative"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="bg-[#C0C0C0] rounded-t-2xl p-3 shadow-2xl border border-gray-3">
                    {/* Laptop Screen */}
                    <div className="bg-white rounded-xl overflow-hidden aspect-video shadow-inner">
                      <Image
                        src="/services/webdevelopment/development-hero.png"
                        alt="Website Mockup"
                        width={800}
                        height={500}
                        className="w-full h-full object-contain"
                        priority
                      />
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="bg-[#C0C0C0] h-6 rounded-b-2xl shadow-2xl border-x border-b border-gray-400"></div>
                </motion.div>

                {/* Enhanced Floating Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-2xl shadow-2xl border border-green-300/20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <span className="text-xl">✓</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-2xl shadow-2xl border border-blue-300/20"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <span className="text-xl">⚡</span>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -left-8 bg-gradient-to-r from-purple-400 to-purple-600 text-white p-3 rounded-xl shadow-xl border border-purple-300/20"
                  animate={{ x: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  <span className="text-lg">🚀</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Get Started</h3>
                    <p className="text-sm text-gray-600">{selectedService}</p>
                  </div>
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Step {currentStep} of 3</span>
                    <span>{Math.round((currentStep / 3) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / 3) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6">

                {/* Step 1: Basic Info */} {/* Step 2: Project Details */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h4>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => handleInputChange("projectType", e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        <option value="New Website">New Website</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="E-commerce Store">E-commerce Store</option>
                        <option value="Web Application">Web Application</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange("budget", e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
                        <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                        <option value="₹1,00,000 - ₹2,00,000">₹1,00,000 - ₹2,00,000</option>
                        
                        <option value="₹2,00,000+">₹2,00,000+</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange("timeline", e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1 month">1 month</option>
                        <option value="2-3 months">2-3 months</option>
                        <option value="3+ months">3+ months</option>
                        <option value="Just exploring">Just exploring</option>
                      </select>
                    </div>
                  </motion.div>
                )}
                {/* Step 2: Message & Submit */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Details</h4>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                        <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us more about your project requirements, goals, and any specific features you need..."
                        className="w-full h-32 resize-none border-2 rounded-md px-4 focus:shadow-lg focus:outline-none "
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-900 mb-2">What happens next?</h5>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• We'll contact you within 2 hours</li>
                        <li>• Free consultation & project analysis</li>
                        <li>• Custom proposal with timeline & pricing</li>
                        <li>• No commitment required</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
                {/* Step 3: Basic Info */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Tell us about yourself</h4>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full border rounded-md px-4 focus:shadow-lg focus:outline-none h-10"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        className="w-full border rounded-md px-4 focus:shadow-lg focus:outline-none h-10"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full border rounded-md px-4 focus:shadow-lg focus:outline-none h-10"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Enter your company name (optional)"
                        className="w-full border rounded-md px-4 focus:shadow-lg focus:outline-none h-10"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 text-green-800">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">Form submitted successfully!</p>
                        <p className="text-sm">Email sent to your team & WhatsApp message prepared.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 text-red-800">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✗</span>
                      </div>
                      <div>
                        <p className="font-medium">Submission failed</p>
                        <p className="text-sm">Please try again or contact us directly.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button onClick={prevStep} className="flex items-center gap-2 bg-transparent">
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 3 ? (
                    <button
                      onClick={nextStep}
                      disabled={
                        (currentStep === 1 && (!formData.projectType || !formData.budget || !formData.timeline)) ||
                        (currentStep === 2 && (!formData.projectType || !formData.budget || !formData.timeline))
                      }
                      className="bg-gradient-to-r text-white from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-700 flex items-center gap-2 rounded-lg"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                      className={`text-white flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : submitStatus === 'success'
                          ? 'bg-green-600 hover:bg-green-700'
                          : submitStatus === 'error'
                          ? 'bg-red-600 hover:bg-red-700'
                          : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          ✓ Sent Successfully!
                        </>
                      ) : submitStatus === 'error' ? (
                        <>
                          ✗ Try Again
                        </>
                      ) : (
                        <>
                          Send via WhatsApp
                          <ArrowRight className="w-4 h-4 text-white" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
