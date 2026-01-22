import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  FaBriefcase,
  FaCalendarAlt,
  FaArrowRight,
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
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-white text-gray-900">

      {/* Navbar - Clean & Minimal */}
      <nav className="fixed w-full z-50 border-b transition-colors duration-300 bg-white/95 border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            {/* Text Logo */}
            <div className="flex items-center tracking-tighter font-sans">
              <span className="text-4xl md:text-5xl font-extrabold text-red-700">NET</span>
              <span className="text-4xl md:text-5xl font-extrabold text-gray-900">GRUD</span>
              <span className="ml-1 text-xs md:text-sm font-semibold text-gray-500 self-end mb-1">ALUMNI</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Theme Toggle Removed */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/login" className="font-serif uppercase tracking-widest text-sm font-medium hover:underline underline-offset-8 transition-all text-gray-600 hover:text-black decoration-red-600">
                Log In
              </Link>
              <Link to="/register">
                <button className="px-8 py-2.5 font-serif uppercase tracking-widest text-xs font-bold border transition-all duration-300 bg-gray-900 text-white border-gray-900 hover:bg-transparent hover:text-gray-900">
                  Join Platform
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Reference Style (Immersive Background) */}
      <section className="relative h-[660px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 mt-12">
          <img
            src="/college_hero2.png"
            alt="NetGrud Alumni Association"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-12 text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-lg md:text-xl font-medium mb-4 tracking-wide font-serif">
              NetGrud Alumni Association
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 font-serif">
              Welcome Home
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white leading-relaxed font-light">
              Helping you keep your alma mater close, wherever your journey takes you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white  font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
                  Join the Community
                </button>
              </Link>
              <Link to="/home">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30  font-semibold text-lg transition-all">
                  Explore Directory
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* "All Together" Section (Reference Match) - Changed to Red for Light Theme consistency */}
      <section className="py-12 bg-red-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
            All Alumni, all together, <br /> all in one place.
          </h2>
          <p className="text-lg text-gray-100 mb-2 leading-relaxed">
            The Alumni Directory is your gateway to the global community. Update your profile, connect with old friends, and unlock exclusive opportunities. It's safe, verified, and built for you.
          </p>
          <Link to="/home" className="text-red-200 font-semibold text-lg hover:underline underline-offset-4">
            Explore the Directory &rarr;
          </Link>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 border-y bg-gray-50 border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem number="2015" label="Established" />
          <StatItem number="5k+" label="Alumni" />
          <StatItem number="150+" label="Companies" />
          <StatItem number="42" label="Chapters" />
        </div>
      </section>

      {/* Featured Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 pl-12 pr-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 font-serif text-gray-900">Membership Benefits</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Unlock a suite of exclusive resources designed to help you succeed at every stage of your career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<FaBriefcase />}
              title="Career Support"
              desc="Access exclusive job boards, resume reviews, and career coaching sessions."
            />
            <BenefitCard
              icon={<FaHandHoldingHeart />}
              title="Mentorship Programs"
              desc="Connect with industry leaders or become a mentor to guide the next generation."
            />
            <BenefitCard
              icon={<FaGraduationCap />}
              title="Lifelong Learning"
              desc="Get discounts on continuing education courses and access to the university library."
            />
            <BenefitCard
              icon={<FaTicketAlt />}
              title="Exclusive Events"
              desc="Priority access to reunions, networking mixers, and guest lectures."
            />
            <BenefitCard
              icon={<FaGlobeAmericas />}
              title="Global Chapters"
              desc="Join regional alumni chapters to stay connected wherever you live."
            />
            <BenefitCard
              icon={<FaUserGraduate />}
              title="Giving Back"
              desc="Opportunities to volunteer, donate, and support current students."
            />
          </div>
        </div>
      </section>

      {/* Alumni Spotlight Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Distinguished Alumni</h2>
            <p className="text-lg text-gray-600">Graduates making waves in the industry.</p>
          </div>
          <button className="font-semibold hover:underline text-red-700">View All</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AlumniCard
            name="Sarah Jenkins"
            role="Senior Engineer at Google"
            batch="Batch of 2015"
          />
          <AlumniCard
            name="David Chen"
            role="Software Engineer at TechFlow"
            batch="Batch of 2018"
          />
          <AlumniCard
            name="Priya Patel"
            role="Product Director at Microsoft"
            batch="Batch of 2018"
          />
        </div>
      </section>

      {/* Community Voices (Testimonials) */}
      <section className="py-24 bg-gray-100 pl-12 pr-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center font-serif text-gray-900">Community Voices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="This platform helped me transition from engineering to product management. The mentorship I received was invaluable."
              author="James Wilson"
              role="PM at Spotify, Class of '19"
            />
            <TestimonialCard
              quote="I found my co-founder through the Alumni Annual Meet. It's amazing to see how strong our community really is."
              author="Anita Roy"
              role="Founder, GreenTech, Class of '14"
            />
          </div>
        </div>
      </section>

      {/* Opportunities Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* Recent Jobs */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
              <FaBriefcase className="text-red-600" />
              Recent Opportunities
            </h2>
            <div className="space-y-4">
              <JobRow title="Frontend Developer" company="Adobe" location="Remote" />
              <JobRow title="Data Scientist" company="Spotify" location="New York, NY" />
              <JobRow title="Product Manager" company="Uber" location="San Francisco, CA" />
              <JobRow title="UX Researcher" company="Airbnb" location="Remote" />
            </div>
            <button className="mt-6 font-semibold flex items-center gap-2 hover:underline text-red-700">
              View all 240+ jobs <FaArrowRight />
            </button>
          </div>

          {/* Upcoming Events */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
              <FaCalendarAlt className="text-red-600" />
              Upcoming Events
            </h2>
            <div className="space-y-4">
              <EventRow day="15" month="MAR" title="Annual Alumni Reunion 2026" type="In-Person" />
              <EventRow day="22" month="MAR" title="Tech Talk: AI in 2026" type="Virtual" />
              <EventRow day="05" month="APR" title="Campus Mentorship Drive" type="Campus" />
            </div>
            <button className="mt-6 font-semibold flex items-center gap-2 hover:underline text-red-700">
              View calendar <FaArrowRight />
            </button>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t bg-gray-50 border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center font-serif text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              question="Who can join the platform?"
              answer="Any verified graduate of the university can join. You will need your student ID or verification details during registration."
            />
            <FAQItem
              question="Is there a membership fee?"
              answer="Basic membership is free for all alumni. Some special events or workshops may have a nominal fee."
            />
            <FAQItem
              question="How do I update my profile?"
              answer="Once logged in, go to your Dashboard and click on 'Edit Profile' to update your employment, location, and contact info."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Alumni Connect</h3>
              <p className="text-gray-400 max-w-xs">
                The official professional network for graduates. Fostering lifelong connections since 2015.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gray-900">Directory</a></li>
                <li><a href="#" className="hover:text-gray-900">Jobs Board</a></li>
                <li><a href="#" className="hover:text-gray-900">Mentorship</a></li>
                <li><a href="#" className="hover:text-gray-900">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>alumni@iiitl.ac.in</li>
                <li>+91 1234567890</li>
                <li>123 IIIT Lucknow</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div>&copy; 2026 College Alumni Platform. All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Sub-components
function StatItem({ number, label }) {
  return (
    <div>
      <div className="text-3xl font-bold mb-1 text-gray-900">{number}</div>
      <div className="text-sm tracking-uppercase font-semibold text-gray-500">{label}</div>
    </div>
  );
}

function AlumniCard({ name, role, batch }) {
  return (
    <div className="p-6 border transition-all hover:shadow-lg bg-white border-gray-200">
      <div className="w-16 h-16 mb-4 flex items-center justify-center text-xl font-bold bg-gray-100 text-gray-600">
        {name.charAt(0)}
      </div>
      <h3 className="font-bold text-lg mb-1 text-gray-900">{name}</h3>
      <p className="text-sm mb-3 text-red-600">{role}</p>
      <div className="text-xs font-medium px-2 py-1 inline-block bg-gray-100 text-gray-500">
        {batch}
      </div>
    </div>
  );
}

function JobRow({ title, company, location }) {
  return (
    <div className="flex items-center justify-between p-4 border transition-all bg-white border-gray-200 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-100">
          <FaBuilding className="text-gray-400" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-500">{company} • {location}</p>
        </div>
      </div>
      <button className="text-sm font-medium px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-900">
        Apply
      </button>
    </div>
  );
}

function EventRow({ day, month, title, type }) {
  return (
    <div className="flex items-center gap-4 p-4 border bg-white border-gray-200">
      <div className="flex flex-col items-center justify-center w-14 h-14 font-bold bg-gray-100 text-gray-700">
        <span className="text-sm opacity-60">{month}</span>
        <span className="text-xl">{day}</span>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
          <FaMapMarkerAlt size={12} />
          {type}
        </div>
      </div>
    </div>
  );
}

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

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="p-8 relative bg-white border text-gray-900 border-gray-200">
      <FaQuoteLeft className="text-3xl mb-4 opacity-20 text-red-600" />
      <p className="text-lg italic mb-6 text-gray-700">"{quote}"</p>
      <div>
        <div className="font-bold text-gray-900">{author}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="p-6 border bg-white border-gray-200">
      <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-gray-900">
        <FaQuestionCircle className="text-red-500 text-sm" /> {question}
      </h3>
      <p className="text-sm leading-relaxed ml-6 text-gray-600">{answer}</p>
    </div>
  );
}
