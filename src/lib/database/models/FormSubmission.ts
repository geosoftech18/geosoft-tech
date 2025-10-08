import mongoose, { Document, Schema } from 'mongoose';

export interface IFormSubmission extends Document {
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  selectedService: string;
  formSource: 'hero-section' | 'services-section';
  status: 'pending' | 'contacted' | 'converted' | 'lost';
  createdAt: Date;
  updatedAt: Date;
}

const FormSubmissionSchema = new Schema<IFormSubmission>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [255, 'Name cannot exceed 255 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  company: {
    type: String,
    trim: true,
    maxlength: [255, 'Company name cannot exceed 255 characters']
  },
  projectType: {
    type: String,
    required: [true, 'Project type is required'],
    trim: true
  },
  budget: {
    type: String,
    required: [true, 'Budget range is required'],
    trim: true
  },
  timeline: {
    type: String,
    required: [true, 'Timeline is required'],
    trim: true
  },
  message: {
    type: String,
    trim: true,
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  selectedService: {
    type: String,
    required: [true, 'Selected service is required'],
    trim: true
  },
  formSource: {
    type: String,
    required: [true, 'Form source is required'],
    enum: ['hero-section', 'services-section'],
    default: 'hero-section'
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'converted', 'lost'],
    default: 'pending'
  }
}, {
  timestamps: true, // This adds createdAt and updatedAt automatically
  collection: 'form_submissions'
});

// Index for better query performance
FormSubmissionSchema.index({ email: 1 });
FormSubmissionSchema.index({ createdAt: -1 });
FormSubmissionSchema.index({ status: 1 });
FormSubmissionSchema.index({ formSource: 1 });

// Ensure the model is not already compiled
const FormSubmission = mongoose.models.FormSubmission || mongoose.model<IFormSubmission>('FormSubmission', FormSubmissionSchema);

export default FormSubmission;

