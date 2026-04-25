import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import { ServicesSection } from "./services-section"
import { ExpertiseSection } from "./expertise-section"
import Portfoliosection from "./portfolio-section1"
import { FAQSection } from "./faq-section"
import { CTASection } from "./cta-section"

import HomeTestimonialsSection from "@/core/page/Home/Testimonials"

export default function Home() {
  return (
    <main className="min-h-screen">
    
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <HomeTestimonialsSection />
      <Portfoliosection/>
      {/* <PortfolioSection /> */}
      <AboutSection />
      <FAQSection />
      <CTASection />
     
    </main>
  )
}
