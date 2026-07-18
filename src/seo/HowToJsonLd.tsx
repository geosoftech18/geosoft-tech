import { JsonLd } from './JsonLd';
import { ORGANIZATION } from './review-data';
import { SITE_URL } from './site';

export type HowToStep = {
  name: string;
  text: string;
};

export function buildHowToSchema(options: {
  name: string;
  description: string;
  steps: HowToStep[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: options.name,
    description: options.description,
    totalTime: 'P4W',
    supply: [],
    tool: [],
    step: options.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${SITE_URL}/services/webdevelopment/development-in-nagpur#process`,
    })),
    provider: {
      '@type': 'Organization',
      name: ORGANIZATION.name,
      url: ORGANIZATION.url,
    },
  };
}

export function HowToJsonLd({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: HowToStep[];
}) {
  if (!steps?.length) return null;
  return <JsonLd data={buildHowToSchema({ name, description, steps })} />;
}
