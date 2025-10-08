"use client"

import { useState } from "react"
import { Button } from "@/core/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/core/components/card"
import { Badge } from "@/core/components/badge"
import { X, ArrowRight, ArrowLeft, Check, User, Mail, Phone, Building, MessageSquare, Globe, DollarSign, Clock, CheckCircle } from "lucide-react"

interface FormData {
  fullName: string
  email: string
  phone: string
  company: string
  service: string
  description: string
  website: string
  budget: string
  contactMethod: string
  bestTime: string
  consent: boolean
}

const services = [
  "Website Development",
  "E-commerce",
  "SEO",
  "Website Maintenance",
  "Other"
]

const budgetRanges = [
  "₹5k-10k",
  "₹10k-50k", 
  "₹50k-1L",
  "₹1L+"
]

const contactMethods = [
  { value: "email", label: "Email", icon: Mail },
  { value: "call", label: "Call", icon: Phone },
  { value: "whatsapp", label: "WhatsApp", icon: MessageSquare }
]

const timeSlots = [
  "Morning (9 AM - 12 PM)",
  "Afternoon (12 PM - 5 PM)", 
  "Evening (5 PM - 8 PM)"
]

export function ConsultationForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    description: "",
    website: "",
    budget: "",
    contactMethod: "",
    bestTime: "",
    consent: false
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const totalSteps = 4

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {}

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
      if (!formData.email.trim()) newErrors.email = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    }

    if (step === 2) {
      if (!formData.company.trim()) newErrors.company = "Company name is required"
      if (!formData.service) newErrors.service = "Please select a service"
    }

    if (step === 3) {
      if (!formData.budget) newErrors.budget = "Please select budget range"
      if (!formData.contactMethod) newErrors.contactMethod = "Please select contact method"
      if (!formData.bestTime) newErrors.bestTime = "Please select best time to contact"
    }

    if (step === 4) {
      if (!formData.consent) newErrors.consent = "You must agree to be contacted"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(4)) {
      // Here you would typically send the data to your API
      console.log("Form submitted:", formData)
      alert("Thank you! We'll contact you soon.")
      onClose()
    }
  }

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#00bf62] to-[#00a855] p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Get Free Consultation</h2>
              <p className="text-green-100 mt-1">Let's discuss your project requirements</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5 text-white" />
            </Button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-white">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-white">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2 transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#00bf62]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-[#00bf62]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                  <p className="text-gray-600 mt-2">Tell us about yourself</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => updateFormData('fullName', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00bf62] focus:border-transparent transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00bf62] focus:border-transparent transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00bf62] focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#00bf62]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-[#00bf62]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Project Details</h3>
                  <p className="text-gray-600 mt-2">Tell us about your project</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business / Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00bf62] focus:border-transparent transition-colors ${
                      errors.company ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your company name"
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => updateFormData('service', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00bf62] focus:border-transparent transition-colors ${
                      errors.service ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brief Project Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => updateFormData('description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00bf62] focus:border-transparent transition-colors resize-none"
                    placeholder="Describe your project requirements, goals, and any specific features you need..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Website URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => updateFormData('website', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00bf62] focus:border-transparent transition-colors"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Budget & Contact Preferences */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#00bf62]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-[#00bf62]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Budget & Contact Preferences</h3>
                  <p className="text-gray-600 mt-2">Help us serve you better</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => updateFormData('budget', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00bf62] focus:border-transparent transition-colors ${
                      errors.budget ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                  {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Contact Method *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {contactMethods.map((method) => (
                      <label
                        key={method.value}
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                          formData.contactMethod === method.value
                            ? 'border-[#00bf62] bg-[#00bf62]/5'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method.value}
                          checked={formData.contactMethod === method.value}
                          onChange={(e) => updateFormData('contactMethod', e.target.value)}
                          className="sr-only"
                        />
                        <method.icon className="h-5 w-5 mr-3 text-gray-600" />
                        <span className="text-sm font-medium">{method.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.contactMethod && <p className="text-red-500 text-sm mt-1">{errors.contactMethod}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Best Time to Contact *
                  </label>
                  <select
                    value={formData.bestTime}
                    onChange={(e) => updateFormData('bestTime', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#00bf62] focus:border-transparent transition-colors ${
                      errors.bestTime ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select best time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  {errors.bestTime && <p className="text-red-500 text-sm mt-1">{errors.bestTime}</p>}
                </div>
              </div>
            )}

            {/* Step 4: Consent & Submit */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#00bf62]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-[#00bf62]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Almost Done!</h3>
                  <p className="text-gray-600 mt-2">Review and submit your consultation request</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Summary</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div><span className="font-medium">Name:</span> {formData.fullName}</div>
                    <div><span className="font-medium">Email:</span> {formData.email}</div>
                    <div><span className="font-medium">Company:</span> {formData.company}</div>
                    <div><span className="font-medium">Service:</span> {formData.service}</div>
                    <div><span className="font-medium">Budget:</span> {formData.budget}</div>
                    <div><span className="font-medium">Contact:</span> {formData.contactMethod}</div>
                  </div>
                </div>

                <div>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => updateFormData('consent', e.target.checked)}
                      className={`mt-1 h-4 w-4 text-[#00bf62] border-gray-300 rounded focus:ring-[#00bf62] ${
                        errors.consent ? 'border-red-500' : ''
                      }`}
                    />
                    <span className="text-sm text-gray-700">
                      I agree to be contacted by your team regarding this consultation request. *
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Navigation Buttons - Fixed at bottom */}
        <div className="flex justify-between p-6 border-t bg-white">
          <Button
            type="button"
            variant="outline"
            onClick={currentStep === 1 ? onClose : handlePrevious}
            className="flex items-center"
          >
            {currentStep === 1 ? (
              <>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </>
            ) : (
              <>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </>
            )}
          </Button>

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={handleNext}
              className="bg-[#00bf62] hover:bg-[#00bf62]/90 text-white flex items-center"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2 text-white" />
            </Button>
          ) : (
            <Button
              type="submit"
              onClick={handleSubmit}
              className="bg-[#00bf62] hover:bg-[#00bf62]/90 text-white flex items-center"
            >
              <Check className="h-4 w-4 mr-2" />
              Request Free Consultation
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
