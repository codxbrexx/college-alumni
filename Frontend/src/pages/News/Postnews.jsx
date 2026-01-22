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
    <div className={`min-h-screen py-20 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'
      }`}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 border ${isDarkMode ? 'border-blue-500 text-blue-400' : 'border-blue-600 text-blue-700'
            }`}>
            Community Updates
          </span>
          <h1 className={`text-4xl md:text-5xl font-bold font-serif mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Share with NetGrud</h1>
          <p className={`text-lg max-w-xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Post news updates or announce upcoming events to the alumni network.</p>
        </div>

        <div className={`border-t-4 border-blue-600 p-8 md:p-12 transition-colors duration-300 ${isDarkMode
            ? 'bg-gray-900 border-x border-b border-gray-800'
            : 'bg-gray-50 border-x border-b border-gray-200'
          }`}>
          {/* tag tab */}
          <div className="flex justify-center mb-12">
            <div className={`flex border-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'
              }`}>
              <button
                onClick={() => setActiveTab('news')}
                className={`px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'news'
                    ? isDarkMode
                      ? 'bg-white text-black'
                      : 'bg-black text-white'
                    : isDarkMode
                      ? 'text-gray-400 hover:text-white hover:bg-white/10'
                      : 'text-gray-500 hover:text-black hover:bg-black/5'
                  }`}
              >
                Post News
              </button>
              <div className={`w-0.5 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
              <button
                onClick={() => setActiveTab('event')}
                className={`px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'event'
                    ? isDarkMode
                      ? 'bg-white text-black'
                      : 'bg-black text-white'
                    : isDarkMode
                      ? 'text-gray-400 hover:text-white hover:bg-white/10'
                      : 'text-gray-500 hover:text-black hover:bg-black/5'
                  }`}
              >
                Host Event
              </button>
            </div>
          </div>

          {/* News form taged open*/}
          {activeTab === 'news' && (
            <form className="space-y-8" onSubmit={handleNewsSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-blue-400' : 'text-gray-500 group-focus-within:text-blue-600'
                    }`}>Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={newsForm.title}
                    onChange={handleNewsFormChange}
                    placeholder="ENTER NEWS TITLE"
                    className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                        ? 'border-gray-700 text-white focus:border-blue-500 placeholder-gray-600'
                        : 'border-gray-300 text-gray-900 focus:border-blue-600 placeholder-gray-400'
                      }`}
                    required
                  />
                </div>
                <div className="group">
                  <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-blue-400' : 'text-gray-500 group-focus-within:text-blue-600'
                    }`}>Category *</label>
                  <select
                    name="category"
                    value={newsForm.category}
                    onChange={handleNewsFormChange}
                    className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                        ? 'border-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 text-gray-900 focus:border-blue-600'
                      }`}
                    required
                  >
                    <option value="" className="text-black">SELECT CATEGORY</option>
                    <option value="Academics" className="text-black">Academics</option>
                    <option value="Infrastructure" className="text-black">Infrastructure</option>
                    <option value="Achievements" className="text-black">Achievements</option>
                    <option value="Technical" className="text-black">Technical</option>
                    <option value="Career" className="text-black">Career</option>
                    <option value="Cultural" className="text-black">Cultural</option>
                    <option value="Sports" className="text-black">Sports</option>
                    <option value="Alumni" className="text-black">Alumni</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-blue-400' : 'text-gray-500 group-focus-within:text-blue-600'
                  }`}>Description *</label>
                <textarea
                  name="description"
                  value={newsForm.description}
                  onChange={handleNewsFormChange}
                  placeholder="Describe the news details..."
                  rows={6}
                  className={`w-full px-4 py-3 bg-transparent border-2 focus:outline-none transition-colors duration-300 resize-none rounded-none ${isDarkMode
                      ? 'border-gray-700 text-white focus:border-blue-500 placeholder-gray-600'
                      : 'border-gray-300 text-gray-900 focus:border-blue-600 placeholder-gray-400'
                    }`}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-blue-400' : 'text-gray-500 group-focus-within:text-blue-600'
                    }`}>Author Name *</label>
                  <input
                    type="text"
                    name="author"
                    value={newsForm.author}
                    onChange={handleNewsFormChange}
                    placeholder="FULL NAME"
                    className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                        ? 'border-gray-700 text-white focus:border-blue-500 placeholder-gray-600'
                        : 'border-gray-300 text-gray-900 focus:border-blue-600 placeholder-gray-400'
                      }`}
                    required
                  />
                </div>
                <div className="group">
                  <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-blue-400' : 'text-gray-500 group-focus-within:text-blue-600'
                    }`}>Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={newsForm.date}
                    onChange={handleNewsFormChange}
                    className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                        ? 'border-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 text-gray-900 focus:border-blue-600'
                      }`}
                    required
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 border-2 ${isDarkMode
                      ? 'bg-white text-black border-white hover:bg-transparent hover:text-white'
                      : 'bg-black text-white border-black hover:bg-transparent hover:text-black'
                    }`}
                >
                  Submit News Posting
                </button>
              </div>
            </form>
          )}

          {/* event from by tag open sectation */}
          {activeTab === 'event' && (
            <form className="space-y-8" onSubmit={handleEventSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-blue-400' : 'text-gray-500 group-focus-within:text-blue-600'
                    }`}>Event Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={eventForm.title}
                    onChange={handleEventFormChange}
                    placeholder="ENTER EVENT TITLE"
                    className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                        ? 'border-gray-700 text-white focus:border-blue-500 placeholder-gray-600'
                        : 'border-gray-300 text-gray-900 focus:border-blue-600 placeholder-gray-400'
                      }`}
                    required
                  />
                </div>
                <div className="group">
                  <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-blue-400' : 'text-gray-500 group-focus-within:text-blue-600'
                    }`}>Category *</label>
                  <select
                    name="category"
                    value={eventForm.category}
                    onChange={handleEventFormChange}
                    className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                        ? 'border-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 text-gray-900 focus:border-blue-600'
                      }`}
                    required
                  >
                    <option value="" className="text-black">SELECT CATEGORY</option>
                    <option value="Events" className="text-black">Events</option>
                    <option value="Technical" className="text-black">Technical</option>
                    <option value="Cultural" className="text-black">Cultural</option>
                    <option value="Sports" className="text-black">Sports</option>
                    <option value="Career" className="text-black">Career</option>
                    <option value="Alumni" className="text-black">Alumni</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-blue-400' : 'text-gray-500 group-focus-within:text-blue-600'
                  }`}>Event Description *</label>
                <textarea
                  name="description"
                  value={eventForm.description}
                  onChange={handleEventFormChange}
                  placeholder="Describe the event details, agenda, and what attendees can expect..."
                  rows={6}
                  className={`w-full px-4 py-3 bg-transparent border-2 focus:outline-none transition-colors duration-300 resize-none rounded-none ${isDarkMode
                      ? 'border-gray-700 text-white focus:border-blue-500 placeholder-gray-600'
                      : 'border-gray-300 text-gray-900 focus:border-blue-600 placeholder-gray-400'
                    }`}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-blue-400' : 'text-gray-500 group-focus-within:text-blue-600'
                    }`}>Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={eventForm.date}
                    onChange={handleEventFormChange}
                    className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                        ? 'border-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 text-gray-900 focus:border-blue-600'
                      }`}
                    required
                  />
                </div>
                <div className="group">
                  <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-blue-400' : 'text-gray-500 group-focus-within:text-blue-600'
                    }`}>Time *</label>
                  <input
                    type="time"
                    name="time"
                    value={eventForm.time}
                    onChange={handleEventFormChange}
                    className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                        ? 'border-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 text-gray-900 focus:border-blue-600'
                      }`}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-blue-400' : 'text-gray-500 group-focus-within:text-blue-600'
                    }`}>Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={eventForm.location}
                    onChange={handleEventFormChange}
                    placeholder="ENTER EVENT LOCATION"
                    className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                        ? 'border-gray-700 text-white focus:border-blue-500 placeholder-gray-600'
                        : 'border-gray-300 text-gray-900 focus:border-blue-600 placeholder-gray-400'
                      }`}
                    required
                  />
                </div>
                <div className="group">
                  <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400 group-focus-within:text-blue-400' : 'text-gray-500 group-focus-within:text-blue-600'
                    }`}>Expected Attendees</label>
                  <input
                    type="number"
                    name="attendees"
                    value={eventForm.attendees}
                    onChange={handleEventFormChange}
                    placeholder="NUMBER OF ATTENDEES"
                    className={`w-full px-4 py-3 bg-transparent border-b-2 focus:outline-none transition-colors duration-300 font-medium rounded-none ${isDarkMode
                        ? 'border-gray-700 text-white focus:border-blue-500 placeholder-gray-600'
                        : 'border-gray-300 text-gray-900 focus:border-blue-600 placeholder-gray-400'
                      }`}
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 border-2 ${isDarkMode
                      ? 'bg-white text-black border-white hover:bg-transparent hover:text-white'
                      : 'bg-black text-white border-black hover:bg-transparent hover:text-black'
                    }`}
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