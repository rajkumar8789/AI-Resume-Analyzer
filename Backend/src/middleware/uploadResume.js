// uploading resume (pdf) through this
// import cloudinary from "../config/cloudinary.js";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/resumes')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname)
  }
})


const uploadResume = multer({storage:storage})

export default uploadResume