"use client"

import { useState, useEffect } from "react"
import { Button } from "@/core/components/ui/button"
import { Card, CardContent } from "@/core/components/card"
import { Badge } from "@/core/components/badge"
import { Input } from "@/core/components/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/core/components/select"

import { useToast } from "@/hooks/use-toast"
import {
  ArrowRight,
  BarChart3,
  Brain,
  Target,
  Zap,
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  Globe,
  Loader2,
  Search,
  MousePointer,
  MessageCircle,
  Mail,
  Video,
  Fuel as Funnel,
  Play,
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Building,
  DollarSign,
  FileText,
  Send,
  Shield,
  Award,
  ShoppingBag,
  Heart,
  GraduationCap,
  Laptop,
  Home,
  Pause,
  Clock,
  X,
  Calendar,
} from "lucide-react"

// Embedded CSS for standalone usage
const embeddedStyles = `
  .digital-marketing-page {
    --background: #ffffff;
    --foreground: #0f172a;
    --card: #f8fafc;
    --card-foreground: #0f172a;
    --popover: #ffffff;
    --popover-foreground: #1e293b;
    --primary: #0f172a;
    --primary-foreground: #ffffff;
    --secondary: #6366f1;
    --secondary-foreground: #ffffff;
    --muted: #f1f5f9;
    --muted-foreground: #64748b;
    --accent: #6366f1;
    --accent-foreground: #ffffff;
    --destructive: #ef4444;
    --destructive-foreground: #ffffff;
    --border: #e2e8f0;
    --input: #f1f5f9;
    --ring: #6366f1;
    --chart-1: #6366f1;
    --chart-2: #06b6d4;
    --chart-3: #10b981;
    --chart-4: #f59e0b;
    --chart-5: #ef4444;
    --radius: 0.5rem;
  }

  .dark .digital-marketing-page {
    --background: #0f172a;
    --foreground: #f8fafc;
    --card: #1e293b;
    --card-foreground: #f8fafc;
    --popover: #1e293b;
    --popover-foreground: #f8fafc;
    --primary: #f8fafc;
    --primary-foreground: #0f172a;
    --secondary: #334155;
    --secondary-foreground: #f8fafc;
    --muted: #334155;
    --muted-foreground: #94a3b8;
    --accent: #334155;
    --accent-foreground: #f8fafc;
    --destructive: #dc2626;
    --destructive-foreground: #f8fafc;
    --border: #334155;
    --input: #334155;
    --ring: #6366f1;
    --chart-1: #6366f1;
    --chart-2: #06b6d4;
    --chart-3: #10b981;
    --chart-4: #f59e0b;
    --chart-5: #ef4444;
  }

  .digital-marketing-page {
    min-height: 100vh;
    background: linear-gradient(135deg, var(--background) 0%, var(--muted) 30%, var(--accent) 10%);
    color: var(--foreground);
  }

  .digital-marketing-page * {
    border-color: var(--border);
  }

  .digital-marketing-page .bg-background { background-color: var(--background); }
  .digital-marketing-page .bg-foreground { background-color: var(--foreground); }
  .digital-marketing-page .bg-card { background-color: var(--card); }
  .digital-marketing-page .bg-card-foreground { background-color: var(--card-foreground); }
  .digital-marketing-page .bg-popover { background-color: var(--popover); }
  .digital-marketing-page .bg-popover-foreground { background-color: var(--popover-foreground); }
  .digital-marketing-page .bg-primary { background-color: var(--primary); }
  .digital-marketing-page .bg-primary-foreground { background-color: var(--primary-foreground); }
  .digital-marketing-page .bg-secondary { background-color: var(--secondary); }
  .digital-marketing-page .bg-secondary-foreground { background-color: var(--secondary-foreground); }
  .digital-marketing-page .bg-muted { background-color: var(--muted); }
  .digital-marketing-page .bg-muted-foreground { background-color: var(--muted-foreground); }
  .digital-marketing-page .bg-accent { background-color: var(--accent); }
  .digital-marketing-page .bg-accent-foreground { background-color: var(--accent-foreground); }
  .digital-marketing-page .bg-destructive { background-color: var(--destructive); }
  .digital-marketing-page .bg-destructive-foreground { background-color: var(--destructive-foreground); }
  .digital-marketing-page .bg-border { background-color: var(--border); }
  .digital-marketing-page .bg-input { background-color: var(--input); }
  .digital-marketing-page .bg-ring { background-color: var(--ring); }
  .digital-marketing-page .bg-chart-1 { background-color: var(--chart-1); }
  .digital-marketing-page .bg-chart-2 { background-color: var(--chart-2); }
  .digital-marketing-page .bg-chart-3 { background-color: var(--chart-3); }
  .digital-marketing-page .bg-chart-4 { background-color: var(--chart-4); }
  .digital-marketing-page .bg-chart-5 { background-color: var(--chart-5); }

  .digital-marketing-page .text-background { color: var(--background); }
  .digital-marketing-page .text-foreground { color: var(--foreground); }
  .digital-marketing-page .text-card { color: var(--card); }
  .digital-marketing-page .text-card-foreground { color: var(--card-foreground); }
  .digital-marketing-page .text-popover { color: var(--popover); }
  .digital-marketing-page .text-popover-foreground { color: var(--popover-foreground); }
  .digital-marketing-page .text-primary { color: var(--primary); }
  .digital-marketing-page .text-primary-foreground { color: var(--primary-foreground); }
  .digital-marketing-page .text-secondary { color: var(--secondary); }
  .digital-marketing-page .text-secondary-foreground { color: var(--secondary-foreground); }
  .digital-marketing-page .text-muted { color: var(--muted); }
  .digital-marketing-page .text-muted-foreground { color: var(--muted-foreground); }
  .digital-marketing-page .text-accent { color: var(--accent); }
  .digital-marketing-page .text-accent-foreground { color: var(--accent-foreground); }
  .digital-marketing-page .text-destructive { color: var(--destructive); }
  .digital-marketing-page .text-destructive-foreground { color: var(--destructive-foreground); }
  .digital-marketing-page .text-border { color: var(--border); }
  .digital-marketing-page .text-input { color: var(--input); }
  .digital-marketing-page .text-ring { color: var(--ring); }
  .digital-marketing-page .text-chart-1 { color: var(--chart-1); }
  .digital-marketing-page .text-chart-2 { color: var(--chart-2); }
  .digital-marketing-page .text-chart-3 { color: var(--chart-3); }
  .digital-marketing-page .text-chart-4 { color: var(--chart-4); }
  .digital-marketing-page .text-chart-5 { color: var(--chart-5); }

  .digital-marketing-page .border-background { border-color: var(--background); }
  .digital-marketing-page .border-foreground { border-color: var(--foreground); }
  .digital-marketing-page .border-card { border-color: var(--card); }
  .digital-marketing-page .border-card-foreground { border-color: var(--card-foreground); }
  .digital-marketing-page .border-popover { border-color: var(--popover); }
  .digital-marketing-page .border-popover-foreground { border-color: var(--popover-foreground); }
  .digital-marketing-page .border-primary { border-color: var(--primary); }
  .digital-marketing-page .border-primary-foreground { border-color: var(--primary-foreground); }
  .digital-marketing-page .border-secondary { border-color: var(--secondary); }
  .digital-marketing-page .border-secondary-foreground { border-color: var(--secondary-foreground); }
  .digital-marketing-page .border-muted { border-color: var(--muted); }
  .digital-marketing-page .border-muted-foreground { border-color: var(--muted-foreground); }
  .digital-marketing-page .border-accent { border-color: var(--accent); }
  .digital-marketing-page .border-accent-foreground { border-color: var(--accent-foreground); }
  .digital-marketing-page .border-destructive { border-color: var(--destructive); }
  .digital-marketing-page .border-destructive-foreground { border-color: var(--destructive-foreground); }
  .digital-marketing-page .border-border { border-color: var(--border); }
  .digital-marketing-page .border-input { border-color: var(--input); }
  .digital-marketing-page .border-ring { border-color: var(--ring); }
  .digital-marketing-page .border-chart-1 { border-color: var(--chart-1); }
  .digital-marketing-page .border-chart-2 { border-color: var(--chart-2); }
  .digital-marketing-page .border-chart-3 { border-color: var(--chart-3); }
  .digital-marketing-page .border-chart-4 { border-color: var(--chart-4); }
  .digital-marketing-page .border-chart-5 { border-color: var(--chart-5); }

  .digital-marketing-page .shadow-xs {
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }

  .digital-marketing-page .shadow-sm {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }

  .digital-marketing-page .shadow-lg {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  .digital-marketing-page .shadow-xl {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }

  .digital-marketing-page .shadow-2xl {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }

  .digital-marketing-page .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }

  .digital-marketing-page .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .digital-marketing-page .animate-spin {
    animation: spin 1s linear infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .digital-marketing-page .animate-in {
    animation: animate-in 0.2s ease-out;
  }

  .digital-marketing-page .fade-in-0 {
    animation: fade-in 0.2s ease-out;
  }

  .digital-marketing-page .zoom-in-95 {
    animation: zoom-in 0.2s ease-out;
  }

  .digital-marketing-page .slide-in-from-left-5 {
    animation: slide-in-from-left 0.2s ease-out;
  }

  .digital-marketing-page .slide-in-from-right-5 {
    animation: slide-in-from-right 0.2s ease-out;
  }

  @keyframes animate-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes zoom-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slide-in-from-left {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slide-in-from-right {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`


interface FormData {
  website: string
  budget: string
  email: string
  phone: string
  industry: string
  name: string
}

interface ROIData {
  leads: number
  roi: number
  revenue: number
}

interface CaseStudy {
  logo: string
  industry: string
  challenge: string
  solution: string
  beforeMetrics: {
    traffic: string
    conversion: string
    roas: string
  }
  afterMetrics: {
    traffic: string
    conversion: string
    roas: string
  }
  improvements: {
    traffic: string
    conversion: string
    revenue: string
    cac: string
  }
  proofType: string
  verified: boolean
}

interface AuditFormData {
  website: string
  name: string
  email: string
  phone: string
  industry: string
}

export default function DigitalMarketingService() {
  const { toast } = useToast()

  const [currentStep, setCurrentStep] = useState(1)
  const [budgetValue, setBudgetValue] = useState(50000)
  const [animatedLeads, setAnimatedLeads] = useState(0)
  const [animatedROI, setAnimatedROI] = useState(0)
  const [animatedRevenue, setAnimatedRevenue] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0)
  const [currentIndustrySlide, setCurrentIndustrySlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [industryViewportWidth, setIndustryViewportWidth] = useState(0)

  // Update industry viewport width on mount and resize
  useEffect(() => {
    const updateIndustryViewportWidth = () => {
      setIndustryViewportWidth(window.innerWidth)
    }
    
    updateIndustryViewportWidth()
    window.addEventListener('resize', updateIndustryViewportWidth)
    return () => window.removeEventListener('resize', updateIndustryViewportWidth)
  }, [])

  // Get industry cards per slide based on viewport
  const getIndustryCardsPerSlide = () => {
    if (industryViewportWidth < 768) return 1 // Mobile
    if (industryViewportWidth < 1024) return 2 // Tablet
    return 3 // Desktop
  }
  const [isReviewsAutoPlaying, setIsReviewsAutoPlaying] = useState(true)
  const [currentReviewsSlide, setCurrentReviewsSlide] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)

  // Update viewport width on mount and resize
  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth)
    }
    
    updateViewportWidth()
    window.addEventListener('resize', updateViewportWidth)
    return () => window.removeEventListener('resize', updateViewportWidth)
  }, [])

  // Get cards per slide based on viewport
  const getCardsPerSlide = () => {
    if (viewportWidth < 768) return 1 // Mobile
    if (viewportWidth < 1024) return 2 // Tablet
    return 3 // Desktop
  }

  // Navigation functions for testimonials carousel
  const nextReviewsSlide = () => {
    const cardsPerSlide = getCardsPerSlide()
    const maxSlide = Math.ceil(6 / cardsPerSlide) - 1
    setCurrentReviewsSlide((prev) => {
      const currentSlide = Math.floor(prev / cardsPerSlide)
      if (currentSlide >= maxSlide) {
        return 0 // Loop back to start
      }
      return prev + cardsPerSlide
    })
  }

  const prevReviewsSlide = () => {
    const cardsPerSlide = getCardsPerSlide()
    const maxSlide = Math.ceil(6 / cardsPerSlide) - 1
    setCurrentReviewsSlide((prev) => {
      const currentSlide = Math.floor(prev / cardsPerSlide)
      if (currentSlide <= 0) {
        return (maxSlide * cardsPerSlide) // Go to last slide
      }
      return prev - cardsPerSlide
    })
  }

  const goToReviewsSlide = (index: number) => {
    setCurrentReviewsSlide(index)
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
  })

  const [currentAuditStep, setCurrentAuditStep] = useState(1)
  const [auditBudgetValue, setAuditBudgetValue] = useState(50000)
  const [isAuditLoading, setIsAuditLoading] = useState(false)
  const [auditErrors, setAuditErrors] = useState<Record<string, string>>({})

  const [auditFormData, setAuditFormData] = useState<AuditFormData>({
    website: "",
    name: "",
    email: "",
    phone: "",
    industry: "",
  })

  const [showScrollForm, setShowScrollForm] = useState(false)
  const [showFloatingForm, setShowFloatingForm] = useState(false)
  const [showWhatsApp, setShowWhatsApp] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  const [showMultiStepForm, setShowMultiStepForm] = useState(false)
  const [multiStepFormStep, setMultiStepFormStep] = useState(1)
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [showHeroForm, setShowHeroForm] = useState(false)
  const [showConsultationForm, setShowConsultationForm] = useState(false)
  const [multiStepFormData, setMultiStepFormData] = useState({
    name: "",
    website: "",
    industry: "",
    goals: [] as string[],
    email: "",
    phone: "",
    consent: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      setScrollProgress(scrollPercent)

      // COMMENTED OUT: Show scroll form at 50% scroll
      // if (scrollPercent > 50 && !showScrollForm) {
      //   setShowScrollForm(true)
      // }
    }

    window.addEventListener("scroll", handleScroll)

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showMultiStepForm && !showExitIntent) {
        setShowExitIntent(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [showScrollForm, showMultiStepForm, showExitIntent])

  const calculateROI = (budget: number, industry: string) => {
    const industryMultipliers = {
      ecommerce: { leads: 0.08, roi: 4.2, revenue: 5.5 },
      saas: { leads: 0.06, roi: 5.8, revenue: 7.2 },
      realestate: { leads: 0.04, roi: 6.5, revenue: 8.1 },
      healthcare: { leads: 0.05, roi: 4.8, revenue: 6.3 },
      education: { leads: 0.07, roi: 3.9, revenue: 4.8 },
      other: { leads: 0.06, roi: 4.5, revenue: 5.8 },
    }

    const multiplier = industryMultipliers[industry as keyof typeof industryMultipliers] || industryMultipliers.other

    const targetLeads = Math.round(budget * multiplier.leads)
    const targetROI = multiplier.roi
    const targetRevenue = Math.round(budget * multiplier.revenue)

    // Animate to new values
    animateValue(animatedLeads, targetLeads, setAnimatedLeads)
    animateValue(animatedROI, targetROI, setAnimatedROI)
    animateValue(animatedRevenue, targetRevenue, setAnimatedRevenue)
  }

  const animateValue = (start: number, end: number, setter: (value: number) => void) => {
    const duration = 1000
    const steps = 30
    const stepValue = (end - start) / steps
    let current = start
    let step = 0

    const timer = setInterval(() => {
      current += stepValue
      step++
      setter(current)

      if (step >= steps) {
        setter(end)
        clearInterval(timer)
      }
    }, duration / steps)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleAuditValidateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!auditFormData.website.trim()) newErrors.website = "Website URL is required"
    if (!auditFormData.name.trim()) newErrors.name = "Name is required"
    if (!auditFormData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(auditFormData.email)) newErrors.email = "Invalid email format"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"

    setAuditErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          budget: budgetValue,
          projectedLeads: animatedLeads,
          projectedROI: animatedROI,
          projectedRevenue: animatedRevenue,
        }),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your ROI report will be sent to your email within 5 minutes.",
        })
        // Reset form
        setFormData({ name: "", email: "", phone: "", website: "", industry: "" })
        setCurrentStep(1)
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleAuditSubmit = async () => {
    if (!handleAuditValidateForm()) return

    setIsAuditLoading(true)
    try {
      const response = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...auditFormData,
          budget: auditBudgetValue,
        }),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your audit report will be sent to your email within 24 hours.",
        })
        // Reset form
        setAuditFormData({ website: "", name: "", email: "", phone: "", industry: "" })
        setCurrentAuditStep(1)
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsAuditLoading(false)
    }
  }

  // Initialize with default calculation
  useEffect(() => {
    calculateROI(50000, "ecommerce")
  }, [])

  // const getProgress = () => {
  //   let filledFields = 0
  //   if (formData.website) filledFields++
  //   if (formData.budget) filledFields++
  //   if (formData.email) filledFields++
  //   return Math.floor((filledFields / 3) * 100)
  // }

  const caseStudies: CaseStudy[] = [
    {
      logo: "🛒",
      industry: "E-commerce Brand",
      challenge: "Low traffic & poor conversion rates",
      solution: "Implemented AI-driven SEO + CRO strategy",
      beforeMetrics: {
        traffic: "2,500/month",
        conversion: "0.8%",
        roas: "1.8X",
      },
      afterMetrics: {
        traffic: "18,000/month",
        conversion: "3.2%",
        roas: "5.4X",
      },
      improvements: {
        traffic: "+620%",
        conversion: "+300%",
        revenue: "+312%",
        cac: "-47%",
      },
      proofType: "chart",
      verified: true,
    },
    {
      logo: "💼",
      industry: "SaaS Company",
      challenge: "High customer acquisition cost",
      solution: "Optimized funnels + retargeting campaigns",
      beforeMetrics: {
        traffic: "8,200/month",
        conversion: "1.2%",
        roas: "2.1X",
      },
      afterMetrics: {
        traffic: "24,600/month",
        conversion: "4.8%",
        roas: "6.2X",
      },
      improvements: {
        traffic: "+200%",
        conversion: "+300%",
        revenue: "+425%",
        cac: "-58%",
      },
      proofType: "video",
      verified: true,
    },
    {
      logo: "🏠",
      industry: "Real Estate Firm",
      challenge: "Struggling with lead quality",
      solution: "AI-powered lead scoring + nurture sequences",
      beforeMetrics: {
        traffic: "1,800/month",
        conversion: "0.5%",
        roas: "1.4X",
      },
      afterMetrics: {
        traffic: "12,400/month",
        conversion: "2.8%",
        roas: "4.9X",
      },
      improvements: {
        traffic: "+589%",
        conversion: "+460%",
        revenue: "+278%",
        cac: "-42%",
      },
      proofType: "dashboard",
      verified: true,
    },
  ]

  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const industryData = [
    {
      icon: <ShoppingBag className="h-8 w-8 text-blue-600" />,
      title: "E-commerce & Retail",
      description:
        "Drive sales with conversion-optimized campaigns, product feed management, and shopping ads that turn browsers into buyers.",
      metric: "Average 340% ROAS increase",
      cta: "Boost E-commerce Sales",
      gradient: "from-blue-500/10 to-purple-500/10",
      border: "border-blue-500/20",
      iconColor: "text-blue-600",
    },
    {
      icon: <Laptop className="h-8 w-8 text-green-600" />,
      title: "SaaS & Technology",
      description:
        "Scale your SaaS with targeted lead generation, content marketing, and conversion funnels that reduce CAC by 45%.",
      metric: "Average 280% lead growth",
      cta: "Scale SaaS Growth",
      gradient: "from-green-500/10 to-teal-500/10",
      border: "border-green-500/20",
      iconColor: "text-green-600",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Healthcare & Wellness",
      description:
        "Build trust and attract patients with HIPAA-compliant marketing, local SEO, and reputation management strategies.",
      metric: "Average 220% patient acquisition",
      cta: "Grow Healthcare Practice",
      gradient: "from-red-500/10 to-pink-500/10",
      border: "border-red-500/20",
      iconColor: "text-red-600",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-orange-600" />,
      title: "Education & Coaching",
      description:
        "Attract students and clients with course marketing, webinar funnels, and social proof campaigns that boost enrollments.",
      metric: "Average 190% enrollment increase",
      cta: "Increase Enrollments",
      gradient: "from-orange-500/10 to-yellow-500/10",
      border: "border-orange-500/20",
      iconColor: "text-orange-600",
    },
    {
      icon: <Home className="h-8 w-8 text-purple-600" />,
      title: "Real Estate",
      description:
        "Generate quality leads with local SEO, virtual tours, and targeted ads that connect you with serious buyers and sellers.",
      metric: "Average 260% lead quality improvement",
      cta: "Generate Real Estate Leads",
      gradient: "from-purple-500/10 to-indigo-500/10",
      border: "border-purple-500/20",
      iconColor: "text-purple-600",
    },
  ]

  // Navigation functions for industry carousel
  const nextIndustrySlide = () => {
    const cardsPerSlide = getIndustryCardsPerSlide()
    const maxSlide = Math.ceil(industryData.length / cardsPerSlide) - 1
    setCurrentIndustrySlide((prev) => {
      const currentSlide = Math.floor(prev / cardsPerSlide)
      if (currentSlide >= maxSlide) {
        return 0 // Loop back to start
      }
      return prev + cardsPerSlide
    })
  }

  const prevIndustrySlide = () => {
    const cardsPerSlide = getIndustryCardsPerSlide()
    const maxSlide = Math.ceil(industryData.length / cardsPerSlide) - 1
    setCurrentIndustrySlide((prev) => {
      const currentSlide = Math.floor(prev / cardsPerSlide)
      if (currentSlide <= 0) {
        return (maxSlide * cardsPerSlide) // Go to last slide
      }
      return prev - cardsPerSlide
    })
  }

  const goToIndustrySlide = (index: number) => {
    setCurrentIndustrySlide(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextIndustrySlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndustrySlide])


  useEffect(() => {
    if (!isReviewsAutoPlaying) return

    const interval = setInterval(() => {
      nextReviewsSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [isReviewsAutoPlaying, currentReviewsSlide, nextReviewsSlide])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Side - Main Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-blue-700 text-white border-gray-200">
                  <Zap className="mr-2 h-3 w-3 text-white" />
                  AI-Powered Marketing 2025
                </Badge>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-6xl">
                  Grow Your Business{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                    10X Faster
                  </span>{" "}
                  with AI-Powered Digital Marketing
                </h1>
                <p className="text-pretty text-lg leading-relaxed text-gray-600 sm:text-xl">
                  Data-driven strategies, AI automation, and proven expertise to help you dominate your industry in 2025
                  and beyond.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button 
                  size="lg" 
                  className="!bg-[#1447e6] hover:bg-blue-700 flex text-white"
                  onClick={() => setShowHeroForm(true)}
                >
                  Get Free Audit
                  <ArrowRight className="ml-2 mt-1 h-4 w-4 text-white" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-gray-300 border text-gray-700 hover:bg-blue-700 hover:text-white bg-transparent"
                  onClick={() => setShowConsultationForm(true)}
                >
                  Book Free Consultation
                </Button>
              </div>
            </div>

            {/* Right Side - AI Dashboard Visualization */}
            <div className="relative">
              <Card className="overflow-hidden border-0 bg-white/50 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">AI Marketing Dashboard</h3>
                      <Badge variant="secondary" className="bg-blue-700 text-white">
                        <Brain className="mr-1 h-3 w-3 text-white" />
                        Live
                      </Badge>
                    </div>

                    {/* Metrics Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-white border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-600">Traffic Growth</span>
                          </div>
                          <p className="text-2xl font-bold text-green-600">+247%</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-white border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-gray-600">Conversions</span>
                          </div>
                          <p className="text-2xl font-bold text-blue-600">+189%</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Chart Visualization */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Performance Overview</span>
                        <span className="text-green-600 font-medium">↗ 34% this month</span>
                      </div>
                      <div className="h-32 rounded-lg bg-gradient-to-r from-blue-50  to-green-100 p-4">
                        <div className="flex h-full items-end justify-between gap-2">
                          {[40, 65, 45, 80, 60, 95, 75].map((height, i) => (
                            <div
                              key={i}
                              className="w-full rounded-t bg-gradient-to-t from-blue-600 to-green-500"
                              style={{ height: `${height}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* AI Insights */}
                    <div className="rounded-lg bg-blue-50 p-4">
                      <div className="flex items-start gap-3">
                        <Brain className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">AI Recommendation</p>
                          <p className="text-sm text-gray-700">
                            Increase ad spend on high-performing keywords for 23% more conversions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos Section */}
      <section className="border-t bg-muted/30 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["Google Partner", "Meta Business", "HubSpot", "Clutch", "Trustpilot", "Forbes"].map((logo) => (
              <div key={logo} className="flex items-center gap-2 text-muted-foreground">
                <div className="h-8 w-8 rounded bg-muted-foreground/20" />
                <span className="text-sm font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Audit Tool Section */}
      <section className="px-6 py-20 lg:px-8 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto bg-blue-700 text-white">
              <Zap className="mr-2 h-3 w-3 text-white" />
              Free AI-Powered Audit
            </Badge>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Discover How Much Growth You're{" "}
              <span className="bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
                Missing Out On
              </span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered audit scans your website, ads, and SEO to give you a real-time performance score and
              actionable growth plan in just 60 seconds.
            </p>

            {/* Countdown Badge */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                <Clock className="mr-2 h-3 w-3 text-destructive" />
                Limited free audits available this month
              </Badge>
              <Badge variant="outline" className="bg-chart-3/10 bg-green-400/20 text-green-600 border-chart-3/20">
                <Shield className="mr-2 h-3 w-3 text-green-600" />
                We respect your privacy. No spam.
              </Badge>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left Side - 3-Step Audit Form */}
            <div className="space-y-8">
              <Card className="border-border/50 shadow-2xl bg-gradient-to-br from-card to-muted/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* Progress Indicator */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Step {currentAuditStep} of 3</span>
                        <span className="text-sm text-muted-foreground">
                          {Math.round((currentAuditStep / 3) * 100)}% Complete
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3].map((step) => (
                          <div
                            key={step}
                            className={`h-3 flex-1 rounded-full transition-all duration-500 ${
                              step <= currentAuditStep ? "bg-gradient-to-r from-blue-700 to-blue-700" : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Step 1: Website URL */}
                    {currentAuditStep === 1 && (
                      <div className="space-y-6">
                        <div className="text-center space-y-3">
                          <div className="w-16 h-16 bg-blue-700/10 rounded-full flex items-center justify-center mx-auto">
                            <Globe className="h-8 w-8 text-blue-700" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">Enter Your Website URL</h3>
                          <p className="text-sm text-muted-foreground">
                            We'll analyze your site's performance and identify growth opportunities
                          </p>
                        </div>

                        <div className="space-y-4">
                          <label className="text-sm font-medium text-foreground flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            Website URL *
                          </label>
                          <Input
                            placeholder="https://yourwebsite.com"
                            className="h-14 text-lg"
                            value={auditFormData.website}
                            onChange={(e) => setAuditFormData((prev) => ({ ...prev, website: e.target.value }))}
                          />
                          {auditErrors.website && <p className="text-xs text-destructive">{auditErrors.website}</p>}

                          {/* Fake AI Scanning Animation */}
                          {auditFormData.website && (
                            <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-foreground">AI Pre-Scan Active</span>
                              </div>
                              <div className="space-y-2">
                                <div className="flex justify-between text-xs">
                                  <span className="text-muted-foreground">Checking domain authority...</span>
                                  <span className="text-chart-3">✓</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                  <span className="text-muted-foreground">Analyzing page speed...</span>
                                  <span className="text-chart-3">✓</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                  <span className="text-muted-foreground">Scanning SEO structure...</span>
                                  <div className="w-4 h-1 bg-muted rounded-full overflow-hidden">
                                    <div className="w-full h-full bg-accent animate-pulse" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-blue-700 to-blue-700 !text-white  hover:from-[#1447e6]/90 hover:to-[#1447e6]/90 text-accent-foreground h-14 text-lg flex justify-center items-center"
                          onClick={() => setCurrentAuditStep(2)}
                          disabled={!auditFormData.website}
                        >
                          Continue to Budget Selection
                          <ArrowRight className="ml-2 h-5 w-5 text-white" />
                        </Button>
                      </div>
                    )}

                    {/* Step 2: Budget & Industry */}
                    {currentAuditStep === 2 && (
                      <div className="space-y-6">
                        <div className="text-center space-y-3">
                          <div className="w-16 h-16 bg-gradient-to-br from-chart-1/20 to-chart-2/20 rounded-full flex items-center justify-center mx-auto">
                            <DollarSign className="h-8 w-8 text-chart-1" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">Marketing Budget & Industry</h3>
                          <p className="text-sm text-muted-foreground">
                            This helps us provide accurate ROI projections
                          </p>
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-4">
                            <label className="text-sm font-medium text-foreground flex items-center gap-2">
                              <BarChart3 className="h-4 w-4" />
                              Monthly Marketing Budget: ₹{auditBudgetValue.toLocaleString()}
                            </label>
                            <div className="space-y-3">
                              <input
                                type="range"
                                min="25000"
                                max="1000000"
                                step="25000"
                                value={auditBudgetValue}
                                onChange={(e) => setAuditBudgetValue(Number(e.target.value))}
                                className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer slider"
                              />
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>₹25K</span>
                                <span>₹2.5L</span>
                                <span>₹5L</span>
                                <span>₹10L+</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground flex items-center gap-2">
                              <Building className="h-4 w-4" />
                              Industry *
                            </label>
                            <Select
                              value={auditFormData.industry}
                              onValueChange={(value) => setAuditFormData((prev) => ({ ...prev, industry: value }))}
                            >
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ecommerce">E-commerce & Retail</SelectItem>
                                <SelectItem value="saas">SaaS & Technology</SelectItem>
                                <SelectItem value="realestate">Real Estate</SelectItem>
                                <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                                <SelectItem value="education">Education & Coaching</SelectItem>
                                <SelectItem value="finance">Finance & Insurance</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          {/* ROI Preview */}
                          {auditFormData.industry && (
                            <div className="bg-gradient-to-r from-chart-3/10 to-chart-1/10 p-4 rounded-lg border border-chart-3/20">
                              <div className="flex items-center gap-3 mb-3">
                                <TrendingUp className="h-5 w-5 text-chart-3" />
                                <span className="text-sm font-medium text-foreground">Projected Results Preview</span>
                              </div>
                              <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                  <p className="text-lg font-bold text-chart-1">
                                    {Math.round(auditBudgetValue * 0.08).toLocaleString()}
                                  </p>
                                  <p className="text-xs text-muted-foreground">Monthly Leads</p>
                                </div>
                                <div>
                                  <p className="text-lg font-bold text-chart-2">
                                    {((auditBudgetValue * 4.2) / 100000).toFixed(1)}L
                                  </p>
                                  <p className="text-xs text-muted-foreground">Revenue Potential</p>
                                </div>
                                <div>
                                  <p className="text-lg font-bold text-chart-3">4.2X</p>
                                  <p className="text-xs text-muted-foreground">Projected ROI</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-accent-foreground h-14 text-lg"
                          onClick={() => setCurrentAuditStep(3)}
                          disabled={!auditFormData.industry}
                        >
                          Get My Free Audit Report
                          <FileText className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    )}

                    {/* Step 3: Contact Details */}
                    {currentAuditStep === 3 && (
                      <div className="space-y-6">
                        <div className="text-center space-y-3">
                          <div className="w-16 h-16 bg-gradient-to-br from-chart-3/20 to-accent/20 rounded-full flex items-center justify-center mx-auto">
                            <Send className="h-8 w-8 text-chart-3" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">Get Your Custom Audit Report</h3>
                          <p className="text-sm text-muted-foreground">
                            We'll email you a detailed audit + actionable growth plan
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">Full Name *</label>
                              <Input
                                placeholder="John Doe"
                                className="h-12"
                                value={auditFormData.name}
                                onChange={(e) => setAuditFormData((prev) => ({ ...prev, name: e.target.value }))}
                              />
                              {auditErrors.name && <p className="text-xs text-destructive">{auditErrors.name}</p>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">Email Address *</label>
                              <Input
                                placeholder="john@company.com"
                                type="email"
                                className="h-12"
                                value={auditFormData.email}
                                onChange={(e) => setAuditFormData((prev) => ({ ...prev, email: e.target.value }))}
                              />
                              {auditErrors.email && <p className="text-xs text-destructive">{auditErrors.email}</p>}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Phone Number *</label>
                            <Input
                              placeholder="+91 98765 43210"
                              type="tel"
                              className="h-12"
                              value={auditFormData.phone}
                              onChange={(e) => setAuditFormData((prev) => ({ ...prev, phone: e.target.value }))}
                            />
                            {auditErrors.phone && <p className="text-xs text-destructive">{auditErrors.phone}</p>}
                          </div>
                        </div>

                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-accent-foreground h-14 text-lg"
                          onClick={handleAuditSubmit}
                          disabled={isAuditLoading}
                        >
                          {isAuditLoading ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Generating Your Audit Report...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Me My Free Audit Report
                            </>
                          )}
                        </Button>

                        <div className="text-center space-y-2">
                          <p className="text-xs text-muted-foreground">🔒 Your data is 100% private. No spam, ever.</p>
                          <p className="text-xs text-muted-foreground">Report delivered within 24 hours</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Trust Elements & Live Preview */}
            <div className="space-y-8">
              {/* Trust Stats */}
              <Card className="border-border/50 bg-gradient-to-br from-card via-muted/10 to-card shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-muted-foreground">Trusted by 300+ businesses</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">What You'll Get in Your Audit</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          icon: <Search className="h-5 w-5 text-blue-700" />,
                          title: "SEO Performance Analysis",
                          description: "Complete technical SEO audit with keyword opportunities",
                          color: "text-blue-600",
                        },
                        {
                          icon: <Target className="h-5 w-5 text-green-600" />,
                          title: "Conversion Rate Assessment",
                          description: "Identify bottlenecks preventing visitors from converting",
                          color: "text-green-600",
                        },
                        {
                          icon: <TrendingUp className="h-5 w-5 text-purple-600" />,
                          title: "Growth Opportunity Map",
                          description: "Prioritized action plan for maximum ROI impact",
                          color: "text-purple-600",
                        },
                        {
                          icon: <BarChart3 className="h-5 w-5 text-orange-600" />,
                          title: "Competitor Benchmarking",
                          description: "See how you stack up against top competitors",
                          color: "text-orange-600",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-gradient-to-r from-muted/20 to-transparent rounded-lg"
                        >
                          <div className={`p-2 rounded-lg bg-muted/50 ${item.color}`}>{item.icon}</div>
                          <div className="space-y-1">
                            <h4 className="font-medium text-foreground">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Sample Results */}
                    <div className="bg-gradient-to-r from-blue-700/5 to-blue-700/5 p-6 rounded-lg border border-blue-700/20">
                      <h4 className="font-medium text-foreground mb-4">Sample Audit Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-600">73/100</p>
                          <p className="text-xs text-muted-foreground">SEO Score</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-blue-600">2.4%</p>
                          <p className="text-xs text-muted-foreground">Conversion Rate</p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Page Speed</span>
                          <span className="text-orange-600">Needs Improvement</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Mobile Optimization</span>
                          <span className="text-green-600">Good</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Content Quality</span>
                          <span className="text-green-600">Excellent</span>
                        </div>
                      </div>
                    </div>
                        {/* Trust Badges */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                  <p className="text-xs font-medium text-foreground">15+ Industries</p>
                </div>
                <div className="space-y-2">
                  <Shield className="h-6 w-6 text-green-600 mx-auto" />
                  <p className="text-xs font-medium text-foreground">100% Private</p>
                </div>
                <div className="space-y-2">
                  <Zap className="h-6 w-6 text-green-600 mx-auto" />
                  <p className="text-xs font-medium text-foreground">60 Sec Setup</p>
                </div>
              </div>
                  </div>
                </CardContent>
              </Card>

              {/* Client Testimonial
              <Card className="border-border/50 bg-gradient-to-br from-muted/10 to-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed">
                      "The free audit revealed 12 critical issues we didn't know existed. After implementing their
                      recommendations, our traffic increased 340% in just 4 months!"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <img
                        src="/professional-indian-businessman.png"
                        alt="Amit Sharma"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-foreground text-sm">Amit Sharma</p>
                        <p className="text-xs text-foreground/70">CEO, TechFlow Solutions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

          
              
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet / Free Audit Tool Section */}
      <section className="px-6 py-20 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              See Your Potential ROI in{" "} <br className="lg:hidden" />
              <span className="bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
                Just 30 Seconds
              </span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              Enter your budget, and our AI-powered calculator projects leads, conversions, and revenue you could
              generate with our digital marketing strategies.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left Side - Advanced Calculator Form */}
            <div className="space-y-8">
              <Card className="border-border/50 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* Progress Indicator */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Step {currentStep} of 3</span>
                        <span className="text-sm text-muted-foreground">
                          {Math.round((currentStep / 3) * 100)}% Complete
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3].map((step) => (
                          <div
                            key={step}
                            className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                              step <= currentStep ? "bg-[#1447e6]" : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Step 1: Budget & Industry */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div className="text-center space-y-2">
                          <h3 className="text-xl font-semibold text-foreground">Tell us about your business</h3>
                          <p className="text-sm text-muted-foreground">This helps us provide accurate projections</p>
                        </div>

                        <div className="space-y-4">
                          <label className="text-sm font-medium text-foreground flex items-center gap-2">
                            <BarChart3 className="h-4 w-4" />
                            Monthly Marketing Budget: ₹{budgetValue.toLocaleString()}
                          </label>
                          <div className="space-y-3">
                            <input
                              type="range"
                              min="25000"
                              max="1000000"
                              step="25000"
                              value={budgetValue}
                              onChange={(e) => {
                                setBudgetValue(Number(e.target.value))
                                calculateROI(Number(e.target.value), formData.industry)
                              }}
                              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>₹25K</span>
                              <span>₹10L+</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            Industry *
                          </label>
                          <Select
                            value={formData.industry}
                            onValueChange={(value) => {
                              setFormData((prev) => ({ ...prev, industry: value }))
                              calculateROI(budgetValue, value)
                            }}
                          >
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ecommerce">E-commerce</SelectItem>
                              <SelectItem value="saas">SaaS</SelectItem>
                              <SelectItem value="realestate">Real Estate</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            Website URL (Optional)
                          </label>
                          <Input
                            placeholder="https://yourwebsite.com"
                            className="h-12"
                            value={formData.website}
                            onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                          />
                          <p className="text-xs text-muted-foreground">
                            We'll analyze your site for personalized insights
                          </p>
                        </div>

                        <Button
                          
                          className="w-full !bg-[#1447e6] hover:bg-[#1447e6]/90 text-white flex justify-center text-center"
                          onClick={() => setCurrentStep(2)}
                          disabled={!formData.industry}
                        >
                          See My Projections
                          <ArrowRight className="ml-2 h-4 w-4 text-white" />
                        </Button>
                      </div>
                    )}

                    {/* Step 2: Results Preview */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div className="text-center space-y-2">
                          <h3 className="text-xl font-semibold text-foreground">Your Projected Results</h3>
                          <p className="text-sm text-muted-foreground">
                            Based on ₹{budgetValue.toLocaleString()}/month in {formData.industry}
                          </p>
                        </div>

                        <div className="grid gap-4">
                          <Card className="bg-gradient-to-r from-blue-700/10 to-blue-700/5 border-chart-1/20">
                            <CardContent className="p-6 text-center">
                              <BarChart3 className="h-8 w-8 text-[#1447e6] mx-auto mb-3" />
                              <div className="space-y-1">
                                <p className="text-3xl font-bold text-[#1447e6]">{animatedLeads.toLocaleString()}</p>
                                <p className="text-sm text-muted-foreground">Estimated Monthly Leads</p>
                                <p className="text-xs text-[#1447e6]">
                                  +{Math.round(((animatedLeads - budgetValue * 0.02) / (budgetValue * 0.02)) * 100)}% vs
                                  current
                                </p>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-gradient-to-r from-[#09af09]/10 to-[#09af09]/5 border-[#09af09]/20">
                            <CardContent className="p-6 text-center">
                              <TrendingUp className="h-8 w-8 text-[#09af09] mx-auto mb-3" />
                              <div className="space-y-1">
                                <p className="text-3xl font-bold text-[#09af09]">{animatedROI.toFixed(1)}X</p>
                                <p className="text-sm text-muted-foreground">Projected ROI</p>
                                <p className="text-xs text-[#09af09]">Return on Investment</p>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="bg-gradient-to-r from-green-400/10 to-green-400/5 border-green-400/20">
                            <CardContent className="p-6 text-center">
                              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
                              <div className="space-y-1">
                                <p className="text-3xl font-bold text-green-600">
                                  ₹{(animatedRevenue / 100000).toFixed(1)}L
                                </p>
                                <p className="text-sm text-muted-foreground">Revenue Potential</p>
                                <p className="text-xs text-green-400">Monthly projection</p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                          <p className="text-sm text-center text-muted-foreground mb-3">
                            Get your full detailed ROI breakdown with strategies tailored to your business.
                          </p>
                          <Button
                            size="lg"
                            className="w-full bg-[#1447e6] hover:bg-[#1447e6]/90 text-white"
                            onClick={() => setCurrentStep(3)}
                          >
                            Get My Full ROI Report
                            <FileText className="ml-2 h-4 w-4 text-white" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Lead Capture */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div className="text-center space-y-2">
                          <h3 className="text-xl font-semibold text-foreground">Get Your Custom Marketing Plan</h3>
                          <p className="text-sm text-muted-foreground">
                            We'll email you a detailed ROI report + free custom marketing plan
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">Full Name *</label>
                              <Input
                                placeholder="John Doe"
                                className="h-12"
                                value={formData.name}
                                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                              />
                              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">Email Address *</label>
                              <Input
                                placeholder="john@company.com"
                                type="email"
                                className="h-12"
                                value={formData.email}
                                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                              />
                              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Phone Number *</label>
                            <Input
                              placeholder="+91 98765 43210"
                              type="tel"
                              className="h-12"
                              value={formData.phone}
                              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                            />
                            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                          </div>
                        </div>

                        <Button
                          size="lg"
                          className="w-full bg-[#1447e6] hover:bg-[#1447e6]/90 text-white"
                          onClick={handleSubmit}
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Generating Your Report...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4 text-white" />
                              Send Me My ROI Report
                            </>
                          )}
                        </Button>

                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">🔒 Your data is 100% private. No spam, ever.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Live Dashboard Mockup */}
            <div className="space-y-6">
              <Card className="border-border/50 bg-gradient-to-br from-gray-100 via-muted/10 to-gray-100 shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-3 w-3 bg-[#09af09] rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-muted-foreground">Live Dashboard Preview</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">AI-Powered Growth Projection</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#1447e6]/5 to-[#1447e6]/10 p-4 rounded-lg border border-[#1447e6]/20">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-foreground">Campaign Performance</span>
                          <Badge variant="default" className="text-xs bg-[#1447e6] text-white">
                            <TrendingUp className="h-3 w-3 mr-1 text-white" />
                            Live Data
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold text-[#1447e6]">{animatedLeads.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">Monthly Leads</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-green-600">{animatedROI.toFixed(1)}X</p>
                            <p className="text-xs text-muted-foreground">ROI Multiple</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-[#09af09]">₹{(animatedRevenue / 100000).toFixed(1)}L</p>
                            <p className="text-xs text-muted-foreground">Revenue</p>
                          </div>
                        </div>
                      </div>

                      {/* Animated Growth Chart Mockup */}
                      <div className="bg-muted/20 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-foreground">Growth Trajectory</span>
                          <span className="text-xs text-muted-foreground">Next 6 months</span>
                        </div>
                        <div className="flex items-end justify-between h-20 gap-2">
                          {[40, 55, 70, 85, 95, 100].map((height, i) => (
                            <div
                              key={i}
                              className="bg-gradient-to-t from-[#1447e6] to-green-600/60 rounded-t flex-1 transition-all duration-1000 ease-out"
                              style={{
                                height: `${height}%`,
                                animationDelay: `${i * 200}ms`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Trust Reinforcement */}
                    <div className="border-t border-border/50 pt-6 space-y-4">
                      <div className="text-center">
                        <p className="text-sm font-medium text-foreground mb-2">Based on data from 300+ campaigns</p>
                        <div className="flex items-center justify-center gap-1 mb-3">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="text-sm font-medium text-foreground ml-2">4.9/5 Rating</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="space-y-1">
                          <CheckCircle className="h-5 w-5 text-[#09af09] mx-auto" />
                          <p className="text-xs font-medium text-foreground">15+ Industries</p>
                        </div>
                        <div className="space-y-1">
                          <Shield className="h-5 w-5 text-[#09af09] mx-auto" />
                          <p className="text-xs font-medium text-foreground">100% Private</p>
                        </div>
                        <div className="space-y-1">
                          <Zap className="h-5 w-5 text-[#09af09] mx-auto" />
                          <p className="text-xs font-medium text-foreground">30 Sec Setup</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="px-6 py-20 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-balance md:max-w-xl mx-auto text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Complete Digital Marketing Solutions for{" "}
              <span className="bg-gradient-to-r from-[#1447e6] to-[#1447e6] bg-clip-text text-transparent">
                2025 & Beyond
              </span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              From SEO to AI-driven Analytics — everything your business needs to grow smarter, faster, and stronger.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Search className="h-8 w-8 text-[#1447e6]" />,
                title: "SEO (Search Engine Optimization)",
                description: "Rank higher on Google with advanced AI-powered SEO strategies.",
                cta: "Explore SEO →",
                gradient: "from-blue-500/10 to-cyan-500/10",
                iconBg: "bg-blue-500/10 text-blue-600",
              },
              {
                icon: <MousePointer className="h-8 w-8 text-[#09af09]" />,
                title: "Paid Ads (PPC & Programmatic)",
                description: "Maximize ROI with data-driven Google, Meta & LinkedIn ads.",
                cta: "Explore Paid Ads →",
                gradient: "from-green-500/10 to-emerald-500/10",
                iconBg: "bg-green-500/10 text-green-600",
              },
              {
                icon: <MessageCircle className="h-8 w-8 text-purple-500" />,
                title: "Social Media Marketing",
                description: "Build your brand presence with viral, engagement-driven campaigns.",
                cta: "Explore Social Media →",
                gradient: "from-purple-500/10 to-pink-500/10",
                iconBg: "bg-purple-500/10 text-purple-600",
              },
              {
                icon: <Mail className="h-8 w-8 text-orange-500" />,
                title: "Email & Marketing Automation",
                description: "Automate customer journeys & increase conversions with smart email flows.",
                cta: "Explore Email Marketing →",
                gradient: "from-orange-500/10 to-red-500/10",
                iconBg: "bg-orange-500/10 text-orange-600",
              },
              {
                icon: <Video className="h-8 w-8 text-teal-500" />,
                title: "Content & Video Marketing",
                description: "Create powerful content that educates, engages, and converts.",
                cta: "Explore Content →",
                gradient: "from-teal-500/10 to-cyan-500/10",
                iconBg: "bg-teal-500/10 text-teal-600",
              },
              {
                icon: <Funnel className="h-8 w-8 text-indigo-500" />,
                title: "CRO & Analytics (Conversion Optimization)",
                description: "Turn visitors into paying customers with AI-driven insights & testing.",
                cta: "Explore CRO & Analytics →",
                gradient: "from-indigo-500/10 to-blue-500/10",
                iconBg: "bg-indigo-500/10 text-indigo-600",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className={`group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 bg-gradient-to-br ${service.gradient} backdrop-blur-sm overflow-hidden relative`}
              >
                <CardContent className="p-6 space-y-4 relative z-10">
                  <div className="flex items-start justify-between">
                    <div
                      className={`p-3 rounded-xl ${service.iconBg} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground leading-tight">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#1447e6] hover:text-accent-foreground hover:bg-accent/10 p-0 h-auto font-medium group/btn"
                    >
                      {service.cta}
                      {/* <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-200" /> */}
                    </Button>
                  </div>
                </CardContent>

                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="flex flex-col items-center justify-center mt-12">
            <p className="text-muted-foreground mb-6 text-center">
              Need a custom solution? We create tailored strategies for your unique business needs.
            </p>
            <Button 
              size="sm" 
              variant="secondary" 
              className="flex items-center justify-center hover:!text-white bg-white/50 border border-gray-300 backdrop-blur-sm whitespace-nowrap px-6  rounded-lg hover:!bg-[#1447e6] "
            >
              <Brain className="mr-2 h-4 w-4 hover:!text-white" />
              Get Custom Strategy
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies & Results Section */}
      <section className="px-6 py-20 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-balance text-2xl md:max-w-xl mx-auto font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Proven Results That{" "}
              <span className="bg-gradient-to-r from-[#09af09] to-[#1447e6] bg-clip-text text-transparent">
                Speak for Themselves
              </span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              From startups to enterprises, we've helped 300+ brands grow with measurable ROI.
            </p>
          </div>

          {/* Case Studies Carousel */}
          <div className="relative">
            <Card className="border-border/50 bg-gradient-to-br from-card to-muted/10 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  {/* Left Side - Case Study Details */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{caseStudies[currentCaseStudy].logo}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {caseStudies[currentCaseStudy].industry}
                        </h3>
                        {caseStudies[currentCaseStudy].verified && (
                          <Badge variant="secondary" className="mt-1 bg-[#1447e6] text-white">
                            <CheckCircle className="mr-1 h-3 w-3 text-white" />
                            Verified by Google Analytics
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{caseStudies[currentCaseStudy].challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-2">Solution</h4>
                        <p className="text-muted-foreground">{caseStudies[currentCaseStudy].solution}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Results</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">Before</p>
                            <div className="space-y-1 text-sm">
                              <p>Traffic: {caseStudies[currentCaseStudy].beforeMetrics.traffic}</p>
                              <p>Conversion: {caseStudies[currentCaseStudy].beforeMetrics.conversion}</p>
                              <p>ROAS: {caseStudies[currentCaseStudy].beforeMetrics.roas}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">After</p>
                            <div className="space-y-1 text-sm">
                              <p className="text-[#09af09] font-medium">
                                Traffic: {caseStudies[currentCaseStudy].afterMetrics.traffic}
                              </p>
                              <p className="text-[#09af09] font-medium">
                                Conversion: {caseStudies[currentCaseStudy].afterMetrics.conversion}
                              </p>
                              <p className="text-[#09af09] font-medium">
                                ROAS: {caseStudies[currentCaseStudy].afterMetrics.roas}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="bg-background/50 flex items-center justify-center border border-gray-300">
                        <Download className="mr-2 h-4 w-4" />
                        Download Full Case Study
                      </Button>
                      {caseStudies[currentCaseStudy].proofType === "video" && (
                        <Button size="sm" variant="outline" className="bg-background/50">
                          <Play className="mr-2 h-4 w-4" />
                          Watch Testimonial
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Right Side - Visual Proof */}
                  <div className="space-y-6">
                    {/* Key Metrics Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-gradient-to-br from-[#09af09]/10 to-[#09af09]/5 border-[#09af09]/20">
                        <CardContent className="p-4 text-center">
                          <TrendingUp className="h-6 w-6 text-[#09af09] mx-auto mb-2" />
                          <p className="text-2xl font-bold text-[#09af09]">
                            {caseStudies[currentCaseStudy].improvements.traffic}
                          </p>
                          <p className="text-xs text-muted-foreground">Traffic Growth</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-[#1447e6]/10 to-[#1447e6]/5 border-[#1447e6]/20">
                        <CardContent className="p-4 text-center">
                          <Target className="h-6 w-6 text-[#1447e6] mx-auto mb-2" />
                          <p className="text-2xl font-bold text-[#1447e6]">
                            {caseStudies[currentCaseStudy].improvements.conversion}
                          </p>
                          <p className="text-xs text-muted-foreground">Conversion Boost</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Performance Chart Visualization */}
                    <Card className="bg-gradient-to-br from-muted/20 to-[#1447e6]/5">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">6-Month Performance</span>
                            <span className="text-[#09af09] font-medium">
                              {caseStudies[currentCaseStudy].improvements.revenue} Revenue Growth
                            </span>
                          </div>
                          <div className="h-32 rounded-lg bg-gradient-to-r from-[#1447e6]/10 via-[#09af09]/10 to-[#09af09]/10 p-4">
                            <div className="flex h-full items-end justify-between gap-2">
                              {[25, 35, 45, 65, 80, 95].map((height, i) => (
                                <div key={i} className="flex flex-col items-center gap-1">
                                  <div
                                    className="w-full rounded-t bg-gradient-to-t from-[#1447e6] to-[#09af09] min-w-[20px]"
                                    style={{ height: `${height}%` }}
                                  />
                                  <span className="text-xs text-muted-foreground">M{i + 1}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Start</span>
                            <span className="text-[#09af09] font-medium">Current Performance</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Additional Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gradient-to-br from-teal-500/20 to-teal-500/5 rounded-lg border border-chart-2/20">
                        <p className="text-xl font-bold text-teal-700">
                          {caseStudies[currentCaseStudy].improvements.revenue}
                        </p>
                        <p className="text-xs text-muted-foreground">Revenue Increase</p>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-lg border border-orange-500/20">
                        <p className="text-xl font-bold text-orange-600">
                          {caseStudies[currentCaseStudy].improvements.cac}
                        </p>
                        <p className="text-xs text-muted-foreground">CAC Reduction</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carousel Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    {caseStudies.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentCaseStudy(i)}
                        className={`h-2 w-8 rounded-full transition-colors ${
                          i === currentCaseStudy ? "bg-[#1447e6]" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button  variant="outline" className="bg-background/50 flex items-center justify-center border border-gray-300 " onClick={prevCaseStudy}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-background/50 flex items-center justify-center border border-gray-300" onClick={nextCaseStudy} >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 text-center space-y-6">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <Badge variant="secondary" className="text-sm bg-[#1447e6] text-white">
                <CheckCircle className="mr-2 h-4 w-4 text-white" />
                Verified by Google Analytics
              </Badge>
              <Badge variant="secondary" className="text-sm bg-[#1447e6] text-white">
                <CheckCircle className="mr-2 h-4 w-4 text-white" />
                Facebook Ads Manager Screenshots
              </Badge>
              <Badge variant="secondary" className="text-sm bg-[#1447e6] text-white">
                <Play className="mr-2 h-4 w-4 text-white" />
                Client Video Testimonials
              </Badge>
              <Badge variant="secondary" className="text-sm bg-[#1447e6] text-white">
                <Shield className="mr-2 h-4 w-4 text-white" />
                Trustpilot Verified
              </Badge>
            </div>

            <div className="flex justify-center">
              <Button 
                variant="secondary" 
                size="default" 
                className="flex group items-center justify-center backdrop-blur-sm whitespace-nowrap px-6 py-3 rounded-lg border border-gray-300 !hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4 group-hover:text-white" />
                See 20+ More Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI-Powered Marketing Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital marketing solutions powered by artificial intelligence and data science
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-[#1447e6]" />,
                title: "SEO & Content Strategy",
                description: "AI-driven keyword research and content optimization for maximum organic visibility",
                features: ["Keyword Analysis", "Content Optimization", "Technical SEO"],
              },
              {
                icon: <Target className="h-8 w-8 text-[#1447e6]" />,
                title: "Paid Advertising",
                description: "Smart ad campaigns across Google, Meta, and LinkedIn with automated optimization",
                features: ["Google Ads", "Social Media Ads", "Retargeting"],
              },
              {
                icon: <Users className="h-8 w-8 text-[#1447e6]" />,
                title: "Social Media Management",
                description: "Automated content creation and community management with AI insights",
                features: ["Content Creation", "Community Management", "Analytics"],
              },
            ].map((service, i) => (
              <Card key={i} className="group bg-gray-200/50 hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#1447e6]/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-[#09af09]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-muted/30 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">Proven Results That Speak</h2>
            <p className="text-lg text-muted-foreground">Real outcomes from our AI-powered marketing strategies</p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { metric: "247%", label: "Average Traffic Increase", icon: <TrendingUp className="h-6 w-6 text-[#1447e6]" /> },
              { metric: "189%", label: "Conversion Rate Boost", icon: <Target className="h-6 w-6 text-[#1447e6]" /> },
              { metric: "156%", label: "ROI Improvement", icon: <BarChart3 className="h-6 w-6 text-[#1447e6]" /> },
              { metric: "4.9/5", label: "Client Satisfaction", icon: <Star className="h-6 w-6 text-[#1447e6]" /> },
            ].map((stat, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-center text-accent">{stat.icon}</div>
                  <p className="text-3xl font-bold text-foreground">{stat.metric}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials & Logos Section */}
      <section className="px-6 py-20 lg:px-8 testimonials">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by 300+ Brands Worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our clients say about working with us.
            </p>
          </div>

          {/* Client Logos Authority Wall */}
          <div className="mb-16">
            <p className="text-center text-sm text-muted-foreground mb-8">Brands we've helped grow</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 items-center justify-items-center">
              {[
                { name: "Partner 1", logo: "/partners/p1.webp" },
                { name: "Partner 2", logo: "/partners/p2.webp" },
                { name: "Partner 3", logo: "/partners/p3.webp" },
                { name: "Partner 4", logo: "/partners/p4.webp" },
                { name: "Partner 5", logo: "/partners/p5.webp" },
                { name: "Partner 6", logo: "/partners/p6.webp" },
                { name: "Partner 7", logo: "/partners/p7.webp" },
              ].map((brand, i) => (
                <div
                  key={i}
                  className="w-20 h-12 sm:w-24 sm:h-16 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-200 p-2"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Video Testimonials */}
          {/* <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Client Success Stories</h3>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "3X Ad Scale Success",
                  client: "Sarah Johnson, CMO at TechCorp",
                  thumbnail: "/professional-woman-smiling.png",
                  duration: "0:32",
                },
                {
                  title: "SEO Beyond Expectations",
                  client: "Mike Chen, Founder of EcomX",
                  thumbnail: "/professional-man-suit.png",
                  duration: "0:28",
                },
                {
                  title: "Smooth Communication & ROI",
                  client: "Lisa Rodriguez, Marketing Director",
                  thumbnail: "/professional-woman-presenting-charts.jpg",
                  duration: "0:41",
                },
              ].map((video, i) => (
                <Card key={i} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-t-lg" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="h-6 w-6 text-accent ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-1">{video.title}</h4>
                      <p className="text-sm text-muted-foreground">{video.client}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div> */}

          {/* Written Reviews Carousel */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">What Our Clients Say</h3>

            <div className="relative">
              {/* Carousel Container */}
              <div
                className="overflow-hidden rounded-2xl"
                onMouseEnter={() => setIsReviewsAutoPlaying(false)}
                onMouseLeave={() => setIsReviewsAutoPlaying(true)}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentReviewsSlide * (100 / getCardsPerSlide())}%)`,
                  }}
                >
                  {[
                    {
                      rating: 5,
                      quote:
                        "Geo SofTech transformed our digital marketing. In just 4 months, our traffic grew 5X and ad ROI doubled. The team feels like an extension of our business.",
                      name: "Amit Sharma",
                      position: "CEO, EcomX Pvt Ltd",
                      avatar: "/professional-indian-businessman.png",
                    },
                    {
                      rating: 5,
                      quote:
                        "Their AI-powered approach to SEO is incredible. We went from page 3 to top 3 rankings for our main keywords in just 6 months. Highly recommend!",
                      name: "Jennifer Walsh",
                      position: "Marketing Director, TechFlow",
                      avatar: "/professional-blonde-woman.png",
                    },
                    {
                      rating: 5,
                      quote:
                        "Best marketing investment we've made. The ROI calculator they provided was spot-on, and results exceeded projections. Communication is top-notch.",
                      name: "David Kim",
                      position: "Founder, StartupBoost",
                      avatar: "/professional-asian-man-in-glasses.jpg",
                    },
                    {
                      rating: 5,
                      quote:
                        "Outstanding results! Our conversion rate increased by 340% and cost per acquisition dropped by 60%. The team's expertise in PPC is unmatched.",
                      name: "Sarah Mitchell",
                      position: "CMO, GrowthTech Solutions",
                      avatar: "/professional-woman-smiling.png",
                    },
                    {
                      rating: 5,
                      quote:
                        "Game-changing partnership. Their content marketing strategy helped us become thought leaders in our industry. Revenue grew 250% in 8 months.",
                      name: "Michael Chen",
                      position: "VP Marketing, InnovateCorp",
                      avatar: "/professional-man-suit.png",
                    },
                    {
                      rating: 5,
                      quote:
                        "Exceptional service and results. The email automation campaigns they built generated $2M in additional revenue. Couldn't be happier!",
                      name: "Lisa Rodriguez",
                      position: "Director of Sales, ScaleUp Inc",
                      avatar: "/professional-woman-presenting-charts.jpg",
                    },
                  ].map((review, index) => (
                    <div key={index} className={`flex-shrink-0 px-2 sm:px-4 ${
                      getCardsPerSlide() === 1 ? 'w-full' : 
                      getCardsPerSlide() === 2 ? 'w-1/2' : 'w-1/3'
                    }`}>
                      <Card className="h-full hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-background to-muted/20 border-border/50">
                        <CardContent className="p-6 space-y-4 h-full flex flex-col">
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, j) => (
                              <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <blockquote className="text-muted-foreground leading-relaxed flex-grow">
                            "{review.quote}"
                          </blockquote>
                          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                            <img
                              src={review.avatar || "/placeholder.svg"}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/20"
                            />
                            <div>
                              <p className="font-semibold text-foreground">{review.name}</p>
                              <p className="text-sm text-muted-foreground">{review.position}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8">
                {/* Slide Indicators */}
                <div className="flex items-center gap-2">
                  {/* Desktop indicators (3 cards) */}
                  <div className="hidden lg:flex items-center gap-1">
                    {Array.from({ length: Math.ceil(6 / 3) }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToReviewsSlide(index * 3)}
                        className={`!h-3 !w-3 !p-0 !m-0 rounded-full transition-all duration-300 border-0 ${
                          index === Math.floor(currentReviewsSlide / 3)
                            ? "bg-[#1447e6] scale-110"
                            : "bg-muted hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                  {/* Tablet indicators (2 cards) */}
                  <div className="hidden md:flex lg:hidden items-center gap-1">
                    {Array.from({ length: Math.ceil(6 / 2) }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToReviewsSlide(index * 2)}
                        className={`!h-3 !w-3 !p-0 !m-0 rounded-full transition-all duration-300 border-0 ${
                          index === Math.floor(currentReviewsSlide / 2)
                            ? "bg-[#1447e6] scale-110"
                            : "bg-muted hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                  {/* Mobile indicators (1 card) */}
                  <div className="md:hidden flex items-center gap-1">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToReviewsSlide(index)}
                        className={`!h-3 !w-3 !p-0 !m-0 rounded-full transition-all duration-300 border-0 ${
                          index === currentReviewsSlide
                            ? "bg-[#1447e6] scale-110"
                            : "bg-muted hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-3">
                  {/* Auto-play Toggle */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsReviewsAutoPlaying(!isReviewsAutoPlaying)}
                    className="text-xs flex items-center justify-center"
                  >
                    {isReviewsAutoPlaying ? (
                      <>
                        <Pause className="h-3 w-3 mr-1" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-3 w-3 mr-1" />
                        Play
                      </>
                    )}
                  </Button>

                  {/* Previous Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevReviewsSlide}
                    className="hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {/* Next Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextReviewsSlide}
                    className="hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Carousel Progress Bar */}
              <div className="mt-4 w-full bg-muted rounded-full h-1 overflow-hidden">
                <div
                  className="h-full bg-[#1447e6] transition-all duration-300 ease-out"
                  style={{
                    width: `${((Math.floor(currentReviewsSlide / getCardsPerSlide()) + 1) / Math.ceil(6 / getCardsPerSlide())) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { icon: <Star className="h-5 w-5 text-[#09af09]" />, text: "Google Reviews 4.8★", verified: true },
                { icon: <Award className="h-5 w-5 text-[#09af09] " />, text: "Clutch Top B2B Agency", verified: true },
                { icon: <CheckCircle className="h-5 w-5 text-[#09af09]" />, text: "Google Partner Certified", verified: true },
                { icon: <Shield className="h-5 w-5 text-[#09af09]" />, text: "Trustpilot Verified", verified: true },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="text-[#09af09]">{badge.icon}</div>
                  <span className="text-gray-500">{badge.text}</span>
                  {badge.verified && <CheckCircle className="h-4 w-4 text-[#09af09]" />}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials CTA */}
          <div className="text-center flex flex-col items-center justify-center space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Want to see results like this for your business?</h3>
            <Button size="lg" className="!bg-[#1447e6] !hover:bg-[#1447e6]/90 text-white flex items-center justify-center" onClick={() => setShowConsultationForm(true)}>
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-lg text-muted-foreground">
            Get a free audit of your current marketing strategy and discover how AI can 10X your results
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="!bg-[#1447e6] !hover:bg-[#1447e6]/90 text-white flex items-center justify-center" onClick={() => setShowHeroForm(true)}>
              Start Free Audit
              <ArrowRight className="ml-2 h-4 w-4 text-white" />
            </Button>
            <Button size="lg" variant="outline" className="!bg-transparent !hover:bg-transparent !text-foreground border border-gray-300" onClick={() => setShowConsultationForm(true)}>
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - Conversion + SEO Rich */}
      <section className="px-6 py-20 lg:px-8 bg-gradient-to-b from-muted/20 to-background">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#1447e6] to-[#1447e6] bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our digital marketing services and how we can help grow your business.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How much does your digital marketing service cost?",
                answer:
                  "We offer flexible pricing options including monthly retainers (₹50K-₹5L+), project-based packages, and performance-based models. Our customized plans depend on your business size, industry, and growth goals. Most clients see 4-7X ROI within the first 6 months.",
                cta: "Get a free custom quote in 24 hrs",
                ctaLink: "#audit-form",
                category: "pricing",
              },
              {
                question: "How soon can I expect results from digital marketing?",
                answer:
                  "Results vary by channel: Paid ads show immediate traffic and leads within 24-48 hours, while SEO typically takes 3-6 months for significant organic growth. Our clients typically see 25-40% improvement in key metrics within the first month. Based on 300+ campaigns, average ROI is 4.5X within 6 months.",
                cta: "See our case studies",
                ctaLink: "#case-studies",
                category: "results",
              },
              {
                question: "What ROI can I expect from digital marketing in 2025?",
                answer:
                  "Our clients typically see 3-7X return depending on industry and ad spend. E-commerce averages 4.2X, SaaS companies see 5.8X, and service businesses achieve 4.5X ROI. Use our Interactive ROI Calculator above for personalized projections based on your budget and industry.",
                cta: "Calculate my ROI now",
                ctaLink: "#roi-calculator",
                category: "roi",
              },
              {
                question: "How long does it take to launch a marketing campaign?",
                answer:
                  "Our proven process: Week 1 - Comprehensive audit and strategy development, Week 2 - Campaign setup and creative development, Week 3 - Launch and initial optimization, Week 4+ - Ongoing optimization and scaling. We also offer fast-track options for urgent campaigns (launch within 5-7 days).",
                cta: "Start your campaign",
                ctaLink: "#contact",
                category: "timeline",
              },
              {
                question: "Do you offer any guarantees or risk-free trials?",
                answer:
                  "Yes! We're performance-driven and data-backed with milestone-based reporting. We offer a 30-day money-back guarantee if you're not satisfied with our strategy and execution. Plus, all our plans come with 'cancel anytime' flexibility after the initial 90-day optimization period.",
                cta: "Learn about our guarantee",
                ctaLink: "#testimonials",
                category: "guarantee",
              },
              {
                question: "Which tools and technologies do you use for marketing?",
                answer:
                  "We use industry-leading tools including Google Ads & Analytics 4, Meta Business Suite, LinkedIn Campaign Manager, Ahrefs for SEO, HubSpot for automation, and our proprietary AI-driven analytics dashboard. All clients get access to live performance dashboards for complete transparency.",
                cta: "See our tech stack",
                ctaLink: "#tools",
                category: "tools",
              },
              {
                question: "How often will I get updates on my marketing campaigns?",
                answer:
                  "You'll receive weekly performance reports via email, plus access to real-time dashboards 24/7. Your dedicated account manager is available via email, WhatsApp, or Slack for immediate support. Monthly strategy calls are included to review performance and plan next steps.",
                cta: "Meet our team",
                ctaLink: "#team",
                category: "communication",
              },
              {
                question: "Do you work with businesses in my industry?",
                answer:
                  "Yes! We've successfully scaled businesses across 15+ industries including E-commerce, SaaS, Healthcare, Real Estate, Education, and more. Each industry gets specialized strategies - for example, our e-commerce clients average 4.5X ROI while SaaS companies see 5.8X returns.",
                cta: "Check how we've scaled businesses in your niche",
                ctaLink: "#industries",
                category: "industries",
              },
              {
                question: "Is digital marketing sustainable for long-term business growth?",
                answer:
                  "Digital marketing has a compounding effect - SEO builds long-term organic visibility, content marketing establishes authority, and brand building creates lasting customer relationships. We focus on sustainable growth through automation, AI optimization, and scalable systems that work 24/7.",
                cta: "Learn about our growth strategy",
                ctaLink: "#strategy",
                category: "sustainability",
              },
            ].map((faq, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-0">
                  <details className="group/details">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none group-hover:bg-muted/20 transition-colors">
                      <h3 className="text-lg font-semibold text-foreground pr-4 leading-relaxed">{faq.question}</h3>
                      <div className="flex-shrink-0 transition-transform duration-200 group-open/details:rotate-45">
                        <div className="w-6 h-6 rounded-full bg-[#1447e6]/10 flex items-center justify-center">
                          <div className="w-3 h-3 relative">
                            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-[#1447e6] transform -translate-y-1/2"></div>
                            <div className="absolute inset-y-0 left-1/2 w-0.5 bg-[#1447e6] transform -translate-x-1/2 group-open/details:opacity-0 transition-opacity"></div>
                          </div>
                        </div>
                      </div>
                    </summary>
                    <div className="px-6 pb-6 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      {/* <div className="flex items-center gap-4">
                        <Button
                          size="sm"
                          className="bg-[#1447e6]/10 flex items-center justify-center hover:bg-[#1447e6] hover:text-white text-[#1447e6] border-[#1447e6]/20"
                          variant="outline"
                          
                        >
                          {faq.cta}
                          <ArrowRight className="ml-2 h-3 w-3 text-[#1447e6] hover:text-white" />
                        </Button>
                        <Badge variant="outline" className="text-xs text-muted-foreground border-muted-foreground/30">
                          {faq.category}
                        </Badge>
                      </div> */}
                    </div>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ CTA Section */}
          <div className="mt-16 text-center space-y-6 bg-gradient-to-r from-[#1447e6]/5 to-[#1447e6]/5 p-8 rounded-2xl border border-[#1447e6]/20">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">Still have questions?</h3>
              <p className="text-muted-foreground">
                Get personalized answers from our digital marketing experts in a free 30-minute consultation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="!bg-[#1447e6] !hover:bg-[#1447e6]/90 text-white flex items-center justify-center"  onClick={() => setShowConsultationForm(true)}>
                <MessageCircle className="mr-2 h-4 w-4 text-white" />
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="bg-background/50 flex items-center justify-center">
                <Mail className="mr-2 h-4 w-4" />
                Email Your Questions
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#09af09]" />
                <span className="text-gray-500">No sales pressure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#09af09]" />
                <span className="text-gray-500">30-min free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#09af09]" />
                <span className="text-gray-500 ">Custom strategy insights</span>
              </div>
            </div>
          </div>

          {/* Schema Markup for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How much does digital marketing cost in 2025?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Digital marketing costs vary from ₹50K-₹5L+ monthly depending on business size and goals. Most clients see 4-7X ROI within 6 months.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does it take to see digital marketing results?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Paid ads show results in 24-48 hours, SEO takes 3-6 months. Average clients see 25-40% improvement in first month.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What ROI can I expect from digital marketing?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Clients typically see 3-7X ROI depending on industry. E-commerce averages 4.2X, SaaS 5.8X, services 4.5X.",
                    },
                  },
                ],
              }),
            }}
          />
        </div>
      </section>

      {/* Industry-Specific Solutions Section */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tailored Solutions for Every Industry
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand the unique challenges of each industry and offer customized marketing strategies to drive
              results.
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div
              className="overflow-hidden rounded-2xl"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndustrySlide * (100 / getIndustryCardsPerSlide())}%)`,
                }}
              >
                {industryData.map((industry, index) => (
                  <div key={index} className={`flex-shrink-0 px-2 sm:px-4 ${
                    getIndustryCardsPerSlide() === 1 ? 'w-full' : 
                    getIndustryCardsPerSlide() === 2 ? 'w-1/2' : 'w-1/3'
                  }`}>
                    <Card
                      className={`h-full bg-gradient-to-br ${industry.gradient} border ${industry.border} hover:shadow-xl transition-all duration-300 group`}
                    >
                      <CardContent className="p-8 space-y-6">
                        <div className="flex items-start justify-between">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-br ${industry.gradient} ${industry.border} border`}
                          >
                            <div className={`${industry.iconColor}` }>{industry.icon}</div>
                          </div>
                          <Badge variant="secondary" className="text-xs font-medium bg-[#1447e6] text-white">
                            Specialized
                          </Badge>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-2xl font-semibold text-foreground group-hover:text-[#1447e6] transition-colors">
                            {industry.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                        </div>

                        <div className="space-y-4">
                          <div
                            className={`p-4 rounded-lg bg-gradient-to-r ${industry.gradient} border ${industry.border}`}
                          >
                            <div className="flex items-center gap-2">
                              <TrendingUp className={`h-5 w-5 ${industry.iconColor}`} />
                              <span className="font-semibold text-foreground">{industry.metric}</span>
                            </div>
                          </div>

                          <Button
                            className="w-full !bg-[#1447e6] hover:!bg-[#1447e6]/90 text-white group-hover:scale-105 transition-transform flex items-center justify-center"
                            size="lg"
                          >
                            {industry.cta}
                            <ArrowRight className="ml-2 h-4 w-4 text-white" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Slide Indicators */}
              <div className="flex items-center gap-2">
                {/* Desktop indicators (3 cards) */}
                <div className="hidden lg:flex items-center gap-1">
                  {Array.from({ length: Math.ceil(industryData.length / 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToIndustrySlide(index * 3)}
                      className={`!h-2 !w-2 !p-0 !m-0 rounded-full transition-all duration-300 border-0 ${
                        index === Math.floor(currentIndustrySlide / 3)
                          ? "bg-[#1447e6] scale-110"
                          : "bg-muted hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
                {/* Tablet indicators (2 cards) */}
                <div className="hidden md:flex lg:hidden items-center gap-1">
                  {Array.from({ length: Math.ceil(industryData.length / 2) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToIndustrySlide(index * 2)}
                      className={`!h-2 !w-2 !p-0 !m-0 rounded-full transition-all duration-300 border-0 ${
                        index === Math.floor(currentIndustrySlide / 2)
                          ? "bg-[#1447e6] scale-110"
                          : "bg-muted hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
                {/* Mobile indicators (1 card) */}
                <div className="md:hidden flex items-center gap-1">
                  {Array.from({ length: industryData.length }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToIndustrySlide(index)}
                      className={`!h-2 !w-2 !p-0 !m-0 rounded-full transition-all duration-300 border-0 ${
                        index === currentIndustrySlide
                          ? "bg-[#1447e6] scale-110"
                          : "bg-muted hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-3">
                {/* Auto-play Toggle */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="text-xs"
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="h-3 w-3 mr-1" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3 mr-1" />
                      Play
                    </>
                  )}
                </Button>

                {/* Previous Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevIndustrySlide}
                  className="hover:bg-[#1447e6] hover:text-white bg-transparent"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Next Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextIndustrySlide}
                  className="hover:bg-[#1447e6] hover:text-white bg-transparent"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Carousel Progress Bar */}
            <div className="mt-4 w-full bg-muted rounded-full h-1 overflow-hidden">
              <div
                className="h-full bg-[#1447e6] transition-all duration-300 ease-out"
                style={{
                  width: `${((Math.floor(currentIndustrySlide / getIndustryCardsPerSlide()) + 1) / Math.ceil(industryData.length / getIndustryCardsPerSlide())) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Trust Element */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">15+ Industries Served</span> •
              <span className="ml-2">300+ Successful Campaigns</span> •
              <Button variant="link" className="p-0 h-auto  text-[#1447e6] hover:text-[#1447e6]/80">
                See All Industries →
              </Button>
            </p>
          </div>
        </div>
      </section>

   

      {showWhatsApp && (
        <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-left-5">
          <div className="relative">
            <button
              onClick={() =>
                window.open("https://wa.me/1234567890?text=Hi, I'm interested in a Free Marketing Audit.", "_blank")
              }
              className="h-14 w-14 rounded-full bg-[#09af09] hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group "
            >
              <MessageCircle className="h-4 w-4 text-white group-hover:scale-110 transition-transform" />
            </button>
            <div className="absolute -top-2 -right-2 h-4 w-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-3 py-2 shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Chat with us!
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white"></div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right-5">
        <div className="flex flex-col items-end space-y-3">
          <button
            onClick={() => setShowMultiStepForm(true)}
            className={`h-14 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group ${
              scrollProgress > 30 ? "bg-gradient-to-r from-[#1447e6] to-[#5e7fe2] animate-pulse" : "bg-gradient-to-r from-[#1447e6] to-[#1447e6]"
            } text-white`}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Zap className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-white">Free Audit</div>
                <div className="text-xs text-white">Get Started →</div>
              </div>
            </div>
          </button>
          <p className="text-xs text-foreground bg-white px-2 py-1 rounded shadow-sm">
            Takes 30 seconds. No credit card required.
          </p>
        </div>
      </div>

      {(showFloatingForm &&  (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in-0">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 max-w-lg w-full shadow-2xl animate-in zoom-in-95">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Ready to Scale?</h3>
                  <p className="text-gray-600">Let's Audit Your Marketing for Free.</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setShowFloatingForm(false)} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="bg-gradient-to-r from-[#1447e6]/10 to-[#1447e6]/10 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">Limited Time Offer</span>
                </div>
                <p className="text-sm text-gray-700">
                  Get a comprehensive marketing audit worth $500 - completely free!
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Full Name" className="w-full h-12" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email Address" className="w-full h-12" />
                </div>
                <div>
                  <Input placeholder="Your Website URL" className="w-full h-12" />
                </div>

                <Button className="w-full h-12 bg-gradient-to-r from-[#1447e6] to-[#1447e6] hover:from-[#1447e6]/90 hover:to-secondary/90 text-lg font-semibold flex items-center justify-center p-0">
                  <Zap className="mr-2 h-5 w-5 text-white" />
                  Claim My Free $500 Audit
                </Button>
              </form>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">Google Reviews</span>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 text-green-500 mx-auto mb-1" />
                  <span className="text-xs text-gray-600">SSL Secured</span>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                  <span className="text-xs text-gray-600">24h Response</span>
                </div>
              </div>
            </div>
          </div>) ||
        (showScrollForm && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in-0">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 max-w-lg w-full shadow-2xl animate-in zoom-in-95">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Ready to Scale?</h3>
                  <p className="text-gray-600">Let's Audit Your Marketing for Free.</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setShowScrollForm(false)} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="bg-gradient-to-r from-[#1447e6]/10 to-[#1447e6]/10 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">Limited Time Offer</span>
                </div>
                <p className="text-sm text-gray-700">
                  Get a comprehensive marketing audit worth $500 - completely free!
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Full Name" className="w-full h-12" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email Address" className="w-full h-12" />
                </div>
                <div>
                  <Input placeholder="Your Website URL" className="w-full h-12" />
                </div>

                <button className="w-full h-12 bg-gradient-to-r from-[#1447e6] to-[#1447e6] hover:fr[#1447e6]/90 hover:to-secondary/90 text-lg font-semibold flex items-center justify-center p-0">
                  <Zap className="mr-2 h-5 w-5 text-white" />
                  Claim My Free $500 Audit
                </button>
              </form>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">Google Reviews</span>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 text-green-500 mx-auto mb-1" />
                  <span className="text-xs text-gray-600">SSL Secured</span>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                  <span className="text-xs text-gray-600">24h Response</span>
                </div>
              </div>
            </div>
          </div>
        )))}

      {(showMultiStepForm || showExitIntent) && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in-0">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-gradient-to-r from-[#1447e6] to-[#1447e6] rounded-full flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Free Growth Audit</h2>
                  <p className="text-sm text-gray-500">Step {multiStepFormStep} of 4</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowMultiStepForm(false)
                  setShowExitIntent(false)
                  setMultiStepFormStep(1)
                }}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="px-6 py-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm text-gray-500">{Math.round((multiStepFormStep / 4) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#1447e6] to-[#1447e6] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(multiStepFormStep / 4) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-6">
              {/* Step 1: Name Collection */}
              {multiStepFormStep === 1 && (
                <div className="space-y-6 text-center">
                  <div className="space-y-3">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Ready to Grow Faster? Let's Start With a Free Audit.
                    </h3>
                    <p className="text-gray-600">
                      Answer a few quick questions to get your personalized growth report.
                    </p>
                  </div>

                  <div className="max-w-md mx-auto">
                    <Input
                      placeholder="Enter your name"
                      value={multiStepFormData.name}
                      onChange={(e) => setMultiStepFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="h-12 text-center text-lg"
                    />
                  </div>

                  <Button
                    onClick={() => setMultiStepFormStep(2)}
                    disabled={!multiStepFormData.name.trim()}
                    className="w-full max-w-md mx-auto h-12 bg-gradient-to-r from-[#1447e6] to-[#1447e6] hover:from-[#1447e6]/90 hover:to-[#1447e6]/90 text-lg font-semibold text-white"
                  >
                    Next →
                  </Button>

                  <p className="text-xs text-gray-500">We never spam. Your data is safe.</p>
                </div>
              )}

              {/* Step 2: Business Info */}
              {multiStepFormStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center space-y-3">
                    <div className="text-4xl mb-4">🏢</div>
                    <h3 className="text-2xl font-bold text-gray-900">Tell us a bit about your business.</h3>
                  </div>

                  <div className="space-y-4 max-w-md mx-auto">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Website URL</label>
                      <Input
                        placeholder="www.yourbusiness.com"
                        value={multiStepFormData.website}
                        onChange={(e) => setMultiStepFormData((prev) => ({ ...prev, website: e.target.value }))}
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                      <Select
                        value={multiStepFormData.industry}
                        onValueChange={(value) => setMultiStepFormData((prev) => ({ ...prev, industry: value }))}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="saas">SaaS</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="realestate">Real Estate</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex space-x-3 max-w-md mx-auto">
                    <Button variant="outline" onClick={() => setMultiStepFormStep(1)} className="flex-1 h-12">
                      ← Back
                    </Button>
                    <Button
                      onClick={() => setMultiStepFormStep(3)}
                      disabled={!multiStepFormData.website.trim() || !multiStepFormData.industry}
                      className="flex-1 h-12 bg-gradient-to-r from-[#1447e6] to-[#1447e6] hover:from-[#1447e6]/90 hover:to-[#1447e6]/90"
                    >
                      Next →
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Marketing Goals */}
              {multiStepFormStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center space-y-3">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-2xl font-bold text-gray-900">What's your #1 growth goal right now?</h3>
                    <p className="text-gray-600">Select all that apply</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                    {[
                      { id: "leads", icon: "📈", label: "More Leads & Sales" },
                      { id: "seo", icon: "🔍", label: "Improve SEO Ranking" },
                      { id: "ads", icon: "🎯", label: "Paid Ads Performance" },
                      { id: "email", icon: "📧", label: "Email & Retention Marketing" },
                      { id: "analytics", icon: "📊", label: "Analytics & ROI Tracking" },
                    ].map((goal) => (
                      <button
                        key={goal.id}
                        onClick={() => {
                          const newGoals = multiStepFormData.goals.includes(goal.id)
                            ? multiStepFormData.goals.filter((g) => g !== goal.id)
                            : [...multiStepFormData.goals, goal.id]
                          setMultiStepFormData((prev) => ({ ...prev, goals: newGoals }))
                        }}
                        className={`p-4 rounded-xl border-2 transition-all text-left ${
                          multiStepFormData.goals.includes(goal.id)
                            ? "border-[#1447e6] bg-[#1447e6]/10 text-[#1447e6]"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{goal.icon}</span>
                          <span className="font-medium">{goal.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex space-x-3 max-w-md mx-auto">
                    <Button variant="outline" onClick={() => setMultiStepFormStep(2)} className="flex-1 h-12">
                      ← Back
                    </Button>
                    <Button
                      onClick={() => setMultiStepFormStep(4)}
                      disabled={multiStepFormData.goals.length === 0}
                      className="flex-1 h-12 bg-gradient-to-r from-[#1447e6] to-[#1447e6] hover:from-[#1447e6]/90 hover:to-[#1447e6]/90"
                    >
                      Next →
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Info */}
              {multiStepFormStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center space-y-3">
                    <div className="text-4xl mb-4">📧</div>
                    <h3 className="text-2xl font-bold text-gray-900">Where should we send your Free Audit Report?</h3>
                  </div>

                  <div className="space-y-4 max-w-md mx-auto">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        value={multiStepFormData.email}
                        onChange={(e) => setMultiStepFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone/WhatsApp
                        <span className="text-[#1447e6] text-xs ml-1">(for faster response)</span>
                      </label>
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={multiStepFormData.phone}
                        onChange={(e) => setMultiStepFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="h-12"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={multiStepFormData.consent}
                        onChange={(e) => setMultiStepFormData((prev) => ({ ...prev, consent: e.target.checked }))}
                        className="mt-1"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        ✅ I agree to receive updates & insights (no spam).
                      </label>
                    </div>
                  </div>

                  <div className="flex space-x-3 max-w-md mx-auto">
                    <Button variant="outline" onClick={() => setMultiStepFormStep(3)} className="flex-1 h-12">
                      ← Back
                    </Button>
                    <Button
                      onClick={() => {
                        // Handle form submission
                        setShowMultiStepForm(false)
                        setShowExitIntent(false)
                        setMultiStepFormStep(5) // Success screen
                      }}
                      disabled={!multiStepFormData.email.trim() || !multiStepFormData.consent}
                      className="flex-1 h-12 bg-gradient-to-r from-[#1447e6] to-[#1447e6] hover:from-[#1447e6]/90 hover:to-[#1447e6]/90"
                    >
                      Get My Free Audit 🚀
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">🔒 Your data is 100% private. No spam, ever.</p>
                </div>
              )}

              {/* Success Screen */}
              {multiStepFormStep === 5 && (
                <div className="space-y-6 text-center">
                  <div className="space-y-4">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-3xl font-bold text-gray-900">All Set! Your Free Audit Is On The Way.</h3>
                    <p className="text-gray-600 text-lg">
                      Our team will review your details and send your report within 24 hours.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 max-w-md mx-auto">
                    <h4 className="font-semibold text-gray-900 mb-4">What happens next?</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-center space-x-3">
                        <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                          1
                        </div>
                        <span>We analyze your website & competitors</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                          2
                        </div>
                        <span>Create your custom growth strategy</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="h-6 w-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">
                          3
                        </div>
                        <span>Email you the detailed report</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Button className="flex-1 h-12 bg-green-600 hover:bg-green-700">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat With an Expert Now →
                    </Button>
                    <Button variant="outline" className="flex-1 h-12 bg-transparent">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book a Call →
                    </Button>
                  </div>

                  <div className="flex items-center justify-center space-x-6 pt-4 border-t">
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">Clutch</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">Google</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}


      {/* Hero Form Popup - triggered by "Get Free Audit" button */}
      {showHeroForm && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in-0">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 max-w-lg w-full shadow-2xl animate-in zoom-in-95">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Ready to Scale?</h3>
                <p className="text-gray-600">Let's Audit Your Marketing for Free.</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowHeroForm(false)} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="bg-gradient-to-r from-[#1447e6]/10 to-[#1447e6]/10 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold text-gray-900">Limited Time Offer</span>
              </div>
              <p className="text-sm text-gray-700">Get a comprehensive marketing audit worth $500 - completely free!</p>
            </div>

            <form className="space-y-4">
              <div>
                <Input placeholder="Your Full Name" className="w-full h-12" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email Address" className="w-full h-12" />
              </div>
              <div>
                <Input placeholder="Your Website URL" className="w-full h-12" />
              </div>

              <Button className="w-full h-12 bg-gradient-to-r  text-white from-[#1447e6] to-[#1447e6] hover:from-[#1447e6]/90 hover:to-[#1447e6]/90 text-lg font-semibold flex items-center justify-center p-0">
                <Zap className="mr-2 h-5 w-5 text-white" />
                Claim My Free $500 Audit
              </Button>
            </form>

            <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-600">Google Reviews</span>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-green-500 mx-auto mb-1" />
                <span className="text-xs text-gray-600">SSL Secured</span>
              </div>
              <div className="text-center">
                <Clock className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                <span className="text-xs text-gray-600">24h Response</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Form Popup - triggered by "Book Free Consultation" button */}
      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in-0">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Get Your Free Audit</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowConsultationForm(false)} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <Input placeholder="Enter your full name" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <Input type="email" placeholder="your@email.com" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile No</label>
                <Input placeholder="9234567367" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                <Input placeholder="https://yourwebsite.com" className="w-full" />
              </div>

              <Button className="w-full text-white bg-gradient-to-r from-[#1447e6] to-[#1447e6] hover:from-[#1447e6]/90 hover:to-[#1447e6]/90 flex justify-center">
                <Zap className="mr-2 h-4 w-4 text-white" />
                Get My Free Audit Report
              </Button>
            </form>

            <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-600">SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
