import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center dark:bg-gray-900">
      <div className="flex items-center space-x-4">
        <a href="portfolio-website-red-one-41.vercel.app"><img src="/logo.png" alt="Logo" className="h-8" /></a>
        <div className="text-2xl font-bold">Project Management Tool</div>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'border-b-2 border-blue-500' : '')}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'border-b-2 border-blue-500' : '')}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'border-b-2 border-blue-500' : '')}>Contact</NavLink>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => navigate('/new-project')} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create New Project
        </button>
        <button onClick={toggleTheme} className="text-2xl">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
