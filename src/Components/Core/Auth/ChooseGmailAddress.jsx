import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const ChooseGmailAddress = () => {
  const [selected, setSelected] = useState('gothwalkrishna25@gmail.com');
  const navigate = useNavigate();
  const { updateSignupData } = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (selected === 'create') {
      setError('Please select an email address');
      return;
    }
    updateSignupData({ email: selected });
    navigate('/CreatePassword');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl">
        {/* Google Logo */}
        <div className="flex items-center mb-8">
          <div className="text-3xl font-bold">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl text-gray-800 font-semibold mb-2">Choose your Gmail address</h1>
        <p className="text-gray-600 mb-8">Pick a Gmail address or create your own</p>

        {/* Options */}
        <div className="space-y-6 mb-8">
          <label className="flex items-center space-x-4 cursor-pointer">
            <input
              type="radio"
              className="accent-blue-500 w-5 h-5"
              name="gmail"
              value="krishnagothwal72@gmail.com"
              checked={selected === 'krishnagothwal72@gmail.com'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className="text-gray-700 text-lg">krishnagothwal72@gmail.com</span>
          </label>

          <label className="flex items-center space-x-4 cursor-pointer">
            <input
              type="radio"
              className="accent-blue-500 w-5 h-5"
              name="gmail"
              value="gothwalkrishna25@gmail.com"
              checked={selected === 'gothwalkrishna25@gmail.com'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className="text-gray-700 text-lg">gothwalkrishna25@gmail.com</span>
          </label>

          <label className="flex items-center space-x-4 cursor-pointer">
            <input
              type="radio"
              className="accent-blue-500 w-5 h-5"
              name="gmail"
              value="create"
              checked={selected === 'create'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className="text-gray-700 text-lg">Create your own Gmail address</span>
          </label>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-between items-center">
          <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
            Use your existing email
          </a>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button 
            onClick={handleSubmit} 
            className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition"
            disabled={selected === 'create'}
          >
            Next
          </button>
        </div>

        {/* Footer */}
        <div className="flex justify-between text-sm text-gray-600 mt-8">
          <div>English (United Kingdom)</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-500">Help</a>
            <a href="#" className="hover:text-blue-500">Privacy</a>
            <a href="#" className="hover:text-blue-500">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseGmailAddress;
