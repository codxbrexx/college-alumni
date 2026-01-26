import { Placement } from "../model/placement.model.js";
import { User } from "../model/user.model.js";
import { ApiError } from "../utils/ApiError.utils.js";
import { ApiResponse } from "../utils/ApiResponse.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js";
import Papa from "papaparse";
import crypto from "crypto";

/**
 * Import placements from CSV file
 * Per SRS §3.6.4: CSV import with validation
 */
const importPlacementsFromCSV = asyncHandler(async (req, res) => {
    if (!req.file) {
        throw new ApiError(400, "CSV file is required");
    }

    // Parse CSV
    const csvData = req.file.buffer.toString('utf8');
    const parseResult = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header) => header.trim().toLowerCase()
    });

    if (parseResult.errors.length > 0) {
        throw new ApiError(400, "CSV parsing failed", parseResult.errors);
    }

    const rows = parseResult.data;
    if (rows.length === 0) {
        throw new ApiError(400, "CSV file is empty");
    }

    // Validate required columns
    const requiredColumns = ['branch', 'yearofpassout', 'companyname', 'packageamount'];
    const firstRow = rows[0];
    const missingColumns = requiredColumns.filter(col => !(col in firstRow));

    if (missingColumns.length > 0) {
        throw new ApiError(400, `Missing required columns: ${missingColumns.join(', ')}`);
    }

    // Generate import batch ID
    const batchId = crypto.randomBytes(8).toString('hex');

    // Validate and prepare data
    const validPlacements = [];
    const errors = [];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const lineNum = i + 2; // +2 for header and 0-index

        try {
            // Validate required fields
            if (!row.branch || !row.yearofpassout || !row.companyname || !row.packageamount) {
                errors.push({ line: lineNum, error: "Missing required fields" });
                continue;
            }

            const yearOfPassout = parseInt(row.yearofpassout);
            const packageAmount = parseFloat(row.packageamount);

            if (isNaN(yearOfPassout) || yearOfPassout < 1900 || yearOfPassout > 2100) {
                errors.push({ line: lineNum, error: "Invalid year of passout" });
                continue;
            }

            if (isNaN(packageAmount) || packageAmount < 0) {
                errors.push({ line: lineNum, error: "Invalid package amount" });
                continue;
            }

            // Try to find student by rollNo
            let studentId = null;
            if (row.rollno) {
                const student = await User.findOne({ rollNo: row.rollno.trim() });
                if (student) {
                    studentId = student._id;
                }
            }

            validPlacements.push({
                studentId,
                studentName: row.studentname?.trim() || null,
                rollNo: row.rollno?.trim() || null,
                branch: row.branch.trim(),
                yearOfPassout,
                companyName: row.companyname.trim(),
                jobTitle: row.jobtitle?.trim() || null,
                packageAmount,
                packageCurrency: row.currency?.toUpperCase() || 'INR',
                location: row.location?.trim() || null,
                placementType: row.placementtype || 'On-Campus',
                offerDate: row.offerdate ? new Date(row.offerdate) : new Date(),
                isInternational: row.isinternational === 'true' || row.isinternational === '1',
                uploadedBy: req.user._id,
                importBatchId: batchId,
                notes: row.notes?.trim() || null
            });
        } catch (error) {
            errors.push({ line: lineNum, error: error.message });
        }
    }

    // Insert valid placements
    let insertedCount = 0;
    if (validPlacements.length > 0) {
        const result = await Placement.insertMany(validPlacements, { ordered: false });
        insertedCount = result.length;
    }

    return res.status(200).json(
        new ApiResponse(200, {
            imported: insertedCount,
            totalRows: rows.length,
            failed: errors.length,
            errors: errors.slice(0, 20), // Return first 20 errors
            batchId
        }, `Successfully imported ${insertedCount} placements`)
    );
});

/**
 * Get placement statistics by year
 */
const getPlacementStats = asyncHandler(async (req, res) => {
    const { year } = req.query;

    if (!year) {
        throw new ApiError(400, "Year parameter is required");
    }

    const stats = await Placement.getStatsByYear(parseInt(year));
    const branchStats = await Placement.getStatsByBranch(parseInt(year));
    const topRecruiters = await Placement.getTopRecruiters(parseInt(year), 10);

    return res.status(200).json(
        new ApiResponse(200, {
            year: parseInt(year),
            overview: stats[0] || {},
            byBranch: branchStats,
            topRecruiters
        }, "Placement statistics retrieved successfully")
    );
});

/**
 * Get all placements with filters and pagination
 */
const getAllPlacements = asyncHandler(async (req, res) => {
    const {
        year,
        branch,
        company,
        page = 1,
        limit = 50,
        sortBy = 'packageAmount',
        order = 'desc'
    } = req.query;

    const filter = {};
    if (year) filter.yearOfPassout = parseInt(year);
    if (branch) filter.branch = new RegExp(branch, 'i');
    if (company) filter.companyName = new RegExp(company, 'i');

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const sortOrder = order === 'asc' ? 1 : -1;

    const placements = await Placement.find(filter)
        .sort({ [sortBy]: sortOrder })
        .skip(skip)
        .limit(parseInt(limit))
        .populate('studentId', 'fullName email rollNo')
        .lean();

    const total = await Placement.countDocuments(filter);

    return res.status(200).json(
        new ApiResponse(200, {
            placements,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / parseInt(limit))
            }
        }, "Placements retrieved successfully")
    );
});

/**
 * Get available years for filtering
 */
const getAvailableYears = asyncHandler(async (req, res) => {
    const years = await Placement.distinct('yearOfPassout');
    years.sort((a, b) => b - a); // Descending order

    return res.status(200).json(
        new ApiResponse(200, { years }, "Available years retrieved successfully")
    );
});

export {
    importPlacementsFromCSV,
    getPlacementStats,
    getAllPlacements,
    getAvailableYears
};
