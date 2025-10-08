
import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import { ServicesSection } from "./services-section"
import { ExpertiseSection } from "./expertise-section"
import Portfoliosection from "../nagpur/portfolio-section1"
import { FAQSection } from "./faq-section"
import { CTASection } from "./cta-section"

import  TestimonialsSection  from "../nagpur/testimonials-section"

export default function Home() {
  return (
    <main className="min-h-screen">
    
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <Portfoliosection/>
      {/* <PortfolioSection /> */}
      <AboutSection />
      <FAQSection />
      <CTASection />
     
    </main>
  )
}
