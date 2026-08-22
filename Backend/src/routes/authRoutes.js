import express from "express"
import {userRegister,userLogin} from "../controllers/userController.js"
import authMiddle from "../middleware/authMiddleware.js"
import upload from "../middleware/multer.js"

const router = express.Router()

router.get("/register",upload.single("profilePic"),userRegister)
router.get("/login",authMiddle,userLogin)

export default router;