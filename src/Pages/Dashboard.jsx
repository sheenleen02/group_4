// src/pages/Dashboard.jsx  
import React from 'react';  
import { Link, Outlet } from 'react-router-dom';  
import './Dashboard.css';  

const Dashboard = () => {  
  return (  
      <section className='md:flex-row justify-start md:justify-around p-5 bg-gray-100 min-h-screen'>   
      <div className='flex w-full'>
      <div  className=''>

        <h2 className='text-2xl font-bold mb-5'>Dashboard</h2>   
          
          {/* Sidebar */}  
          <div className='side w-64 bg-white shadow-md rounded-lg p-6'>  
            <nav>  
              <ul className='flex flex-col space-y-3'>  
                <li className='text-blue-900 hover:bg-blue-500 hover:text-white transition rounded-lg p-2'>  
                  <Link to="products">Products</Link>  
                </li>  
                <li className='text-blue-900 hover:bg-blue-500 hover:text-white transition rounded-lg p-2'>  
                  <Link to="transaction">Transactions</Link>  
                </li>  
                <li className='text-blue-900 hover:bg-blue-500 hover:text-white transition rounded-lg p-2'>  
                  <Link to="orders">Orders</Link>  
                </li>  
                <li className='text-blue-900 hover:bg-blue-500 hover:text-white transition rounded-lg p-2'>  
                  <Link to="analytics">Analytics</Link>  
                </li>  
                <li className='text-blue-900 hover:bg-blue-500 hover:text-white transition rounded-lg p-2'>  
                  <Link to="notification">Notifications</Link>  
                </li>  
                <li className='text-blue-900 hover:bg-blue-500 hover:text-white transition rounded-lg p-2'>  
                  <Link to="demography">Demography</Link>  
                </li>  
              </ul>  
            </nav>  
          </div>  
        </div>

          {/* Main Content */}  
          <div className='bg-green-300  rounded-lg flex-grow  ml-4'>  
            <Outlet /> {/* This is where the nested routes will render their components */}  
          </div>  
        </div>  
      </section>  
  );  
};  

export default Dashboard;