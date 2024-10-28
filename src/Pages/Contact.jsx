import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send formData to the backend or show a success message
    alert("Message sent successfully!");
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-center mb-6 text-gray-600">
        We would love to hear from you! Please fill out the form below or reach us on WhatsApp.
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone (Optional)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          rows="5"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="mb-2">Or you can reach us directly on WhatsApp:</p>
        <a
          href="https://wa.me/07016969298"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-semibold"
        >
          Chat with us on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Contact;

