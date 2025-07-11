import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    rollNo: {
        type: String,
        unique: true,
        required: true
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    profession: {
        type: String
    },
    yearOfPassout: {
        type: Number
    },
    linkedInProfileLink: {
        type: String
    },
    companyDetails: {
        type: String
    },
    companyExperience: {
        type: Number
    },
    gitHubProfileLink: {
        type: String
    },
    aboutYou: {
        type: String
    },
    branch: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    branch: {
        type: String
    },
    skills: {
        type: String
    },
    refreshToken: {
        type: String
    },
    accessToken: {
        type: String
    } 
}, {
    timestamps: true
})

export const User = mongoose.model('User', userSchema)