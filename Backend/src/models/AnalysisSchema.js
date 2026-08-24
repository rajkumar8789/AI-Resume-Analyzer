import mongoose from "mongoose";
import User from "./userSchema";
const AnalysisSchema =new mongoose.Schema({
    matchScore:{
        type:Number
    },
    matchedSkills:{
        type:[]
    },
    missingSkills:{
        type:[]
    },
    strengths:{
        type:[]
    },
    weaknesses:{
        type:[]
    },
    suggestions:{
        type:[]
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }

})

const Analysis = mongoose.model("Analysis",AnalysisSchema)

export default Analysis