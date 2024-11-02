import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <div>
        {/* <nav className="bg-blue-500 text-white py-4 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <a href="/" className="text-xl font-bold">MERN App</a>
            <div>
              <a href="/register" className="mr-4 hover:text-gray-200">Register</a>
              <a href="/login" className="hover:text-gray-200">Login</a>
            </div>
          </div>
        </nav> */}

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;