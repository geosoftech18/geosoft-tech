"use client";

import { Card, CardContent } from "@/core/components/card";
import { AlertCircle, TrendingDown, Target, FileQuestion, X, FileCheck as CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

export function ProblemsSection() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const problems = [
    {
      icon: AlertCircle,
      title: "Website not ranking on Google?",
      description:
        "Your competitors appear on the first page while your business remains invisible to potential customers searching for your services.",
      solution: "Strategic keyword optimization & technical SEO fixes",
      stats: "Average rank improvement: Position 1-3",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      glowColor: "shadow-red-200",
    },
    {
      icon: TrendingDown,
      title: "Getting traffic but no conversions?",
      description:
        "Visitors land on your site but leave without taking action. You're attracting the wrong audience or missing crucial optimization.",
      solution: "Conversion-focused content & user experience optimization",
      stats: "Average conversion increase: +94%",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      glowColor: "shadow-orange-200",
    },
    {
      icon: Target,
      title: "Competitors outranking you?",
      description:
        "You're losing market share to competitors who show up first in search results, capturing leads that should be yours.",
      solution: "Competitive analysis & advanced link building strategies",
      stats: "Average competitor gap closed: 78%",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      glowColor: "shadow-amber-200",
    },
    {
      icon: FileQuestion,
      title: "No clear SEO strategy?",
      description:
        "You're trying random tactics without a cohesive plan, wasting time and money on approaches that don't deliver real results.",
      solution: "Comprehensive SEO roadmap & data-driven execution",
      stats: "ROI improvement: 3-5X within 6 months",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-700",
      glowColor: "shadow-yellow-200",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-200 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 rounded-full text-sm font-semibold mb-6 shadow-sm border border-red-200">
            <AlertCircle className="w-4 h-4 animate-pulse" />
            Common SEO Challenges
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Does This{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Sound Familiar?</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-red-300 to-orange-300 opacity-30 -z-10" />
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Most businesses struggle with the same SEO challenges. You're investing in
            your website but not seeing the results you deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card className={`h-full border-2 transition-all duration-500 group cursor-pointer relative overflow-hidden ${
                  isHovered
                    ? `border-transparent shadow-2xl ${problem.glowColor} scale-105`
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-16 translate-x-16" />

                  <CardContent className="p-7 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-2xl ${problem.iconBg} flex items-center justify-center transition-all duration-500 ${
                          isHovered ? 'scale-110 rotate-6' : ''
                        } relative`}
                      >
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${problem.color} opacity-0 ${isHovered ? 'opacity-20 animate-pulse' : ''}`} />
                        <Icon className={`w-8 h-8 ${problem.iconColor} relative z-10 transition-transform duration-300`} />
                      </div>

                      <div className={`transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                        <X className="w-6 h-6 text-red-500" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-950 transition-colors">
                      {problem.title}
                    </h3>

                    <div className={`transition-all duration-500 ${isHovered ? 'max-h-0 opacity-0' : 'max-h-40 opacity-100'}`}>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {problem.description}
                      </p>
                    </div>

                    <div className={`transition-all duration-500 overflow-hidden ${isHovered ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <div className="space-y-3 pt-4 border-t border-slate-200">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm font-medium text-slate-900">{problem.solution}</p>
                        </div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${problem.color} text-white text-xs font-semibold`}>
                          {problem.stats}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div
          className={`relative transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-500/20 animate-pulse" />

              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 md:p-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-500/25 animate-pulse">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white text-center md:text-left">
                      You're Not Alone
                    </h3>
                  </div>

                  <p className="text-lg md:text-xl text-slate-200 leading-relaxed md:text-center mb-8 max-w-2xl mx-auto">
                    These are the exact challenges we've helped{" "}
                    <span className="text-white font-bold">300+ businesses</span> overcome.
                    With the right strategy, you can turn these problems into{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300 font-semibold">
                      growth opportunities
                    </span>.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { number: "300+", label: "Businesses Helped" },
                      { number: "3X", label: "Average Growth" },
                      { number: "24-48h", label: "Audit Delivery" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-sm text-slate-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
