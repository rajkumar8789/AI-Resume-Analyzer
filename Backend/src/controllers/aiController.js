import {generateAiResponce} from "../services/aiServices.js"


const testAI = async(req,res)=>{
    const {message} = req.body
    const generatedText = await generateAiResponce(message)
    res.json(generatedText)
}



export  {testAI}
