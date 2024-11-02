import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold tracking-wide">MERN App</Link>
          <div>
            <Link to="/register" className="mr-4 hover:text-gray-200 transition duration-300">Register</Link>
            <Link to="/login" className="hover:text-gray-200 transition duration-300">Login</Link>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="bg-gray-100 py-20 min-h-screen flex items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-10 text-center">
          <h1 className="text-4xl font-bold text-gray-700 mb-6">Welcome to the LNRP App</h1>
          <p className="text-gray-600 mb-8">Please login or register to continue.</p>
          
          <div className="flex justify-center space-x-4">
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
