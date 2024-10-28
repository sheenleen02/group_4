import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { BsEye } from 'react-icons/bs';

const SignInForm = ({ handleRegister }) => {
  const [passWord, setpassWord] = useState("");
  const [view, setView] = useState(false);

  return (
    <div className='inset-0 w-full h-screen fixed overflow-y-hidden bg-black bg-opacity-40 flex justify-center items-center z-[5000]'>
      <div className="bg-white text-black p-6 rounded-lg w-[90%] max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] bg-slate-200 z-30 shadow-xl mt-5 md:mt-0">
        <h2 className="text-center text-2xl font-bold mb-4">Sign In</h2>

        {/* Security Notice */}
        <div className="bg-green-300 shadow-lg text-black p-2 rounded-lg mb-4">
          <div className='flex justify-center items-center'>
            <AiTwotoneSecurityScan size={24} className="mr-2" />
            <p className="text-sm font-semibold">Your information is protected</p>
          </div>
        </div>

        {/* Email input */}
        <div className="mb-4 relative">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 rounded-lg text-black bg-gray-100"
          />
          <MdCancel className='absolute right-5 top-3 cursor-pointer' />
        </div>

        {/* Password input */}
        <div className="mb-4 flex relative">
          <input
            value={passWord}
            onChange={(e) => setpassWord(e.target.value)}
            type={view ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 rounded-lg bg-gray-100 text-black"
          />
          <BsEye className='absolute right-5 top-3 cursor-pointer' onClick={() => setView((prev) => !prev)} />
        </div>

        {/* Remember me and forgot password */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Remember Me</span>
          </div>
          <span className="text-sm text-blue-800 cursor-pointer">Forgot Password?</span>
        </div>

        {/* Sign In and Register Buttons */}
        <Link to='/dashboard'>
          <button className="w-full bg-blue-400 text-white p-2 rounded-lg mb-4 hover:bg-blue-500 transition-all">
            SIGN IN
          </button>
        </Link>
        <Link to='/signupForm'>
          <button className="w-full bg-transparent border border-blue-400 text-blue-400 p-2 rounded-lg mb-4 hover:bg-blue-500 hover:text-white transition-all" onClick={handleRegister}>
            Register
          </button>
        </Link>

        {/* Social Media and Location */}
        <div className="text-center text-sm text-blue-400 cursor-pointer mb-4">Trouble signing in?</div>
        <div className="flex justify-between items-center mb-4">
          <hr className="w-1/3" /> <span>Or continue with</span> <hr className="w-1/3" />
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <span className="bg-blue-900 rounded-full text-white p-2 cursor-pointer">f</span> {/* Facebook */}
          <span className="bg-black text-white rounded-full p-2 cursor-pointer">X</span> {/* X */}
        </div>

        {/* Location */}
        <div className="text-center mt-4">
          <span>Location:</span>
          <select className="bg-green-600 text-white p-2 rounded-lg cursor-pointer">
            <option>Nigeria</option>
            <option>Ghana</option>
            <option>Germany</option>
            <option>South Africa</option>
            <option>Austria</option>
            <option>Togo</option>
            <option>Algeria</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;

