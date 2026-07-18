"use client";

import { Button } from "@/core/components/ui/button";
import { Badge } from "@/core/components/badge";
import { TrendingUp, Users, Award, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { SEOAuditDialog } from "@/core/page/Services/seo/seo-audit-dialog";
import { Breadcrumb } from "@/core/components/Breadcrumb";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 w-full">
        <Breadcrumb
          className="mb-6"
          items={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'SEO', href: '/services/seo' },
          ]}
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Trusted by 300+ Growing Businesses
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
              Rank Higher.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Get More Leads.
              </span>{" "}
              Grow Consistently with SEO.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We help businesses dominate search results, increase organic traffic,
              and convert visitors into paying customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => setDialogOpen(true)}
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Free SEO Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-slate-50 transition-all duration-300"
              >
                Book Strategy Call
              </Button>
            </div>

            <SEOAuditDialog open={dialogOpen} onOpenChange={setDialogOpen} />

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-900">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-2xl font-bold">300+</span>
                </div>
                <p className="text-sm text-slate-600">Projects Delivered</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-900">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <span className="text-2xl font-bold">3X</span>
                </div>
                <p className="text-sm text-slate-600">Avg. Traffic Growth</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-900">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span className="text-2xl font-bold">12+</span>
                </div>
                <p className="text-sm text-slate-600">Years Experience</p>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />

              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">SEO Performance</h3>
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                      Live Data
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Organic Traffic</span>
                        <span className="font-semibold text-emerald-600">+287%</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full animate-grow-width" style={{width: '87%'}} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Keyword Rankings</span>
                        <span className="font-semibold text-blue-600">+156%</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-grow-width delay-150" style={{width: '72%'}} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Conversion Rate</span>
                        <span className="font-semibold text-amber-600">+94%</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full animate-grow-width delay-300" style={{width: '64%'}} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <div className="text-3xl font-bold text-slate-900">12.5K</div>
                      <div className="text-sm text-slate-600 mt-1">Monthly Visitors</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-xl">
                      <div className="text-3xl font-bold text-slate-900">482</div>
                      <div className="text-sm text-slate-600 mt-1">New Leads</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white" />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-white" />
                    </div>
                    <div className="text-sm text-slate-600">
                      <span className="font-semibold text-slate-900">50+ clients</span> achieved similar results
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-200 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">+234%</div>
                    <div className="text-xs text-slate-600">Growth Rate</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-200 animate-float delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Top 3 Rank</div>
                    <div className="text-xs text-slate-600">Google Search</div>
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
