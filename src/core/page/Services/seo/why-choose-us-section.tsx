"use client";

import { Card, CardContent } from "@/core/components/card";
import { TrendingUp, Target, FileText, UserCheck, Settings, Shield, Zap, Award, Users, BarChart3, ArrowRight, FileCheck as CheckCircle2, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { SEOAuditDialog } from "@/core/page/Services/seo/seo-audit-dialog";

export function WhyChooseUsSection() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reasons = [
    {
      icon: TrendingUp,
      title: "Data-Driven Strategies",
      description: "Every decision backed by analytics, competitor research, and proven SEO methodologies",
      benefits: [
        "Real-time performance tracking",
        "Continuous optimization based on data",
        "Predictable, measurable growth"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      accentColor: "border-blue-200"
    },
    {
      icon: Target,
      title: "ROI-Focused Approach",
      description: "We don't just drive traffic—we focus on conversions that directly impact your bottom line",
      benefits: [
        "Target high-intent keywords",
        "Conversion rate optimization",
        "Monthly ROI reporting"
      ],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      accentColor: "border-emerald-200"
    },
    {
      icon: FileText,
      title: "Transparent Reporting",
      description: "No black boxes. Detailed monthly reports showing exactly what we did and the results achieved",
      benefits: [
        "Easy-to-understand dashboards",
        "Weekly progress updates",
        "Full access to analytics"
      ],
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600",
      accentColor: "border-violet-200"
    },
    {
      icon: UserCheck,
      title: "Dedicated Account Manager",
      description: "Your success is personal. A dedicated expert who knows your business inside and out",
      benefits: [
        "Direct communication channel",
        "Proactive strategy adjustments",
        "Bi-weekly strategy calls"
      ],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      accentColor: "border-amber-200"
    },
    {
      icon: Settings,
      title: "Custom SEO Plans",
      description: "No cookie-cutter solutions. Strategies tailored to your industry, audience, and business goals",
      benefits: [
        "Industry-specific strategies",
        "Flexible engagement models",
        "Scalable as you grow"
      ],
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
      accentColor: "border-rose-200"
    },
    {
      icon: Shield,
      title: "White-Hat SEO Only",
      description: "Sustainable results through ethical practices that protect your brand and long-term rankings",
      benefits: [
        "Google-approved techniques",
        "Zero risk of penalties",
        "Long-term sustainable growth"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      accentColor: "border-green-200"
    },
  ];

  const stats = [
    {
      icon: Award,
      value: "300+",
      label: "Successful Projects",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      value: "98%",
      label: "Client Retention Rate",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: BarChart3,
      value: "285%",
      label: "Average ROI Increase",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: Zap,
      value: "12+",
      label: "Years of Experience",
      color: "from-amber-500 to-orange-500"
    },
  ];

  return (
    <section className="relative  py-24 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-sm border border-blue-200">
            <Sparkles className="w-4 h-4" />
            Why Partner With Us
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Your Success Is{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Our Mission
              </span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-blue-300 to-emerald-300 opacity-30 -z-10" />
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We combine data-driven strategies with personalized service to deliver SEO results that transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isHovered = hoveredCard === index;

            return (
              <Card
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group cursor-pointer border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${isHovered ? `${reason.accentColor} shadow-2xl` : "border-slate-200"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 shadow-lg transition-all duration-500 ${
                      isHovered ? "scale-110 rotate-3" : ""
                    }`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-600 transition-all duration-300">
                    {reason.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {reason.description}
                  </p>

                  <div className="space-y-3">
                    {reason.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 transition-all duration-300 ${
                          isHovered ? "translate-x-2" : ""
                        }`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className={`w-5 h-5 rounded-lg bg-gradient-to-br ${reason.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-sm text-slate-700 font-medium">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className={`mt-6 pt-6 border-t ${reason.accentColor} opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                    <div className="flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                      Learn more
                      <ArrowRight className={`w-4 h-4 ${reason.iconColor} transition-transform group-hover:translate-x-1`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="border-2 border-slate-200 shadow-2xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 via-emerald-500 to-violet-500" />

            <CardContent className="p-10 md:p-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  Proven Track Record of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                    Exceptional Results
                  </span>
                </h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Numbers that speak for themselves—real results from real businesses just like yours
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {stats.map((stat, idx) => {
                  const StatIcon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="text-center group hover:scale-105 transition-all duration-300"
                    >
                      <div className={`w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:rotate-3 transition-all duration-300`}>
                        <StatIcon className="w-8 md:w-10 h-8 md:h-10 text-white" />
                      </div>
                      <div className="text-2xl md:text-4xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-br from-blue-50 via-emerald-50 to-violet-50 rounded-2xl p-8 md:p-10 border-2 border-slate-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-slate-900 mb-3">
                      Ready to Join Our Success Stories?
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Let's discuss how our proven strategies can help you dominate your market and achieve sustainable growth through SEO
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setDialogOpen(true)}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group whitespace-nowrap"
                    >
                      Get Started Today
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
          className={`md:mt-16 text-center transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="md:inline-flex hidden flex-wrap items-center justify-center gap-6 px-8 py-6 bg-white rounded-2xl shadow-lg border-2 border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500 font-medium">Guaranteed</div>
                <div className="text-base font-bold text-slate-900">No Long-Term Contracts</div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-slate-200" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500 font-medium">Fast</div>
                <div className="text-base font-bold text-slate-900">Results in 90 Days</div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-slate-200" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-md">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500 font-medium">Certified</div>
                <div className="text-base font-bold text-slate-900">Google Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
