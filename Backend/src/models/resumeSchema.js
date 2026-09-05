import mongoose from "mongoose";
import User from "./userSchema";
const resumeSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  location: {
    type: String,
  },

  //professionalSummary
  summary: {
    type: String,
  },

  //Education
  education: {
    type: [
      {
        degree: {
          type: String,
        },
        college: {
          type: String,
        },
        startYear: {
          type: String,
        },
        endYear: {
          type: String,
        },
      },
    ],
  },
  skills: {
    type: [String],
  },
  experience: {
    type: [
      {
        company: String,
        position: String,
        startDate: String,
        endDate: String,
        description: String,
      },
    ],
  },
  projects: {
    type: [
      {
        name: String,
        description: String,
        technologies: [String],
        link: String,
      },
    ],
  },
},{
  timestamps:true
});

const Resume = mongoose.model("Analysis", resumeSchema);

export default Resume;
