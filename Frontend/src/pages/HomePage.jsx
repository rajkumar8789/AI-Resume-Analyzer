import React from "react";

const HomePage = () => {
  return (
    <div>
      <nav className="w-full border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          {/* Logo */}
            <h1 className="text-xl font-bold text-white cursor-default">ResumeAI</h1>

            <div className="flex items-center gap-6">
                <a href="/" className="text-sm font-medium text-slate-300 transition hover:text-white">Home</a>
                <a href="/analyze-resume" className="text-sm font-medium text-slate-300 transition hover:text-white">Analysis</a>
                <a href="/register" className="text-sm font-medium text-slate-300 transition hover:text-white">Login</a>
                <a href="/login" className="text-sm font-medium text-slate-300 transition hover:text-white"> Register</a>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
