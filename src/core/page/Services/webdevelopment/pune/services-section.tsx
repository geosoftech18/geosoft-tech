"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/core/components/card"
import { Button}  from "@/core/components/ui/button"
import {
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  Code,
  Palette,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Corporate Website Design",
    description:
      "Professional websites for companies, institutions, and brands. ",
    features: ["Professional UI/UX", "Brand Integration", "Content Management", "Performance Optimized"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website Development",
    description:
      "Scalable online stores with secure payment gateways, inventory management, and conversion optimization.",
    features: ["WooCommerce", "Shopify", "Magento", "Custom Solutions"],
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Mobile-friendly layouts that adapt to all screen sizes, ensuring optimal user experience across devices.",
    features: ["Mobile-First Design", "Cross-Browser Compatible", "Touch Optimized", "Fast Loading"],
  },
  {
    icon: Code,
    title: "WordPress & CMS Development ",
    description: "Flexible and easy-to-manage websites for all industries. ",
    features: ["WordPress", "Custom CMS", "Easy Management", "Scalable Architecture"],
  },
  {
    icon: Search,
    title: "Landing Page Design",
    description: "High-converting pages for marketing and lead generation campaigns that maximize your ROI.",
    features: ["Conversion Focused", "A/B Testing", "Lead Generation", "Campaign Integration"],
  },
  {
    icon: Palette,
    title: "Website Redesign Services",
    description: "Modernize outdated websites with new features, fresh UI, and enhanced user experience.",
    features: ["Modern UI/UX", "Performance Boost", "SEO Enhancement", "Mobile Optimization"],
  },
  {
    icon: Settings,
    title: "Website Maintenance & Support",
    description: "Regular updates, bug fixing, performance optimization, and ongoing technical support.",
    features: ["Regular Updates", "Bug Fixes", "Performance Monitoring", "24/7 Support"],
  },
]

export function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [itemsPerSlide, setItemsPerSlide] = useState(1)
  const [totalSlides, setTotalSlides] = useState(services.length)

  // Update items per slide based on screen size
  React.useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3)
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2)
      } else {
        setItemsPerSlide(1)
      }
    }

    updateItemsPerSlide()
    window.addEventListener('resize', updateItemsPerSlide)
    return () => window.removeEventListener('resize', updateItemsPerSlide)
  }, [])

  React.useEffect(() => {
    setTotalSlides(Math.ceil(services.length / itemsPerSlide))
  }, [itemsPerSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
          Our Website Designing Services in Pune 
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          At GEO Softech, we offer a wide range of web design and 
          development services tailored for businesses of all sizes
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
                    {services
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((service, index) => (
                        <Card
                          key={slideIndex * itemsPerSlide + index}
                          className="group hover:shadow-xl hover:scale-105 transition-all duration-500 border-border bg-card/80 backdrop-blur hover:bg-card"
                        >
                          <CardHeader>
                            <div className="p-3 bg-[#00bf62]/10 rounded-lg w-fit mb-4 group-hover:bg-[#00bf62]/20 group-hover:scale-110 transition-all duration-300">
                              <service.icon className="h-8 w-8 text-[#00bf62] group-hover:text-[#00bf62]/90" />
                            </div>
                            <CardTitle className="text-lg sm:text-xl font-bold text-card-foreground group-hover:text-[#00bf62] transition-colors duration-300">
                              {service.title}
                            </CardTitle>
                            <CardDescription className="text-sm sm:text-base text-muted-foreground group-hover:text-[#00bf62]/80 transition-colors duration-300">
                              {service.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 mb-6">
                              {service.features.map((feature, featureIndex) => (
                                <li
                                  key={featureIndex}
                                  className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300"
                                >
                                  <div className="w-1.5 h-1.5 bg-[#00bf62] rounded-full mr-3 group-hover:bg-[#00bf62]/80 group-hover:scale-125 transition-all duration-300"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <Button
                              variant="outline"
                              className="w-full group-hover:bg-[#00bf62] group-hover:text-white group-hover:border-[#00bf62] transition-all duration-300 bg-transparent hover:shadow-md"
                            >
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-background/80 backdrop-blur border border-border rounded-full p-2 sm:p-3 hover:bg-background hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous services"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-background/80 backdrop-blur border border-border rounded-full p-2 sm:p-3 hover:bg-background hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next services"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
          </button>

          <div className="flex justify-center mt-8 sm:mt-12 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-8 h-3 bg-[#00bf62] shadow-lg"
                    : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-125"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
