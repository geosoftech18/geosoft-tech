import mongoose, { Document, Schema } from 'mongoose';

export interface IAuth extends Document {
  email: string;
  otp: string;
  expiresAt: Date;
  verified: boolean;
  createdAt: Date;
}

const AuthSchema = new Schema<IAuth>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  otp: {
    type: String,
    required: [true, 'OTP is required'],
    length: 6
  },
  expiresAt: {
    type: Date,
    required: true,
    default: () => new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
  },
  verified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  collection: 'auth_sessions'
});

// Index for better query performance
AuthSchema.index({ email: 1 });
AuthSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 }); // Auto-delete expired documents

const Auth = mongoose.models.Auth || mongoose.model<IAuth>('Auth', AuthSchema);

export default Auth;



