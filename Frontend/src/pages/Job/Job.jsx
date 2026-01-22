import React, { useState } from 'react';
import Herojob from "../../Components/Hero/Herojob";
import JobCard from './JobCard';
import { useTheme } from '../../context/ThemeContext';
import { FaFilter, FaSearch, FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// that  ahve to handle by post data
const jobs = [
  {
    id: 1,
    company: 'Microsoft',
    title: 'Backend Engineer',
    location: 'Bangalore',
    type: 'Full Time',
    salary: '₹15L - ₹25L',
    experience: '3-5 years',
    skills: ['Java', 'Spring Boot', 'AWS', 'Microservices', 'Docker'],
    posted: '2024-06-02',
    alumnus: 'Priya Singh',
    batch: '2018',
    link: '#',
    description: 'Design and implement scalable backend services for our cloud platform.',
    benefits: ['Health Insurance', 'Gym Membership', 'Learning Budget', 'Stock Options'],
    isInternship: false,
  },
  {
    id: 2,
    company: 'StartupX',
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Contract',
    salary: '$50K - $80K',
    experience: '1-3 years',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    posted: '2024-06-03',
    alumnus: 'Rahul Mehta',
    batch: '2020',
    link: '#',
    description: 'Create beautiful and intuitive user experiences for our products.',
    benefits: ['Flexible Hours', 'Remote Work', 'Creative Freedom'],
    isInternship: false,
  },
  {
    id: 3,
    company: 'Google',
    title: 'Software Engineer Intern',
    location: 'Mountain View',
    type: 'Internship',
    salary: '$8K - $12K/month',
    experience: 'Student',
    skills: ['Python', 'JavaScript', 'React', 'Machine Learning'],
    posted: '2024-06-01',
    alumnus: 'Amit Kumar',
    batch: '2023',
    link: '#',
    description: 'Work on cutting-edge projects and learn from industry experts.',
    benefits: ['Housing Allowance', 'Transportation', 'Mentorship'],
    isInternship: true,
  },
  
];

export default function Job() {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const jobTypes = ['All', 'Full Time', 'Contract', 'Internship'];
  const locations = ['All', 'Remote', 'Bangalore', 'Mountain View', 'Hybrid'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'All' || job.type === selectedType;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className={`min-h-screen pb-16 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      <div className="w-full flex justify-center">
        <Herojob />
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 mt-8 mb-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className={`inline-block px-4 py-2  font-semibold mb-4 shadow ${
            isDarkMode ? 'bg-red-900/80 text-red-300' : 'bg-red-100 text-red-700'
          }`}>Career Opportunities</span>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 tracking-tight gradient-text`}>
            Discover Your Next Role
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Exclusive job opportunities shared by our alumni network
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className={`mb-8 p-6  shadow-lg border ${
          isDarkMode 
            ? 'bg-gray-900/50 border-red-900 backdrop-blur-sm' 
            : 'bg-white/80 border-red-100 backdrop-blur-sm'
        }`}>
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search by title, company, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-4 py-3  border-2 outline-none transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-950 border-gray-700 text-white placeholder-gray-500 focus:border-red-500' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-red-500'
                }`}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-3  font-semibold transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-red-600 hover:bg-red-500 text-white' 
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              <FaFilter />
              Filters
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <FaBriefcase className="inline mr-2" />
                  Job Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {jobTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2  font-medium transition-all duration-300 ${
                        selectedType === type
                          ? isDarkMode
                            ? 'bg-red-600 text-white'
                            : 'bg-red-600 text-white'
                          : isDarkMode
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <FaMapMarkerAlt className="inline mr-2" />
                  Location
                </label>
                <div className="flex flex-wrap gap-2">
                  {locations.map(location => (
                    <button
                      key={location}
                      onClick={() => setSelectedLocation(location)}
                      className={`px-4 py-2  font-medium transition-all duration-300 ${
                        selectedLocation === location
                          ? isDarkMode
                            ? 'bg-red-600 text-white'
                            : 'bg-red-600 text-white'
                          : isDarkMode
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className={`mb-6 text-center ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <span className="font-semibold">{filteredJobs.length}</span> opportunities found
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => <JobCard key={job.id} job={job} />)
          ) : (
            <div className={`col-span-full text-center py-12 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <div className={`w-16 h-16 mx-auto mb-4  flex items-center justify-center ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-200'
              }`}>
                <svg className={`w-8 h-8 ${
                  isDarkMode ? 'text-gray-600' : 'text-gray-400'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className={`text-lg font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>No opportunities found</h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>Try adjusting your filters or search criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}