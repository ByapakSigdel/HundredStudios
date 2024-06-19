import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex items-center justify-between p-5 bg-[#1b1b1a] sticky top-0 z-50 border-b border-gray-700">
      <div className="flex items-center">
        <a href="/" className="ml-5">
          <img className="h-14" loading="lazy" alt="Logo" src={logo} />
        </a>
      </div>

      {/* Hamburger menu for smaller screens */}
      {!isSidebarOpen && (
        <div className="block lg:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-300 focus:outline-none focus:bg-gray-700 p-2 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Navbar links for larger screens */}
      <nav className="hidden lg:flex flex-1 justify-between items-center space-x-8 text-lg">
        {/* Navigation links centered */}
        <div className="flex justify-center flex-1">
          <a
            href="/"
            className={`py-2 px-4 rounded-lg ${
              currentPath === '/' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Home
          </a>
          <a
            href="/services"
            className={`py-2 px-4 rounded-lg ${
              currentPath === '/services' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Services
          </a>
          <a
            href="/works"
            className={`py-2 px-4 rounded-lg ${
              currentPath === '/works' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Work
          </a>
          <a
            href="/about"
            className={`py-2 px-4 rounded-lg ${
              currentPath === '/about' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            About
          </a>
        </div>

        {/* Contact Us button aligned to the right */}
        <div>
          <a
            href="/contact"
            className="py-2 px-4 bg-blue-600 rounded-lg text-white hover:bg-blue-500"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Sidebar for smaller screens */}
      <nav
        className={`${
          isSidebarOpen ? 'left-0' : '-left-full'
        } lg:hidden top-0 bg-[#1b1b1a] text-white w-64 min-h-screen fixed overflow-y-auto transition-all duration-300 z-50`}
      >
        <div className="flex items-center justify-between p-5">
          <a href="/" className="ml-5">
            <img className="h-14" loading="lazy" alt="Logo" src={logo} />
          </a>
          <button
            onClick={toggleSidebar}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-8">
          <a
            href="/"
            className={`py-2 px-4 rounded-lg ${
              currentPath === '/' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Home
          </a>
          <a
            href="/services"
            className={`py-2 px-4 rounded-lg ${
              currentPath === '/services' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Services
          </a>
          <a
            href="/works"
            className={`py-2 px-4 rounded-lg ${
              currentPath === '/works' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Work
          </a>
          <a
            href="/about"
            className={`py-2 px-4 rounded-lg ${
              currentPath === '/about' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            About
          </a>
          {/* Contact Us button in sidebar */}
          <a
            href="/contact"
            className="py-2 px-4 bg-blue-600 rounded-lg text-white hover:bg-blue-500 w-full block text-center"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
