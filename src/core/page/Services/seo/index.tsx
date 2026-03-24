"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Globe2,
  LineChart,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const seoCapabilities = [
  {
    title: "Technical SEO",
    description:
      "We optimize crawlability, Core Web Vitals, schema markup, and site architecture so search engines can rank your pages with confidence.",
    icon: Search,
  },
  {
    title: "Content & Keyword Strategy",
    description:
      "From search intent mapping to content planning, we build topical authority that attracts relevant traffic and drives qualified leads.",
    icon: Target,
  },
  {
    title: "Performance Tracking",
    description:
      "We monitor rankings, traffic quality, and conversion metrics with transparent reports to continuously improve campaign outcomes.",
    icon: LineChart,
  },
];

const showcaseStats = [
  { label: "Campaigns Managed", value: "300+", icon: TrendingUp },
  { label: "Average Engagement Lift", value: "2.8x", icon: BarChart3 },
  { label: "Industries Supported", value: "25+", icon: Globe2 },
  { label: "Monthly Reporting", value: "100%", icon: Clock3 },
];

const deliverables = [
  "Complete technical SEO audit and action plan",
  "Keyword mapping for service and location pages",
  "Optimized metadata, headings, and internal links",
  "Schema setup for better SERP visibility",
  "Content brief strategy for authority building",
  "Monthly growth report with next-step roadmap",
];

const seoProcess = [
  "Audit website health, indexing, and technical gaps",
  "Map high-intent keywords to service and location pages",
  "Create and optimize landing pages with conversion-focused copy",
  "Improve on-page SEO, internal linking, and schema structure",
  "Track growth monthly and refine strategy for better ROI",
];

const industryUseCases = [
  {
    title: "Local Businesses",
    description:
      "Improve local map visibility and rank for high-intent city-based searches to drive quality leads.",
  },
  {
    title: "Service Brands",
    description:
      "Generate demand through SEO landing pages that target problem-aware and solution-aware audiences.",
  },
  {
    title: "E-commerce Stores",
    description:
      "Capture organic purchase intent with category optimization, technical fixes, and content clusters.",
  },
];

export default function SEOServicePage() {
  return (
    <main className="bg-[#f8fbff]">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#02297e] via-[#0b3ea7] to-[#1555cf] py-20 md:py-28">
        <div className="absolute -left-20 top-8 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -right-16 top-12 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8fbff] to-transparent" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Premium SEO Growth Services
              </p>
              <h1 className="text-3xl font-bold text-white md:text-5xl">
                Modern SEO Solutions That Turn Search Traffic Into Revenue
              </h1>
              <p className="mt-6 max-w-2xl text-base text-blue-100 md:text-lg">
                GEO Softech builds data-driven SEO campaigns with technical precision, content
                depth, and conversion strategy so your business ranks higher and grows faster.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#02297e] transition hover:bg-slate-100"
                >
                  Get Free SEO Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="rounded-xl border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#02297e]"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur"
            >
              <div className="grid grid-cols-2 gap-4">
                {showcaseStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    className="rounded-xl border border-white/20 bg-white/10 p-4 text-white"
                  >
                    <stat.icon className="h-5 w-5 text-cyan-200" />
                    <p className="mt-3 text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-blue-100">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">What We Showcase in SEO</h2>
            <p className="mx-auto mt-3 max-w-3xl text-slate-600">
              Every campaign is built to showcase your expertise, trust, and value directly in
              search results and landing page experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {seoCapabilities.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-lg bg-blue-50 p-3 text-[#02297e]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900">What You Get Every Month</h3>
              <p className="mt-3 text-slate-600">
                Transparent deliverables and clear execution, not vague SEO promises.
              </p>
              <div className="mt-6 space-y-3">
                {deliverables.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="flex items-start gap-3 rounded-xl bg-slate-50 p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <p className="text-sm text-slate-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#edf4ff] to-[#f7fbff] p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900">Why Brands Choose GEO Softech</h3>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-blue-100 bg-white p-4">
                  <p className="font-semibold text-[#02297e]">Search + Conversion Thinking</p>
                  <p className="mt-1 text-sm text-slate-600">
                    We do not only rank pages, we optimize user journeys to improve lead quality.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-100 bg-white p-4">
                  <p className="font-semibold text-[#02297e]">Modern, SEO-First Implementation</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Your pages are structured for crawlability, speed, and long-term search growth.
                  </p>
                </div>
                <div className="rounded-xl border border-blue-100 bg-white p-4">
                  <p className="font-semibold text-[#02297e]">Reliable Reporting and Action Plans</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Monthly insights are tied to clear next steps so performance keeps improving.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-slate-900 md:text-4xl"
            >
              Our SEO Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-slate-600"
            >
              Our workflow is based on your current site data, business goals, and competitive
              landscape to deliver sustainable ranking growth.
            </motion.p>

            <div className="mt-8 space-y-4">
              {seoProcess.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <p className="text-sm text-slate-700">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10 text-center"
          >
            <h3 className="text-3xl font-bold text-slate-900 md:text-4xl">Industries We Support</h3>
            <p className="mx-auto mt-3 max-w-3xl text-slate-600">
              We tailor SEO strategies to business model, buying intent, and local competition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {industryUseCases.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h4 className="text-xl font-semibold text-[#02297e]">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-gradient-to-r from-[#02297e] to-[#0e4bd8] p-8 text-white md:p-12"
          >
            <h3 className="text-2xl font-bold md:text-3xl">
              Ready to rank higher and convert more visitors?
            </h3>
            <p className="mt-3 max-w-3xl text-sm text-blue-100 md:text-base">
              Partner with GEO Softech for practical, measurable SEO growth. From local SEO to
              technical improvements, we help your business stay visible where your customers are
              searching.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#02297e] transition hover:bg-slate-100"
              >
                Book SEO Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="inline-flex items-center gap-2 text-sm text-blue-100">
                <ShieldCheck className="h-4 w-4" />
                No long-term lock-in. Performance-focused execution.
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
