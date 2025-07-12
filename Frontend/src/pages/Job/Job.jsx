import React, { useState } from 'react';
import Herojob from "../../Components/Hero/Herojob";
import JobCard from './JobCard';
import { useTheme } from '../../context/ThemeContext';

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

  return (
    <div className={`min-h-screen pb-16 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="w-full flex justify-center">
        <Herojob />
      </div>

      {/* Jobs Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.length > 0 ? (
            jobs.map(job => <JobCard key={job.id} job={job} />)
          ) : (
            <div className={`col-span-full text-center py-12 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
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
              }`}>Check back later for new opportunities</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}