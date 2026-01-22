import React, { useState } from 'react';
import Herojob from "../../Components/Hero/Herojob";
import JobCard from './JobCard';
import { useTheme } from '../../context/ThemeContext';
import { FaArrowRight } from 'react-icons/fa';

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
    description: 'Design and implement scalable backend services for our cloud platform. Looking for engineers who love distributed systems.',
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
    description: 'Create beautiful and intuitive user experiences for our products. You will own the design system and user journey.',
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
    description: 'Work on cutting-edge projects and learn from industry experts. A great opportunity to kickstart your career.',
    benefits: ['Housing Allowance', 'Transportation', 'Mentorship'],
    isInternship: true,
  },

];

export default function Job() {
  const { isDarkMode } = useTheme();
  // State for jobs is currently mocked, but in real app would be filtered by params passed from Hero

  return (
    <div className={`min-h-screen pb-16 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'
      }`}>
      <div className="w-full">
        <Herojob />
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 mt-16 mb-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b pb-6 border-gray-200 dark:border-gray-800">
          <div>
            <h2 className={`text-4xl font-bold font-serif mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Latest Opportunities
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
              Curated roles from top companies and alumni startups.
            </p>
          </div>
          <div className={`text-sm font-semibold uppercase tracking-widest ${isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
            Showing {jobs.length} opportunities
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.length > 0 ? (
            jobs.map(job => <JobCard key={job.id} job={job} />)
          ) : (
            <div className="col-span-full py-20 text-center">
              <h3 className={`text-2xl font-serif font-bold mb-4 ${isDarkMode ? 'text-gray-800' : 'text-gray-200'
                }`}>No opportunities found</h3>
              <p className="text-gray-500">Try adjusting your filters.</p>
            </div>
          )}
        </div>

        {/* Pagination / Load More - Sharp Style */}
        <div className="mt-20 flex justify-center">
          <button className={`px-10 py-4 font-bold uppercase tracking-widest text-sm border-2 transition-all hover:bg-red-700 hover:border-red-700 hover:text-white ${isDarkMode
              ? 'border-gray-800 text-white'
              : 'border-black text-black'
            }`}>
            Load More Opportunities
          </button>
        </div>

      </section>
    </div>
  );
}