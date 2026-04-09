import { NextResponse } from 'next/server';
import connectDB from '@/lib/database/connection';
import SEOAuditRequest from '@/lib/database/models/SEOAuditRequest';

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    if (!body?.email || !body?.website || !body?.source) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields: email, website, source',
        },
        { status: 400 }
      );
    }

    const submission = await SEOAuditRequest.create({
      fullName: body.fullName || '',
      email: String(body.email).trim(),
      phone: body.phone || '',
      companyName: body.companyName || '',
      website: String(body.website).trim(),
      industry: body.industry || '',
      monthlyTraffic: body.monthlyTraffic || '',
      currentRanking: body.currentRanking || '',
      targetKeywords: body.targetKeywords || '',
      goals: Array.isArray(body.goals) ? body.goals : [],
      budget: body.budget || '',
      timeline: body.timeline || '',
      competitors: body.competitors || '',
      additionalInfo: body.additionalInfo || '',
      source: String(body.source).trim(),
      status: 'pending',
    });

    return NextResponse.json({
      success: true,
      data: submission,
      message: 'SEO audit request submitted successfully',
    });
  } catch (error: any) {
    console.error('SEO audit submission failed:', error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || 'Failed to submit SEO audit request',
      },
      { status: 500 }
    );
  }
}
