import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FaSearch, FaFilter, FaCalendarAlt } from 'react-icons/fa';

function Heronews({
  searchQuery, setSearchQuery,
  category, setCategory,
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
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">NetGrud College</p>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">
                Campus Chronicles
              </h1>
              <p className="text-zinc-400 max-w-xl text-sm md:text-base font-light">
                The latest news, research breakthroughs, and community achievements.
              </p>
            </div>

            {/* Tab Switcher - Sharp & Integrated */}
            <div className="flex border-2 border-white/20">
              <button
                onClick={() => setActiveTab('news')}
                className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'news'
                  ? 'bg-red-600 text-white'
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                News
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'events'
                  ? 'bg-red-600 text-white'
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                Events
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
            <div className="md:col-span-6">
              <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Headline / Author
              </label>
              <div className={`flex items-center gap-3 border-2 px-4 py-3 bg-transparent transition-colors ${isDarkMode ? 'border-gray-600 focus-within:border-red-500' : 'border-gray-300 focus-within:border-red-600 bg-gray-50'}`}>
                <FaSearch className={isDarkMode ? 'text-gray-400' : 'text-gray-400'} />
                <input
                  type="text"
                  placeholder="Convocation 2024..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full bg-transparent outline-none font-medium placeholder-gray-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                />
              </div>
            </div>

            {/* Category Input */}
            <div className="md:col-span-4">
              <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Topic
              </label>
              <div className={`flex items-center gap-3 border-2 px-4 py-3 bg-transparent transition-colors ${isDarkMode ? 'border-gray-600 focus-within:border-red-500' : 'border-gray-300 focus-within:border-red-600 bg-gray-50'}`}>
                <FaFilter className={isDarkMode ? 'text-gray-400' : 'text-gray-400'} />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`w-full bg-transparent outline-none font-bold cursor-pointer appearance-none ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  <option value="all" className="text-black">All Topics</option>
                  <option value="academics" className="text-black">Academics</option>
                  <option value="alumni" className="text-black">Alumni Success</option>
                  <option value="campus" className="text-black">Campus Life</option>
                  <option value="research" className="text-black">Research</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-2">
              <Link to="/post-news" className="flex items-center justify-center w-full h-[50px] bg-red-700 hover:bg-black text-white font-bold uppercase tracking-widest transition-all text-xs border-2 border-red-700 hover:border-black">
                Submit Story
              </Link>
            </div>

          </div>

          {/* Quick Filters Text */}
          <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider">
            <span className="text-gray-400">Featured Topics:</span>
            <button onClick={() => setCategory('research')} className="text-red-600 hover:underline hover:text-black">Research</button>
            <button onClick={() => setCategory('alumni')} className="text-red-600 hover:underline hover:text-black">Alumni Spotlight</button>
            <button onClick={() => setCategory('campus')} className="text-red-600 hover:underline hover:text-black">Campus Events</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heronews;
