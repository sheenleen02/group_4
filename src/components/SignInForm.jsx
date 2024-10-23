// src/components/SignInForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { BsEye } from 'react-icons/bs';

const SignInForm = ({ handleRegister }) => {
  const [passWord, setpassWord] = useState("")
  const [view, setView] = useState(false)



  return (
    <div className='inset-0 w-full h-[100vh]  fixed overflow-y-hidden bg-black bg-opacity-40 flex  item-center z-[5000] '>
      <div className="bg-white text-black  p-6 rounded-lg w-[500px] bg-slate-200 z-30  top-16 ml-[400px] shadow-xl mt-5">
        <h2 className="text-center text-2xl font-bold mb-4">Sign In</h2>
        <div className="bg-green-300 shadow-lg text-black p-2 rounded-lg mb-4">
          <div className='flex text-center ml-[100px]' ><p><AiTwotoneSecurityScan size={24} /></p>
            <p className="text-center py-1 text-sm font-semibold">Your information is protected</p></div>
        </div>

        {/* Email input */}
        <div className="mb-4 justify-between relative">
          <input

            type="email"
            placeholder="email address"
            className="w-full p-2 rounded-lg text-black bg-gray-100"

          />
          <MdCancel className='absolute right-5 top-3' />
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
          <BsEye className='absolute right-5 top-3' onClick={
            () => setView((prev) => !prev)
          } />

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
          <button className=" bg-blue-400 border border-white text-white p-2 px-8 ml-[170px] rounded-lg mb-4">SIGN IN</button>
        </Link>
        <Link to='/signupForm'>
          <button className="w-full bg-transparent border border-white p-2 rounded-lg mb-4 " onClick={handleRegister} >Register</button>
        </Link>

        {/* Social Media and Location */}
        <div className="text-center text-sm text-blue-400 cursor-pointer">Trouble in signing in?</div>
        <div className="flex justify-between items-center my-4">
          <hr className="w-1/3" /> <span>Or continue with</span> <hr className="w-1/3" />
        </div>
        <div className="flex justify-center space-x-4">
          <span className="bg-blue-900 rounded text-white p-2">f</span> {/* Facebook */}
          
          <span className="bg-black text-white rounded-full p-2">X</span> {/* X */}
        </div>

        <div className="text-center mt-4">
          <span>Location:</span>
          <select className="bg-green-600 border-none text-white cursor-pointer">
            <option>Nigeria</option>
            <option value="">Ghana</option>
            <option value="">Germany</option>
            <option value="">south afric</option>
            <option value="">Austria</option>
            <option value="">Togo</option>
            <option value="">Algeria</option>
            {/* Add more locations if needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
