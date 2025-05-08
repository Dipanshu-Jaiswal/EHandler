import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const CreateGoogleAccount = () => {
    const navigate = useNavigate();
    const { updateSignupData } = useAuth();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    });
    const [error, setError] = useState('');

    const validateForm = () => {
        if (!formData.firstName.trim()) {
            setError('First name is required');
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Submitting form data:', formData);
            updateSignupData(formData);
            navigate('/BaiscInfo');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-md">
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
                <h1 className="text-2xl text-gray-800 font-semibold mb-2">Create a Google Account</h1>
                <p className="text-gray-600 mb-6">Enter your name</p>

                <div className="space-y-6">
                    <div>
                        <label className="block text-gray-700 mb-1">First name</label>
                        <input
                            type="text"
                            placeholder="First name"
                            className="w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Surname (optional)</label>
                        <input
                            type="text"
                            placeholder="Surname"
                            className="w-full rounded-md border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                    <button 
                        onClick={handleSubmit} 
                        className="bg-blue-500 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition"
                        disabled={!formData.firstName.trim()}
                    >
                        Next
                    </button>
                </div>

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

export default CreateGoogleAccount;
