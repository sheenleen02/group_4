import React from 'react';

const Support = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12">
      
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">We're Here to Help</h1>
        <p className="text-lg text-gray-600">Find answers to your questions or reach out to our support team.</p>
      </div>
      
      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">How do I reset my password?</h3>
            <p className="text-gray-600 mt-2">To reset your password, go to the login page and select "Forgot Password."</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">How can I contact support?</h3>
            <p className="text-gray-600 mt-2">You can reach us via chat, email, or phone using the details below.</p>
          </div>
        </div>
      </section>
      
      {/* Support Options */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-lg text-blue-600">Live Chat</h3>
            <p className="text-gray-600">Chat with our support team 24/7</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-lg text-blue-600">Email Support</h3>
            <p className="text-gray-600">support@example.com</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="font-semibold text-lg text-blue-600">Phone Support</h3>
            <p className="text-gray-600">1-800-123-4567</p>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Submit a Request</h2>
        <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full border-gray-300 p-3 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full border-gray-300 p-3 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="w-full border-gray-300 p-3 rounded-md" rows="4"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold">Submit</button>
        </form>
      </section>
      
      {/* Knowledge Base Links */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Knowledge Base</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><a href="#" className="text-blue-600">Account Management</a></li>
          <li><a href="#" className="text-blue-600">Billing and Payments</a></li>
          <li><a href="#" className="text-blue-600">Technical Support</a></li>
        </ul>
      </section>
      
      {/* Footer Links */}
      <footer className="text-center text-gray-500 mt-12">
        <p>&copy; 2024 Company Name. <a href="#" className="text-blue-600">Privacy Policy</a> | <a href="#" className="text-blue-600">Terms of Service</a></p>
      </footer>

    </div>
  );
};

export default Support;

