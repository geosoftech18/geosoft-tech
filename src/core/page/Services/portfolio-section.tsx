"use client"

import { motion } from "framer-motion"

import Image from "next/image"
import { useState } from "react"
import { ExternalLink, TrendingUp, Zap, ShoppingCart } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Store Redesign",
    description: "Complete redesign of online fashion store with modern UI/UX",
    result: "+220% Leads",
    resultType: "growth",
    tech: "Built with Next.js & WooCommerce",
    image: "/services/webdevelopment/modern-ecommerce-fashion-store-website-design.png",
    category: "E-commerce",
  },
  {
    id: 2,
    title: "SaaS Dashboard Platform",
    description: "Clean, intuitive dashboard for project management software",
    result: "3x Sales",
    resultType: "sales",
    tech: "Built with React & Node.js",
    image: "/services/webdevelopment/modern-saas-dashboard-interface-design.png",
    category: "SaaS",
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "Mobile-first restaurant website with online ordering system",
    result: "95% Faster",
    resultType: "performance",
    tech: "Built with Next.js & Stripe",
    image: "/services/webdevelopment/modern-restaurant-website-design-with-online-order.png",
    category: "Restaurant",
  },
  {
    id: 4,
    title: "Healthcare Portal",
    description: "Patient management system with appointment booking",
    result: "+180% Users",
    resultType: "growth",
    tech: "Built with Next.js & PostgreSQL",
    image: "/services/webdevelopment/modern-healthcare-patient-portal-website-design.png",
    category: "Healthcare",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description: "Property listing website with advanced search filters",
    result: "5x Conversions",
    resultType: "sales",
    tech: "Built with Next.js & MongoDB",
    image: "/services/webdevelopment/modern-real-estate-property-listing-website-design.png",
    category: "Real Estate",
  },
  {
    id: 6,
    title: "Educational Platform",
    description: "Online learning platform with course management system",
    result: "85% Faster",
    resultType: "performance",
    tech: "Built with Next.js & Firebase",
    image: "/services/webdevelopment/modern-educational-online-learning-platform-design.png",
    category: "Education",
  },
]

const getResultIcon = (type: string) => {
  switch (type) {
    case "growth":
      return <TrendingUp className="w-4 h-4" />
    case "sales":
      return <ShoppingCart className="w-4 h-4" />
    case "performance":
      return <Zap className="w-4 h-4" />
    default:
      return <TrendingUp className="w-4 h-4" />
  }
}

const getResultGradient = (type: string) => {
  switch (type) {
    case "growth":
      return "bg-gradient-to-r from-green-500 to-emerald-500"
    case "sales":
      return "bg-gradient-to-r from-purple-500 to-pink-500"
    case "performance":
      return "bg-gradient-to-r from-blue-500 to-cyan-500"
    default:
      return "bg-gradient-to-r from-green-500 to-emerald-500"
  }
}

export default function PortfolioSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [clickedCard, setClickedCard] = useState<number | null>(null)

  const handleViewPortfolio = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in viewing your full portfolio and discussing my project requirements.",
    )
    window.open(`https://wa.me/7776085112?text=${message}`, "_blank")
  }

  const handleCardClick = (cardId: number) => {
    setClickedCard(clickedCard === cardId ? null : cardId)
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#072d7a] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Work{" "}
            <span className="bg-gradient-to-r from-[#00be62] to-[#01bd64] bg-clip-text text-transparent">
              Speaks for Itself
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See how our designs have helped businesses grow online with measurable results and stunning visuals.
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(item.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => handleCardClick(item.id)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="relative w-full h-[150%]"
                  animate={{
                    y: hoveredCard === item.id || clickedCard === item.id ? "-25%" : "0%",
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    type: "tween",
                  }}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>

                {/* Result Tag */}
                <div className="absolute top-4 right-4 z-10">
                  <div
                    className={`${getResultGradient(item.resultType)} text-white px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg`}
                  >
                    {getResultIcon(item.resultType)}
                    {item.result}
                  </div>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>

                {(hoveredCard === item.id || clickedCard === item.id) && (
                  <motion.div
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      Full Page View
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      Visit
                    </div>
                  </motion.div>
                )}

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover Content */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: hoveredCard === item.id ? 0 : 20,
                    opacity: hoveredCard === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 mb-3 text-sm leading-relaxed">{item.description}</p>
                  <p className="text-blue-300 text-sm font-medium">{item.tech}</p>
                </motion.div>
              </div>

              {/* Card Content (Always Visible) */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.tech}</span>
                  <motion.div
                    className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={handleViewPortfolio}
              className="bg-gradient-to-r from-[#00be62] to-[#01bd64] hover:from-[#03c166] hover:to-[#03c166] text-white px-8  rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group flex"
            >
              View Full Portfolio
              <motion.div
                className="ml-2 group-hover:translate-x-1 transition-transform text-white"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                →
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
