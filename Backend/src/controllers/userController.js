import User from "../models/userSchema.js";

const userRegister =async(req,res)=>{
    const {name,email,password} = req.body
    if (!email || !password) {
        return res.status(401).json({
            message:"email and password is required"
        })
    }
    const existinguser =await User.findOne({email:email})
    if (existinguser) {
        return res.status(409).json({
            message:"User with this email is already Exists"
        })
    }
    const user =await User.create({
        name,
        email,
        password,
        profilePic:req.file?.path || ""
    })

    res.status(200).json({
        message:"User created successfully",
        user:{
            name:user.name,
            email:user.email,
            profilePic:user.profilePic
        }
    })

}