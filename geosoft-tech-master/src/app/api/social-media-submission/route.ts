import { NextRequest, NextResponse } from 'next/server';

// WhatsApp API configuration
const WHATSAPP_API_URL = 'https://graph.facebook.com/v18.0/1234567890/messages';
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

// Mailjet configuration
const MAILJET_API_KEY = process.env.MAILJET_API_KEY;
const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    console.log('Social Media Form Data:', formData);

    // Send WhatsApp message
    let whatsappSent = false;
    if (WHATSAPP_ACCESS_TOKEN) {
      try {
        const whatsappMessage = `🎯 *New Social Media Marketing ${formData.formType === 'consultation' ? 'Consultation' : 'Audit'} Request*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🌐 *Website:* ${formData.website}
🏢 *Industry:* ${formData.industry}
${formData.budget ? `💰 *Budget:* ${formData.budget}` : ''}

📋 *Form Type:* ${formData.formType === 'consultation' ? 'Social Media Marketing Consultation' : 'Social Media Audit Request'}

⏰ *Submitted:* ${new Date().toLocaleString()}

Please respond within 2 hours for best conversion rates! 🚀`;

        const whatsappResponse = await fetch(WHATSAPP_API_URL, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '919408928277',
            type: 'text',
            text: { body: whatsappMessage }
          })
        });

        if (whatsappResponse.ok) {
          whatsappSent = true;
          console.log('Social Media WhatsApp message sent successfully');
        } else {
          console.error('WhatsApp API error:', await whatsappResponse.text());
        }
      } catch (whatsappError) {
        console.error('WhatsApp sending failed:', whatsappError);
      }
    }

    // Send email if Mailjet is configured (DISABLED FOR TESTING)
    let emailSent = false;
    // Temporarily disabled team email for testing
    console.log('Team email disabled for testing - only sending customer welcome email');

    // Send welcome email to customer
    let customerEmailSent = false;
    if (MAILJET_API_KEY && MAILJET_SECRET_KEY) {
      try {
        const Mailjet = require('node-mailjet');
        const mailjetConn = Mailjet.apiConnect(MAILJET_API_KEY, MAILJET_SECRET_KEY);

        const customerEmailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
            <!-- Header with Logo -->
            <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 30px; text-align: center;">
              <img src="https://geosoftech.com/logo/logo2.webp" alt="Geosoft Tech" style="height: 60px; width: auto; margin-bottom: 20px;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Welcome to Geo Softech!</h1>
              <h3 style="color: white; margin: 0; font-size: 18px; font-weight: bold;">Thank you for your interest in Social Media Marketing!</h3>
            </div>
            
            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #1e40af; margin-bottom: 20px; font-size: 24px;">Hello ${formData.name}!</h2>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Thank you for reaching out to us regarding your <strong>${formData.industry}</strong> business. We're excited to help you grow your social media presence and achieve your marketing goals!
              </p>

              <div style="background: #f8fafc; padding: 25px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 25px 0;">
                <h3 style="color: #1e40af; margin-top: 0; font-size: 18px;">What happens next?</h3>
                <ul style="color: #374151; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">Our social media experts will analyze your requirements within 2 hours</li>
                  <li style="margin-bottom: 8px;">We'll contact you to schedule a free strategy consultation</li>
                  <li style="margin-bottom: 8px;">You'll receive a detailed social media marketing proposal with timeline and pricing</li>
                  <li style="margin-bottom: 0;">No commitment required - we're here to help you grow!</li>
                </ul>
              </div>

              <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; border: 1px solid #d1fae5; margin: 25px 0;">
                <h4 style="color: #065f46; margin-top: 0; font-size: 16px;">📞 Need immediate assistance?</h4>
                <p style="color: #374151; margin: 5px 0; font-size: 14px;">
                  Call us: <a href="tel:+919408928277" style="color: #2563eb; text-decoration: none;">+91 9408928277</a><br>
                  Email: <a href="mailto:info@geosoftech.com" style="color: #2563eb; text-decoration: none;">info@geosoftech.com</a>
                </p>
              </div>

              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                We're committed to delivering exceptional social media results and look forward to helping your business grow!
              </p>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://geosoftech.com" style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">Visit Our Website</a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Best regards,<br>
                <strong>The Geosoft Tech Social Media Team</strong><br>
                <a href="https://geosoftech.com" style="color: #2563eb; text-decoration: none;">www.geosoftech.com</a>
              </p>
            </div>
          </div>
        `;

        const customerEmailPost = mailjetConn.post('send', { version: 'v3.1' });
        await customerEmailPost.request({
          Messages: [
            {
              From: {
                Email: 'info@geosoftech.com',
                Name: 'Geosoft Tech Social Media Team',
              },
              To: [
                {
                  Email: formData.email,
                  Name: formData.name,
                },
              ],
              Subject: `Thank you for your interest in Social Media Marketing - Geosoft Tech`,
              HTMLPart: customerEmailHtml,
            },
          ],
        });
        customerEmailSent = true;
        console.log('Social Media customer welcome email sent successfully');
      } catch (customerEmailError) {
        console.error('Social Media customer email sending failed:', customerEmailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Social Media form submitted successfully',
      whatsappSent,
      emailSent,
      customerEmailSent
    });

  } catch (error) {
    console.error('Social Media form submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit social media form',
        details: (error as Error).message 
      },
      { status: 500 }
    );
  }
}

