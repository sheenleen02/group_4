import React from 'react';
import { Link } from 'react-router-dom';

const StorefrontNavbar = ({ profilePicture }) => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3 md:p-4">
        {/* Left: Logo Section */}
        <Link to="/" className="flex flex-col">
          <h1 className="text-lg md:text-xl font-bold text-white">
            EAZY<span className="text-orange-500">STORE</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-400">Your number one Online StoreFront</p>
        </Link>

        {/* Center: Search Bar */}
        <div className="hidden md:flex w-2/5">
          <input
            type="text"
            placeholder="Search anything here"
            className="w-full p-2 rounded-full border border-gray-500 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Right: User Profile Section */}
        <div className="flex items-center space-x-2">
          <img
            src={profilePicture}
            alt="User Avatar"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
          <span className="hidden md:inline text-sm font-medium text-white">Admin Store</span>
        </div>
      </div>
    </nav>
  );
};

export default StorefrontNavbar;

