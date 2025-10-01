"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const frontendTechnologies = [
  {
    name: "React",
    logo: "/services/webdevelopment/react-logo-blue-circle.png",
    category: "Library",
    description: "Component-based UI library",
  },
  {
    name: "Next.js",
    logo: "/services/webdevelopment/next-js-logo-black-and-white.png",
    category: "Framework",
    description: "Full-stack React framework",
  },
  {
    name: "Angular",
    logo: "/services/webdevelopment/angular-logo-red-shield.png",
    category: "Framework",
    description: "Comprehensive SPA framework",
  },
  {
    name: "TypeScript",
    logo: "/services/webdevelopment/typescript-logo-blue-ts.png",
    category: "Language",
    description: "Typed JavaScript superset",
  },
  {
    name: "TailwindCSS",
    logo: "/services/webdevelopment/tailwindcss-logo-teal-wind.png",
    category: "CSS Framework",
    description: "Utility-first CSS framework",
  },
  {
    name: "HTML5",
    logo: "/services/webdevelopment/html5-logo-orange-shield.png",
    category: "Markup",
    description: "Modern web markup language",
  },
  {
    name: "CSS3",
    logo: "/services/webdevelopment/css3-logo-blue-shield.png",
    category: "Styling",
    description: "Advanced styling language",
  },
  {
    name: "JavaScript",
    logo: "/services/webdevelopment/javascript-logo-yellow-square.png",
    category: "Language",
    description: "Dynamic programming language",
  },
]

const backendTechnologies = [
  {
    name: "Node.js",
    logo: "/services/webdevelopment/node-js-logo-green-hexagon.png",
    category: "Runtime",
    description: "JavaScript server runtime",
  },
  {
    name: "Python",
    logo: "/services/webdevelopment/python-logo-blue-yellow-snake.png",
    category: "Language",
    description: "Versatile programming language",
  },
  {
    name: "Java",
    logo: "/services/webdevelopment/java-logo-red-coffee-cup.png",
    category: "Language",
    description: "Enterprise-grade language",
  },
  {
    name: "Go",
    logo: "/services/webdevelopment/go-golang-logo-blue-gopher.png",
    category: "Language",
    description: "High-performance language",
  },
  {
    name: "PHP",
    logo: "/services/webdevelopment/php-logo-purple-elephant.png",
    category: "Language",
    description: "Web development language",
  },
  {
    name: "WordPress",
    logo: "/services/webdevelopment/wordpress-logo-blue-w.png",
    category: "CMS",
    description: "Content management system",
  },
]

const databaseTechnologies = [
  {
    name: "MySQL",
    logo: "/services/webdevelopment/mysql-logo-orange-dolphin.png",
    category: "RDBMS",
    description: "A widely used open-source relational database management system (RDBMS)",
  },
  {
    name: "PostgreSQL",
    logo: "/services/webdevelopment/postgresql-logo-blue-elephant.png",
    category: "RDBMS",
    description:
      "A powerful and highly extensible open-source RDBMS, known for its advanced features and data integrity",
  },
  {
    name: "MongoDB",
    logo: "/services/webdevelopment/mongodb-logo-green-leaf.png",
    category: "NoSQL",
    description: "A popular NoSQL document-oriented database, known for its flexibility and scalability",
  },
  {
    name: "Microsoft SQL Server",
    logo: "/services/webdevelopment/microsoft-sql-server-logo-red-database.png",
    category: "RDBMS",
    description: "A commercial RDBMS developed by Microsoft, commonly used in enterprise environments",
  },
  {
    name: "Redis",
    logo: "/services/webdevelopment/redis-logo-red-cube.png",
    category: "Cache/Store",
    description:
      "An in-memory data structure store, often used as a cache or message broker due to its high performance",
  },
]

const ecommerceTechnologies = [
  {
    name: "Shopify",
    logo: "/services/webdevelopment/shopify-logo-green-shopping-bag.png",
    category: "E-commerce",
    description: "Complete commerce platform",
  },
  {
    name: "WooCommerce",
    logo: "/services/webdevelopment/woocommerce-logo-purple-shopping-cart.png",
    category: "E-commerce",
    description: "WordPress e-commerce plugin",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function TechnologyStackSection() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "database" | "CMS">("all")
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const getCurrentTechnologies = () => {
    switch (activeTab) {
      case "all":
        return [...frontendTechnologies, ...backendTechnologies, ...databaseTechnologies, ...ecommerceTechnologies]
      case "frontend":
        return frontendTechnologies
      case "backend":
        return backendTechnologies
      case "database":
        return databaseTechnologies
      case "CMS":
        return ecommerceTechnologies
      default:
        return frontendTechnologies 
    }
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [activeTab])

  const technologies = getCurrentTechnologies()
  const itemsPerSlide = 10
  const totalSlides = Math.ceil(technologies.length / itemsPerSlide)
  const startIndex = currentSlide * itemsPerSlide
  const paginatedTechnologies = technologies.slice(startIndex, startIndex + itemsPerSlide)

  const canPaginate = totalSlides > 1
  const goPrev = () => setCurrentSlide((prev) => Math.max(0, prev - 1))
  const goNext = () => setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1))

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Technology
            <span className="relative inline-block ml-3">
              <span className="bg-gradient-to-r from-[#00be66]  to-[#54ca97] bg-clip-text text-transparent">
                Arsenal
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00be66]  to-[#54ca97] rounded-full"></div>
            </span>
          </h2>
          <p className="md:text-xl text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies and frameworks to build scalable, secure, and high-performance solutions.
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {canPaginate && (
            <button
              onClick={goPrev}
              aria-label="Previous technologies"
              className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-950 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={currentSlide === 0}
            >
              ‹
            </button>
          )}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-2 shadow-xl border border-white/20">
            <div className="flex flex-wrap justify-center gap-2">
              {[{key: "all", label: "All", icon: "🔍"},
                { key: "frontend", label: "Frontend", icon: "🎨" },
                { key: "backend", label: "Backend", icon: "⚙️" },
                { key: "database", label: "Database Systems", icon: "🗄️" },
                { key: "CMS", label: "CMS", icon: "🛒" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`relative px-4 md:px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 text-sm md:text-base ${
                    activeTab === tab.key
                      ? "bg-gradient-to-r from-[#2dca81] to-[#adece9] text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="whitespace-nowrap">{tab.label}</span>
                  {activeTab === tab.key && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#2dca81] to-[#adece9] rounded-xl"
                      layoutId="activeTab"
                      style={{ zIndex: -1 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          {canPaginate && (
            <button
              onClick={goNext}
              aria-label="Next technologies"
              className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={currentSlide >= totalSlides - 1}
            >
              ›
            </button>
          )}
        </motion.div>

        <motion.div
          key={activeTab}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {paginatedTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:border-blue-200/50 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-300 rounded-2xl" />

                <div className="relative flex flex-col items-center space-y-4">
                  {/* Logo */}
                  <div className="relative w-16 h-16 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">
                    <Image
                      src={tech.logo || "/services/webdevelopment/placeholder.svg"}
                      alt={`${tech.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Tech Info */}
                  <div className="text-center">
                    <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-medium mb-2 bg-blue-50 px-2 py-1 rounded-full">
                      {tech.category}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Technical Support</div>
            </div>
          </div>

          <p className="text-gray-700 font-medium flex items-center justify-center gap-2 text-lg">
            <span className="text-2xl">🚀</span>
            Built with scalable, secure, and future-proof technologies
          </p>
        </motion.div>
      </div>
    </section>
  )
}
