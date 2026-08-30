import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import AnalysisResult from './pages/AnalysisResult.jsx'
import HomePage from './pages/HomePage.jsx'
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/analyze-resume" element={<Home/>}/>
          <Route path="/analyzed-result" element={<AnalysisResult />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
