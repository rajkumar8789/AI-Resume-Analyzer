import {GoogleGenAI} from "@google/genai"

const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
})

const genarateAiResponce =async (prompt) =>{
   const responce = await ai.models.generateContent({
    model:"gemini-3.7-flash",
    contents:prompt
    })
    return responce.text
}

export {ai,genarateAiResponce};