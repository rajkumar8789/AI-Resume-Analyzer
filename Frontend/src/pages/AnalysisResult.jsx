import { useLocation } from "react-router-dom";
const AnalysisResult = () => {
  const location = useLocation();

  const result = location.state.result;
  return (
    <>
      <h2>AnalysisResult</h2>

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-lg font-semibold text-gray-700">Match Score</h2>

        <p className="mt-2 text-4xl font-bold">{result.matchScore}%</p>
      </div>



      <ul className="space-y-2">
        {result.matchedSkills.map((skill) => (
          <li
            key={skill}
            className="bg-green-100 text-green-800 px-3 py-2 rounded-lg"
          >
            ✓ {skill}
          </li>
        ))}
      </ul>

        <h1 className="center">missing Skills</h1>

        <ul className="space-y-2">
        {result.missingSkills.map((skill) => (
          <li
            key={skill}
            className="bg-green-100 text-green-800 px-3 py-2 rounded-lg"
          >
            ✓ {skill}
          </li>
        ))}
      </ul>

    </>
  );
};

export default AnalysisResult;
