import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        
         <Link to="/" className="text-xl font-bold text-white">
      ResumeAI
          </Link>

        <div className="flex items-center gap-6">
     
      <Link
        to="/login"
        className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
      >
        Login
      </Link>

      <Link
        to="/register"
        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
      >
        Register
      </Link> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
