import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:" "
    },
    skills:{
        type:[]
    },
    education:{
        type:[] 
    },
    experience:{
        type:[]
    },
    github:{
        type:String,
        required:true
    },
    linkedIn:{
        type:String,
        required:true
    },
    portfolio:{
        type:String
    }
});

const User = mongoose.model("User",userSchema)

export default User;