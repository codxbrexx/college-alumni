import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { useTheme } from '../../context/ThemeContext';

const alumni = [
  {
    image: '/avtar.jpg',
    name: 'Ali',
    profession: 'Full Stack Web Developer',
    experience: '1+ years at Google',
    about: 'Passionate about building scalable web apps and mentoring juniors.',
    linkedin: 'https://linkedin.com',
    social: 'https://twitter.com',
    rollNo: 'lcs2024035',
    branch: 'CSE',
    passingYear: 2025,
    skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    city: 'Hyderabad',
  },
  {
    image: '/avtar.jpg',
    name: 'Taha',
    profession: 'Pta nhi',
    experience: ' 2 days at poogle',
    about: 'Passionate about building scalable scale and mentoring myself.',
    linkedin: 'https://linkedin.com',
    social: 'https://twitter.com',
    rollNo: 'lcs2024043',
    branch: 'CSE',
    passingYear: 2025,
    skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    city: 'Lucknow',
  },
];

function Alumnicard() {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-wrap justify-center mb-8 mt-2">
      {alumni.map((alum, idx) => (
        <div key={idx} className={`w-[300px] mt-6 max-w-xs sm:max-w-sm rounded-xl shadow-md flex flex-col items-center sm:p-4 gap-2 border m-2 relative overflow-hidden transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-teal-100'
        }`}>
          <div className={`absolute top-0 left-0 w-full h-22 rounded-b-4xl rounded-t-xl ${
            isDarkMode 
              ? 'bg-gradient-to-b from-teal-800 to-teal-600' 
              : 'bg-gradient-to-b from-teal-200 to-teal-500'
          }`} />
          <div className="relative z-10 mt-8 mb-1">
            {/* avatar */}
            <img
              src={alum.image}
              alt={alum.name}
              className="w-16 h-16 rounded-full border-3 border-teal-300 object-cover shadow"
            />
          </div>
          <h2 className={`text-base font-semibold text-center leading-tight ${
            isDarkMode ? 'text-teal-400' : 'text-teal-700'
          }`}>{alum.name}</h2>
          <div className={`text-xs font-medium text-center leading-tight ${
            isDarkMode ? 'text-teal-300' : 'text-teal-500'
          }`}>{alum.profession}</div>
          <div className={`text-xs text-center leading-tight ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>{alum.experience}</div>
          <div className={`text-xs text-center line-clamp-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>{alum.about}</div>
          <div className={`w-full flex flex-col gap-1 text-xs mt-1 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <div><span className={`font-semibold ${
              isDarkMode ? 'text-teal-400' : 'text-teal-600'
            }`}>Roll No:</span> {alum.rollNo}</div>
            <div><span className={`font-semibold ${
              isDarkMode ? 'text-teal-400' : 'text-teal-600'
            }`}>Branch:</span> {alum.branch}</div>
            <div><span className={`font-semibold ${
              isDarkMode ? 'text-teal-400' : 'text-teal-600'
            }`}>Year:</span> {alum.passingYear}</div>
            <div><span className={`font-semibold ${
              isDarkMode ? 'text-teal-400' : 'text-teal-600'
            }`}>Skills:</span> {alum.skills.join(', ')}</div>
            <div><span className={`font-semibold ${
              isDarkMode ? 'text-teal-400' : 'text-teal-600'
            }`}>City:</span> {alum.city}</div>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <a href={alum.linkedin} target="_blank" rel="noopener noreferrer" className={`hover:text-teal-500 transition-colors ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              <FaLinkedin/>
            </a>
            <a href={alum.social} target="_blank" rel="noopener noreferrer" className={`hover:text-teal-500 transition-colors ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              <ImTwitter/>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Alumnicard;