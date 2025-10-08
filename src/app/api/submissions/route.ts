import { NextResponse } from 'next/server';
import { FormService } from '@/lib/database/services/formService';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status') || undefined;
    const formSource = searchParams.get('formSource') || undefined;

    const result = await FormService.getSubmissions(page, limit, status, formSource);
    
    return NextResponse.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch submissions'
    }, { status: 500 });
  }
}

