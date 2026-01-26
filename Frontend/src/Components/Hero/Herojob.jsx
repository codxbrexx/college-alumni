import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

function Herojob({
  searchQuery, setSearchQuery,
  location, setLocation,
  jobType, setJobType,
  activeTab, setActiveTab
}) {
  const { isDarkMode } = useTheme();

  return (
    <div className="w-full font-sans">
      {/* Institutional Top Bar */}
      <div className={`py-6 border-b-4 border-red-600 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">NetGrud College Resource</p>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">
                Career Center
              </h1>
              <p className="text-zinc-400 max-w-xl text-sm md:text-base font-light">
                Exclusive professional opportunities from our alumni network and partner organizations.
              </p>
            </div>

            {/* Tab Switcher - Sharp & Integrated */}
            <div className="flex border-2 border-white/20">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'jobs'
                  ? 'bg-red-600 text-white'
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                Jobs
              </button>
              <button
                onClick={() => setActiveTab('internships')}
                className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'internships'
                  ? 'bg-red-600 text-white'
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                Internships
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar - Sharp & Professional */}
      <div className={`border-b ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">

            {/* Search Input */}
            <div className="md:col-span-5">
              <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Role / Company
              </label>
              <div className={`flex items-center gap-3 border-2 px-4 py-3 bg-transparent transition-colors ${isDarkMode ? 'border-gray-600 focus-within:border-red-500' : 'border-gray-300 focus-within:border-red-600 bg-gray-50'}`}>
                <FaSearch className={isDarkMode ? 'text-gray-400' : 'text-gray-400'} />
                <input
                  type="text"
                  placeholder="Backend Engineer, Google..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full bg-transparent outline-none font-medium placeholder-gray-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                />
              </div>
            </div>

            {/* Location Input */}
            <div className="md:col-span-3">
              <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Location
              </label>
              <div className={`flex items-center gap-3 border-2 px-4 py-3 bg-transparent transition-colors ${isDarkMode ? 'border-gray-600 focus-within:border-red-500' : 'border-gray-300 focus-within:border-red-600 bg-gray-50'}`}>
                <FaMapMarkerAlt className={isDarkMode ? 'text-gray-400' : 'text-gray-400'} />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={`w-full bg-transparent outline-none font-bold cursor-pointer appearance-none ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  <option value="" className="text-black">Any Location</option>
                  <option value="remote" className="text-black">Remote</option>
                  <option value="bangalore" className="text-black">Bangalore</option>
                  <option value="delhi" className="text-black">Delhi</option>
                  <option value="mumbai" className="text-black">Mumbai</option>
                  <option value="us" className="text-black">United States</option>
                </select>
              </div>
            </div>

            {/* Type Input */}
            <div className="md:col-span-2">
              <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Type
              </label>
              <div className={`flex items-center gap-3 border-2 px-4 py-3 bg-transparent transition-colors ${isDarkMode ? 'border-gray-600 focus-within:border-red-500' : 'border-gray-300 focus-within:border-red-600 bg-gray-50'}`}>
                <FaBriefcase className={isDarkMode ? 'text-gray-400' : 'text-gray-400'} />
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className={`w-full bg-transparent outline-none font-bold cursor-pointer appearance-none ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  <option value="all" className="text-black">All Types</option>
                  <option value="full-time" className="text-black">Full Time</option>
                  <option value="contract" className="text-black">Contract</option>
                  <option value="part-time" className="text-black">Part Time</option>
                </select>
              </div>
            </div>

            {/* Quick Post Button */}
            <div className="md:col-span-2">
              <Link to="/post-job" className="flex items-center justify-center w-full h-[50px] bg-red-700 hover:bg-black text-white font-bold uppercase tracking-widest transition-all text-xs border-2 border-red-700 hover:border-black">
                Post Job
              </Link>
            </div>

          </div>

          {/* Quick Filters Text */}
          <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider">
            <span className="text-gray-400">Quick Filters:</span>
            <button onClick={() => setLocation('remote')} className="text-red-600 hover:underline hover:text-black">Remote Only</button>
            <button onClick={() => setSearchQuery('Software Engineer')} className="text-red-600 hover:underline hover:text-black">Engineering</button>
            <button onClick={() => setSearchQuery('Product Manager')} className="text-red-600 hover:underline hover:text-black">Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herojob;
