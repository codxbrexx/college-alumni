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
    <div className={`min-h-screen py-20 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'
      }`}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 border ${isDarkMode ? 'border-red-500 text-red-400' : 'border-red-600 text-red-700'
            }`}>
            Opportunity
          </span>
          <h1 className={`text-4xl md:text-5xl font-bold font-serif mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Post a Job / Internship</h1>
          <p className={`text-lg max-w-xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Share career opportunities with the NetGrud community and help alumni find their next chapter.</p>
        </div>

        <div className={`border-t-4 border-red-600 p-8 md:p-12 transition-colors duration-300 ${isDarkMode
            ? 'bg-gray-900 border-x border-b border-gray-800'
            : 'bg-gray-50 border-x border-b border-gray-200'
          }`}>
          <form className="space-y-8" onSubmit={handleFormSubmit}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-red-400' : 'text-gray-500 group-focus-within:text-red-600'
                  }`}>Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleFormChange}
                  placeholder="ENTER COMPANY NAME"
                  className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                      ? 'border-gray-700 text-white focus:border-red-500 placeholder-gray-600'
                      : 'border-gray-300 text-gray-900 focus:border-red-600 placeholder-gray-400'
                    }`}
                  required
                />
              </div>
              <div className="group">
                <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-red-400' : 'text-gray-500 group-focus-within:text-red-600'
                  }`}>Job Title *</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleFormChange}
                  placeholder="ENTER JOB TITLE"
                  className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                      ? 'border-gray-700 text-white focus:border-red-500 placeholder-gray-600'
                      : 'border-gray-300 text-gray-900 focus:border-red-600 placeholder-gray-400'
                    }`}
                  required
                />
              </div>
            </div>

            <div className="group">
              <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-red-400' : 'text-gray-500 group-focus-within:text-red-600'
                }`}>Job Description *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleFormChange}
                placeholder="Describe the role details..."
                rows={6}
                className={`w-full px-4 py-3 bg-transparent border-2 focus:outline-none transition-colors duration-300 resize-none rounded-none ${isDarkMode
                    ? 'border-gray-700 text-white focus:border-red-500 placeholder-gray-600'
                    : 'border-gray-300 text-gray-900 focus:border-red-600 placeholder-gray-400'
                  }`}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-red-400' : 'text-gray-500 group-focus-within:text-red-600'
                  }`}>Location *</label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleFormChange}
                  placeholder="REMOTE, BANGALORE..."
                  className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                      ? 'border-gray-700 text-white focus:border-red-500 placeholder-gray-600'
                      : 'border-gray-300 text-gray-900 focus:border-red-600 placeholder-gray-400'
                    }`}
                  required     // for backend
                />
              </div>
              <div className="group">
                <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-red-400' : 'text-gray-500 group-focus-within:text-red-600'
                  }`}>Job Type *</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                      ? 'border-gray-700 text-white focus:border-red-500'
                      : 'border-gray-300 text-gray-900 focus:border-red-600'
                    }`}
                >
                  <option value="Full Time" className="text-black">Full Time</option>
                  <option value="Part Time" className="text-black">Part Time</option>
                  <option value="Contract" className="text-black">Contract</option>
                  <option value="Freelance" className="text-black">Freelance</option>
                  <option value="Internship" className="text-black">Internship</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-red-400' : 'text-gray-500 group-focus-within:text-red-600'
                  }`}>Salary Range *</label>
                <input
                  type="text"
                  name="salary"
                  value={form.salary}
                  onChange={handleFormChange}
                  placeholder="e.g. ₹12L - ₹18L"
                  className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                      ? 'border-gray-700 text-white focus:border-red-500 placeholder-gray-600'
                      : 'border-gray-300 text-gray-900 focus:border-red-600 placeholder-gray-400'
                    }`}
                  required
                />
              </div>
              <div className="group">
                <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-red-400' : 'text-gray-500 group-focus-within:text-red-600'
                  }`}>Experience Level *</label>
                <input
                  type="text"
                  name="experience"
                  value={form.experience}
                  onChange={handleFormChange}
                  placeholder="e.g. 2-4 YEARS"
                  className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                      ? 'border-gray-700 text-white focus:border-red-500 placeholder-gray-600'
                      : 'border-gray-300 text-gray-900 focus:border-red-600 placeholder-gray-400'
                    }`}
                  required
                />
              </div>
            </div>

            <div className="group">
              <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-red-400' : 'text-gray-500 group-focus-within:text-red-600'
                }`}>Skills Required *</label>
              <input
                type="text"
                name="skills"
                value={form.skills}
                onChange={handleFormChange}
                placeholder="e.g. REACT, NODE.JS, AWS"
                className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                    ? 'border-gray-700 text-white focus:border-red-500 placeholder-gray-600'
                    : 'border-gray-300 text-gray-900 focus:border-red-600 placeholder-gray-400'
                  }`}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-red-400' : 'text-gray-500 group-focus-within:text-red-600'
                  }`}>Your Name *</label>
                <input
                  type="text"
                  name="alumnus"
                  value={form.alumnus}
                  onChange={handleFormChange}
                  placeholder="FULL NAME"
                  className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                      ? 'border-gray-700 text-white focus:border-red-500 placeholder-gray-600'
                      : 'border-gray-300 text-gray-900 focus:border-red-600 placeholder-gray-400'
                    }`}
                  required
                />
              </div>
              <div className="group">
                <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-red-400' : 'text-gray-500 group-focus-within:text-red-600'
                  }`}>Batch Year *</label>
                <input
                  type="text"
                  name="batch"
                  value={form.batch}
                  onChange={handleFormChange}
                  placeholder="e.g. 2020"
                  className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                      ? 'border-gray-700 text-white focus:border-red-500 placeholder-gray-600'
                      : 'border-gray-300 text-gray-900 focus:border-red-600 placeholder-gray-400'
                    }`}
                  required
                />
              </div>
            </div>


            <div className="group">
              <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-red-400' : 'text-gray-500 group-focus-within:text-red-600'
                }`}>Contact Information *</label>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleFormChange}
                placeholder="EMAIL OR LINKEDIN"
                className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                    ? 'border-gray-700 text-white focus:border-red-500 placeholder-gray-600'
                    : 'border-gray-300 text-gray-900 focus:border-red-600 placeholder-gray-400'
                  }`}
                required
              />
            </div>

            <div className={`flex items-center p-4 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'
              }`}>
              <input
                type="checkbox"
                name="isInternship"
                checked={form.isInternship}
                onChange={handleFormChange}
                className={`w-5 h-5 text-red-600 rounded-none focus:ring-red-500 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                  }`}
              />
              <label className={`ml-3 text-sm font-bold uppercase tracking-wide ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                This is an internship opportunity
              </label>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 border-2 ${isDarkMode
                    ? 'bg-white text-black border-white hover:bg-transparent hover:text-white'
                    : 'bg-black text-white border-black hover:bg-transparent hover:text-black'
                  }`}
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
