import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

function Herojob() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('jobs');
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('all');

  return (
    <div className="relative w-full min-h-[500px] flex flex-col justify-center overflow-hidden font-sans">
      {/* Background Image with Sharp Overlay */}
      <img
        src="/college_hero.png" // Using the same high-quality asset as landing
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className={`absolute inset-0 z-10 ${isDarkMode ? 'bg-gray-900/85 mix-blend-multiply' : 'bg-red-900/80 mix-blend-multiply'
        }`} />

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20 mt-10">
        <div className="max-w-3xl mb-12">
          <h4 className="text-white/80 font-bold tracking-widest uppercase text-sm mb-3">
            Career Department
          </h4>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
            Find Your Next <br /> Chapter.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
            Exclusive career opportunities curated for our alumni network.
          </p>
        </div>

        {/* Tab Switcher - Sharp */}
        <div className="flex mb-0">
          <button
            onClick={() => setActiveTab('jobs')}
            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'jobs'
                ? 'bg-white text-black'
                : 'bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm'
              }`}
          >
            Jobs
          </button>
          <button
            onClick={() => setActiveTab('internships')}
            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'internships'
                ? 'bg-white text-black'
                : 'bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm'
              }`}
          >
            Internships
          </button>
        </div>

        {/* Search Bar - Sharp & Professional */}
        <div className="bg-white p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

            {/* Search Input */}
            <div className="md:col-span-5 border-b-2 md:border-b-0 md:border-r-2 border-gray-100 pb-4 md:pb-0 md:pr-4">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                Keyword
              </label>
              <div className="flex items-center gap-3">
                <FaSearch className="text-red-700" />
                <input
                  type="text"
                  placeholder="Title, Company, or Skills"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent outline-none text-gray-900 font-medium placeholder-gray-400"
                />
              </div>
            </div>

            {/* Location Input */}
            <div className="md:col-span-3 border-b-2 md:border-b-0 md:border-r-2 border-gray-100 pb-4 md:pb-0 md:pr-4 md:pl-4">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                Location
              </label>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-700" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent outline-none text-gray-900 font-medium cursor-pointer appearance-none"
                >
                  <option value="">Anywhere</option>
                  <option value="remote">Remote</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
            </div>

            {/* Type Input */}
            <div className="md:col-span-2 pb-4 md:pb-0 md:pl-4">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                Type
              </label>
              <div className="flex items-center gap-3">
                <FaBriefcase className="text-red-700" />
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="w-full bg-transparent outline-none text-gray-900 font-medium cursor-pointer appearance-none"
                >
                  <option value="all">Any Type</option>
                  <option value="full-time">Full Time</option>
                  <option value="contract">Contract</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-2">
              <button className="w-full h-full min-h-[50px] bg-red-700 hover:bg-black text-white font-bold uppercase tracking-widest transition-all duration-300 text-sm">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white/80 text-sm font-medium">
          <span className="text-white/50 uppercase tracking-widest text-xs font-bold mr-2">Quick Search:</span>
          <button className="hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">Remote</button>
          <button className="hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">Engineering</button>
          <button className="hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">Design</button>
          <button className="hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">Product</button>
          <Link to="/post-job" className="ml-auto flex items-center gap-2 hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all text-red-200">
            Post a Job &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Herojob;
