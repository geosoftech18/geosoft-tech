"use client"

import React, { useState } from "react"
import { Button } from "@/core/components/ui/button"
import { Card, CardContent } from "@/core/components/card"
import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle, ChevronDown } from "lucide-react"
import { countries } from "../nagpur/countries-data"

const benefits = [
  "Free consultation and project analysis",
  "Custom solutions tailored to your business",
  "SEO-optimized and mobile-responsive design",
  "Ongoing support and maintenance",
  "Competitive pricing with flexible packages",
  "Local Mumbai expertise with global standards",
]


function InternationalPhoneInput() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.phone-input-container')) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  const handlePhoneChange = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "")

    // Auto-detect country based on number pattern
    if (digits.length > 0) {
      // Try to detect country by dial code
      const detectedCountry = countries.find((country) => {
        const dialCode = country.dialCode.replace("+", "")
        return digits.startsWith(dialCode) && dialCode.length > 1
      })

      if (detectedCountry && detectedCountry.code !== selectedCountry.code) {
        setSelectedCountry(detectedCountry)
        // Remove the dial code from the phone number
        const dialCode = detectedCountry.dialCode.replace("+", "")
        const phoneWithoutDialCode = digits.replace(dialCode, "")
        setPhoneNumber(phoneWithoutDialCode)
        return
      }

      // If no country detected by dial code, try pattern matching
      if (digits.length > 3) {
        const patternDetectedCountry = countries.find((country) => {
          const withoutDialCode = digits.replace(country.dialCode.replace("+", ""), "")
          return country.pattern.test(withoutDialCode)
        })

        if (patternDetectedCountry && patternDetectedCountry.code !== selectedCountry.code) {
          setSelectedCountry(patternDetectedCountry)
        }
      }
    }

    setPhoneNumber(digits)
  }

  const formatPhoneNumber = (number: string) => {
    if (selectedCountry.code === "IN" && number.length === 10) {
      return `${number.slice(0, 5)} ${number.slice(5)}`
    }
    if (selectedCountry.code === "US" && number.length === 10) {
      return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`
    }
    if (selectedCountry.code === "GB" && number.length === 10) {
      return `${number.slice(0, 4)} ${number.slice(4, 7)} ${number.slice(7)}`
    }
    if (selectedCountry.code === "AU" && number.length === 9) {
      return `${number.slice(0, 4)} ${number.slice(4, 7)} ${number.slice(7)}`
    }
    return number
  }

  const getFullPhoneNumber = () => {
    return selectedCountry.dialCode + phoneNumber
  }

  return (
    <div className="relative phone-input-container">
      <div className="flex">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-3 bg-background border border-border border-r-0 rounded-l-lg text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-[#00bf62] transition-colors"
          >
            <img 
              src={selectedCountry.flag} 
              alt={`${selectedCountry.name} flag`}
              className="w-5 h-4 sm:w-6 sm:h-5 object-cover rounded-sm"
            />
            <span className="text-xs sm:text-sm font-medium">{selectedCountry.dialCode}</span>
            <ChevronDown className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 z-50 w-64 sm:w-72 mt-1 bg-background border border-border rounded-lg shadow-xl max-h-60 sm:max-h-80 overflow-y-auto">
              <div className="p-2">
                <div className="text-xs text-muted-foreground mb-2 px-2">Select Country</div>
                {countries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => {
                      setSelectedCountry(country)
                      setIsDropdownOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-muted focus:bg-muted focus:outline-none rounded-md transition-colors ${
                      selectedCountry.code === country.code ? 'bg-muted/50' : ''
                    }`}
                  >
                    <img 
                      src={country.flag} 
                      alt={`${country.name} flag`}
                      className="w-5 h-4 object-cover rounded-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">{country.name}</div>
                      <div className="text-xs text-muted-foreground">{country.dialCode}</div>
                    </div>
                    {selectedCountry.code === country.code && (
                      <div className="w-2 h-2 bg-[#00bf62] rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <input
          type="tel"
          value={formatPhoneNumber(phoneNumber)}
          onChange={(e) => handlePhoneChange(e.target.value)}
          placeholder={`Enter phone number`}
          className="flex-1 p-3 rounded-r-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#00bf62] text-sm sm:text-base transition-colors"
        />
      </div>
      
      {/* Display full phone number */}
      {phoneNumber && (
        <div className="mt-2 text-xs text-muted-foreground">
          Full number: {getFullPhoneNumber()}
        </div>
      )}
    </div>
  )
}

export function CTASection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-[#00bf62] text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto text-pretty">
          Final Thoughts If you are looking for a trusted website designing company in Jaipur, 
          GEO Softech is your perfect partner. With our experience, creative expertise, and advanced technologies, we deliver websites that don’t just look good but also grow your business. 
 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              We Don't Just Design Websites – We Create Digital Growth Engines
            </h3>
            <p className="text-sm sm:text-base text-primary-foreground/90 mb-6 sm:mb-8">
            Whether you are a startup, SME, or large enterprise, we ensure that your website becomes your digital growth engine.  
            </p>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-primary-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm sm:text-base"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent text-sm sm:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp Chat
              </Button>
            </div>
          </div>

          <Card className="bg-background/95 backdrop-blur border-primary-foreground/20">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Get Your Free Consultation</h3>
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                  />
                </div>
                <div>
                  <InternationalPhoneInput />
                </div>
                <div>
                  <select className="w-full p-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-[#00bf62] text-sm sm:text-base">
                    <option value="">Select Service</option>
                    <option value="website-design">Website Design</option>
                    <option value="ecommerce">E-commerce Development</option>
                    <option value="seo">SEO Services</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="maintenance">Website Maintenance</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full p-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#00bf62] resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#00bf62] hover:bg-[#00bf62]/90 text-primary-foreground text-sm sm:text-base"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-primary-foreground/80 mb-4">
            📞 Let's build your digital presence today! Contact GEO Softech for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>hello@geosoftech.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>WhatsApp Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
