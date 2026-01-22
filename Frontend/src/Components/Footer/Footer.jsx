import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import Logo from "../Logo/Logo";

function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`py-12 px-4 transition-colors duration-200 ${isDarkMode
        ? 'bg-gray-900 text-white border-t border-gray-700'
        : 'bg-white text-gray-900 border-t border-gray-200'
      }`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4">
            <Logo />
          </div>
          <p className={`text-sm text-center md:text-left ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
            Connecting alumni, students, and the college community.
          </p>
        </div>

        <div>
          <h3 className={`font-semibold mb-4 text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
            }`}>Quick Links</h3>
          <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
            <li><Link to="/home" className={`hover:${isDarkMode ? 'text-red-400' : 'text-red-600'} transition-colors`}>Home</Link></li>
            <li><Link to="/alumni" className={`hover:${isDarkMode ? 'text-red-400' : 'text-red-600'} transition-colors`}>Alumni</Link></li>
            <li><Link to="/job" className={`hover:${isDarkMode ? 'text-red-400' : 'text-red-600'} transition-colors`}>Jobs</Link></li>
            <li><Link to="/news" className={`hover:${isDarkMode ? 'text-red-400' : 'text-red-600'} transition-colors`}>News</Link></li>
            <li><Link to="/placement" className={`hover:${isDarkMode ? 'text-red-400' : 'text-red-600'} transition-colors`}>Placements</Link></li>
          </ul>
        </div>

        <div>
          <h3 className={`font-semibold mb-4 text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
            }`}>Company</h3>
          <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
            <li><Link to="/about" className={`hover:${isDarkMode ? 'text-red-400' : 'text-red-600'} transition-colors`}>About Us</Link></li>
            <li><Link to="/contact" className={`hover:${isDarkMode ? 'text-red-400' : 'text-red-600'} transition-colors`}>Contact</Link></li>
            <li><a href="#" className={`hover:${isDarkMode ? 'text-red-400' : 'text-red-600'} transition-colors`}>Privacy Policy</a></li>
            <li><a href="#" className={`hover:${isDarkMode ? 'text-red-400' : 'text-red-600'} transition-colors`}>Terms of Service</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className={`font-semibold mb-4 text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
            }`}>Connect With Us</h3>
          <div className="flex space-x-3 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={`p-2  transition-all ${isDarkMode
                  ? 'bg-gray-700 hover:bg-red-600 text-gray-300'
                  : 'bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700'
                }`}
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className={`p-2  transition-all ${isDarkMode
                  ? 'bg-gray-700 hover:bg-red-600 text-gray-300'
                  : 'bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700'
                }`}
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`p-2  transition-all ${isDarkMode
                  ? 'bg-gray-700 hover:bg-red-600 text-gray-300'
                  : 'bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700'
                }`}
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`p-2  transition-all ${isDarkMode
                  ? 'bg-gray-700 hover:bg-red-600 text-gray-300'
                  : 'bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700'
                }`}
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
          <p className={`text-xs text-center md:text-left ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
            Email: info@netgrud.com<br />
            Phone: +1 234 567 890
          </p>
        </div>
      </div>

      <div className={`border-t mt-8 pt-6 text-center text-sm ${isDarkMode
          ? 'border-gray-700 text-gray-400'
          : 'border-gray-200 text-gray-500'
        }`}>
        <p>© 2026 NetGrud. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
