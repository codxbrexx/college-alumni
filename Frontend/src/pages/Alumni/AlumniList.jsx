import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { alumniData } from '../../data/alumniData';
import { alumniApi } from '../../services/api';

export default function AlumniList({ heroFilters, searchTerm }) {
    const [alumni, setAlumni] = useState(alumniData);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState(null);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

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

    // Debounce Search
    useEffect(() => {
        setIsSearching(true);
        const timer = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm || '');
            setIsSearching(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const getInitials = (name) => {
        if (!name) return "AL";
        const parts = name.split(" ");
        if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    };

    const filteredAlumni = alumni.filter(alum => {
        // 1. Text Search (Local)
        const matchSearch =
            (alum.name && alum.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())) ||
            (alum.company && (alum.company || "").toLowerCase().includes(debouncedSearchTerm.toLowerCase())) ||
            (alum.city && (alum.city || "").toLowerCase().includes(debouncedSearchTerm.toLowerCase())) ||
            (alum.profession && (alum.profession || "").toLowerCase().includes(debouncedSearchTerm.toLowerCase()));

        if (!matchSearch) return false;

        // 2. Hero Filters (Global)
        if (heroFilters) {
            // Batch Filter
            if (heroFilters.batch && heroFilters.batch !== 'all') {
                if (String(alum.passingYear) !== String(heroFilters.batch)) return false;
            }
            // Role/Industry Filter
            if (heroFilters.role && heroFilters.role !== '') {
                const roleQuery = heroFilters.role.toLowerCase();
                const matchRole =
                    (alum.profession && (alum.profession || "").toLowerCase().includes(roleQuery)) ||
                    (alum.skills && alum.skills.some(skill => skill.toLowerCase().includes(roleQuery)));
                if (!matchRole) return false;
            }
        }

        return true;
    });

    if (loading) {
        return (
            <div className="py-20 text-center font-serif text-gray-500 animate-pulse min-h-[50vh] flex items-center justify-center">
                Loading Directory...
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* Results Header */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-200">
                    <div>
                        <h2 className="text-xl font-serif font-bold text-gray-900">
                            {isSearching ? 'Searching...' : `${filteredAlumni.length} ${filteredAlumni.length === 1 ? 'Alumnus' : 'Alumni'} Found`}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            {searchTerm && `Results for "${searchTerm}"`}
                            {heroFilters.batch !== 'all' && ` • Class of ${heroFilters.batch}`}
                            {heroFilters.role && ` • ${heroFilters.role}`}
                        </p>
                    </div>
                </div>

                <div className="bg-white border-2 border-gray-200 overflow-hidden">
                    {/* List Header (Desktop) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 text-gray-700 py-4 px-6 text-xs font-bold uppercase tracking-wider border-b-2 border-gray-300">
                        <div className="col-span-4">Name &amp; Position</div>
                        <div className="col-span-3">Company &amp; Year</div>
                        <div className="col-span-3">Location</div>
                        <div className="col-span-2 text-right">Details</div>
                    </div>

                    {/* List Body */}
                    <div className="divide-y-2 divide-gray-200">
                        {isSearching ? (
                            <div className="py-16 text-center">
                                <div className="inline-block px-6 py-3 border-2 border-gray-300 bg-gray-50 text-gray-600 text-sm font-bold">
                                    Searching Directory...
                                </div>
                            </div>
                        ) : filteredAlumni.length > 0 ? (
                            filteredAlumni.map((alum) => {
                                const isExpanded = expandedId === alum.id;
                                const initials = getInitials(alum.name);

                                return (
                                    <div key={alum.id} className="transition-colors hover:bg-gray-50">
                                        {/* Main Row */}
                                        <div
                                            onClick={() => toggleExpand(alum.id)}
                                            className="grid md:grid-cols-12 gap-4 p-5 md:px-6 items-center cursor-pointer group"
                                        >
                                            {/* Column 1: Profile */}
                                            <div className="col-span-12 md:col-span-4 flex items-center gap-4">
                                                {/* Initials Avatar - Sharp Rectangle */}
                                                <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center font-serif font-bold text-sm border-2 border-gray-300 group-hover:bg-red-700 group-hover:border-red-700 transition-colors">
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
                                                <div className={`w-9 h-9 border-2 border-gray-300 flex items-center justify-center transition-all bg-white text-gray-500 group-hover:border-red-600 group-hover:text-red-600 ${isExpanded ? 'bg-red-600 border-red-600 text-white rotate-180' : ''}`}>
                                                    <FaChevronDown size={12} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Expanded Accordion Content */}
                                        {isExpanded && (
                                            <div className="bg-gray-50 px-6 py-8 md:px-20 border-t-2 border-gray-200">
                                                <div className="grid md:grid-cols-3 gap-8">
                                                    {/* Bio */}
                                                    <div className="md:col-span-2">
                                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 border-l-4 border-red-600 pl-3">About</h4>
                                                        <p className="text-gray-700 text-sm leading-relaxed mb-5">
                                                            {alum.about}
                                                        </p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {alum.skills && alum.skills.map((skill, i) => (
                                                                <span key={i} className="px-3 py-1.5 bg-white border-2 border-gray-300 text-gray-700 text-[11px] font-bold uppercase tracking-wide">
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Actions */}
                                                    <div className="border-l-2 border-gray-300 pl-8 flex flex-col justify-between">
                                                        <div>
                                                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 border-l-4 border-red-600 pl-3">Connect</h4>
                                                            <div className="flex gap-4 mb-6">
                                                                {alum.linkedin !== '#' && (
                                                                    <a href={alum.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#0077b5] transition-colors text-2xl">
                                                                        <FaLinkedin />
                                                                    </a>
                                                                )}
                                                                {alum.social !== '#' && (
                                                                    <a href={alum.social} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors text-2xl">
                                                                        <ImTwitter />
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <Link
                                                            to={`/alumni/${alum.id}`}
                                                            className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-widest transition-all border-2 border-gray-900 hover:border-red-600"
                                                        >
                                                            View Full Profile <FaExternalLinkAlt size={10} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        ) : (
                            <div className="p-12 text-center text-gray-500 italic">
                                No alumni found matching your search.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
