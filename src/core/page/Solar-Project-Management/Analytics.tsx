'use client';

import { TrendingUp, Users, FolderKanban, BarChart2, DollarSign, Wrench } from 'lucide-react';

const reports = [
  { icon: TrendingUp, label: 'Lead Conversion Reports', value: 'Live', sub: 'source-to-win visibility', color: '#f97316' },
  { icon: Users, label: 'Team Performance', value: 'Role-wise', sub: 'assignment accountability', color: '#38bdf8' },
  { icon: FolderKanban, label: 'Project Status', value: 'End-to-end', sub: 'lead to QC tracking', color: '#10b981' },
  { icon: BarChart2, label: 'Sales Reports', value: 'Faster', sub: 'follow-ups and meetings', color: '#f59e0b' },
  { icon: DollarSign, label: 'Finance Dashboard', value: 'GST-ready', sub: 'quotation to invoice records', color: '#22c55e' },
  { icon: Wrench, label: 'Installation Reports', value: 'Field-ready', sub: 'progress, materials and rework', color: '#8b5cf6' },
];

const dashboardMetrics = [
  { label: 'Active Leads', value: '142', change: 'Tracked', positive: true },
  { label: 'Surveys Pending', value: '18', change: 'Assigned', positive: true },
  { label: 'Proposals Sent', value: '67', change: 'Live', positive: true },
  { label: 'Projects Active', value: '38', change: 'Scheduled', positive: true },
  { label: 'QC Reviews', value: '09', change: 'In queue', positive: false },
  { label: 'Invoices Raised', value: '24', change: 'This month', positive: true },
];

export default function Analytics() {
  return (
    <section id="analytics" className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-500/4 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-4">
            Real-Time Intelligence
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Full Operational Visibility,{' '}
            <span className="text-gradient-solar">Every Day</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Monitor lead progress, project execution, QC status, inventory movement and finance signals from one central dashboard.
          </p>
        </div>

        {/* Mock Dashboard Card */}
        <div className="mb-14 rounded-3xl border border-white/8 bg-white/3 overflow-hidden shadow-2xl shadow-black/30">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-white/2">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="text-xs text-slate-500 font-medium">Solar Management - Operations Dashboard</div>
            <div className="text-xs text-slate-600">Live</div>
          </div>

          {/* Metric Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y divide-white/6">
            {dashboardMetrics.map((m) => (
              <div key={m.label} className="p-5 hover:bg-white/3 transition-colors">
                <p className="text-xs text-slate-500 font-medium mb-1.5 leading-snug">{m.label}</p>
                <p className="text-2xl font-extrabold text-white mb-1">{m.value}</p>
                <span
                  className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${
                    m.positive
                      ? 'bg-green-500/10 text-green-400'
                      : 'bg-red-500/10 text-red-400'
                  }`}
                >
                  {m.change}
                </span>
              </div>
            ))}
          </div>

          {/* Mini chart bar visual */}
          <div className="px-6 py-5 border-t border-white/6">
            <p className="text-xs text-slate-500 mb-3 font-medium">Monthly Revenue Trend</p>
            <div className="flex items-end gap-2 h-12">
              {[40, 55, 48, 62, 58, 72, 68, 80, 75, 88, 82, 95].map((v, i) => (
                <div key={i} className="flex-1 rounded-sm transition-all duration-300 hover:opacity-100 opacity-80"
                  style={{
                    height: `${v}%`,
                    background: `linear-gradient(to top, #f97316, #f59e0b)`,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                <span key={m} className="text-xs text-slate-600 flex-1 text-center">{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Report Types */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reports.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.label}
                className="flex flex-col items-center text-center gap-3 p-4 md:flex-row md:items-center md:text-left md:gap-5 md:p-5 rounded-2xl bg-white/3 border border-white/8 hover:border-white/15 hover:bg-white/5 transition-all duration-200 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: `${r.color}15`, border: `1px solid ${r.color}25` }}
                >
                  <Icon className="w-5 h-5" style={{ color: r.color }} />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm mb-0.5">{r.label}</p>
                  <div className="flex flex-col items-center gap-0.5 md:flex-row md:items-baseline md:gap-2">
                    <span className="text-xl font-extrabold" style={{ color: r.color }}>{r.value}</span>
                    <span className="text-xs text-slate-500">{r.sub}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
