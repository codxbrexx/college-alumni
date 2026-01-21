import { newsPost } from "../model/newsPost.model.js"
import { ApiError } from "../utils/ApiError.utils.js"
import { ApiResponse } from "../utils/ApiResponse.utils.js"

const createNews = async (req, res, next) => {
    try {
        const { title, description, attachments } = req.body

        if (!title || !description) {
            throw new ApiError(400, "Title and description are required")
        }

        const news = await newsPost.create({
            user: req.user._id,
            title,
            description,
            attachments
        })

        return res.status(201).json(new ApiResponse(201, news, "News posted successfully"))
    } catch (error) {
        return next(error)
    }
}

const getAllNews = async (req, res, next) => {
    try {
        const { search, page = 1, limit = 10 } = req.query

        const query = {}

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ]
        }

        const skip = (parseInt(page) - 1) * parseInt(limit)

        const [news, total] = await Promise.all([
            newsPost
                .find(query)
                .populate("user", "username fullName avatar")
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(parseInt(limit)),
            newsPost.countDocuments(query)
        ])

        return res.status(200).json(
            new ApiResponse(200, {
                news,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / parseInt(limit))
                }
            }, "News fetched successfully")
        )
    } catch (error) {
        return next(error)
    }
}

const getNewsById = async (req, res, next) => {
    try {
        const { id } = req.params

        const news = await newsPost.findById(id).populate("user", "username fullName avatar")

        if (!news) {
            throw new ApiError(404, "News not found")
        }

        return res.status(200).json(new ApiResponse(200, news, "News fetched successfully"))
    } catch (error) {
        return next(error)
    }
}

const updateNews = async (req, res, next) => {
    try {
        const { id } = req.params
        const updates = req.body

        const news = await newsPost.findById(id)

        if (!news) {
            throw new ApiError(404, "News not found")
        }

        if (news.user.toString() !== req.user._id.toString()) {
            throw new ApiError(403, "You are not authorized to update this news")
        }

        const updatedNews = await newsPost.findByIdAndUpdate(id, updates, { new: true })

        return res.status(200).json(new ApiResponse(200, updatedNews, "News updated successfully"))
    } catch (error) {
        return next(error)
    }
}

const deleteNews = async (req, res, next) => {
    try {
        const { id } = req.params

        const news = await newsPost.findById(id)

        if (!news) {
            throw new ApiError(404, "News not found")
        }

        if (news.user.toString() !== req.user._id.toString()) {
            throw new ApiError(403, "You are not authorized to delete this news")
        }

        await newsPost.findByIdAndDelete(id)

        return res.status(200).json(new ApiResponse(200, null, "News deleted successfully"))
    } catch (error) {
        return next(error)
    }
}

export {
    createNews,
    getAllNews,
    getNewsById,
    updateNews,
    deleteNews
}
