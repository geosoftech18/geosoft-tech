import Markdown from '@/core/components/Markdown';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  alternates: {
    canonical: `https://www.geosoftech.com/privacy-policy`,
  },
};

const StaticPage: React.FC = ({}) => {
  const test = `
# GEO Softech Privacy Policy

**Effective Date:** January 5, 2024\n\nAt GEO Softech, we understand the importance of protecting your privacy. This Privacy Policy explains what information we collect about you, how we use it, and your choices regarding your personal data.

## 1. Information We Collect

We collect information from you in various ways through our website and services:\n\n- **Personal Information:** This includes information that can identify you directly, such as your name, email address, phone number, address, and IP address. We may collect this information when you contact us, subscribe to our newsletter, fill out a form, or purchase a service.\n  
- **Website Usage Data:** We automatically collect information about your use of our website, such as the pages you visit, the links you click, and the amount of time you spend on our site. This information is collected through cookies and similar technologies.\n
- **Third-Party Data:** We may also receive information about you from third-party sources, such as social media platforms or marketing partners. This information may include your demographics, interests, and online activity.

## 2. How We Use Your Information

We use your information for the following purposes:\n\n- To provide and improve our website and services.\n- To communicate with you about our services, such as responding to your inquiries or sending you newsletters.\n- To personalize your experience on our website.\n- To analyze website usage and improve our marketing efforts.\n- To comply with legal requirements.

## 3. Cookies and Similar Technologies

We use cookies and similar technologies to track user activity on our website and hold certain information. Cookies are small files that a website places on your computer or mobile device. They help us remember your preferences and settings, improve the performance of our website, and understand how you use it.\n\nYou can manage your cookie preferences through your web browser settings. Please be aware that disabling cookies may affect your experience on our website.

## 4. Sharing Your Information

We will not share your personal information with third parties without your consent, except in the following circumstances:\n\n- To service providers we have engaged to work on our behalf, such as web hosting providers and email service providers.\n- To comply with legal requirements, such as a court order or subpoena.\n- To protect the rights or safety of ourselves or others.\n- To prevent fraud or abuse.\n\nWe will require any third-party service providers to protect your personal information in accordance with this Privacy Policy.

## 5. Data Security

We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no website or electronic transmission is completely secure, and we cannot guarantee the security of your information.

## 6. Your Choices

You have the following choices regarding your personal information:\n\n- You can access and update your personal information by contacting us.\n- You can unsubscribe from our marketing emails at any time by clicking the "unsubscribe" link in the email.\n- You can request that we delete your personal information.\n\nPlease note that if you exercise any of these choices, it may affect your ability to use our website and services.

## 7. Children's Privacy

Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.

## 8. Changes to this Privacy Policy

We may update this Privacy Policy from time to time. We will post any changes on our website, so please review this Privacy Policy periodically for updates.

## 9. Contact Us

If you have any questions about this Privacy Policy, please contact us at:\n\n[info@geosoftech.com](mailto:info@geosoftech.com)

    `;
  return (
    <>
      <section className={`w-full`}>
        <div
          className={`m-auto w-full max-w-[1400px] px-5 py-6 md:px-10 md:py-16 md:!pt-20`}
        >
          <Markdown>{test}</Markdown>
        </div>
      </section>
    </>
  );
};

export default StaticPage;
