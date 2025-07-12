import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

function Postprofile() {
  const { isDarkMode } = useTheme();
  
  const [form, setForm] = useState({
    name: '',
    profession: '',
    experience: '',
    about: '',
    rollNo: '',
    branch: '',
    passingYear: '',
    skills: '',
    city: '',
    linkedin: '',
    twitter: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    profileImage: '',
  });

  const handleFormChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // handled through backend
  const handleFormSubmit = e => {
    e.preventDefault();
    alert('Profile submitted! (This is a placeholder, no backend yet)');
    setForm({
      name: '', profession: '', experience: '', about: '', rollNo: '', 
      branch: '', passingYear: '', skills: '', city: '', linkedin: '', 
      twitter: '', email: '', phone: '', company: '', designation: '', profileImage: ''
    });
  };

  return (
    <div className={`min-h-screen py-12 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>Create Your Alumni Profile</h1>
          <p className={`${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Share your journey and connect with fellow alumni</p>
        </div>

        <div className={`rounded-2xl shadow-lg border p-8 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-100'
        }`}>
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            
            {/* Personal Information */}
            <div className="border-b pb-6">
              <h2 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-teal-400' : 'text-teal-600'
              }`}>Personal Information</h2>
              
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
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
                  }`}>Roll Number *</label>
                  <input
                    type="text"
                    name="rollNo"
                    value={form.rollNo}
                    onChange={handleFormChange}
                    placeholder="e.g., lcs2024035"
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'border-gray-200 text-gray-900 placeholder-gray-500'
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Branch *</label>
                  <select
                    name="branch"
                    value={form.branch}
                    onChange={handleFormChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'border-gray-200 text-gray-900'
                    }`}
                    required
                  >
                    <option value="">Select Branch</option>
                    <option value="CSE">Computer Science Engineering</option>
                    <option value="CSB">Computer Science Business</option>
                    <option value="CSAI">Computer Science & Artificial Intelligence</option>
                    <option value="IT">Information Technology</option>
                   
                  </select>
                </div>
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Passing Year *</label>
                  <select
                    name="passingYear"
                    value={form.passingYear}
                    onChange={handleFormChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'border-gray-200 text-gray-900'
                    }`}
                    required
                  >
                    <option value="">Select Year</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    placeholder="Enter your email address"
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
                  }`}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleFormChange}
                    placeholder="Enter your phone number"
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'border-gray-200 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="border-b pb-6">
              <h2 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-teal-400' : 'text-teal-600'
              }`}>Professional Information</h2>
              
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Current Profession *</label>
                  <input
                    type="text"
                    name="profession"
                    value={form.profession}
                    onChange={handleFormChange}
                    placeholder="Full Stack Developer, Data Scientist"
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
                  }`}>Experience *</label>
                  <input
                    type="text"
                    name="experience"
                    value={form.experience}
                    onChange={handleFormChange}
                    placeholder="2+ years at Google"
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'border-gray-200 text-gray-900 placeholder-gray-500'
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleFormChange}
                    placeholder="Enter your company name"
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'border-gray-200 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={form.designation}
                    onChange={handleFormChange}
                    placeholder="Senior Software Engineer"
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'border-gray-200 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Skills *</label>
                <input
                  type="text"
                  name="skills"
                  value={form.skills}
                  onChange={handleFormChange}
                  placeholder="e.g., React, Node.js, Python, AWS (comma separated)"
                  className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
            </div>

            {/* About & Location */}
            <div className="border-b pb-6">
              <h2 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-teal-400' : 'text-teal-600'
              }`}>About & Location</h2>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>About You *</label>
                <textarea
                  name="about"
                  value={form.about}
                  onChange={handleFormChange}
                  placeholder="Tell us about your journey, interests, and what you're passionate about..."
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>

              <div className="mt-4">
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>City *</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleFormChange}
                  placeholder="Enter your current city"
                  className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="border-b pb-6">
              <h2 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-teal-400' : 'text-teal-600'
              }`}>Social Links</h2>
              
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>LinkedIn Profile</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleFormChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'border-gray-200 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Twitter Profile</label>
                  <input
                    type="url"
                    name="twitter"
                    value={form.twitter}
                    onChange={handleFormChange}
                    placeholder="https://twitter.com/yourhandle"
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'border-gray-200 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div>
              <h2 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-teal-400' : 'text-teal-600'
              }`}>Profile Image</h2>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Profile Image URL</label>
                <input
                  type="url"
                  name="profileImage"
                  value={form.profileImage}
                  onChange={handleFormChange}
                  placeholder="https://example.com/your-image.jpg"
                  className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                />
                <p className={`text-xs mt-1 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>Leave empty to use default avatar</p>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-4 bg-teal-400 hover:bg-teal-500 text-white font-semibold rounded-lg shadow-lg transition-colors text-lg"
              >
                Create Alumni Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Postprofile;