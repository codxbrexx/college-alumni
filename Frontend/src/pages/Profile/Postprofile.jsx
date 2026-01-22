import React, { useState } from 'react';

export default function Postprofile() {

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
    <div className="min-h-screen py-20 bg-gray-50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 border border-red-600 text-red-700">
            Alumni Network
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-gray-900">Create Your Profile</h1>
          <p className="text-lg max-w-xl mx-auto text-gray-600">Share your journey, achievements, and connect with fellow graduates.</p>
        </div>

        <div className="bg-white border-t-4 border-red-600 border-x border-b border-gray-200 p-8 md:p-12 shadow-sm">
          <form className="space-y-12" onSubmit={handleFormSubmit}>

            {/* Personal Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px bg-gray-300 flex-1"></div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-red-600 shrink-0">Personal Information</h2>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    placeholder="FULL NAME"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">Roll Number *</label>
                  <input
                    type="text"
                    name="rollNo"
                    value={form.rollNo}
                    onChange={handleFormChange}
                    placeholder="e.g. LCS20240XX"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">Branch *</label>
                  <select
                    name="branch"
                    value={form.branch}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900"
                    required
                  >
                    <option value="">Select Branch</option>
                    <option value="CSE">Computer Science Engineering</option>
                    <option value="CSB">Computer Science Business</option>
                    <option value="CSAI">Computer Science & Artificial Intelligence</option>
                    <option value="IT">Information Technology</option>
                  </select>
                </div>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">Passing Year *</label>
                  <select
                    name="passingYear"
                    value={form.passingYear}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    placeholder="EMAIL ADDRESS"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleFormChange}
                    placeholder="PHONE NUMBER"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px bg-gray-300 flex-1"></div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-red-600 shrink-0">Professional Details</h2>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">Current Profession *</label>
                  <input
                    type="text"
                    name="profession"
                    value={form.profession}
                    onChange={handleFormChange}
                    placeholder="e.g. FULL STACK DEVELOPER"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">Experience *</label>
                  <input
                    type="text"
                    name="experience"
                    value={form.experience}
                    onChange={handleFormChange}
                    placeholder="e.g. 2+ YEARS"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleFormChange}
                    placeholder="COMPANY NAME"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={form.designation}
                    onChange={handleFormChange}
                    placeholder="e.g. SENIOR ENGINEER"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">Skills *</label>
                <input
                  type="text"
                  name="skills"
                  value={form.skills}
                  onChange={handleFormChange}
                  placeholder="e.g. REACT, PYTHON, AWS"
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900 placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* About & Location */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px bg-gray-300 flex-1"></div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-red-600 shrink-0">Bio & Location</h2>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">About You *</label>
                <textarea
                  name="about"
                  value={form.about}
                  onChange={handleFormChange}
                  placeholder="Tell us about your journey, interests, and passions..."
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 focus:border-red-600 focus:outline-none resize-none transition-colors duration-300 rounded-none text-gray-900 placeholder-gray-400"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">City *</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleFormChange}
                  placeholder="CURRENT CITY"
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900 placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px bg-gray-300 flex-1"></div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-red-600 shrink-0">Social Presence</h2>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">LinkedIn Profile</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleFormChange}
                    placeholder="LINKEDIN URL"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">Twitter Profile</label>
                  <input
                    type="url"
                    name="twitter"
                    value={form.twitter}
                    onChange={handleFormChange}
                    placeholder="TWITTER URL"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="space-y-6">
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500 group-focus-within:text-red-600">Profile Image URL</label>
                <input
                  type="url"
                  name="profileImage"
                  value={form.profileImage}
                  onChange={handleFormChange}
                  placeholder="https://example.com/your-image.jpg"
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors duration-300 font-medium rounded-none text-gray-900 placeholder-gray-400"
                />
                <p className="text-xs mt-2 text-gray-400 tracking-wide">LEAVE EMPTY TO USE DEFAULT AVATAR</p>
              </div>
            </div>

            <div className="pt-8">
              <button
                type="submit"
                className="w-full py-4 text-sm font-bold uppercase tracking-widest bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
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
