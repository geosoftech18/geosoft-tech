"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, Mail, X, Download } from "lucide-react"
    

export default function StickyFloatingButtons() {
  const [showLeadMagnet, setShowLeadMagnet] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCall = () => {
    // Check if mobile device
    if (typeof window !== "undefined") {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      if (isMobile) {
        window.location.href = "tel:+91 7776085112"
      } else {
        alert("Call us at: +91 77760 85112")
      }
    }
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in website development services. Can you guide me?")
    window.open(`https://wa.me/917776085112?text=${message}`, "_blank")
  }

  const handleEmail = () => {
    const subject = encodeURIComponent("Website Development Inquiry")
    const body = encodeURIComponent(
      "Hi, I'm interested in your website development services. Please provide more information.",
    )
    window.location.href = `mailto:info@geosofttech.com?subject=${subject}&body=${body}`
  }

  const handleLeadMagnetSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your CRM/email service
    console.log("[v0] Lead magnet form submitted:", formData)

    // Simulate PDF download
    const link = document.createElement("a")
    link.href = "/website-checklist.pdf" // You would replace this with actual PDF
    link.download = "Free-Website-Checklist.pdf"
    link.click()

    setShowLeadMagnet(false)
    setFormData({ name: "", email: "" })
    alert("Thank you! Your checklist has been sent to your email.")
  }

  return (
    <>
      {/* Sticky Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {isExpanded && (
            <>
              {/* Lead Magnet Button */}
              <motion.button
                onClick={() => setShowLeadMagnet(true)}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-3 rounded-full shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Get Free Website Checklist"
              >
                <Download className="w-5 h-5 text-white" />
              </motion.button>

              {/* Email Button */}
              <motion.button
                onClick={handleEmail}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white p-3 rounded-full shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Send Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </motion.button>

              {/* WhatsApp Button */}
              <motion.button
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </motion.button>

              {/* Call Button */}
              <motion.button
                onClick={handleCall}
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Call Now"
              >
                <Phone className="w-5 h-5 text-white" />
              </motion.button>
            </>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-[#00bf62] hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-xl backdrop-blur-sm border-2 border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          title={isExpanded ? "Close Menu" : "Contact Options"}
        >
          <motion.div animate={{ rotate: isExpanded ? 45 : 0 }} transition={{ duration: 0.3 }}>
            {isExpanded ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap shadow-lg"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 1 }}
            >
              Need Help? Click to Contact
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lead Magnet Popup */}
      <AnimatePresence>
        {showLeadMagnet && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLeadMagnet(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Not sure where to start? 🚀</h3>
                  <p className="text-gray-600">Grab our Free Website Checklist and get started on the right track!</p>
                </div>
                <button onClick={() => setShowLeadMagnet(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleLeadMagnetSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold"
                >
                  Download Free Checklist
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
