import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/user/register",
        {
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        },
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="">
      <h2 className="text-center font-bold text-4xl">Register Page</h2>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
      >
        <div className="flex flex-wrap">
          <label
            htmlFor="email"
            className=" text-gray-700 font-medium mb-1 flex items-center"
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            id=""
            className="w-full px-4 py-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-200"
          />
          <label
            htmlFor="password"
            className=" text-gray-700 font-medium mb-1 flex items-center"
          >
            Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="password"
            value={formData.password}
            onChange={handleChange}
            id=""
            className="w-full px-4 py-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-200"
          />
          <button
            type="submit"
            className="bg-amber-100 p-4 mt-3 ml-30 rounded-xl hover:bg-amber-200 text-xl font-bold cursor-pointer"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
