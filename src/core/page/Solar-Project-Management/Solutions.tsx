'use client';

import { useRef, useState } from 'react';
import {
  Building2,
  Wrench,
  Zap,
  Store,
  Network,
  Home,
  ChevronLeft,
  ChevronRight,
  LucideIcon,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/pagination';

type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  color: string;
  bg: string;
  border: string;
};

const solutions: Solution[] = [
  {
    icon: Building2,
    title: 'Solar EPC Companies',
    description:
      'Run the full lead-to-commissioning journey in one place, with clear stage ownership from sales through installation and QC.',
    highlights: ['Lead to QC visibility', 'Multi-project coordination', 'Cross-team handoff control'],
    color: '#f97316',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.2)',
  },
  {
    icon: Wrench,
    title: 'Installation Teams',
    description:
      'Give field crews a dedicated workspace for daily jobs, material checklists, progress photos, reports and QC rework updates.',
    highlights: ['Daily work logs', 'Material issue notes', 'QC rework tracking'],
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
  },
  {
    icon: Zap,
    title: 'Proposal & Design Teams',
    description:
      'Turn survey data into commercial proposals faster with ROI, savings, EMI, subsidy and PDF approval workflows.',
    highlights: ['ROI calculations', 'PDF quotation flow', 'Proposal approval tracking'],
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
  },
  {
    icon: Store,
    title: 'Sales Managers',
    description:
      'Track lead sources, assign owners, monitor follow-ups and schedule meetings or site visits without losing customer context.',
    highlights: ['Lead assignment', 'Meeting scheduling', 'Source-wise tracking'],
    color: '#38bdf8',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.2)',
  },
  {
    icon: Network,
    title: 'Project & Operations Heads',
    description:
      'Coordinate materials, milestones, documents and execution timelines with an admin view across every active project.',
    highlights: ['Material planning', 'Milestone tracking', 'Project-first documents'],
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
  },
  {
    icon: Home,
    title: 'QC & Finance Teams',
    description:
      'Close the loop with technical inspections, punch lists, invoices, payment tracking and document records attached to the same job.',
    highlights: ['QC approval flow', 'Invoice visibility', 'Compliance documents'],
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.2)',
  },
];

function SolutionCard({ sol }: { sol: Solution }) {
  const Icon = sol.icon;
  return (
    <div
      className="group h-full p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 bg-white/[0.025] hover:bg-white/[0.045]"
      style={{ borderColor: sol.border }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${sol.color}15`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: sol.bg, border: `1px solid ${sol.border}` }}
      >
        <Icon className="w-6 h-6" style={{ color: sol.color }} />
      </div>
      <h3 className="text-white font-bold text-lg mb-3">{sol.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">{sol.description}</p>
      <div className="flex flex-col gap-2">
        {sol.highlights.map((h) => (
          <div key={h} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: sol.color }} />
            <span className="text-slate-300 text-xs font-medium">{h}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const navBtnClass =
  'inline-flex !h-10 !w-10 !min-w-10 !shrink-0 !items-center !justify-center !rounded-full !border !border-white/20 !bg-white/10 !p-0 !px-0 !py-0 !text-white shadow-none transition-all hover:!border-orange-400/50 hover:!bg-orange-500/20 hover:!text-orange-300 active:scale-95 [&>svg]:!h-5 [&>svg]:!w-5 [&>svg]:!text-current';

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="solutions" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-4">
            Perfect For
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Built for Every{' '}
            <span className="text-gradient-solar">Solar Business</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Built for the teams that run solar businesses every day, from first enquiry to final approval and project documentation.
          </p>
        </div>

        {/* Mobile / tablet carousel */}
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1.12}
            centeredSlides
            loop
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              480: { slidesPerView: 1.3, spaceBetween: 16 },
              640: { slidesPerView: 1.7, spaceBetween: 18 },
              768: { slidesPerView: 2.15, spaceBetween: 20 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
            className="solutions-swiper !pb-12"
          >
            {solutions.map((sol) => (
              <SwiperSlide key={sol.title} className="!h-auto">
                <SolutionCard sol={sol} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="relative z-10 mt-2 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous solution"
              className={navBtnClass}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <span className="min-w-[3.5rem] text-center text-[11px] font-medium !text-slate-400 tabular-nums">
              {activeIndex + 1} / {solutions.length}
            </span>
            <button
              type="button"
              aria-label="Next solution"
              className={navBtnClass}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-6">
          {solutions.map((sol) => (
            <SolutionCard key={sol.title} sol={sol} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .solutions-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.45) !important;
          opacity: 1 !important;
          width: 8px;
          height: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        .solutions-swiper .swiper-pagination-bullet-active {
          background: #fb923c !important;
          width: 26px;
          border-color: #fdba74;
          border-radius: 999px;
          box-shadow:
            0 0 0 3px rgba(249, 115, 22, 0.2),
            0 0 14px rgba(249, 115, 22, 0.9);
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
