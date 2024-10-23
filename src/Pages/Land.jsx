// Land.jsx  
import React, { useEffect, useRef, useState } from 'react';  
import Section1 from '../components/Section1';  
import Section2 from '../components/Section2';  
import Section4 from '../components/Section4';
import CustomDiv from '../components/CustomDiv';  
import { myData } from '../data'; // Assuming you are using myData somewhere  
import { motion } from 'framer-motion';  

const Land = () => {  
  const ref = useRef(null);  
  const [isVisible, setIsVisible] = useState(false);  

  const observe = (entries) => {  
      entries.forEach((entry) => {  
          if (entry.isIntersecting) {  
              setIsVisible(true);  
              // Stop observing after it becomes visible  
              entry.target.classList.remove('hidden');  
          }  
      });  
  };  

  useEffect(() => {  
      const observer = new IntersectionObserver(observe, {  
          threshold: 1, // Trigger when 10% of the element is visible  
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

  return (  
    <div className='overflow-hidden'>  
      <Section1 />
      <div ref={ref} className="" style={{ margin: " 0" }}>  
          {isVisible && (  
              <motion.div  
                  initial={{ x: '100vw', opacity: 0 }} // Start off-screen to the left  
                  animate={{ x: 0, opacity: 1 }} // Animate to original position  
                  transition={{ duration: 2}} // Animation duration  
              >  
                  {/* You can add content here if needed */}  
                  
                  <Section2 />     
                  
              </motion.div>  
          )}  
      </div>  


      <div ref={ref} className="" style={{ margin: " 0" }}>  
          {isVisible && (  
              <motion.div  
                  initial={{ x: '100vw', opacity: 0 }} // Start off-screen to the left  
                  animate={{ x: 0, opacity: 1 }} // Animate to original position  
                  transition={{ duration: 5}} // Animation duration  
              >  
      <CustomDiv />
      <Section4 />  
      </motion.div>  
          )}  
      </div>  
    </div>  
  );  
}  

export default Land;