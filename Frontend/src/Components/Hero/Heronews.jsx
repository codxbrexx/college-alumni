import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FaSearch, FaFilter, FaCalendarAlt } from 'react-icons/fa';

function Heronews() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('news');
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  return (
    <div className="relative w-full min-h-[500px] flex flex-col justify-center overflow-hidden font-sans">
      {/* Background Image with Sharp Overlay */}
      <img
        src="/alumnibg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className={`absolute inset-0 z-10 ${isDarkMode ? 'bg-gray-900/85 mix-blend-multiply' : 'bg-red-900/80 mix-blend-multiply'
        }`} />

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20 mt-10">
        <div className="max-w-3xl mb-12">
          <h4 className="text-white/80 font-bold tracking-widest uppercase text-sm mb-3">
            Campus Chronicles
          </h4>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
            Stories That <br /> Matter.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
            Stay connected with the latest achievements, events, and narratives from our community.
          </p>
        </div>

        {/* Tab Switcher - Sharp */}
        <div className="flex mb-0">
          <button
            onClick={() => setActiveTab('news')}
            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'news'
              ? 'bg-white text-black'
              : 'bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm'
              }`}
          >
            News
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'events'
              ? 'bg-white text-black'
              : 'bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm'
              }`}
          >
            Events
          </button>
        </div>

        {/* Search Bar - Sharp & Professional */}
        <div className="bg-white p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

            {/* Search Input */}
            <div className="md:col-span-6 pb-4 md:pb-0 md:pr-4">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                Search
              </label>
              <div className="flex items-center gap-3">
                <FaSearch className="text-red-700" />
                <input
                  type="text"
                  placeholder="Headlines, Topics, or Authors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent outline-none text-gray-900 font-medium placeholder-gray-400 border-b-2 border-gray-200 focus:border-red-700 transition-colors pb-2"
                />
              </div>
            </div>

            {/* Category Input */}
            <div className="md:col-span-4 pb-4 md:pb-0 md:pr-4 md:pl-4">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                Topic
              </label>
              <div className="flex items-center gap-3">
                <FaFilter className="text-red-700" />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-transparent outline-none text-gray-900 font-medium cursor-pointer appearance-none border-b-2 border-gray-200 focus:border-red-700 transition-colors pb-2"
                >
                  <option value="all">All Topics</option>
                  <option value="academics">Academics</option>
                  <option value="alumni">Alumni Success</option>
                  <option value="campus">Campus Life</option>
                  <option value="sports">Sports</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-2">
              <button className="w-full h-full min-h-[50px] bg-red-700 hover:bg-black text-white font-bold uppercase tracking-widest transition-all duration-300 text-sm">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white/80 text-sm font-medium">
          <span className="text-white/50 uppercase tracking-widest text-xs font-bold mr-2">Trending:</span>
          <button className="hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">Convocation 2024</button>
          <button className="hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">Research Grants</button>
          <button className="hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">Sports Meet</button>
          <Link to="/post-news" className="ml-auto flex items-center gap-2 hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all text-red-200">
            Submit a Story &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Heronews;
