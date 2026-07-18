'use client';
import React, { FormEvent, useState } from 'react';
import { ConfirmSwal, DangerSwal } from '@/core/common/SweetAlerts';
import FlipButton from './FlipButton';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import CheckboxButton from './CheckboxButton';
import Button from './Button';
import { twMerge } from 'tailwind-merge';

type Props = {
  handleShowModel: (value: boolean) => void;
};

const ContactForm: React.FC<Props> = ({ handleShowModel }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [phoneError, setPhoneError] = useState<string | undefined>(undefined);
  const [selectedServices, setSelectedServices] = useState<
    string | undefined
  >();
  const [selectedWork, setSelectedWork] = useState<string | undefined>();
  const [projectDescription, setProjectDescription] = useState<
    string | undefined
  >();

  const handleNextStep = () => {
    if (currentStep === 4 && (!name || !email || !phoneNumber)) {
      DangerSwal.fire({
        title: 'All fields are required',
        html: 'Please fill out all the fields before proceeding.',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
      return;
    }

    const isValidEmail = (value: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

    const isValidPhone = (value: string) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    };

    if (currentStep === 4) {
      const nextEmailError = !isValidEmail(email) ? "Please enter a valid email address." : undefined;
      const nextPhoneError = !isValidPhone(phoneNumber)
        ? "Please enter a valid mobile number (10-15 digits)."
        : undefined;

      if (nextEmailError || nextPhoneError) {
        setEmailError(nextEmailError);
        setPhoneError(nextPhoneError);
        DangerSwal.fire({
          title: "Please check your details",
          html: [nextEmailError, nextPhoneError].filter(Boolean).join("<br/>"),
          icon: "error",
          confirmButtonText: "Okay",
        });
        return;
      }

      setEmailError(undefined);
      setPhoneError(undefined);
    }
    if (currentStep === 1 && selectedServices !== 'WEB DESIGN & DEVELOPMENT') {
      setCurrentStep(currentStep + 2);
      return;
    }

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep === 3) {
      setCurrentStep(currentStep - 2);
      return;
    }
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidEmail = (value: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

    const cleanedPhone = phoneNumber.replace(/\D/g, "");
    const isValidPhone = (value: string) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    };

    if (name && email && phoneNumber) {
      const nextEmailError = !isValidEmail(email) ? "Please enter a valid email address." : undefined;
      const nextPhoneError = !isValidPhone(phoneNumber)
        ? "Please enter a valid mobile number (10-15 digits)."
        : undefined;

      if (nextEmailError || nextPhoneError) {
        setEmailError(nextEmailError);
        setPhoneError(nextPhoneError);
        DangerSwal.fire({
          title: "Please check your details",
          html: [nextEmailError, nextPhoneError].filter(Boolean).join("<br/>"),
          icon: "error",
          confirmButtonText: "Okay",
        });
        return;
      }
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone_number: cleanedPhone,
            company_name: companyName,
            requirement: selectedServices,
            work_preference: selectedWork,
            project_description: projectDescription,
          }),
        });
        handleShowModel(false);
        if (!res.ok) {
          DangerSwal.fire({
            title: 'Something went wrong',
            html: 'Please try again in some moments',
            icon: 'error',
            confirmButtonText: 'Okay',
          });
        } else {
          ConfirmSwal.fire({
            title: 'Thank you for connecting',
            html: 'Our ops team will contact you soon!',
            icon: 'success',
            confirmButtonText: 'Okay',
          });
          setName('');
          setEmail('');
          setPhoneNumber('');
          setSelectedServices(undefined);
          setSelectedWork(undefined);
          setProjectDescription(undefined);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleServiceChange = (value: string | string[]) => {
    if (typeof value === 'string') {
      setSelectedServices(value);
    }
  };

  const handleWorkChange = (value: string | string[]) => {
    if (typeof value === 'string') {
      setSelectedWork(value);
    }
  };

  return (
    <div className="h-full w-full">
      <form
        className="h-full w-full overflow-hidden rounded-xl bg-white px-5 py-20 sm:p-10 lg:p-20"
        onSubmit={handleSubmitForm}
        toolname="design_a_quote"
        tooldescription="Multi-step quote request for GEO Softech services. Collects desired services, project details, and contact information for a custom quote."
      >
        {currentStep !== 1 && (
          <button
            className="absolute left-5 top-5 flex w-max items-center gap-3 outline-none"
            onClick={handlePreviousStep}
          >
            <FaArrowLeftLong />
            Back
          </button>
        )}
        {currentStep === 1 && (
          <div className="flex w-full animate-side-in-top flex-col items-center justify-center space-y-5 transition-all">
            <h2 className="text-center text-lg text-green-600 md:text-xl lg:text-2xl">
              Design A Quote
            </h2>
            <h3 className="text-center text-lg md:text-xl lg:text-2xl">
              What services would you like to opt?
            </h3>
            <div className="w-full space-y-2">
              <CheckboxButton
                id="service-web-design-and-development"
                label="WEB DESIGN & DEVELOPMENT"
                value="WEB DESIGN & DEVELOPMENT"
                onChange={handleServiceChange}
                selectedValue={selectedServices}
                isSingleSelect
                className="mx-auto w-full max-w-sm text-center text-xl"
              />
              <CheckboxButton
                id="service-branding"
                label="BRANDING"
                value="BRANDING"
                onChange={handleServiceChange}
                selectedValue={selectedServices}
                isSingleSelect
                className="mx-auto w-full max-w-sm text-center text-xl"
              />
              <CheckboxButton
                id="service-digital-marketing"
                label="DIGITAL MARKETING"
                value="DIGITAL MARKETING"
                onChange={handleServiceChange}
                selectedValue={selectedServices}
                isSingleSelect
                className="mx-auto w-full max-w-sm text-center text-xl"
              />
              <CheckboxButton
                id="service-seo"
                label="SEO"
                value="SEO"
                onChange={handleServiceChange}
                selectedValue={selectedServices}
                isSingleSelect
                className="mx-auto w-full max-w-sm text-center text-xl"
              />

              <CheckboxButton
                id="service-all-services"
                label="ALL SERVICES"
                value="ALL SERVICES"
                onChange={handleServiceChange}
                selectedValue={selectedServices}
                isSingleSelect
                className="mx-auto w-full max-w-sm text-center text-xl"
              />
              {/* <CheckboxButton
                id="service-branding"
                label="Branding"
                value="Branding"
                onChange={handleServiceChange}
                selectedValues={selectedServices}
                className="mx-auto w-full max-w-sm text-center text-xl"
              />
              <CheckboxButton
                id="service-development"
                label="Development"
                value="Development"
                onChange={handleServiceChange}
                selectedValues={selectedServices}
                className="mx-auto w-full max-w-sm text-center text-xl"
              />
              <CheckboxButton
                id="service-marketing"
                label="Marketing"
                value="Marketing"
                onChange={handleServiceChange}
                selectedValues={selectedServices}
                className="mx-auto w-full max-w-sm text-center text-xl"
              />
              <CheckboxButton
                id="service-all"
                label="All Services"
                value="All Services"
                onChange={handleServiceChange}
                selectedValues={selectedServices}
                className="mx-auto w-full max-w-sm text-center text-xl"
              /> */}
            </div>
            <FlipButton
              variant="flip"
              default_text="Continue"
              hover_text="Next"
              type="secondary"
              rounded="rounded-full"
              className="w-max"
              icon={<FaArrowRightLong />}
              onClick={handleNextStep}
            >
              Continue
            </FlipButton>
          </div>
        )}
        {currentStep === 2 &&
          selectedServices === 'WEB DESIGN & DEVELOPMENT' && (
            <div className="flex w-full animate-side-in-top flex-col items-center justify-center space-y-5">
              <h2 className="text-center text-lg text-green-600 md:text-xl lg:text-2xl">
                Design A Quote
              </h2>
              <h3 className="text-center text-lg md:text-xl lg:text-2xl">
                How do you want to work?
              </h3>
              <div className="w-full space-y-2">
                <CheckboxButton
                  id="Project"
                  label="Create a new website"
                  value="Create a new website"
                  onChange={handleWorkChange}
                  selectedValue={selectedWork}
                  isSingleSelect
                  className="mx-auto w-full max-w-sm text-center text-xl"
                />
                <CheckboxButton
                  id="Redesign"
                  label="Redesign an existing website"
                  value="Redesign an existing website"
                  onChange={handleWorkChange}
                  selectedValue={selectedWork}
                  isSingleSelect
                  className="mx-auto w-full max-w-sm text-center text-xl"
                />
                <CheckboxButton
                  id="Retainer"
                  label="Retainer"
                  value="Retainer"
                  onChange={handleWorkChange}
                  selectedValue={selectedWork}
                  isSingleSelect
                  className="mx-auto w-full max-w-sm text-center text-xl"
                />
                <CheckboxButton
                  id="Hourly"
                  label="Hourly"
                  value="Hourly"
                  onChange={handleWorkChange}
                  selectedValue={selectedWork}
                  isSingleSelect
                  className="mx-auto w-full max-w-sm text-center text-xl"
                />
              </div>
              <FlipButton
                variant="flip"
                default_text="Continue"
                hover_text="Next"
                type="secondary"
                rounded="rounded-full"
                className="w-max"
                icon={<FaArrowRightLong />}
                onClick={handleNextStep}
              >
                Continue
              </FlipButton>
            </div>
          )}
        {currentStep === 3 && (
          <div className="flex w-full animate-side-in-top flex-col items-center justify-center space-y-10">
            <h2 className="text-center text-lg text-green-600 md:text-xl lg:text-2xl">
              Design A Quote
            </h2>
            <div className="w-full space-y-8">
              <div className="flex w-full items-center gap-2">
                <label
                  htmlFor="companyName"
                  className="whitespace-nowrap text-lg md:text-xl lg:text-2xl"
                >
                  Your Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="eg. Geosoftech"
                  className="w-full resize-none border-b border-b-neutral-300 text-lg text-p outline-none transition-colors focus:border-b-p md:text-xl lg:text-2xl"
                />
              </div>
              <div>
                <label
                  htmlFor="project-description"
                  className="text-lg md:text-xl lg:text-2xl"
                >
                  Project Description (Optional)
                </label>
                <textarea
                  id="project-description"
                  rows={4}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="w-full resize-none border-b border-b-neutral-300 outline-none transition-colors focus:border-b-p"
                />
              </div>
            </div>
            <FlipButton
              variant="flip"
              default_text="Continue"
              hover_text="Next"
              type="secondary"
              rounded="rounded-full"
              className="w-max"
              icon={<FaArrowRightLong />}
              onClick={handleNextStep}
            >
              Continue
            </FlipButton>
          </div>
        )}
        {currentStep === 4 && (
          <div className="flex w-full animate-side-in-top flex-col items-center justify-center space-y-8">
            <h2 className="text-center text-lg text-green-600 md:text-xl lg:text-2xl">
              Design A Quote
            </h2>
            <div className="w-full max-w-md space-y-8">
              <div className="flex w-full items-center gap-2">
                <label
                  htmlFor="name"
                  className="whitespace-nowrap text-lg md:text-xl lg:text-2xl"
                >
                  Hi! I am
                </label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="enter you name"
                  className="w-full resize-none border-b border-b-neutral-300 text-lg text-p outline-none transition-colors focus:border-b-p md:text-xl lg:text-2xl"
                />
              </div>
              <div className="flex w-full items-center gap-2">
                <label
                  htmlFor="email"
                  className="whitespace-nowrap text-lg md:text-xl lg:text-2xl"
                >
                  Reach me at
                </label>
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    const next = e.target.value;
                    setEmail(next);
                    if (emailError) {
                      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.trim());
                      if (isValidEmail) setEmailError(undefined);
                    }
                  }}
                  onBlur={() => {
                    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
                    setEmailError(isValidEmail ? undefined : "Please enter a valid email address.");
                  }}
                  type="email"
                  inputMode="email"
                  placeholder="eg.info@geosoftech.com"
                  required
                  aria-invalid={emailError ? "true" : "false"}
                  className="w-full resize-none border-b border-b-neutral-300 text-lg text-p outline-none transition-colors focus:border-b-p md:text-xl lg:text-2xl"
                />
              </div>
              {emailError && (
                <p className="w-full -mt-3 text-sm text-red-600">{emailError}</p>
              )}
              <div className="flex w-full items-center gap-2">
                <label
                  htmlFor="phoneNumber"
                  className="whitespace-nowrap text-lg md:text-xl lg:text-2xl"
                >
                  Mobile No.
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => {
                    const next = e.target.value;
                    setPhoneNumber(next);
                    if (phoneError) {
                      const digits = next.replace(/\D/g, "");
                      const isValidPhone = digits.length >= 10 && digits.length <= 15;
                      if (isValidPhone) setPhoneError(undefined);
                    }
                  }}
                  onBlur={() => {
                    const digits = phoneNumber.replace(/\D/g, "");
                    const isValidPhone = digits.length >= 10 && digits.length <= 15;
                    setPhoneError(
                      isValidPhone ? undefined : "Please enter a valid mobile number (10-15 digits)."
                    );
                  }}
                  type="tel"
                  inputMode="numeric"
                  placeholder="eg.1010101010"
                  required
                  aria-invalid={phoneError ? "true" : "false"}
                  pattern="[0-9]{10,15}"
                  className="w-full resize-none border-b border-b-neutral-300 text-lg text-p outline-none transition-colors focus:border-b-p md:text-xl lg:text-2xl"
                />
              </div>
              {phoneError && (
                <p className="w-full -mt-3 text-sm text-red-600">{phoneError}</p>
              )}
            </div>
            <FlipButton
              variant="flip"
              default_text="Send"
              hover_text="Submit"
              type="secondary"
              rounded="rounded-full"
              className="w-max"
              icon={<FaArrowRightLong />}
              btnType="submit"
            >
              Send
            </FlipButton>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
