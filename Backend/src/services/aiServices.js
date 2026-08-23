import {GoogleGenAI} from "@google/genai"

const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
})

const generateAiResponce =async (prompt) =>{
   const responce = await ai.models.generateContent({
    model:"gemini-3.6-flash",
    contents:prompt
    })
    return responce.text
}

const generateAiResponceOnResume = async(resume , jobDescription)=>{
    const pdfFile =await ai.files.upload({
        file:resume.path
    })

    const responce =await ai.models.generateContent({
        model:"gemini-3.6-flash",
        contents:[{
            fileData:{
                fileUri:pdfFile.uri,
                mimeType:pdfFile.mimeType
            },
            text:jobDescription

        }]
    })
    return responce.text
}

export {generateAiResponce,generateAiResponceOnResume};