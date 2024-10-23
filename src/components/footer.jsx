import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4"><span className='text-green-300'>Eazy</span>Store</h3>
          <p className="text-gray-400 mb-4">
            Leading the way in providing top-notch services across multiple industries. We aim to deliver quality and satisfaction.
          </p>
          <p className="text-gray-400">&copy; 2024 Company Name. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#services" className="hover:text-gray-400">Services</a></li>
            <li><a href="#careers" className="hover:text-gray-400">Careers</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">123 Business St, Business City, BC 12345</p>
          <p className="text-gray-400 mt-2">Email: easystores@company.com</p>
          <p className="text-gray-400 mt-2">Phone: 0701699298</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" className="text-white hover:text-gray-400"><FaFacebookF /></a>
            <a href="https://twitter.com" className="text-white hover:text-gray-400"><FaTwitter /></a>
            <a href="https://instagram.com" className="text-white hover:text-gray-400"><FaInstagram /></a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-400"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-4">Get the latest updates and offers delivered to your inbox.</p>
          <form className="flex flex-col">
            <input
              type="email"
              className="p-2 rounded mb-4 bg-gray-800 text-white placeholder-gray-500"
              placeholder="Enter your email"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
        <p>
          Privacy Policy | Terms of Service
        </p>
      </div>
    </footer>
  );
};

export default Footer;
