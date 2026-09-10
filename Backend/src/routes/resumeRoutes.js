import express from 'express'
import {createResume} from "../controllers/resumeController.js"
import authMiddle from '../middleware/authMiddleware.js'
import upload from '../middleware/multer.js'
const router = express.Router()

router.post("/create",authMiddle,upload.single('profilePic'),createResume)

export default router