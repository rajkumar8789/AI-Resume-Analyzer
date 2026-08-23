// uploading image through this
import multer from "multer"
import cloudinary from "../config/cloudinary.js"
import { CloudinaryStorage } from "multer-storage-cloudinary"

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "myfiles",
        allolwed_format: ["jpg", "jpeg", "png", "webp"]
    }

})
const upload = multer({ storage: storage })

export default upload;