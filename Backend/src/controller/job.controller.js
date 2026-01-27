import { jobPost } from "../model/jobPost.model.js"
import { SavedJob } from "../model/savedJob.model.js"
import { ApiError } from "../utils/ApiError.utils.js"
import { ApiResponse } from "../utils/ApiResponse.utils.js"

const createJob = async (req, res, next) => {
    try {
        const {
            title,
            company,
            location,
            description,
            duration,
            stipend,
            attachments
        } = req.body

        if ([title, company, location, description, stipend].some((f) => !f || `${f}`.trim() === "")) {
            throw new ApiError(400, "Title, company, location, description, and stipend are required")
        }

        const job = await jobPost.create({
            user: req.user._id,
            title,
            company,
            location,
            description,
            duration,
            stipend,
            attachments
        })

        return res.status(201).json(new ApiResponse(201, job, "Job posted successfully"))
    } catch (error) {
        return next(error)
    }
}

const getAllJobs = async (req, res, next) => {
    try {
        const { search, location, company, status, page = 1, limit = 10 } = req.query

        const query = {}

        // SRS §3.4.1: Only show approved jobs to public, admins see all
        if (status) {
            query.status = status
        } else if (!req.user || req.user.role !== 'InstitutionAdmin') {
            query.status = 'approved'
        }

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
                { company: { $regex: search, $options: "i" } }
            ]
        }

        if (location) {
            query.location = { $regex: location, $options: "i" }
        }

        if (company) {
            query.company = { $regex: company, $options: "i" }
        }

        const skip = (parseInt(page) - 1) * parseInt(limit)

        const [jobs, total] = await Promise.all([
            jobPost
                .find(query)
                .populate("user", "username fullName avatar")
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(parseInt(limit)),
            jobPost.countDocuments(query)
        ])

        return res.status(200).json(
            new ApiResponse(200, {
                jobs,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / parseInt(limit))
                }
            }, "Jobs fetched successfully")
        )
    } catch (error) {
        return next(error)
    }
}

const getJobById = async (req, res, next) => {
    try {
        const { id } = req.params

        const job = await jobPost.findById(id).populate("user", "username fullName avatar")

        if (!job) {
            throw new ApiError(404, "Job not found")
        }

        return res.status(200).json(new ApiResponse(200, job, "Job fetched successfully"))
    } catch (error) {
        return next(error)
    }
}

const updateJob = async (req, res, next) => {
    try {
        const { id } = req.params
        const updates = req.body

        const job = await jobPost.findById(id)

        if (!job) {
            throw new ApiError(404, "Job not found")
        }

        if (job.user.toString() !== req.user._id.toString()) {
            throw new ApiError(403, "You are not authorized to update this job")
        }

        const updatedJob = await jobPost.findByIdAndUpdate(id, updates, { new: true })

        return res.status(200).json(new ApiResponse(200, updatedJob, "Job updated successfully"))
    } catch (error) {
        return next(error)
    }
}

const deleteJob = async (req, res, next) => {
    try {
        const { id } = req.params

        const job = await jobPost.findById(id)

        if (!job) {
            throw new ApiError(404, "Job not found")
        }

        if (job.user.toString() !== req.user._id.toString()) {
            throw new ApiError(403, "You are not authorized to delete this job")
        }

        await jobPost.findByIdAndDelete(id)

        return res.status(200).json(new ApiResponse(200, null, "Job deleted successfully"))
    } catch (error) {
        return next(error)
    }
}

const getMyJobs = async (req, res, next) => {
    try {
        const jobs = await jobPost.find({ user: req.user._id }).sort({ createdAt: -1 })

        return res.status(200).json(new ApiResponse(200, jobs, "Your jobs fetched successfully"))
    } catch (error) {
        return next(error)
    }
}

// SRS §3.4.1: Job Moderation Functions
const approveJob = async (req, res, next) => {
    try {
        const { id } = req.params
        const { notes } = req.body

        const job = await jobPost.findById(id)
        if (!job) {
            throw new ApiError(404, "Job not found")
        }

        job.status = 'approved'
        job.moderatedBy = req.user._id
        job.moderationNotes = notes || ''
        job.moderatedAt = new Date()
        await job.save()

        return res.status(200).json(new ApiResponse(200, job, "Job approved successfully"))
    } catch (error) {
        return next(error)
    }
}

const rejectJob = async (req, res, next) => {
    try {
        const { id } = req.params
        const { reason, notes } = req.body

        if (!reason) {
            throw new ApiError(400, "Rejection reason is required")
        }

        const job = await jobPost.findById(id)
        if (!job) {
            throw new ApiError(404, "Job not found")
        }

        job.status = 'rejected'
        job.rejectionReason = reason
        job.moderatedBy = req.user._id
        job.moderationNotes = notes || ''
        job.moderatedAt = new Date()
        await job.save()

        return res.status(200).json(new ApiResponse(200, job, "Job rejected successfully"))
    } catch (error) {
        return next(error)
    }
}

const getPendingJobs = async (req, res, next) => {
    try {
        const { page = 1, limit = 20 } = req.query

        const query = { status: 'pending' }
        const skip = (parseInt(page) - 1) * parseInt(limit)

        const [jobs, total] = await Promise.all([
            jobPost
                .find(query)
                .populate("user", "fullName email username")
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(parseInt(limit)),
            jobPost.countDocuments(query)
        ])

        return res.status(200).json(
            new ApiResponse(200, {
                jobs,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / parseInt(limit))
                }
            }, "Pending jobs retrieved successfully")
        )
    } catch (error) {
        return next(error)
    }
}

// SRS §3.4.2: Bookmark Functions
const saveJob = async (req, res, next) => {
    try {
        const { id } = req.params

        const job = await jobPost.findById(id)
        if (!job) {
            throw new ApiError(404, "Job not found")
        }

        // Check if already saved
        const existing = await SavedJob.findOne({ userId: req.user._id, jobId: id })
        if (existing) {
            throw new ApiError(400, "Job already saved")
        }

        const savedJob = await SavedJob.create({
            userId: req.user._id,
            jobId: id
        })

        return res.status(201).json(new ApiResponse(201, savedJob, "Job saved successfully"))
    } catch (error) {
        return next(error)
    }
}

const unsaveJob = async (req, res, next) => {
    try {
        const { id } = req.params

        const result = await SavedJob.findOneAndDelete({
            userId: req.user._id,
            jobId: id
        })

        if (!result) {
            throw new ApiError(404, "Saved job not found")
        }

        return res.status(200).json(new ApiResponse(200, null, "Job unsaved successfully"))
    } catch (error) {
        return next(error)
    }
}

const getSavedJobs = async (req, res, next) => {
    try {
        const { page = 1, limit = 20 } = req.query
        const skip = (parseInt(page) - 1) * parseInt(limit)

        const [savedJobs, total] = await Promise.all([
            SavedJob
                .find({ userId: req.user._id })
                .populate({
                    path: 'jobId',
                    populate: { path: 'user', select: 'fullName companyDetails username' }
                })
                .sort({ savedAt: -1 })
                .skip(skip)
                .limit(parseInt(limit)),
            SavedJob.countDocuments({ userId: req.user._id })
        ])

        return res.status(200).json(
            new ApiResponse(200, {
                savedJobs,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / parseInt(limit))
                }
            }, "Saved jobs retrieved successfully")
        )
    } catch (error) {
        return next(error)
    }
}

export {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob,
    getMyJobs,
    // Moderation
    approveJob,
    rejectJob,
    getPendingJobs,
    // Bookmarks
    saveJob,
    unsaveJob,
    getSavedJobs
}
