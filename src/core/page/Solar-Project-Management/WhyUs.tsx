'use client';

import { useState, useEffect, useCallback } from 'react';
import { Check, Zap, Shield, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Lead-to-Commissioning in One Platform',
    description: 'Replace spreadsheet handoffs with one connected flow from lead capture to final QC and invoicing.',
    color: '#f59e0b',
  },
  {
    icon: Shield,
    title: 'Role-Based Team Workspaces',
    description: 'Sales, survey, proposal, project, installation and QC teams each get focused portals for their own tasks.',
    color: '#10b981',
  },
  {
    icon: Star,
    title: 'Built for Solar Operations',
    description: 'Designed around solar EPC handoffs, field surveys, proposal approvals, material planning and quality control.',
    color: '#38bdf8',
  },
  {
    icon: Check,
    title: 'Materials, Finance and Documents Stay Linked',
    description: 'Proposal items flow into project planning while invoices, client files and project documents remain attached to the same record.',
    color: '#f97316',
  },
];

const testimonials = [
  {
    quote: "The biggest win for us is visibility. Sales, survey and installation all work from the same project trail, so handoffs no longer disappear in calls and spreadsheets.",
    name: 'Amit Verma',
    role: 'Director, Rooftop EPC Team',
    location: 'Delhi NCR',
    initials: 'AV',
    color: '#f97316',
  },
  {
    quote: "Survey reports, proposal approvals and material planning now move in sequence. Our project managers spend less time chasing updates and more time executing.",
    name: 'Neha Singh',
    role: 'Operations Head, Solar EPC Company',
    location: 'Hyderabad',
    initials: 'NS',
    color: '#10b981',
  },
  {
    quote: "The QC and rework loop is especially useful. Installers know exactly what must be fixed, and finance can see when a project is actually ready for closure.",
    name: 'Karan Patel',
    role: 'CEO, Solar Operations Firm',
    location: 'Ahmedabad',
    initials: 'KP',
    color: '#38bdf8',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-green-500/4 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why choose us */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold mb-4">
            Why Solar Management
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Why Solar Companies{' '}
            <span className="text-gradient-solar">Choose Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: `${b.color}12`, border: `1px solid ${b.color}25` }}
                >
                  <Icon className="w-7 h-7" style={{ color: b.color }} />
                </div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{b.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Trusted by Solar Companies{' '}
            <span className="text-gradient-solar">Across India</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">Real results from real solar businesses.</p>
        </div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

type Testimonial = { quote: string; name: string; role: string; location: string; initials: string; color: string };

function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length), [testimonials.length]);
  const next = useCallback(() => setActive((a) => (a + 1) % testimonials.length), [testimonials.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cards */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="w-full flex-shrink-0 px-2">
              <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-white/3 border border-white/10 flex flex-col min-h-[220px]">
                {/* Stars + Google */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/6 border border-white/10">
                    <GoogleLogo />
                    <span className="text-xs font-semibold text-slate-300">Google</span>
                  </div>
                </div>
                <p className="text-slate-200 text-base leading-relaxed mb-6 flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role} • {t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active ? 'w-6 h-2 bg-orange-500' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
