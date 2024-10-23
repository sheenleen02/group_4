// src/components/DashboardNavbar.jsx
import React, { useState } from 'react';
import { FaQuestion, FaUserCircle } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm';  // Import the SignInForm component

const DashboardNavbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignInForm = () => {
    setShowSignIn(!showSignIn); // Toggle the form's visibility
  };

  return (
    <nav className="flex justify-between items-center bg-black  text-white p-4 relative">
      <div className="text-xl font-bold">
        {/* Adjusted the logo to have part green and part white */}
        <Link to='/dashboard'>
          <span className="text-green-400 text-2xl">EAZY</span>
          <span className='uppercase text-2xl'>sto</span><span className='uppercase text-white font-2xl text-2xl'>re</span>
        </Link>
      </div>

      <div className="flex items-center">
        {/* Sign in/Register Section */}
        <div className="flex items-center mr-6 cursor-pointer" onClick={toggleSignInForm}>
          <FaUserCircle size={24} className="mr-2" />
          <span>Sign in/Register</span>
          <IoIosArrowDropdownCircle size={20} className="ml-2" />
        </div>

        {/* Help Section */}
        <div className="flex items-center cursor-pointer">
          <FaQuestion size={24} className="mr-2" />
          <span>Help</span>
        </div>
      </div>

      {/* Show SignInForm when showSignIn is true */}
      {showSignIn && <SignInForm  handleRegister={toggleSignInForm}/>}
    </nav>
  );
};

export default DashboardNavbar;




