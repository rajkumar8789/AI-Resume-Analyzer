import { useLocation } from "react-router-dom";
const AnalysisResult = () => {
  const location = useLocation();

  //used to access the content of result state
  const result = location.state.result;
  
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-indigo-400">
            AI Resume Analyzer
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Resume Analysis
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            AI-powered analysis of your resume against the selected job
            description.
          </p>
        </div>

        {/* Match Score */}
        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">

            <div>
              <p className="text-sm font-medium text-slate-400">
                Overall Match
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Resume Match Score
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                How closely your resume matches the job requirements.
              </p>
            </div>

            {/* Score Circle */}
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-indigo-500 bg-slate-950">
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-400">
                  {result.matchScore}%
                </p>

                <p className="text-xs text-slate-500">
                  Match
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Matched Skills */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-5">
              <h2 className="text-xl font-semibold">
                Matched Skills
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Skills found in your resume that match the job.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {result.matchedSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-800 bg-emerald-950 px-4 py-2 text-sm font-medium text-emerald-400"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Missing Skills */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-5">
              <h2 className="text-xl font-semibold">
                Missing Skills
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Skills mentioned in the job description but missing from your
                resume.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {result.missingSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-red-800 bg-red-950 px-4 py-2 text-sm font-medium text-red-400"
                >
                  ✕ {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Strengths */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">
              💪 Strengths
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              What your resume is doing well.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {result.strengths.map((strength, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 text-emerald-400">
                    ✓
                  </span>

                  <p className="text-sm leading-6 text-slate-300">
                    {strength}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weaknesses */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">
              ⚠️ Weaknesses
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Areas that may reduce your chances for this job.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {result.weaknesses.map((weakness, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 text-yellow-400">
                    !
                  </span>

                  <p className="text-sm leading-6 text-slate-300">
                    {weakness}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="mt-6 rounded-2xl border border-indigo-900 bg-indigo-950/30 p-6">
          <div className="mb-6">
            <p className="text-sm font-medium uppercase tracking-wider text-indigo-400">
              AI Recommendations
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              How to Improve Your Resume
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Follow these recommendations to improve your job match score.
            </p>
          </div>

          <div className="space-y-4">
            {result.suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-indigo-900/60 bg-slate-950 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold">
                  {index + 1}
                </div>

                <p className="text-sm leading-6 text-slate-300">
                  {suggestion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-600">
            Analysis generated by AI. Review recommendations before making
            changes to your resume.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AnalysisResult;

