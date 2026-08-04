'use client';

import { useState } from 'react';

import { CheckCircle2, Loader2, Send, Calendar, Phone, Mail, Building2, Users, MessageSquare } from 'lucide-react';



const companyTypes = [
  'Solar EPC Company',
  'Sales Team / Lead Management',
  'Survey Engineering Team',
  'Proposal / Design Team',
  'Project Management Team',
  'Installation Team',
  'QC / Inspection Team',
  'Finance / Operations Team',
  'Rooftop Solar Company',
  'Other',
];

const teamSizes = ['1–5 people', '6–20 people', '21–50 people', '51–100 people', '100+ people'];

type FormState = {
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  company_type: string;
  team_size: string;
  message: string;
};

const empty: FormState = {
  full_name: '',
  email: '',
  phone: '',
  company_name: '',
  company_type: '',
  team_size: '',
  message: '',
};

export default function DemoForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    

    setLoading(false);
    
      setSuccess(true);
      setForm(empty);
    
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-green-500/15 border-2 border-green-500/30 flex items-center justify-center mb-6 animate-pulse-soft">
          <CheckCircle2 className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Demo Booked Successfully!</h3>
        <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
          Our team will reach out within 24 hours to schedule your personalised Solar Management walkthrough.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="px-6 py-2.5 rounded-xl bg-white/8 border border-white/15 text-white text-sm font-medium hover:bg-white/12 transition-colors"
        >
          Book Another Demo
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-orange-400" />
            Full Name <span className="text-orange-500">*</span>
          </label>
          <input
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            required
            placeholder="Rajesh Kumar"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-orange-400" />
            Email Address <span className="text-orange-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="rajesh@sunpower.com"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            Phone Number <span className="text-orange-500">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all"
          />
        </div>

        {/* Company Name */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-orange-400" />
            Company Name <span className="text-orange-500">*</span>
          </label>
          <input
            name="company_name"
            value={form.company_name}
            onChange={handleChange}
            required
            placeholder="SunPower EPC Ltd."
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all"
          />
        </div>

        {/* Company Type */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-300">
            Company Type <span className="text-orange-500">*</span>
          </label>
          <select
            name="company_type"
            value={form.company_type}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all appearance-none cursor-pointer"
            style={{ colorScheme: 'dark' }}
          >
            <option value="" disabled className="bg-slate-900">Select company type</option>
            {companyTypes.map((t) => (
              <option key={t} value={t} className="bg-slate-900">{t}</option>
            ))}
          </select>
        </div>

        {/* Team Size */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-300">Team Size</label>
          <select
            name="team_size"
            value={form.team_size}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all appearance-none cursor-pointer"
            style={{ colorScheme: 'dark' }}
          >
            <option value="" className="bg-slate-900">Select team size</option>
            {teamSizes.map((s) => (
              <option key={s} value={s} className="bg-slate-900">{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
          Message (Optional)
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="Tell us which teams, workflows or handoff challenges you want covered in the demo..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all resize-none"
        />
      </div>

      {error && (
        <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-base hover:from-orange-600 hover:to-amber-600 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Calendar className="w-5 h-5" />
            Schedule My Free Demo
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-600">
        Free 45-minute personalised demo focused on your solar workflow.
      </p>
    </form>
  );
}
