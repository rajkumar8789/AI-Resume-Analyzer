import React from "react";

const Login = () => {
  return (
    <div className="">
      <h2 className="text-center font-bold text-4xl">Login Page</h2>
      <form className="flex max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
       <div className="flex flex-wrap">
         <label
          htmlFor="email"
          className=" text-gray-700 font-medium mb-1 flex items-center"
        >
          Email:{" "}
        </label>
        <input
          type="text"
          name="email"
          id=""
          className="w-full px-4 py-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-200"
        />
         <label
          htmlFor="password"
          className=" text-gray-700 font-medium mb-1 flex items-center"
        >
          
          password:{" "}
        </label>
        <input
          type="password"
          name="email"
          id=""
          className="w-full px-4 py-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-200"
        />
        <button type="submit" className="bg-amber-100 p-4 mt-3 ml-30 rounded-xl hover:bg-amber-200 text-xl font-bold cursor-pointer">Login</button>
       </div>
      </form>
    </div>
  );
};

export default Login;
