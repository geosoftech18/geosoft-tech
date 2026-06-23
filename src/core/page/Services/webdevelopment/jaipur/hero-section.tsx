"use client"
import { Button } from "@/core/components/ui/button"
import { ArrowRight, MapPin, Users, Award } from "lucide-react"
import { useState } from "react"
import { ConsultationForm } from "@/core/components/ConsultationForm"

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
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-[#00bf62]" />
            <span className="text-sm font-medium text-muted-foreground">Jaipur, India</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
            GEO Softech – Professional <span className="text-[#00bf62]">Website Designing Company </span> in Jaipur
          </h1>

          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-3xl leading-relaxed">
          This region is not only the Pink City of India but also a growing hub for startups, IT companies, and online storefronts in the area, prominently showcased through a dynamic web design market landscape, including numerous local firms that cater to these needs. Central to the success of these ventures is the understanding of responsive design importance for regional projects, particularly in the realm of online storefront development, which has gained significant traction. In this competitive environment, responsive design proves essential for ensuring that sites perform optimally across various devices—an absolute necessity for attracting and retaining customers. By adopting this design approach, local online ventures can significantly enhance the user experience and engagement—factors that are crucial for success in the digital marketplace. A professional website that embraces responsive design is indispensable for maximizing reach and conversion rates, empowering businesses, supported by savvy regional designers, to establish a strong online presence and effectively compete with both local and global players in the realm of online commerce. </p>

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
                <div className="text-xl sm:text-2xl font-bold text-foreground">300+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Successful Projects</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#00bf62]/10 rounded-lg">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-[#00bf62]" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">7+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#00bf62]/10 rounded-lg">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#00bf62]" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">Jaipur</div>
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
