"use client"

import { Card, CardContent } from "@/core/components/card"
import { Button}  from "@/core/components/ui/button"
import {
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Target,
  MapPin,
  Palette,
  Search,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started with a vision to transform digital presence in Mumbai",
  },
  {
    year: "2020",
    title: "100+ Projects",
    description: "Reached our first major milestone with diverse client portfolio",
  },
  { year: "2022", title: "Team Expansion", description: "Grew our expert team to serve enterprise clients better" },
  { year: "2024", title: "300+ Success Stories", description: "Celebrating over 300 successful projects and counting" },
]

const achievements = [
  { icon: Users, number: "300+", label: "Projects Completed", color: "text-primary" },
  { icon: Award, number: "7+", label: "Years Experience", color: "text-secondary" },
  { icon: TrendingUp, number: "95%", label: "Client Satisfaction", color: "text-primary" },
  { icon: Target, number: "24/7", label: "Support Available", color: "text-secondary" },
]

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "Mumbai Retail Co.",
    text: "GEO Softech transformed our online presence completely. Our e-commerce sales increased by 150% within 6 months.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    company: "Tech Startup",
    text: "Professional team, excellent communication, and delivered exactly what we needed. Highly recommend for any business.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    company: "Manufacturing Firm",
    text: "Their local expertise in Mumbai market helped us connect better with our target audience. Great ROI on our investment.",
    rating: 5,
  },
]

const whyChooseUs = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Being active in Pune, we understand the startup ecosystem, SMEs, and enterprise needs.",
  },
  {
    icon: Palette,
    title: "Creative UI/UX Designs ",
    description: "We build websites that are user-friendly, mobile-friendly, and visually engaging.",
  },
  {
    icon: Search,
    title: "SEO-Optimized",
    description: " Every site is built with search engine optimization best practices.",
  },
  {
    icon: Heart,
    title: "End-to-End Support",
    description: "From website designing to SEO, digital marketing, and e-commerce solutions, we provide everything under one roof. ",
  },
  {
    icon: Award,
    title: "Affordable Pricing ",
    description: "Packages designed for startups, small businesses, and corporates.",
  },
]

const benefits = [
  "Boost Online Visibility – Our websites are optimized for Google ranking and SEO performance.",
  "Increase Conversions – User-centric design improves engagement and lead generation.",
  "Future-Ready Technology – Built using Next.js, Node.js, and modern CMS platforms.",
  "Custom Solutions – Websites tailored for startups, local businesses, and enterprises.",
  "Affordable Packages – Cost-effective services with high ROI for Pune-based businesses. ",
]

export function ExpertiseSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [benefitsSlide, setBenefitsSlide] = useState(0) // Added state for benefits carousel
  const [timelineSlide, setTimelineSlide] = useState(0) // Added state for timeline carousel
  const itemsPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }

  const websiteBenefits = [
    "Build brand credibility in competitive markets ",
    "Attract local and global customers ",
    "Generate consistent leads and sales ",
    "Provide a seamless customer experience ",
    "Stay ahead with digital-first strategies ",
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(whyChooseUs.length / itemsPerSlide.desktop))
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(whyChooseUs.length / itemsPerSlide.desktop)) %
        Math.ceil(whyChooseUs.length / itemsPerSlide.desktop),
    )
  }

  const nextBenefitsSlide = () => {
    setBenefitsSlide((prev) => (prev + 1) % Math.ceil(websiteBenefits.length / 3))
  }

  const prevBenefitsSlide = () => {
    setBenefitsSlide(
      (prev) => (prev - 1 + Math.ceil(websiteBenefits.length / 3)) % Math.ceil(websiteBenefits.length / 3),
    )
  }

  const nextTimelineSlide = () => {
    setTimelineSlide((prev) => (prev + 1) % Math.ceil(milestones.length / 3))
  }

  const prevTimelineSlide = () => {
    setTimelineSlide((prev) => (prev - 1 + Math.ceil(milestones.length / 3)) % Math.ceil(milestones.length / 3))
  }

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Why Choose Us */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
          Why Choose GEO Softech as Your Web Design Company in Pune? 
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Finding the right web design agency can be challenging, but with GEO Softech,
           you get a partner who understands both technology and business growth. 
          </p>
        </div>

        <div className="relative mb-12 sm:mb-16 lg:mb-20">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {/* Mobile: 1 item per slide */}
              <div className="flex md:hidden w-full">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="text-center border-border bg-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6 sm:p-8">
                        <div className="p-3 sm:p-4 bg-[#00bf62]/10 rounded-xl w-fit mx-auto mb-4 sm:mb-6">
                          <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-[#00bf62]" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">{item.title}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Tablet: 2 items per slide */}
              <div className="hidden md:flex lg:hidden w-full">
                {Array.from({ length: Math.ceil(whyChooseUs.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 flex gap-6 px-2">
                    {whyChooseUs.slice(slideIndex * 2, slideIndex * 2 + 2).map((item, index) => (
                      <div key={index} className="w-1/2">
                        <Card className="text-center border-border bg-card hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                          <CardContent className="p-6">
                            <div className="p-3 bg-[#00bf62]/10 rounded-xl w-fit mx-auto mb-4">
                              <item.icon className="h-8 w-8 text-[#00bf62]" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Desktop: 3 items per slide */}
              <div className="hidden lg:flex w-full">
                {Array.from({ length: Math.ceil(whyChooseUs.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 flex gap-8 px-2">
                    {whyChooseUs.slice(slideIndex * 3, slideIndex * 3 + 3).map((item, index) => (
                      <div key={index} className="w-1/3">
                        <Card className="text-center border-border bg-card hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                          <CardContent className="p-6">
                            <div className="p-3 bg-[#00bf62]/10 rounded-xl w-fit mx-auto mb-4">
                              <item.icon className="h-8 w-8 text-[#00bf62]" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-2 hover:bg-[#00bf62] hover:text-white transition-colors bg-transparent"
            >
              <ChevronLeft className="h-4 w-4 hover:text-white" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(whyChooseUs.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-[#00bf62]" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-2 hover:bg-[#00bf62] hover:text-white transition-colors bg-transparent"
            >
              <ChevronRight className="h-4 w-4 hover:text-white" />
            </Button>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">
            Benefits of Partnering with GEO Softech
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#00bf62] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 lg:mb-20 bg-muted/30 rounded-2xl p-6 sm:p-8 md:p-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6 text-center">
          Why Pune Businesses Need a Professional Website 
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-center max-w-3xl mx-auto">
          Pune is one of India’s fastest-growing IT hubs and startup cities. Whether you are a tech company, e-commerce brand, 
          or local service provider, a professional website helps you: 
          </p>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${benefitsSlide * 100}%)`,
                }}
              >
                {/* Mobile: 1 item per slide */}
                <div className="flex md:hidden w-full">
                  {websiteBenefits.map((benefit, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="text-center bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300">
                        <div className="p-4 bg-[#00bf62]/10 rounded-full w-fit mx-auto mb-4">
                          <TrendingUp className="h-8 w-8 text-[#00bf62]" />
                        </div>
                        <p className="text-base font-semibold text-foreground">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tablet: 2 items per slide */}
                <div className="hidden md:flex lg:hidden w-full">
                  {Array.from({ length: Math.ceil(websiteBenefits.length / 2) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 flex gap-6 px-4">
                      {websiteBenefits.slice(slideIndex * 2, slideIndex * 2 + 2).map((benefit, index) => (
                        <div key={index} className="w-1/2">
                          <div className="text-center bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 h-full">
                            <div className="p-3 bg-[#00bf62]/10 rounded-full w-fit mx-auto mb-4">
                              <TrendingUp className="h-6 w-6 text-[#00bf62]" />
                            </div>
                            <p className="text-sm font-semibold text-foreground">{benefit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Desktop: 3 items per slide */}
                <div className="hidden lg:flex w-full">
                  {Array.from({ length: Math.ceil(websiteBenefits.length / 4) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 flex gap-6 px-4">
                      {websiteBenefits.slice(slideIndex * 4, slideIndex * 4 + 4).map((benefit, index) => (
                        <div key={index} className="w-1/3">
                          <div className="text-center bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:scale-105 h-full">
                            <div className="p-3 bg-[#00bf62]/10 rounded-full w-fit mx-auto mb-4">
                              <TrendingUp className="h-6 w-6 text-[#00bf62]" />
                            </div>
                            <p className="text-sm font-semibold text-foreground">{benefit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevBenefitsSlide}
                className="rounded-full hover:bg-[#00bf62]/10 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-[#00bf62]" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(websiteBenefits.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setBenefitsSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      benefitsSlide === index ? "bg-[#00bf62] w-6" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextBenefitsSlide}
                className="rounded-full hover:bg-[#00bf62]/10 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-[#00bf62]" />
              </Button>
            </div>
          </div>
        </div>

        {/* Company Journey */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Our Journey Since 2018</h3>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${timelineSlide * 100}%)`,
                }}
              >
                {/* Mobile: 1 item per slide */}
                <div className="flex md:hidden w-full">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="relative bg-gradient-to-br from-[#00bf62]/5 to-secondary/5 rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                        {/* Timeline connector for mobile */}
                        {index < milestones.length - 1 && (
                          <div className="absolute -bottom-4 left-1/2 w-0.5 h-8 bg-[#00bf62]/30 transform -translate-x-1/2"></div>
                        )}

                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00bf62]/10 rounded-full mb-6 border-4 border-[#00bf62]/20">
                            <span className="text-2xl font-bold text-[#00bf62]">{milestone.year}</span>
                          </div>
                          <h4 className="text-xl font-bold text-foreground mb-4">{milestone.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tablet: 2 items per slide */}
                <div className="hidden md:flex lg:hidden w-full">
                  {Array.from({ length: Math.ceil(milestones.length / 2) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 flex gap-6 px-4">
                      {milestones.slice(slideIndex * 2, slideIndex * 2 + 2).map((milestone, index) => (
                        <div key={index} className="w-1/2 relative">
                          <div className="bg-gradient-to-br from-[#00bf62]/5 to-secondary/5 rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                            {/* Timeline connector for tablet */}
                            {slideIndex * 2 + index < milestones.length - 1 && index === 0 && (
                              <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-[#00bf62]/30 transform -translate-y-1/2"></div>
                            )}

                            <div className="text-center">
                              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#00bf62]/10 rounded-full mb-4 border-3 border-[#00bf62]/20">
                                <span className="text-lg font-bold text-[#00bf62]">{milestone.year}</span>
                              </div>
                              <h4 className="text-lg font-bold text-foreground mb-3">{milestone.title}</h4>
                              <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Desktop: 3 items per slide */}
                <div className="hidden lg:flex w-full">
                  {Array.from({ length: Math.ceil(milestones.length / 4) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 flex gap-8 px-4">
                      {milestones.slice(slideIndex * 4, slideIndex * 4 + 4).map((milestone, index) => (
                        <div key={index} className="w-1/3 relative">
                          <div className="bg-gradient-to-br from-[#00bf62]/5 to-secondary/5 rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                            {/* Timeline connector for desktop */}
                            {slideIndex * 3 + index < milestones.length - 1 && index < 2 && (
                              <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-[#00bf62]/30 transform -translate-y-1/2"></div>
                            )}

                            <div className="text-center">
                              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#00bf62]/10 rounded-full mb-4 border-3 border-[#00bf62]/20">
                                <span className="text-lg font-bold text-[#00bf62]">{milestone.year}</span>
                              </div>
                              <h4 className="text-lg font-bold text-foreground mb-3">{milestone.title}</h4>
                              <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTimelineSlide}
                className="rounded-full border-2 hover:bg-[#00bf62] hover:text-white transition-all duration-300 bg-transparent shadow-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Timeline Progress Indicator */}
              <div className="flex gap-3">
                {Array.from({ length: Math.ceil(milestones.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTimelineSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      timelineSlide === index
                        ? "bg-[#00bf62] w-8 shadow-md"
                        : "bg-muted-foreground/30 w-3 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTimelineSlide}
                className="rounded-full border-2 hover:bg-[#00bf62] hover:text-white transition-all duration-300 bg-transparent shadow-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        {/* <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <CheckCircle key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-[#00bf62] fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
