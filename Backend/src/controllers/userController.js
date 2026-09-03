import User from "../models/userSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// resister controller
const userRegister = async (req, res) => {
    const { name, email, password } = req.body
    if (!email || !password) {
        return res.status(401).json({
            message: "email and password is required"
        })
    }
    const existinguser = await User.findOne({ email: email })
    if (existinguser) {
        return res.status(409).json({
            message: "User with this email is already Exists"
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        profilePic: req.file?.path || ""
    })
    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '7d' }
    )

    res.status(200).json({
        message: "User created successfully",
        token,
        user: {
            name: user.name,
            email: user.email,
            profilePic: user.profilePic
        }
    })

}

//login controller
const userLogin =async(req,res)=>{

    try {
        const {email,password} = req.body
    
        if (!email || !password) {
            return res.status(400).json({
                message:"email and password is required"
            })
        }
    
        const user =await User.findOne({email})
    
        if (!user) {
            return res.status(400).json({
                message:"user not exists"
            })
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
    
        if (!isMatch) {
          return res.status(400).json({ message: "Invalid credentials" });
        }
    
        const token = jwt.sign(
            {userId:user._id},
            process.env.JWT_SECRET_KEY,
            {expiresIn:"7d"}
        )
        console.log(token);
        
        res.status(200).json({
            message:"successfully LoggedIn",
            token,
            user:{
                name:user.name,
                email:user.email
            }
    
        })
    } catch (error) {
        console.log(error);
        
    }
}

export {userRegister,userLogin}