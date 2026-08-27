import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const AnalysisResult = () => {
 const location = useLocation()
      
const result =location.state
  return (<>
  
    <div>AnalysisResult</div>
    <p>{result.matchedSkills}</p>
  
  </>)
}

export default AnalysisResult