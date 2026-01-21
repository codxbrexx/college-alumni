import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
  FaHandshake,
  FaTicketAlt,
  FaGlobeAmericas
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
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Hero Section with Image Background */}
      <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="/college_hero.png"
            alt="University Campus"
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-lg md:text-xl font-medium mb-4 tracking-wide font-serif opacity-90">
              NetGrud Alumni Association
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 font-serif">
              Welcome Home
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed font-light">
              Connect, collaborate, and grow with thousands of alumni building lifelong connections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/alumni">
                <button className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
                  Explore Alumni Network
                </button>
              </Link>
              <Link to="/job">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 rounded-md font-semibold text-lg transition-all">
                  Find Opportunities
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className={`py-12 border-y ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="transition-transform duration-300 hover:scale-105">
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <CountUp end={stat.value} duration={2.5} separator="," />
                {stat.suffix}
              </div>
              <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Benefits Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Why Join NetGrud?
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Unlock a suite of exclusive resources designed to help you succeed at every stage of your career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<FaBriefcase />}
              title="Career Opportunities"
              desc="Access exclusive job boards, internships, and career resources shared by fellow alumni."
              isDark={isDarkMode}
            />
            <BenefitCard
              icon={<FaHandshake />}
              title="Mentorship Programs"
              desc="Connect with industry leaders or become a mentor to guide the next generation."
              isDark={isDarkMode}
            />
            <BenefitCard
              icon={<FaNetworkWired />}
              title="Network & Connect"
              desc="Build meaningful relationships with alumni across different batches and industries."
              isDark={isDarkMode}
            />
            <BenefitCard
              icon={<FaNewspaper />}
              title="Stay Updated"
              desc="Get the latest news, events, and achievements from the alumni community."
              isDark={isDarkMode}
            />
            <BenefitCard
              icon={<FaGlobeAmericas />}
              title="Global Chapters"
              desc="Join regional alumni chapters to stay connected wherever you live."
              isDark={isDarkMode}
            />
            <BenefitCard
              icon={<FaGraduationCap />}
              title="Lifelong Learning"
              desc="Access continuing education courses and professional development resources."
              isDark={isDarkMode}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-950' : 'bg-white'} text-center`}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className={`text-3xl md:text-5xl font-bold font-serif mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to expand your network?
          </h2>
          <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Join thousands of alumni building lifelong connections, sharing opportunities, and creating impact together.
          </p>
          <Link to="/alumni" className="text-teal-600 font-semibold text-lg hover:underline underline-offset-4">
            Explore the Alumni Directory &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}

// Helper Components
function BenefitCard({ icon, title, desc, isDark }) {
  return (
    <div className={`p-6 rounded-xl border transition-all hover:-translate-y-1 hover:shadow-lg ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-4 ${isDark ? 'bg-teal-900/50 text-teal-400' : 'bg-teal-50 text-teal-600'}`}>
        {icon}
      </div>
      <h3 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{desc}</p>
    </div>
  );
}

export default Home