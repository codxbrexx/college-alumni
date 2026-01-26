import { Router } from "express";
import { importPlacementsFromCSV, getPlacementStats, getAllPlacements, getAvailableYears } from "../controller/placement.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { requireAdmin } from "../middleware/roleCheck.middleware.js";
import multer from "multer";

const router = Router();

// Configure multer for CSV upload (memory storage)
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'text/csv' || file.originalname.endsWith('.csv')) {
            cb(null, true);
        } else {
            cb(new Error('Only CSV files are allowed'), false);
        }
    }
});

// Admin-only: Import placements from CSV
router.post("/import", verifyJWT, requireAdmin, upload.single('file'), importPlacementsFromCSV);

// Public: Get placement statistics
router.get("/stats", getPlacementStats);

// Public: Get all placements with filters
router.get("/", getAllPlacements);

// Public: Get available years
router.get("/years", getAvailableYears);

export default router;
