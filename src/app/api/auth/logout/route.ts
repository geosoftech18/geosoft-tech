import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('admin_session');

    return NextResponse.json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error: any) {
    console.error('Error logging out:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to logout'
      },
      { status: 500 }
    );
  }
}



