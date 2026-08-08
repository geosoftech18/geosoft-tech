"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/core/components/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { FaqJsonLd } from "@/seo/FaqJsonLd"

const faqs = [
  {
    question: "Which is the best website designing company in Nagpur?",
    answer:
      "GEO Softech is among Nagpur's most trusted web development agencies, with 300+ projects delivered across industries including retail, healthcare, education, manufacturing, and professional services. \n\nWe combine local market knowledge with modern development practices to build websites that rank on Google and convert visitors into leads. Our client testimonials and live portfolio reflect consistent, measurable results. ",
  },
  {
    question: " Do you provide e-commerce website designing in Nagpur?",
    answer:
      "Yes. E-commerce development is a core service. We build scalable online stores on WooCommerce, Shopify, Magento, and fully custom platforms — with secure payment gateway integration, inventory management, mobile commerce support, and conversion-optimised product pages. Whether you're launching a new online store or migrating an existing one, we handle the full build.",
  },
  {
    question: "What is the cost of website designing in Nagpur?",
    answer:
      "Website development costs depend on the scope, functionality, and technology stack required. A professional business website typically starts from ₹15,000–₹40,000, while e-commerce platforms and custom web applications vary based on complexity. \n\nWe offer flexible packages for startups, SMEs, and larger enterprises — with transparent pricing and no hidden charges. Contact us for a free project estimate tailored to your specific requirements. ",
  },
  {
    question: " Can you redesign my existing website without affecting my SEO rankings? ",
    answer:
      "Yes. Our website redesign services in Nagpur are specifically structured to preserve your existing SEO equity during the migration. We audit your current URL structure, meta data, and ranking pages before redesigning — and implement proper redirects, on-page SEO elements, and technical foundations to maintain or improve your search visibility post-launch. ",
  },
  {
    question: "Do you provide SEO and digital marketing services along with website development? ",
    answer:
      "Yes. GEO Softech offers SEO services, social media marketing, and digital growth strategy alongside web development. We recommend integrating SEO-friendly website development from the start — including proper heading structure, page speed optimisation, schema markup, and mobile responsiveness — so your website is built to rank, not retrofitted for search later.  ",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <FaqJsonLd faqs={faqs} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-foreground mb-4 text-balance">
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

        <p className="max-w-4xl mx-auto mt-8 text-center text-sm sm:text-base text-muted-foreground">
          Looking for more? Compare our full{" "}
          <Link href="/services/webdevelopment" className="font-medium text-[#00bf62] underline underline-offset-2 hover:text-[#00994e]">
            web development services
          </Link>
          {" "}or visit our{" "}
          <Link href="/services/webdevelopment/mumbai-development" className="font-medium text-[#00bf62] underline underline-offset-2 hover:text-[#00994e]">
            website designing company in Mumbai
          </Link>
          {" "}page.
        </p>
      </div>
    </section>
  )
}
