import React, { useState, useEffect } from 'react';
import image1 from '../assets/image 1.jpg';
import image2 from '../assets/image 2.jpg';
import image3 from '../assets/image 3.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; 

const Section1 = () => {
  const [isSignInVisible, setSignInVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];

  const toggleSignInOverlay = () => {
    setSignInVisible(!isSignInVisible);
  };

  // Automatically switch images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <section className="flex flex-col justify-center items-center px-0 relative   mb-10 h-full
    bg-gray-100 overflow-hidden ">
      {/* Flex container for text and image */}
      <div className="flex flex-col md:left lg:flex-row  px-[120px] pt-[100px]
       lg:space-y-0 lg:space-x-1"> {/* Reduced space-x-10 to space-x-4 */}
        
        {/* Main Text Section */}
        <div className="flex-1 lg:text-left">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Elevate Your Business
          </motion.h1>
          
          <motion.p
            className="mt-5 text-xl lg:text-2xl text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Create stunning, seamless online experiences that captivate and convert. 
            Showcase your brand with elegance.
          </motion.p>

          <motion.h2
            className="mt-8 text-2xl lg:text-3xl font-semibold text-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Transform Your Presence
          </motion.h2>

          <motion.p
            className="mt-4 text-lg lg:text-xl text-gray-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Stand out with custom designs and performance-driven solutions.
             Your digital identity, amplified.
          </motion.p>

          <button
            className="mt-8 bg-blue-600 text-white py-3 px-8 
            rounded-lg hover:bg-blue-800 transition-all"
          >
            <Link to='/signupForm'>
            Get Started
            </Link>
          </button>
        </div>

        {/* Image Slider Section */}
        <div className="flex-1 w-full h-96 lg:h-full flex items-center 
        justify-center">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-[400px] flex items-center justify-center"
            >
              <img
                src={images[currentIndex]}
                alt={`Business Image ${currentIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Overlay for Sign In */}
      {isSignInVisible && (
        <>
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50"
            onClick={toggleSignInOverlay}
          ></div>
          <div className="flex justify-center items-center fixed inset-0 z-50">
            {/* You can place a SignInForm component or similar here */}
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <SignInForm handleRegister={toggleSignInOverlay} />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Section1;
