import { NextResponse } from 'next/server';
// @ts-ignore
import type { Email } from 'node-mailjet';

import mailjet from 'node-mailjet';

const mailjetUid = process.env.MAILJET_UID;
const mailjetPwd = process.env.MAILJET_PWD;

// Check if environment variables are available
if (!mailjetUid || !mailjetPwd) {
  console.warn('⚠️ WARNING: Mailjet credentials not found. Email functionality will be disabled for Join Us form.');
  console.warn('Please set MAILJET_UID and MAILJET_PWD environment variables to enable email sending.');
} else {
  console.log('✅ Mailjet credentials found. Join Us form email functionality enabled.');
}

// @ts-ignore
const mailjetConn: Email.Client | null = mailjetUid && mailjetPwd ? mailjet.apiConnect(mailjetUid, mailjetPwd) : null;

type Data = {
  success: boolean;
};

type dataProps = {
  name: string;
  email: string;
  phone_number: string;
  requirement: string;
  work_preference: string;
  project_description: string;
  company_name: string;
};

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone_number,
      requirement,
      project_description,
      work_preference,
      company_name,
    }: dataProps = await req.json();

    // Check if mailjet is configured
    if (!mailjetConn) {
      console.error('❌ Mailjet not configured - Cannot send email for Join Us form');
      console.error('Please set MAILJET_UID and MAILJET_PWD environment variables.');
      return NextResponse.json({ 
        success: true, 
        message: 'Response received (email service not configured)' 
      });
    }

    console.log('📧 Sending Join Us form email to team...');
    console.log('Form data:', { name, email, phone_number, requirement, company_name });

    let emailSent = false;
    try {
      const mailjetPost: Email.PostResource = mailjetConn.post('send', {
        version: 'v3.1',
      });
      const mailjetResponse: Promise<Email.Response> = mailjetPost.request({
        Messages: [
          {
            From: {
              Email: 'info@geosoftech.com',
              Name: 'Info Geosoftech Website',
            },
            To: [
              {
                Email: 'amarkorde18@gmail.com',
                Name: 'Info Geosoftech',
              },
            ],
            Variables: {
              name: name,
              email: email,
              phone_number: phone_number,
              requirement: requirement || 'Not specified',
              project_description: project_description || 'Not provided',
              work_preference: work_preference || 'Not specified',
              company_name: company_name || 'Not provided',
            },
            TemplateLanguage: true,
            Subject: `Received Enquiry Lead : ${email} : ${company_name || 'No Company'}`,
            TemplateID: 5345788,
          },
        ],
      });
      
      const response = await mailjetResponse;
      
      // Check if email was sent successfully
      if (response.body && response.body.Messages && response.body.Messages[0]) {
        const messageStatus = response.body.Messages[0];
        if (messageStatus.Status === 'success' || messageStatus.MessageID) {
          emailSent = true;
          console.log('✅ Join Us form email sent successfully to amarkorde18@gmail.com');
          console.log('Mailjet response:', JSON.stringify(response.body, null, 2));
        } else {
          console.error('❌ Email sending failed - Status:', messageStatus.Status);
        }
      } else {
        console.error('❌ Unexpected Mailjet response format:', JSON.stringify(response.body, null, 2));
      }
      
      return NextResponse.json({ 
        success: true, 
        message: emailSent ? 'Response Saved and Email Sent' : 'Response Saved (Email may have failed)' 
      });
    } catch (emailError: any) {
      emailSent = false;
      console.error('❌ Join Us form email sending failed:', {
        message: emailError?.message || emailError?.toString() || 'Unknown error',
        statusCode: emailError?.statusCode,
        statusText: emailError?.statusText,
        response: emailError?.response?.body,
        fullError: emailError
      });
      
      // Still return success to user, but log the error
      return NextResponse.json({ 
        success: true, 
        message: 'Response received (email sending failed - check logs)' 
      });
    }
  } catch (err: any) {
    console.error('❌ Contact form error:', {
      message: err?.message || err?.toString() || 'Unknown error',
      stack: err?.stack,
      fullError: err
    });
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process request' 
    }, { status: 500 });
  }
}
