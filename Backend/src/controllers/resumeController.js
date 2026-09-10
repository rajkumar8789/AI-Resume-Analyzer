import Resume from "../models/resumeSchema.js";

const createResume = async (req, res) => {
  try {
    // const {
    //   fullName,
    //   email,
    //   phone,
    //   location,
    //   summary,
    //   education,
    //   skills,
    //   exprience,
    //   projects,
    // } = req.body;

    const resumeData = JSON.parse(req.body.resume);

    const resume = await Resume.create({
      user: req.user.userId,
     
      // fullName,
      // email,
      // phone,
      // location,
      // summary,
      // education,
      // skills,
      // exprience,
      // projects,

      ...resumeData,
      
       profilePic:req.file?.path ||"",
    });
    res.status(201).json({
      message: "Resume created successfully",
      resume,
    });
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      message: "Failed to create resume",
    });
  }
};

export { createResume };
