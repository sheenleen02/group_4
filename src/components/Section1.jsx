import React, { useState, useEffect } from 'react';
import image1 from '../assets/image 1.jpg';
import image2 from '../assets/image 3.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Section1 = () => {
  const [isSignInVisible, setSignInVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2];

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
    <section className="flex flex-col lg:flex-row justify-center items-center px-0 relative mb-10 h-full bg-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row lg:flex-row items-center px-4 lg:px-[120px] pt-5 lg:pt-[100px] lg:space-y-0 lg:space-x-4 space-y-4 lg:space-y-0">
        
        <div className="flex-1 lg:text-left text-center md:text-left">
          <motion.h1
            className="text-2xl md:text-3xl lg:text-6xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Elevate Your Business
          </motion.h1>
          
          <motion.p
            className="mt-3 md:mt-5 text-base md:text-lg lg:text-2xl text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Create stunning, seamless online experiences that captivate and convert. Showcase your brand with elegance.
          </motion.p>
    
          <motion.h2
            className="mt-6 md:mt-8 text-lg md:text-2xl lg:text-3xl font-semibold text-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Transform Your Presence
          </motion.h2>
    
          <motion.p
            className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-gray-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Stand out with custom designs and performance-driven solutions. Your digital identity, amplified.
          </motion.p>
    
          <button
            className="mt-6 md:mt-8 bg-blue-600 text-white py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-blue-800 transition-all"
          >
            <Link to='/signupForm'>Get Started</Link>
          </button>
        </div>
    
        <div className="flex-1 w-full h-80 lg:h-full flex items-center justify-center">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 0.9 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full flex items-center justify-center"
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
    </section>
  );
};

export default Section1;
