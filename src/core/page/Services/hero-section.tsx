"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { X, ArrowRight, MessageCircle } from "lucide-react"
import { RiArrowRightSLine, RiArrowRightSFill } from "react-icons/ri"
import FlipButton from "@/core/components/FlipButton"
import { Breadcrumb } from "@/core/components/Breadcrumb"
import { trackGoogleAdsConversion } from "@/lib/utils/googleAdsConversion"



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
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false)
  
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
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleWhatsAppClick = () => {
    const whatsappMessage = `🎯 *New Project Inquiry - ${selectedService || 'Web Development'}*

👤 *Contact Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Project Type: ${formData.projectType}

📋 *Project Information:*
• Service: ${selectedService || 'Web Development'}

💬 *Message:*
Hi! I'm interested in discussing my project requirements. Please contact me to discuss further details.

Thank you!`
    
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/7776085112?text=${encodedMessage}`, "_blank")
    
    // Close popup and reset form after opening WhatsApp
    setShowWhatsAppPopup(false)
    setTimeout(() => {
      setIsFormOpen(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
      })
      setSubmitStatus('idle')
    }, 500)
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
        
        // Track Google Ads conversion
        trackGoogleAdsConversion()
        
        // Show WhatsApp popup after 2 seconds
        setTimeout(() => {
          setShowWhatsAppPopup(true)
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

  return (
    <div className="h-full w-full" id="hero">
      <div className="relative h-screen w-full bg-[url(/services/webdevelopment/business-meeting.jpg)] bg-cover bg-center bg-no-repeat pt-16">
        <div className="absolute inset-0 z-0 h-full w-full bg-transparent bg-gradient-to-tr from-t to-s opacity-70" />
        <div className="absolute left-4 top-20 z-30 sm:left-8 md:top-24 lg:left-12">
          <Breadcrumb
            variant="light"
            items={[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Web Development', href: '/services/webdevelopment' },
            ]}
          />
        </div>
        <div className="relative z-20 m-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-5 pt-4 max-md:px-5">
          <h1 className="text-center text-3xl font-bold leading-none tracking-tighter text-neutral-50 md:text-4xl lg:text-[44px]">
            <div className="text-neutral-50">Your Trusted Website Designing</div>
            <div className="text-neutral-50 -mt-3 md:-mt-4">
              Partner in{" "}
              <TypeAnimation
                sequence={[
                  ...cityNames.flatMap(city => [city, 2000])
                ]}
                speed={50}
                deletionSpeed={30}
                repeat={Infinity}
                className="inline-block text-neutral-50"
              />
            </div>
          </h1>
          <h2 className="text-center text-lg font-semibold text-neutral-50 md:text-xl lg:text-2xl">
            That Drives Business Growth
          </h2>
          <p className="text-center text-lg text-neutral-300 md:text-xl">
            We build fast, modern, and conversion-focused websites with Next.js, Node.js, and CMS solutions
            tailored for your business success.
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-9 w-full sm:w-auto">
            <FlipButton
              onClick={() => handleServiceClick("Get Free Quote")}
              default_text="Get Free Quote"
              hover_text="Let's connect"
              rounded="rounded-full"
              icon={<RiArrowRightSLine />}
              type="secondary"
              className="flex-1 sm:flex-none sm:w-auto"
            />
            <button
              onClick={() => handleWhatsAppClick()}
              className="border-2 border-white/30 text-white hover:bg-white hover:text-purple-600 font-semibold px-4 py-3 rounded-full shadow-xl bg-white/5 backdrop-blur-sm transition-all duration-300 flex-shrink-0 flex items-center justify-center"
            >
              <RiArrowRightSFill className="text-xl" />
            </button>
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
              </div>

              {/* Form Content */}
              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Tell us about your project</h4>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full border rounded-md px-4 py-2 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      className="w-full border rounded-md px-4 py-2 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full border rounded-md px-4 py-2 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
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
{/* 
                  <div className="bg-blue-50 p-4 rounded-lg mt-4">
                    <h5 className="font-medium text-blue-900 mb-2">What happens next?</h5>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• We'll contact you within 2 hours</li>
                      <li>• Free consultation & project analysis</li>
                      <li>• Custom proposal with timeline & pricing</li>
                      <li>• No commitment required</li>
                    </ul>
                  </div> */}
                </motion.div>

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
                        <p className="font-medium">Thank you for your submission!</p>
                        <p className="text-sm">We've received your information and will contact you soon.</p>
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
                <div className="flex items-center justify-end">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.projectType}
                    className={`text-white flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : submitStatus === 'error'
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-gradient-to-r from-blue-600 to-blue-600 hover:from-green-700 hover:to-blue-700'
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
                        Submit
                        <ArrowRight className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Popup */}
      <AnimatePresence>
        {showWhatsAppPopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowWhatsAppPopup(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Connect Instantly</h3>
                      <p className="text-sm text-gray-600">Send your details via WhatsApp</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowWhatsAppPopup(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Would you like to send your project details directly to our team via WhatsApp for instant response?
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-semibold">Name:</span>
                      <span>{formData.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-semibold">Email:</span>
                      <span>{formData.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-semibold">Phone:</span>
                      <span>{formData.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-semibold">Project:</span>
                      <span>{formData.projectType}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 flex items-center gap-3">
                {/* <button
                  onClick={() => setShowWhatsAppPopup(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Maybe Later
                </button> */}
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 px-4 py-3 w-full bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Send on WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
