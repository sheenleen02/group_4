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
    setShowSignIn((prev) => !prev);
    setShowHelpDropdown(false); // Close help dropdown when SignIn form is opened
  };

  const toggleHelpDropdown = () => {
    setShowHelpDropdown((prev) => !prev);
    setShowSignIn(false); // Close SignIn form when Help dropdown is opened
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-black to-gray-800 text-white p-4 shadow-md relative z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <Link to='/dashboard' className="flex items-center hover:text-green-400 transition-colors duration-300">
              <span className="text-green-400 text-3xl">EAZY</span>
              <span className="text-3xl uppercase">sto</span>
              <span className="text-white text-3xl uppercase">re</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/about" className="hover:text-green-400 transition duration-300">About</Link>
            <Link to="/features" className="hover:text-green-400 transition duration-300">Features</Link>
            <Link to="/contact" className="hover:text-green-400 transition duration-300">Contact</Link>

            <div className="relative group">
              <div
                className="flex items-center cursor-pointer hover:text-green-400 transition duration-300"
                onClick={toggleSignInForm}
              >
                <FaUserCircle size={24} className="mr-2" />
                <span>Sign in/Register</span>
                <IoIosArrowDropdownCircle size={20} className="ml-2" />
              </div>
            </div>

            <div className="relative group">
              <div
                className="flex items-center cursor-pointer hover:text-green-400 transition duration-300"
                onClick={toggleHelpDropdown}
              >
                <FaQuestion size={24} className="mr-2" />
                <span>Help</span>
                <IoIosArrowDropdownCircle size={20} className="ml-2" />
              </div>
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

          <div className="lg:hidden flex items-center">
            <FaBars size={28} className="cursor-pointer" onClick={toggleMobileMenu} />
          </div>

          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-gray-800 text-white shadow-lg lg:hidden">
              <ul className="flex flex-col items-start p-4 space-y-4">
                <li><Link to="/about" className="hover:text-green-400 transition duration-300">About</Link></li>
                <li><Link to="/features" className="hover:text-green-400 transition duration-300">Features</Link></li>
                <li><Link to="/contact" className="hover:text-green-400 transition duration-300">Contact</Link></li>
                <li onClick={toggleSignInForm} className="cursor-pointer hover:text-green-400 transition duration-300">
                  <FaUserCircle size={24} className="mr-2" />
                  <span>Sign in/Register</span>
                </li>
                <li onClick={toggleHelpDropdown} className="cursor-pointer hover:text-green-400 transition duration-300">
                  <FaQuestion size={24} className="mr-2" />
                  <span>Help</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {showSignIn && <SignInForm handleRegister={toggleSignInForm} />}
    </>
  );
};

export default DashboardNavbar;

