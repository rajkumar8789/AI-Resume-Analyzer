import { useLocation } from 'react-router-dom'
const AnalysisResult = () => {
 const location = useLocation()
      
const result =location.state.result
  return (<>
  
    <h2>AnalysisResult</h2>
    <p>{result.matchScore}</p>
  
  </>)
}

export default AnalysisResult