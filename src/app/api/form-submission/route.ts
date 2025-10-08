import { NextResponse } from 'next/server';
import mailjet from 'node-mailjet';
import { FormService } from '@/lib/database/services/formService';

const mailjetUid = process.env.MAILJET_UID;
const mailjetPwd = process.env.MAILJET_PWD;

// Check if environment variables are available
if (!mailjetUid || !mailjetPwd) {
  console.warn('Mailjet credentials not found. Email functionality will be disabled.');
}

// @ts-ignore
const mailjetConn: any = mailjetUid && mailjetPwd ? mailjet.apiConnect(mailjetUid, mailjetPwd) : null;

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  selectedService: string;
  formSource?: 'hero-section' | 'services-section';
};

export async function POST(req: Request) {
  try {
    const formData: FormData = await req.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      return NextResponse.json({ 
        success: false, 
        message: 'Missing required fields' 
      }, { status: 400 });
    }

    // Save to database first
    let submissionId = null;
    try {
      const submission = await FormService.createSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || '',
        projectType: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        selectedService: formData.selectedService,
        formSource: formData.formSource || 'hero-section'
      });
      submissionId = submission._id;
      console.log('✅ Form submission saved to database with ID:', submissionId);
    } catch (dbError) {
      console.error('❌ Database save failed:', dbError);
      // Continue with email sending even if DB save fails
    }

    // Prepare WhatsApp message
    const whatsappMessage = `🎯 *New Project Inquiry - ${formData.selectedService}*

👤 *Contact Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Company: ${formData.company || 'Not provided'}

📋 *Project Details:*
• Project Type: ${formData.projectType}
• Budget Range: ${formData.budget}
• Timeline: ${formData.timeline}

💬 *Message:*
${formData.message}

---
*This inquiry was submitted via your website contact form.*`;

    // Prepare email content
    const emailSubject = `New Project Inquiry: ${formData.selectedService} - ${formData.name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          🎯 New Project Inquiry
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
        </div>

        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Project Details</h3>
          <p><strong>Service:</strong> ${formData.selectedService}</p>
          <p><strong>Project Type:</strong> ${formData.projectType}</p>
          <p><strong>Budget Range:</strong> ${formData.budget}</p>
          <p><strong>Timeline:</strong> ${formData.timeline}</p>
        </div>

        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #92400e; margin-top: 0;">Project Description</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>

        <div style="margin-top: 30px; padding: 15px; background: #e0f2fe; border-radius: 8px; border-left: 4px solid #0284c7;">
          <p style="margin: 0; color: #0c4a6e;">
            <strong>📱 WhatsApp Message:</strong> This inquiry has also been formatted for WhatsApp delivery.
          </p>
        </div>

        <div style="margin-top: 20px; padding: 10px; background: #f3f4f6; border-radius: 4px; font-size: 12px; color: #6b7280;">
          <p style="margin: 0;">This inquiry was submitted via your website contact form at ${new Date().toLocaleString()}.</p>
        </div>
      </div>
    `;

    // Send email if Mailjet is configured
    let emailSent = false;
    if (mailjetConn) {
      try {
        const mailjetPost = mailjetConn.post('send', { version: 'v3.1' });
        await mailjetPost.request({
          Messages: [
            {
              From: {
                Email: 'info@geosoftech.com',
                Name: 'Geo Softech Website',
              },
              To: [
                {
                  Email: 'amarkorde18@gmail.com',
                  Name: 'Geo Softech Team',
                },
              ],
              Subject: emailSubject,
              HTMLPart: emailHtml,
            },
          ],
        });
        emailSent = true;
        console.log('Team email sent successfully');
      } catch (emailError) {
        console.error('Team email sending failed:', emailError);
      }
    }

    // Send welcome email to customer
    let customerEmailSent = false;
    if (mailjetConn) {
      try {
        const customerEmailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
            <!-- Header with Logo -->
            <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 30px; text-align: center;">
              <img src="https://geosoftech.com/logo/logo.webp" alt="Geosoft Tech" style="height: 60px; width: auto; margin-bottom: 20px;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Welcome to Geo Softech!</h1>
              <br />
              <h3 style="color: white; margin: 0; font-size: 18px; font-weight: bold;">Thank you for your interest!</h3>

            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #1e40af; margin-bottom: 20px; font-size: 24px;">Hello ${formData.name}!</h2>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Thank you for reaching out to us regarding <strong>${formData.selectedService}</strong>. We're excited to learn more about your requirement and how we can help bring your vision to life.
              </p>

              <div style="background: #f8fafc; padding: 25px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 25px 0;">
                <h3 style="color: #1e40af; margin-top: 0; font-size: 18px;">What happens next?</h3>
                <ul style="color: #374151; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">Our team will review your requirements within 2 hours</li>
                  <li style="margin-bottom: 8px;">We'll contact you to schedule a free consultation</li>
                  <li style="margin-bottom: 8px;">You'll receive a detailed proposal with timeline and pricing</li>
                  <li style="margin-bottom: 0;">No commitment required - we're here to help!</li>
                </ul>
              </div>

              <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; border: 1px solid #d1fae5; margin: 25px 0;">
                <h4 style="color: #065f46; margin-top: 0; font-size: 16px;">📞 Need immediate assistance?</h4>
                <p style="color: #374151; margin: 5px 0; font-size: 14px;">
                  Call us: <a href="tel:+917776085112" style="color: #2563eb; text-decoration: none;">+91 7776085112</a><br>
                  Email: <a href="mailto:info@geosoftech.com" style="color: #2563eb; text-decoration: none;">info@geosoftech.com</a>
                </p>
              </div>

              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                We're committed to delivering exceptional results and look forward to working with you!
              </p>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://geosoftech.com" style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">Visit Our Website</a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Best regards,<br>
                <strong>The Geosoft Tech Team</strong><br>
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
                Name: 'Geosoft Tech Team',
              },
              To: [
                {
                  Email: formData.email,
                  Name: formData.name,
                },
              ],
              Subject: `Thank you for your interest in ${formData.selectedService} - Geosoft Tech`,
              HTMLPart: customerEmailHtml,
            },
          ],
        });
        customerEmailSent = true;
        console.log('Customer welcome email sent successfully');
      } catch (customerEmailError) {
        console.error('Customer email sending failed:', customerEmailError);
      }
    }

    // Return WhatsApp URL and email status
    const whatsappUrl = `https://wa.me/7776085112?text=${encodeURIComponent(whatsappMessage)}`;
    
    return NextResponse.json({ 
      success: true, 
      whatsappUrl,
      emailSent,
      customerEmailSent,
      submissionId,
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process form submission' 
    }, { status: 500 });
  }
}
