import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { name, email, password });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error(error);
      setError('Registration failed. Please check your details.');
    }
  };

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

      {/* Register Form */}
      <div className="bg-gray-100 py-16 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Register</h2>

          {error && (
            <p className="mb-4 text-center text-sm text-red-600 bg-red-100 p-2 rounded-md">{error}</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-gray-600 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg px-4 py-2 w-full transition duration-200"
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg px-4 py-2 w-full transition duration-200"
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg px-4 py-2 w-full transition duration-200"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-200"
              type="submit"
            >
              Register
            </button>

            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-500 hover:text-blue-600 font-semibold">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
