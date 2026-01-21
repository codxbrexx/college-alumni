import { jobPost } from "../model/jobPost.model.js"
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
        const { search, location, company, page = 1, limit = 10 } = req.query

        const query = {}

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

export {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob,
    getMyJobs
}
