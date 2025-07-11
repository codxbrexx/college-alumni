import mongoose from "mongoose";

const jobPostSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
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
}, {
    timestamps: true
})

export const jobPost = mongoose.model('jobPost', jobPostSchema)