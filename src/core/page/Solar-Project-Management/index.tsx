'use client';

import Hero from '@/core/page/Solar-Project-Management/Hero';
import Features from '@/core/page/Solar-Project-Management/Features';
import PlatformModules from '@/core/page/Solar-Project-Management/PlatformModules';
import ModulePreview from '@/core/page/Solar-Project-Management/ModulePreview';
import Solutions from '@/core/page/Solar-Project-Management/Solutions';
import Analytics from '@/core/page/Solar-Project-Management/Analytics';
import WhyUs from '@/core/page/Solar-Project-Management/WhyUs';
import DemoForm from '@/core/page/Solar-Project-Management/DemoForm';

import { Calendar, ChevronRight, Phone, Sun } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
     
      <Hero />
      {/* <Features /> */}
      <PlatformModules />
      <ModulePreview />
      <Solutions />
      <Analytics />
      <WhyUs />

      {/* Demo CTA Section */}
      <section id="demo" className="py-24 bg-[#080e1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/6 via-transparent to-amber-500/4" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

        {/* Decorative ring */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-orange-500/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-orange-500/3 pointer-events-none" /> */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Pitch */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-6">
                Free Demo — No Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                Ready to Run Your{' '}
                <span className="text-gradient-solar">Solar Operations in One System?</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Connect lead capture, CRM, surveys, proposals, installation, QC, documents and finance in one platform built for solar teams in the field and the office.
              </p>

              {/* What you get */}
              <div className="space-y-4 mb-10">
                {[
                  'Personalised 45-minute live demo',
                  'Live walkthrough of admin console and role portals',
                  'Lead to commissioning workflow review',
                  'Modules for proposals, inventory, QC and finance',
                  'Discussion around your current team handoffs',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-3 h-3 text-orange-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Contact shortcuts */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+917776085112"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/8 hover:border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  +91 77760 85112
                </a>
                <a
                  href="https://wa.me/917776085112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/15 hover:border-green-500/30 transition-all"
                >
                  <Sun className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 blur-lg opacity-60" />
              <div className="relative p-8 rounded-3xl bg-[#0d1629] border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-none">Schedule Free Demo</h3>
                    <p className="text-slate-500 text-xs mt-0.5">Respond within 24 hours</p>
                  </div>
                </div>
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            One Platform. Complete Solar Operations Control.
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Give every department one shared system for lead tracking, project execution, quality approval and document-ready closure.
          </p>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-orange-600 font-bold text-lg hover:bg-orange-50 transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-900/30 group"
          >
            Book Your Demo
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

    </main>
  );
}
