import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here, such as password matching
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!formData.acceptedTerms) {
      alert('You must accept the terms and conditions');
      return;
    }

    console.log('Form submitted', formData);
    // You can now send formData to your backend or API
  };

  return (
    <div className="flex justify-center items-center bg-gray-300 min-h-screen w-full">
      <div className="bg-white border border-gray-200 text-black text-center w-[90%] max-w-xl my-10 pt-10 pb-10 rounded-2xl shadow-lg">
        <h1 className="mb-8 font-bold text-4xl">Create an Account</h1>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-5">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-[80%] p-3 rounded-full border border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-[80%] p-3 rounded-full border border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-[80%] p-3 rounded-full border border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-5">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-[80%] p-3 rounded-full border border-gray-300 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="mb-5 flex items-center justify-center gap-2">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="h-4 w-4"
              required
            />
            <label className="text-gray-600 text-sm">
              I accept the <a href="#" className="text-blue-500">terms and conditions</a>.
            </label>
          </div>

          {/* Sign-Up Button */}
          <div className="mb-5">
            <Link to='/dashboard'>
            <button
              type="submit"
              className="bg-green-500 text-white w-[80%] py-3 rounded-full hover:bg-green-600 transition duration-200"
              >
              Sign Up
            </button>
              </Link>
          </div>

          {/* Agreement Text */}
          <p className="mb-5 text-sm text-gray-600 w-[85%] mx-auto">
            By signing up, you agree to our <a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-500">Terms of Service</a>.
          </p>

          {/* Sign-in Redirection */}
          <p className="text-gray-600">
            Already have an account? <a href="#" className="text-blue-500">Sign in</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
