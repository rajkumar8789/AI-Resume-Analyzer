import express from "express"
import {userRegister,userLogin} from "../controllers/userController.js"
import authMiddle from "../middleware/authMiddleware.js"
import upload from "../middleware/multer.js"
import {createResume} from "../controllers/resumeController.js"

const router = express.Router()

router.post("/register",upload.single("profilePic"),userRegister)

router.post("/login",userLogin)

router.post("/create-resume",authMiddle,createResume)

export default router;