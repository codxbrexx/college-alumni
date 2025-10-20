import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-teal-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 relative">
        {/* Floating Orbs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gray-300 opacity-20 rounded-full blur-3xl animate-float -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl animate-float -z-10" style={{animationDelay: '2s'}} />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight gradient-text">
           <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent">Welcome to NetGrud</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          The modern alumni network for students, graduates, and professionals. Connect, collaborate, and grow your career with a vibrant community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link to="/register">
            <button className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </Link>
          <Link to="/login">
            <button className="px-8 py-4 rounded-xl font-semibold bg-white text-teal-600 border border-teal-400 shadow hover:bg-teal-50 transition-all duration-300">
              Login
            </button>
          </Link>
          <Link to="/home">
            <button className="px-8 py-4 rounded-xl font-semibold bg-white text-blue-600 border border-blue-400 shadow hover:bg-blue-50 transition-all duration-300">
              Explore as Guest
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl px-6 py-4 shadow flex flex-col items-center">
            <span className="text-3xl font-bold text-teal-500 mb-1">5,000+</span>
            <span className="text-gray-700 dark:text-gray-200">Active Alumni</span>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl px-6 py-4 shadow flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-500 mb-1">850+</span>
            <span className="text-gray-700 dark:text-gray-200">Job Opportunities</span>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl px-6 py-4 shadow flex flex-col items-center">
            <span className="text-3xl font-bold text-purple-500 mb-1">1,200+</span>
            <span className="text-gray-700 dark:text-gray-200">Success Stories</span>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} NetGrud Alumni Network. All rights reserved.
      </footer>
    </div>
  );
}
