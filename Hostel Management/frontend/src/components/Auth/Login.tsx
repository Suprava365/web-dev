import React from 'react';
import { useNavigate } from 'react-router-dom';

const Component: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here

    // Navigate to the dashboard on successful login
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md sm:p-8">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="text-sm text-gray-600">Enter your email and password to access your account.</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="button" // Changed to "button" to prevent default form submission
            onClick={handleLogin}
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component;
