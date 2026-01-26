import mongoose from 'mongoose';

/**
 * RefreshToken model for token rotation and revocation
 * Per SRS §3.1.2: Refresh tokens must be revocable
 */
const refreshTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    expiresAt: {
        type: Date,
        required: true,
        index: true
    },
    isRevoked: {
        type: Boolean,
        default: false
    },
    revokedAt: {
        type: Date
    },
    createdByIp: {
        type: String
    },
    replacedByToken: {
        type: String // Reference to new token when rotated
    }
}, {
    timestamps: true
});

// Auto-delete expired tokens (TTL index)
refreshTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Instance methods
refreshTokenSchema.methods.isExpired = function () {
    return Date.now() >= this.expiresAt;
};

refreshTokenSchema.methods.isActive = function () {
    return !this.isRevoked && !this.isExpired();
};

refreshTokenSchema.methods.revoke = async function (replacedByToken = null) {
    this.isRevoked = true;
    this.revokedAt = new Date();
    if (replacedByToken) {
        this.replacedByToken = replacedByToken;
    }
    await this.save();
};

export const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema);
