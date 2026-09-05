import express from 'express'
import {createResume} from "../controllers/resumeController.js"
import authMiddle from '../middleware/authMiddleware.js'
const router = express.Router()

router.post("/create",authMiddle,createResume)

export default router