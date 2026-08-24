import {
  generateAiResponce,
  generateAiResponceOnResume,
} from "../services/aiServices.js";

const testAI = async (req, res) => {
  const { message } = req.body;
  const generatedText = await generateAiResponce(message);
  res.json(generatedText);
};

const resumeUpload = async (req, res) => {
  try {
    //  const {resume} = req.file.path
    const { jobDescription } = req.body;
    console.log("FILE:");
    console.dir(req.file, { depth: null });

    console.log("JOB:");
    console.log(req.body.jobDescription);

    const generatedText = await generateAiResponceOnResume(
      req.file,
      jobDescription,
    );
    res.json(generatedText);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message || "Internal server error",
    });
  }
};

export { testAI, resumeUpload };
