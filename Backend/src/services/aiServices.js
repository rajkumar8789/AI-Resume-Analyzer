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


export {generateAiResponce};