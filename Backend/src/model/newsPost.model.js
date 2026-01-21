import mongoose from "mongoose";

const newsPostSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    attachments: {
        type: String
    }
}, {
    timestamps: true
})

export const newsPost = mongoose.model('newsPost', newsPostSchema)