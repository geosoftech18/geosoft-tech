"use client"

import { useState } from "react"
import { Card, CardContent } from "@/core/components/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Why choose GEO Softech as the best website designing company in Surat?",
    answer:
      "We combine creativity, technology, and strategy to deliver custom, responsive, and SEO-friendly websites for businesses in Surat.",
  },
  {
    question: " Do you offer low-cost website design services in Surat?",
    answer:
      "Yes, we provide affordable website designing in Surat without compromising on quality, especially for startups and SMEs.",
  },
  {
    question: "Do you build mobile-friendly websites in Surat?",
    answer:
      "Yes. Our websites are fully *mobile-responsive*, ensuring smooth user experience across devices",
  },
  {
    question: " Can you redesign my old website?",
    answer:
      "es, we are a top e-commerce website designing agency in Surat offering custom CMS, payment gateway integration, and scalable solutions.",
  },
  {
    question: " Do you provide website maintenance in Surat?",
    answer:
      "Yes, GEO Softech offers website maintenance packages in Surat to ensure security, performance, and content updates. ",
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
            Get answers to common questions about website designing services in Surat
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-border bg-card">
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
