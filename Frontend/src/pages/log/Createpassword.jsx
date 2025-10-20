import React from 'react'
import { useTheme } from '../../context/ThemeContext'

function Createpassword() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex justify-center items-center font-['Poppins'] transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Create Password Form */}
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
            }`}>
              Create New Password
            </h1>
          </div>

          {/* Create Password Form */}
          <form className="space-y-6">
            <div className="mb-4">
              <label className={`block text-sm pl-2 font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className={`w-full h-12 px-4 rounded-xl border shadow-md focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                    : 'bg-white border-gray-50 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                }`}
              />
            </div>

            <div className="mb-4">
              <label className={`block text-sm pl-2 font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Confirm new password
              </label>
              <input
                type="password"
                placeholder="Re-enter new password"
                className={`w-full h-12 px-4 rounded-xl border shadow-md focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                }`}
              />
            </div>
            <p className={`text-md font-semibold mb-8 ml-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Create a strong password with a mix of letters, numbers and symbols</p>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-teal-500 shadow-md hover:bg-teal-600 text-white font-medium rounded-xl transition-colors"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Createpassword