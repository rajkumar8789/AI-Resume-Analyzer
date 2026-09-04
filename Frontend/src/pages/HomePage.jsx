import React from "react";

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Resume-analyzer.png')" }}
    >
      <div className="flex min-h-screen items-center justify-center px-4 bg-slate-950/50">
        
        <div className="w-full max-w-xl rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
         
          <h1 className="text-center text-3xl font-bold text-white">
            AI Resume Analyzer
          </h1>

          <p className="mt-3 text-center text-slate-300">
            Upload your resume and compare it with a job description using AI.
          </p>

          <a
            href="/login "
            className="text-md font-medium text-blue-500 block text-center pt-2"
          >
            Start analyzing today...
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
