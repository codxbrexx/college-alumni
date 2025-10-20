import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export default function Login() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex justify-center items-center font-['Poppins'] transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/*  Login Form */}
      <div className={`w-full max-w-md rounded-2xl flex flex-col items-center justify-center p-12 border shadow-2xl backdrop-blur-md transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-800/50 border-gray-700 text-white' 
          : 'bg-white/50 border-white/30 text-gray-900'
      }`}>
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-2xl font-semibold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Welcome to Net Grud</h1>

            {/* Tab button */}
            <div className={`inline-flex shadow-md rounded-full p-1 mb-8 ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <button className={`px-8 py-2 rounded-full text-sm font-medium cursor-pointer ${
                isDarkMode 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-teal-500 text-white'
              }`}>Login</button>
              <button className={`px-8 py-2 rounded-full text-sm font-medium cursor-pointer ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>Register</button>
            </div>

            <p className={`text-sm mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label className={`block text-sm font-medium pl-2 mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>User name</label>
              <input
                type="text"
                placeholder="Enter your User name"
                className={`w-full h-12 px-4 rounded-xl border shadow-md focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                }`}
              />
            </div>

            <div>
              <label className={`block text-sm pl-2 font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className={`w-full h-12 px-4 rounded-xl border shadow-md focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                }`}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className={`w-4 h-4 border-gray-300 rounded focus:ring-teal-500 ${
                    isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                  }`}
                />
                <label htmlFor="remember" className={`ml-2 text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Remember me
                </label>
              </div>
              <Link to="/forgot" className={`text-sm hover:text-teal-600 transition-colors ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Forgot Password ?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-teal-400 shadow-md hover:bg-teal-500 text-white font-medium rounded-xl transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
