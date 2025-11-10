"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, CheckCircle, Send, Sparkles, User, Mail, Phone, Briefcase, Zap, Star } from "lucide-react"

export default function QuoteFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

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
          ...formData,
          selectedService: 'Get Free Quote',
          formSource: 'quote-form-section',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        
        // Open WhatsApp with the formatted message
        if (result.whatsappUrl) {
          window.open(result.whatsappUrl, "_blank")
        }
        
        // Reset form after delay
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            projectType: "",
          })
          setSubmitStatus('idle')
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  // Floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }))

  return (
    <section className="block md:hidden py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Large Background Blobs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Geometric Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Sparkles className="w-6 h-6 text-orange-500" />
              <span className="text-orange-500 font-semibold text-sm md:text-base">Get Started Today</span>
            </motion.div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Let's Make It Happen{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Together!
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and get a free quote for your project within 24 hours
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden relative"
            variants={itemVariants}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            <div className="grid lg:grid-cols-2 min-h-[650px]">
              {/* Left Side - Visual Section */}
              <div className="relative bg-gradient-to-br from-[#1a2a4a] via-[#2a3a5a] to-[#1a2a4a] p-8 md:p-12 hidden lg:flex flex-col justify-between overflow-hidden ">
                {/* Geometric Triangle Shapes (like reference image) */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Large Inverted Triangle (top-left) */}
                  <motion.div
                    className="absolute top-0 left-0 w-0 h-0"
                    style={{
                      borderLeft: '400px solid transparent',
                      borderRight: '0px solid transparent',
                      borderTop: '500px solid rgba(107, 114, 128, 0.25)',
                    }}
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Orange Triangle (bottom-left) */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0"
                    style={{
                      borderLeft: '0px solid transparent',
                      borderRight: '450px solid transparent',
                      borderBottom: '400px solid rgba(249, 115, 22, 0.35)',
                    }}
                    animate={{
                      rotate: [0, -3, 3, 0],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Small Grey Triangle (center-left) */}
                  <motion.div
                    className="absolute top-1/3 left-10 w-0 h-0"
                    style={{
                      borderLeft: '150px solid transparent',
                      borderRight: '150px solid transparent',
                      borderBottom: '200px solid rgba(156, 163, 175, 0.2)',
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Floating Orbs */}
                  <motion.div
                    className="absolute top-20 right-20 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      x: [0, 20, 0],
                      y: [0, -30, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-32 right-10 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                  {[Zap, Star, Sparkles].map((Icon, index) => (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{
                        left: `${20 + index * 30}%`,
                        top: `${30 + index * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 360],
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon className="w-8 h-8 text-orange-400/40" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Start Your Project
                    </h3>
                    <p className="text-blue-200 text-lg mb-8">
                      Join hundreds of satisfied clients who trusted us with their digital transformation
                    </p>
                  </motion.div>

                  {/* Features List */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {[
                      "Free consultation & project analysis",
                      "Custom proposal with timeline & pricing",
                      "24/7 support throughout your project",
                      "No commitment required",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 text-white/90"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm md:text-base text-white/90">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Bottom Text */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-orange-400 font-semibold text-xl md:text-2xl">
                    Let's Make It Happen Together!
                  </p>
                </motion.div>
              </div>

              {/* Right Side - Form Section */}
              <div className="bg-white p-6 md:p-8 lg:p-12 flex flex-col justify-center relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {/* Name Field */}
                  <motion.div
                    variants={itemVariants}
                    className="relative group"
                  >
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4 text-orange-500" />
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <User className={`w-5 h-5 transition-colors duration-300 ${
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
                        className={`w-full pl-12 pr-4 py-2 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "name"
                            ? "border-orange-500 shadow-lg shadow-orange-500/20 bg-orange-50/50"
                            : "border-gray-200 hover:border-gray-300 bg-white"
                        } focus:outline-none text-gray-900 placeholder:text-gray-400`}
                      />
                      {focusedField === "name" && (
                        <motion.div
                          className="absolute inset-0 border-2 border-orange-500 rounded-xl pointer-events-none"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.95, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    variants={itemVariants}
                    className="relative group"
                  >
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 text-orange-500" />
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Mail className={`w-5 h-5 transition-colors duration-300 ${
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
                        className={`w-full pl-12 pr-4 py-2 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "email"
                            ? "border-orange-500 shadow-lg shadow-orange-500/20 bg-orange-50/50"
                            : "border-gray-200 hover:border-gray-300 bg-white"
                        } focus:outline-none text-gray-900 placeholder:text-gray-400`}
                      />
                      {focusedField === "email" && (
                        <motion.div
                          className="absolute inset-0 border-2 border-orange-500 rounded-xl pointer-events-none"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.95, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div
                    variants={itemVariants}
                    className="relative group"
                  >
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 text-orange-500" />
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Phone className={`w-5 h-5 transition-colors duration-300 ${
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
                        className={`w-full pl-12 pr-4 py-2 border-2 rounded-xl transition-all duration-300 ${
                          focusedField === "phone"
                            ? "border-orange-500 shadow-lg shadow-orange-500/20 bg-orange-50/50"
                            : "border-gray-200 hover:border-gray-300 bg-white"
                        } focus:outline-none text-gray-900 placeholder:text-gray-400`}
                      />
                      {focusedField === "phone" && (
                        <motion.div
                          className="absolute inset-0 border-2 border-orange-500 rounded-xl pointer-events-none"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.95, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Project Type Field */}
                  <motion.div
                    variants={itemVariants}
                    className="relative group"
                  >
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Briefcase className="w-4 h-4 text-orange-500" />
                      Project Type *
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                        <Briefcase className={`w-5 h-5 transition-colors duration-300 ${
                          focusedField === "projectType" ? "text-orange-500" : "text-gray-400"
                        }`} />
                      </div>
                      <select
                        value={formData.projectType}
                        onChange={(e) => handleInputChange("projectType", e.target.value)}
                        onFocus={() => setFocusedField("projectType")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full pl-12 pr-10 py-2 border-2 rounded-xl transition-all duration-300 appearance-none ${
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
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ArrowRight className={`w-5 h-5 rotate-90 transition-colors duration-300 ${
                          focusedField === "projectType" ? "text-orange-500" : "text-gray-400"
                        }`} />
                      </div>
                      {focusedField === "projectType" && (
                        <motion.div
                          className="absolute inset-0 border-2 border-orange-500 rounded-xl pointer-events-none"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.95, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </motion.div>

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

                  {/* Submit Button */}
                  <motion.div variants={itemVariants} className="relative">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.projectType}
                      className={`w-full py-2 px-6 rounded-xl font-semibold text-white text-lg flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden group ${
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
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white/90" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </motion.div>

                  {/* Trust Text */}
                  <motion.p
                    className="text-center text-xs text-gray-500"
                    variants={itemVariants}
                  >
                    🔒 Your information is secure and will never be shared
                  </motion.p>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

