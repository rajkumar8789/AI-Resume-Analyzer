// uploading resume (pdf) through this
import cloudinary from "../config/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

const storage =new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"myFiles",
        allowed_files:["pdf"]
    }
})

const resumeUpload = multer({storage:storage})

export default resumeUpload