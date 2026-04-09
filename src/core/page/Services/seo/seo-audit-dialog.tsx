"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/core/components/Dialog";
import { Button } from "@/core/components/ui/button";
import { Input } from "@/core/components/input";
import { Label } from "@/core/components/lable";
import { Textarea } from "@/core/components/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  } from "@/core/components/select";
import { Checkbox } from "@/core/components/checkbox";
import { Badge } from "@/core/components/badge";
import { Globe, TrendingUp, Target, Users, DollarSign, FileCheck as CheckCircle2, Loader as Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/core/components/alert";

interface SEOAuditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SEOAuditDialog({ open, onOpenChange }: SEOAuditDialogProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    industry: "",
    monthlyTraffic: "",
    currentRanking: "",
    targetKeywords: "",
    goals: [] as string[],
    budget: "",
    timeline: "",
    competitors: "",
    additionalInfo: "",
  });

  const goals = [
    "Increase organic traffic",
    "Improve keyword rankings",
    "Generate more leads",
    "Boost conversion rates",
    "Local SEO optimization",
    "E-commerce growth",
  ];

  const handleInputChange = (
    field: string,
    value: string | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/seo-audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          companyName: formData.companyName,
          website: formData.website,
          industry: formData.industry,
          monthlyTraffic: formData.monthlyTraffic,
          currentRanking: formData.currentRanking,
          targetKeywords: formData.targetKeywords,
          goals: formData.goals,
          budget: formData.budget,
          timeline: formData.timeline,
          competitors: formData.competitors,
          additionalInfo: formData.additionalInfo,
          source: "seo_audit_dialog",
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result?.message || "Failed to submit request");
      }

      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting audit request:', err);
      setError('Failed to submit your request. Please try again.');
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    setError(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      website: "",
      industry: "",
      monthlyTraffic: "",
      currentRanking: "",
      targetKeywords: "",
      goals: [],
      budget: "",
      timeline: "",
      competitors: "",
      additionalInfo: "",
    });
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(resetForm, 300);
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl">Audit Request Received!</DialogTitle>
              <DialogDescription className="text-base mt-4">
                Thank you for requesting a free SEO audit. Our team will analyze your
                website and send you a comprehensive report within 24-48 hours.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6 w-full space-y-3">
              <div className="bg-slate-50 rounded-lg p-4 text-left">
                <h4 className="font-semibold text-sm text-slate-900 mb-2">
                  What happens next?
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Our experts will analyze your website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>You'll receive a detailed SEO report</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>We'll schedule a strategy call with you</span>
                  </li>
                </ul>
              </div>
              <Button onClick={handleClose} className="w-full" size="lg">
                Got it, thanks!
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            Get Your Free SEO Audit
          </DialogTitle>
          <DialogDescription>
            Tell us about your website and goals. We'll provide a comprehensive SEO
            analysis and actionable recommendations.
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex-1 h-2 rounded-full transition-all ${
                s <= step ? "bg-gradient-to-r from-blue-600 to-emerald-600" : "bg-slate-200"
              }`}
            />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Contact Information
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">
                  Company Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="companyName"
                  placeholder="Your Company Inc."
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={() => setStep(2)}
                disabled={!formData.fullName || !formData.email || !formData.companyName}
                className="bg-gradient-to-r from-blue-600 to-blue-700"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              Website Details
            </h3>

            <div className="space-y-2">
              <Label htmlFor="website">
                Website URL <span className="text-red-500">*</span>
              </Label>
              <Input
                id="website"
                type="url"
                placeholder="https://yourwebsite.com"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select
                  value={formData.industry}
                  onValueChange={(value) => handleInputChange("industry", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="saas">SaaS</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="realestate">Real Estate</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlyTraffic">Current Monthly Traffic</Label>
                <Select
                  value={formData.monthlyTraffic}
                  onValueChange={(value) => handleInputChange("monthlyTraffic", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1k">0 - 1,000</SelectItem>
                    <SelectItem value="1k-5k">1,000 - 5,000</SelectItem>
                    <SelectItem value="5k-10k">5,000 - 10,000</SelectItem>
                    <SelectItem value="10k-50k">10,000 - 50,000</SelectItem>
                    <SelectItem value="50k+">50,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentRanking">
                Current Google Ranking (if known)
              </Label>
              <Input
                id="currentRanking"
                placeholder="e.g., Page 2 for 'digital marketing'"
                value={formData.currentRanking}
                onChange={(e) => handleInputChange("currentRanking", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetKeywords">Target Keywords</Label>
              <Textarea
                id="targetKeywords"
                placeholder="e.g., SEO services, digital marketing, content strategy"
                value={formData.targetKeywords}
                onChange={(e) => handleInputChange("targetKeywords", e.target.value)}
                rows={3}
              />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button
                onClick={() => setStep(3)}
                disabled={!formData.website}
                className="bg-gradient-to-r from-blue-600 to-blue-700"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Goals & Budget
            </h3>

            <div className="space-y-2">
              <Label>What are your main SEO goals?</Label>
              <div className="grid grid-cols-2 gap-3">
                {goals.map((goal) => (
                  <div
                    key={goal}
                    className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-all ${
                      formData.goals.includes(goal)
                        ? "border-blue-600 bg-blue-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                    onClick={() => toggleGoal(goal)}
                  >
                    <Checkbox
                      checked={formData.goals.includes(goal)}
                      onCheckedChange={() => toggleGoal(goal)}
                    />
                    <span className="text-sm">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Monthly Budget</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => handleInputChange("budget", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                    <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k+">$10,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Desired Timeline</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => handleInputChange("timeline", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1-3months">1-3 months</SelectItem>
                    <SelectItem value="3-6months">3-6 months</SelectItem>
                    <SelectItem value="6months+">6+ months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="competitors">Main Competitors (URLs)</Label>
              <Textarea
                id="competitors"
                placeholder="e.g., competitor1.com, competitor2.com"
                value={formData.competitors}
                onChange={(e) => handleInputChange("competitors", e.target.value)}
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">
                Additional Information (Optional)
              </Label>
              <Textarea
                id="additionalInfo"
                placeholder="Anything else we should know about your business or SEO goals?"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                rows={3}
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex gap-3">
                <DollarSign className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-blue-900 mb-1">
                    100% Free, No Commitment Required
                  </p>
                  <p className="text-blue-700">
                    This audit is completely free with no strings attached. We'll provide
                    actionable insights whether you work with us or not.
                  </p>
                </div>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="flex justify-between pt-2">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={loading || formData.goals.length === 0}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get My Free Audit"
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
