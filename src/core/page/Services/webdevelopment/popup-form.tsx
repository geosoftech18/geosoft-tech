"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, User, Mail, Phone, Briefcase, Building, Send, CheckCircle, Sparkles, Zap, Star } from "lucide-react"

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
          company: formData.businessName || '', // Store businessName as company in database
          projectType: formData.projectType,
          selectedService: 'Web Development',
          formSource: 'webdevelopment-popup', // Updated form source identifier
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        
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
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full relative overflow-hidden"
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

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="relative z-10 p-4 md:p-5 lg:p-6">
              {/* Header */}
              <div className="text-center mb-4 md:mb-5">
                <motion.div
                  className="inline-flex items-center gap-2 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                  <span className="text-orange-500 font-semibold text-xs">Special Offer</span>
                </motion.div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1.5">
                  Get Your Free Quote{" "} <br />
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Today!
                  </span>
                  {" "}& {" "}<span className="bg-gradient-to-r from-[#2EBE63] to-[#229C48] bg-clip-text text-transparent">
                  Explore Report
                  </span>
                </h2>
                <p className="text-gray-600 text-xs">
                  Fill out the form below and get a free consultation within 24 hours
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                {/* Name Field */}
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700 mb-1.5">
                    <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" />
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <User className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                        focusedField === "name" ? "text-orange-500" : "text-gray-400"
                      }`} />
                    </div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="Enter your full name"
                      className={`w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-2.5 text-sm border-2 rounded-xl transition-all duration-300 ${
                        focusedField === "name"
                          ? "border-orange-500 shadow-lg shadow-orange-500/20 bg-orange-50/50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      } focus:outline-none text-gray-900 placeholder:text-gray-400`}
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700 mb-1.5">
                    <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" />
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Mail className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                        focusedField === "email" ? "text-orange-500" : "text-gray-400"
                      }`} />
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="Enter your email"
                      className={`w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-2.5 text-sm border-2 rounded-xl transition-all duration-300 ${
                        focusedField === "email"
                          ? "border-orange-500 shadow-lg shadow-orange-500/20 bg-orange-50/50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      } focus:outline-none text-gray-900 placeholder:text-gray-400`}
                    />
                  </div>
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700 mb-1.5">
                    <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" />
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Phone className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                        focusedField === "phone" ? "text-orange-500" : "text-gray-400"
                      }`} />
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="Enter your mobile number"
                      className={`w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-2.5 text-sm border-2 rounded-xl transition-all duration-300 ${
                        focusedField === "phone"
                          ? "border-orange-500 shadow-lg shadow-orange-500/20 bg-orange-50/50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      } focus:outline-none text-gray-900 placeholder:text-gray-400`}
                    />
                  </div>
                </motion.div>

                {/* Business Name Field */}
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700 mb-1.5">
                    <Building className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" />
                    Business Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Building className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                        focusedField === "businessName" ? "text-orange-500" : "text-gray-400"
                      }`} />
                    </div>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange("businessName", e.target.value)}
                      onFocus={() => setFocusedField("businessName")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter your business name (optional)"
                      className={`w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-2.5 text-sm border-2 rounded-xl transition-all duration-300 ${
                        focusedField === "businessName"
                          ? "border-orange-500 shadow-lg shadow-orange-500/20 bg-orange-50/50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      } focus:outline-none text-gray-900 placeholder:text-gray-400`}
                    />
                  </div>
                </motion.div>

                {/* Project Type Field */}
                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700 mb-1.5">
                    <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" />
                    Project Type *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                      <Briefcase className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                        focusedField === "projectType" ? "text-orange-500" : "text-gray-400"
                      }`} />
                    </div>
                    <select
                      value={formData.projectType}
                      onChange={(e) => handleInputChange("projectType", e.target.value)}
                      onFocus={() => setFocusedField("projectType")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full pl-10 md:pl-12 pr-8 md:pr-10 py-2 md:py-2.5 text-sm border-2 rounded-xl transition-all duration-300 appearance-none ${
                        focusedField === "projectType"
                          ? "border-orange-500 shadow-lg shadow-orange-500/20 bg-orange-50/50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      } focus:outline-none text-gray-900 cursor-pointer`}
                    >
                      <option value="">Select project type</option>
                      <option value="New Website">New Website</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="E-commerce Store">E-commerce Store</option>
                      <option value="Web Application">Web Application</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                        focusedField === "projectType" ? "text-orange-500" : "text-gray-400"
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border-2 border-green-200 rounded-xl p-3"
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

                {/* Submit Button */}
                <motion.div
                  className="relative pt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.projectType}
                    className={`w-full py-2.5 md:py-3 px-4 md:px-6 rounded-xl font-semibold text-white text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden group ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl'
                    }`}
                    whileHover={!isSubmitting && submitStatus !== 'success' ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {/* Animated Background Shine */}
                    {!isSubmitting && submitStatus !== 'success' && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                          ease: "linear",
                        }}
                      />
                    )}
                    
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span className="text-white/90">Sending...</span>
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-white/90">Sent Successfully!</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white/90" />
                          <span className="text-white/90">Get Free Quote</span>
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.div>

                {/* Trust Text */}
                <motion.p
                  className="text-center text-xs text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  🔒 Your information is secure and will never be shared
                </motion.p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

