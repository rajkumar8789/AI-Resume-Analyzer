import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          {/* Logo */}
          <h1 className="text-xl font-bold text-white cursor-default">
            ResumeAI
          </h1>

          <div className="flex items-center gap-6">
            <a
              href="/"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Home
            </a>
            <a
              href="/analyze-resume"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Analysis
            </a>
            <button className=" rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500">
              Login
            </button>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500">
              Register
            </button>
          </div>
        </div>
      </nav>
  )
}

export default Navbar