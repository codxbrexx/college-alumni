import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaMapMarkerAlt, FaClock, FaBuilding, FaGraduationCap, FaExternalLinkAlt, FaBookmark, FaRegBookmark } from 'react-icons/fa';

function JobCard({ job }) {
  const { isDarkMode } = useTheme();
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className={`group relative border transition-all duration-300 hover:shadow-sm hover:border-red-600 ${isDarkMode
        ? 'bg-gray-900 border-gray-800'
        : 'bg-white border-gray-200'
      }`}>

      {/* Top Accent Line (Optional, or left border) - We use Left Border to match Alumni */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-700 transition-all group-hover:w-2"></div>

      <div className="p-8 pl-10">

        {/* Header: Company Icon & Bookmark */}
        <div className="flex justify-between items-start mb-6">
          <div className={`w-16 h-16 flex items-center justify-center border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-red-500' : 'bg-gray-50 border-gray-100 text-red-700'
            }`}>
            <FaBuilding className="text-3xl" />
          </div>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`transition-colors text-xl ${isBookmarked
                ? 'text-red-600'
                : isDarkMode ? 'text-gray-600 hover:text-white' : 'text-gray-300 hover:text-gray-600'
              }`}
          >
            {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        </div>

        {/* Content */}
        <div className="mb-6">
          {/* Tags */}
          <div className="flex gap-2 mb-3">
            {job.isInternship && (
              <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 ${isDarkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-50 text-blue-700'
                }`}>
                Internship
              </span>
            )}
            <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 ${isDarkMode ? 'bg-red-900/40 text-red-300' : 'bg-red-50 text-red-700'
              }`}>
              {job.type}
            </span>
          </div>

          <h3 className={`text-2xl font-bold font-serif mb-2 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
            {job.title}
          </h3>
          <p className={`text-lg font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>{job.company}</p>

          <div className={`flex items-center gap-4 text-sm mt-4 pb-4 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-100'
            } ${isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt /> {job.location}
            </span>
            <span className="flex items-center gap-2">
              <FaClock /> {job.experience}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 line-clamp-3 font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
          {job.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-black text-white'
              }`}>
              {job.alumnus.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Referral By</span>
              <span className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{job.alumnus} '{job.batch.slice(2)}</span>
            </div>
          </div>

          <a
            href={job.link}
            className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4 decoration-red-600 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
          >
            Apply <FaExternalLinkAlt className="text-xs text-red-600" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default JobCard;
