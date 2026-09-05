import mongoose from "mongoose";
import User from "./userSchema";
const resumeSchema = new mongoose.Schema({
  personal: {
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
  },

  //professionalSummary
  summary: {
    type: String,
    required: true,
  },

  //Education
  education: [
    {
      degree: {
        type: String,
        required: true,
      },
      college: {
        type: String,
        required: true,
      },
      startYear: {
        type: Date,
        required: true,
      },
      endYear: {
        type: Date,
        required: true,
      },
    },
  ],
  skills: [],
  experience: [],
  projects: [],
});

const Resume = mongoose.model("Analysis", resumeSchema);

export default Resume;
