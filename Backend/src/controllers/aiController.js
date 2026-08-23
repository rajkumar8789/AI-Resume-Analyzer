import {generateAiResponce,generateAiResponceOnResume} from "../services/aiServices.js"


const testAI = async(req,res)=>{
    const {message} = req.body
    const generatedText = await generateAiResponce(message)
    res.json(generatedText)
}

const resumeUpload = async(req,res) =>{
    const {resume} = req.file
    console.log(JSON.stringify(req.file, null, 2));
    
    const {jobDesrciption} = req.body
    const generatedText =await generateAiResponceOnResume(resume,jobDesrciption)
    res.json(generatedText)
}



export  {testAI,resumeUpload}
