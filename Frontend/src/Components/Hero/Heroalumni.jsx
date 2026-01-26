import React from 'react';
import { FaSearch, FaGraduationCap, FaBriefcase, FaUniversity } from "react-icons/fa";

function Heroalumni({ filters, setFilters, searchTerm, setSearchTerm }) {

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-full bg-white border-b-2 border-gray-200">
      {/* Top Bar with Institution Branding */}
      <div className="bg-gray-900 border-b-4 border-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-red-100 font-bold mb-1">NetGrud College</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">Alumni Directory</h1>
            </div>
          </div>
          <p className="text-lg text-red-50 mt-4 max-w-2xl font-light border-l-2 border-red-400 pl-4">
            Connect with graduates worldwide. Discover mentors, explore career paths, and strengthen your professional network.
          </p>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Search Bar - Takes More Space */}
            <div className="md:col-span-5">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                Search Directory
              </label>
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Name, Company, Location, or Skills..."
                  className="w-full h-12 pl-11 pr-4 bg-white border-2 border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-red-600 transition-colors placeholder-gray-400"
                />
              </div>
            </div>

            {/* Graduation Year Filter */}
            <div className="md:col-span-3">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                Batch Year
              </label>
              <div className="relative">
                <FaGraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={filters.batch}
                  onChange={(e) => updateFilter('batch', e.target.value)}
                  className="w-full h-12 pl-11 pr-10 bg-white border-2 border-gray-300 text-gray-900 text-sm font-medium focus:outline-none focus:border-red-600 appearance-none cursor-pointer transition-colors"
                >
                  <option value="all">All Years</option>
                  <option value="2024">Batch of 2024</option>
                  <option value="2023">Batch of 2023</option>
                  <option value="2022">Batch of 2022</option>
                  <option value="2021">Batch of 2021</option>
                  <option value="2020">Batch of 2020</option>
                  <option value="2019">Batch of 2019</option>
                  <option value="2018">Batch of 2018</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Industry Filter */}
            <div className="md:col-span-4">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                Industry / Field
              </label>
              <div className="relative">
                <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={filters.role}
                  onChange={(e) => updateFilter('role', e.target.value)}
                  className="w-full h-12 pl-11 pr-10 bg-white border-2 border-gray-300 text-gray-900 text-sm font-medium focus:outline-none focus:border-red-600 appearance-none cursor-pointer transition-colors"
                >
                  <option value="">All Industries</option>
                  <option value="software">Technology & Engineering</option>
                  <option value="product">Product Management</option>
                  <option value="data">Data Science & Analytics</option>
                  <option value="design">Design & Creative</option>
                  <option value="marketing">Marketing & Sales</option>
                  <option value="finance">Finance & Banking</option>
                  <option value="consulting">Consulting</option>
                  <option value="education">Education & Research</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Filter Tags */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Quick Filters:</span>
            {[
              { label: 'Tech Leaders', value: 'software' },
              { label: 'Entrepreneurs', value: 'entrepreneur' },
              { label: 'Recent Grads', value: '2024' },
              { label: 'Product', value: 'product' }
            ].map((tag) => (
              <button
                key={tag.label}
                onClick={() => {
                  if (tag.value.match(/^\d{4}$/)) {
                    updateFilter('batch', tag.value);
                  } else {
                    updateFilter('role', tag.value);
                  }
                }}
                className="px-3 py-1.5 text-xs font-medium uppercase tracking-wide bg-white border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all"
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center border-r border-gray-200 last:border-r-0">
              <p className="text-2xl font-serif font-bold text-gray-900">500+</p>
              <p className="text-xs uppercase tracking-wide text-gray-500 font-medium mt-1">Alumni</p>
            </div>
            <div className="text-center border-r border-gray-200 last:border-r-0">
              <p className="text-2xl font-serif font-bold text-gray-900">50+</p>
              <p className="text-xs uppercase tracking-wide text-gray-500 font-medium mt-1">Companies</p>
            </div>
            <div className="text-center border-r border-gray-200 last:border-r-0">
              <p className="text-2xl font-serif font-bold text-gray-900">75%</p>
              <p className="text-xs uppercase tracking-wide text-gray-500 font-medium mt-1">Response Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-gray-900">25+</p>
              <p className="text-xs uppercase tracking-wide text-gray-500 font-medium mt-1">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroalumni;
