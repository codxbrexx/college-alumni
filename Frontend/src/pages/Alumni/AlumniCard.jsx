import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaLinkedin, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { alumniData } from '../../data/alumniData';

function Alumnicard() {
  const [alumni, setAlumni] = useState(alumniData); // Start with mock data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await axios.get('/api/v1/alumni');
        if (response.data && response.data.data && response.data.data.alumni) {
          const apiData = response.data.data.alumni;

          // Map API data to match the UI's expected keys (image vs avatar, passingYear vs yearOfPassout)
          const normalizedApiData = apiData.map(user => ({
            id: user._id,
            name: user.fullName || "Alumni Member",
            image: user.avatar || "https://ui-avatars.com/api/?name=User&background=random",
            profession: user.profession || "Member",
            company: user.companyDetails || "N/A",
            experience: user.companyExperience ? `${user.companyExperience} Years` : "Fresh",
            passingYear: user.yearOfPassout || "N/A",
            branch: user.branch || "N/A",
            city: user.city || "Remote",
            linkedin: user.linkedInProfileLink || "#",
            social: user.gitHubProfileLink || "#",
            skills: user.skills && Array.isArray(user.skills) ? user.skills : (user.skills ? user.skills.split(',') : []),
            about: user.aboutYou || "No bio available."
          }));

          // Use a Map to distinct by ID if needed, or just append
          setAlumni([...alumniData, ...normalizedApiData]);
        }
      } catch (error) {
        console.error("Failed to fetch alumni:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center font-serif text-gray-500 animate-pulse min-h-screen flex items-center justify-center">
        Loading Directory...
      </div>
    );
  }

  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 font-semibold text-sm mb-4 tracking-wide uppercase">
            Alumni Network
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Meet Our Alumni
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and connect with talented professionals from our community who are making waves across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alum) => (
            <div
              key={alum.id}
              className="group bg-white shadow-sm hover:border-gray-300 border border-gray-100 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Card Header & Avatar */}
              <div className="relative pt-8 px-6 pb-0 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-100 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500 opacity-50"></div>
                  <Link to={`/alumni/${alum.id}`}>
                    <img
                      src={alum.image}
                      alt={alum.name}
                      onError={(e) => e.target.src = "https://ui-avatars.com/api/?name=User&background=random"}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md relative z-10 cursor-pointer"
                    />
                  </Link>
                  {/* <div className="absolute bottom-1 right-2 z-20 bg-green-500 w-4 h-4 rounded-full border-2 border-white" title="Active"></div> */}
                </div>

                <div className="mt-4 text-center">
                  <Link to={`/alumni/${alum.id}`} className="block">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-red-700 transition-colors uppercase tracking-wide">
                      {alum.name}
                    </h3>
                  </Link>
                  <p className="text-red-600 font-medium text-sm mt-1 uppercase tracking-wider">{alum.profession}</p>
                  <p className="text-gray-500 text-sm mt-1 flex items-center justify-center gap-1.5">
                    <FaBriefcase className="text-gray-400 text-xs" />
                    {alum.experience} at <span className="font-semibold">{alum.company}</span>
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 my-6"></div>

              {/* Card Body */}
              <div className="px-6 flex-grow">
                {/* Academic Info */}
                <div className="flex justify-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <FaGraduationCap className="text-red-400" />
                    <span>{alum.branch} '{alum.passingYear ? alum.passingYear.toString().slice(-2) : ''}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-400" />
                    <span>{alum.city}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {alum.skills && alum.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold uppercase tracking-wide border border-gray-200 hover:bg-red-50 hover:text-red-700 transition-colors">
                      {skill}
                    </span>
                  ))}
                  {alum.skills && alum.skills.length > 3 && (
                    <span className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-semibold uppercase tracking-wide border border-gray-200">
                      +{alum.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* About Truncated */}
                <p className="text-gray-500 text-sm text-center line-clamp-2 leading-relaxed px-2 font-light">
                  {alum.about}
                </p>
              </div>

              {/* Card Footer / Actions */}
              <div className="p-6 mt-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-3">
                <Link to={`/alumni/${alum.id}`} className="flex-1 bg-red-700 hover:bg-red-800 text-white text-sm font-bold uppercase tracking-widest py-3 transition-colors shadow-sm hover:shadow-md text-center">
                  Connect
                </Link>
                <div className="flex gap-2">
                  <a href={alum.linkedin} className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href={alum.social} className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 text-gray-500 hover:bg-gray-900 hover:text-white transition-colors">
                    <ImTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Alumnicard;

