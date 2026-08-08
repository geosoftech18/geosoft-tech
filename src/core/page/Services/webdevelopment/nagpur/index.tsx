import { HeroSection } from "./hero-section"
import { ProblemSolutionSection } from "./problem-solution-section"
import { AboutSection } from "./about-section"
import { ServicesSection } from "./services-section"
import { IndustriesSection } from "./industries-section"

import { ExpertiseSection } from "./expertise-section"

import { ProcessSection } from "./process-section"

import Portfoliosection from "./portfolio-section1"

import { FAQSection } from "./faq-section"

import { CTASection } from "./cta-section"

import HomeTestimonialsSection from "@/core/page/Home/Testimonials"
import ServiceLocationInterlinks from "../service-location-interlinks"



export default function Home() {

  return (

    <main className="min-h-screen">

      <HeroSection />
      <ServicesSection />

      <ExpertiseSection />

      <ProcessSection />

      <HomeTestimonialsSection />

      <ProblemSolutionSection />
      <Portfoliosection />

      <AboutSection />
      <IndustriesSection />

      <FAQSection />

      <ServiceLocationInterlinks currentCity="nagpur" />

      <CTASection />

    </main>

  )

}


