"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Compass,
  Palette,
  Code2,
  FlaskConical,
  Rocket,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { Card, CardContent } from "@/core/components/card"
import { Button } from "@/core/components/ui/button"
import { HowToJsonLd } from "@/seo/HowToJsonLd"

const steps = [
  {
    step: "01",
    title: "Discover",
    icon: Compass,
    description:
      "We start by understanding your business, your goals, your target audience, and your competition. This discovery phase shapes every decision that follows — from design direction to technical architecture.",
  },
  {
    step: "02",
    title: "Design",
    icon: Palette,
    description:
      "Our UI/UX designers create wireframes and visual mockups tailored to your brand and your customers. You review and approve before a single line of code is written.",
  },
  {
    step: "03",
    title: "Build",
    icon: Code2,
    description:
      "Our development team builds your website on the approved design — writing clean, scalable code with SEO structure, performance optimisation, and mobile responsiveness built in from the ground up.",
  },
  {
    step: "04",
    title: "Test",
    icon: FlaskConical,
    description:
      "We run comprehensive testing across browsers, devices, and load conditions — checking for speed, security, functionality, and user experience before anything goes live.",
  },
  {
    step: "05",
    title: "Launch & Support",
    icon: Rocket,
    description:
      "We deploy your website and hand over full documentation. Ongoing maintenance, updates, and technical support are available from day one — so your site keeps performing long after launch.",
  },
]

const AUTO_ADVANCE_MS = 4500

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const ActiveIcon = steps[activeStep].icon

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="process" className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-muted/30">
      <HowToJsonLd
        name="Our Website Development Process — Clear, Collaborative, and Results-Focused"
        description="From initial brief to final launch, every project follows a structured process designed to minimise surprises and maximise outcomes."
        steps={steps.map((s) => ({ name: s.title, text: s.description }))}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,191,98,0.08),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,191,98,0.06),transparent_40%)]" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00bf62]/30 bg-[#00bf62]/10 px-4 py-1.5 text-sm font-semibold text-[#00bf62]">
            <Sparkles className="h-4 w-4" />
            How We Work
          </span>
          <h2 className="mb-4 text-2xl font-semibold text-balance text-foreground sm:text-3xl md:text-4xl lg:text-4xl">
            Our Website Development Process —{" "}
            <span className="text-[#00bf62]">Clear, Collaborative, and Results-Focused</span>
          </h2>
          <p className="text-base text-pretty text-muted-foreground sm:text-lg md:text-xl">
            From initial brief to final launch, every project follows a structured process designed to minimise
            surprises and maximise outcomes.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
          {/* Step selector — desktop list + mobile horizontal scroll */}
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {steps.map((item, index) => {
              const Icon = item.icon
              const isActive = activeStep === index
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`min-w-[240px] shrink-0 rounded-2xl border-2 p-4 text-left transition-all duration-300 lg:min-w-0 lg:w-full ${
                    isActive
                      ? "border-[#00bf62] bg-[#00bf62]/10 shadow-lg shadow-[#00bf62]/10"
                      : "border-border bg-white/80 hover:border-[#00bf62]/40 hover:bg-[#00bf62]/5"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive ? "bg-[#00bf62] text-white" : "bg-[#00bf62]/10 text-[#00bf62]"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#00bf62]">
                        Step {item.step}
                      </p>
                      <p className="text-lg font-bold text-foreground">{item.title}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active step detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <Card className="overflow-hidden border-2 border-[#00bf62]/20 bg-white shadow-xl">
                <div className="h-1.5 bg-gradient-to-r from-[#00bf62] via-emerald-400 to-[#00bf62]" />
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00bf62]/10">
                        <ActiveIcon className="h-8 w-8 text-[#00bf62]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-[#00bf62]">
                          Step {steps[activeStep].step}
                        </p>
                        <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                          {steps[activeStep].title}
                        </h3>
                      </div>
                    </div>
                    <span className="rounded-full bg-muted px-4 py-1 text-sm font-medium text-muted-foreground">
                      {activeStep + 1} / {steps.length}
                    </span>
                  </div>

                  <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {steps[activeStep].description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-[#00bf62]/30 bg-transparent hover:bg-[#00bf62]/10"
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    >
                      Previous
                    </Button>
                    <Button
                      type="button"
                      className="bg-[#00bf62] hover:bg-[#00bf62]/90 text-white"
                      disabled={activeStep === steps.length - 1}
                      onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    >
                      Next step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="mt-10 hidden md:block">
          <div className="flex justify-between gap-2">
            {steps.map((item, index) => (
              <div key={item.step} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className={`h-2 w-full rounded-full transition-all duration-500 ${
                    index <= activeStep ? "bg-[#00bf62]" : "bg-muted-foreground/20"
                  }`}
                />
                <span
                  className={`text-xs font-medium ${
                    index === activeStep ? "text-[#00bf62]" : "text-muted-foreground"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
