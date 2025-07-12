import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function Postnews() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('news');
  
  const [newsForm, setNewsForm] = useState({
    title: '',
    category: '',
    description: '',
    author: '',
    date: '',
  });

  const [eventForm, setEventForm] = useState({
    title: '',
    category: '',
    description: '',
    author: '',
    date: '',
    time: '',
    location: '',
    attendees: '',
  });

  const handleNewsFormChange = e => {
    const { name, value } = e.target;
    setNewsForm({ ...newsForm, [name]: value });
  };

  const handleEventFormChange = e => {
    const { name, value } = e.target;
    setEventForm({ ...eventForm, [name]: value });
  };

  // handled through backend
  const handleNewsSubmit = e => {
    e.preventDefault();
    alert('News submitted! (This is a placeholder, no backend yet)');
    setNewsForm({
      title: '', category: '', description: '', author: '', date: ''
    });
  };

  const handleEventSubmit = e => {
    e.preventDefault();
    alert('Event submitted! (This is a placeholder, no backend yet)');
    setEventForm({
      title: '', category: '', description: '', author: '', date: '', time: '', location: '', attendees: ''
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
          }`}>Share with Community</h1>
          <p className={`${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Post news updates or upcoming events</p>
        </div>

        <div className={`rounded-2xl shadow-lg border p-8 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-100'
        }`}>
          {/* tag tab */}
          <div className="flex justify-center mb-8">
            <div className={`backdrop-blur-sm rounded-full p-1 border ${
              isDarkMode 
                ? 'bg-gray-700/20 border-gray-600' 
                : 'bg-gray-500/20 border-gray-200'
            }`}>
              <button
                onClick={() => setActiveTab('news')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'news'
                    ? isDarkMode 
                      ? 'bg-gray-600 text-white shadow-md' 
                      : 'bg-white text-teal-700 shadow-md'
                    : isDarkMode 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-600/80'
                }`}
              >
                News
              </button>
              <button
                onClick={() => setActiveTab('event')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'event'
                    ? isDarkMode 
                      ? 'bg-gray-600 text-white shadow-md' 
                      : 'bg-white text-teal-700 shadow-md'
                    : isDarkMode 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-600/80'
                }`}
              >
                Events
              </button>
            </div>
          </div>

          {/* News form taged open*/}
          {activeTab === 'news' && (
            <form className="space-y-6" onSubmit={handleNewsSubmit}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={newsForm.title}
                    onChange={handleNewsFormChange}
                    placeholder="Enter news title"
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
                  }`}>Category *</label>
                  <select
                    name="category"
                    value={newsForm.category}
                    onChange={handleNewsFormChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'border-gray-200 text-gray-900'
                    }`}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Academics">Academics</option>
                    <option value="Infrastructure">Infrastructure</option>
                    <option value="Achievements">Achievements</option>
                    <option value="Technical">Technical</option>
                    <option value="Career">Career</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Sports">Sports</option>
                    <option value="Alumni">Alumni</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Description *</label>
                <textarea
                  name="description"
                  value={newsForm.description}
                  onChange={handleNewsFormChange}
                  placeholder="Describe the news details..."
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
                  }`}>Author Name *</label>
                  <input
                    type="text"
                    name="author"
                    value={newsForm.author}
                    onChange={handleNewsFormChange}
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
                  }`}>Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={newsForm.date}
                    onChange={handleNewsFormChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'border-gray-200 text-gray-900'
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-teal-400 hover:bg-teal-500 text-white font-semibold rounded-lg shadow-lg transition-colors text-lg"
                >
                  Submit News Posting
                </button>
              </div>
            </form>
          )}

          {/* event from by tag open sectation */}
          {activeTab === 'event' && (
            <form className="space-y-6" onSubmit={handleEventSubmit}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Event Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={eventForm.title}
                    onChange={handleEventFormChange}
                    placeholder="Enter event title"
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
                  }`}>Category *</label>
                  <select
                    name="category"
                    value={eventForm.category}
                    onChange={handleEventFormChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'border-gray-200 text-gray-900'
                    }`}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Events">Events</option>
                    <option value="Technical">Technical</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Sports">Sports</option>
                    <option value="Career">Career</option>
                    <option value="Alumni">Alumni</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>Event Description *</label>
                <textarea
                  name="description"
                  value={eventForm.description}
                  onChange={handleEventFormChange}
                  placeholder="Describe the event details, agenda, and what attendees can expect..."
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
                  }`}>Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={eventForm.date}
                    onChange={handleEventFormChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'border-gray-200 text-gray-900'
                    }`}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Time *</label>
                  <input
                    type="time"
                    name="time"
                    value={eventForm.time}
                    onChange={handleEventFormChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'border-gray-200 text-gray-900'
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={eventForm.location}
                    onChange={handleEventFormChange}
                    placeholder="Enter event location"
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
                  }`}>Expected Attendees</label>
                  <input
                    type="number"
                    name="attendees"
                    value={eventForm.attendees}
                    onChange={handleEventFormChange}
                    placeholder="Number of attendees"
                    className={`w-full px-4 py-3 rounded-lg border focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'border-gray-200 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-teal-400 hover:bg-teal-500 text-white font-semibold rounded-lg shadow-lg transition-colors text-lg"
                >
                  Submit Event Posting
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}