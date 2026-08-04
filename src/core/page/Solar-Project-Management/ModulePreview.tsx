'use client';

import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import {
  LucideIcon,
  LayoutDashboard,
  Users,
  Ruler,
  FileText,
  ClipboardList,
  Wrench,
  Headphones,
  Play,
  Pause,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';

const ReactPlayer = lazy(() => import('react-player/lazy'));

type PreviewModule = {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  youtubeUrl: string;
  accent: string;
  accentSoft: string;
};

const previewModules: PreviewModule[] = [
  {
    id: 'admin-panel',
    icon: LayoutDashboard,
    title: 'Admin Panel',
    tagline: 'Full control in one console',
    description:
      'Oversee leads, teams, projects, inventory and finance from a single admin console with role permissions, reports and operational visibility.',
    highlights: ['Central dashboard', 'Role permissions', 'Ops visibility'],
    youtubeUrl: 'https://youtu.be/XNFqkc4HHQI',
    accent: '#38bdf8',
    accentSoft: 'rgba(56,189,248,0.15)',
  },
  {
    id: 'crm-sales',
    icon: Users,
    title: 'CRM & Sales',
    tagline: 'Assign, follow up, close',
    description:
      'Route leads to the right salesperson, log notes, schedule meetings and site visits, and track conversion from one console.',
    highlights: ['Lead assignment', 'Follow-up reminders', 'Meeting & visit tracking'],
    youtubeUrl: 'https://youtu.be/W0NmN6R_TrU',
    accent: '#f97316',
    accentSoft: 'rgba(249,115,22,0.15)',
  },
  {
    id: 'site-surveys',
    icon: Ruler,
    title: 'Site Surveys',
    tagline: 'Field data that sells',
    description:
      'Run structured surveys with measurements, shadow analysis, GPS, photo categories and checklist-backed reports.',
    highlights: ['Measurement capture', 'Photo categories', 'Survey PDF report'],
    youtubeUrl: 'https://youtu.be/rH67uijtuvQ',
    accent: '#10b981',
    accentSoft: 'rgba(16,185,129,0.15)',
  },
  {
    id: 'proposals',
    icon: FileText,
    title: 'Proposals & E-sign',
    tagline: 'Quote fast, close faster',
    description:
      'Build kit-based quotations with ROI, EMI, subsidy and GST, then share PDF proposals for customer approval.',
    highlights: ['Kit-based pricing', 'ROI & savings', 'E-sign approval'],
    youtubeUrl: 'https://youtu.be/-YA7rdi8b2I',
    accent: '#8b5cf6',
    accentSoft: 'rgba(139,92,246,0.15)',
  },
  {
    id: 'projects',
    icon: ClipboardList,
    title: 'Projects',
    tagline: 'From approval to execution',
    description:
      'Create projects from signed proposals, define milestones, assign owners, and track every stage until the job is ready for the field.',
    highlights: ['Project creation', 'Milestone tracking', 'Team ownership'],
    youtubeUrl: 'https://youtu.be/7Ad6NqLNZtI',
    accent: '#f43f5e',
    accentSoft: 'rgba(244,63,94,0.15)',
  },
  {
    id: 'installation',
    icon: Wrench,
    title: 'Installation',
    tagline: 'Crews, schedules, daily progress',
    description:
      'Schedule installation crews, allot materials, capture daily field progress, and keep site execution visible to the office in real time.',
    highlights: ['Crew scheduling', 'Material allotment', 'Live field progress'],
    youtubeUrl: 'https://youtu.be/c5UM6hMxXBw',
    accent: '#fb7185',
    accentSoft: 'rgba(251,113,133,0.15)',
  },
  {
    id: 'qc',
    icon: Headphones,
    title: 'QC & Rework Control',
    tagline: 'Approve only what is right',
    description:
      'Run structured QC checks, punch lists and rework loops between inspectors and installers before close-out.',
    highlights: ['QC checklists', 'Punch lists', 'Rework loop'],
    youtubeUrl: 'https://youtu.be/27-hrZzqQzE',
    accent: '#ec4899',
    accentSoft: 'rgba(236,72,153,0.15)',
  },
];

function youtubeThumb(url: string) {
  const match = url.match(
    /(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{6,})/
  );
  return match ? `https://i.ytimg.com/vi/${match[1]}/hqdefault.jpg` : null;
}

function ModuleVideoPanel({
  mod,
  playing,
  onPlay,
  onStop,
  compact = false,
}: {
  mod: PreviewModule;
  playing: boolean;
  onPlay: () => void;
  onStop: () => void;
  compact?: boolean;
}) {
  const Icon = mod.icon;
  const thumb = mod.youtubeUrl ? youtubeThumb(mod.youtubeUrl) : null;

  return (
    <div
      className={`relative bg-[#060b16] overflow-hidden ${
        compact ? 'aspect-video' : 'flex-1 min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]'
      }`}
    >
      {playing && mod.youtubeUrl ? (
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center bg-[#060b16]">
              <div className="w-9 h-9 rounded-full border-2 border-orange-400/30 border-t-orange-400 animate-spin" />
            </div>
          }
        >
          <ReactPlayer
            url={mod.youtubeUrl}
            playing={playing}
            controls
            width="100%"
            height="100%"
            className="!absolute inset-0"
            config={{ youtube: { playerVars: { rel: 0, modestbranding: 1 } } }}
          />
        </Suspense>
      ) : (
        <>
          {thumb ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumb}
              alt={`${mod.title} module preview`}
              className="absolute inset-0 w-full h-full object-cover scale-105 opacity-70"
            />
          ) : (
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: `radial-gradient(ellipse at 30% 20%, ${mod.accentSoft}, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(249,115,22,0.12), transparent 50%), #060b16`,
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1629] via-[#0d1629]/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 pointer-events-none">
            <div
              className="mb-3 w-11 h-11 rounded-xl flex items-center justify-center border animate-pulse-soft"
              style={{
                background: mod.accentSoft,
                borderColor: `${mod.accent}40`,
                boxShadow: `0 0 28px ${mod.accent}33`,
              }}
            >
              <Icon className="w-5 h-5" style={{ color: mod.accent }} />
            </div>
            {mod.youtubeUrl ? (
              <button
                type="button"
                onClick={onPlay}
                className="pointer-events-auto group relative flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full bg-white text-[#0f172a] font-bold text-sm shadow-xl shadow-black/40 hover:scale-[1.03] transition-transform"
                aria-label={`Play ${mod.title} preview video`}
              >
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                Watch demo
              </button>
            ) : (
              <p className="text-slate-400 text-xs">Preview video coming soon.</p>
            )}
          </div>
        </>
      )}

      {playing && mod.youtubeUrl && (
        <button
          type="button"
          onClick={onStop}
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-white text-xs font-medium hover:bg-black/80"
          aria-label="Stop video and return to preview"
        >
          <Pause className="w-3 h-3" />
          Close
        </button>
      )}
    </div>
  );
}

function ModuleDetails({ mod }: { mod: PreviewModule }) {
  return (
    <div className="px-4 py-3 border-t border-white/5">
      <p className="text-[10px] font-semibold tracking-wider uppercase mb-0.5" style={{ color: mod.accent }}>
        {mod.tagline}
      </p>
      <p className="text-slate-400 text-xs leading-snug line-clamp-3">{mod.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-2.5">
        {mod.highlights.map((item) => (
          <span
            key={item}
            className="px-2 py-1 rounded-full text-[10px] font-medium border"
            style={{
              color: mod.accent,
              background: mod.accentSoft,
              borderColor: `${mod.accent}33`,
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <a
        href="#demo"
        className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white transition-all"
        style={{
          background: `linear-gradient(135deg, ${mod.accent}, ${mod.accent}cc)`,
          boxShadow: `0 6px 18px ${mod.accent}33`,
        }}
      >
        Book demo
        <ChevronRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

export default function ModulePreview() {
  const [activeId, setActiveId] = useState(previewModules[0].id);
  const [playing, setPlaying] = useState(false);
  const [panelKey, setPanelKey] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;

  const active = previewModules.find((m) => m.id === activeId) ?? previewModules[0];
  const activeIndex = previewModules.findIndex((m) => m.id === activeId);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const onSelectModule = (id: string) => {
    if (id === activeIdRef.current) return;
    setPlaying(false);
    setActiveId(id);
    setPanelKey((k) => k + 1);
  };

  // Auto-advance only on desktop split view
  useEffect(() => {
    if (playing || !isDesktop) return;
    const timer = window.setInterval(() => {
      const idx = previewModules.findIndex((m) => m.id === activeIdRef.current);
      const next = previewModules[(idx + 1) % previewModules.length];
      onSelectModule(next.id);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [playing, isDesktop]);

  return (
    <section
      id="module-preview"
      className="relative flex min-h-0 lg:min-h-[100svh] flex-col overflow-hidden bg-[#080e1a] py-8 sm:py-10 lg:py-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#080e1a] to-[#0f172a]" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute top-1/3 right-0 w-[320px] h-[320px] rounded-full blur-3xl pointer-events-none transition-colors duration-700"
        style={{ background: active.accentSoft }}
      />

      <div className="relative flex flex-1 min-h-0 flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center shrink-0 mb-5 lg:mb-6">
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-2.5">
            Module Walkthrough
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight">
            See Every Module{' '}
            <span className="text-gradient-solar">In Action</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-snug">
            Tap a module to preview that stage of the solar journey — from admin console to QC close-out.
          </p>
        </div>

        {/* ========== MOBILE ACCORDION ========== */}
        <div className="lg:hidden space-y-2.5" role="list">
          {previewModules.map((mod, index) => {
            const Icon = mod.icon;
            const isOpen = mod.id === activeId;
            const panelId = `module-panel-${mod.id}`;
            const headerId = `module-header-${mod.id}`;

            return (
              <div
                key={mod.id}
                role="listitem"
                className="rounded-2xl border overflow-hidden transition-colors duration-300"
                style={{
                  background: isOpen ? 'rgba(13,22,41,0.95)' : 'rgba(13,22,41,0.7)',
                  borderColor: isOpen ? `${mod.accent}55` : 'rgba(255,255,255,0.08)',
                  boxShadow: isOpen ? `0 0 0 1px ${mod.accent}22, 0 12px 32px rgba(0,0,0,0.25)` : 'none',
                }}
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => onSelectModule(mod.id)}
                  className="w-full flex items-center gap-3 px-3.5 py-3.5 text-left"
                >
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isOpen ? mod.accentSoft : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${isOpen ? `${mod.accent}40` : 'rgba(255,255,255,0.06)'}`,
                    }}
                  >
                    <Icon style={{ color: isOpen ? mod.accent : '#94a3b8', width: 18, height: 18 }} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold tracking-wider text-slate-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`font-semibold text-sm ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                        {mod.title}
                      </span>
                    </span>
                    <span className="block text-xs text-slate-500 truncate mt-0.5">{mod.tagline}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    style={{ color: isOpen ? mod.accent : '#64748b' }}
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`grid transition-[grid-template-rows] duration-350 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    {isOpen && (
                      <div className="border-t border-white/5 animate-module-panel">
                        <ModuleVideoPanel
                          mod={mod}
                          playing={playing}
                          onPlay={() => setPlaying(true)}
                          onStop={() => setPlaying(false)}
                          compact
                        />
                        <ModuleDetails mod={mod} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========== DESKTOP SPLIT VIEW ========== */}
        <div className="hidden lg:grid flex-1 min-h-0 lg:grid-cols-[320px_1fr] xl:grid-cols-[340px_1fr] gap-5 items-stretch">
          <div
            className="flex flex-col gap-1.5 overflow-hidden h-full min-h-0 rounded-2xl border border-white/10 bg-[#0d1629]/90 p-3 shadow-2xl shadow-black/20"
            role="tablist"
            aria-label="Platform modules"
          >
            {previewModules.map((mod, index) => {
              const Icon = mod.icon;
              const isActive = mod.id === activeId;
              return (
                <button
                  key={mod.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onSelectModule(mod.id)}
                  className={`group relative flex-1 flex items-center gap-3 px-3.5 rounded-xl border text-left transition-all duration-300 min-h-0 ${
                    isActive
                      ? 'bg-white/8 border-white/20 shadow-md shadow-black/20'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                  }`}
                  style={
                    isActive
                      ? { borderColor: `${mod.accent}55`, boxShadow: `0 0 0 1px ${mod.accent}22` }
                      : undefined
                  }
                >
                  {isActive && (
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-7 rounded-r-full"
                      style={{ background: mod.accent }}
                    />
                  )}
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: isActive ? mod.accentSoft : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${isActive ? `${mod.accent}40` : 'rgba(255,255,255,0.06)'}`,
                    }}
                  >
                    <Icon style={{ color: isActive ? mod.accent : '#94a3b8', width: 16, height: 16 }} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold tracking-wider text-slate-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`font-semibold text-sm truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {mod.title}
                      </span>
                    </span>
                    <span className="block text-xs text-slate-500 truncate mt-0.5">{mod.tagline}</span>
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'
                    }`}
                    style={{ color: mod.accent }}
                  />
                </button>
              );
            })}
          </div>

          <div
            key={panelKey}
            className="relative flex h-full min-h-0 flex-col rounded-2xl border border-white/10 bg-[#0d1629]/90 overflow-hidden shadow-2xl shadow-black/40 animate-module-panel"
          >
            <div
              className="absolute inset-x-0 top-0 h-px z-10"
              style={{
                background: `linear-gradient(90deg, transparent, ${active.accent}, transparent)`,
              }}
            />

            <ModuleVideoPanel
              mod={active}
              playing={playing}
              onPlay={() => setPlaying(true)}
              onStop={() => setPlaying(false)}
            />

            <div
              className="relative z-20 flex items-center justify-center gap-2 py-2.5 border-t border-white/5 bg-[#0a1220]/90"
              role="tablist"
              aria-label="Module pagination"
            >
              {previewModules.map((m, i) => {
                const isActiveDot = m.id === activeId;
                return (
                  <button
                    key={m.id}
                    type="button"
                    role="tab"
                    aria-selected={isActiveDot}
                    aria-label={`Show ${m.title}`}
                    title={m.title}
                    onClick={() => onSelectModule(m.id)}
                    className="relative flex items-center justify-center h-5 w-5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
                  >
                    <span
                      className="block rounded-full transition-all duration-300 ease-out"
                      style={{
                        width: isActiveDot ? 22 : 7,
                        height: 7,
                        background: isActiveDot ? active.accent : 'rgba(255,255,255,0.35)',
                        boxShadow: isActiveDot ? `0 0 10px ${active.accent}88` : 'none',
                      }}
                    />
                    <span className="sr-only">
                      {i + 1}. {m.title}
                      {isActiveDot ? ' (current)' : ''}
                    </span>
                  </button>
                );
              })}
              <span className="ml-2 text-[10px] font-medium text-slate-500 tabular-nums">
                {activeIndex + 1}/{previewModules.length}
              </span>
            </div>

            <div className="shrink-0 px-5 py-3 border-t border-white/5">
              <div className="flex items-center justify-between gap-2.5">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold tracking-wider uppercase mb-0.5" style={{ color: active.accent }}>
                    {active.tagline}
                  </p>
                  <h3 className="text-lg font-extrabold text-white leading-snug">{active.title}</h3>
                  <p className="text-slate-400 text-sm leading-snug mt-1 line-clamp-2 max-w-2xl">
                    {active.description}
                  </p>
                </div>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-1.5 self-start shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${active.accent}, ${active.accent}cc)`,
                    boxShadow: `0 6px 18px ${active.accent}33`,
                  }}
                >
                  Book demo
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {active.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded-full text-[10px] font-medium border"
                    style={{
                      color: active.accent,
                      background: active.accentSoft,
                      borderColor: `${active.accent}33`,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
