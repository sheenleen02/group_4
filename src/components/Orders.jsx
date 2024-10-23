import React, { useState } from 'react';
import fan from '../assets/fan.png';

const Orders = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('ongoing'); // Default to 'ongoing' orders

  // Function to switch tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      {/* Main container */}
      <div className="w-full max-w-4xl p-6 rounded-lg">
        
        {/* Header */}
        <h1 className="text-2xl font-semibold mb-4 text-center">Order page</h1>

        {/* Tab buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => handleTabChange('ongoing')} // Switch to ongoing orders
            className={`font-semibold py-2 px-4 rounded-lg ${
              activeTab === 'ongoing' ? 'bg-orange-500 text-white' : 'bg-white text-black border'
            }`}
          >
            Ongoing/Delivered
          </button>
          <button
            onClick={() => handleTabChange('canceled')} // Switch to canceled/returned orders
            className={`font-semibold py-2 px-4 rounded-lg ${
              activeTab === 'canceled' ? 'bg-orange-500 text-white' : 'bg-white text-black border'
            }`}
          >
            Canceled/Returned
          </button>
        </div>

        {/* Orders content based on the selected tab */}
        {activeTab === 'ongoing' ? (
          <div>
            {/* Ongoing/Delivered orders */}
            <div className="bg-gray-50 p-4 rounded-lg flex items-center shadow-md mb-4">
              {/* Image of the fan */}
              <img src={fan} alt="Oxford Fan" className="w-24 h-24 object-contain mr-4" />

              {/* Order details */}
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">Oxford Fan</h2>
                <p className="text-gray-600">Order</p>
                <p className="text-gray-600">Category: Appliance</p>
              </div>

              {/* Delivery details */}
              <div className="text-right">
                <p className="text-gray-600">Order ID: 3131311</p>
                <p className="bg-green-500 text-white font-semibold py-1 px-2 rounded-md inline-block">
                  Delivered
                </p>
                <p className="text-gray-600">On 12-20-2024</p>
              </div>
            </div>

            {/* Add more ongoing/delivered orders if needed */}
          </div>
        ) : (
          <div>
            {/* Canceled/Returned orders */}
            <div className="bg-gray-50 p-4 rounded-lg flex items-center shadow-md mb-4">
              {/* Image of the fan */}
              <img src={fan} alt="Oxford Fan" className="w-24 h-24 object-contain mr-4" />

              {/* Order details */}
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">Oxford Fan</h2>
                <p className="text-gray-600">Order</p>
                <p className="text-gray-600">Category: Appliance</p>
              </div>

              {/* Cancelation details */}
              <div className="text-right">
                <p className="text-gray-600">Order ID: 1212121</p>
                <p className="bg-red-500 text-white font-semibold py-1 px-2 rounded-md inline-block">
                  Canceled
                </p>
                <p className="text-gray-600">On 11-15-2024</p>
              </div>
            </div>

            {/* Add more canceled/returned orders if needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
