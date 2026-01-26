import mongoose from 'mongoose';

/**
 * Placement model for storing student placement data
 * Per SRS §3.6: Placement Analytics Dashboard
 */
const placementSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        index: true
    },
    studentName: {
        type: String,
        trim: true
    },
    rollNo: {
        type: String,
        trim: true,
        index: true
    },
    branch: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    yearOfPassout: {
        type: Number,
        required: true,
        index: true
    },
    companyName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    jobTitle: {
        type: String,
        trim: true
    },
    packageAmount: {
        type: Number, // Annual package in LPA or currency
        required: true,
        index: true
    },
    packageCurrency: {
        type: String,
        default: 'INR',
        enum: ['INR', 'USD', 'EUR', 'GBP']
    },
    offerDate: {
        type: Date,
        default: Date.now
    },
    placementType: {
        type: String,
        enum: ['On-Campus', 'Off-Campus', 'Internship-Converted', 'PPO'],
        default: 'On-Campus'
    },
    location: {
        type: String,
        trim: true
    },
    isInternational: {
        type: Boolean,
        default: false
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // InstitutionAdmin who uploaded this data
    },
    importBatchId: {
        type: String, // Track CSV import batches
        index: true
    },
    notes: {
        type: String
    }
}, {
    timestamps: true
});

// Compound indexes for common queries
placementSchema.index({ yearOfPassout: 1, branch: 1 });
placementSchema.index({ companyName: 1, yearOfPassout: 1 });

// Static method for aggregation queries
placementSchema.statics.getStatsByYear = async function (year) {
    return this.aggregate([
        { $match: { yearOfPassout: year } },
        {
            $group: {
                _id: null,
                totalPlacements: { $sum: 1 },
                avgPackage: { $avg: '$packageAmount' },
                maxPackage: { $max: '$packageAmount' },
                minPackage: { $min: '$packageAmount' },
                uniqueCompanies: { $addToSet: '$companyName' }
            }
        },
        {
            $project: {
                _id: 0,
                totalPlacements: 1,
                avgPackage: { $round: ['$avgPackage', 2] },
                maxPackage: 1,
                minPackage: 1,
                totalCompanies: { $size: '$uniqueCompanies' }
            }
        }
    ]);
};

placementSchema.statics.getTopRecruiters = async function (year, limit = 10) {
    return this.aggregate([
        { $match: { yearOfPassout: year } },
        {
            $group: {
                _id: '$companyName',
                count: { $sum: 1 },
                avgPackage: { $avg: '$packageAmount' },
                maxPackage: { $max: '$packageAmount' }
            }
        },
        { $sort: { count: -1 } },
        { $limit: limit },
        {
            $project: {
                _id: 0,
                company: '$_id',
                hires: '$count',
                avgPackage: { $round: ['$avgPackage', 2] },
                maxPackage: 1
            }
        }
    ]);
};

placementSchema.statics.getStatsByBranch = async function (year) {
    return this.aggregate([
        { $match: { yearOfPassout: year } },
        {
            $group: {
                _id: '$branch',
                count: { $sum: 1 },
                avgPackage: { $avg: '$packageAmount' },
                maxPackage: { $max: '$packageAmount' }
            }
        },
        { $sort: { avgPackage: -1 } },
        {
            $project: {
                _id: 0,
                branch: '$_id',
                placements: '$count',
                avgPackage: { $round: ['$avgPackage', 2] },
                maxPackage: 1
            }
        }
    ]);
};

export const Placement = mongoose.model('Placement', placementSchema);
