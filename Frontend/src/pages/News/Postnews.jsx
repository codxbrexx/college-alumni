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
    <div className="min-h-screen bg-white py-24 px-4 font-sans no-scrollbar">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-xl border border-gray-100 mx-auto">

        {/* Left Side - Info Panel */}
        <div className="bg-gray-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-800 opacity-20 rotate-45"></div>
          <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-red-900 opacity-20"></div>

          <div>
            <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-2 block">
              Community Hub
            </span>
            <h2 className="text-4xl font-serif font-bold mb-6">Share Updates</h2>
            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
              Keep the alumni network informed. Post news about achievements, research, or announce upcoming reunions and meetups.
            </p>

            <div className="space-y-8 border-l-2 border-gray-800 pl-6">
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-red-600"></span>
                <h3 className="font-bold text-lg mb-1 font-serif">1. Choose Type</h3>
                <p className="text-gray-500 text-sm">News Article or Calendar Event?</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-gray-700"></span>
                <h3 className="font-bold text-lg mb-1 font-serif text-gray-400">2. Add Details</h3>
                <p className="text-gray-600 text-sm">Title, date, and description.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-gray-700"></span>
                <h3 className="font-bold text-lg mb-1 font-serif text-gray-400">3. Publish</h3>
                <p className="text-gray-600 text-sm">Visible to verified members.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            * All posts are subject to moderation guidelines.
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-12 w-full">

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('news')}
              className={`pb-4 px-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'news'
                ? 'text-red-700 border-b-2 border-red-700'
                : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              Post News
            </button>
            <button
              onClick={() => setActiveTab('event')}
              className={`pb-4 px-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'event'
                ? 'text-red-700 border-b-2 border-red-700'
                : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              Host Event
            </button>
          </div>

          {/* News Form */}
          {activeTab === 'news' && (
            <form className="space-y-8" onSubmit={handleNewsSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={newsForm.title}
                    onChange={handleNewsFormChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all placeholder-gray-400 font-medium"
                    placeholder="HEADLINE"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Category *</label>
                  <select
                    name="category"
                    value={newsForm.category}
                    onChange={handleNewsFormChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all text-gray-700 font-medium"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Academics">Academics</option>
                    <option value="Achievements">Achievements</option>
                    <option value="Career">Career</option>
                    <option value="Alumni">Alumni</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Description *</label>
                <textarea
                  name="description"
                  value={newsForm.description}
                  onChange={handleNewsFormChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 resize-none transition-all placeholder-gray-400"
                  placeholder="Write your article here..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Author *</label>
                  <input
                    type="text"
                    name="author"
                    value={newsForm.author}
                    onChange={handleNewsFormChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all placeholder-gray-400 font-medium"
                    placeholder="YOUR NAME"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={newsForm.date}
                    onChange={handleNewsFormChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all text-gray-700 font-medium"
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300">
                  Publish News
                </button>
              </div>
            </form>
          )}

          {/* Event Form */}
          {activeTab === 'event' && (
            <form className="space-y-8" onSubmit={handleEventSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Event Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={eventForm.title}
                    onChange={handleEventFormChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all placeholder-gray-400 font-medium"
                    placeholder="EVENT NAME"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Category *</label>
                  <select
                    name="category"
                    value={eventForm.category}
                    onChange={handleEventFormChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all text-gray-700 font-medium"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Events">General Event</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Webinar">Webinar</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Event Details *</label>
                <textarea
                  name="description"
                  value={eventForm.description}
                  onChange={handleEventFormChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 resize-none transition-all placeholder-gray-400"
                  placeholder="Agenda, speakers, and details..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={eventForm.date}
                    onChange={handleEventFormChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all text-gray-700 font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Time *</label>
                  <input
                    type="time"
                    name="time"
                    value={eventForm.time}
                    onChange={handleEventFormChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all text-gray-700 font-medium"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={eventForm.location}
                    onChange={handleEventFormChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all placeholder-gray-400 font-medium"
                    placeholder="VENUE OR LINK"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Expected Attendees</label>
                  <input
                    type="number"
                    name="attendees"
                    value={eventForm.attendees}
                    onChange={handleEventFormChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:outline-none focus:border-red-700 focus:ring-0 transition-all placeholder-gray-400 font-medium"
                    placeholder="e.g. 50"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300">
                  Publish Event
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}