import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaMapMarkerAlt, FaClock, FaBuilding, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';

function JobCard({ job }) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-teal-500' 
        : 'bg-white border-gray-200 hover:border-teal-400'
    }`}>
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isDarkMode 
          ? 'from-teal-900/20 to-blue-900/20' 
          : 'from-teal-50 to-blue-50'
      }`} />
      
      <div className="relative p-5">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isDarkMode ? 'bg-teal-900' : 'bg-teal-100'
              }`}>
                <FaBuilding className={`text-lg ${
                  isDarkMode ? 'text-teal-400' : 'text-teal-600'
                }`} />
              </div>
              <div>
                <h3 className={`font-bold text-lg leading-tight ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{job.title}</h3>
                <p className={`text-sm font-medium ${
                  isDarkMode ? 'text-teal-400' : 'text-teal-600'
                }`}>{job.company}</p>
              </div>
            </div>
          </div>
          
          {/* Salary Badge */}
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
            isDarkMode 
              ? 'bg-green-900 text-green-300' 
              : 'bg-green-100 text-green-700'
          }`}>
            {job.salary}
          </div>
        </div>

        {/* Location and Type */}
        <div className="flex items-center gap-4 mb-3 text-sm">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className={`${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              {job.location}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className={`${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              {job.type}
            </span>
          </div>
          {job.isInternship && (
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              isDarkMode 
                ? 'bg-blue-900 text-blue-300' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              Internship
            </div>
          )}
        </div>

        {/* Description */}
        <p className={`text-sm mb-4 line-clamp-2 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {job.description}
        </p>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {job.skills.slice(0, 3).map((skill, index) => (
              <span key={index} className={`px-2 py-1 rounded-md text-xs font-medium ${
                isDarkMode 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {skill}
              </span>
            ))}
            {job.skills.length > 3 && (
              <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                isDarkMode 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-100 text-gray-700'
              }`}>
                +{job.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Benefits */}
        {job.benefits.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {job.benefits.slice(0, 2).map((benefit, index) => (
                <span key={index} className={`px-2 py-1 rounded-md text-xs ${
                  isDarkMode 
                    ? 'bg-teal-900/50 text-teal-300' 
                    : 'bg-teal-50 text-teal-700'
                }`}>
                  {benefit}
                </span>
              ))}
              {job.benefits.length > 2 && (
                <span className={`px-2 py-1 rounded-md text-xs ${
                  isDarkMode 
                    ? 'bg-teal-900/50 text-teal-300' 
                    : 'bg-teal-50 text-teal-700'
                }`}>
                  +{job.benefits.length - 2} benefits
                </span>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={`flex justify-between items-center pt-3 border-t ${
          isDarkMode ? 'border-gray-700' : 'border-gray-100'
        }`}>
          <div className="flex items-center gap-2">
            <FaGraduationCap className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <span className={`text-xs ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {job.alumnus} ({job.batch})
            </span>
          </div>
          
          <a 
            href={job.link} 
            className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
              isDarkMode 
                ? 'bg-teal-600 hover:bg-teal-500 text-white' 
                : 'bg-teal-500 hover:bg-teal-600 text-white'
            }`}
          >
            Apply
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
