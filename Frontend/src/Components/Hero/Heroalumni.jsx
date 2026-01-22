import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter } from "react-icons/fa";

function Heroalumni() {
  const [activeTab, setActiveTab] = useState('alumni');
  const [searchQuery, setSearchQuery] = useState('');
  const [batch, setBatch] = useState('all');

  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background with overlay */}
      <img
        src="/alumnibg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-red-900/60 mix-blend-multiply" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-20 flex flex-col items-center text-center">

        {/* Main Heading */}
        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold mb-6 tracking-widest uppercase">
          Welcome to the Community
        </span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-tight">
          Connect with <br className="hidden md:block" /> Legends & Leaders
        </h1>
        <p className="text-xl md:text-2xl text-red-50 max-w-3xl mb-12 font-light">
          Your network is your net worth. Find mentors, batchmates, and future colleagues in our exclusive alumni directory.
        </p>

        {/* Tab Switcher */}
        <div className="bg-white/10 backdrop-blur-md p-1 inline-flex mb-8">
          <button
            onClick={() => setActiveTab('alumni')}
            className={`px-8 py-3 text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'alumni'
              ? 'bg-white text-red-900 shadow-lg'
              : 'text-white hover:bg-white/10'
              }`}
          >
            Alumni
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`px-8 py-3 text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'students'
              ? 'bg-white text-red-900 shadow-lg'
              : 'text-white hover:bg-white/10'
              }`}
          >
            Students
          </button>
        </div>

        {/* Search Bar Container */}
        <div className="w-full max-w-4xl bg-white shadow-2xl overflow-hidden p-0 flex flex-col md:flex-row border-4 border-white/10">
          <div className="flex-grow relative">
            <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, company, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-16 pl-14 pr-6 bg-white text-gray-900 placeholder-gray-500 focus:outline-none transition-all font-medium border-r border-gray-100"
            />
          </div>

          <div className="relative md:w-56">
            <select
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              className="w-full h-16 pl-6 pr-10 bg-gray-50 text-gray-900 font-bold focus:outline-none appearance-none cursor-pointer uppercase text-xs tracking-wide border-r border-gray-100"
            >
              <option value="all">All Batches</option>
              <option value="2024">Batch 2024</option>
              <option value="2023">Batch 2023</option>
              <option value="2022">Batch 2022</option>
              <option value="2021">Batch 2021</option>
              <option value="2020">Batch 2020</option>
            </select>
            <FaFilter className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          <button className="h-16 px-10 bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-widest transition-colors shadow-md text-xs">
            Search
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-red-100">
          <span className="opacity-80">Popular:</span>
          {['Software Engineer', 'Product Manager', 'Data Scientist', 'Entrepreneur'].map((tag) => (
            <button key={tag} className="hover:text-white underline decoration-red-400/50 hover:decoration-white transition-all">
              {tag}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Heroalumni;
