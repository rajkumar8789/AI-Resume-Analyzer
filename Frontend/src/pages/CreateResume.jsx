import React, { useState } from "react";

const CreateResume = () => {

  const [resume,setResume] = useState({
    fullName:"",
    email:"",
    phone:"",
    location:"",
    linkedIn:"",
    github:"",
    summary:"",
    education:[],
    skills:[],
    experience:[],
    projects:[]
  })

  const handleChange = (e)=>{
    e.preventDefault()
    setResume({
      ...resume,
      [e.target.name]:[e.target.value]
    })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-10">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Create Your Resume
          </h1>

          <p className="mt-2 text-slate-400">
            Build a professional resume with your information.
          </p>
        </div>


        <div className="grid gap-8 lg:grid-cols-2">

          {/* ================= FORM ================= */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">

            <h2 className="mb-6 text-xl font-semibold">
              Personal Information
            </h2>

            <div className="space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                />
              </div>


              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                />
              </div>


              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Phone
                </label>

                <input
                  type="text"
                  placeholder="+91 9876543210"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                />
              </div>


              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Location
                </label>

                <input
                  type="text"
                  placeholder="City, State"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                />
              </div>


              {/* LinkedIn */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  LinkedIn
                </label>

                <input
                  type="text"
                  placeholder="https://linkedin.com/in/yourname"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                />
              </div>


              {/* GitHub */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  GitHub
                </label>

                <input
                  type="text"
                  placeholder="https://github.com/yourname"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                />
              </div>


              {/* Summary */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Professional Summary
                </label>

                <textarea
                  rows="5"
                  placeholder="Write a short professional summary..."
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                />
              </div>

            </div>


            {/* Skills */}
            <div className="mt-8 border-t border-slate-800 pt-6">

              <h2 className="mb-4 text-xl font-semibold">
                Skills
              </h2>

              <div className="flex gap-3">

                <input
                  type="text"
                  placeholder="e.g. React"
                  className="flex-1 rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-indigo-500"
                />

                <button
                  type="button"
                  className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold transition hover:bg-indigo-500"
                >
                  Add
                </button>

              </div>

              {/* Skill badges */}
              <div className="mt-4 flex flex-wrap gap-2">

                <span className="rounded-full bg-indigo-950 px-3 py-1 text-sm text-indigo-300">
                  React
                </span>

                <span className="rounded-full bg-indigo-950 px-3 py-1 text-sm text-indigo-300">
                  Node.js
                </span>

                <span className="rounded-full bg-indigo-950 px-3 py-1 text-sm text-indigo-300">
                  MongoDB
                </span>

              </div>

            </div>


            {/* Education */}
            <div className="mt-8 border-t border-slate-800 pt-6">

              <div className="mb-4 flex items-center justify-between">

                <h2 className="text-xl font-semibold">
                  Education
                </h2>

                <button
                  type="button"
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium hover:bg-indigo-500"
                >
                  + Add Education
                </button>

              </div>


              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">

                <div className="grid gap-4 sm:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Degree"
                    className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  <input
                    type="text"
                    placeholder="College / University"
                    className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  <input
                    type="text"
                    placeholder="Start Year"
                    className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  <input
                    type="text"
                    placeholder="End Year"
                    className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                </div>

              </div>

            </div>


            {/* Experience */}
            <div className="mt-8 border-t border-slate-800 pt-6">

              <div className="mb-4 flex items-center justify-between">

                <h2 className="text-xl font-semibold">
                  Experience
                </h2>

                <button
                  type="button"
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium hover:bg-indigo-500"
                >
                  + Add Experience
                </button>

              </div>


              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">

                <div className="space-y-4">

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  <input
                    type="text"
                    placeholder="Job Position"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">

                    <input
                      type="text"
                      placeholder="Start Date"
                      className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                    />

                    <input
                      type="text"
                      placeholder="End Date"
                      className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                    />

                  </div>

                  <textarea
                    rows="4"
                    placeholder="Describe your responsibilities and achievements..."
                    className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                </div>

              </div>

            </div>


            {/* Projects */}
            <div className="mt-8 border-t border-slate-800 pt-6">

              <div className="mb-4 flex items-center justify-between">

                <h2 className="text-xl font-semibold">
                  Projects
                </h2>

                <button
                  type="button"
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium hover:bg-indigo-500"
                >
                  + Add Project
                </button>

              </div>


              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">

                <div className="space-y-4">

                  <input
                    type="text"
                    placeholder="Project Name"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  <input
                    type="text"
                    placeholder="Project Link"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                  <textarea
                    rows="4"
                    placeholder="Describe your project..."
                    className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                  />

                </div>

              </div>

            </div>


            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                className="flex-1 rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
              >
                Save Draft
              </button>

              <button
                type="button"
                className="flex-1 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500"
              >
                Create Resume
              </button>

            </div>

          </div>


          {/* ================= PREVIEW ================= */}

          <div className="lg:sticky lg:top-6 lg:h-fit">

            <div className="mb-4 flex items-center justify-between">

              <h2 className="text-xl font-semibold">
                Resume Preview
              </h2>

              <span className="rounded-full bg-emerald-950 px-3 py-1 text-xs font-medium text-emerald-400">
                Live Preview
              </span>

            </div>


            <div className="min-h-[800px] rounded-2xl bg-white p-8 text-slate-900 shadow-2xl">

              {/* Resume Header */}
              <div className="border-b border-slate-300 pb-5">

                <h1 className="text-3xl font-bold">
                  Your Name
                </h1>

                <p className="mt-2 text-sm text-slate-600">
                  email@example.com • +91 9876543210
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  LinkedIn • GitHub • City, India
                </p>

              </div>


              {/* Summary */}
              <section className="mt-6">

                <h3 className="border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wider">
                  Profile
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Your professional summary will appear here.
                </p>

              </section>


              {/* Skills */}
              <section className="mt-6">

                <h3 className="border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wider">
                  Skills
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">

                  <span className="rounded bg-slate-100 px-2 py-1 text-xs">
                    React
                  </span>

                  <span className="rounded bg-slate-100 px-2 py-1 text-xs">
                    Node.js
                  </span>

                  <span className="rounded bg-slate-100 px-2 py-1 text-xs">
                    MongoDB
                  </span>

                </div>

              </section>


              {/* Experience */}
              <section className="mt-6">

                <h3 className="border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wider">
                  Experience
                </h3>

                <div className="mt-3">

                  <div className="flex justify-between">

                    <div>
                      <h4 className="font-semibold">
                        Job Position
                      </h4>

                      <p className="text-sm text-slate-600">
                        Company Name
                      </p>
                    </div>

                    <span className="text-xs text-slate-500">
                      2024 - Present
                    </span>

                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Your work experience description will appear here.
                  </p>

                </div>

              </section>


              {/* Education */}
              <section className="mt-6">

                <h3 className="border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wider">
                  Education
                </h3>

                <div className="mt-3 flex justify-between">

                  <div>
                    <h4 className="font-semibold">
                      Bachelor of Technology
                    </h4>

                    <p className="text-sm text-slate-600">
                      University / College
                    </p>
                  </div>

                  <span className="text-xs text-slate-500">
                    2022 - 2026
                  </span>

                </div>

              </section>


              {/* Projects */}
              <section className="mt-6">

                <h3 className="border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wider">
                  Projects
                </h3>

                <div className="mt-3">

                  <h4 className="font-semibold">
                    AI Resume Analyzer
                  </h4>

                  <p className="mt-1 text-sm text-slate-600">
                    Your project description will appear here.
                  </p>

                </div>

              </section>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CreateResume;