import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const PhoneVerification = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { updateSignupData } = useAuth();

  const validatePhone = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validatePhone()) {
      updateSignupData({ phoneNumber: '+91' + phone });
      navigate('/EnterCode');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative px-4">
      
      <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-4xl flex flex-col">
        
        {/* Google Logo */}
        <div className="text-3xl font-bold mb-8">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl text-gray-800 font-semibold mb-6">
          Confirm that you're not a robot
        </h1>

        {/* Sub Heading */}
        <p className="text-gray-600 mb-4">Get a verification code sent to your phone</p>

        {/* Input */}
        <div className="flex items-center space-x-2 mb-2">
          {/* Flag Dropdown */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
            <img 
              src="https://flagcdn.com/w40/in.png" 
              alt="India Flag" 
              className="w-5 h-5 mr-2"
            />
            <span className="text-gray-700 text-sm">+91</span>
          </div>

          {/* Phone Number Input */}
          <input
            type="text"
            placeholder="Phone number"
            className="flex-1 rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Info Text */}
        <p className="text-gray-600 text-sm mb-6">
          Google will verify this number via SMS (charges may apply).
        </p>

        {/* Next Button */}
        <div className="flex justify-end">
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button 
            onClick={handleSubmit} 
            className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition"
            disabled={!phone}
          >
            Next
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full flex justify-between items-center px-8 text-gray-600 text-sm">
        <div>English (United Kingdom)</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-500">Help</a>
          <a href="#" className="hover:text-blue-500">Privacy</a>
          <a href="#" className="hover:text-blue-500">Terms</a>
        </div>
      </div>

    </div>
  );
};

export default PhoneVerification;
