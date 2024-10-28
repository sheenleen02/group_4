import React from 'react';

const Features = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">Our Outstanding Features</h1>
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">1. User-Friendly Design</h2>
        <p className="text-gray-700 mb-4">
          We prioritize a seamless user experience by focusing on simplicity and intuitive navigation. From the very first interaction, users can effortlessly find their way around the platform. Our responsive and accessible design caters to all devices, ensuring a smooth experience whether on mobile, tablet, or desktop.
        </p>
        <ul className="list-disc ml-8 text-gray-600">
          <li>Clear and clean layout with easy-to-navigate menus</li>
          <li>Responsive design that adapts to all screen sizes</li>
          <li>Visually appealing with a modern, minimalistic approach</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">2. Secure Transactions</h2>
        <p className="text-gray-700 mb-4">
          Your security is our priority. Our platform is built with industry-standard encryption and security protocols to safeguard your data and transactions. We constantly update our security measures to meet evolving threats, ensuring that every transaction remains safe.
        </p>
        <ul className="list-disc ml-8 text-gray-600">
          <li>256-bit SSL encryption for secure data transmission</li>
          <li>Regular audits and security updates</li>
          <li>Two-factor authentication and account protection</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">3. 24/7 Customer Support</h2>
        <p className="text-gray-700 mb-4">
          Our dedicated support team is available around the clock to assist with any questions or concerns. Whether it's troubleshooting, guidance, or general assistance, our team is always ready to help you make the most of your experience on our platform.
        </p>
        <ul className="list-disc ml-8 text-gray-600">
          <li>Live chat support available 24/7</li>
          <li>Email and phone support for comprehensive assistance</li>
          <li>Extensive FAQ and knowledge base for self-service solutions</li>
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">4. Advanced Analytics</h2>
        <p className="text-gray-700 mb-4">
          Get valuable insights and real-time analytics to make informed decisions. Our platform provides an array of analytic tools to track your progress, understand customer behavior, and optimize your strategies.
        </p>
        <ul className="list-disc ml-8 text-gray-600">
          <li>Real-time reporting and analytics dashboards</li>
          <li>Customizable metrics to fit your goals</li>
          <li>Insightful data visualization for better decision-making</li>
        </ul>
      </section>
    </div>
  );
};

export default Features;

