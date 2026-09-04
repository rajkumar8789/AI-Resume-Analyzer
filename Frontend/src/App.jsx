import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import AnalysisResult from "./pages/AnalysisResult.jsx";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { useState } from "react";
function App() {
  //Here !! indicates true or false based on token
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route path="/analyze-resume" element={<Home />} />

          <Route path="/analyzed-result" element={<AnalysisResult />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
