import React from 'react'
import {useNavigate} from 'react-router-dom'
const AnalysisResult = () => {
  const navigate = useNavigate()
  navigate("/analyzed-result", {
    state: { result: data }
})
  return (<>
  
    <div>AnalysisResult</div>
    <p>{result.matchedSkills}</p>
  
  </>)
}

export default AnalysisResult