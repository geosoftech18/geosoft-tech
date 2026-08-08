"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Users, Clock, Monitor, RotateCcw, User, Lightbulb, Timer, X, MessageCircle, CheckCircle } from "lucide-react"
import { trackGoogleAdsConversion } from "@/lib/utils/googleAdsConversion"

declare global {
  interface Window {
    grecaptcha: any
  }
}

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
  })
  const recaptchaRef = useRef<HTMLDivElement>(null)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false)
  // reCAPTCHA v2 (checkbox) site key
  const SITE_KEY = '6LfL3wcsAAAAACmBhhqPtyY4e6jrgoNn9xtmfUVO'

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="recaptcha"]')
    if (existingScript && window.grecaptcha && recaptchaRef.current) {
      window.grecaptcha.ready(() => {
        try {
          window.grecaptcha.render(recaptchaRef.current, {
            sitekey: SITE_KEY,
            theme: 'light',
            size: 'normal',
          })
          setRecaptchaLoaded(true)
        } catch (error) {
          console.error('reCAPTCHA render error:', error)
        }
      })
      return
    }

    // Load Google reCAPTCHA v2 script
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
    script.async = true
    script.defer = true
    
    script.onload = () => {
      if (window.grecaptcha && recaptchaRef.current) {
        window.grecaptcha.ready(() => {
          try {
            window.grecaptcha.render(recaptchaRef.current, {
              sitekey: SITE_KEY,
              theme: 'light',
              size: 'normal',
            })
            setRecaptchaLoaded(true)
          } catch (error) {
            console.error('reCAPTCHA render error:', error)
          }
        })
      }
    }
    
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.projectType) {
      alert('Please fill in all required fields')
      return
    }

    // Check if reCAPTCHA is completed
    if (!recaptchaLoaded || !window.grecaptcha) {
      alert('Please complete the reCAPTCHA verification')
      return
    }

    // Get reCAPTCHA response token
    let recaptchaToken = ''
    try {
      recaptchaToken = window.grecaptcha.getResponse()
      if (!recaptchaToken) {
        alert('Please complete the reCAPTCHA verification')
        return
      }
    } catch (error) {
      console.error('reCAPTCHA error:', error)
      alert('reCAPTCHA verification failed. Please try again.')
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
          ...formData,
          selectedService: 'Web Development',
          formSource: 'contact-form-section',
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

  const handleWhatsAppClick = () => {
    const whatsappMessage = `🎯 *New Project Inquiry - Web Development*

👤 *Contact Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Project Type: ${formData.projectType}

📋 *Project Information:*
• Service: Web Development

💬 *Message:*
Hi! I'm interested in discussing my project requirements. Please contact me to discuss further details.

Thank you!`
    
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/7776085112?text=${encodedMessage}`, "_blank")
    
    // Close popup and reset form after opening WhatsApp
    setShowWhatsAppPopup(false)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
      })
      // Reset reCAPTCHA
      if (window.grecaptcha && recaptchaRef.current) {
        window.grecaptcha.reset()
      }
      setSubmitStatus('idle')
    }, 500)
  }

  const handleCloseWhatsAppPopup = () => {
    setShowWhatsAppPopup(false)
    // Reset form when popup is closed
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
      })
      // Reset reCAPTCHA
      if (window.grecaptcha && recaptchaRef.current) {
        window.grecaptcha.reset()
      }
      setSubmitStatus('idle')
    }, 300)
  }

  return (
    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 bg-[#229c48] md:h-[75vh] lg:h-[70vh] md:mt-24 lg:mt-32 min-h-[70vh] md:min-h-[75vh] lg:min-h-[65vh] relative z-10">
      <div className="md:relative md:bottom-24 lg:bottom-32">
        {/* Hero content */}
        <div className="text-center mb-4 py-3 md:py-4">
          <h2 className="text-2xl sm:text-xl md:text-lg lg:text-[15px] md:text-white lg:text-black text-white xl:text-xl font-bold m-0 sm:mb-2 leading-tight">
            Let's build an <br />
            amazing project
          </h2>

          <p className="text-base sm:text-lg md:text-base -mb-6 md:text-white lg:text-black text-white lg:text-base">Drop us a line</p>
        </div>
        {/* Left side - Content section */}
        <div className="text-white w-full">
          <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-6 md:py-6 lg:px-10 xl:px-12 2xl:px-16">
            <div className="max-w-lg mx-auto md:mx-0">
              <div className="md:h-3/4 lg:h-3/4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-white text-xl md:text-xl lg:text-2xl font-normal mb-6 md:mb-8">
                    Why Choose GEO Softech ?
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-flow-col-3 gap-4 md:gap-4 lg:gap-6">
                    {/* Row 1 */}
                    <div className="flex flex-col items-center text-center text-white relative">
                      <div className="w-10 h-10 mb-2 flex items-center justify-center">
                        <Award className="w-10 h-10 stroke-1 text-white" />
                      </div>
                      <div className="text-sm font-normal mb-0.5 text-white">16+ years</div>
                      <div className="text-sm font-normal text-white">Experience</div>
                      {/* Horizontal line below */}
                      <div className="absolute -bottom-3 left-0 right-0 h-px bg-white hidden md:block"></div>
                    </div>

                    <div className="flex flex-col items-center text-center text-white relative">
                      <div className="absolute -left-6 top-0 bottom-0 w-px bg-white hidden md:block"></div>
                      <div className="absolute -right-6 top-0 bottom-0 w-px bg-white hidden md:block"></div>
                      <div className="w-10 h-10 mb-2 flex items-center justify-center">
                        <Users className="w-10 h-10 stroke-1 text-white" />
                      </div>
                      <div className="text-sm font-normal mb-0.5 text-white">100+</div>
                      <div className="text-sm font-normal text-white">Employees</div>
                      {/* Horizontal line below */}
                      <div className="absolute -bottom-3 left-0 right-0 h-px bg-white hidden md:block"></div>
                    </div>

                    <div className="flex flex-col items-center text-center text-white relative">
                      <div className="w-10 h-10 mb-2 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-lg font-bold text-white">G</span>
                        </div>
                      </div>
                      <div className="text-sm font-normal mb-0.5 text-white">Google</div>
                      <div className="text-sm font-normal text-white">Partner</div>
                      {/* Horizontal line below */}
                      <div className="absolute -bottom-3 left-0 right-0 h-px bg-white hidden md:block"></div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col items-center text-center text-white relative">
                      <div className="w-10 h-10 mb-2 flex items-center justify-center">
                        <div className="relative">
                          <Clock className="w-10 h-10 stroke-1 text-white" />
                          <div className="absolute -top-1 -right-1 text-xs font-bold text-white">24</div>
                        </div>
                      </div>
                      <div className="text-sm font-normal mb-0.5 text-white">Less than 24 hrs</div>
                      <div className="text-sm font-normal text-white">Guarantee Response</div>
                      {/* Horizontal line below */}
                      <div className="absolute -bottom-3 left-0 right-0 h-px bg-white hidden md:block"></div>
                    </div>

                    <div className="flex flex-col items-center text-center text-white relative">
                      <div className="absolute -left-6 top-0 bottom-0 w-px bg-white hidden md:block"></div>
                      <div className="absolute -right-6 top-0 bottom-0 w-px bg-white hidden md:block"></div>
                      <div className="w-10 h-10 mb-2 flex items-center justify-center">
                        <Monitor className="w-10 h-10 stroke-1 text-white" />
                      </div>
                      <div className="text-sm font-normal mb-0.5 text-white">Certified</div>
                      <div className="text-sm font-normal text-white">Developers</div>
                      {/* Horizontal line below */}
                      <div className="absolute -bottom-3 left-0 right-0 h-px bg-white hidden md:block"></div>
                    </div>

                    <div className="flex flex-col items-center text-center text-white relative">
                      <div className="w-10 h-10 mb-2 flex items-center justify-center">
                        <RotateCcw className="w-10 h-10 stroke-1 text-white" />
                      </div>
                      <div className="text-sm font-normal mb-0.5 text-white">80% Repeat</div>
                      <div className="text-sm font-normal text-white">Business</div>
                      {/* Horizontal line below */}
                      <div className="absolute -bottom-3 left-0 right-0 h-px bg-white hidden md:block"></div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col items-center text-center text-white">
                      <div className="w-10 h-10 mb-2 flex items-center justify-center">
                        <User className="w-10 h-10 stroke-1 text-white" />
                      </div>
                      <div className="text-sm font-normal mb-0.5 text-white">Dedicated Project</div>
                      <div className="text-sm font-normal text-white">Manager</div>
                    </div>

                    <div className="flex flex-col items-center text-center text-white relative">
                      <div className="absolute -left-6 top-0 bottom-0 w-px bg-white hidden md:block"></div>
                      <div className="absolute -right-6 top-0 bottom-0 w-px bg-white hidden md:block"></div>
                      <div className="w-10 h-10 mb-2 flex items-center justify-center">
                        <div className="relative">
                          <Lightbulb className="w-10 h-10 stroke-1 text-white" />
                          <div className="absolute -top-1 -right-1">
                            <div className="w-3 h-3 rounded-full border border-white flex items-center justify-center">
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-normal mb-0.5 text-white">Dedicated</div>
                      <div className="text-sm font-normal text-white">developers</div>
                    </div>

                    <div className="flex flex-col items-center text-center text-white">
                      <div className="w-10 h-10 mb-2 flex items-center justify-center">
                        <Timer className="w-10 h-10 stroke-1 text-white" />
                      </div>
                      <div className="text-sm font-normal mb-0.5 text-white">Handle Tight</div>
                      <div className="text-sm font-normal text-white">Deadlines</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right side - Form section */}
      <div className="bg-white md:relative md:bottom-24 lg:bottom-32 pt-6 pb-4 border-2 shadow-lg mt-4 md:mt-0 align-middle w-full md:w-[85%] lg:w-4/5 mb-8 md:mb-0 rounded-xl flex flex-col justify-center align-items-center mx-auto md:mx-0 md:ml-4 lg:ml-0 order-1 md:order-2 shadow-gray-400 relative z-20 min-h-[85vh] md:min-h-[88vh] lg:min-h-[90vh]">
        {/* Top border through the card */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent z-10 rounded-t-xl"></div>
        {/* Bottom border through the card */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent z-10 rounded-b-xl"></div>
        
        <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-6 md:py-6 lg:px-10 xl:px-12 2xl:px-16">
          <div className="max-w-md mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl">
            {/* Form header */}
            <div className="text-center md:text-left mb-4 sm:mb-5">
              <h2 className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800 mb-1 sm:mb-2">
                Let's Get Started Now!
              </h2>
              <p className="text-gray-500 text-sm sm:text-base md:text-sm lg:text-base leading-relaxed text-red">
                Please fill out the quick form and we will be in touch with you in lightning speed!
              </p>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative my-2">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="block w-full py-2 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white peer"
                    placeholder=""
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                  >
                    Your name<span className="text-red-600">*</span>
                  </label>
                </div>

                <div className="relative my-2">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="block w-full py-2 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white peer"
                    placeholder=""
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                  >
                    Your email<span className="text-red-600">*</span>
                  </label>
                </div>

                <div className="relative my-2">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="block w-full py-2 px-0 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white peer"
                    placeholder=""
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                  >
                    Phone number<span className="text-red-600">*</span>
                  </label>
                </div>

                <div className="relative my-2">
                  <select
                    value={formData.projectType}
                    onChange={(e) => handleInputChange("projectType", e.target.value)}
                    className="block w-full py-2 px-0 pr-6 text-sm text-black border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white peer bg-transparent"
                  >
                    <option value="" disabled hidden></option>
                    <option value="New Website">New Website</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="E-commerce Store">E-commerce Store</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Other">Other</option>
                  </select>
                  <label
                    htmlFor="projectType"
                    className={`absolute text-sm duration-300 transform origin-[0] ${
                      formData.projectType
                        ? "-translate-y-6 scale-75 top-3 left-0 text-black"
                        : "scale-100 translate-y-0 top-3 left-0 text-black peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black"
                    }`}
                  >
                    Project type<span className="text-red-600">*</span>
                  </label>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* reCAPTCHA v2 section */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border">
                <div ref={recaptchaRef} id="recaptcha-container" className="flex justify-center md:justify-start mb-2"></div>
                <p className="text-xs text-gray-500 mt-2">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Terms of Service</a> apply.</p>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border-2 border-green-200 rounded-xl p-4"
                >
                  <div className="flex items-center gap-3 text-green-800">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Form submitted successfully!</p>
                      <p className="text-sm">We'll contact you within 2 hours.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border-2 border-red-200 rounded-xl p-4"
                >
                  <div className="flex items-center gap-3 text-red-800">
                    <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <p className="font-semibold">Submission failed</p>
                      <p className="text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Submit button */}
              <div className="pt-2 sm:pt-3">
                <div className="flex justify-center items-center md:justify-start bg-emerald-200 rounded-full h-16 w-16 p-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.projectType}
                    className={`rounded-full h-12 w-12 md:h-12 md:w-12 p-0 flex items-center justify-center transition-all duration-200 hover:scale-125 focus:scale-105 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-emerald-600 hover:bg-emerald-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-white">→</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* WhatsApp Popup */}
      <AnimatePresence>
        {showWhatsAppPopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseWhatsAppPopup}
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
                    onClick={handleCloseWhatsAppPopup}
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
