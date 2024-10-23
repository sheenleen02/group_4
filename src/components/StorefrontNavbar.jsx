import React from 'react';
import { Link } from 'react-router-dom'; 

const StorefrontNavbar = ({ profilePicture }) => {
  return (
    <div className="bg-white border-b border-gray-300 p-4 flex items-center justify-between">
      {/* Left: Logo Section */}
      <div className="flex flex-col">
        <Link to="/"> 
          <h1 className="text-xl font-bold">
            EAZY<span className="text-orange-500">STORE</span>
          </h1>
        </Link> 
        <p className="text-sm text-gray-500">Your number one Online StoreFront</p>
      </div>

      {/* Center: Search Bar */}
      <div className="w-2/5">
        <input
          type="text"
          placeholder="Search anything here"
          className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
        />
      </div>

      {/* Right: User Profile Section */}
      <div className="flex items-center">
      
        <div className="flex items-center">
          <img
            src={profilePicture}  // Use dynamic profile picture
            alt="User Avatar"
            className="w-[100px] h-8 rounded-full mr-2"
          />
          <span className="text-sm font-medium">Admin Store</span>
        </div>
      </div>
    </div>
  );
};

export default StorefrontNavbar;
