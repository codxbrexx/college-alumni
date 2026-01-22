import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaLinkedin, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { alumniData } from '../../data/alumniData';

export default function AlumniList() {
    const [alumni, setAlumni] = useState(alumniData);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        const fetchAlumni = async () => {
            try {
                const response = await axios.get('/api/v1/alumni');
                if (response.data && response.data.data && response.data.data.alumni) {
                    const apiData = response.data.data.alumni;
                    const normalizedApiData = apiData.map(user => ({
                        id: user._id,
                        name: user.fullName || "Alumni Member",
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

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const getInitials = (name) => {
        if (!name) return "AL";
        const parts = name.split(" ");
        if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    };

    if (loading) {
        return (
            <div className="py-20 text-center font-serif text-gray-500 animate-pulse min-h-[50vh] flex items-center justify-center">
                Loading Directory...
            </div>
        );
    }

    return (
        <div className="py-12 px-4 bg-gray-50 min-h-screen font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <span className="inline-block px-3 py-1 bg-red-50 text-red-700 font-bold text-xs mb-3 tracking-widest uppercase rounded-full border border-red-100">
                        Alumni Directory
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
                        Our Community
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                        Connect with graduates and expand your professional network.
                    </p>
                </div>

                <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
                    {/* List Header (Desktop) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 text-gray-500 py-3 px-6 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                        <div className="col-span-4">Member</div>
                        <div className="col-span-3">Details</div>
                        <div className="col-span-3">Location</div>
                        <div className="col-span-2 text-right">Action</div>
                    </div>

                    {/* List Body */}
                    <div className="divide-y divide-gray-100">
                        {alumni.map((alum) => {
                            const isExpanded = expandedId === alum.id;
                            const initials = getInitials(alum.name);

                            return (
                                <div key={alum.id} className="transition-colors hover:bg-gray-50/50">
                                    {/* Main Row */}
                                    <div
                                        onClick={() => toggleExpand(alum.id)}
                                        className="grid md:grid-cols-12 gap-4 p-4 md:px-6 items-center cursor-pointer group"
                                    >
                                        {/* Column 1: Profile */}
                                        <div className="col-span-12 md:col-span-4 flex items-center gap-4">
                                            {/* Initials Avatar */}
                                            <div className="w-10 h-10 rounded-sm bg-gray-900 text-white flex items-center justify-center font-serif font-bold text-sm shadow-sm border border-gray-200 group-hover:bg-red-700 transition-colors">
                                                {initials}
                                            </div>
                                            <div>
                                                <h3 className="font-serif font-bold text-gray-900 text-base group-hover:text-red-700 transition-colors">
                                                    {alum.name}
                                                </h3>
                                                <p className="text-xs text-gray-500 font-medium">
                                                    {alum.profession}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Column 2: Details */}
                                        <div className="col-span-6 md:col-span-3 text-sm text-gray-600 space-y-1">
                                            <div className="flex items-center gap-2">
                                                <FaBriefcase className="text-xs text-gray-400" />
                                                <span className="truncate font-medium text-xs text-gray-900 uppercase tracking-wide">{alum.company}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaGraduationCap className="text-xs text-gray-400" />
                                                <span className="text-xs text-gray-500">Class of <span className="font-bold text-gray-900">{alum.passingYear}</span></span>
                                            </div>
                                        </div>

                                        {/* Column 3: Location */}
                                        <div className="col-span-6 md:col-span-3 flex items-center gap-2 text-sm text-gray-500">
                                            <FaMapMarkerAlt className="text-xs text-gray-400" />
                                            <span className="text-xs font-medium text-gray-700">{alum.city}</span>
                                        </div>

                                        {/* Column 4: Toggle Action */}
                                        <div className="col-span-12 md:col-span-2 flex justify-end items-center gap-2">
                                            <div className={`w-8 h-8 rounded-sm border border-gray-200 flex items-center justify-center transition-all bg-white text-gray-400 group-hover:border-red-600 group-hover:text-red-600 ${isExpanded ? 'bg-red-50 rotate-180' : ''}`}>
                                                <FaChevronDown size={10} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded Accordion Content */}
                                    {isExpanded && (
                                        <div className="bg-gray-50/50 px-6 py-6 md:px-20 border-t border-gray-100">
                                            <div className="grid md:grid-cols-3 gap-8">
                                                {/* Bio */}
                                                <div className="md:col-span-2">
                                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">About</h4>
                                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                        {alum.about}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mt-4">
                                                        {alum.skills && alum.skills.map((skill, i) => (
                                                            <span key={i} className="px-2 py-1 bg-white border border-gray-200 text-gray-600 text-[10px] font-bold uppercase tracking-wide rounded-sm">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Actions */}
                                                <div className="border-l border-gray-200 pl-8 flex flex-col justify-between">
                                                    <div>
                                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Professional</h4>
                                                        <div className="flex gap-3 mb-6">
                                                            {alum.linkedin !== '#' && (
                                                                <a href={alum.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors text-xl">
                                                                    <FaLinkedin />
                                                                </a>
                                                            )}
                                                            {alum.social !== '#' && (
                                                                <a href={alum.social} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors text-xl">
                                                                    <ImTwitter />
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <Link
                                                        to={`/alumni/${alum.id}`}
                                                        className="flex items-center justify-center gap-2 w-full py-2 bg-white border border-gray-300 hover:border-red-700 hover:text-red-700 text-gray-600 text-xs font-bold uppercase tracking-widest transition-all rounded-sm"
                                                    >
                                                        Full Profile <FaExternalLinkAlt size={10} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
