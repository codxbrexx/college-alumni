import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        trim: true
    },
    avatar: {
        type: String
    },
    rollNo: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    profession: {
        type: String,
        trim: true
    },
    yearOfPassout: {
        type: Number
    },
    linkedInProfileLink: {
        type: String,
        trim: true
    },
    companyDetails: {
        type: String,
        trim: true
    },
    companyExperience: {
        type: Number
    },
    gitHubProfileLink: {
        type: String,
        trim: true
    },
    aboutYou: {
        type: String,
        trim: true
    },
    branch: {
        type: String,
        trim: true
    },
    skills: {
        type: [String],
        default: []
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

userSchema.methods.isPasswordCorrect = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            sub: this._id,
            email: this.email,
            username: this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY || '1d'
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            sub: this._id
        },
        process.env.REFRESH_TOKEN_SECRET || 'refresh_secret',
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY || '10d'
        }
    )
}

userSchema.methods.toSafeObject = function () {
    const userObject = this.toObject({ getters: true, virtuals: false })
    delete userObject.password
    delete userObject.refreshToken
    delete userObject.resetPasswordToken
    delete userObject.resetPasswordExpires
    return userObject
}

userSchema.virtual('role').get(function () {
    const currentYear = new Date().getFullYear();
    if (!this.yearOfPassout) return 'Alumni'; // Default to Alumni if unknown
    return this.yearOfPassout > currentYear ? 'Student' : 'Alumni';
});

export const User = mongoose.model('User', userSchema)