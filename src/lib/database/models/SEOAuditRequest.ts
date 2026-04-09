import mongoose, { Document, Schema } from 'mongoose';

export interface ISEOAuditRequest extends Document {
  fullName?: string;
  email: string;
  phone?: string;
  companyName?: string;
  website: string;
  industry?: string;
  monthlyTraffic?: string;
  currentRanking?: string;
  targetKeywords?: string;
  goals?: string[];
  budget?: string;
  timeline?: string;
  competitors?: string;
  additionalInfo?: string;
  source: string;
  status: 'pending' | 'reviewed' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

const SEOAuditRequestSchema = new Schema<ISEOAuditRequest>(
  {
    fullName: { type: String, trim: true },
    email: { type: String, required: [true, 'Email is required'], trim: true, lowercase: true },
    phone: { type: String, trim: true },
    companyName: { type: String, trim: true },
    website: { type: String, required: [true, 'Website is required'], trim: true },
    industry: { type: String, trim: true },
    monthlyTraffic: { type: String, trim: true },
    currentRanking: { type: String, trim: true },
    targetKeywords: { type: String, trim: true },
    goals: { type: [String], default: [] },
    budget: { type: String, trim: true },
    timeline: { type: String, trim: true },
    competitors: { type: String, trim: true },
    additionalInfo: { type: String, trim: true },
    source: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ['pending', 'reviewed', 'completed'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
    collection: 'seo_audit_requests',
  }
);

SEOAuditRequestSchema.index({ createdAt: -1 });
SEOAuditRequestSchema.index({ email: 1 });
SEOAuditRequestSchema.index({ source: 1 });

const SEOAuditRequest =
  mongoose.models.SEOAuditRequest ||
  mongoose.model<ISEOAuditRequest>('SEOAuditRequest', SEOAuditRequestSchema);

export default SEOAuditRequest;
