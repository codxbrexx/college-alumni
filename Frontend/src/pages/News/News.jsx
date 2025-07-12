import React, { useState } from 'react';
import Heronews from '../../Components/Hero/Heronews';
import Postnews from './Postnews';
import { useTheme } from '../../context/ThemeContext';

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
    <div className={`rounded-xl shadow-md border hover:shadow-lg transition-all duration-300 p-6 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700 text-white' 
        : 'bg-white border-gray-100'
    }`}>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            news.isEvent 
              ? isDarkMode 
                ? 'bg-blue-900 text-blue-300' 
                : 'bg-blue-100 text-blue-700'
              : isDarkMode 
                ? 'bg-teal-900 text-teal-300' 
                : 'bg-teal-100 text-teal-700'
          }`}>
            {news.category}
          </span>

        </div>
        <div className={`flex items-center gap-2 text-sm ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          <span>{news.date}</span>
          <span>•</span>
          <span>{news.readTime}</span>
        </div>
      </div>

      <h3 className={`text-xl font-bold mb-3 hover:text-teal-600 transition-colors cursor-pointer ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>
        {news.title}
      </h3>

      <p className={`mb-4 leading-relaxed ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {news.excerpt}
      </p>

      {news.isEvent && (
        <div className={`mb-4 p-4 rounded-lg border ${
          isDarkMode 
            ? 'bg-blue-900/50 border-blue-700' 
            : 'bg-blue-50 border-blue-100'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-blue-600"></span>
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{news.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600"></span>
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{news.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600"></span>
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{news.attendees} attendees</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {news.tags.map((tag, index) => (
          <span key={index} className={`px-2 py-1 rounded text-xs ${
            isDarkMode 
              ? 'bg-gray-700 text-gray-300' 
              : 'bg-gray-100 text-gray-700'
          }`}>
            #{tag}
          </span>
        ))}
      </div>

      <div className={`flex justify-between items-center pt-4 border-t ${
        isDarkMode ? 'border-gray-700' : 'border-gray-100'
      }`}>
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            By {news.author}
          </div>
          
          <div className={`flex items-center gap-4 text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {news.views}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {news.likes}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full transition-colors ${
              isLiked 
                ? 'bg-red-100 text-red-500' 
                : isDarkMode 
                  ? 'bg-gray-700 text-gray-400 hover:bg-red-900 hover:text-red-400' 
                  : 'bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-500'
            }`}
          >
            <svg className="w-4 h-4" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          
          <button 
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-2 rounded-full transition-colors ${
              isBookmarked 
                ? 'bg-yellow-100 text-yellow-500' 
                : isDarkMode 
                  ? 'bg-gray-700 text-gray-400 hover:bg-yellow-900 hover:text-yellow-400' 
                  : 'bg-gray-100 text-gray-500 hover:bg-yellow-100 hover:text-yellow-500'
            }`}
          >
            <svg className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
          
          <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors text-sm">
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

  const filteredNews = newsArticles.filter(news => {
    const matchesSearch =
      news.title.toLowerCase().includes(search.toLowerCase()) ||
      news.author.toLowerCase().includes(search.toLowerCase()) ||
      news.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    
    const matchesCategory = category === 'all' || news.category.toLowerCase() === category.toLowerCase();
    const matchesTab = activeTab === 'all' || (activeTab === 'events' && news.isEvent) || (activeTab === 'news' && !news.isEvent);
    
    return matchesSearch && matchesCategory && matchesTab;
  });

  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
    author: '',
    date: '',
    time: '',
    location: '',
    isEvent: false,
  });

  const handleFormChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    alert('News/Event submitted! (This is a placeholder, no backend yet)');
    setForm({
      title: '', category: '', description: '', author: '', date: '', time: '', location: '', isEvent: false
    });
  };

  return (
    <div className={`min-h-screen pb-16 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="w-full flex justify-center">
        <Heronews />
      </div>

      <section className="max-w-6xl mx-auto px-4 mt-20 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredNews.length > 0 ? (
            filteredNews.map(news => <NewsCard key={news.id} news={news} />)
          ) : (
            <div className={`col-span-full text-center py-12 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <svg className={`w-16 h-16 mx-auto mb-4 ${
                isDarkMode ? 'text-gray-600' : 'text-gray-300'
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-lg">No {activeTab === 'all' ? 'content' : activeTab} found.</p>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* <Postnews /> */}
      
    </div>
  );
}