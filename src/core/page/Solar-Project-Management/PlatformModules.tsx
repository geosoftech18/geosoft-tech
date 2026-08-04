'use client';

import { LucideIcon,
  Globe, Users, ClipboardList, FileText, Package,
  ShoppingCart, DollarSign, FolderOpen, BarChart3, Headphones,
  Ruler, Cpu
} from 'lucide-react';

type Module = {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  borderColor: string;
  bgColor: string;
};

const modules: Module[] = [
  {
    icon: Globe,
    title: 'Lead Capture',
    description: 'Capture enquiries from website forms, ads, chatbot, dealers, referrals and walk-ins with source tracking and customer confirmation emails.',
    iconColor: '#38bdf8',
    borderColor: 'rgba(56,189,248,0.2)',
    bgColor: 'rgba(56,189,248,0.08)',
  },
  {
    icon: Users,
    title: 'CRM & Sales',
    description: 'Assign leads, manage notes, schedule follow-ups and meetings, track site visits, and monitor sales performance from one admin console.',
    iconColor: '#f97316',
    borderColor: 'rgba(249,115,22,0.2)',
    bgColor: 'rgba(249,115,22,0.08)',
  },
  {
    icon: Ruler,
    title: 'Site Surveys',
    description: 'Run field surveys with measurements, structural notes, shadow analysis, GPS, photo categories, checklist completion and report generation.',
    iconColor: '#10b981',
    borderColor: 'rgba(16,185,129,0.2)',
    bgColor: 'rgba(16,185,129,0.08)',
  },
  {
    icon: FileText,
    title: 'Proposals & E-sign',
    description: 'Build solar quotations with kit-based pricing, ROI, savings, EMI, subsidy and GST calculations, then send PDF proposals for approval.',
    iconColor: '#8b5cf6',
    borderColor: 'rgba(139,92,246,0.2)',
    bgColor: 'rgba(139,92,246,0.08)',
  },
  {
    icon: ClipboardList,
    title: 'Projects & Installation',
    description: 'Create projects from approved proposals, schedule installations, track tasks and milestones, and monitor daily progress from field teams.',
    iconColor: '#f43f5e',
    borderColor: 'rgba(244,63,94,0.2)',
    bgColor: 'rgba(244,63,94,0.08)',
  },
  {
    icon: Package,
    title: 'Inventory & Kits',
    description: 'Manage products, brands, kits, warehouses, serial numbers and stock movements, with low-stock visibility for planning and allotment.',
    iconColor: '#f59e0b',
    borderColor: 'rgba(245,158,11,0.2)',
    bgColor: 'rgba(245,158,11,0.08)',
  },
  {
    icon: ShoppingCart,
    title: 'Procurement & Vendors',
    description: 'Handle vendor records, RFQs, purchase orders, approvals and procurement analytics to support project delivery without stock surprises.',
    iconColor: '#06b6d4',
    borderColor: 'rgba(6,182,212,0.2)',
    bgColor: 'rgba(6,182,212,0.08)',
  },
  {
    icon: DollarSign,
    title: 'Finance & Billing',
    description: 'Track quotations, invoice PDFs, payments, project expenses and materials-based billing with GST-ready finance records.',
    iconColor: '#22c55e',
    borderColor: 'rgba(34,197,94,0.2)',
    bgColor: 'rgba(34,197,94,0.08)',
  },
  {
    icon: FolderOpen,
    title: 'Document Vault',
    description: 'Store project-first client files, loan packs, proposal PDFs and invoice documents for secure access across teams.',
    iconColor: '#6366f1',
    borderColor: 'rgba(99,102,241,0.2)',
    bgColor: 'rgba(99,102,241,0.08)',
  },
  {
    icon: Cpu,
    title: 'Role-Based Portals',
    description: 'Dedicated portals for Sales, Survey, Proposal, Project Manager, Installation and QC teams keep each member focused on assigned work.',
    iconColor: '#fb923c',
    borderColor: 'rgba(251,146,60,0.2)',
    bgColor: 'rgba(251,146,60,0.08)',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Review lead conversion, revenue, inventory, installation status, team performance and operational reports in real time.',
    iconColor: '#14b8a6',
    borderColor: 'rgba(20,184,166,0.2)',
    bgColor: 'rgba(20,184,166,0.08)',
  },
  {
    icon: Headphones,
    title: 'QC & Rework Control',
    description: 'Verify installations with structured QC checks, punch lists, approval steps and rework loops between inspectors and installers.',
    iconColor: '#ec4899',
    borderColor: 'rgba(236,72,153,0.2)',
    bgColor: 'rgba(236,72,153,0.08)',
  },
];

export default function PlatformModules() {
  return (
    <section id="platform" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0a0f1e] to-[#0a0f1e]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-4">
            All-in-One Platform
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            One Platform.{' '}
            <span className="text-gradient-solar">Complete Control.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Solar Management connects sales, surveys, proposals, projects, installation, quality checks, inventory, finance and documents in one operational backbone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.title}
                className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: mod.borderColor,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: mod.bgColor, border: `1px solid ${mod.borderColor}` }}
                >
                  <Icon className="w-5 h-5" style={{ color: mod.iconColor }} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2 leading-snug">{mod.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{mod.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
