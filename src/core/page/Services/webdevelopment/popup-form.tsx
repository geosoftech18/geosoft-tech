"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, User, Mail, Phone, Briefcase, Building, Send, CheckCircle } from "lucide-react"
import Image from "next/image"
import { trackGoogleAdsConversion } from "@/lib/utils/googleAdsConversion"

interface PopupFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    projectType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  // Reset form when popup closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          projectType: "",
        })
        setSubmitStatus('idle')
      }, 300)
    }
  }, [isOpen])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.phone || !formData.projectType) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.businessName, // Store businessName as company in database
          projectType: formData.projectType,
          selectedService: 'Web Development',
          formSource: 'webdevelopment-popup', // Updated form source identifier
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        
        // Track Google Ads conversion
        trackGoogleAdsConversion()
        
        // Log email and database status
        if (result.emailSent) {
          console.log('✅ Admin notification email sent successfully')
        }
        if (result.customerEmailSent) {
          console.log('✅ Customer welcome email sent successfully')
        }
        if (result.submissionId) {
          console.log('✅ Form submission saved to database with ID:', result.submissionId)
        }
        
        // Open WhatsApp with the formatted message
        if (result.whatsappUrl) {
          window.open(result.whatsappUrl, "_blank")
        }
        
        // Close popup after delay
        setTimeout(() => {
          onClose()
        }, 3000)
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

  // Handle backdrop click - allow closing anytime
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isSubmitting) {
      onClose()
    }
  }

  // Handle close button click
  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative overflow-hidden flex flex-col md:flex-row"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 p-1.5 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
              title="Close"
              type="button"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Left Section - Image with Overlay (Hidden on Mobile) */}
            <div className="hidden md:block relative w-full md:w-2/5 overflow-hidden">
              {/* Full Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/services/webdevelopment/popup-form-image.png"
                  alt="Woman pointing"
                  fill
                  className="object-cover"
                  unoptimized
              />
            </div>

              {/* 40% Colored Overlay/Tag Effect - Bottom Full Width */}
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-br from-t via-t/95 to-p-3/90">
                {/* Decorative Dashed Lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <svg className="absolute top-10 left-0 w-full h-full opacity-30" viewBox="0 0 200 200">
                    <path
                      d="M20,20 Q50,50 80,20 T140,20 T200,20"
                      stroke="#9CFFFA"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                    <path
                      d="M20,60 Q50,90 80,60 T140,60 T200,60"
                      stroke="#9CFFFA"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                    <path
                      d="M20,100 Q50,130 80,100 T140,100 T200,100"
                      stroke="#9CFFFA"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                    <path
                      d="M20,140 Q50,170 80,140 T140,140 T200,140"
                      stroke="#9CFFFA"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              </div>

              {/* Content Overlay - Text and Button */}
              <div className="relative z-20 h-full flex flex-col justify-end p-6 md:p-8">
                {/* Text and Button Section */}
                <div className="text-center space-y-4">
                  <p className="text-white text-lg md:text-xl font-medium">
                    Don't leave without an
                  </p>
                  <button
                    type="button"
                    className="bg-[#2EBE63] hover:bg-[#229C48] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    EXCLUSIVE OFFER
                  </button>
                  <p className="text-white text-lg md:text-xl font-medium">
                    from us!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - White Background Form */}
            <div className="relative w-full md:w-3/5 p-4 md:p-6 lg:p-8">

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  Speak to your business growth experts
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name*
                  </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                    placeholder="Nice to meet you!"
                    className={`w-full px-4 py-2.5 text-sm border rounded-lg transition-all duration-300 bg-gray-50 ${
                        focusedField === "name"
                        ? "border-blue-500 shadow-md bg-white"
                        : "border-gray-300 hover:border-gray-400"
                      } focus:outline-none text-gray-900 placeholder:text-gray-400`}
                    />
                </motion.div>

                {/* Mobile Field */}
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mobile*
                  </label>
                    <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      required
                    placeholder="We really like to chat"
                    className={`w-full px-4 py-2.5 text-sm border rounded-lg transition-all duration-300 bg-gray-50 ${
                      focusedField === "phone"
                        ? "border-blue-500 shadow-md bg-white"
                        : "border-gray-300 hover:border-gray-400"
                      } focus:outline-none text-gray-900 placeholder:text-gray-400`}
                    />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email*
                  </label>
                    <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                    placeholder="It's how you get the estimate"
                    className={`w-full px-4 py-2.5 text-sm border rounded-lg transition-all duration-300 bg-gray-50 ${
                      focusedField === "email"
                        ? "border-blue-500 shadow-md bg-white"
                        : "border-gray-300 hover:border-gray-400"
                      } focus:outline-none text-gray-900 placeholder:text-gray-400`}
                    />
                </motion.div>

                {/* Company Name Field */}
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company Name
                  </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange("businessName", e.target.value)}
                      onFocus={() => setFocusedField("businessName")}
                      onBlur={() => setFocusedField(null)}
                    placeholder="To make you standout from your competition."
                    className={`w-full px-4 py-2.5 text-sm border rounded-lg transition-all duration-300 bg-gray-50 ${
                        focusedField === "businessName"
                        ? "border-blue-500 shadow-md bg-white"
                        : "border-gray-300 hover:border-gray-400"
                      } focus:outline-none text-gray-900 placeholder:text-gray-400`}
                    />
                </motion.div>

                {/* Project Type Field */}
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Project Type*
                  </label>
                  <div className="relative">
                    <select
                      value={formData.projectType}
                      onChange={(e) => handleInputChange("projectType", e.target.value)}
                      onFocus={() => setFocusedField("projectType")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-2.5 text-sm border rounded-lg transition-all duration-300 appearance-none bg-gray-50 cursor-pointer ${
                        focusedField === "projectType"
                          ? "border-blue-500 shadow-md bg-white"
                          : "border-gray-300 hover:border-gray-400"
                      } focus:outline-none text-gray-900`}
                    >
                      <option value="">Select project type</option>
                      <option value="New Website">New Website</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="E-commerce Store">E-commerce Store</option>
                      <option value="Web Application">Web Application</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className={`w-5 h-5 transition-colors duration-300 ${
                          focusedField === "projectType" ? "text-blue-500" : "text-gray-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>

               

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border-2 border-red-200 rounded-xl p-3"
                  >
                    <div className="flex items-center gap-2 text-red-800">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✗</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Submission failed</p>
                        <p className="text-xs">Please try again or contact us directly.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border-2 border-green-200 rounded-lg p-3"
                  >
                    <div className="flex items-center gap-2 text-green-800">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Form submitted successfully!</p>
                        <p className="text-xs">We'll contact you within 2 hours.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border-2 border-red-200 rounded-lg p-3"
                  >
                    <div className="flex items-center gap-2 text-red-800">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✗</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Submission failed</p>
                        <p className="text-xs">Please try again or contact us directly.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.div
                  className="relative pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.projectType}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-white text-base flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                    }`}
                    whileHover={!isSubmitting && submitStatus !== 'success' ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <span className="relative  z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span className="text-white">Sending...</span>
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-white">Sent Successfully!</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 text-white" />
                          <span className="text-white">Send</span>
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

