import express from 'express'
import { testAI,resumeUpload } from '../controllers/aiController.js';
import uploadResume from '../middleware/uploadResume.js';

const router = express.Router()

//testing route
router.post("/test",testAI)

//working route
router.post("/analyze",
    uploadResume.single('resume')
    ,resumeUpload)

export default router;