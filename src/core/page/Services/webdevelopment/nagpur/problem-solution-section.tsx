"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  AlertTriangle,
  SearchX,
  Timer,
  Smartphone,
  MousePointerClick,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { Card, CardContent } from "@/core/components/card"
import { Button } from "@/core/components/ui/button"
import { ConsultationForm } from "@/core/components/ConsultationForm"

const painPoints = [
  {
    icon: SearchX,
    title: "Your Website Doesn't Show Up When Customers Search",
    description:
      "Over 80% of buyers research online before making contact. If your Nagpur business isn't appearing on the first page of Google for your core services, those customers are finding your competitors instead. A website without SEO-friendly development is essentially invisible.",
    accent: "from-red-500/10 to-orange-500/5",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    border: "border-red-200/80",
  },
  {
    icon: Timer,
    title: "Visitors Leave Within Seconds — and Never Come Back",
    description:
      "A slow-loading, hard-to-navigate website signals unprofessionalism before a single word is read. Studies consistently show that 53% of users abandon a site that takes longer than 3 seconds to load. Every slow second is a lost customer.",
    accent: "from-orange-500/10 to-amber-500/5",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    border: "border-orange-200/80",
  },
  {
    icon: Smartphone,
    title: "Your Site Looks Fine on a Desktop. On Mobile, It Breaks.",
    description:
      "Over 70% of web traffic in India now comes from mobile devices. If your website isn't fully responsive — with proper touch targets, readable text, and fast mobile load times — you're delivering a poor experience to the majority of your visitors.",
    accent: "from-amber-500/10 to-yellow-500/5",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    border: "border-amber-200/80",
  },
  {
    icon: MousePointerClick,
    title: "You're Getting Traffic but Zero Enquiries",
    description:
      "Traffic without conversions is a design problem, not a marketing problem. Unclear calls to action, no trust signals, confusing navigation, and weak messaging all contribute to a website that attracts visitors but fails to turn them into leads.",
    accent: "from-rose-500/10 to-red-500/5",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    border: "border-rose-200/80",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function ProblemSolutionSection() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

  return (
    <section id="problem" className="relative overflow-hidden py-12 sm:py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-50/40 via-background to-background" />
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-700">
            <AlertTriangle className="h-4 w-4" />
            The Real Problem
          </span>
          <h2 className="mb-4 text-2xl font-semibold text-balance text-foreground sm:text-3xl md:text-4xl lg:text-4xl">
            Is Your Website{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-red-600">Costing You Business</span>
              <span className="absolute -bottom-1 left-0 h-3 w-full bg-red-200/50 -z-0 rounded-sm" />
            </span>{" "}
            Without You Knowing It?
          </h2>
          <p className="text-base text-pretty text-muted-foreground sm:text-lg md:text-xl">
            Most Nagpur businesses have a website. Very few have one that consistently brings in leads, ranks on
            Google, and builds trust with first-time visitors. The gap between the two is larger than most founders
            realise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mb-16"
        >
          {painPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`group h-full overflow-hidden border-2 ${point.border} bg-gradient-to-br ${point.accent} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="mb-4 flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${point.iconBg} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className={`h-6 w-6 ${point.iconColor}`} />
                      </div>
                      <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-bold text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mb-3 text-lg font-bold leading-snug text-foreground sm:text-xl">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <Card className="relative overflow-hidden border-2 border-[#00bf62]/30 bg-gradient-to-br from-[#00bf62]/10 via-white to-emerald-50/50 shadow-xl">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#00bf62]/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-emerald-200/30 blur-2xl" />

            <CardContent className="relative p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
                <div>
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00bf62]/30 bg-[#00bf62]/10 px-4 py-1.5 text-sm font-semibold text-[#00bf62]">
                    <Sparkles className="h-4 w-4" />
                    The Solution
                  </span>
                  <h3 className="mb-4 text-xl font-bold leading-snug text-foreground sm:text-2xl md:text-3xl">
                    GEO Softech Builds Websites That Fix All Four Problems — Before They Cost You More Business
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    We don&apos;t build websites that look good in screenshots. We build business-focused web solutions
                    in Nagpur that are technically sound, conversion-optimised, and built to rank — so your website
                    works as hard as you do.
                  </p>

                  <ul className="mb-0 grid gap-3 sm:grid-cols-2">
                    {[
                      "SEO-ready from day one",
                      "Mobile-first responsive design",
                      "Fast load times & performance",
                      "Conversion-focused UX",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground sm:text-base">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00bf62]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-stretch gap-4 sm:items-start lg:items-center lg:min-w-[260px]">
                  <Button
                    size="lg"
                    className="w-full bg-[#00bf62] px-6 text-base font-semibold text-white hover:bg-[#00bf62]/90 sm:w-auto"
                    onClick={() => setIsConsultationOpen(true)}
                  >
                    Fix My Website — Get a Free Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground sm:text-left lg:text-center">
                    No obligation · Response within 24 hours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <ConsultationForm isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </section>
  )
}
