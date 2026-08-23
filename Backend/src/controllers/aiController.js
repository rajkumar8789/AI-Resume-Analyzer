import ai from "../services/aiServices.js"

const responce =await ai.models.generateContent({
    model:"gemini-3.7-flash",
    contents:prompt
})

export {responce}