'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';

const leadFeatures = [
  'Lead capture from website and enquiry forms',
  'Source tracking for ads, referrals, dealers and walk-ins',
  'Lead detail, notes and full activity timeline',
  'Lead confirmation email to customers',
  'CSV export with date filters',
  'Searchable lead records for faster follow-up',
  'Meeting invites with host contact details',
  'Site visit scheduling tied to the sales process',
  'Follow-up reminders for every stage',
];

const workflowFeatures = [
  'Lead assignment for sales and survey teams',
  'Survey workflow with measurements, photos and checklist',
  'Proposal builder with ROI, savings, EMI and subsidy',
  'PDF quotation generation with e-sign approval flow',
  'Project creation from approved proposals',
  'Installation scheduling with material planning',
  'QC approval and rework loop for accountability',
  'Document and finance records linked to each project',
];

const pipelineSteps = [
  { step: '01', title: 'Lead Captured', desc: 'Website, ads, chatbot, dealer and referral leads enter one pipeline' },
  { step: '02', title: 'Sales Assigned', desc: 'Leads are routed to the right team member with reminders and notes' },
  { step: '03', title: 'Survey Requested', desc: 'A site survey is created and assigned to field engineers' },
  { step: '04', title: 'Survey Submitted', desc: 'Measurements, shadow checks, photos and checklist are recorded' },
  { step: '05', title: 'Proposal Prepared', desc: 'Quotation, ROI and commercial details are generated from survey data' },
  { step: '06', title: 'Customer Approved', desc: 'PDF quotation is shared and signed off through the approval flow' },
  { step: '07', title: 'Project Executed', desc: 'Project, materials and installation schedules move into execution' },
  { step: '08', title: 'QC & Finance Closed', desc: 'Quality approval, documents and invoices stay attached to the same job' },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0f172a] overflow-hidden">
      {/* Lead intake + workflow section */}
      <div className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-4">
              Leads & CRM
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5">
              Every Solar Enquiry Enters a{' '}
              <span className="text-gradient-blue">Structured Workflow</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Capture leads, assign teams, schedule meetings, and move every customer from first contact to approved proposal without losing handoffs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Lead Features */}
            <div className="p-8 rounded-3xl bg-white/3 border border-sky-500/15 hover:border-sky-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/20 flex items-center justify-center">
                  <span className="text-sky-400 text-lg font-bold">L</span>
                </div>
                <h3 className="text-xl font-bold text-white">Lead Management</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {leadFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow Features */}
            <div className="p-8 rounded-3xl bg-white/3 border border-orange-500/15 hover:border-orange-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-400 text-lg font-bold">W</span>
                </div>
                <h3 className="text-xl font-bold text-white">Operational Workflow</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {workflowFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              {/* Stage Flow */}
              <div className="mt-6 pt-6 border-t border-white/8">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Journey Stages</p>
                <div className="flex flex-wrap gap-2">
                  {['Lead', 'CRM', 'Survey', 'Proposal', 'Project', 'Installation', 'QC'].map((s, i) => (
                    <div key={s} className="flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-white/8">{s}</span>
                      {i < 6 && <ArrowRight className="w-3 h-3 text-orange-500/40" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Automated Pipeline Flow */}
      <div className="py-24 bg-gradient-to-b from-[#0f172a] to-[#0a0f1e] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-orange-500/3 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-4">
              Tracked Handoffs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5">
              Every Stage Moves with{' '}
              <span className="text-gradient-solar">Clear Ownership</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Assignment, acceptance, work submission, and completion happen in one connected system so office admins and field teams always stay aligned.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pipelineSteps.map((s) => (
              <div
                key={s.step}
                className="relative p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-orange-500/25 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl font-extrabold text-orange-500/20 mb-3 group-hover:text-orange-500/25 transition-colors">
                  {s.step}
                </div>
                <h4 className="text-white font-semibold text-sm mb-2 leading-snug">{s.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-orange-500/30 group-hover:bg-orange-500/60 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
