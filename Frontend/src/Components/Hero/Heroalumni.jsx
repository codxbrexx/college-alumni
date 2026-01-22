import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';
import { IoIosAddCircleOutline } from "react-icons/io";
import { useTheme } from '../../context/ThemeContext';

function Heroalumni() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('alumni');
  const [searchQuery, setSearchQuery] = useState('');
  const [batch, setBatch] = useState('all');

  return (
    <div className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden">
      <img
        src="/alumnibg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className={`absolute inset-0 z-10 ${isDarkMode ? 'bg-red-900/40' : 'bg-red-200/30'
        }`} />

      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            College Alumni Network
          </h1>
          <p className={`text-xl mb-6 drop-shadow-md ${isDarkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>
            Connect, collaborate, and grow with your fellow alumni community
          </p>
        </div>

        {/* Alumni/Students active tag */}
        <div className="flex justify-center mb-6">
          <div className={`backdrop-blur-sm  p-1 ${isDarkMode ? 'bg-gray-900/20' : 'bg-white/20'
            }`}>
            <button
              onClick={() => setActiveTab('alumni')}
              className={`px-6 py-2  text-sm font-medium transition-colors ${activeTab === 'alumni'
                  ? isDarkMode
                    ? 'bg-gray-700 text-white shadow-md'
                    : 'bg-white text-red-700 shadow-md'
                  : isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-600/80'
                }`}
            >
              Alumni
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`px-6 py-2  text-sm font-medium transition-colors ${activeTab === 'students'
                  ? isDarkMode
                    ? 'bg-gray-700 text-white shadow-md'
                    : 'bg-white text-red-700 shadow-md'
                  : isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-600/80'
                }`}
            >
              Students
            </button>
          </div>
        </div>

        <div className={`backdrop-blur-sm  p-6 shadow-xl border transition-colors duration-300 ${isDarkMode
            ? 'bg-gray-900/95 border-gray-700'
            : 'bg-white/95 border-white/20'
          }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                Search {activeTab === 'alumni' ? 'Alumni' : 'Students'}
              </label>
              <input
                type="text"
                placeholder={`Search by name, company, or skills...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-3  border focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors duration-300 ${isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Batch Year</label>
              <select
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                className={`w-full px-4 py-3  border focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors duration-300 ${isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'border-gray-200 text-gray-900'
                  }`}
              >
                <option value="all">All Batches</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
              </select>
            </div>
          </div>
          <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
            <div className="flex flex-wrap gap-4 items-center">
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Quick Filters:</span>
              <button className={`px-3 py-1 text-xs  hover:bg-red-200 transition-colors ${isDarkMode
                  ? 'bg-red-900 text-red-300 hover:bg-red-800'
                  : 'bg-red-100 text-red-700'
                }`}>
                Recent Alumni
              </button>
              <button className={`px-3 py-1 text-xs  hover:bg-red-200 transition-colors ${isDarkMode
                  ? 'bg-red-900 text-red-300 hover:bg-red-800'
                  : 'bg-red-100 text-red-700'
                }`}>
                Industry Leaders
              </button>
              <button className={`px-3 py-1 text-xs  hover:bg-red-200 transition-colors ${isDarkMode
                  ? 'bg-red-900 text-red-300 hover:bg-red-800'
                  : 'bg-red-100 text-red-700'
                }`}>
                Entrepreneurs
              </button>
              <button className={`px-3 py-1 text-xs  hover:bg-red-200 transition-colors ${isDarkMode
                  ? 'bg-red-900 text-red-300 hover:bg-red-800'
                  : 'bg-red-100 text-red-700'
                }`}>
                Mentors
              </button>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button className="px-8 py-3 bg-red-400 hover:bg-red-500 cursor-pointer text-white font-semibold  shadow-lg transition-colors">
              Search {activeTab === 'alumni' ? 'Alumni' : 'Students'}
            </button>
            <Link
              to="/profile"
              className={`px-8 py-3 hover:bg-red-100 cursor-pointer font-semibold  shadow-lg transition-colors border ${isDarkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-red-400 border-red-400'
                  : 'bg-white text-red-600 border-red-600'
                }`}
            >
              Add Alumni Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroalumni;
