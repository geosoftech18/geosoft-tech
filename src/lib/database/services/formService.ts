import FormSubmission, { IFormSubmission } from '../models/FormSubmission';
import connectDB from '../connection';

export interface CreateFormSubmissionData {
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
}

export class FormService {
  /**
   * Create a new form submission
   */
  static async createSubmission(data: CreateFormSubmissionData): Promise<IFormSubmission> {
    try {
      await connectDB();
      
      const submission = new FormSubmission({
        ...data,
        status: 'pending'
      });
      
      const savedSubmission = await submission.save();
      console.log('✅ Form submission saved to database:', savedSubmission._id);
      
      return savedSubmission;
    } catch (error) {
      console.error('❌ Error saving form submission:', error);
      throw new Error('Failed to save form submission');
    }
  }

  /**
   * Get all form submissions with pagination
   */
  static async getSubmissions(
    page: number = 1, 
    limit: number = 10, 
    status?: string,
    formSource?: string
  ) {
    try {
      await connectDB();
      
      const query: any = {};
      if (status) query.status = status;
      if (formSource) query.formSource = formSource;
      
      const submissions = await FormSubmission
        .find(query)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();
      
      const total = await FormSubmission.countDocuments(query);
      
      return {
        submissions,
        total,
        page,
        totalPages: Math.ceil(total / limit)
      };
    } catch (error) {
      console.error('❌ Error fetching form submissions:', error);
      throw new Error('Failed to fetch form submissions');
    }
  }

  /**
   * Get a single form submission by ID
   */
  static async getSubmissionById(id: string): Promise<IFormSubmission | null> {
    try {
      await connectDB();
      
      const submission = await FormSubmission.findById(id);
      return submission;
    } catch (error) {
      console.error('❌ Error fetching form submission:', error);
      throw new Error('Failed to fetch form submission');
    }
  }

  /**
   * Update submission status
   */
  static async updateSubmissionStatus(
    id: string, 
    status: 'pending' | 'contacted' | 'converted' | 'lost'
  ): Promise<IFormSubmission | null> {
    try {
      await connectDB();
      
      const submission = await FormSubmission.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      
      return submission;
    } catch (error) {
      console.error('❌ Error updating submission status:', error);
      throw new Error('Failed to update submission status');
    }
  }

  /**
   * Get submission statistics
   */
  static async getSubmissionStats() {
    try {
      await connectDB();
      
      const stats = await FormSubmission.aggregate([
        {
          $group: {
            _id: null,
            total: { $sum: 1 },
            pending: {
              $sum: { $cond: [{ $eq: ['$status', 'pending'] }, 1, 0] }
            },
            contacted: {
              $sum: { $cond: [{ $eq: ['$status', 'contacted'] }, 1, 0] }
            },
            converted: {
              $sum: { $cond: [{ $eq: ['$status', 'converted'] }, 1, 0] }
            },
            lost: {
              $sum: { $cond: [{ $eq: ['$status', 'lost'] }, 1, 0] }
            }
          }
        }
      ]);
      
      const formSourceStats = await FormSubmission.aggregate([
        {
          $group: {
            _id: '$formSource',
            count: { $sum: 1 }
          }
        }
      ]);
      
      return {
        overall: stats[0] || { total: 0, pending: 0, contacted: 0, converted: 0, lost: 0 },
        byFormSource: formSourceStats
      };
    } catch (error) {
      console.error('❌ Error fetching submission stats:', error);
      throw new Error('Failed to fetch submission statistics');
    }
  }
}

