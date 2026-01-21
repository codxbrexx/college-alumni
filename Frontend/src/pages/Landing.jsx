import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
  FaBriefcase,
  FaCalendarAlt,
  FaArrowRight,
  FaMoon,
  FaSun,
  FaBuilding,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaTicketAlt,
  FaQuoteLeft,
  FaQuestionCircle,
  FaGlobeAmericas,
  FaUserGraduate
} from 'react-icons/fa';

export default function Landing() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'}`}>

      {/* Navbar - Clean & Minimal */}
      <nav className={`fixed w-full z-50 border-b transition-colors duration-300 ${isDarkMode ? 'bg-gray-950/95 border-gray-800' : 'bg-white/95 border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Dynamic Logo based on Theme */}
            <img
              src={isDarkMode ? "/NetGrudDarkTheme.png" : "/NetGrud.png"}
              alt="NetGrud Logo"
              className="h-20 md:h-20 object-contain"
            />
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>
            <div className="hidden md:flex items-center gap-4">
              <Link to="/login" className={`font-medium hover:underline underline-offset-4 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>
                Log In
              </Link>
              <Link to="/register">
                <button className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                  Join Platform
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Reference Style (Immersive Background) */}
      <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 mt-20">
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
              Helping you keep your alma mater close, wherever your journey takes you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <button className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
                  Join the Community
                </button>
              </Link>
              <Link to="/home">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 rounded-md font-semibold text-lg transition-all">
                  Explore Directory
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* "All Together" Section (Reference Match) */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-900'} text-white text-center`}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            All Alumni, all together, <br /> all in one place.
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            The Alumni Directory is your gateway to the global community. Update your profile, connect with old friends, and unlock exclusive opportunities. It's safe, verified, and built for you.
          </p>
          <Link to="/home" className="text-teal-400 font-semibold text-lg hover:underline underline-offset-4">
            Explore the Directory &rarr;
          </Link>
        </div>
      </section>

      {/* Stats Strip */}
      <section className={`py-12 border-y ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem number="2015" label="Established" isDark={isDarkMode} />
          <StatItem number="5k+" label="Alumni" isDark={isDarkMode} />
          <StatItem number="150+" label="Companies" isDark={isDarkMode} />
          <StatItem number="42" label="Chapters" isDark={isDarkMode} />
        </div>
      </section>

      {/* Featured Benefits Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6 pl-12 pr-12">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Membership Benefits</h2>
            <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Unlock a suite of exclusive resources designed to help you succeed at every stage of your career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<FaBriefcase />}
              title="Career Support"
              desc="Access exclusive job boards, resume reviews, and career coaching sessions."
              isDark={isDarkMode}
            />
            <BenefitCard
              icon={<FaHandHoldingHeart />}
              title="Mentorship Programs"
              desc="Connect with industry leaders or become a mentor to guide the next generation."
              isDark={isDarkMode}
            />
            <BenefitCard
              icon={<FaGraduationCap />}
              title="Lifelong Learning"
              desc="Get discounts on continuing education courses and access to the university library."
              isDark={isDarkMode}
            />
            <BenefitCard
              icon={<FaTicketAlt />}
              title="Exclusive Events"
              desc="Priority access to reunions, networking mixers, and guest lectures."
              isDark={isDarkMode}
            />
            <BenefitCard
              icon={<FaGlobeAmericas />}
              title="Global Chapters"
              desc="Join regional alumni chapters to stay connected wherever you live."
              isDark={isDarkMode}
            />
            <BenefitCard
              icon={<FaUserGraduate />}
              title="Giving Back"
              desc="Opportunities to volunteer, donate, and support current students."
              isDark={isDarkMode}
            />
          </div>
        </div>
      </section>

      {/* Alumni Spotlight Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Distinguished Alumni</h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Graduates making waves in the industry.</p>
          </div>
          <button className={`font-semibold hover:underline ${isDarkMode ? 'text-teal-400' : 'text-teal-700'}`}>View All</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AlumniCard
            name="Sarah Jenkins"
            role="Senior Engineer at Google"
            batch="Batch of 2015"
            isDark={isDarkMode}
          />
          <AlumniCard
            name="David Chen"
            role="Software Engineer at TechFlow"
            batch="Batch of 2018"
            isDark={isDarkMode}
          />
          <AlumniCard
            name="Priya Patel"
            role="Product Director at Microsoft"
            batch="Batch of 2018"
            isDark={isDarkMode}
          />
        </div>
      </section>

      {/* Community Voices (Testimonials) */}
      <section className={`py-24 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-100'} pl-12 pr-12`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-12 text-center font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Community Voices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="This platform helped me transition from engineering to product management. The mentorship I received was invaluable."
              author="James Wilson"
              role="PM at Spotify, Class of '19"
              isDark={isDarkMode}
            />
            <TestimonialCard
              quote="I found my co-founder through the Alumni Annual Meet. It's amazing to see how strong our community really is."
              author="Anita Roy"
              role="Founder, GreenTech, Class of '14"
              isDark={isDarkMode}
            />
          </div>
        </div>
      </section>

      {/* Opportunities Preview */}
      <section className={`py-24 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* Recent Jobs */}
          <div>
            <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <FaBriefcase className="text-teal-600" />
              Recent Opportunities
            </h2>
            <div className="space-y-4">
              <JobRow title="Frontend Developer" company="Adobe" location="Remote" isDark={isDarkMode} />
              <JobRow title="Data Scientist" company="Spotify" location="New York, NY" isDark={isDarkMode} />
              <JobRow title="Product Manager" company="Uber" location="San Francisco, CA" isDark={isDarkMode} />
              <JobRow title="UX Researcher" company="Airbnb" location="Remote" isDark={isDarkMode} />
            </div>
            <button className={`mt-6 font-semibold flex items-center gap-2 hover:underline ${isDarkMode ? 'text-teal-400' : 'text-teal-700'}`}>
              View all 240+ jobs <FaArrowRight />
            </button>
          </div>

          {/* Upcoming Events */}
          <div>
            <h2 className={`text-3xl font-bold mb-8 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <FaCalendarAlt className="text-teal-600" />
              Upcoming Events
            </h2>
            <div className="space-y-4">
              <EventRow day="15" month="MAR" title="Annual Alumni Reunion 2026" type="In-Person" isDark={isDarkMode} />
              <EventRow day="22" month="MAR" title="Tech Talk: AI in 2026" type="Virtual" isDark={isDarkMode} />
              <EventRow day="05" month="APR" title="Campus Mentorship Drive" type="Campus" isDark={isDarkMode} />
            </div>
            <button className={`mt-6 font-semibold flex items-center gap-2 hover:underline ${isDarkMode ? 'text-teal-400' : 'text-teal-700'}`}>
              View calendar <FaArrowRight />
            </button>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 border-t ${isDarkMode ? 'bg-gray-950 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-12 text-center font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              question="Who can join the platform?"
              answer="Any verified graduate of the university can join. You will need your student ID or verification details during registration."
              isDark={isDarkMode}
            />
            <FAQItem
              question="Is there a membership fee?"
              answer="Basic membership is free for all alumni. Some special events or workshops may have a nominal fee."
              isDark={isDarkMode}
            />
            <FAQItem
              question="How do I update my profile?"
              answer="Once logged in, go to your Dashboard and click on 'Edit Profile' to update your employment, location, and contact info."
              isDark={isDarkMode}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${isDarkMode ? 'bg-gray-950 border-t border-gray-800' : 'bg-gray-900 text-gray-300'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Alumni_Connect</h3>
              <p className="text-gray-400 max-w-xs">
                The official professional network for graduates. Fostering lifelong connections since 1998.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Directory</a></li>
                <li><a href="#" className="hover:text-white">Jobs Board</a></li>
                <li><a href="#" className="hover:text-white">Mentorship</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>alumni@college.edu</li>
                <li>+1 (555) 123-4567</li>
                <li>123 University Ave</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div>&copy; 2026 College Alumni Platform. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Sub-components
function StatItem({ number, label, isDark }) {
  return (
    <div>
      <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{number}</div>
      <div className={`text-sm tracking-uppercase font-semibold ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{label}</div>
    </div>
  );
}

function AlumniCard({ name, role, batch, isDark }) {
  return (
    <div className={`p-6 rounded-xl border transition-all hover:shadow-lg ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center text-xl font-bold ${isDark ? 'bg-gray-950 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
        {name.charAt(0)}
      </div>
      <h3 className={`font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
      <p className={`text-sm mb-3 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>{role}</p>
      <div className={`text-xs font-medium px-2 py-1 inline-block rounded ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
        {batch}
      </div>
    </div>
  );
}

function JobRow({ title, company, location, isDark }) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg border transition-all ${isDark ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:shadow-md'}`}>
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded flex items-center justify-center ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <FaBuilding className="text-gray-400" />
        </div>
        <div>
          <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{company} • {location}</p>
        </div>
      </div>
      <button className={`text-sm font-medium px-4 py-2 rounded border ${isDark ? 'border-gray-600 hover:bg-gray-700 text-white' : 'border-gray-300 hover:bg-gray-50 text-gray-900'}`}>
        Apply
      </button>
    </div>
  );
}

function EventRow({ day, month, title, type, isDark }) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg font-bold ${isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
        <span className="text-sm opacity-60">{month}</span>
        <span className="text-xl">{day}</span>
      </div>
      <div>
        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
        <div className={`flex items-center gap-2 text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          <FaMapMarkerAlt size={12} />
          {type}
        </div>
      </div>
    </div>
  );
}

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

function TestimonialCard({ quote, author, role, isDark }) {
  return (
    <div className={`p-8 rounded-2xl relative ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border text-gray-900 border-gray-200'}`}>
      <FaQuoteLeft className={`text-3xl mb-4 opacity-20 ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
      <p className={`text-lg italic mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>"{quote}"</p>
      <div>
        <div className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{author}</div>
        <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{role}</div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, isDark }) {
  return (
    <div className={`p-6 rounded-lg border ${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'}`}>
      <h3 className={`font-bold text-lg mb-2 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <FaQuestionCircle className="text-teal-500 text-sm" /> {question}
      </h3>
      <p className={`text-sm leading-relaxed ml-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{answer}</p>
    </div>
  );
}
