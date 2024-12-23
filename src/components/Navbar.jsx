import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Vector1 from "../assets/Vector1.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="z-50 p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <img
            src={Logo}
            alt="logo"
            className="MainLogo h-[calc(3vh + 1rem)] w-[calc(16vw + 2rem)]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900 font-medium flex justify-center items-center gap-2">
              Solutions <img src={Vector1} alt="" />
            </button>
            <div className="z-[99] absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Solution 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Solution 2
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Solution 3
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900 font-medium flex justify-center items-center gap-2">
              Resources <img src={Vector1} alt="" />
            </button>
            <div className="z-[99] absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Blog
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Documentation
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Tutorials
              </a>
            </div>
          </div>
          <a
            href="#about"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Contact Us
          </a>
          <a
            href="#login"
            className=" text-[#000000] px-4 py-2 rounded-[62px] border-[2px] border-[#000000] hover:bg-[#30A981] hover:text-white hover:border-transparent"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col items-start p-4 space-y-2">
            <div className="relative group w-full">
              <button className="w-full text-left text-gray-700 font-medium">
                Solutions
              </button>
              <div className="pl-4 mt-1 space-y-1">
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Solution 1
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Solution 2
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Solution 3
                </a>
              </div>
            </div>
            <div className="relative group w-full">
              <button className="w-full text-left text-gray-700 font-medium">
                Resources
              </button>
              <div className="pl-4 mt-1 space-y-1">
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Blog
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Documentation
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-800">
                  Tutorials
                </a>
              </div>
            </div>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Contact Us
            </a>
            <a
              href="#login"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full text-center"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
