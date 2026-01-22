import React, { useState, useEffect } from 'react';
import Heronews from '../../Components/Hero/Heronews';
import { useTheme } from '../../context/ThemeContext';
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark, FaEye, FaClock, FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

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
    <div className={`group relative flex flex-col h-full border transition-all duration-300 hover:shadow-2xl ${isDarkMode
      ? 'bg-gray-900 border-gray-800'
      : 'bg-white border-gray-200'
      }`}>

      {/* Editorial Header Image Placeholder (or Gradient if no image) */}
      <div className={`h-48 relative overflow-hidden ${news.isEvent
        ? 'bg-gradient-to-r from-blue-900 to-gray-900'
        : 'bg-gradient-to-r from-red-900 to-gray-900'
        }`}>
        <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('/alumnibg.jpg')] bg-cover bg-center"></div>
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 text-white bg-black/50 backdrop-blur-md`}>
            {news.category}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">

        {/* Meta Info */}
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-4 text-gray-400">
          <span className="flex items-center gap-1"><FaCalendar /> {news.date}</span>
          <span>•</span>
          <span className="text-red-600">{news.readTime || '5 min read'}</span>
        </div>

        {/* Title */}
        <h3 className={`text-2xl font-serif font-bold mb-4 leading-tight group-hover:underline decoration-2 underline-offset-4 decoration-red-600 ${isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
          {news.title}
        </h3>

        {/* Excerpt */}
        <p className={`text-base leading-relaxed mb-6 line-clamp-3 font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
          {news.excerpt}
        </p>

        {/* Footer Actions */}
        <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">

          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-black text-white'
              }`}>
              {news.author.charAt(0)}
            </div>
            <span className={`text-xs font-bold uppercase tracking-wide ${isDarkMode ? 'text-gray-400' : 'text-gray-900'
              }`}>
              {news.author}
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <button onClick={() => setIsLiked(!isLiked)} className={`flex items-center gap-1 transition-colors hover:text-red-500 ${isLiked ? 'text-red-500' : ''}`}>
              {isLiked ? <FaHeart /> : <FaRegHeart />} <span className="text-xs font-bold">{news.likes + (isLiked ? 1 : 0)}</span>
            </button>
            <button onClick={() => setIsBookmarked(!isBookmarked)} className={`hover:text-blue-500 transition-colors ${isBookmarked ? 'text-blue-500' : ''}`}>
              {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function News() {
  const { isDarkMode } = useTheme();

  // State for filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('news'); // 'news' or 'events'

  // Debounce State
  const [debouncedFilters, setDebouncedFilters] = useState({
    searchQuery: '',
    category: 'all',
    activeTab: 'news'
  });
  const [isSearching, setIsSearching] = useState(false);

  // Debounce Effect
  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      setDebouncedFilters({
        searchQuery,
        category,
        activeTab
      });
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, category, activeTab]);

  // Filter Logic
  const filteredNews = newsArticles.filter(item => {
    // 1. Tab Filter (News vs Events)
    if (debouncedFilters.activeTab === 'events' && !item.isEvent) return false;
    if (debouncedFilters.activeTab === 'news' && item.isEvent) return false;

    // 2. Search Query (Title, Excerpt, Author, Tags)
    const query = debouncedFilters.searchQuery.toLowerCase();
    const matchQuery =
      item.title.toLowerCase().includes(query) ||
      item.excerpt.toLowerCase().includes(query) ||
      item.author.toLowerCase().includes(query) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query)));

    if (!matchQuery) return false;

    // 3. Category Filter
    if (debouncedFilters.category !== 'all') {
      if (debouncedFilters.category === 'academics' && item.category !== 'Placements' && item.category !== 'Academics') return false; // Basic mapping
      if (debouncedFilters.category === 'alumni' && item.category !== 'Alumni') return false;
      if (debouncedFilters.category === 'campus' && item.category !== 'Infrastructure' && item.category !== 'Campus') return false;
      if (debouncedFilters.category === 'sports' && item.category !== 'Sports') return false;
    }

    return true;
  });

  return (
    <div className={`min-h-screen pb-16 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'
      }`}>
      <div className="w-full">
        <Heronews
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          category={category}
          setCategory={setCategory}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 mt-16 mb-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b pb-6 border-gray-200 dark:border-gray-800">
          <div>
            <h2 className={`text-4xl font-bold font-serif mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Latest Headlines
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
              Keeping you connected to your alma mater.
            </p>
          </div>
          <div className="flex gap-2">
            <button className={`p-2 border ${isDarkMode ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-gray-300 text-black hover:bg-gray-100'}`}>
              <span className="sr-only">List View</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <button className={`p-2 border ${isDarkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-black bg-black text-white'}`}>
              <span className="sr-only">Grid View</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            </button>
          </div>
        </div>

        {/* Headlines Grid (Featured Layout?) - For now detailed grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[200px]">
          {isSearching ? (
            <div className="col-span-full py-20 text-center">
              <div className="inline-block px-4 py-2 border border-gray-200 rounded-sm bg-gray-50 text-gray-500 text-sm font-bold animate-pulse">
                Searching Stories...
              </div>
            </div>
          ) : filteredNews.length > 0 ? (
            filteredNews.map(news => <NewsCard key={news.id} news={news} />)
          ) : (
            <div className="col-span-full py-20 text-center">
              <h3 className={`text-2xl font-serif font-bold mb-4 ${isDarkMode ? 'text-gray-800' : 'text-gray-200'
                }`}>No matching stories found</h3>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCategory('all');
                }}
                className="text-red-700 font-bold uppercase text-xs tracking-widest hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Pagination / Load More - Sharp Style */}
        <div className="mt-20 flex justify-center">
          <button className={`px-10 py-4 font-bold uppercase tracking-widest text-sm border-2 transition-all hover:bg-red-700 hover:border-red-700 hover:text-white ${isDarkMode
            ? 'border-gray-800 text-white'
            : 'border-black text-black'
            }`}>
            View Archives
          </button>
        </div>

      </section>
    </div>
  );
}