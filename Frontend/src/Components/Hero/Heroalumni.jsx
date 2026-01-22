import React, { useState } from 'react';
import { FaFilter, FaBriefcase, FaGraduationCap, FaSearch } from "react-icons/fa";

function Heroalumni({ filters, setFilters, searchTerm, setSearchTerm }) {
  const [activeTab, setActiveTab] = useState('alumni');

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="relative w-full min-h-[350px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background with overlay */}
      <img
        src="/alumnibg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-red-900/60 mix-blend-multiply" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-10 flex flex-col items-center text-center">

        {/* Main Heading */}
        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold mb-4 tracking-widest uppercase">
          Welcome to the Community
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg leading-tight">
          Connect with <br className="hidden md:block" /> Legends & Leaders
        </h1>
        <p className="text-lg md:text-xl text-red-50 max-w-3xl mb-8 font-light">
          Your network is your net worth. Find mentors, batchmates, and future colleagues in our exclusive alumni directory.
        </p>

        {/* Filter Bar Container - No Search, Just Filters */}
        <div className="w-full max-w-4xl bg-white shadow-2xl overflow-hidden p-6 flex flex-col md:flex-row gap-4 border-4 border-white/10  items-end">

          {/* Search Input */}
          <div className="flex-[2] w-full text-left">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
              Search Alumni
            </label>
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-red-700" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Name, Company, or City..."
                className="w-full h-12 pl-10 pr-4 bg-gray-50 border-b-2 border-gray-200 text-gray-900 font-normal focus:outline-none focus:border-red-700 text-sm transition-colors placeholder-gray-400"
              />
            </div>
          </div>

          {/* Batch Filter */}
          <div className="flex-1 w-full text-left">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
              Graduation Year
            </label>
            <div className="relative">
              <FaGraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-red-700" />
              <select
                value={filters.batch}
                onChange={(e) => updateFilter('batch', e.target.value)}
                className="w-full h-12 pl-10 pr-4 bg-gray-50 border border-gray-200 text-gray-900 font-bold focus:outline-none focus:border-red-700 appearance-none cursor-pointer text-sm transition-colors"
              >
                <option value="all">All Batches</option>
                <option value="2024">Batch 2024</option>
                <option value="2023">Batch 2023</option>
                <option value="2022">Batch 2022</option>
                <option value="2021">Batch 2021</option>
                <option value="2020">Batch 2020</option>
              </select>
              <FaFilter className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>

          {/* Role/Industry Filter */}
          <div className="flex-1 w-full text-left">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
              Industry / Role
            </label>
            <div className="relative">
              <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-red-700" />
              <select
                value={filters.role}
                onChange={(e) => updateFilter('role', e.target.value)}
                className="w-full h-12 pl-10 pr-4 bg-gray-50 border border-gray-200 text-gray-900 font-bold focus:outline-none focus:border-red-700 appearance-none cursor-pointer text-sm transition-colors"
              >
                <option value="">Any Industry</option>
                <option value="software">Software Engineering</option>
                <option value="product">Product Management</option>
                <option value="data">Data Science</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
              </select>
              <FaFilter className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-red-100">
          <span className="opacity-80">Popular:</span>
          {['Software Engineer', 'Product Manager', 'Data Scientist', 'Entrepreneur'].map((tag) => (
            <button
              key={tag}
              onClick={() => updateFilter('role', tag.toLowerCase().split(' ')[0])}
              className="hover:text-white underline decoration-red-400/50 hover:decoration-white transition-all"
            >
              {tag}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Heroalumni;
