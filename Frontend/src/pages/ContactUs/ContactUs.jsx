import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const contactImg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=800&h=800&facepad=2'; // Same as login/register placeholder

function ContactUs() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col md:flex-row items-center justify-center font-['Poppins'] transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>

      {/* Contact Form Card */}
      <div className={`w-full max-w-md rounded-2xl flex flex-col items-center justify-center p-12 border shadow-2xl backdrop-blur-md z-10 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-800/50 border-gray-700 text-white' 
          : 'bg-white/50 border-white/30 text-gray-900'
      }`}>
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className={`text-2xl font-semibold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Let's Connect</h1>
            <p className={`text-sm mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We'd love to hear from you! 
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label className={`block text-sm font-medium pl-2 mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className={`w-full h-12 px-4 rounded-xl border shadow-md focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium pl-2 mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className={`w-full h-12 px-4 rounded-xl border shadow-md focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium pl-2 mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>Message</label>
              <textarea
                placeholder="Type your message..."
                rows={4}
                className={`w-full px-4 py-2 rounded-xl border shadow-md focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                }`}
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-teal-500 shadow-md hover:bg-teal-600 text-white font-medium rounded-xl transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;