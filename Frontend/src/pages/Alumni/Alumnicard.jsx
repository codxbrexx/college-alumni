import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

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
  return (
    <div className="flex flex-wrap justify-center">
      {alumni.map((alum, idx) => (
        <div key={idx} className="w-[300px] mt-6 max-w-xs sm:max-w-sm bg-white rounded-xl shadow-md flex flex-col items-center sm:p-4 gap-2 border border-teal-100 m-2 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-22 rounded-b-4xl bg-gradient-to-b from-teal-200 to-teal-500 rounded-t-xl" />
          <div className="relative z-10 mt-8 mb-1">
            {/* avatar */}
            <img
              src={alum.image}
              alt={alum.name}
              className="w-16 h-16 rounded-full border-3 border-teal-300 object-cover shadow"
            />
          </div>
          <h2 className="text-base font-semibold text-teal-700 text-center leading-tight">{alum.name}</h2>
          <div className="text-xs text-teal-500 font-medium text-center leading-tight">{alum.profession}</div>
          <div className="text-xs text-gray-600 text-center leading-tight">{alum.experience}</div>
          <div className="text-xs text-gray-700 text-center line-clamp-2">{alum.about}</div>
          <div className="w-full flex flex-col gap-1 text-gray-700 text-xs mt-1">
            <div><span className="font-semibold text-teal-600">Roll No:</span> {alum.rollNo}</div>
            <div><span className="font-semibold text-teal-600">Branch:</span> {alum.branch}</div>
            <div><span className="font-semibold text-teal-600">Year:</span> {alum.passingYear}</div>
            <div><span className="font-semibold text-teal-600">Skills:</span> {alum.skills.join(', ')}</div>
            <div><span className="font-semibold text-teal-600">City:</span> {alum.city}</div>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <a href={alum.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 text-gray-400">
              <FaLinkedin/>
            </a>
            <a href={alum.social} target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 text-gray-400">
              <ImTwitter/>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Alumnicard;