// uploading resume (pdf) through this
import cloudinary from "../config/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

const storage =new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"myfiles/resumes",
        allowed_formats:["pdf"]
    }
})

const uploadResume = multer({storage:storage})

export default uploadResume