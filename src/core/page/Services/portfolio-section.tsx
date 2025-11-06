"use client"

import { motion } from "framer-motion"

import Image from "next/image"
import { useState, useCallback } from "react"
import { ExternalLink, TrendingUp, Zap, ShoppingCart } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    
    title: "Elima Waste Management",
    description: "Elima provides waste management and recycling solutions.",
    result: "85% Faster",
    resultType: "performance",
    tech: "Built with Next.js & Firebase",
    image: "/services/webdevelopment/elima.png",
    category: "Environmental",
    link: "https://elima.in",
    
  },
  {
    id: 2,
    title: "Texport International",
    description: "Texport International makes and exports woven & knitted garments like ladies’ and kids’ fashion from Mumbai, India",
    result: "3x Sales",
    resultType: "sales",
    tech: "Built with React & Node.js",
    image: "/services/webdevelopment/texport.png",
    category: "Apparel",
    link: "https://texportinternational.com",
  },
  {
    id: 3,
    title: "Genuine Filings",
    description: "Genuine Filings helps businesses with company registration, GST, tax compliance, and other legal filings.",
    result: "95% Faster",
    resultType: "performance",
    tech: "Built with Next.js & Stripe",
    image: "/services/webdevelopment/genuine-filings.png",
    category: "business services",
    link: "https://genuinefilings.com",
  },
  {
    id: 4,
    title: "Finmates",
    description: "Finmates provides outsourced financial management and advisory services — acting as a virtual CFO",
    result: "+180% Users",
    resultType: "growth",
    tech: "Built with Next.js & PostgreSQL",
    image: "/services/webdevelopment/finmates.png",
    category: "finance",
    link: "https://finmates.in",
  },
  {
    id: 5,
    title: "Gyan Vihar",
    description: "Property listing website with advanced search filters",
    result: "5x Conversions",
    resultType: "sales",
    tech: "Built with Next.js & MongoDB",
    image: "/services/webdevelopment/gyan-vihar.png",
    category: "Education",
    link: "https://gyanvihar.org",
  },
  {
    id: 6,
    title: "NH Studioz",
    description: "NH Studioz is an Indian content house distributing films and media, showcasing latest releases and movie catalogs.",
    result: "85% Faster",
    resultType: "performance",
    tech: "Built with Next.js & Firebase",
    image: "/services/webdevelopment/nh-studio.png",
    category: "Entertainment",
    link: "https://nhstudioz.tv",
  },
  {
    id: 7,
    title: "The Perfectory",
    description: "Complete redesign of online fashion store with modern UI/UX",
    result: "+220% Leads",
    resultType: "growth",
    tech: "Built with Next.js & WooCommerce",
    image: "/services/webdevelopment/theperfectory.png",
    category: "E-commerce",
    link: "https://theperfectory.com",
  },
  {
    id: 8,
    title: "Aviation Legacy",
    description: "Aviation Legacy provides flight support services — such as flight planning, permits, ground support, catering, and navigation assistance.",
    result: "85% Faster",
    resultType: "performance",
    tech: "Built with Next.js & Firebase",
    image: "/services/webdevelopment/aviation-legacy.png",
    category: "Air services",
    link: "https://avnlegacy.aero",
  },
  {
    id: 9,
    title: "DBS Mintek",
    description: "DBS Mintek is a BPO firm providing inbound & outbound call center, email, chat support, and customer service outsourcing.",
    result: "85% Faster",
    resultType: "performance",
    tech: "Built with Next.js & Firebase",
    image: "/services/webdevelopment/DBS-mintek.png",
    category: "telecom",
    link: "https://dbsmintek.com",
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

  const handleViewPortfolio = useCallback(() => {
    const message = encodeURIComponent(
      "Hi! I'm interested in viewing your full portfolio and discussing my project requirements.",
    )
    window.open(`https://wa.me/7776085112?text=${message}`, "_blank")
  }, [])

  const handleCardClick = useCallback((cardId: number) => {
    setClickedCard(prev => prev === cardId ? null : cardId)
  }, [])

  const handleHoverStart = useCallback((id: number) => {
    setHoveredCard(id)
  }, [])

  const handleHoverEnd = useCallback(() => {
    setHoveredCard(null)
  }, [])

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#072d7a] mb-6">
            Our Work{" "}
            <span className="bg-gradient-to-r from-[#00be62] to-[#01bd64] bg-clip-text text-transparent">
              Speaks for Itself
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how our designs have helped businesses grow online with measurable results and stunning visuals.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => {
            const isHovered = hoveredCard === item.id
            const isClicked = clickedCard === item.id
            const shouldAnimate = isHovered || isClicked
            const isPriority = index < 3 // First 3 images get priority loading

            return (
            <motion.div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer will-change-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.01 }}
              onHoverStart={() => handleHoverStart(item.id)}
              onHoverEnd={handleHoverEnd}
              onClick={() => handleCardClick(item.id)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <motion.div
                  className="relative w-full h-[150%] will-change-transform"
                  animate={{
                    y: shouldAnimate ? "-25%" : "0%",
                  }}
                  transition={{
                    duration: 1.5,
                    ease: [0.4, 0, 0.2, 1],
                    type: "tween",
                  }}
                  style={{ transform: 'translateZ(0)' }}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={isPriority}
                    loading={isPriority ? "eager" : "lazy"}
                    quality={85}
                    className="object-cover object-top"
                    style={{ 
                      transform: shouldAnimate ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
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

                {shouldAnimate && (
                  <div
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 transition-all duration-300"
                    style={{ 
                      opacity: shouldAnimate ? 1 : 0,
                      transform: shouldAnimate ? 'translate(-50%, 0)' : 'translate(-50%, 10px)'
                    }}
                  >
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-white transition-colors"
                    >
                      Visit Site
                    </a>
                  </div>
                )}

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none transition-opacity duration-300"
                  style={{ opacity: isHovered ? 1 : 0 }}
                />

                {/* Hover Content */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none transition-all duration-300"
                  style={{ 
                    transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isHovered ? 1 : 0
                  }}
                >
                  <h3 className="text-xl text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 mb-3 text-sm leading-relaxed">{item.description}</p>
                  <p className="text-blue-300 text-sm font-medium">{item.tech}</p>
                </div>
              </div>

              {/* Card Content (Always Visible) */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">{item.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.tech}</span>
                  <div
                    className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                  >
                    <ExternalLink 
                      className="w-5 h-5 hover:scale-110 transition-transform" 
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(item.link, "_blank")
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )})}
        </div>

        {/* CTA Button */}
        <div className="text-center flex justify-center">
          <button
            onClick={handleViewPortfolio}
            className="bg-gradient-to-r from-[#00be62] to-[#01bd64] hover:from-[#03c166] hover:to-[#03c166] text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center hover:scale-105 active:scale-95"
          >
            View Full Portfolio
            <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
