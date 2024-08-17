import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';




    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_API_KEY, 
        api_secret: process.env.CLOUD_API_SECRET
    });


const uploadOnCloudinary = async (filePath) => {
    try {
        if (!filePath) return;
        // Upload the file to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto"
        })

        //file uploaded successfully
        console.log('File uploaded successfully' + uploadResult.url);
        console.log(uploadResult);

        return uploadResult

        
    } catch (error) {
        console.error(error);
        // remove locally saved file as upload failed to cloudinary
        fs.unlinkSync(filePath);

        return null;


    }
};
 
export { uploadOnCloudinary };