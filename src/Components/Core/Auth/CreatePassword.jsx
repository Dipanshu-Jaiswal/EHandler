import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { updateSignupData } = useAuth();

  const validatePassword = () => {
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validatePassword()) {
      updateSignupData({ password });
      navigate('/PhoneVerification');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-4xl flex items-center">
        
        {/* Left Side - Text */}
        <div className="w-1/2">
          {/* Google Logo */}
          <div className="text-3xl font-bold mb-8">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </div>

          <h1 className="text-4xl text-gray-800 font-semibold mb-4">Create a strong password</h1>
          <p className="text-gray-600 text-base">
            Create a strong password with a mixture of letters, numbers and symbols
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 flex flex-col space-y-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm"
            className="w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <label className="flex items-center space-x-2 text-gray-700 text-sm">
            <input
              type="checkbox"
              className="w-4 h-4 accent-blue-500"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <span>Show password</span>
          </label>

          <div className="flex justify-end mt-4">
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <button  
              onClick={handleSubmit} 
              className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition"
              disabled={!password || !confirmPassword}
            >
              Next
            </button>
          </div>
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

export default CreatePassword;
