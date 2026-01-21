import fs from 'fs';
import path from 'path';

// Removed Cloudinary config for local storage implementation
// import { v2 as cloudinary } from 'cloudinary';
// cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//         api_key: process.env.CLOUDINARY_API_KEY,
//         api_secret: process.env.CLOUDINARY_API_SECRET
// });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // Generate a unique filename or keep original? 
        // Multer usually gives it a unique name or specific one.
        // Assuming localFilePath is like 'public/temp/filename.ext'

        const fileName = path.basename(localFilePath);
        const targetPath = path.join('public/uploads', fileName); // Relative to project root

        // Ensure the directory exists (it should, but safety first)
        if (!fs.existsSync('public/uploads')) {
            fs.mkdirSync('public/uploads', { recursive: true });
        }

        // Move the file from temp to uploads
        fs.renameSync(localFilePath, targetPath);

        const serverUrl = process.env.SERVER_URL || 'http://localhost:5000';
        // Construct public URL. Since 'public' is static, we serve from root usually or /public
        // Express: app.use(express.static("public")) means 'public/uploads/file.jpg' is accessible via 'url/uploads/file.jpg'

        const fileUrl = `${serverUrl}/uploads/${fileName}`;

        console.log('File saved locally:', fileUrl);
        return { url: fileUrl };

    } catch (error) {
        // Remove the locally saved temporary file as the operation got failed
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        console.error('Error handling file upload:', error);
        return null;
    }
}

export { uploadOnCloudinary };