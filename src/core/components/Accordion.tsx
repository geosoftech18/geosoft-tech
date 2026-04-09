'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { AiOutlinePlus } from 'react-icons/ai';

import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

interface LegacyAccordionProps {
  question: string;
  answer: string;
}

const LegacyAccordion: React.FC<LegacyAccordionProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div
      className="relative mt-5 cursor-pointer border-0 border-b border-solid border-neutral-300 bg-white p-2 transition-all"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div
        className="flex items-center justify-between [&>h2]:aria-expanded:text-blue"
        aria-expanded={isExpanded}
      >
        <h2 className="text-lg font-semibold">{question}</h2>
        <button
          className="rounded-full transition-all aria-expanded:rotate-45"
          aria-expanded={isExpanded}
        >
          <AiOutlinePlus size={24} />
        </button>
      </div>
      <div
        className="h-0 overflow-hidden opacity-0 transition-all aria-expanded:mt-4 aria-expanded:block aria-expanded:h-auto aria-expanded:animate-fade aria-expanded:p-2 aria-expanded:opacity-100"
        aria-expanded={isExpanded}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

export default LegacyAccordion;
