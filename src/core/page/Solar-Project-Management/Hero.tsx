'use client';

import { ChevronRight, Play, ArrowDown } from 'lucide-react';

const stats = [
  { value: '6', label: 'Role-Based Portals' },
  { value: '16', label: 'Core Modules' },
  { value: '100%', label: 'Stage Visibility' },
  { value: '1', label: 'Unified Platform' },
];

const pipeline = [
  'Lead Capture',
  'CRM / Sales',
  'Site Survey',
  'Proposal & E-sign',
  'Project Setup',
  'Installation',
  'QC Approval',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-hero-pattern overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl animate-pulse-soft pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-amber-500/8 blur-3xl animate-pulse-soft pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-sky-500/6 blur-3xl animate-pulse-soft pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-28 pt-32 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Lead-to-Commissioning Solar Operations Platform
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.08] tracking-tight mb-6 animate-slide-up">
            Solar Management for
            <br />
            <span className="text-gradient-solar">Sales, Survey, Install & QC</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
            One system for office admins and field teams, connecting lead capture, proposals,
            projects, installation, quality checks, documents, and finance in a single tracked workflow.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#demo"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold md:text-lg text-base hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-0.5 group"
            >
              Book Free Demo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#module-preview"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold md:text-lg text-base hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Play className="w-5 h-5 text-orange-400" />
              Watch How It Works
            </a>
          </div>

          {/* Pipeline Flow */}
          <div className="w-full md:block hidden max-w-4xl mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">End-to-End Customer Journey</p>
            <div className="flex flex-wrap justify-center items-center gap-2">
              {pipeline.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 hover:border-orange-500/30 transition-all duration-200 cursor-default">
                    <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center font-bold">{i + 1}</span>
                    {step}
                  </div>
                  {i < pipeline.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-orange-500/50 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl animate-slide-up" style={{ animationDelay: '0.45s' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/8 hover:border-orange-500/20 transition-colors">
                <div className="text-3xl font-extrabold text-gradient-solar mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
}
