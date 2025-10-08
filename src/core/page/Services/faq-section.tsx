"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, MessageCircle } from "lucide-react"


const faqData = [
  {
    id: 1,
    question: "How long will it take?",
    answer: "Most business websites take 2–4 weeks. Complex e-commerce/custom projects may take 6–8 weeks.",
  },
  {
    id: 2,
    question: "What's the cost?",
    answer:
      "Pricing depends on your project. We offer flexible packages, from small business websites to advanced custom builds, with transparent quotes.",
  },
  {
    id: 3,
    question: "Do you provide post-launch support?",
    answer: "Yes, we provide ongoing maintenance and support packages, including updates, backups, and bug fixes.",
  },
  {
    id: 4,
    question: "Will my website be SEO-optimized?",
    answer: "Absolutely. Every website we build is SEO-friendly, optimized for speed, mobile, and search engines.",
  },
]

export default function FAQSection() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([])

  const toggleFAQ = (id: number) => {
    setOpenFAQs((prev) => (prev.includes(id) ? prev.filter((faqId) => faqId !== id) : [...prev, id]))
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hi! I have some questions about your website design and development services. Can we discuss my project?",
    )
    const phoneNumber = "7776085112" // Replace with your actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Got questions? We've got answers.</p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-16">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openFAQs.includes(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openFAQs.includes(faq.id) ? (
                      <Minus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openFAQs.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center md:flex base:flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have more questions?</h3>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={handleWhatsAppContact}
              className="bg-gradient-to-r from-[#042c7f] to-[#04ba62] hover:from-[#04ba62] hover:to-[#042c7f] text-white px-8 py-3 rounded-xl ml-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2 text-white" />
              Let's Talk →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
