import React, { useState } from 'react';
import { FaLinkedin, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { useTheme } from '../../context/ThemeContext';

const alumni = [
  {
    image: '/avtar.jpg',
    name: 'Ali Ahmed',
    profession: 'Full Stack Web Developer',
    company: 'Google',
    experience: '1+ years',
    about: 'Passionate about building scalable web apps and mentoring juniors in modern web technologies.',
    linkedin: 'https://linkedin.com',
    social: 'https://twitter.com',
    email: 'ali@example.com',
    rollNo: 'lcs2024035',
    branch: 'CSE',
    passingYear: 2025,
    skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
    city: 'Hyderabad',
  },
  {
    image: '/avtar.jpg',
    name: 'Taha Khan',
    profession: 'Software Engineer',
    company: 'Microsoft',
    experience: '2+ years',
    about: 'Building cloud solutions and working on cutting-edge AI/ML projects. Love to contribute to open source.',
    linkedin: 'https://linkedin.com',
    social: 'https://twitter.com',
    email: 'taha@example.com',
    rollNo: 'lcs2024043',
    branch: 'CSE',
    passingYear: 2025,
    skills: ['Python', 'Azure', 'Machine Learning', 'FastAPI'],
    city: 'Lucknow',
  },
  {
    image: '/avtar.jpg',
    name: 'Priya Sharma',
    profession: 'Product Designer',
    company: 'Adobe',
    experience: '3+ years',
    about: 'Creating beautiful and intuitive user experiences. Passionate about design systems and accessibility.',
    linkedin: 'https://linkedin.com',
    social: 'https://twitter.com',
    email: 'priya@example.com',
    rollNo: 'lcs2022018',
    branch: 'IT',
    passingYear: 2023,
    skills: ['Figma', 'UI/UX', 'Design Systems', 'Prototyping'],
    city: 'Bangalore',
  },
  {
    image: '/avtar.jpg',
    name: 'Rahul Verma',
    profession: 'Data Scientist',
    company: 'Amazon',
    experience: '4+ years',
    about: 'Leveraging data to drive business decisions. Specializing in NLP and predictive analytics.',
    linkedin: 'https://linkedin.com',
    social: 'https://twitter.com',
    email: 'rahul@example.com',
    rollNo: 'lcs2020022',
    branch: 'CSE',
    passingYear: 2021,
    skills: ['Python', 'TensorFlow', 'SQL', 'Tableau', 'R'],
    city: 'Mumbai',
  },
  {
    image: '/avtar.jpg',
    name: 'Sarah Johnson',
    profession: 'DevOps Engineer',
    company: 'Netflix',
    experience: '2+ years',
    about: 'Automating infrastructure and ensuring seamless deployments. CI/CD enthusiast.',
    linkedin: 'https://linkedin.com',
    social: 'https://twitter.com',
    email: 'sarah@example.com',
    rollNo: 'lcs2021015',
    branch: 'IT',
    passingYear: 2022,
    skills: ['Kubernetes', 'Jenkins', 'Terraform', 'AWS', 'Linux'],
    city: 'Pune',
  },
  {
    image: '/avtar.jpg',
    name: 'Amit Patel',
    profession: 'Mobile App Developer',
    company: 'Uber',
    experience: '3+ years',
    about: 'Creating seamless mobile experiences for millions of users. Cross-platform development expert.',
    linkedin: 'https://linkedin.com',
    social: 'https://twitter.com',
    email: 'amit@example.com',
    rollNo: 'lcs2019009',
    branch: 'CSE',
    passingYear: 2020,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    city: 'Delhi',
  },
];

function Alumnicard() {
  const { isDarkMode } = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className={`py-12 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Meet Our Alumni
          </h2>
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Discover and connect with talented professionals from our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((alum, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-800/90 border border-gray-700 hover:border-teal-500/50' 
                  : 'bg-white border border-gray-100 hover:border-teal-500/50'
              }`}
            >
              {/* Header with Gradient */}
              <div className={`relative h-28 bg-gradient-to-br ${
                isDarkMode 
                  ? 'from-teal-600 via-teal-700 to-blue-800' 
                  : 'from-teal-400 via-teal-500 to-blue-500'
              }`}>
                <div className="absolute inset-0 bg-black/10" />
                
                {/* Profile Image */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <img
                      src={alum.image}
                      alt={alum.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-white ${
                      isDarkMode ? 'bg-green-500' : 'bg-green-400'
                    }`} title="Available for mentoring" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-14 pb-6 px-6">
                {/* Name and Title */}
                <div className="text-center mb-4">
                  <h3 className={`text-xl font-bold mb-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {alum.name}
                  </h3>
                  <p className={`text-sm font-semibold mb-1 ${
                    isDarkMode ? 'text-teal-400' : 'text-teal-600'
                  }`}>
                    {alum.profession}
                  </p>
                  <div className={`flex items-center justify-center gap-1 text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <FaBriefcase className="w-3 h-3" />
                    <span>{alum.experience} at {alum.company}</span>
                  </div>
                </div>

                {/* About */}
                <p className={`text-sm text-center mb-4 line-clamp-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {alum.about}
                </p>

                {/* Details Grid */}
                <div className={`space-y-2 text-sm mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <div className="flex items-center gap-2">
                    <FaGraduationCap className={`w-4 h-4 ${
                      isDarkMode ? 'text-teal-400' : 'text-teal-600'
                    }`} />
                    <span className="font-medium">{alum.branch}</span>
                    <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>•</span>
                    <span>Class of {alum.passingYear}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className={`w-4 h-4 ${
                      isDarkMode ? 'text-teal-400' : 'text-teal-600'
                    }`} />
                    <span>{alum.city}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {alum.skills.slice(0, 4).map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                          isDarkMode 
                            ? 'bg-teal-900/50 text-teal-300 border border-teal-700/50' 
                            : 'bg-teal-50 text-teal-700 border border-teal-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                    {alum.skills.length > 4 && (
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        +{alum.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className={`flex-1 py-2.5 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-teal-600 hover:bg-teal-500 text-white' 
                      : 'bg-teal-600 hover:bg-teal-700 text-white'
                  }`}>
                    Connect
                  </button>
                  <a
                    href={alum.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-teal-400' 
                        : 'bg-gray-100 hover:bg-gray-200 text-teal-600'
                    }`}
                    title="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={alum.social}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-teal-400' 
                        : 'bg-gray-100 hover:bg-gray-200 text-teal-600'
                    }`}
                    title="Twitter Profile"
                  >
                    <ImTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${alum.email}`}
                    className={`p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-teal-400' 
                        : 'bg-gray-100 hover:bg-gray-200 text-teal-600'
                    }`}
                    title="Send Email"
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                hoveredCard === idx ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  isDarkMode 
                    ? 'from-teal-500/5 to-blue-500/5' 
                    : 'from-teal-500/5 to-blue-500/5'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Alumnicard;