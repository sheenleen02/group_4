// src/pages/Dashboard.jsx  
import React, { useEffect, useState } from 'react';  
import { Link, Outlet, useLocation } from 'react-router-dom';  
import './Dashboard.css';  
import { MdDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";

const Dashboard = () => {  
  const [activeLocation, setActiveLocation] = useState("/dashboard/products")
  const location = useLocation()

  useEffect(() => {
    setActiveLocation(location.pathname)
  }, [location])

  return (  
      <section className='md:flex-row justify-start md:justify-around p-5 bg-gray-100 min-h-screen'>   
      <div className='flex w-full'>
      <div  className=''>

       <Link to='/dashboard'> <h2 className='text-2xl font-black bg-blue-900 rounded-lg  mb-5  text-white'><MdDashboard />Dashboard</h2>   </Link>
          
          {/* Sidebar */}  
          <div className='side w-64 bg-white shadow-md rounded-lg p-6'>  
            <nav className='sticky'>  
              <ul className='flex flex-col space-y-3 '>  
                
                  <Link to="products"><li className={`text-blue-900 hover:bg-blue-500 hover:text-white  transition rounded-lg p-2 ${activeLocation === "/dashboard/products" && "bg-blue-500"}`}>  
                  Products    </li>                 </Link>  
                 
                  
                  <Link className='flex' to="transactionTable"><li className={`text-blue-900 hover:bg-blue-500 hover:text-white transition rounded-lg p-2 ${activeLocation === "/dashboard/transactionTable" && "bg-blue-500"}`}>
                   Transactions </li>  </Link>  
               
                 
                  <Link to="orders"><li className={`text-blue-900 hover:bg-blue-500 hover:text-white transition rounded-lg p-2 ${activeLocation === "/dashboard/orders" && "bg-blue-500"}`}>
                  Orders</li> </Link>  
                 
                  
                  <Link to="analytics"><li className={`text-blue-900 hover:bg-blue-500 hover:text-white transition rounded-lg p-2 ${activeLocation === "/dashboard/analytics" && "bg-blue-500"}`}>
                    Analytics </li></Link>  
                  
                    <Link to="Notification"><li className={`text-blue-900 hover:bg-blue-500 hover:text-white transition rounded-lg p-2 ${activeLocation === "/dashboard/Notification" && "bg-blue-500"}`}>
                    Notification</li></Link> 
                   
                    <Link to="profile"><li className={`text-blue-900 hover:bg-blue-500 hover:text-white transition rounded-lg p-2 ${activeLocation === "/dashboard/Profile" && "bg-blue-500"}`}>
                    profile</li></Link> 
                    <Link to="Demography"><li className={`text-blue-900 hover:bg-blue-500 hover:text-white transition rounded-lg p-2 ${activeLocation === "/dashboard/Demography" && "bg-blue-500"}`}>
                    settings</li></Link> 
              </ul>  
            </nav>  
          </div>  
        </div>

          {/* Main Content */}  
           
       <div className='bg-white flex-grow  ml-4'>  
          
       <Outlet >
       <p> </p></Outlet> {/* This is where the nested routes will render their components */} 
          </div>  
        </div>  
      </section>  
  );  
};  

export default Dashboard;