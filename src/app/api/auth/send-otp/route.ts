import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/database/connection';
import Auth from '@/lib/database/models/Auth';
// @ts-ignore
import mailjet from 'node-mailjet';

const mailjetUid = process.env.MAILJET_UID;
const mailjetPwd = process.env.MAILJET_PWD;

// @ts-ignore
const mailjetConn: any = mailjetUid && mailjetPwd ? mailjet.apiConnect(mailjetUid, mailjetPwd) : null;

// Authorized admin email
const AUTHORIZED_ADMIN_EMAIL = 'pranavkhandekar152@gmail.com';

// Generate 6-digit OTP
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email is required'
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email format'
        },
        { status: 400 }
      );
    }

    // Check if email is authorized
    if (email.toLowerCase() !== AUTHORIZED_ADMIN_EMAIL.toLowerCase()) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unauthorized email address. Access denied.'
        },
        { status: 403 }
      );
    }

    // Generate OTP
    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Delete any existing OTP for this email
    await Auth.deleteMany({ email });

    // Create new OTP record
    const authRecord = new Auth({
      email,
      otp,
      expiresAt,
      verified: false
    });

    await authRecord.save();

    // Send OTP via Mailjet
    let emailSent = false;
    if (mailjetConn) {
      try {
        const otpEmailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #011672 0%, #008BD0 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Admin Login OTP</h1>
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #011672; margin-bottom: 20px; font-size: 24px;">Hello Admin!</h2>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                You requested a login verification code for the Geo Softech Admin Panel.
              </p>

              <div style="background: #F7FCFF; padding: 30px; border-radius: 8px; border: 2px solid #008BD0; margin: 25px 0; text-align: center;">
                <p style="color: #011672; font-size: 14px; margin: 0 0 10px 0; font-weight: bold;">Your Verification Code:</p>
                <div style="background: white; padding: 20px; border-radius: 8px; display: inline-block; margin: 10px 0;">
                  <h1 style="color: #008BD0; margin: 0; font-size: 36px; font-weight: bold; letter-spacing: 8px; font-family: 'Courier New', monospace;">
                    ${otp}
                  </h1>
                </div>
                <p style="color: #6b7280; font-size: 12px; margin: 10px 0 0 0;">
                  This code will expire in 10 minutes
                </p>
              </div>

              <div style="background: #fff3cd; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107; margin: 25px 0;">
                <p style="color: #856404; margin: 0; font-size: 14px;">
                  <strong>⚠️ Security Notice:</strong> If you didn't request this code, please ignore this email. Never share this code with anyone.
                </p>
              </div>

              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Enter this code on the login page to complete your authentication.
              </p>
            </div>

            <!-- Footer -->
            <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Best regards,<br>
                <strong>Geo Softech Admin System</strong><br>
                <a href="https://geosoftech.com" style="color: #008BD0; text-decoration: none;">www.geosoftech.com</a>
              </p>
            </div>
          </div>
        `;

        const mailjetPost = mailjetConn.post('send', { version: 'v3.1' });
        await mailjetPost.request({
          Messages: [
            {
              From: {
                Email: 'info@geosoftech.com',
                Name: 'Geo Softech Admin',
              },
              To: [
                {
                  Email: email,
                  Name: 'Admin',
                },
              ],
              Subject: `Admin Login Verification Code - ${otp}`,
              HTMLPart: otpEmailHtml,
            },
          ],
        });
        emailSent = true;
        console.log(`✅ OTP email sent successfully to ${email}`);
      } catch (emailError: any) {
        console.error('❌ OTP email sending failed:', emailError);
        // Still log OTP to console as fallback
        console.log(`⚠️ OTP for ${email} (email failed, check console): ${otp}`);
      }
    } else {
      // Mailjet not configured, log to console
      console.log(`⚠️ Mailjet not configured. OTP for ${email}: ${otp}`);
      console.log('Please set MAILJET_UID and MAILJET_PWD in .env.local to enable email sending');
    }

    return NextResponse.json({
      success: true,
      message: emailSent 
        ? 'OTP sent to your email address' 
        : 'OTP generated. Please check console for OTP (email sending not configured)'
    });
  } catch (error: any) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to send OTP'
      },
      { status: 500 }
    );
  }
}

