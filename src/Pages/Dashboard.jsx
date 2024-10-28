// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Dashboard = () => {
  const [activeLocation, setActiveLocation] = useState("/dashboard/products");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLocation(location.pathname);
  }, [location]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) { // Only close on mobile screens
      setSidebarOpen(false);
    }
  };

  return (
    <section className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className={`fixed md:static transition-all duration-300 ease-in-out ${sidebarOpen ? "left-0" : "-left-64"} w-64 bg-white shadow-lg rounded-lg p-6`}>
        <Link to='/dashboard' onClick={handleLinkClick}>
          <h2 className="text-2xl font-bold bg-blue-900 text-white rounded-lg mb-5 p-3 flex items-center">
            <MdDashboard className="mr-2" /> Dashboard
          </h2>
        </Link>
        <nav>
          <ul className="space-y-3">
            <li>
              <Link to="products" onClick={handleLinkClick}>
                <span className={`block p-3 rounded-lg transition-colors ${activeLocation === "/dashboard/products" ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`}>
                  Products
                </span>
              </Link>
            </li>
            <li>
              <Link to="transactionTable" onClick={handleLinkClick}>
                <span className={`block p-3 rounded-lg transition-colors ${activeLocation === "/dashboard/transactionTable" ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`}>
                  Transactions
                </span>
              </Link>
            </li>
            <li>
              <Link to="orders" onClick={handleLinkClick}>
                <span className={`block p-3 rounded-lg transition-colors ${activeLocation === "/dashboard/orders" ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`}>
                  Orders
                </span>
              </Link>
            </li>
            <li>
              <Link to="analytics" onClick={handleLinkClick}>
                <span className={`block p-3 rounded-lg transition-colors ${activeLocation === "/dashboard/analytics" ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`}>
                  Analytics
                </span>
              </Link>
            </li>
            <li>
              <Link to="notification" onClick={handleLinkClick}>
                <span className={`block p-3 rounded-lg transition-colors ${activeLocation === "/dashboard/notification" ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`}>
                  Notification
                </span>
              </Link>
            </li>
            <li>
              <Link to="profile" onClick={handleLinkClick}>
                <span className={`block p-3 rounded-lg transition-colors ${activeLocation === "/dashboard/profile" ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`}>
                  Profile
                </span>
              </Link>
            </li>
            <li>
              <Link to="demography" onClick={handleLinkClick}>
                <span className={`block p-3 rounded-lg transition-colors ${activeLocation === "/dashboard/demography" ? 'bg-blue-500 text-white' : 'text-blue-900 hover:bg-blue-500 hover:text-white'}`}>
                  Settings
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow bg-white rounded-lg shadow-lg">
        {/* Menu Button for Mobile */}
        <button className="md:hidden mb-4 p-2 text-blue-900" onClick={toggleSidebar}>
          {sidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;

