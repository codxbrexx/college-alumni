import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import { IoIosAddCircleOutline } from "react-icons/io";
import { useTheme } from '../../context/ThemeContext';

function Herojob() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('jobs');
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('all');

  return (
    <div className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden">
      <img
        src="/alumnibg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className={`absolute inset-0 z-10 ${
        isDarkMode ? 'bg-teal-900/40' : 'bg-teal-200/30'
      }`} />

      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Find  Opportunity
          </h1>
          <p className={`text-xl mb-6 drop-shadow-md ${
            isDarkMode ? 'text-gray-200' : 'text-gray-800'
          }`}>
            Connect with alumni-shared jobs, internships, and career opportunities
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className={`backdrop-blur-sm rounded-full p-1 ${
            isDarkMode ? 'bg-gray-800/20' : 'bg-white/20'
          }`}>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'jobs'
                  ? isDarkMode 
                    ? 'bg-gray-700 text-white shadow-md' 
                    : 'bg-white text-teal-700 shadow-md'
                  : isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-600/80'
              }`}
            >
              Jobs
            </button>
            <button
              onClick={() => setActiveTab('internships')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'internships'
                  ? isDarkMode 
                    ? 'bg-gray-700 text-white shadow-md' 
                    : 'bg-white text-teal-700 shadow-md'
                  : isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-600/80'
              }`}
            >
              Internships
            </button>
          </div>
        </div>

        <div className={`backdrop-blur-sm rounded-2xl p-6 shadow-xl border transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-800/95 border-gray-700' 
            : 'bg-white/95 border-white/20'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Search {activeTab === 'jobs' ? 'Jobs' : 'Internships'}
              </label>
              <input
                type="text"
                placeholder={`Search by title, company, or skills...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'border-gray-200 text-gray-900'
                }`}
              >
                <option value="">All Locations</option>
                <option value="remote">Remote</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="pune">Pune</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>Type</label>
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'border-gray-200 text-gray-900'
                }`}
              >
                <option value="all">All Types</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
          </div>
                {/* tag link */}
          <div className={`mt-4 pt-4 border-t ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex flex-wrap gap-4 items-center">
              <span className={`text-sm font-medium ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>Quick Filters:</span>
              <button className={`px-3 py-1 text-xs rounded-2xl hover:bg-teal-200 transition-colors ${
                isDarkMode 
                  ? 'bg-teal-900 text-teal-300 hover:bg-teal-800' 
                  : 'bg-teal-100 text-teal-700'
              }`}>
                Remote Only
              </button>
              <button className={`px-3 py-1 text-xs rounded-2xl hover:bg-teal-200 transition-colors ${
                isDarkMode 
                  ? 'bg-teal-900 text-teal-300 hover:bg-teal-800' 
                  : 'bg-teal-100 text-teal-700'
              }`}>
                Entry Level
              </button>
              <button className={`px-3 py-1 text-xs rounded-2xl hover:bg-teal-200 transition-colors ${
                isDarkMode 
                  ? 'bg-teal-900 text-teal-300 hover:bg-teal-800' 
                  : 'bg-teal-100 text-teal-700'
              }`}>
                Alumni Referrals
              </button>
              <button className={`px-3 py-1 text-xs rounded-2xl hover:bg-teal-200 transition-colors ${
                isDarkMode 
                  ? 'bg-teal-900 text-teal-300 hover:bg-teal-800' 
                  : 'bg-teal-100 text-teal-700'
              }`}>
                Recent Posts
              </button>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button className="px-8 py-3 bg-teal-400 hover:bg-teal-500 cursor-pointer text-white font-semibold rounded-lg shadow-lg transition-colors">
              Search {activeTab === 'jobs' ? 'Jobs' : 'Internships'}
            </button>
            <Link 
              to="/post-job"
              className={`px-8 py-3 hover:bg-teal-100 cursor-pointer font-semibold rounded-lg shadow-lg transition-colors border ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-teal-400 border-teal-400' 
                  : 'bg-white text-teal-600 border-teal-600'
              }`}
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herojob;
