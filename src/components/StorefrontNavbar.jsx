import React from 'react';
import { Link } from 'react-router-dom';

const StorefrontNavbar = ({ profilePicture }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Left: Logo Section */}
        <Link to="/" className="flex flex-col">
          <h1 className="text-xl font-bold">
            EAZY<span className="text-orange-500">STORE</span>
          </h1>
          <p className="text-sm text-gray-500">Your number one Online StoreFront</p>
        </Link>

        {/* Center: Search Bar */}
        <div className="w-2/5">
          <input
            type="text"
            placeholder="Search anything here"
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Right: User Profile Section */}
        <div className="flex items-center space-x-2">
          <img
            src={profilePicture} // Use dynamic profile picture
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-sm font-medium">Admin Store</span>
        </div>
      </div>
    </nav>
  );
};

export default StorefrontNavbar;
