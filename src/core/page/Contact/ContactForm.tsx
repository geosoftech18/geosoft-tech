import React from 'react';
import ContactPageForm from '@/core/components/ContactPageForm';

type Props = {};

function ContactForm({}: Props) {
  return (
    <section className="h-full w-full">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:py-24">
        <ContactPageForm />
      </div>
    </section>
  );
}

export default ContactForm;
