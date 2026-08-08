"use client"

import { useState, useEffect, useRef } from "react"
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
import QuoteFormSection from "../quote-form-section";
import ContactFormSection from "../contact-form-section";
import PopupForm from "./popup-form";
import ServiceLocationInterlinks from "./service-location-interlinks";

export default function Home() {
    const [showPopup, setShowPopup] = useState(false)
    const hasShownOnLoadRef = useRef(false)
    const pageLoadTimerRef = useRef<NodeJS.Timeout | null>(null)

    // Show popup on page load (after a delay)
    useEffect(() => {
      // Show popup after 20 seconds
      pageLoadTimerRef.current = setTimeout(() => {
        if (!hasShownOnLoadRef.current) {
          setShowPopup(true)
          hasShownOnLoadRef.current = true
        }
      }, 10000)

      return () => {
        if (pageLoadTimerRef.current) {
          clearTimeout(pageLoadTimerRef.current)
        }
      }
    }, [])

    // Handle exit intent (when user tries to close tab or moves mouse to header)
    useEffect(() => {
      const showPopupFromHeader = () => {
        setShowPopup(true)
        // Cancel the onload timer if it's still pending
        if (pageLoadTimerRef.current) {
          clearTimeout(pageLoadTimerRef.current)
          pageLoadTimerRef.current = null
        }
      }

      // Track mouse movement to detect exit intent (moving mouse to top of screen)
      const handleMouseLeave = (e: MouseEvent) => {
        // If mouse moves to top of screen (likely closing tab/window)
        if (e.clientY <= 0) {
          showPopupFromHeader()
        }
      }

      // Track when user is about to leave (beforeunload can only show browser dialog)
      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        e.preventDefault()
        e.returnValue = ''
      }

      // Add event listeners - use window for better compatibility
      window.addEventListener('mouseleave', handleMouseLeave)
      window.addEventListener('beforeunload', handleBeforeUnload)

      return () => {
        window.removeEventListener('mouseleave', handleMouseLeave)
        window.removeEventListener('beforeunload', handleBeforeUnload)
      }
    }, [])

    return (
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <ContactFormSection />
        <QuoteFormSection />
        <TrustBuildersSection />
        <ProcessWorkflowSection />
        <PortfolioSection />
        <TestimonialsSection />
        <TechnologyStackSection />
        <ServiceLocationInterlinks />
        <FAQSection />
    
        <StickyFloatingButtons />
        
        {/* Popup Form */}
        <PopupForm 
          isOpen={showPopup} 
          onClose={() => setShowPopup(false)} 
        />
      </main>
    )
  }
  