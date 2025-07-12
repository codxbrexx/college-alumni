import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function PostJob() {
  const { isDarkMode } = useTheme();
  const [form, setForm] = useState({
    company: '',
    title: '',
    description: '',
    location: '',
    type: 'Full Time',
    salary: '',
    experience: '',
    skills: '',
    alumnus: '',
    batch: '',
    contact: '',
    isInternship: false,
  });

  const handleFormChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };
//   handled through backend
  const handleFormSubmit = e => {
    e.preventDefault();
    alert('it will controled by backend (not done yet)');
    setForm({
      company: '', title: '', description: '', location: '', type: 'Full Time',
      salary: '', experience: '', skills: '', alumnus: '', batch: '', contact: '', isInternship: false
    });
  };

  return (
    <div className={`min-h-screen py-12 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>Post a Job / Internship</h1>
          <p className={`${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Share opportunities with your College</p>
        </div>

        <div className={`rounded-2xl shadow-lg border p-8 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-100'
        }`}>
          <form className="space-y-6" onSubmit={handleFormSubmit}>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleFormChange}
                  placeholder="Enter company name"
                  className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
              <div className="flex-1">
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Job Title *</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleFormChange}
                  placeholder="Enter job title"
                  className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>Job Description *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleFormChange}
                placeholder="Describe the role, responsibilities, and requirements..."
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Location *</label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleFormChange}
                  placeholder=" Remote, Bangalore, Mumbai"
                  className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                  required     // for backend
                />
              </div>
              <div className="flex-1">
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Job Type *</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'border-gray-200 text-gray-900'
                  }`}
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Salary Range *</label>
                <input
                  type="text"
                  name="salary"
                  value={form.salary}
                  onChange={handleFormChange}
                  placeholder=" ₹8L - ₹12L or $50K - $80K"
                  className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
              <div className="flex-1">
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Experience Level *</label>
                <input
                  type="text"
                  name="experience"
                  value={form.experience}
                  onChange={handleFormChange}
                  placeholder=" 2-4 years, Entry Level"
                  className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>Skills Required *</label>
              <input
                type="text"
                name="skills"
                value={form.skills}
                onChange={handleFormChange}
                placeholder="e.g., React, Python, AWS (comma separated)"
                className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Your Name *</label>
                <input
                  type="text"
                  name="alumnus"
                  value={form.alumnus}
                  onChange={handleFormChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
              <div className="flex-1">
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Batch Year *</label>
                <input
                  type="text"
                  name="batch"
                  value={form.batch}
                  onChange={handleFormChange}
                  placeholder="e.g., 2019, 2020"
                  className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
            </div>


            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>Contact Information *</label>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleFormChange}
                placeholder="Email, LinkedIn, or phone number"
                className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                required
              />
            </div>
            {/* backend work check post are internship or job  */}
            <div className={`flex items-center p-4 rounded-lg ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <input
                type="checkbox"
                name="isInternship"
                checked={form.isInternship}
                onChange={handleFormChange}
                className={`w-5 h-5 text-teal-500 border-gray-300 rounded focus:ring-teal-500 ${
                  isDarkMode ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'
                }`}
              />
              <label className={`ml-3 text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                This is an internship opportunity
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-teal-400 hover:bg-teal-500 text-white font-semibold rounded-lg shadow-lg transition-colors text-lg"
              >
                Submit {form.isInternship ? 'Internship' : 'Job'} Posting
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
