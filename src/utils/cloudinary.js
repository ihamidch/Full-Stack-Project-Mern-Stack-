import { v2 as cloudinary } from 'cloudinary';
import exp from 'constants';
import fs from 'fs';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLODINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    
})();

const uploadOnCloudinary = async (localfilepath) => {
    try {
       if(!localfilepath) return null;
       //file upload to cloudinary
         const result = await cloudinary.uploader.upload(localfilepath,{
            resource_type:"auto",
         });
         //successfully uploaded
         console.log("File uploaded successfully", result.url);
            return result;
           
    } catch (error) {
         fs.unlinkSync(localfilepath); //remove file from locallly save file system if failed to upload
            console.log("Error while uploading", error);
    }
}
export {uploadOnCloudinary};