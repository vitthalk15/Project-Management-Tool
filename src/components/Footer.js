import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center dark:bg-gray-900">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://linkedin.com/in/vitthalk15" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a href="https://www.github.com/vitthalk15" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaGithub className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/vitthalk_15" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaInstagram className="w-6 h-6" />
        </a>
        <a href="https://t.me/vemonk_15" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaTelegram className="w-6 h-6" />
        </a>
      </div>
      <p className="text-sm">&copy; 2024 Vitthal Kendre. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
