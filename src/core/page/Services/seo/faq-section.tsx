"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/core/components/Accordion";
import { Card, CardContent } from "@/core/components/card";
import { HelpCircle, Clock, Target, Building2, FileText, DollarSign, TrendingUp, Shield, Users, MessageSquare, Sparkles, ArrowRight, FileCheck as CheckCircle2 } from "lucide-react";
import { SEOAuditDialog } from "@/core/page/Services/seo/seo-audit-dialog";
import { FaqJsonLd } from "@/seo/FaqJsonLd";

export function FAQSection() {
  const [mounted, setMounted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const faqs = [
    {
      icon: Clock,
      question: "How long does SEO take to show results?",
      answer:
        "SEO is a long-term investment that typically shows initial results within 3-6 months, with significant improvements by 6-12 months. The timeline depends on several factors including your industry competitiveness, current website state, and target keywords. However, we implement quick wins in the first 30 days (technical fixes, content optimization) that can show early traction. Most of our clients see measurable traffic increases within 90 days and substantial ROI by month 6.",
      highlight: "Initial results in 3-6 months, significant growth by 6-12 months",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Target,
      question: "Do you guarantee first-page rankings?",
      answer:
        "We don't guarantee specific rankings because no ethical SEO agency can—Google's algorithm has over 200 ranking factors and changes constantly. However, we do guarantee our commitment to proven strategies, transparent reporting, and continuous optimization. What we can promise: increased organic traffic, improved domain authority, better keyword positions, and measurable ROI. Our track record speaks for itself—98% of our clients see first-page rankings for multiple target keywords within 12 months.",
      highlight: "98% of clients achieve first-page rankings within 12 months",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Building2,
      question: "What industries do you work with?",
      answer:
        "We work with businesses across diverse industries including e-commerce, SaaS, professional services, healthcare, real estate, legal, manufacturing, and B2B companies. Our data-driven approach is industry-agnostic, but we customize strategies based on your specific market dynamics, competition, and audience behavior. Whether you're a local business or a national brand, we have experience scaling SEO campaigns that drive qualified leads and revenue.",
      highlight: "All industries welcome—custom strategies for your market",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
    },
    {
      icon: FileText,
      question: "How do you report progress and results?",
      answer:
        "Transparency is core to our service. You'll receive comprehensive monthly reports covering rankings, organic traffic, conversions, backlinks, technical health, and ROI. We also provide 24/7 access to a real-time dashboard showing your key metrics. Your dedicated account manager conducts bi-weekly strategy calls to review progress, discuss insights, and adjust tactics. We use industry-standard tools like Google Analytics, Search Console, SEMrush, and Ahrefs to track and validate all data.",
      highlight: "Monthly reports + real-time dashboard + bi-weekly strategy calls",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: DollarSign,
      question: "What's your pricing structure?",
      answer:
        "Our pricing is customized based on your business size, goals, industry competitiveness, and scope of work. We offer flexible engagement models including monthly retainers, project-based work, and performance-based options. Most clients invest between $2,000-$10,000/month depending on their needs. We believe in earning your business every month—that's why we don't require long-term contracts. After a thorough audit and strategy session, we'll provide a transparent proposal tailored to your budget and objectives.",
      highlight: "Custom pricing, no long-term contracts, transparent proposals",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
    },
    {
      icon: TrendingUp,
      question: "What makes your SEO approach different?",
      answer:
        "Unlike agencies that use cookie-cutter templates, we build custom strategies based on deep competitive analysis, user behavior data, and your unique business goals. Our approach combines technical excellence, high-quality content, strategic link building, and conversion optimization. We focus on ROI, not just rankings—every tactic is designed to drive qualified traffic that converts. Plus, you get a dedicated account manager who knows your business inside and out, not a rotating cast of junior employees.",
      highlight: "Custom strategies, ROI-focused, dedicated account management",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Shield,
      question: "Is your SEO white-hat? What about Google penalties?",
      answer:
        "Absolutely. We exclusively use white-hat, Google-approved techniques that build sustainable, long-term rankings. We never engage in black-hat tactics like keyword stuffing, link schemes, cloaking, or duplicate content—practices that can get your site penalized or de-indexed. Our methods focus on creating genuine value: high-quality content, legitimate link building, technical excellence, and exceptional user experience. Your brand's reputation and long-term success are too important to risk with shortcuts.",
      highlight: "100% white-hat methods, zero risk of penalties",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Users,
      question: "Will I have a dedicated point of contact?",
      answer:
        "Yes! Every client gets a dedicated account manager who serves as your single point of contact. Your account manager will learn your business deeply, lead strategy development, coordinate our specialist team (content writers, technical SEO experts, link builders), and ensure seamless execution. You'll have their direct email and phone number, and you'll meet with them bi-weekly for strategy calls. No more dealing with ticket systems or talking to different people each time.",
      highlight: "Dedicated account manager with direct access",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
    },
    {
      icon: MessageSquare,
      question: "What if I'm not happy with the results?",
      answer:
        "Our 98% client retention rate speaks to our commitment to delivering results. If you're not satisfied, we'll first work diligently to identify issues and adjust our strategy—SEO requires iteration and optimization. Because we don't lock clients into long-term contracts, you're free to pause or cancel anytime with 30 days notice. However, we find that clients who commit to the recommended 6-12 month timeline see the best results. We're invested in your success because your growth is our best marketing.",
      highlight: "No long-term contracts, 30-day cancellation notice",
      color: "from-fuchsia-500 to-pink-500",
      bgColor: "bg-fuchsia-50",
    },
  ];

  const categories = [
    {
      icon: Clock,
      title: "Timeline & Results",
      count: 3,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: "Pricing & ROI",
      count: 2,
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Shield,
      title: "Methods & Safety",
      count: 2,
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Users,
      title: "Support & Service",
      count: 2,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <FaqJsonLd
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-violet-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-100 to-violet-100 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-sm border border-blue-200">
            <HelpCircle className="w-4 h-4" />
            Your Questions Answered
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                Questions
              </span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-blue-300 to-violet-300 opacity-30 -z-10" />
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our SEO services, process, and what to expect
          </p>
        </div>


        <div className="max-w-6xl mx-auto">
          <Card
            className={`border-2 border-slate-200 shadow-2xl overflow-hidden transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="h-2 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500" />

            <CardContent className="p-8 md:p-12">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => {
                  const FaqIcon = faq.icon;
                  return (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-2 border-slate-200 rounded-xl px-6 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6 group">
                        <div className="flex items-start gap-4 pr-4">
                          <div
                            className={`w-12 h-12 md:flex hidden rounded-lg bg-gradient-to-br ${faq.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                          >
                            <FaqIcon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-300">
                              {faq.question}
                            </h3>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-6">
                        <div className=" md:ml-16 space-y-4">
                          <p className="text-slate-700 leading-relaxed">
                            {faq.answer}
                          </p>
                          <div
                            className={`flex items-start gap-3 p-4 rounded-lg ${faq.bgColor} border-2 border-slate-200`}
                          >
                            <div
                              className={`w-6 h-6 rounded-lg bg-gradient-to-br ${faq.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                            >
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-sm font-semibold text-slate-900">
                              {faq.highlight}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="border-2 border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500" />

            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl">
                    <MessageSquare className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    Still Have Questions?
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Our SEO experts are here to help. Schedule a free consultation to discuss your specific situation and get personalized answers.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button
                      onClick={() => setDialogOpen(true)}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <SEOAuditDialog open={dialogOpen} onOpenChange={setDialogOpen} />
                   
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-lg border-2 border-slate-200">
            <Sparkles className="w-5 h-5 text-violet-600" />
            <p className="text-sm text-slate-600">
              <span className="font-bold text-slate-900">100+ 5-star reviews</span> from satisfied clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
