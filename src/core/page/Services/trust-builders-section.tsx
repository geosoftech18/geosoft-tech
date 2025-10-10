"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

import { CheckCircle, Clock, Code, TrendingUp, Star } from "lucide-react"

// Custom hook for counter animation
const useCounter = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(start + (end - start) * easeOutQuart)
      
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible, end, start, duration])

  return { count, ref }
}

const trustMetrics = [
  {
    icon: CheckCircle,
    endValue: 300,
    suffix: "+",
    label: "Successful Projects",
    description: "Delivered on time and within budget",
    duration: 2500,
  },
  {
    icon: Clock,
    endValue: 7,
    suffix: "+",
    label: "Years of Experience",
    description: "Industry expertise and proven track record",
    duration: 2000,
  },
  {
    icon: Code,
    endValue: 15,
    suffix: "+",
    label: "Technologies Mastered",
    description: "Next.js, Node.js, WordPress, WooCommerce & more",
    duration: 2200,
  },
  {
    icon: TrendingUp,
    endValue: 2.5,
    suffix: "x",
    label: "Average Conversion Increase",
    description: "Measurable results for our clients",
    duration: 3000,
  },
]

// Trust Metric Counter Component
const TrustMetricCounter = ({ 
  metric, 
  index 
}: { 
  metric: typeof trustMetrics[0]
  index: number 
}) => {
  const { count, ref } = useCounter(metric.endValue, metric.duration)

  return (
    <motion.div
      key={index}
      className="text-center group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative mb-6">
        {/* Gradient Circle Background */}
        <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
          <metric.icon className="w-10 h-10 text-blue-700" />
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
      </div>

      <div className="space-y-2" ref={ref}>
        <div className="text-4xl md:text-5xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
          {count}{metric.suffix}
        </div>
        <div className="text-lg font-semibold text-slate-200">{metric.label}</div>
        <div className="text-sm text-slate-300 max-w-xs mx-auto lg:block md:block hidden">{metric.description}</div>
      </div>
    </motion.div>
  )
}

const clientLogos = [
  { name: "Lodha Group", logo: "/partners/p1.webp" },
    { name: "Slim feel", logo: "/partners/p2.webp" },
    { name: "framezOmania", logo: "/partners/p3.webp" },
  { name: "Dheera", logo: "/partners/p4.webp" },
  { name: "Stationery", logo: "/partners/p5.webp" },
  { name: "Digital Dhaba", logo: "/partners/p6.webp" },
  { name: "Muscle", logo: "/partners/p7.webp" },
]

export default function TrustBuildersSection() {
  const handleCTAClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in building a website. Can we discuss my project requirements?",
    )
    window.open(`https://wa.me/7776085112?text=${message}`, "_blank")
  }

  return (
    <section className="relative py-20 bg-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Why Businesses Choose Us</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Proven expertise, reliable delivery, and measurable results.
          </p>
        </motion.div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => (
            <TrustMetricCounter key={index} metric={metric} index={index} />
          ))}
        </div>

        {/* Client Logos Strip */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <p className="text-slate-300 text-sm uppercase tracking-wider mb-6">
              Trusted by startups, SMEs, and global enterprises
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-4">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110"
               
            
               
              >
                <img
                  src={client.logo || "/services/webdevelopment/placeholder.svg"}
                  alt={`${client.name} logo`}
                  className="h-10 md:h-10 w-auto "
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-[#adece9]  to-[#adece9]  text-[#23498b] px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Build Your Website →
            </button>
          </motion.div>

          <div className="flex items-center justify-center gap-2 mt-4  text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-[#b1afb0]">Free consultation & project estimate</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
