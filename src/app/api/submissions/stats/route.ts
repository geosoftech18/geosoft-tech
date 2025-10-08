import { NextResponse } from 'next/server';
import { FormService } from '@/lib/database/services/formService';

export async function GET() {
  try {
    const stats = await FormService.getSubmissionStats();
    
    return NextResponse.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Error fetching submission stats:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch submission statistics'
    }, { status: 500 });
  }
}

