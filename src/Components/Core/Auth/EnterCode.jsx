import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const EnterCode = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const validateCode = () => {
    if (code.length !== 6) {
      setError('Please enter a valid 6-digit code');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateCode()) return;

    setIsLoading(true);
    setError('');

    try {
      await signup();
      // Redirect to dashboard or home page after successful signup
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to complete signup');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative px-4">
      
      <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-4xl flex flex-col md:flex-row justify-between items-start">

        {/* Left Side */}
        <div className="mb-8 md:mb-0">
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
          <h1 className="text-4xl text-gray-800 font-semibold">Enter the code</h1>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          {/* Subtext */}
          <p className="text-gray-600 mb-4">
            Enter the 6-digit verification code to confirm that you received the text message
          </p>

          {/* Input Field */}
          <div className="relative mb-6">
            <label className="absolute text-blue-500 text-sm px-2 -top-3 left-3 bg-white">
              Enter code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="G-"
            />
          </div>

          {/* Timer or Get new code */}
          <p className={`text-gray-600 mb-6 ${timer > 0 ? 'cursor-not-allowed' : 'cursor-pointer hover:text-blue-500'}`}>
            {timer > 0 ? `Get new code (${timer} seconds)` : 'Get new code'}
          </p>

          {/* Next Button */}
          <div className="flex justify-end">
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <button 
              onClick={handleSubmit}
              disabled={isLoading || code.length !== 6}
              className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Next'}
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

export default EnterCode;
