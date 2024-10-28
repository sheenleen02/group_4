// src/components/DashboardNavbar.jsx
import React, { useState } from 'react';
import { FaQuestion, FaUserCircle, FaBars } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm';

const DashboardNavbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showHelpDropdown, setShowHelpDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSignInForm = () => {
    setShowSignIn(!showSignIn);
  };

  const toggleHelpDropdown = () => {
    setShowHelpDropdown(!showHelpDropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-black to-gray-800 text-white p-4 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold flex items-center">
          <Link to='/dashboard' className="flex items-center hover:text-green-400 transition-colors duration-300">
            <span className="text-green-400 text-3xl">EAZY</span>
            <span className="text-3xl uppercase">sto</span>
            <span className="text-white text-3xl uppercase">re</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/about" className="hover:text-green-400 transition duration-300">
            About
          </Link>
          <Link to="/features" className="hover:text-green-400 transition duration-300">
            Features
          </Link>
          <Link to="/contact" className="hover:text-green-400 transition duration-300">
            Contact
          </Link>

          {/* Sign in/Register Section */}
          <div className="relative group">
            <div
              className="flex items-center cursor-pointer hover:text-green-400 transition duration-300"
              onClick={toggleSignInForm}
            >
              <FaUserCircle size={24} className="mr-2" />
              <span>Sign in/Register</span>
              <IoIosArrowDropdownCircle size={20} className="ml-2" />
            </div>
            {/* Dropdown for Sign In/Register */}
            {showSignIn && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 z-50">
                <SignInForm handleRegister={toggleSignInForm} />
              </div>
            )}
          </div>

          {/* Help Section */}
          <div className="relative group">
            <div
              className="flex items-center cursor-pointer hover:text-green-400 transition duration-300"
              onClick={toggleHelpDropdown}
            >
              <FaQuestion size={24} className="mr-2" />
              <span>Help</span>
              <IoIosArrowDropdownCircle size={20} className="ml-2" />
            </div>
            {/* Help Dropdown */}
            {showHelpDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 z-50">
                <ul>
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/faq" className="block">FAQ</Link>
                  </li>
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/support" className="block">Support</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          <FaBars size={28} className="cursor-pointer" onClick={toggleMobileMenu} />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-800 text-white shadow-lg lg:hidden">
            <ul className="flex flex-col items-start p-4 space-y-4">
              <li>
                <Link to="/" className="hover:text-green-400 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-green-400 transition duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400 transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <div
                  className="flex items-center cursor-pointer hover:text-green-400 transition duration-300"
                  onClick={toggleSignInForm}
                >
                  <FaUserCircle size={24} className="mr-2" />
                  <span>Sign in/Register</span>
                </div>
              </li>
              <li>
                <div
                  className="flex items-center cursor-pointer hover:text-green-400 transition duration-300"
                  onClick={toggleHelpDropdown}
                >
                  <FaQuestion size={24} className="mr-2" />
                  <span>Help</span>
                </div>
                {/* Help Dropdown for Mobile */}
                {showHelpDropdown && (
                  <div className="ml-4 mt-2 bg-white text-black rounded-lg shadow-lg p-4">
                    <ul>
                      <li className="py-1 hover:bg-gray-100">
                        <Link to="/faq" className="block">FAQ</Link>
                      </li>
                      <li className="py-1 hover:bg-gray-100">
                        <Link to="/support" className="block">Support</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNavbar;
