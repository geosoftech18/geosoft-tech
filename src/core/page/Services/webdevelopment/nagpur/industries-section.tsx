"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  Building2,
  ArrowRight,
  Sparkles,
  Factory,
  Stethoscope,
  GraduationCap,
  Hotel,
  ShoppingBag,
  HardHat,
  Scale,
  Truck,
  Ticket,
  Laptop,
  HeartHandshake,
  PenTool,
} from "lucide-react"
import { Card, CardContent } from "@/core/components/card"
import { Button } from "@/core/components/ui/button"
import { ConsultationForm } from "@/core/components/ConsultationForm"

const industries: { icon: LucideIcon; name: string; builds: string }[] = [
  {
    icon: Factory,
    name: "Manufacturing & Industrial",
    builds: "Product catalogues, dealer portals, enquiry management systems",
  },
  {
    icon: Stethoscope,
    name: "Healthcare & Clinics",
    builds: "Doctor profile websites, appointment booking systems, hospital portals",
  },
  {
    icon: GraduationCap,
    name: "Education & Coaching",
    builds: "Institutional websites, course listing pages, admission inquiry systems",
  },
  {
    icon: Hotel,
    name: "Hotels & Hospitality",
    builds: "Booking-integrated property websites, restaurant menu platforms",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-Commerce",
    builds: "Online stores, product catalogue sites, WooCommerce & Shopify builds",
  },
  {
    icon: HardHat,
    name: "Real Estate & Construction",
    builds: "Property listing websites, project showcase portals, lead capture sites",
  },
  {
    icon: Scale,
    name: "Legal & Professional Services",
    builds: "Law firm websites, CA firm sites, consultant landing pages",
  },
  {
    icon: Truck,
    name: "Logistics & Transport",
    builds: "Fleet showcase sites, tracking integration portals, B2B enquiry platforms",
  },
  {
    icon: Ticket,
    name: "Events & Entertainment",
    builds: "Event listing sites, ticketing integration, portfolio showcases",
  },
  {
    icon: Laptop,
    name: "IT & SaaS Companies",
    builds: "SaaS product websites, tech startup platforms, software company portals",
  },
  {
    icon: HeartHandshake,
    name: "NGOs & Non-Profits",
    builds: "Cause-driven websites, donation integration, volunteer management pages",
  },
  {
    icon: PenTool,
    name: "Architects & Designers",
    builds: "Portfolio sites, project galleries, client inquiry platforms",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function IndustriesSection() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

  return (
    <section id="industries" className="relative overflow-hidden py-12 sm:py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(0,191,98,0.06),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(0,191,98,0.04),transparent_40%)]" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-14"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00bf62]/30 bg-[#00bf62]/10 px-4 py-1.5 text-sm font-semibold text-[#00bf62]">
            <Building2 className="h-4 w-4" />
            Industries We Serve
          </span>
          <h2 className="mb-4 text-2xl font-semibold text-balance text-foreground sm:text-3xl md:text-4xl lg:text-4xl">
            Website Development Services in Nagpur —{" "}
            <span className="text-[#00bf62]">Across Every Major Industry</span>
          </h2>
          <p className="text-base text-pretty text-muted-foreground sm:text-lg md:text-xl">
            We&apos;ve delivered websites for businesses across Nagpur&apos;s most active commercial sectors. Every
            industry has different requirements — we bring the domain knowledge to get yours right from day one.
          </p>
        </motion.div>

        {/* Desktop table header */}
        <div className="mb-4 hidden rounded-xl border border-[#00bf62]/20 bg-[#00bf62]/5 px-6 py-3 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:gap-6">
          <span className="text-sm font-bold uppercase tracking-wider text-[#00bf62]">Industry</span>
          <span className="text-sm font-bold uppercase tracking-wider text-[#00bf62]">What We Build</span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
            <motion.div key={industry.name} variants={cardVariants}>
              <Card className="group h-full border-2 border-border/60 bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#00bf62]/40 hover:bg-[#00bf62]/5 hover:shadow-lg hover:shadow-[#00bf62]/10">
                <CardContent className="p-5 sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00bf62]/10 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-[#00bf62]" aria-hidden />
                    </span>
                    <h3 className="text-base font-bold leading-snug text-foreground sm:text-lg">
                      {industry.name}
                    </h3>
                  </div>
                  <div className="md:hidden">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#00bf62]">
                      What We Build
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {industry.builds}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center sm:mt-16"
        >
          <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-[#00bf62]/20 bg-gradient-to-br from-[#00bf62]/5 to-transparent p-6 sm:p-8">
            <Sparkles className="mx-auto mb-3 h-6 w-6 text-[#00bf62]" />
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Don&apos;t see your industry listed? We&apos;ve built websites for over{" "}
              <span className="font-semibold text-foreground">25 different business categories</span>. If you have a
              business, we have the experience to build your digital presence.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-[#00bf62] px-8 text-base font-semibold text-white hover:bg-[#00bf62]/90"
            onClick={() => setIsConsultationOpen(true)}
          >
            Discuss Your Industry Requirements
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      <ConsultationForm isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </section>
  )
}
