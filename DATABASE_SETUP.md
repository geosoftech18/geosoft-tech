# Database Setup Guide

## MongoDB Integration for Form Submissions

This project now includes MongoDB integration to store form submissions with proper data persistence and analytics.

## 📁 Folder Structure

```
src/
├── lib/
│   └── database/
│       ├── connection.ts          # MongoDB connection utility
│       ├── models/
│       │   └── FormSubmission.ts  # Mongoose schema/model
│       └── services/
│           └── formService.ts     # Database service layer
└── app/
    └── api/
        ├── form-submission/       # Form submission endpoint
        └── submissions/           # Data retrieval endpoints
            ├── route.ts           # Get submissions
            └── stats/route.ts     # Get statistics
```

## 🗄️ Database Schema

### FormSubmission Collection

```typescript
{
  _id: ObjectId,
  name: string (required),
  email: string (required, validated),
  phone: string (required),
  company: string (optional),
  projectType: string (required),
  budget: string (required),
  timeline: string (required),
  message: string (optional),
  selectedService: string (required),
  formSource: 'hero-section' | 'services-section',
  status: 'pending' | 'contacted' | 'converted' | 'lost',
  createdAt: Date,
  updatedAt: Date
}
```

## 🔧 Setup Instructions

### 1. Environment Variables

Create `.env.local` file:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/geosoft-tech

# For MongoDB Atlas (cloud)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/geosoft-tech

# Mailjet Configuration
MAILJET_UID=your_mailjet_api_key_here
MAILJET_PWD=your_mailjet_secret_key_here
```

### 2. MongoDB Setup Options

#### Option A: Local MongoDB
```bash
# Install MongoDB locally
# Windows: Download from https://www.mongodb.com/try/download/community
# macOS: brew install mongodb-community
# Linux: sudo apt-get install mongodb

# Start MongoDB service
mongod
```

#### Option B: MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Get connection string
5. Update `MONGODB_URI` in `.env.local`

### 3. Test Database Connection

```bash
# Run the test script
node test-db-integration.js
```

## 📊 API Endpoints

### Form Submission
- **POST** `/api/form-submission`
- Saves form data to database
- Sends email via Mailjet
- Returns WhatsApp URL

### Get Submissions
- **GET** `/api/submissions?page=1&limit=10&status=pending&formSource=hero-section`
- Returns paginated form submissions

### Get Statistics
- **GET** `/api/submissions/stats`
- Returns submission statistics and analytics

## 🔍 Data Features

### Automatic Features
- ✅ **Data Validation**: Email format, required fields
- ✅ **Timestamps**: Automatic createdAt/updatedAt
- ✅ **Indexing**: Optimized queries on email, date, status
- ✅ **Form Source Tracking**: Distinguish between hero-section and services-section
- ✅ **Status Management**: Track lead progression

### Analytics Available
- Total submissions count
- Status breakdown (pending, contacted, converted, lost)
- Form source statistics
- Date-based analytics
- Lead conversion tracking

## 🚀 Usage Examples

### Save Form Submission
```typescript
const submission = await FormService.createSubmission({
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  projectType: "New Website",
  budget: "$1,000 - $5,000",
  timeline: "1 month",
  selectedService: "Website Design",
  formSource: "hero-section"
});
```

### Get Submissions
```typescript
const result = await FormService.getSubmissions(1, 10, 'pending', 'hero-section');
```

### Update Status
```typescript
await FormService.updateSubmissionStatus(submissionId, 'contacted');
```

## 🛠️ Development

### Database Service Methods
- `createSubmission()` - Save new form submission
- `getSubmissions()` - Get paginated submissions
- `getSubmissionById()` - Get single submission
- `updateSubmissionStatus()` - Update lead status
- `getSubmissionStats()` - Get analytics

### Error Handling
- Database connection failures are logged
- Form submission continues even if DB fails
- Email sending is independent of database
- Graceful degradation for missing MongoDB

## 📈 Benefits

1. **Data Persistence**: Never lose form submissions
2. **Lead Management**: Track lead status and progression
3. **Analytics**: Understand form performance
4. **Scalability**: Handle high volume submissions
5. **Backup**: Data is safely stored in database
6. **Reporting**: Generate insights from submission data

## 🔒 Security

- Input validation on all fields
- Email format validation
- SQL injection protection via Mongoose
- Environment variable protection
- Connection pooling for performance

