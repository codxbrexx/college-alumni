import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { 
  FaUsers, 
  FaBriefcase, 
  FaNewspaper, 
  FaGraduationCap,
  FaArrowRight,
  FaLinkedin,
  FaNetworkWired,
  FaChartLine,
  FaHandshake
} from 'react-icons/fa'
import CountUp from 'react-countup'

function Home() {
  const { isDarkMode } = useTheme();

  const stats = [
    { id: 1, label: 'Active Alumni', value: 5000, icon: <FaUsers className="w-8 h-8" />, suffix: '+' },
    { id: 2, label: 'Job Opportunities', value: 850, icon: <FaBriefcase className="w-8 h-8" />, suffix: '+' },
    { id: 3, label: 'Success Stories', value: 1200, icon: <FaGraduationCap className="w-8 h-8" />, suffix: '+' },
    { id: 4, label: 'Network Connections', value: 15000, icon: <FaNetworkWired className="w-8 h-8" />, suffix: '+' }
  ];

  const features = [
    {
      id: 1,
      icon: <FaUsers className="w-12 h-12" />,
      title: 'Connect with Alumni',
      description: 'Build meaningful connections with alumni across different batches and industries.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: <FaBriefcase className="w-12 h-12" />,
      title: 'Find Opportunities',
      description: 'Discover exclusive job openings and internships posted by fellow alumni.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      icon: <FaNewspaper className="w-12 h-12" />,
      title: 'Stay Updated',
      description: 'Get the latest news, events, and achievements from the alumni community.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      icon: <FaHandshake className="w-12 h-12" />,
      title: 'Mentor & Grow',
      description: 'Share your expertise and help upcoming students achieve their career goals.',
      gradient: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Hero Section */}
      <section className={`relative overflow-hidden ${
        isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-teal-50 via-white to-blue-50'
      }`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-20 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl ${
            isDarkMode ? 'bg-teal-500' : 'bg-teal-300'
          }`} />
          <div className={`absolute bottom-20 -right-20 w-96 h-96 rounded-full opacity-20 blur-3xl ${
            isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
          }`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`inline-block px-4 py-2 rounded-full mb-6 ${
              isDarkMode 
                ? 'bg-teal-500/10 border border-teal-500/20 text-teal-400' 
                : 'bg-teal-100 border border-teal-200 text-teal-700'
            }`}>
              <span className="text-sm font-semibold">🎓 Welcome to NetGrud Alumni Network</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Where Alumni{' '}
              <span className={`font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Connect
              </span>
              ,{' '}
              <span className={`font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Collaborate
              </span>
              {' '}&{' '}
              <span className={`font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Succeed
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Join thousands of alumni building lifelong connections, sharing opportunities, 
              and creating impact. Your next career move starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register">
                <button className={`group px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600' 
                    : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700'
                }`}>
                  Get Started
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link to="/alumni">
                <button className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700' 
                    : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 shadow-lg'
                }`}>
                  Explore Alumni
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="relative">
          <svg className={`w-full h-16 ${isDarkMode ? 'text-gray-900' : 'text-gray-50'}`} viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48h1440V0c-180 48-360 48-540 24C720 0 540 0 360 24 180 48 0 48 0 0v48z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`relative group p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-800/50 border border-gray-700 hover:border-teal-500/50' 
                    : 'bg-white border border-gray-200 hover:border-teal-500/50 shadow-lg'
                }`}
              >
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDarkMode ? 'bg-gradient-to-br from-teal-500/10 to-blue-500/10' : 'bg-gradient-to-br from-teal-50 to-blue-50'
                }`} />
                
                <div className="relative z-10">
                  <div className={`mb-3 ${
                    isDarkMode ? 'text-teal-400' : 'text-teal-600'
                  }`}>
                    {stat.icon}
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold mb-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    <CountUp end={stat.value} duration={2.5} separator="," />
                    {stat.suffix}
                  </div>
                  <div className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${
        isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Why Join NetGrud?
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Unlock endless possibilities with our comprehensive alumni platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`group relative p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                  isDarkMode 
                    ? 'bg-gray-800 border border-gray-700 hover:border-transparent' 
                    : 'bg-white border border-gray-200 hover:border-transparent shadow-lg'
                }`}
              >
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${feature.gradient}`} style={{ opacity: 0.1 }} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br ${feature.gradient} text-white`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  
                  <p className={`${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${
        isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-700' : 'bg-gradient-to-b from-teal-30 to-teal-20'
      }`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-500">
            Ready to Join Our Growing Community?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-400">
            Connect with thousands of alumni, discover opportunities, and take your career to the next level.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <button className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-x ${
                isDarkMode ? 'bg-white text-teal-600 hover:bg-gray-100' : 'bg-white text-teal-600 border border-gray-200 hover:bg-gray-50'
              }`}>
                Create Account
              </button>
            </Link>
            <Link to="/about">
              <button className={`px-8 py-4 border-2 rounded-xl font-semibold transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-transparent border-white text-white hover:bg-white hover:text-teal-600' 
                  : 'bg-transparent border-gray-200 text-gray-400 hover:bg-white hover:text-teal-600'
              }`}>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home