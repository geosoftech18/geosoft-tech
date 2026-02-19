/**
 * Google Ads Conversion Tracking
 * Triggers conversion event when form is successfully submitted
 */
export const trackGoogleAdsConversion = () => {
  // Check if gtag is available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    try {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-710578432/V10TCJnwg8MBEICi6tIC'
      });
      console.log('✅ Google Ads conversion tracked');
    } catch (error) {
      console.error('❌ Error tracking Google Ads conversion:', error);
    }
  } else {
    console.warn('⚠️ gtag not available for conversion tracking');
  }
};

