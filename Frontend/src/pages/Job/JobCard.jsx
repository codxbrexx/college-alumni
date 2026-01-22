import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaMapMarkerAlt, FaClock, FaBuilding, FaGraduationCap, FaExternalLinkAlt, FaBookmark, FaRegBookmark } from 'react-icons/fa';

function JobCard({ job }) {
  const { isDarkMode } = useTheme();
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className={`group relative overflow-hidden  border shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl glass-effect ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900/80 border-red-900 hover:border-red-500/50' 
        : 'bg-white/80 border-red-100 hover:border-red-500/50'
    }`}>
      {/* Gradient Header */}
      <div className={`relative h-24 bg-gradient-to-br ${
        isDarkMode 
          ? 'from-red-700 via-red-800 to-blue-900' 
          : 'from-red-300 via-red-400 to-blue-400'
      }`}>
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Bookmark Button */}
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`absolute top-4 right-4 p-2  transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-950/50 hover:bg-gray-950/80 backdrop-blur-sm' 
              : 'bg-white/50 hover:bg-white/80 backdrop-blur-sm'
          }`}
        >
          {isBookmarked ? (
            <FaBookmark className={`w-4 h-4 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
          ) : (
            <FaRegBookmark className={`w-4 h-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
          )}
        </button>

        {/* Company Badge */}
        <div className="absolute -bottom-8 left-6">
          <div className={`w-16 h-16  shadow-lg flex items-center justify-center border-4 ${
            isDarkMode 
              ? 'bg-gray-900 border-gray-900' 
              : 'bg-white border-white'
          }`}>
            <FaBuilding className={`text-2xl ${
              isDarkMode ? 'text-red-400' : 'text-red-600'
            }`} />
          </div>
        </div>
      </div>
      
      <div className="relative p-6 pt-12">
        {/* Job Type & Internship Badge */}
        <div className="absolute top-3 right-6 flex gap-2">
          {job.isInternship && (
            <span className={`px-3 py-1  text-xs font-bold shadow ${
              isDarkMode 
                ? 'bg-blue-900/80 text-blue-300' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              Internship
            </span>
          )}
        </div>

        {/* Title and Company */}
        <div className="mb-4">
          <h3 className={`text-2xl font-bold mb-1 gradient-text leading-tight`}>
            {job.title}
          </h3>
          <p className={`text-base font-semibold ${
            isDarkMode ? 'text-red-300' : 'text-red-600'
          }`}>{job.company}</p>
        </div>

        {/* Salary Badge */}
        <div className="mb-4">
          <div className={`inline-flex items-center gap-2 px-4 py-2  font-bold text-lg shadow ${
            isDarkMode 
              ? 'bg-green-900/60 text-green-300 border border-green-700/50' 
              : 'bg-green-50 text-green-700 border border-green-200'
          }`}>
            💰 {job.salary}
          </div>
        </div>

        {/* Location, Type, and Experience */}
        <div className="grid grid-cols-1 gap-2 mb-4">
          <div className={`flex items-center gap-2 text-sm ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <FaMapMarkerAlt className={`w-4 h-4 ${
              isDarkMode ? 'text-red-400' : 'text-red-600'
            }`} />
            <span className="font-medium">{job.location}</span>
            <span className={isDarkMode ? 'text-gray-600' : 'text-gray-400'}>•</span>
            <FaClock className={`w-4 h-4 ${
              isDarkMode ? 'text-red-400' : 'text-red-600'
            }`} />
            <span className="font-medium">{job.type}</span>
          </div>
          <div className={`text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <span className="font-semibold">Experience:</span> {job.experience}
          </div>
        </div>

        {/* Description */}
        <p className={`text-base mb-4 line-clamp-2 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {job.description}
        </p>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {job.skills.slice(0, 4).map((skill, index) => (
              <span key={index} className={`px-4 py-1  text-xs font-semibold shadow ${
                isDarkMode 
                  ? 'bg-red-900/60 text-red-300 border border-red-700/50' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {skill}
              </span>
            ))}
            {job.skills.length > 4 && (
              <span className={`px-4 py-1  text-xs font-semibold ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                +{job.skills.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Benefits */}
        {job.benefits.length > 0 && (
          <div className="mb-4">
            <p className={`text-xs font-semibold mb-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Benefits:</p>
            <div className="flex flex-wrap gap-2">
              {job.benefits.slice(0, 3).map((benefit, index) => (
                <span key={index} className={`px-3 py-1  text-xs font-medium ${
                  isDarkMode 
                    ? 'bg-purple-900/50 text-purple-300' 
                    : 'bg-purple-50 text-purple-700'
                }`}>
                  ✓ {benefit}
                </span>
              ))}
              {job.benefits.length > 3 && (
                <span className={`px-3 py-1  text-xs font-medium ${
                  isDarkMode 
                    ? 'bg-purple-900/50 text-purple-300' 
                    : 'bg-purple-50 text-purple-700'
                }`}>
                  +{job.benefits.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={`flex justify-between items-center pt-4 border-t ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex items-center gap-2">
            <FaGraduationCap className={`text-base ${
              isDarkMode ? 'text-red-400' : 'text-red-600'
            }`} />
            <span className={`text-sm font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {job.alumnus}
            </span>
            <span className={`text-xs ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              ({job.batch})
            </span>
          </div>
          
          <a 
            href={job.link} 
            className={`flex items-center gap-2 px-5 py-2.5  font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover-glow ${
              isDarkMode 
                ? 'bg-red-600 hover:bg-red-500 text-white' 
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            Apply Now
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
