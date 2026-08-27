import React, { useEffect, useState } from "react";

const Home = ({result}) => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      
      const formData = new FormData();

      formData.append('resume',resume);
      formData.append('jobDescription',jobDescription)

      const response = await fetch("http://localhost:5000/api/ai/analyze",
       { 
        method:"POST",
        body:formData
       })
       const data =await response.json();
       console.log(data.generatedText)

       setResult(data)
    } catch (error) {
      console.log(error.message || "Error Occured");
    }finally{
      setLoading(false)
    }
  }

  if (loading) {
    return <p>Loading ... .. .</p>
  }
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            AI Resume Analyzer
          </h1>

          <p className="mt-3 text-slate-400">
            Upload your resume and compare it with a job description
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          {/* Resume Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Upload Resume
            </label>

            <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-slate-700 rounded-xl cursor-pointer hover:border-indigo-500 hover:bg-slate-800/50 transition">
              <svg
                className="w-8 h-8 mb-3 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5.002 5.002 0 0116.9 7H17a4 4 0 010 8h-1m-4-4l-3 3m0 0l-3-3m3 3V4"
                />
              </svg>

              <p className="text-sm text-slate-400">
                Click to upload your resume
              </p>

              <p className="text-xs text-slate-500 mt-1">PDF only</p>

              <input
                type="file"
                accept=".pdf,application/pdf"
                className="hidden"
                onChange={(e) => setResume(e.target.files[0])}
              />
            </label>
          </div>

          {/* Job Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Job Description
            </label>

            <textarea
              rows="8"
              placeholder="Paste the job description here..."
              className="w-full resize-none rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              value={jobDescription}
              onChange={(e)=> setJobDescription(e.target.value)}
            />
          </div>

          {/* Analyze Button */}
          <button
            type="button"
            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 px-5 py-3 font-semibold transition"
            onClick={handleSubmit}
          >
            Analyze Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
