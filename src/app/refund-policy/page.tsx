import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | GEO Softech',
  description:
    'Read the GEO Softech refund policy for web development and digital services.',
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-s-100 via-white to-s-100 py-28 md:py-32">
      <section className="mx-auto w-full max-w-4xl px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-10">
          <h1 className="mb-3 text-3xl font-bold text-t md:text-4xl">Refund Policy</h1>
          <p className="mb-8 text-sm text-slate-500">Last updated: April 2026</p>

          <div className="space-y-8 text-slate-700">
            <section className="space-y-3">
              <p>
                At <strong>GEO Softech</strong>, we strive to deliver high-quality web development
                services tailored to your requirements. Please read our refund policy carefully
                before making any purchase.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">No Refund Policy</h2>
              <p>
                Due to the nature of our services and the significant amount of manual effort,
                time, and resources involved in each project, we do not offer refunds under any
                circumstances once a project has been initiated or payment has been made.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Reasons for No Refund</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  All our services involve custom development and manual work, which cannot be
                  reversed once started.
                </li>
                <li>Time, effort, and expertise are allocated specifically to your project.</li>
                <li>
                  Digital services and deliverables cannot be &quot;returned&quot; like physical products.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Project Commitment</h2>
              <p>We are committed to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Understanding your requirements clearly before starting the project.</li>
                <li>Delivering work as per agreed specifications.</li>
                <li>Providing reasonable revisions as discussed in the project scope.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Cancellation Policy</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>You may cancel a project before work has started.</li>
                <li>
                  Once the project is underway, cancellation will not be eligible for any refund.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Client Responsibility</h2>
              <p>Clients are encouraged to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Review project details thoroughly before making payment.</li>
                <li>Communicate requirements clearly.</li>
                <li>Ask any questions before confirming the order.</li>
              </ul>
            </section>

            <section className="space-y-3 rounded-xl bg-slate-50 p-5">
              <h2 className="text-xl font-semibold text-slate-900">Contact Us</h2>
              <p>If you have any questions regarding this policy, feel free to contact us:</p>
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
