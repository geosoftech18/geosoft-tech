import HeroSection from "../hero-section";
import PortfolioSection from "../portfolio-section";
import ProblemSolutionSection from "../problem-solution-section";
import StickyFloatingButtons from "../sticky-floating-buttons";
import TechnologyStackSection from "../technology-stack-section";
import TestimonialsSection from "../testimonials-section";
import ServicesSection from "../services-section";
import TrustBuildersSection from "../trust-builders-section";
import ProcessWorkflowSection from "../process-workflow-section";
import FAQSection from "../faq-section";

export default function Home() {
    return (
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <TrustBuildersSection />
        <ProcessWorkflowSection />
        <PortfolioSection />
        <TestimonialsSection />
        <TechnologyStackSection />
        <FAQSection />
        <StickyFloatingButtons />
      </main>
    )
  }
  