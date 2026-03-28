import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/database/connection';
import Blog from '@/lib/database/models/Blog';

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const searchParams = req.nextUrl.searchParams;
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    let query: any = {};

    // Filter by status
    if (status && status !== 'all') {
      query.status = status;
    }

    // Search in title, content, excerpt, or tags
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const blogs = await Blog.find(query).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: blogs
    });
  } catch (error: any) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch blogs'
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { title, content, excerpt, tags, featuredImage, status, metaTitle, metaDescription } = body;

    // Validate required fields
    if (!title || !content || !excerpt) {
      return NextResponse.json(
        {
          success: false,
          error: 'Title, content, and excerpt are required'
        },
        { status: 400 }
      );
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    // Check if slug already exists
    const existingBlog = await Blog.findOne({ slug });
    let finalSlug = slug;
    if (existingBlog) {
      finalSlug = `${slug}-${Date.now()}`;
    }

    const blog = new Blog({
      title,
      content,
      excerpt,
      tags: tags || [],
      featuredImage: featuredImage || null,
      status: status || 'draft',
      slug: finalSlug,
      ...(metaTitle !== undefined && { metaTitle: String(metaTitle).trim() }),
      ...(metaDescription !== undefined && { metaDescription: String(metaDescription).trim() })
    });

    await blog.save();

    return NextResponse.json({
      success: true,
      data: blog
    });
  } catch (error: any) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to create blog'
      },
      { status: 500 }
    );
  }
}



