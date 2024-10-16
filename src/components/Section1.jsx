import React from 'react';  
import image1 from '../assets/image 1.png';  
import { Link } from 'react-router-dom';

const Section1 = () => {  
  return (  
    <section className='flex flex-col justify-around'>


    <div className="flex justify-between  p-3 h-[100%] ">  
      <div className="flex-1 h-[100%] mr-5 p-3 w-[50%]">  
        <h1 className="text-6xl font-bold text-center font-semibold pt-8 ">The super organized and structured   global</h1>  
        <p className="mt-2 text-blue-600 font-normal text-3xl text-center p-3">online storefront for business</p>  
        <p className='text-xl font-normal text-center p-3'>create the perfect business page for ease of navigation of products purchase and payment </p>
       <button className='border-green-200 ml-[300px] bg-red-400  rounded text-center p-2'> 
        <Link to='/dashboard'> Explore</Link>
       </button>
      </div>  
      <div className=" w-[50vwl h-[100%] ">  
        <img src={image1} alt="Description" className="" />  
      </div>  
    </div>  



    </section>
  );  
};  

export default Section1;
