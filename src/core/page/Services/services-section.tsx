"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Palette, Code, Search, Headphones, X, ArrowRight } from "lucide-react"

import { useState } from "react"
import { trackGoogleAdsConversion } from "@/lib/utils/googleAdsConversion"

export default function ServicesSection() {
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

  const services = [
    {
      icon: Palette,
      title: "Website Designing",
      description: "UI/UX design, prototyping, and branding solutions for stunning websites.",
      cta: "Request Demo →",
    },
    {
      icon: Code,
      title: "Website Development",
      description: "CMS, custom development, e-commerce, and portal solutions.",
      cta: "Get Free Quote →",
    },
    {
      icon: Search,
      title: "SEO & Performance Optimization",
      description: "Boost your rankings and site speed for maximum visibility.",
      cta: "Request Demo →",
    },
    {
      icon: Headphones,
      title: "Maintenance & Support",
      description: "24/7 support and ongoing maintenance for your website.",
      cta: "Request Demo →",
    },
  ]

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setIsFormOpen(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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
          formSource: 'services-section',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        
        // Track Google Ads conversion
        trackGoogleAdsConversion()
        
        // Open WhatsApp with the formatted message
        if (result.whatsappUrl) {
          window.open(result.whatsappUrl, "_blank")
        }
        
        // Show success message
        setTimeout(() => {
          setIsFormOpen(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            projectType: "",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-[#adece9] to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#02297e] mb-4">Our Website Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We cover everything from design to development, SEO, and long-term support.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center group cursor-pointer border border-gray-100"
                
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  borderColor: "rgb(59 130 246)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 bg-blue-700 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    className="bg-gradient-to-r from-blue-700 to-[#012a82] hover:from-[#012a82] hover:to-blue-700 text-white rounded-xl px-6 py-2 text-sm font-medium transition-all duration-300"
                    onClick={() => handleServiceClick(service.title)}
                  >
                    {service.cta}
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-8 text-gray-600 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✅</span>
                <span className="font-medium">Trusted by 300+ Businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🌍</span>
                <span className="font-medium">Global Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500">⚡</span>
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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

                  {/* <div className="bg-blue-50 p-4 rounded-lg mt-4">
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
    </>
  )
}
