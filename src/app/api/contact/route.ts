import { NextResponse } from 'next/server';
// @ts-ignore
import type { Email } from 'node-mailjet';

import mailjet from 'node-mailjet';

const mailjetUid = process.env.MAILJET_UID;
const mailjetPwd = process.env.MAILJET_PWD;

// @ts-ignore
const mailjetConn: Email.Client = mailjet.apiConnect(mailjetUid, mailjetPwd);

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
  const {
    name,
    email,
    phone_number,
    requirement,
    project_description,
    work_preference,
    company_name,
  }: dataProps = await req.json();

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
  try {
    const response = await mailjetResponse;
    return NextResponse.json({ success: true, message: 'Response Saved' });
  } catch (err) {
    return NextResponse.json({ success: false, message: err });
  }
}
