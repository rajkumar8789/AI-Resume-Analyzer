import express from "express"
import {userRegister,userLogin} from "../controllers/userController.js"
import authMiddle from "../middleware/authMiddleware.js"
import upload from "../middleware/multer.js"


const router = express.Router()

router.post("/register",upload.single("profilePic"),userRegister)
router.post("/login",authMiddle,userLogin)

export default router;