import { NextResponse } from 'next/server';
// @ts-ignore
import type { Email } from 'node-mailjet';

import mailjet from 'node-mailjet';

const mailjetUid = process.env.MAILJET_UID;
const mailjetPwd = process.env.MAILJET_PWD;

// Check if environment variables are available
if (!mailjetUid || !mailjetPwd) {
  console.warn('Mailjet credentials not found. Email functionality will be disabled.');
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
      console.log('Mailjet not configured, returning success without sending email');
      return NextResponse.json({ 
        success: true, 
        message: 'Response received (email service not configured)' 
      });
    }

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
            requirement: requirement,
            project_description: project_description,
            work_preference: work_preference,
          },
          TemplateLanguage: true,
          Subject: `Received Enquiry Lead : ${email} : ${company_name}`,
          TemplateID: 5345788,
        },
      ],
    });
    
    const response = await mailjetResponse;
    return NextResponse.json({ success: true, message: 'Response Saved' });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process request' 
    });
  }
}
