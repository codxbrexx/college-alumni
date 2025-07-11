import User from "../model/user.model.js"
import { ApiError } from "../utils/ApiError.utils.js"
import { ApiResponse } from "../utils/ApiResponse.utils.js"

const registerUser = async (req, res, next) => {
    try {
        const {email, password, username, yearOfPassing, city, state, profession, linkedInUrl, workExperience, aboutYou} = req.body
        
    } catch (error) {
        
    }
}