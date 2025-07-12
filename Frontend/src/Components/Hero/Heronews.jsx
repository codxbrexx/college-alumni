import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import { IoIosAddCircleOutline } from "react-icons/io";
import { useTheme } from '../../context/ThemeContext';

function Heronews() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('news');
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

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
            News & Events
          </h1>
          <p className={`text-xl mb-6 drop-shadow-md ${
            isDarkMode ? 'text-gray-200' : 'text-gray-800'
          }`}>
            Stay updated with college news, events, and alumni stories
          </p>
        </div>
        {/* news event active tag  */}
        <div className="flex justify-center mb-6">
          <div className={`backdrop-blur-sm rounded-full p-1 ${
            isDarkMode ? 'bg-gray-800/20' : 'bg-white/20'
          }`}>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'news'
                  ? isDarkMode 
                    ? 'bg-gray-700 text-white shadow-md' 
                    : 'bg-white text-teal-700 shadow-md'
                  : isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-600/80'
              }`}
            >
              News
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'events'
                  ? isDarkMode 
                    ? 'bg-gray-700 text-white shadow-md' 
                    : 'bg-white text-teal-700 shadow-md'
                  : isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-600/80'
              }`}
            >
              Events
            </button>
          </div>
        </div>

        <div className={`backdrop-blur-sm rounded-2xl p-6 shadow-xl border transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-800/95 border-gray-700' 
            : 'bg-white/95 border-white/20'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Search {activeTab === 'news' ? 'News' : 'Events'}
              </label>
              <input
                type="text"
                placeholder={`Search by title, author, or content...`}
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
              }`}>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'border-gray-200 text-gray-900'
                }`}
              >
                <option value="all">All Categories</option>
                <option value="academics">Academics</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="events">Events</option>
                <option value="achievements">Achievements</option>
                <option value="technical">Technical</option>
                <option value="career">Career</option>
                <option value="cultural">Cultural</option>
                <option value="sports">Sports</option>
                <option value="alumni">Alumni</option>
              </select>
            </div>
          </div>
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
                Latest News
              </button>
              <button className={`px-3 py-1 text-xs rounded-2xl hover:bg-teal-200 transition-colors ${
                isDarkMode 
                  ? 'bg-teal-900 text-teal-300 hover:bg-teal-800' 
                  : 'bg-teal-100 text-teal-700'
              }`}>
                Upcoming Events
              </button>
              <button className={`px-3 py-1 text-xs rounded-2xl hover:bg-teal-200 transition-colors ${
                isDarkMode 
                  ? 'bg-teal-900 text-teal-300 hover:bg-teal-800' 
                  : 'bg-teal-100 text-teal-700'
              }`}>
                Alumni Stories
              </button>
              <button className={`px-3 py-1 text-xs rounded-2xl hover:bg-teal-200 transition-colors ${
                isDarkMode 
                  ? 'bg-teal-900 text-teal-300 hover:bg-teal-800' 
                  : 'bg-teal-100 text-teal-700'
              }`}>
                Campus Updates
              </button>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button className="px-8 py-3 bg-teal-400 hover:bg-teal-500 cursor-pointer text-white font-semibold rounded-lg shadow-lg transition-colors">
              Search {activeTab === 'news' ? 'News' : 'Events'}
            </button>
            <Link 
              to="/post-news"
              className={`px-8 py-3 hover:bg-teal-100 cursor-pointer font-semibold rounded-lg shadow-lg transition-colors border ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-teal-400 border-teal-400' 
                  : 'bg-white text-teal-600 border-teal-600'
              }`}
            >
              Post News/Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heronews;
