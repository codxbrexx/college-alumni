import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useTheme } from '../../context/ThemeContext';

function Search() {
  const { isDarkMode } = useTheme();

  return (
    <div className="w-full flex justify-center items-center">
      <div className={`w-full max-w-4xl flex items-center rounded-lg shadow-md p-2 mt-4 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-800/80 text-white' 
          : 'bg-white/80 text-gray-700'
      }`}>
        <CiSearch className={`w-6 h-6 font-semibold text-md m-2 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`} />
        <input
          className={`flex-1 px-4 py-2 rounded-l-lg outline-none bg-transparent transition-colors duration-300 ${
            isDarkMode 
              ? 'text-white placeholder-gray-400' 
              : 'text-gray-700 placeholder-gray-500'
          }`}
          placeholder="Search here"
          type="text"
        />
        <button className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-2 rounded-r-lg ml-2 transition-colors">Search</button>
      </div>
    </div>
  )
}

export default Search