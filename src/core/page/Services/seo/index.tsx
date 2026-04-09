import { HeroSection } from "./hero-section";
import { ProblemsSection } from "./problems-section";
import { SolutionSection } from "./solution-section";
import { FeaturesSection } from "./features-section";
import { ProcessSection } from "./process-section";
import { WhyChooseUsSection } from "./why-choose-us-section";
import { FAQSection } from "./faq-section";
import { CTASection } from "./cta-section";
import { StickyCTA } from "./sticky-cta";
import { ExitIntentPopup } from "./exit-intent-popup";



export default function Home() {
  return (
    <main className="min-h-screen">
      <StickyCTA />
      <ExitIntentPopup />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <FeaturesSection />
      <ProcessSection />
      <WhyChooseUsSection />
     
      <FAQSection />
      <CTASection />
      
    </main>
  );
}
