import React from "react";
import { useTheme } from "../../context/ThemeContext";

function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`py-10 px-4  transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-800 text-white border-t border-gray-700' 
        : 'bg-gray-200 text-gray-900 border-t border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col items-center md:items-start">
          <img 
            className="w-24 h-24 mb-3" 
            src={isDarkMode ? "/NetGrudDarkTheme.png" : "/NetGrud.png"} 
            alt="NetGrud Logo" 
          />
          <h2 className="text-xl font-bold mb-2">Connect with alumni </h2>
          <p className={`text-sm mb-2 text-center md:text-left ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Building lifelong connections between alumni, students, and the college. Stay connected, share opportunities, and grow your network.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className={`space-y-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <li><a href="/home" className="hover:text-teal-400 transition-colors">Home</a></li>
            <li><a href="/alumni" className="hover:text-teal-400 transition-colors">Alumni</a></li>
            <li><a href="/job" className="hover:text-teal-400 transition-colors">Jobs</a></li>
            <li><a href="/news" className="hover:text-teal-400 transition-colors">News</a></li>
            <li><a href="/about" className="hover:text-teal-400 transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className={`text-sm space-y-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <li>Email: <a href="mailto:info@netgrud.com" className="hover:text-teal-400">info@netgrud.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-teal-400">+1 234 567 890</a></li>
            <li>Address: 123 College Ave, City, Country</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-3">Connect with us</h3>
          <div className="flex space-x-4 mb-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-teal-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-teal-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.633A9.936 9.936 0 0 0 24 4.557z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-teal-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm15.25 12.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-11h2.89v1.5h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v6.45z"/></svg>
            </a>
          </div>
          <span className={`text-xs ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>Follow us for updates</span>
        </div>
      </div>
      
      <div className={`border-t mt-4 pt-4 text-center text-xs ${
        isDarkMode 
          ? 'border-gray-700 text-gray-400' 
          : 'border-gray-200 text-gray-500'
      }`}>
        © 2025 Net Grud Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
