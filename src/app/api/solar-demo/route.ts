import { NextResponse } from 'next/server';
import mailjet from 'node-mailjet';

const mailjetUid = process.env.MAILJET_UID;
const mailjetPwd = process.env.MAILJET_PWD;
const teamEmail = process.env.SOLAR_DEMO_RECIPIENT || 'amarkorde18@gmail.com';

const mailjetConn =
  mailjetUid && mailjetPwd ? mailjet.apiConnect(mailjetUid, mailjetPwd) : null;

type DemoRequest = {
  full_name?: string;
  email?: string;
  phone?: string;
  company_name?: string;
  company_type?: string;
  team_size?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as DemoRequest;
    const fullName = clean(body.full_name);
    const email = clean(body.email).toLowerCase();
    const phone = clean(body.phone);
    const companyName = clean(body.company_name);
    const companyType = clean(body.company_type);
    const teamSize = clean(body.team_size) || 'Not specified';
    const message = clean(body.message) || 'No message provided';

    if (!fullName || !email || !phone || !companyName || !companyType) {
      return NextResponse.json(
        { success: false, message: 'Please complete all required fields.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!mailjetConn) {
      console.error('Mailjet is not configured for Solar Demo submissions.');
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is temporarily unavailable. Please try again later.',
        },
        { status: 503 }
      );
    }

    const safe = {
      fullName: escapeHtml(fullName),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      companyName: escapeHtml(companyName),
      companyType: escapeHtml(companyType),
      teamSize: escapeHtml(teamSize),
      message: escapeHtml(message).replaceAll('\n', '<br>'),
    };

    const teamEmailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#172033">
        <div style="padding:28px;background:linear-gradient(135deg,#f97316,#f59e0b);color:#fff">
          <h1 style="margin:0;font-size:24px">New Solar Management Demo Request</h1>
        </div>
        <div style="padding:28px;background:#fff">
          <h2 style="margin-top:0;color:#c2410c">Contact details</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:bold">Name</td><td>${safe.fullName}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Email</td><td><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Phone</td><td>${safe.phone}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Company</td><td>${safe.companyName}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Company type</td><td>${safe.companyType}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold">Team size</td><td>${safe.teamSize}</td></tr>
          </table>
          <h3 style="margin:24px 0 8px;color:#c2410c">Message</h3>
          <div style="padding:16px;background:#fff7ed;border-left:4px solid #f97316;border-radius:6px">${safe.message}</div>
        </div>
      </div>
    `;

    const confirmationEmailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#172033">
        <div style="padding:30px;text-align:center;background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff">
          <h1 style="margin:0;font-size:26px">Your Solar Management Demo Request Is Confirmed</h1>
        </div>
        <div style="padding:30px;background:#fff">
          <h2 style="color:#c2410c">Hello ${safe.fullName},</h2>
          <p style="font-size:16px;line-height:1.7">
            Thank you for requesting a personalised Solar Management demo from GEO Softech.
            We have received your details and our team will contact you within 24 hours.
          </p>
          <div style="margin:24px 0;padding:18px;background:#fff7ed;border:1px solid #fed7aa;border-radius:8px">
            <strong>What to expect:</strong>
            <ul style="line-height:1.8;margin-bottom:0">
              <li>A personalised 45-minute platform walkthrough</li>
              <li>A review of your current solar operations workflow</li>
              <li>Modules relevant to your team and business</li>
            </ul>
          </div>
          <p style="font-size:15px;line-height:1.7">
            Need help sooner? Call
            <a href="tel:+917776085112" style="color:#ea580c">+91 77760 85112</a>
            or email
            <a href="mailto:info@geosoftech.com" style="color:#ea580c">info@geosoftech.com</a>.
          </p>
          <p style="margin-top:28px">Regards,<br><strong>GEO Softech Team</strong></p>
        </div>
      </div>
    `;

    const response = await mailjetConn
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'info@geosoftech.com',
              Name: 'GEO Softech Website',
            },
            To: [{ Email: teamEmail, Name: 'GEO Softech Team' }],
            ReplyTo: { Email: email, Name: fullName },
            Subject: `Solar Management demo request: ${fullName} — ${companyName}`,
            HTMLPart: teamEmailHtml,
          },
          {
            From: {
              Email: 'info@geosoftech.com',
              Name: 'GEO Softech Team',
            },
            To: [{ Email: email, Name: fullName }],
            Subject: 'Your Solar Management demo request is confirmed',
            HTMLPart: confirmationEmailHtml,
          },
        ],
      });

    const statuses = (response.body as { Messages?: Array<{ Status?: string }> })
      ?.Messages;
    const bothSent =
      statuses?.length === 2 &&
      statuses.every((result) => result.Status === 'success');

    if (!bothSent) {
      console.error('Solar demo email delivery failed:', response.body);
      return NextResponse.json(
        {
          success: false,
          message: 'We could not send the confirmation email. Please try again.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Demo request received and confirmation email sent.',
    });
  } catch (error) {
    console.error('Solar demo submission failed:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to submit your demo request. Please try again.',
      },
      { status: 500 }
    );
  }
}
