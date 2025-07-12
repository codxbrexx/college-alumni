import React from 'react'
import PropTypes from 'prop-types'
import { FaAngleDown } from "react-icons/fa6";
import { useTheme } from '../../context/ThemeContext';

FilterButton.propTypes = {
  labelName: PropTypes.string.isRequired,
  filterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
}

function FilterButton({ labelName, filterOptions, className }) {
  const { isDarkMode } = useTheme();

  return (
    <div className={className + " relative"}>
      <select
        name={labelName}
        id={labelName}
        className={`w-full px-4 py-2 rounded-lg border shadow focus:ring-teal-400 focus:border-gray-400 transition-all duration-200 appearance-none cursor-pointer ${
          isDarkMode 
            ? 'bg-gray-700 border-gray-600 text-white' 
            : 'bg-gray-50 border-gray-300 text-teal-900'
        }`}
      >
        <option className={`${
          isDarkMode 
            ? 'bg-gray-700 text-white' 
            : 'bg-white text-teal-700'
        }`} disabled selected hidden>{labelName}</option>
        {filterOptions.map((option) => (
          <option key={option} value={option} className={`${
            isDarkMode 
              ? 'bg-gray-700 text-white hover:bg-gray-600' 
              : 'bg-white text-teal-700 hover:bg-teal-100'
          }`}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-teal-400">
        <FaAngleDown/>
      </div>
    </div>
  )
}

export default FilterButton