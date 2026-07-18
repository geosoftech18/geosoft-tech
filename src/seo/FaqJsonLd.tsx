import { JsonLd } from './JsonLd';

export type FaqItem = {
  question: string;
  answer: string;
};

export function buildFaqPageSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question.trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/\s+/g, ' ').trim(),
      },
    })),
  };
}

/** FAQPage JSON-LD — only use when the same Q&A is visible on the page. */
export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs?.length) return null;
  return <JsonLd data={buildFaqPageSchema(faqs)} />;
}
