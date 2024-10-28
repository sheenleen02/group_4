import React, { useState } from 'react';

const Profile = ({ onProfileUpdate }) => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    birthday: '',
    profilePicture: 'default-avatar.jpg',
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfile((prevProfile) => ({ ...prevProfile, profilePicture: reader.result }));
      onProfileUpdate(reader.result);
    };

    if (file) reader.readAsDataURL(file);
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Profile Setting</h2>
      
      {/* Profile Form */}
      <div className="flex flex-wrap justify-between gap-6">
        <div className="w-full lg:w-7/12 space-y-6">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">First Name</label>
              <input 
                type="text" 
                name="firstName" 
                value={profile.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded" 
                placeholder="Type here" 
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium">Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                value={profile.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded" 
                placeholder="Type here" 
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={profile.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded" 
                placeholder="Type here" 
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium">Phone</label>
              <input 
                type="tel" 
                name="phone" 
                value={profile.phone}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded" 
                placeholder="Type here" 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Address</label>
            <input 
              type="text" 
              name="address"
              value={profile.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Type here" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Birthday</label>
            <input 
              type="date" 
              name="birthday" 
              value={profile.birthday}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Type here" 
            />
          </div>
        </div>

        {/* Profile Picture and Upload */}
        <div className="w-full lg:w-4/12 flex flex-col items-center">
          <img 
            src={profile.profilePicture} 
            alt="Profile" 
            className="w-32 h-32 rounded-full mb-4 object-cover bg-gray-400" 
          />
          <label className="block">
            <input 
              type="file" 
              onChange={handleProfilePictureChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300" 
            />
          </label>
        </div>
      </div>

      {/* Save Button */}
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save changes</button>

      {/* Password and Deactivate Sections */}
      <div className="flex justify-between mt-12 border-t border-gray-300 pt-6">
        <div className="w-1/2 mr-4 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Password</h3>
          <p className="text-sm text-gray-600">You can reset or change your password by clicking here.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Change</button>
        </div>

        <div className="w-1/2 ml-4 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Remove account</h3>
          <p className="text-sm text-gray-600">You can deactivate your account by clicking here.</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">Deactivate</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;




