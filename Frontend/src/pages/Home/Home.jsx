import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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


function Home() {
  const stats = [
    { id: 1, label: 'Active Alumni', value: 1000, icon: <FaUsers className="w-8 h-8" />, suffix: '+' },
    { id: 2, label: 'Job Opportunities', value: 850, icon: <FaBriefcase className="w-8 h-8" />, suffix: '+' },
    { id: 3, label: 'Success Stories', value: 1200, icon: <FaGraduationCap className="w-8 h-8" />, suffix: '+' },
    { id: 4, label: 'Network Connections Soon', value: 15000, icon: <FaNetworkWired className="w-8 h-8" />, suffix: '+' }
  ];

  /* features array removed */

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-white text-gray-900">
      {/* Hero Section - Editorial Style with Overlap */}
      <section className="relative flex flex-col w-full mb-12">
        {/* Top: Image Area */}
        <div className="w-full h-[500px] md:h-[620px] overflow-hidden relative">
          <img
            src="/Homehero.jpg"
            alt="University Campus"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlapping Content Area */}
        <div className="relative z-10 px-6 -mt-48 md:-mt-58">
          <div className="max-w-5xl mx-auto p-8 md:p-14 shadow-2xl bg-white border-t-4 border-red-600">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row gap-8 md:gap-12"
            >
              {/* Decorative Red Line & Subhead Container */}
              <div className="flex flex-row md:flex-col gap-4 md:gap-0 shrink-0 md:w-48 pt-2">
                <div className="w-12 h-1 md:w-full md:h-1 bg-red-600 mb-4"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-red-600 font-bold tracking-widest text-xs uppercase">
                    Ideas made to matter
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Future of Alumni
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-col flex-grow">
                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-gray-900 tracking-tight">
                  Welcome Home
                </h1>

                {/* Byline */}
                <div className="flex items-center gap-2 text-xs font-medium mb-8 border-b pb-8 text-gray-500 border-gray-200">
                  <FaGraduationCap className="text-red-600 text-lg" />
                  <span className="font-bold text-sm uppercase text-gray-900 tracking-wider">NetGrad Association</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="tracking-wide">Est. 2025</span>
                </div>

                {/* Lead Text */}
                <p className="text-lg md:text-xl font-serif leading-relaxed mb-10 text-gray-600">
                  Connect, collaborate, and grow with thousands of alumni building lifelong connections. Your journey doesn't end at graduation—it's just beginning.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/alumni">
                    <button className="px-8 py-3.5 font-bold uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-red-900/20 border-2 border-transparent bg-gray-900 text-white hover:bg-red-700 hover:border-red-700 rounded-none w-full sm:w-auto">
                      Explore Alumni Network
                    </button>
                  </Link>
                  <Link to="/job">
                    <button className="px-8 py-3.5 font-bold uppercase tracking-widest text-xs transition-all border-2 text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white rounded-none w-full sm:w-auto">
                      Find Opportunities
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 border-y bg-white border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-gray-100">
          {stats.map((stat) => (
            <div key={stat.id} className="transition-transform duration-300 group">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 font-serif group-hover:text-red-600 transition-colors">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-gray-900">
              Why Join NetGrad?
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Unlock a suite of exclusive resources designed to help you succeed at every stage of your career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<FaBriefcase />}
              title="Career Opportunities"
              desc="Access exclusive job boards, internships, and career resources shared by fellow alumni."
            />
            <BenefitCard
              icon={<FaHandshake />}
              title="Mentorship Programs"
              desc="Connect with industry leaders or become a mentor to guide the next generation."
            />
            <BenefitCard
              icon={<FaNetworkWired />}
              title="Network & Connect"
              desc="Build meaningful relationships with alumni across different batches and industries."
            />
            <BenefitCard
              icon={<FaNewspaper />}
              title="Stay Updated"
              desc="Get the latest news, events, and achievements from the alumni community."
            />
            <BenefitCard
              icon={<FaGlobeAmericas />}
              title="Global Chapters"
              desc="Join regional alumni chapters to stay connected wherever you live."
            />
            <BenefitCard
              icon={<FaGraduationCap />}
              title="Lifelong Learning"
              desc="Access continuing education courses and professional development resources."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-gray-900">
            Ready to expand your network?
          </h2>
          <p className="text-lg mb-8 leading-relaxed text-gray-600">
            Join thousands of alumni building lifelong connections, sharing opportunities, and creating impact together.
          </p>
          <Link to="/alumni" className="text-red-600 font-semibold text-lg hover:underline underline-offset-4">
            Explore the Alumni Directory &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}

// Helper Components
function BenefitCard({ icon, title, desc }) {
  return (
    <div className="p-6 border transition-all hover:-translate-y-1 hover:shadow-lg bg-white border-gray-200">
      <div className="w-12 h-12 flex items-center justify-center text-xl mb-4 bg-red-50 text-red-600">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}

export default Home