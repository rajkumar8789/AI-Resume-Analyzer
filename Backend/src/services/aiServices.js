import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateAiResponce = async (prompt) => {
  const responce = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });
  return responce.text;
};

const generateAiResponceOnResume = async (resume, jobDescription) => {
  const pdfFile = await ai.files.upload({
    file: resume.path,
  });

  const prompt = `
  Analyze the uploaded resume against the following job description

  job Description:
  ${jobDescription}

  please evaluate:
  1. Overall match score from 0 to 100
  2. Matched skills
  3. Missing skills
  4. Relevent experience
  5. Strengths
  6. Weaknesses
  7. Suggestion to improve the resume

Return ONLY valid JSON.
No markdown.
No code fences.
No surrounding quotes.
    matchScore    
    matchedSkills   
    missingSkills   
    strengths   
    weaknesses  
    suggestions 
  `;

  const responce = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: [
      {
        fileData: {
          fileUri: pdfFile.uri,
          mimeType: pdfFile.mimeType,
        },
      },
      {
        text: prompt,
      },
    ],
  });
  return JSON.parse(responce.text);
};

export { generateAiResponce, generateAiResponceOnResume };
