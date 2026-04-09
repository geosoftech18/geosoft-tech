"use client";

import { useState } from "react";
import { Button } from "@/core/components/ui/button";
import { Input } from "@/core/components/input";
import { Label } from "@/core/components/lable";
import { Card, CardContent } from "@/core/components/card";
import {
  ArrowRight,
  FileCheck as CheckCircle2,
  Download,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  Sparkles,
  TrendingUp,
  Target,
  Rocket,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/seo-audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          website,
          source: "cta_section",
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result?.message || "Failed to submit request");
      }

      toast({
        title: "Success!",
        description:
          "Your free SEO audit request has been submitted. We'll send your report within 24 hours!",
      });

      setEmail("");
      setWebsite("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/1234567890?text=Hi! I'm interested in your SEO services.",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+1234567890";
  };

  const handleEmail = () => {
    window.location.href = "mailto:hello@yourseoagency.com?subject=SEO Inquiry";
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-700 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))] opacity-20" />

      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-400 rounded-full text-sm font-semibold mb-6 border border-emerald-500/30">
              <Rocket className="w-4 h-4" />
              Ready to Grow Your Business?
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Get Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Free SEO Audit
                </span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-blue-500 to-violet-500 opacity-30 blur-sm" />
              </span>
              <br />+ Actionable Growth Strategy
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover exactly what's holding your website back and get a
              custom roadmap to dominate your competition in search rankings.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-violet-500" />
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-xl">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Free SEO Audit
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Worth $500 - Yours Free Today
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="cta-email" className="text-slate-300 font-semibold">
                      Your Email *
                    </Label>
                    <Input
                      id="cta-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-2 h-12 bg-white/90 border-2 border-slate-700 focus:border-blue-500 text-slate-900 placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="cta-website" className="text-slate-300 font-semibold">
                      Website URL *
                    </Label>
                    <Input
                      id="cta-website"
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      required
                      className="mt-2 h-12 bg-white/90 border-2 border-slate-700 focus:border-blue-500 text-slate-900 placeholder:text-slate-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? (
                      "Processing..."
                    ) : (
                      <>
                        Get My Free Audit Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 space-y-3">
                  {[
                    "Complete technical SEO analysis",
                    "Keyword opportunity report",
                    "Competitor comparison",
                    "Custom action plan",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <p className="text-slate-300 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-6 pt-6 border-t border-slate-700">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <p className="text-xs text-slate-400">
                    <span className="font-bold text-white">127 audits</span>{" "}
                    requested this week
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500" />
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-xl">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        Book a Consultation
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Talk to an SEO expert today
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Prefer to speak with someone? Schedule a free 30-minute
                    strategy call with one of our SEO specialists.
                  </p>

                  <Button className="w-full h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    Schedule Free Call
                    <Calendar className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-500" />
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Quick Contact
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={handleWhatsApp}
                      className="flex flex-col items-center justify-center p-4 bg-green-600 hover:bg-green-700 rounded-xl transition-all duration-300 hover:scale-105 group"
                    >
                      <MessageCircle className="w-6 h-6 text-white mb-2 group-hover:rotate-12 transition-transform" />
                      <span className="text-xs text-white font-semibold">
                        WhatsApp
                      </span>
                    </button>

                    <button
                      onClick={handleCall}
                      className="flex flex-col items-center justify-center p-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 hover:scale-105 group"
                    >
                      <Phone className="w-6 h-6 text-white mb-2 group-hover:rotate-12 transition-transform" />
                      <span className="text-xs text-white font-semibold">
                        Call
                      </span>
                    </button>

                    <button
                      onClick={handleEmail}
                      className="flex flex-col items-center justify-center p-4 bg-violet-600 hover:bg-violet-700 rounded-xl transition-all duration-300 hover:scale-105 group"
                    >
                      <Mail className="w-6 h-6 text-white mb-2 group-hover:rotate-12 transition-transform" />
                      <span className="text-xs text-white font-semibold">
                        Email
                      </span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

