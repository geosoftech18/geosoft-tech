import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Authorized admin email
const AUTHORIZED_ADMIN_EMAIL = 'pranavkhandekar152@gmail.com';

export async function GET(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');

    if (!session || !session.value) {
      return NextResponse.json({
        success: true,
        authenticated: false
      });
    }

    // Verify that the session email is authorized
    if (session.value.toLowerCase() !== AUTHORIZED_ADMIN_EMAIL.toLowerCase()) {
      return NextResponse.json({
        success: true,
        authenticated: false,
        error: 'Unauthorized email address'
      });
    }

    return NextResponse.json({
      success: true,
      authenticated: true,
      email: session.value
    });
  } catch (error: any) {
    console.error('Error checking session:', error);
    return NextResponse.json(
      {
        success: false,
        authenticated: false,
        error: error.message || 'Failed to check session'
      },
      { status: 500 }
    );
  }
}

