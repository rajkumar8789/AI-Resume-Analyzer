# AI Resume Analyzer

An AI-powered Resume Analyzer that compares a candidate's resume with a given job description and provides an intelligent compatibility analysis.

The application uses **Google Gemini AI** to understand the resume and job requirements, identify matching and missing skills, and provide actionable suggestions for improving the resume.

---

## 🚀 Features

- 📄 Upload Resume in PDF format
- 📝 Enter Job Description
- 🤖 AI-powered Resume Analysis
- 📊 Resume Match Score
- ✅ Matched Skills
- ❌ Missing Skills
- 💪 Resume Strengths
- ⚠️ Resume Weaknesses
- 💡 AI-generated Improvement Suggestions
- ⚡ Loading state during AI analysis
- 🎨 Responsive UI built with Tailwind CSS
- 🔐 Backend-based Gemini API integration

---

## How It Works

User
 │
 ├── Upload Resume (PDF)
 │
 └── Enter Job Description
          │
          ↓
       React Frontend
          │
          ↓
       FormData
          │
          ↓
   Express.js Backend
          │
          ↓
     Gemini AI API
          │
          ↓
   Resume + Job Analysis
          │
          ↓
      JSON Response
          │
          ↓
      React Frontend
          │
          ↓
     Analysis Dashboard


🎯 Future Improvements

The current version is an MVP. Planned improvements include:

🔐 User authentication
👤 User profile
📚 Resume history
📈 Analysis history dashboard
📄 Resume builder
✨ AI resume rewriting
🎯 Job recommendations
🔎 Job matching
📊 Advanced ATS score
🧠 Better skill extraction
💾 Save analyzed resumes
☁️ Cloud resume storage
🌐 Deploy frontend and backend
📱 Improved mobile UI