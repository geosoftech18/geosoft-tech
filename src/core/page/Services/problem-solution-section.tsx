"use client"

import type React from "react"

import { motion } from "framer-motion"

import { X, CheckCircle, Star, Clock, Zap, TrendingUp, Shield, Send } from "lucide-react"
import { useState } from "react"

export default function ProblemSolutionSection() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  })

  const painPoints = [
    "Slow loading websites",
    "Outdated & unattractive design",
    "Poor conversion rates",
    "No SEO or online visibility",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    const message = `Hi! I'm ${formData.name}. Email: ${formData.email}, Phone: ${formData.phone}. Current website: ${formData.website}. Message: ${formData.message}`
    window.open(`https://wa.me/7776085112?text=${encodeURIComponent(message)}`, "_blank")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const painPointVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const solutionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Pain Points - Left Side */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              variants={painPointVariants}
            >
              Is Your Website Holding You Back?
            </motion.h2>

            <motion.div className="space-y-6">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-red-100"
                  variants={painPointVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.1)",
                  }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Solution Promise - Right Side */}
          <motion.div
            className="space-y-8"
            variants={solutionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#002a81] via-[#3e6192] to-[#002a81] bg-clip-text text-transparent">
                  We Fix It. We Build Websites That Deliver.
                </span>
              </h2>

              <p className="text-xl text-[#002a81] font-medium">
                Our websites are fast, modern, SEO-friendly, and designed to convert visitors into customers.
              </p>

              <p className="text-gray-600 leading-relaxed max-w-md">
                Stop losing potential customers to slow, outdated websites. We create high-performance,
                conversion-optimized websites that grow your business and establish your online presence.
              </p>
            </div>

            {/* Website Revamp Animation */}
            <motion.div
              className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-6">
                {/* Step 1: Old Website */}
                <motion.div
                  className="flex items-center justify-center space-x-4"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                >
                  <motion.div
                    className="w-20 h-16 bg-red-200 rounded border-2 border-red-300 flex flex-col items-center justify-center relative"
                    animate={{
                      rotate: [0, -2, 2, 0],
                      scale: [1, 0.98, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <X className="w-4 h-4 text-red-500" />
                    <div className="text-xs text-red-600 font-medium">Slow</div>
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>

                  {/* Transformation Arrow */}
                  <motion.div
                    className="flex flex-col items-center space-y-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Zap className="w-6 h-6 text-yellow-500" />
                    <div className="text-2xl font-bold text-blue-600">→</div>
                    <div className="text-xs text-gray-600 font-medium">Transform</div>
                  </motion.div>

                  {/* Step 2: New Website */}
                  <motion.div
                    className="w-20 h-16 bg-gradient-to-r from-blue-200 to-purple-200 rounded border-2 border-blue-300 flex flex-col items-center justify-center relative"
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0)",
                        "0 0 0 8px rgba(59, 130, 246, 0.1)",
                        "0 0 0 0 rgba(59, 130, 246, 0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <div className="text-xs text-blue-700 font-medium">Fast</div>
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>
                </motion.div>

                {/* Results Indicators */}
                <motion.div
                  className="grid grid-cols-3 gap-4 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <motion.div className="text-center p-3 bg-white rounded-lg shadow-sm" whileHover={{ scale: 1.05 }}>
                    <TrendingUp className="w-5 h-5 text-green-500 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-green-600">+300% Speed</div>
                  </motion.div>
                  <motion.div className="text-center p-3 bg-white rounded-lg shadow-sm" whileHover={{ scale: 1.05 }}>
                    <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-yellow-600">Modern Design</div>
                  </motion.div>
                  <motion.div className="text-center p-3 bg-white rounded-lg shadow-sm" whileHover={{ scale: 1.05 }}>
                    <Shield className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-blue-600">SEO Ready</div>
                  </motion.div>
                </motion.div>

                <p className="text-center text-sm text-gray-600 font-medium">Complete Website Transformation</p>
              </div>
            </motion.div>

            {!showForm ? (
              <motion.div variants={buttonVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <button
                    
                    className="bg-gradient-to-r from-[#06bb61] to-[#40b880] hover:from-[#00bf62] hover:to-[#0ac062] text-white px-8 py-4 rounded-xl shadow-lg text-lg font-semibold w-full"
                    onClick={() => setShowForm(true)}
                  >
                    Get Your Free Website Analysis & Proposal
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Proposal</h3>
                  <p className="text-gray-600">Tell us about your project and get a custom quote within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 border rounded-md px-4 w-full focus:shadow-lg focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 border rounded-md px-4 w-full focus:shadow-lg focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 border rounded-md px-4 w-full focus:shadow-lg focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Current Website (if any)"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="h-12 border rounded-md px-4 w-full focus:shadow-lg focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[100px] border rounded-md px-4 w-full focus:border-gray-400 focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-[#0ac062] to-[#00bf62]  text-white h-12 text-lg rounded-md font-semibold flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2 text-white" />
                      <span className="text-white font-semibold">Send Proposal Request</span>
                    </button>
                    <button type="button" onClick={() => setShowForm(false)} className="px-6 h-12 border rounded-md">
                      Cancel
                    </button>
                  </div>
                </form>

                <div className="text-center mt-4 text-sm text-gray-500">
                  <p>🔒 Your information is secure and will never be shared</p>
                </div>
              </motion.div>
            )}

            {/* Trust Elements */}
            <motion.div
              className="flex flex-wrap items-center gap-6 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-amber-600">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold">300+ Websites Built</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">2-4 Weeks Delivery</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
