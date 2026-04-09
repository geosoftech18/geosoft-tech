"use client";

import { Card, CardContent } from "@/core/components/card";
import { FileCheck as CheckCircle2, Code, Search, FileText, Lightbulb, Link2, MapPin, TrendingUp, ArrowRight, Sparkles, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function SolutionSection() {
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const wheelLockRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Technical SEO Optimization",
      description: "Fix critical technical issues holding your site back from ranking",
      details: [
        "Site speed optimization",
        "Mobile responsiveness fixes",
        "Schema markup implementation",
        "Core Web Vitals improvement"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      metric: "40% faster load times"
    },
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      description: "Target the exact terms your customers are searching for",
      details: [
        "Competitor keyword analysis",
        "Search intent mapping",
        "Long-tail keyword opportunities",
        "Local search optimization"
      ],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      metric: "300+ ranking keywords"
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      description: "Optimize every page to rank higher and convert better",
      details: [
        "Meta tags optimization",
        "Header structure refinement",
        "Internal linking strategy",
        "Image optimization"
      ],
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600",
      metric: "2X click-through rate"
    },
    {
      icon: Lightbulb,
      title: "Content Strategy",
      description: "Create content that ranks, engages, and converts",
      details: [
        "Content gap analysis",
        "Topic cluster development",
        "SEO content writing",
        "Content refresh & updates"
      ],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      metric: "5X organic traffic"
    },
    {
      icon: Link2,
      title: "Link Building",
      description: "Build authority with high-quality backlinks",
      details: [
        "Authority site outreach",
        "Guest posting opportunities",
        "Broken link reclamation",
        "Digital PR campaigns"
      ],
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
      metric: "50+ quality backlinks"
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Dominate local search results in your area",
      details: [
        "Google Business Profile optimization",
        "Local citation building",
        "Review management strategy",
        "Local content creation"
      ],
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      metric: "3X local leads"
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description: "Turn more visitors into paying customers",
      details: [
        "Landing page optimization",
        "CTA placement strategy",
        "User experience improvements",
        "A/B testing & analytics"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      metric: "94% conversion boost"
    },
  ];

  const moveCarousel = (direction: 1 | -1) => {
    setActiveService((prev) => (prev + direction + services.length) % services.length);
  };

  const handleCarouselWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (wheelLockRef.current) return;
    if (Math.abs(event.deltaY) < 20) return;

    wheelLockRef.current = true;
    moveCarousel(event.deltaY > 0 ? 1 : -1);

    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 500);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-emerald-200 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-sm border border-blue-200">
            <Sparkles className="w-4 h-4" />
            Comprehensive SEO Solutions
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            We Don't Just Do{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                SEO
              </span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-blue-300 to-emerald-300 opacity-30 -z-10" />
            </span>
          </h2>

          <p className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
            We Build Growth Systems.
          </p>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our proven methodology combines technical excellence with strategic content
            to deliver sustainable, long-term growth for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div
            className={`transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="lg:sticky lg:top-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-3xl blur-2xl" />

                <Card className="relative border-2 border-slate-200 shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-full blur-3xl" />

                  <CardContent className="p-8 md:p-10 relative z-10">
                    <div className="mb-8">
                      <div className={`w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-gradient-to-br ${services[activeService].color} flex items-center justify-center mb-6 shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-6`}>
                        {(() => {
                          const Icon = services[activeService].icon;
                          return <Icon className="w-10 h-10 text-white" />;
                        })()}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        {services[activeService].title}
                      </h3>

                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        {services[activeService].description}
                      </p>

                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${services[activeService].color} text-white font-semibold shadow-lg`}>
                        <Zap className="w-4 h-4" />
                        {services[activeService].metric}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                        What's Included
                      </h4>
                      {services[activeService].details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${services[activeService].color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-slate-700 font-medium">{detail}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-200">
                      <div className="flex gap-2 justify-center flex-wrap">
                        {services.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveService(idx)}
                            className={`!p-0 !px-0 !py-0 min-w-0 min-h-0 h-2 rounded-full transition-all duration-300 ${
                              idx === activeService
                                ? "w-8 bg-gradient-to-r from-blue-500 to-emerald-500"
                                : "w-2 bg-slate-300 hover:bg-slate-400"
                            }`}
                            aria-label={`View ${services[idx].title}`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div
            className={`transition-all md:block hidden duration-1000 delay-400 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div
              onWheel={handleCarouselWheel}
              className="relative h-[630px]  overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-4 backdrop-blur-sm"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/90 to-transparent z-20" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/90 to-transparent z-20" />

              <div className="absolute inset-0 flex items-center justify-center [perspective:1200px]">
                <div className="relative w-full h-[560px]">
                  {services.map((service, index) => {
                    const forwardOffset = (index - activeService + services.length) % services.length;
                    const signedOffset =
                      forwardOffset > services.length / 2 ? forwardOffset - services.length : forwardOffset;
                    const distance = Math.abs(signedOffset);

                    if (distance > 2) return null;

                    const Icon = service.icon;
                    const isActive = signedOffset === 0;
                    const topOffsetByDistance: Record<number, number> = {
                      0: 0,
                      1: 132,
                      2: 242,
                    };
                    const topPosition = 280 + (topOffsetByDistance[distance] ?? 0) * Math.sign(signedOffset);

                    const blurClass =
                      distance === 0
                        ? "blur-0"
                        : distance === 1
                          ? "blur-[1.5px]"
                          : "blur-[3px]";

                    const opacityClass =
                      distance === 0
                        ? "opacity-100"
                        : distance === 1
                          ? "opacity-72"
                          : "opacity-50";

                    const scaleValue = distance === 0 ? 1 : distance === 1 ? 0.95 : 0.89;
                    const rotateXDeg = signedOffset === 0 ? 0 : signedOffset < 0 ? 7 : -7;
                    const translateZPx = distance === 0 ? 0 : distance === 1 ? -35 : -70;
                    const zIndexClass = distance === 0 ? "z-30" : distance === 1 ? "z-20" : "z-10";
                    const cardTransform = `translateY(-50%) scale(${scaleValue}) rotateX(${rotateXDeg}deg) translateZ(${translateZPx}px)`;

                    return (
                      <Card
                        key={index}
                        onClick={() => setActiveService(index)}
                        className={`absolute left-0 right-0 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${
                          isActive
                            ? "border-2 border-transparent bg-gradient-to-r from-blue-50 to-emerald-50 shadow-xl"
                            : "border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg"
                        } ${blurClass} ${opacityClass} ${zIndexClass}`}
                        style={{ top: `${topPosition}px`, transform: cardTransform }}
                      >
                        <CardContent className="p-6 relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 ${isActive ? "opacity-5" : ""}`} />

                          <div className="flex items-start gap-4 relative z-10">
                            <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                              isActive ? "scale-110 shadow-lg" : ""
                            }`}>
                              <Icon className={`w-7 h-7 ${service.iconColor}`} />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <h3 className={`text-lg font-bold transition-colors ${
                                  isActive ? "text-slate-900" : "text-slate-800"
                                }`}>
                                  {service.title}
                                </h3>

                                <ArrowRight className={`w-5 h-5 flex-shrink-0 transition-all duration-500 ${
                                  isActive
                                    ? "text-emerald-600 translate-x-0 opacity-100"
                                    : "text-slate-400 -translate-x-2 opacity-0"
                                }`} />
                              </div>

                              <p className={`text-sm transition-colors ${
                                isActive ? "text-slate-700" : "text-slate-600"
                              }`}>
                                {service.description}
                              </p>

                              <div className={`mt-3 transition-all duration-500 overflow-hidden ${
                                isActive ? "max-h-10 opacity-100" : "max-h-10 opacity-100"
                              }`}>
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r ${service.color} text-white text-xs font-semibold`}>
                                  {service.metric}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className={`text-center transition-all duration-1000 delay-600 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="max-w-4xl mx-auto border-2 border-slate-200 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-emerald-500/5 to-blue-500/5" />

            <CardContent className="p-10 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-left">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    Ready to Build Your Growth System?
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Get a comprehensive SEO audit and custom strategy tailored to your business goals.
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                  >
                    Get Your Free Audit
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-slate-200">
                {[
                  { label: "Services Included", value: "7" },
                  { label: "Average ROI", value: "3-5X" },
                  { label: "Audit Delivery", value: "24-48h" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
}
