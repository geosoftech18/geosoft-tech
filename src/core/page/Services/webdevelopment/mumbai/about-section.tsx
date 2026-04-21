"use client"

import { Card, CardContent } from "@/core/components/card"
import { Badge } from "@/core/components/badge"
import { Button}  from "@/core/components/ui/button"  
import { MapPin, Users, Lightbulb, Heart, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const teamMembers = [
  {
    name: "Arjun Mehta",
    role: "Founder & Lead Developer",
    image: "/professional-indian-male-developer-headshot.jpg",
    expertise: ["Full-stack Development", "System Architecture", "Team Leadership"],
  },
  {
    name: "Sneha Patel",
    role: "UI/UX Designer",
    image: "/professional-indian-female-designer-headshot.jpg",
    expertise: ["User Experience", "Visual Design", "Prototyping"],
  },
  {
    name: "Rohit Kumar",
    role: "SEO Specialist",
    image: "/professional-indian-male-seo-specialist-headshot.jpg",
    expertise: ["Search Optimization", "Content Strategy", "Analytics"],
  },
]

const values = [
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "We prioritize our clients' success and build long-term partnerships based on trust and results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description: "We stay ahead of trends and use cutting-edge technologies to deliver exceptional solutions.",
  },
  {
    icon: Zap,
    title: "Performance Driven",
    description: "Every website we build is optimized for speed, SEO, and conversion to maximize your ROI.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Based in Mumbai, we understand the local market and audience behavior intimately.",
  },
]

export function AboutSection() {
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0)

  const nextTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % teamMembers.length)
  }

  const prevTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const goToTeamSlide = (index: number) => {
    setCurrentTeamSlide(index)
  }

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Company Story */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
          GEO Softech: An Introduction
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Established in 2018, we stand as Mumbai's trusted allies in web innovation and construction. Dedicated to fortifying your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">Our Origin Story</h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
              <p>
              GEO Softech emerged from a singular vision: to empower Mumbai enterprises to excel in the digital sphere. Since 2018, 
              we've transmuted ideas into robust digital experiences—experiences engineered to generate tangible business outcomes
              </p>
              <p>
              What began as a compact cadre of enthusiastic developers has burgeoned into Mumbai's premier web architecture firm. 
              Trusted by over 300 ventures spanning diverse industries. Our blend of local insight, married with global benchmarks, positions us as the quintessential partner for your digital expedition.
              </p>
              <p>
              We transcend mere website creation – we incubate digital growth engines. Engines designed to propel our clients to triumph within Mumbai's fiercely competitive commercial ecosystem.
               Each undertaking is a chance to surpass expectations and cultivate enduring alliances.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#00bf62]" />
                <span className="text-xs sm:text-sm font-medium">Mumbai, Maharashtra</span>
              </div>
              <Badge variant="secondary" className="text-xs !bg-yellow-600 text-white">Est. 2018</Badge>
            </div>
          </div>

          <div>
            <img
              src="/services/webdevelopment/modern-office-space-in-mumbai-with-developers-work.jpg"
              alt="GEO Softech office"
              className="w-full h-60 sm:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border bg-[#00bf62]/5 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="p-2 sm:p-3 bg-[#00bf62]/10 rounded-lg w-fit mx-auto mb-3 sm:mb-4">
                    <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#00bf62]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-card-foreground mb-2 sm:mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}
