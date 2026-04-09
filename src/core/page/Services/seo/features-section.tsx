"use client";

import { Card, CardContent } from "@/core/components/card";
import { Target, LineChart, Search, Users, Zap, Shield } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const features = [
  {
    icon: Target,
    title: "Keyword Research & Strategy",
    description: "Data-driven keyword analysis to target high-converting search terms that bring qualified leads to your business.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: LineChart,
    title: "Technical SEO Optimization",
    description: "Comprehensive website audits and fixes to ensure your site is crawlable, fast, and search-engine friendly.",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Search,
    title: "Content Strategy & Creation",
    description: "SEO-optimized content that ranks well and converts visitors into customers with compelling messaging.",
    gradient: "from-amber-500 to-amber-600"
  },
  {
    icon: Users,
    title: "Link Building & Authority",
    description: "White-hat backlink strategies that build domain authority and improve rankings across all target keywords.",
    gradient: "from-rose-500 to-rose-600"
  },
  {
    icon: Zap,
    title: "Performance Tracking",
    description: "Real-time analytics and monthly reports showing traffic growth, ranking improvements, and ROI metrics.",
    gradient: "from-violet-500 to-violet-600"
  },
  {
    icon: Shield,
    title: "Local SEO Domination",
    description: "Google Business Profile optimization and local citations to dominate map searches in your service area.",
    gradient: "from-teal-500 to-teal-600"
  }
];

export function FeaturesSection() {
  return (
    <section className="md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Complete SEO Solutions That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Our comprehensive approach covers every aspect of SEO to ensure maximum visibility and sustainable growth.
          </p>
        </div>

        <div className="md:hidden">
          <Swiper
            slidesPerView={1.15}
            spaceBetween={16}
            grabCursor={true}
            className="!overflow-visible !px-1 !pb-2"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <Card className="border-2 hover:border-slate-300 transition-all duration-300 hover:shadow-xl group h-full">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-slate-300 transition-all duration-300 hover:shadow-xl group"
            >
              <CardContent className="p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
