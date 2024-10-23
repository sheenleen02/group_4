import React, { useEffect, useRef, useState } from 'react';
import image1 from '../assets/image 1.png';
import { motion } from 'framer-motion';
import SignInForm from './SignInForm';

const Section1 = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSignInVisible, setSignInVisible] = useState(false);

  const observe = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        entry.target.classList.remove('hidden');
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observe, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const toggleSignInOverlay = () => {
    setSignInVisible(!isSignInVisible);
  };

  return (
    <section className="flex flex-col justify-around px-[10px] relative">
      {/* Main Section Content */}
      <div className="flex flex-col lg:flex-row justify-between w-full p-3 h-full">
        {/* Left Section */}
        <div className="flex-1 h-full mr-0 lg:mr-5 p-3 w-full lg:w-[50%]">
          <div ref={ref} className="" style={{ margin: '0' }}>
            {isVisible && (
              <motion.div
                initial={{ x: '-100vw', opacity: 0 }} // Start off-screen to the left
                animate={{ x: 0, opacity: 1 }} // Animate to original position
                transition={{ duration: 2 }} // Animation duration
              >
                <h1 className="text-3xl lg:text-5xl font-bold text-center pt-8">
                  The super organized and structured global
                </h1>
                <p className="mt-2 text-green-500 font-normal text-xl lg:text-3xl text-center uppercase mt-9 p-3">
                  online storefront for businesses
                </p>
                <p className="text-md lg:text-xl font-normal text-center mt-[40px] mb-[40px] p-3">
                  Create the perfect business page for ease of navigation of products purchase and payment.
                </p>
                <button
                  onClick={toggleSignInOverlay}
                  className="border-green-200 mx-auto lg:ml-[250px] text-white bg-[#48332b] rounded text-center p-3"
                >
                  Explore
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div ref={ref} className="" style={{ margin: '0' }}>
          {isVisible && (
            <motion.div
              initial={{ x: '100vw', opacity: 0 }} // Start off-screen to the right
              animate={{ x: 0, opacity: 1 }} // Animate to original position
              transition={{ duration: 2 }} // Animation duration
            >
              <div className="w-full lg:w-[50vw] h-auto lg:h-[85vh] relative">
                <img src={image1} alt="Description" className="ml-[0px] lg:ml-[100px] h-auto lg:h-[85vh] w-[70%] lg:w-[60vw]" />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Overlay for Sign In */}
      {isSignInVisible && (
        <>
          {/* Overlay Background */}
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
            onClick={toggleSignInOverlay}
          ></div>

          {/* Sign In Form */}
          <div className="flex justify-center items-center fixed inset-0 z-50">
            <SignInForm handleRegister={toggleSignInOverlay} />
          </div>
        </>
      )}
    </section>
  );
};

export default Section1;


