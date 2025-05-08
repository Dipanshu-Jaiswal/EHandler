import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function BasicInformation() {
  const navigate = useNavigate();
  const { updateSignupData } = useAuth();
  const [formData, setFormData] = useState({
    day: '',
    month: '',
    year: '',
    gender: ''
  });
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!formData.day || !formData.month || !formData.year) {
      setError('Please enter a complete date of birth');
      return false;
    }
    if (!formData.gender) {
      setError('Please select a gender');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const dateOfBirth = `${formData.year}-${formData.month}-${formData.day}`;
      updateSignupData({ dateOfBirth, gender: formData.gender });
      navigate("/ChooseGmailAddress");
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl flex flex-col md:flex-row md:justify-between">
        {/* Left Section: Heading and Subheading */}
        <div className="flex flex-col space-y-4 mb-8 md:mb-0">
          {/* Google Logo */}
          <div className="flex items-center text-5xl font-bold">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-800">Basic information</h1>
          <p className="text-gray-600">Enter your birthday and gender</p>
        </div>

        {/* Right Section: Form */}
        <form className="flex flex-col space-y-4 w-full md:max-w-md">
          {/* Date of Birth */}
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Day"
              className="w-1/3 rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.day}
              onChange={(e) => setFormData({ ...formData, day: e.target.value })}
            />
            <select
              className="w-1/3 rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.month}
              onChange={(e) => setFormData({ ...formData, month: e.target.value })}
            >
              <option value="">Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
              {/* Add more months here */}
            </select>
            <input
              type="text"
              placeholder="Year"
              className="w-1/3 rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            />
          </div>

          {/* Gender Selection */}
          <select
            className="w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          {/* Why we ask link */}
          <a href="#" className="text-blue-500 text-sm hover:text-blue-600">
            Why we ask for birthday and gender
          </a>

          {/* Next Button */}
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSubmit}
              type="button"
              className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition"
              disabled={!formData.day || !formData.month || !formData.year || !formData.gender}
            >
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              Next
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 flex flex-col items-center w-full text-gray-600 text-xs space-y-2">
        <div>English (United Kingdom)</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500">Help</a>
          <a href="#" className="hover:text-blue-500">Privacy</a>
          <a href="#" className="hover:text-blue-500">Terms</a>
        </div>
      </div>
    </div>
  );
}