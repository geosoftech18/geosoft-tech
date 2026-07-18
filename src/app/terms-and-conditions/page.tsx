import { Metadata } from 'next';
import { Breadcrumb } from '@/core/components/Breadcrumb';
import { canonicalAlternates } from '@/seo/site';

export const metadata: Metadata = {
  title: 'Terms and Conditions | GEO Softech',
  description:
    'Read the Terms and Conditions for using GEO Softech website and services.',
  ...canonicalAlternates('/terms-and-conditions'),
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-s-100 via-white to-s-100 py-28 md:py-32">
      <section className="mx-auto w-full max-w-4xl px-4">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Terms and Conditions', href: '/terms-and-conditions' },
          ]}
        />
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-10">
          <h1 className="mb-3 text-3xl font-bold text-t md:text-4xl">Terms and Conditions</h1>
          <p className="mb-8 text-sm text-slate-500">Last updated: April 2026</p>

          <div className="space-y-8 text-slate-700">
            <section className="space-y-3">
              <p>
                Welcome to <strong>GEO Softech</strong>. By accessing our website and using our
                services, you agree to comply with and be bound by the following Terms and
                Conditions. Please read them carefully.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By visiting this website or engaging our services (including web development,
                digital marketing, SEO, social media marketing, and related services), you accept
                these Terms and Conditions in full.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">2. Services</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>We provide customized digital services based on agreed project scope.</li>
                <li>
                  Project timelines, deliverables, and cost are finalized through proposal,
                  quotation, email, or written communication.
                </li>
                <li>
                  Any additional work outside scope may require revised timelines and additional
                  charges.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">3. Payments</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Payments must be made as per agreed milestones or invoice terms.</li>
                <li>
                  Delay in payment may result in project pause, delayed delivery, or service
                  suspension.
                </li>
                <li>
                  All fees paid are subject to our refund policy and are generally non-refundable
                  once work has started.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">4. Client Responsibilities</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  You agree to provide accurate information, content, approvals, and feedback on
                  time.
                </li>
                <li>Delays caused by pending client inputs may impact delivery timelines.</li>
                <li>
                  You are responsible for the legality and ownership of materials you provide.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">5. Revisions and Approvals</h2>
              <p>
                We provide revisions as defined in the agreed project scope. Once a deliverable is
                approved, later major changes may be treated as a new task and billed separately.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">6. Intellectual Property</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Final deliverables become client property after full and final payment unless
                  otherwise agreed.
                </li>
                <li>
                  We may use non-confidential project work in our portfolio/marketing unless
                  restricted by written agreement.
                </li>
                <li>
                  Third-party assets, plugins, themes, or licenses remain subject to their original
                  terms.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                7. Limitation of Liability
              </h2>
              <p>
                GEO Softech is not liable for any indirect, incidental, or consequential losses
                arising from use of services, third-party tools, hosting downtime, algorithm
                changes, or client-side actions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">8. Termination</h2>
              <p>
                Either party may terminate services with written notice. Client is liable for
                payment of work completed up to the termination date.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">9. Privacy</h2>
              <p>
                We handle information shared through forms and project discussions with reasonable
                confidentiality and security practices.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">10. Changes to Terms</h2>
              <p>
                We may update these Terms and Conditions from time to time. Updated terms become
                effective once published on this page.
              </p>
            </section>

            <section className="space-y-3 rounded-xl bg-slate-50 p-5">
              <h2 className="text-xl font-semibold text-slate-900">Contact Us</h2>
              <p>
                For any questions regarding these Terms and Conditions, please contact us:
              </p>
              <p>
                Email:{' '}
                <a className="font-medium text-blue hover:underline" href="mailto:info@geosoftech.com">
                  info@geosoftech.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a className="font-medium text-blue hover:underline" href="tel:+917776085112">
                  +91 7776085112
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
