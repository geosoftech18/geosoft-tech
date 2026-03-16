import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  status: 'published' | 'draft';
  featuredImage: string | null;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [255, 'Title cannot exceed 255 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  excerpt: {
    type: String,
    required: [true, 'Excerpt is required'],
    trim: true,
    maxlength: [500, 'Excerpt cannot exceed 500 characters']
  },
  tags: {
    type: [String],
    default: []
  },
  status: {
    type: String,
    enum: ['published', 'draft'],
    default: 'draft'
  },
  featuredImage: {
    type: String,
    default: null
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  }
}, {
  timestamps: true,
  collection: 'blogs'
});

// Index for better query performance
// Note: slug index is automatically created by unique: true
BlogSchema.index({ status: 1 });
BlogSchema.index({ createdAt: -1 });

// Generate slug from title before saving
BlogSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
  next();
});

const Blog = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;

