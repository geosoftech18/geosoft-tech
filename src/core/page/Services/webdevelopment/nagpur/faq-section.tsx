"use client"

import { useState } from "react"
import { Card, CardContent } from "@/core/components/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Which is the best website designing company in Nagpur?",
    answer:
      "GEO Softech is one of the best website designing companies in Nagpur, offering professional, affordable, and SEO-friendly web design solutions for startups, SMEs, and enterprises.",
  },
  {
    question: " Do you provide e-commerce website designing in Nagpur?",
    answer:
      "Yes, we specialize in e-commerce website development with secure payment integration, product management, and mobile-friendly design. ",
  },
  {
    question: "What is the cost of website designing in Nagpur?",
    answer:
      "The cost depends on your requirements, features, and design complexity. GEO Softech provides affordable website designing packages tailored for small businesses and enterprises.",
  },
  {
    question: " Can you redesign my old website?",
    answer:
      "Absolutely. We offer website redesign services in Nagpur to modernize your site with a fresh UI/UX, responsive design, and better SEO performance.",
  },
  {
    question: " Do you also provide SEO and digital marketing along with website design?",
    answer:
      "Yes. GEO Softech is a web design and digital marketing company in Nagpur providing end-to-end solutions, including SEO, social media, and branding. ",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Get answers to common questions about website designing services in Nagpur
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-border bg-[#00bf62]/10">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-foreground pr-3 sm:pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-[#00bf62] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-[#00bf62] flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
