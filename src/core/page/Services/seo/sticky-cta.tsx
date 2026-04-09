"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Mail, X, ChevronUp } from "lucide-react";
import { Button } from "@/core/components/ui/button";
import { Card } from "@/core/components/card";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 800);
      setShowScrollTop(scrolled > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hi! I'm interested in your SEO services.", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+1234567890";
  };

  const handleEmail = () => {
    window.location.href = "mailto:hello@yourseoagency.com?subject=SEO Inquiry";
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {isExpanded && (
          <Card className="animate-in slide-in-from-bottom duration-300 shadow-2xl border-2 border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold text-sm">Quick Contact</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 justify-start"
                  size="sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>

                <Button
                  onClick={handleCall}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 justify-start"
                  size="sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>

                <Button
                  onClick={handleEmail}
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 justify-start"
                  size="sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </Card>
        )}

        <div className="flex flex-col gap-3 items-end">
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full bg-slate-700 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 group"
              aria-label="Scroll to top"
            >
              <ChevronUp size={28}
              strokeWidth={2.8} className="!w-6 !h-6 shrink-0 group-hover:-translate-y-1 transition-transform text-white" />
            </button>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 group"
            aria-label="Contact options"
          >
 <MessageCircle
              size={28}
              strokeWidth={2.8}
              className="!w-6 !h-6 shrink-0 group-hover:rotate-12 transition-transform text-white"
            />            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
              3
            </span>
          </button>
        </div>
      </div>

      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 left-6 z-50 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105 group animate-in slide-in-from-left duration-500"
      >
        <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="sm:hidden">WhatsApp</span>
      </button>
    </>
  );
}
