import React, { useState } from 'react';
import Heronews from '../../Components/Hero/Heronews';
import Postnews from './Postnews';
import { useTheme } from '../../context/ThemeContext';
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark, FaEye, FaClock, FaCalendar, FaUser, FaSearch, FaFilter, FaMapMarkerAlt, FaUsers, FaNewspaper } from 'react-icons/fa';

// Sample news data - will be handled by backend 
const newsArticles = [
  {
    id: 1,
    title: "College Achieves 100% Placement Record",
    category: "Placements",
    date: "2025-01-12",
    author: "Dr. shubra jain",
    readTime: "3 min read",
    excerpt: "Our college has achieved an outstanding 100% placement record this year, with students securing positions in top companies worldwide.",
    content: "The placement season has been exceptionally successful this year, with all graduating students receiving job offers from prestigious companies. The average package offered was ₹8.5 LPA, with the highest package reaching ₹25 LPA.",
    tags: ["placement", "achievement", "career"],
    isEvent: false,
    views: 1247,
    likes: 89,
  },
  {
    id: 2,
    title: "New Computer Science Lab Inaugurated",
    category: "Infrastructure",
    date: "2025-01-08",
    author: "Prof. Taha rafi",
    readTime: "2 min read",
    excerpt: "State-of-the-art computer science laboratory with latest technology inaugurated to enhance student learning experience.",
    content: "The new computer science laboratory features cutting-edge equipment including high-performance workstations, virtual reality setups, and AI development kits.",
    tags: ["infrastructure", "technology", "education"],
    isEvent: false,
    views: 892,
    likes: 56,
  },
  {
    id: 3,
    title: "Alumni Success Story: From Campus to CEO",
    category: "Alumni",
    date: "2025-01-05",
    author: "Alumni Association",
    readTime: "4 min read",
    excerpt: "2015 graduate Amit Kumar shares his journey from campus to becoming CEO of his own tech startup.",
    content: "Amit Kumar, a 2015 Computer Science graduate, has successfully built and scaled his startup to serve over 1 million users globally.",
    tags: ["alumni", "success", "entrepreneurship"],
    isEvent: false,
    views: 2156,
    likes: 134,
  },
  {
    id: 4,
    title: "Virtual Tech Talk by 2018 Alumnus @ Google",
    category: "Events",
    date: "2025-01-25",
    time: "7:00 PM - 8:30 PM",
    location: "Online (Zoom)",
    author: "Rahul Sharma",
    company: "Google",
    attendees: 150,
    registration: "Open",
    excerpt: "Join us for an insightful tech talk by our 2018 alumnus Rahul Sharma who is currently working at Google.",
    content: "Rahul will share his experience working at Google and provide insights into the latest technology trends.",
    tags: ["webinar", "tech", "alumni"],
    isEvent: true,
    views: 567,
    likes: 23,
  }
];

function NewsCard({ news }) {
  const { isDarkMode } = useTheme();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className={`group relative overflow-hidden  border shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl glass-effect ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900/80 border-teal-900 hover:border-teal-500/50' 
        : 'bg-white/80 border-teal-100 hover:border-teal-500/50'
    }`}>
      {/* Header with Gradient */}
      <div className={`relative h-20 bg-gradient-to-br ${
        news.isEvent
          ? isDarkMode 
            ? 'from-blue-700 via-blue-800 to-purple-900' 
            : 'from-blue-300 via-blue-400 to-purple-400'
          : isDarkMode 
            ? 'from-teal-700 via-teal-800 to-blue-900' 
            : 'from-teal-300 via-teal-400 to-blue-400'
      }`}>
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-6">
          <span className={`px-4 py-1.5  text-xs font-bold shadow ${
            news.isEvent 
              ? isDarkMode 
                ? 'bg-blue-900/80 text-blue-300 border border-blue-700' 
                : 'bg-blue-100 text-blue-700 border border-blue-200'
              : isDarkMode 
                ? 'bg-teal-900/80 text-teal-300 border border-teal-700' 
                : 'bg-teal-100 text-teal-700 border border-teal-200'
          }`}>
            {news.category}
          </span>
        </div>

        {/* Bookmark Button */}
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`absolute top-4 right-6 p-2  transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-950/50 hover:bg-gray-950/80 backdrop-blur-sm' 
              : 'bg-white/50 hover:bg-white/80 backdrop-blur-sm'
          }`}
        >
          {isBookmarked ? (
            <FaBookmark className={`w-4 h-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
          ) : (
            <FaRegBookmark className={`w-4 h-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
          )}
        </button>
      </div>

      <div className="relative p-6 pt-6">
        {/* Title */}
        <h3 className={`text-2xl font-bold mb-3 leading-tight gradient-text hover:underline cursor-pointer`}>
          {news.title}
        </h3>

        {/* Date and Read Time */}
        <div className={`flex items-center gap-4 mb-4 text-sm ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <div className="flex items-center gap-2">
            <FaCalendar className={`w-4 h-4 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
            <span className="font-medium">{news.date}</span>
          </div>
          <span className={isDarkMode ? 'text-gray-600' : 'text-gray-400'}>•</span>
          <div className="flex items-center gap-2">
            <FaClock className={`w-4 h-4 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
            <span className="font-medium">{news.readTime}</span>
          </div>
        </div>

        {/* Excerpt */}
        <p className={`text-base mb-4 line-clamp-3 leading-relaxed ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {news.excerpt}
        </p>

        {/* Event Details */}
        {news.isEvent && (
          <div className={`mb-4 p-4  border ${
            isDarkMode 
              ? 'bg-blue-900/30 border-blue-700/50' 
              : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <FaClock className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{news.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{news.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{news.attendees} attendees</span>
              </div>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {news.tags.map((tag, index) => (
            <span key={index} className={`px-3 py-1  text-xs font-semibold shadow ${
              isDarkMode 
                ? 'bg-gray-700/60 text-gray-300' 
                : 'bg-gray-100 text-gray-700'
            }`}>
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className={`flex justify-between items-center pt-4 border-t ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex items-center gap-4">
            {/* Author */}
            <div className="flex items-center gap-2">
              <FaUser className={`w-4 h-4 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
              <span className={`text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {news.author}
              </span>
            </div>
            
            {/* Stats */}
            <div className={`flex items-center gap-3 text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <div className="flex items-center gap-1">
                <FaEye className="w-4 h-4" />
                <span>{news.views}</span>
              </div>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-1 transition-colors ${
                  isLiked ? 'text-red-500' : ''
                }`}
              >
                {isLiked ? <FaHeart className="w-4 h-4" /> : <FaRegHeart className="w-4 h-4" />}
                <span>{news.likes + (isLiked ? 1 : 0)}</span>
              </button>
            </div>
          </div>
          
          <button className={`px-5 py-2.5  font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover-glow ${
            news.isEvent
              ? isDarkMode 
                ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
              : isDarkMode 
                ? 'bg-teal-600 hover:bg-teal-500 text-white' 
                : 'bg-teal-600 hover:bg-teal-700 text-white'
          }`}>
            {news.isEvent ? 'Register' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function News() {
  const { isDarkMode } = useTheme();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('all');

  const categories = ['All', 'Placements', 'Infrastructure', 'Alumni', 'Events'];
  const tabs = [
    { id: 'all', label: 'All Content', icon: FaNewspaper },
    { id: 'news', label: 'News', icon: FaNewspaper },
    { id: 'events', label: 'Events', icon: FaCalendar }
  ];

  const filteredNews = newsArticles.filter(news => {
    const matchesSearch =
      news.title.toLowerCase().includes(search.toLowerCase()) ||
      news.author.toLowerCase().includes(search.toLowerCase()) ||
      news.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    
    const matchesCategory = category === 'all' || news.category.toLowerCase() === category.toLowerCase();
    const matchesTab = activeTab === 'all' || (activeTab === 'events' && news.isEvent) || (activeTab === 'news' && !news.isEvent);
    
    return matchesSearch && matchesCategory && matchesTab;
  });

  return (
    <div className={`min-h-screen pb-16 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      <div className="w-full flex justify-center">
        <Heronews />
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 mt-8 mb-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className={`inline-block px-4 py-2  font-semibold mb-4 shadow ${
            isDarkMode ? 'bg-teal-900/80 text-teal-300' : 'bg-teal-100 text-teal-700'
          }`}>Latest Updates</span>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 tracking-tight gradient-text`}>
            News & Events
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Stay updated with the latest news, achievements, and upcoming events
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className={`inline-flex gap-2 p-2  ${
            isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200 shadow'
          }`}>
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3  font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? isDarkMode
                        ? 'bg-teal-600 text-white'
                        : 'bg-teal-600 text-white'
                      : isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search and Filter */}
        <div className={`mb-8 p-6  shadow-lg border ${
          isDarkMode 
            ? 'bg-gray-900/50 border-teal-900 backdrop-blur-sm' 
            : 'bg-white/80 border-teal-100 backdrop-blur-sm'
        }`}>
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search news, events, or tags..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`w-full pl-12 pr-4 py-3  border-2 outline-none transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-950 border-gray-700 text-white placeholder-gray-500 focus:border-teal-500' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-teal-500'
                }`}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-4 pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}">
            <label className={`block text-sm font-semibold mb-3 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <FaFilter className="inline mr-2" />
              Filter by Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat.toLowerCase())}
                  className={`px-4 py-2  font-medium transition-all duration-300 ${
                    category === cat.toLowerCase()
                      ? isDarkMode
                        ? 'bg-teal-600 text-white'
                        : 'bg-teal-600 text-white'
                      : isDarkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className={`mb-6 text-center ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <span className="font-semibold">{filteredNews.length}</span> {activeTab === 'all' ? 'items' : activeTab} found
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredNews.length > 0 ? (
            filteredNews.map(news => <NewsCard key={news.id} news={news} />)
          ) : (
            <div className={`col-span-full text-center py-12 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <div className={`w-16 h-16 mx-auto mb-4  flex items-center justify-center ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-200'
              }`}>
                <FaSearch className={`w-8 h-8 ${
                  isDarkMode ? 'text-gray-600' : 'text-gray-400'
                }`} />
              </div>
              <h3 className={`text-lg font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>No {activeTab === 'all' ? 'content' : activeTab} found</h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}