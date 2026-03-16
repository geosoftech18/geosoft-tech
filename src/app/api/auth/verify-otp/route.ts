import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/database/connection';
import Auth from '@/lib/database/models/Auth';
import { cookies } from 'next/headers';

// Authorized admin email
const AUTHORIZED_ADMIN_EMAIL = 'pranavkhandekar152@gmail.com';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email and OTP are required'
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

    // Find the OTP record
    const authRecord = await Auth.findOne({
      email,
      otp,
      expiresAt: { $gt: new Date() },
      verified: false
    });

    if (!authRecord) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid or expired OTP'
        },
        { status: 401 }
      );
    }

    // Mark as verified
    authRecord.verified = true;
    await authRecord.save();

    // Set session cookie (in production, use secure, httpOnly cookies)
    const cookieStore = await cookies();
    cookieStore.set('admin_session', email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return NextResponse.json({
      success: true,
      message: 'Login successful'
    });
  } catch (error: any) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to verify OTP'
      },
      { status: 500 }
    );
  }
}

