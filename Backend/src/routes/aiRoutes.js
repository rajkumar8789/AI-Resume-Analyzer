import express from 'express'
import { testAI } from '../controllers/aiController.js';
const router = express.Router()

router.post("/test",testAI)
router.post("/analyze",testAI)

export default router;