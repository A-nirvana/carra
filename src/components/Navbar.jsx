import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest('.dropdown-container') &&
        !event.target.closest('.toggle-btn')
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex absolute items-center justify-between p-4 bg-[#001A1a96] text-white w-full z-50">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img src="/assets/Customer.png" alt="Logo" className="pl-32" />
      </div>
      <ul className="flex items-center space-x-6 gap-4">
        {['Home', 'Fleet', 'Book Trips', 'About Us', 'FAQs'].map((item, index) => (
          <li key={index} className="relative group flex items-center justify-center">
            <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
            <a
              href={`${item.toLowerCase().replace(' ', '')}`}
              className="relative px-4 py-4 z-10 flex items-center justify-center text-xl"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex items-center space-x-6">
        <li className={`relative group ${showDropdown ? 'active' : ''}`}>
          <a
            className={`relative flex items-center px-4 py-4 z-10 cursor-pointer toggle-btn ${
              showDropdown ? 'bg-[#d9d9d9] rounded-lg' : ''
            }`}
            onClick={toggleDropdown}
          >
            <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <img src="/assets/Vector.png" alt="Vector" className="h-5 w-5 relative z-10" />
          </a>
          {showDropdown && (
            <div className="absolute top-full right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg dropdown-container">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                >
                  <span onClick={() => navigate('/signin')} className="hover:underline">
                    Sign In
                  </span>
                  <span>/</span>
                  <span onClick={() => navigate('/login')} className="hover:underline">
                    Log In
                  </span>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="relative group flex items-center justify-center">
          <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
          <a className="relative flex items-center px-4 py-4 z-10 cursor-pointer">
            <img src="./assets/Customer.png" alt="Customer" className="h-7 w-7" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
