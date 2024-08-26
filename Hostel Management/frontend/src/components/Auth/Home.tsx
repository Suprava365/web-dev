import React from 'react';
import  {Link}  from 'react-router-dom'; 

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center align-center m-auto">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center">
            {/* Logo */}
            <div className="text-xl font-bold text-indigo-600">
              HostelManagement
            </div>
          </div>
          <div className="flex-grow flex justify-center">
            {/* Navbar Links */}
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white-50 hover:text-indigo-600">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white-50 hover:text-indigo-600">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-white-50 hover:text-indigo-600">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white-50 hover:text-indigo-600">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            {/* Login Button */}
            <Link to="/login">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Hostel Management System
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your one-stop solution for managing hostel accommodations with ease.
          </p>
          <Link to="/services">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200">
              Learn More
            </button>
          </Link>
        </div>
      </main>

      <footer className="bg-white shadow-md py-4">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2024 Hostel Management System. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
