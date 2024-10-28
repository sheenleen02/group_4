import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { BsEye } from 'react-icons/bs';

const SignInForm = ({ handleRegister }) => {
  const [passWord, setpassWord] = useState("");
  const [view, setView] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-[1000] p-4 overflow-y-auto">
      <div className="bg-white text-black p-6 rounded-lg w-full max-w-lg sm:max-w-md shadow-lg mx-auto">
        <h2 className="text-center text-2xl font-bold mb-4">Sign In</h2>

        <div className="bg-green-300 shadow-lg text-black p-2 rounded-lg mb-4 flex justify-center items-center">
          <AiTwotoneSecurityScan size={24} className="mr-2" />
          <p className="text-sm font-semibold">Your information is protected</p>
        </div>

        <div className="mb-4 relative">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 rounded-lg text-black bg-gray-100"
          />
          <MdCancel className="absolute right-5 top-3 cursor-pointer" />
        </div>

        <div className="mb-4 relative">
          <input
            value={passWord}
            onChange={(e) => setpassWord(e.target.value)}
            type={view ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 rounded-lg bg-gray-100 text-black"
          />
          <BsEye
            className="absolute right-5 top-3 cursor-pointer"
            onClick={() => setView((prev) => !prev)}
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Remember Me</span>
          </div>
          <span className="text-sm text-blue-800 cursor-pointer">Forgot Password?</span>
        </div>

        <Link to="/dashboard">
          <button className="w-full bg-blue-400 text-white p-2 rounded-lg mb-4 hover:bg-blue-500 transition-all">
            SIGN IN
          </button>
        </Link>
        
        <Link to="/signupForm">
          <button
            className="w-full border border-blue-400 text-blue-400 p-2 rounded-lg mb-4 hover:bg-blue-500 hover:text-white transition-all"
            onClick={handleRegister}
          >
            Register
          </button>
        </Link>

        <div className="text-center text-sm text-blue-400 cursor-pointer mb-4">Trouble signing in?</div>
        
        <div className="flex items-center mb-4">
          <hr className="flex-grow" />
          <span className="mx-2">Or continue with</span>
          <hr className="flex-grow" />
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <span className="bg-blue-900 rounded text-white p-2 cursor-pointer">FB</span>
          <span className="bg-blue-400 rounded text-white p-2 cursor-pointer">Twitter</span>
          <span className="bg-red-500 rounded text-white p-2 cursor-pointer">Google</span>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;

