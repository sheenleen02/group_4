import React from 'react';
import { motion } from 'framer-motion';

const Section2 = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      {/* Title and Introduction */}
      <div className="text-center max-w-4xl mx-auto px-5 mb-16">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          className="text-xl lg:text-2xl text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          We provide tailored solutions that will transform your business, leveraging the latest technologies for seamless user experiences.
        </motion.p>
      </div>

      {/* Key Features Section */}
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        {[
          { title: 'Customized Solutions', description: 'Tailored solutions to meet your unique business needs, ensuring top performance.' },
          { title: 'Advanced Technology', description: 'Leverage cutting-edge technologies to stay ahead of the competition.' },
          { title: 'Dedicated Support', description: 'Our dedicated team is here to provide you with the support you need 24/7.' },
          { title: 'Seamless Integration', description: 'Integrate with existing platforms and workflows for a smooth transition.' },
          { title: 'Scalable Infrastructure', description: 'Our solutions grow with your business, ensuring long-term success.' },
          { title: 'User-Centric Design', description: 'We focus on delivering an exceptional user experience to drive engagement.' },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonial Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-5 text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">Hear from businesses we've helped elevate to the next level.</p>
        </div>
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: 'John Doe', feedback: 'This platform has revolutionized our operations, boosting efficiency and customer satisfaction.' },
            { name: 'Jane Smith', feedback: 'Their support team is phenomenal, always available to help whenever we need them.' },
            { name: 'Michael Johnson', feedback: 'The integration process was seamless, and the solution scales perfectly with our growing business.' },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg  text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <p className="text-xl font-semibold mb-4">"{testimonial.feedback}"</p>
              <p className="text-gray-500">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-6xl mx-auto px-5 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {[
          { stat: '10+', label: 'Years of Experience' },
          { stat: '500+', label: 'Satisfied Clients' },
          { stat: '100%', label: 'Customer Satisfaction' },
          { stat: '24/7', label: 'Support Availability' },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-blue-600 text-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <h3 className="text-4xl font-bold mb-2">{item.stat}</h3>
            <p className="text-xl">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center py-10 bg-gray-900 text-white">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Take Your Business to the Next Level?</h2>
        <p className="text-lg mb-8">Contact us today and let’s get started!</p>
        <button className="bg-blue-600 py-3 px-6 rounded-lg text-white hover:bg-blue-700 transition-all">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Section2;


