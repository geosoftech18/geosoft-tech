"use client";

import { Card, CardContent } from "@/core/components/card";
import { Search, Users, Target, Settings, PenTool, BarChart3, ArrowRight, FileCheck as CheckCircle2, Sparkles, TrendingUp, Clock, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { SEOAuditDialog } from "@/core/page/Services/seo/seo-audit-dialog";

export function ProcessSection() {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Website Audit",
      description: "Comprehensive analysis of your site's technical health, content quality, and ranking potential",
      deliverables: [
        "Technical SEO audit report",
        "Site speed analysis",
        "Mobile usability check",
        "Indexation status review"
      ],
      duration: "2-3 days",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      number: "02",
      icon: Users,
      title: "Competitor Analysis",
      description: "Deep dive into your competitors' strategies to identify opportunities and competitive advantages",
      deliverables: [
        "Top 5 competitor breakdown",
        "Keyword gap analysis",
        "Backlink comparison",
        "Content strategy insights"
      ],
      duration: "3-4 days",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600",
      borderColor: "border-violet-200"
    },
    {
      number: "03",
      icon: Target,
      title: "Keyword Strategy",
      description: "Data-driven keyword research to target high-value search terms that drive qualified traffic",
      deliverables: [
        "Primary keyword targets",
        "Long-tail opportunities",
        "Search intent mapping",
        "Content topic clusters"
      ],
      duration: "3-5 days",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200"
    },
    {
      number: "04",
      icon: Settings,
      title: "On-Page Optimization",
      description: "Strategic optimization of every page element to maximize visibility and click-through rates",
      deliverables: [
        "Meta tags optimization",
        "Header structure refinement",
        "Internal linking setup",
        "Schema markup implementation"
      ],
      duration: "1-2 weeks",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200"
    },
    {
      number: "05",
      icon: PenTool,
      title: "Content Creation",
      description: "High-quality, SEO-optimized content that engages your audience and ranks in search engines",
      deliverables: [
        "SEO content writing",
        "Existing content refresh",
        "Landing page copy",
        "Blog post creation"
      ],
      duration: "Ongoing",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
      borderColor: "border-rose-200"
    },
    {
      number: "06",
      icon: BarChart3,
      title: "Performance Tracking & Reporting",
      description: "Transparent reporting with actionable insights to continuously improve your SEO results",
      deliverables: [
        "Monthly performance reports",
        "Ranking position tracking",
        "Traffic & conversion metrics",
        "ROI analysis"
      ],
      duration: "Monthly",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
  ];

  return (
    <section className="relative  py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-sm border border-blue-200">
            <Sparkles className="w-4 h-4" />
            Our Proven Process
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            How We{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Transform
              </span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-blue-300 to-emerald-300 opacity-30 -z-10" />
            </span>
            {" "}Your Rankings
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            A systematic, data-driven approach that delivers measurable results at every stage
          </p>

          
        </div>

        <div className="hidden md:block mb-20">
          <div className="relative hidden md:block">
            <div className="absolute top-[72px] left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-emerald-200 to-green-200" />

            <div
              className="absolute top-[72px] left-0 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 transition-all duration-1000 ease-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            <div className="grid grid-cols-6 gap-4 ">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                const isPast = activeStep > index;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer transition-all duration-500 ${
                      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`relative w-24 h-24 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                          isActive
                            ? `bg-gradient-to-br ${step.color} shadow-2xl scale-110 -translate-y-2`
                            : isPast
                            ? `${step.bgColor} border-2 ${step.borderColor} shadow-lg`
                            : "bg-white border-2 border-slate-200 hover:border-slate-300 shadow-md"
                        }`}
                      >
                        {isPast && !isActive && (
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                        )}

                        <div className="text-center">
                          <Icon
                            className={`w-8 h-8 mx-auto mb-2 transition-colors ${
                              isActive
                                ? "text-white"
                                : isPast
                                ? step.iconColor
                                : "text-slate-400"
                            }`}
                          />
                          <div
                            className={`text-2xl font-bold transition-colors ${
                              isActive
                                ? "text-white"
                                : isPast
                                ? step.iconColor
                                : "text-slate-300"
                            }`}
                          >
                            {step.number}
                          </div>
                        </div>
                      </div>

                      <h3
                        className={`text-center text-sm font-bold mb-2 transition-colors ${
                          isActive
                            ? "text-slate-900"
                            : isPast
                            ? "text-slate-700"
                            : "text-slate-500"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <div
                        className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                          isActive
                            ? "text-emerald-600"
                            : "text-slate-500"
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={`max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="border-2 border-slate-200 shadow-2xl overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${steps[activeStep].color}`} />

            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className={`w-16 md:w-24 h-16 md:h-24 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center flex-shrink-0 shadow-xl`}>
                  {(() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon className="w-12 h-12 text-white" />;
                  })()}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className={`inline-block text-sm font-bold px-3 py-1 rounded-lg bg-gradient-to-r ${steps[activeStep].color} text-white mb-3`}>
                        Step {steps[activeStep].number}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        {steps[activeStep].title}
                      </h3>
                      <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        {steps[activeStep].description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Key Deliverables
                      </h4>
                      <div className="space-y-3">
                        {steps[activeStep].deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
                          >
                            <div className={`w-5 h-5 rounded-lg bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            </div>
                            <p className="text-slate-700 font-medium text-sm">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`${steps[activeStep].bgColor} rounded-xl p-6 border-2 ${steps[activeStep].borderColor}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className={`w-5 h-5 ${steps[activeStep].iconColor}`} />
                        <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                          Timeline
                        </h4>
                      </div>
                      <p className={`text-2xl font-bold ${steps[activeStep].iconColor} mb-3`}>
                        {steps[activeStep].duration}
                      </p>
                      <p className="text-sm text-slate-600">
                        Average completion time for this phase of your SEO strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-3 mt-8">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`!p-0 !px-0 !py-0 min-w-0 min-h-0 h-2 rounded-full transition-all duration-300 ${
                  idx === activeStep
                    ? "w-8 bg-gradient-to-r from-blue-600 to-emerald-600"
                    : idx < activeStep
                    ? "w-4 bg-emerald-400"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`View step ${idx + 1}: ${steps[idx].title}`}
              />
            ))}
          </div>
        </div>

        

        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="max-w-7xl mx-auto border-2 border-slate-200 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-emerald-500/5 to-blue-500/5" />

            <CardContent className="p-10 md:p-12 relative z-10">
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                {[
                  {
                    icon: TrendingUp,
                    value: "6 Stages",
                    label: "Comprehensive Process",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: CheckCircle2,
                    value: "100%",
                    label: "Transparent Reporting",
                    color: "from-emerald-500 to-teal-500"
                  },
                  {
                    icon: Zap,
                    value: "Weekly",
                    label: "Progress Updates",
                    color: "from-violet-500 to-purple-500"
                  },
                ].map((stat, idx) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={idx} className="text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <StatIcon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-8 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Ready to Start Your SEO Journey?
                </h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  Get a personalized roadmap showing exactly how we'll improve your rankings and drive more qualified traffic to your business
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setDialogOpen(true)}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
                  >
                    Start Free Audit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <SEOAuditDialog open={dialogOpen} onOpenChange={setDialogOpen} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
