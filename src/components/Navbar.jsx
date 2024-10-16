import React from 'react';  
import { FaQuestion } from "react-icons/fa";   
import { FaUserCircle } from "react-icons/fa";  
import { IoIosArrowDropdownCircle } from "react-icons/io";  
import { Link } from 'react-router-dom';

const Navbar = () => {  
  return (  
    <nav className="flex justify-between items-center bg-black text-white p-4">  
      <div className="text-xl font-bold"> 
      <Link to='/'> EAZYstoreDASHBOARD  </Link> 
        
      </div>  
      <div className="flex items-center">  
        <div className="flex items-center mr-6 cursor-pointer">  
          <FaUserCircle size={24} className="mr-2" />  
          <span>Welcome</span>  
          <IoIosArrowDropdownCircle size={20} className="ml-2" />  
        </div>  
        <div className="flex items-center cursor-pointer">  
          <FaQuestion size={24} className="mr-2" />  
          <span>Help</span>  
        </div>  
      </div>  
    </nav>  
  );  
};  

export default Navbar;