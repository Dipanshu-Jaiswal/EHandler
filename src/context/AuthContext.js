import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        dateOfBirth: '',
        gender: ''
    });

    const updateSignupData = (newData) => {
        console.log('Previous signup data:', signupData);
        console.log('New data to update:', newData);
        setSignupData(prev => {
            const updated = { ...prev, ...newData };
            console.log('Updated signup data:', updated);
            return updated;
        });
    };

    const signup = async () => {
        console.log('Attempting signup with data:', signupData);
        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Signup failed');
            }

            return await response.json();
        } catch (error) {
            throw error;
        }
    };

    const value = {
        signupData,
        updateSignupData,
        signup
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
