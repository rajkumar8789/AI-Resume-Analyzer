import jwt from "jsonwebtoken";

const authMiddle =(req,res,next) =>{
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if (!token) {
            return res.status(401).json({
                message:"token requires"
            })
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
    
        req.user = decoded;
        next()
    } catch (error) {
        res.status(401).json({
            message:"Invalid or expires token"
        })
    }
}

export default authMiddle;