import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Social Links */}
          <div className="flex space-x-4 mb-2 sm:mb-0">
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaTwitter size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-300 text-sm">
            © {new Date().getFullYear()} MNZ
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
