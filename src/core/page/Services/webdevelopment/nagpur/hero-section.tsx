"use client"
import { ConsultationForm } from "@/core/components/ConsultationForm"
import { Button}  from "@/core/components/ui/button"
import { Breadcrumb } from "@/core/components/Breadcrumb"
import { ArrowRight, MapPin, Users, Award } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  return (
    <section id="home" className="relative py-12 sm:py-16 md:py-20 lg:py-32 mt-20 md:mt-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/services/webdevelopment/mumbai-skyline-with-modern-buildings-and-tech-work.jpg"
          alt="Mumbai skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <Breadcrumb
            className="mb-4"
            items={[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Web Development', href: '/services/webdevelopment' },
              { name: 'Nagpur', href: '/services/webdevelopment/development-in-nagpur' },
            ]}
          />
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-[#00bf62]" />
            <span className="text-sm font-medium text-muted-foreground">Nagpur, India</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
            GEO Softech – Professional <span className="text-[#00bf62]">Website Designing Company </span> in Nagpur That Builds Sites to Grow Your Business 
          </h1>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-3xl leading-relaxed">
          Your website is the first thing potential customers judge you by. A slow, outdated, or poorly designed site doesn't just look bad — it actively loses you business. <br />

           At GEO Softech, we build custom, responsive, and SEO-friendly websites for Nagpur businesses that are designed to rank on Google and convert visitors into paying customers. Not template shops. Not cookie-cutter designs. Websites built around your specific business goals. 
 </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
          <Button 
              size="lg" 
              className="bg-[#00bf62] hover:bg-[#00bf62]/90 text-primary-foreground text-sm sm:text-base"
              onClick={() => setIsConsultationOpen(true)}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </Button>
            <Button size="lg" variant="outline" className="text-sm sm:text-base">
              View Our Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#00bf62]/10 rounded-lg">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#00bf62]" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">360+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Successful Projects</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#00bf62]/10 rounded-lg">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-[#00bf62]" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">8+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#00bf62]/10 rounded-lg">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#00bf62]" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">Nagpur</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Based & Focused</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form Modal */}
      <ConsultationForm 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </section>
  )
}
