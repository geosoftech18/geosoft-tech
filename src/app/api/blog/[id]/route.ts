import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/database/connection';
import Blog from '@/lib/database/models/Blog';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          error: 'Blog not found'
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: blog
    });
  } catch (error: any) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch blog'
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();

    const { title, content, excerpt, tags, featuredImage, status, metaTitle, metaDescription } = body;

    // If title is being updated, regenerate slug
    let updateData: any = {
      content,
      excerpt,
      tags: tags || [],
      featuredImage: featuredImage || null,
      status: status || 'draft'
    };

    if (metaTitle !== undefined) {
      updateData.metaTitle = String(metaTitle).trim();
    }
    if (metaDescription !== undefined) {
      updateData.metaDescription = String(metaDescription).trim();
    }

    if (title) {
      updateData.title = title;
      // Generate new slug if title changed
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      // Check if slug already exists (excluding current blog)
      const existingBlog = await Blog.findOne({ slug, _id: { $ne: id } });
      updateData.slug = existingBlog ? `${slug}-${Date.now()}` : slug;
    }

    const blog = await Blog.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          error: 'Blog not found'
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: blog
    });
  } catch (error: any) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to update blog'
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          error: 'Blog not found'
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error: any) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to delete blog'
      },
      { status: 500 }
    );
  }
}



