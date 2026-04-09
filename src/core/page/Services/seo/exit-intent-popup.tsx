"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/core/components/Dialog";
import { Button } from "@/core/components/ui/button";
import { Input } from "@/core/components/input";
import { Label } from "@/core/components/lable";
import { TrendingUp, FileCheck as CheckCircle2, Download, Sparkles, ArrowRight, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 &&
        !hasShown &&
        !sessionStorage.getItem("exitIntentShown")
      ) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

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
          source: "exit_intent_popup",
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result?.message || "Failed to submit request");
      }

      toast({
        title: "Success!",
        description:
          "Your free SEO audit request has been submitted. Check your email for the checklist!",
      });

      setIsOpen(false);
      setEmail("");
      setWebsite("");

      setTimeout(() => {
        window.open("/seo-checklist.pdf", "_blank");
      }, 1000);
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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-2xl border-4 border-blue-500 shadow-2xl p-0 overflow-hidden">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500" />

          <div className="absolute -top-3 -right-3 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center rotate-12 shadow-xl border-4 border-white z-10">
            <div className="text-center">
              <Gift className="w-8 h-8 text-white mx-auto mb-1" />
              <span className="text-xs font-bold text-white uppercase">
                Free
              </span>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <DialogHeader className="space-y-4 text-center">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-xl">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>

              <DialogTitle className="text-3xl md:text-4xl font-bold text-slate-900">
                Wait! Don't Leave Empty-Handed
              </DialogTitle>

              <DialogDescription className="text-lg text-slate-600">
                Get your <span className="font-bold text-blue-600">FREE SEO
                Audit</span> + downloadable{" "}
                <span className="font-bold text-violet-600">
                  SEO Checklist PDF
                </span>{" "}
                (Worth $500!)
              </DialogDescription>
            </DialogHeader>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "Complete technical SEO analysis",
                "Competitor ranking comparison",
                "Keyword opportunity report",
                "Actionable improvement roadmap",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <Label htmlFor="exit-email" className="text-slate-700 font-semibold">
                  Email Address *
                </Label>
                <Input
                  id="exit-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 h-12 border-2 border-slate-300 focus:border-blue-500"
                />
              </div>

              <div>
                <Label htmlFor="exit-website" className="text-slate-700 font-semibold">
                  Website URL *
                </Label>
                <Input
                  id="exit-website"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  required
                  className="mt-2 h-12 border-2 border-slate-300 focus:border-blue-500"
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
                    <Download className="w-5 h-5 mr-2" />
                    Get My Free Audit + Checklist
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>

              <div className="flex items-center justify-center gap-2 pt-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <p className="text-xs text-slate-500 text-center">
                  <span className="font-bold text-slate-700">247 businesses</span> claimed their audit this week
                </p>
              </div>
            </form>

            <p className="text-xs text-center text-slate-500 mt-6">
              No credit card required. Instant access. We respect your privacy.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
