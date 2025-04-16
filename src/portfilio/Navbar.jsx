import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:py-4 pt-4 md:pt-6">
        <div className="flex justify-between">
          <div className="flex items-center">

          
        <div className="orbitron-uniquifier flex-shrink-0 pt-1">
             <a className="no-underline text-green-600 font-bold text-3xl" href="#hero"> MNZ</a>
            </div>
            </div>
          <div className="flex items-center">
          
            <div className="hidden md:flex space-x-8 ml-10">
              <a
                href="#about"
                className="text-sm  no-underline font-bold text-gray-700 hover:text-green-600"
              >
                ABOUT ME
              </a>
              <a href="#skills" className="text-sm font-bold no-underline text-gray-700 hover:text-green-600">
                SKILLS
              </a>
              <a
                href="#projects"
                className="text-sm no-underline font-bold text-gray-700 hover:text-green-600"
              >
                PROJECTS
              </a>
              <a
                href="#services"
                className="text-sm no-underline font-bold text-gray-700 hover:text-green-600"
              >
                SERVICES
              </a>
              <a href="#contact" className="text-sm no-underline font-bold text-gray-700 hover:text-green-600">
                CONTACT ME
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href="#hire"
              className="text-base no-underline font-bold bg-green-600 text-white px-4 py-2 mt-1 rounded hover:bg-green-700"
            >
              Contact Us
            </a>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <a href="#about" className="no-underline font-medium text-gray-700">
              ABOUT ME
            </a>
            <a href="#skills" className="no-underline font-medium text-gray-700">
              SKILLS
            </a>
            <a href="#projects" className="no-underline font-medium text-gray-700">
              PROJECTS
            </a>
            <a href="#services" className="no-underline font-medium text-gray-700">
              SERVICES
            </a>
            <a href="#contact" className="no-underline font-medium text-gray-700">
              CONTACT ME
            </a>
            <a
              href="#hire"
              className="orbitron-uniquifier text-center no-underline font-medium bg-green-600 text-white px-4 py-2 rounded"
            >
             Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
