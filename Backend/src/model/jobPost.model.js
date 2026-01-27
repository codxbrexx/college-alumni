import mongoose from "mongoose";

const jobPostSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    attachments: {
        type: String
    },
    stipend: {
        type: String,
        required: true
    },
    // Moderation fields (SRS §3.4.1)
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
        index: true
    },
    moderatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'  // Admin who moderated this job
    },
    moderationNotes: {
        type: String,
        trim: true
    },
    moderatedAt: {
        type: Date
    },
    rejectionReason: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

// Indexes for efficient moderation queries
jobPostSchema.index({ status: 1, createdAt: -1 });
jobPostSchema.index({ user: 1, status: 1 });

export const jobPost = mongoose.model('jobPost', jobPostSchema);