import { ApiError } from "../utils/ApiError.utils.js";

/**
 * Middleware to check if user has required role(s)
 * @param {string[]} allowedRoles - Array of roles that are allowed to access the route
 * @returns {Function} Express middleware function
 */
export const requireRole = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return next(new ApiError(401, "Authentication required"));
        }

        // Get the user's role (computed virtual from User model)
        const userRole = req.user.role;

        if (!userRole) {
            return next(new ApiError(403, "User role not defined"));
        }

        // Check if user's role is in the allowed roles
        if (!allowedRoles.includes(userRole)) {
            return next(new ApiError(403, `Access denied. Required role: ${allowedRoles.join(', ')}`));
        }

        next();
    };
};

/**
 * Middleware to check if user is an admin (InstitutionAdmin or SystemAdmin)
 */
export const requireAdmin = (req, res, next) => {
    if (!req.user) {
        return next(new ApiError(401, "Authentication required"));
    }

    const adminRoles = ['InstitutionAdmin', 'SystemAdmin'];
    const userRole = req.user.adminRole; // Check adminRole field

    if (!adminRoles.includes(userRole)) {
        return next(new ApiError(403, "Admin access required"));
    }

    next();
};

/**
 * Middleware to check if user is alumni (not a student)
 */
export const requireAlumni = (req, res, next) => {
    if (!req.user) {
        return next(new ApiError(401, "Authentication required"));
    }

    if (req.user.role !== 'Alumni') {
        return next(new ApiError(403, "Alumni access required"));
    }

    next();
};
