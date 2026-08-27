import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import AnalysisResult from './pages/AnalysisResult.jsx'
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/analyzed-result" element={<AnalysisResult />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
