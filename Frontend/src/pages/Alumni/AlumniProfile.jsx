import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { alumniData } from '../../data/alumniData';
import { FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaArrowLeft, FaTimes, FaUser, FaBuilding, FaGraduationCap } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

function AlumniProfile() {
    const { id } = useParams();
    const [alum, setAlum] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isMessageOpen, setIsMessageOpen] = useState(false);
    const [formData, setFormData] = useState({ subject: '', message: '' });

    useEffect(() => {
        const fetchAlumni = async () => {
            setLoading(true);
            try {
                // 1. Try finding in Mock Data
                const localAlum = alumniData.find(a => a.id.toString() === id);
                if (localAlum) {
                    setAlum(localAlum);
                    setLoading(false);
                    return;
                }

                // 2. Try fetching from API
                const response = await axios.get(`/api/v1/alumni/${id}`);
                const apiData = response.data.data;

                if (apiData) {
                    setAlum({
                        id: apiData._id,
                        name: apiData.fullName,
                        profession: apiData.profession,
                        company: apiData.companyDetails,
                        experience: apiData.companyExperience ? `${apiData.companyExperience} Years` : "Fresh",
                        passingYear: apiData.yearOfPassout,
                        branch: apiData.branch,
                        city: apiData.city,
                        state: apiData.state,
                        about: apiData.aboutYou,
                        skills: apiData.skills ? (Array.isArray(apiData.skills) ? apiData.skills : apiData.skills.split(',')) : [],
                        linkedin: apiData.linkedInProfileLink,
                        email: apiData.email,
                        role: apiData.yearOfPassout > new Date().getFullYear() ? "Student" : "Alumni"
                    });
                }
            } catch (error) {
                console.error("Failed to fetch alumni:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAlumni();
        window.scrollTo(0, 0);
    }, [id]);

    const getInitials = (name) => {
        if (!name) return "AL";
        const parts = name.split(" ");
        if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent to ${alum.name}!`);
        setIsMessageOpen(false);
        setFormData({ subject: '', message: '' });
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center font-sans text-gray-500 animate-pulse bg-gray-50">
            Loading Profile...
        </div>
    );

    if (!alum) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Alumni Member Not Found</h2>
                    <Link to="/alumni" className="text-blue-600 hover:underline">Return to Directory</Link>
                </div>
            </div>
        );
    }

    const initials = getInitials(alum.name);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 font-medium">

            {/* Top Navigation Bar Component */}
            <div className="bg-gray-900 border-b-4 border-red-600 h-16 flex items-center px-6 text-sm sticky top-0 z-40 shadow-xl">
                <Link to="/alumni" className="flex items-center gap-2 text-white/80 hover:text-white font-bold uppercase tracking-widest transition-colors">
                    <FaArrowLeft /> Directory
                </Link>
            </div>

            <div className="py-12 px-6 min-h-[calc(100vh-64px)] max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* LEFT SIDEBAR: BASIC ID CARD */}
                    <div className="w-full md:w-[350px] flex-shrink-0">
                        <div className="bg-white border-2 border-gray-200 shadow-sm overflow-hidden relative">
                            {/* Decorative Top Bar */}
                            <div className="h-2 bg-red-600 w-full"></div>

                            {/* Initials Photo */}
                            <div className="aspect-square bg-gray-100 flex items-center justify-center border-b-2 border-gray-200 relative group">
                                <span className="text-8xl font-serif text-gray-300 font-bold tracking-widest select-none group-hover:text-red-700/20 transition-colors">{initials}</span>
                                {/* Optional Status Dot */}
                                <div className="absolute top-4 right-4 px-2 py-1 bg-green-100 border border-green-200 text-green-700 text-[10px] font-bold uppercase tracking-widest">Active</div>
                            </div>

                            <div className="p-8 text-center pt-10">
                                <h1 className="text-3xl font-serif font-bold text-gray-900 leading-tight mb-2">{alum.name}</h1>
                                <div className="w-12 h-1 bg-red-600 mx-auto mb-4"></div>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8">{alum.profession}</p>

                                <div className="text-left text-xs bg-gray-50 border-2 border-gray-200 p-4 space-y-3 mb-8">
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="font-bold text-gray-400 uppercase">Role</span>
                                        <span className="font-bold text-gray-900">{alum.role || "Member"}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="font-bold text-gray-400 uppercase">Location</span>
                                        <span className="font-bold text-gray-900">{alum.city || "Remote"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-bold text-gray-400 uppercase">Beatch Year</span>
                                        <span className="font-bold text-gray-900">{alum.passingYear}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsMessageOpen(true)}
                                    className="w-full py-4 bg-gray-900 hover:bg-red-700 text-white font-bold text-xs rounded-none transition-all uppercase tracking-[0.2em] border-2 border-transparent hover:border-red-900"
                                >
                                    Send Message
                                </button>

                                <div className="mt-8 flex justify-center gap-6">
                                    {alum.linkedin && <a href={alum.linkedin} className="text-gray-400 hover:text-[#0077b5] transition-colors"><FaLinkedin size={24} /></a>}
                                    {alum.social && <a href={alum.social} className="text-gray-400 hover:text-black transition-colors"><ImTwitter size={24} /></a>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT MAIN CONTENT: INFO ONLY */}
                    <div className="w-full flex-grow space-y-8">

                        {/* DATA SECTIONS */}
                        <div className="bg-white border-2 border-gray-200 p-0 shadow-sm">

                            {/* Header */}
                            <div className="bg-gray-50 border-b-2 border-gray-200 px-8 py-6 flex justify-between items-center">
                                <div>
                                    <h2 className="text-xl font-serif font-bold text-gray-900">Professional Profile</h2>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">Full Details</p>
                                </div>
                                <FaBuilding className="text-gray-300 text-4xl" />
                            </div>

                            <div className="p-8 md:p-10 space-y-12">

                                {/* 1. Contact Info */}
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 border-l-4 border-red-600 pl-4 uppercase tracking-widest mb-6">Contact Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm">
                                        <div className="group">
                                            <span className="block font-bold text-gray-400 uppercase tracking-wide text-[10px] mb-1 group-hover:text-red-600 transition-colors">Email Address</span>
                                            <a href={`mailto:${alum.email}`} className="text-gray-900 font-serif border-b-2 border-gray-200 hover:border-red-600 transition-all">{alum.email || "N/A"}</a>
                                        </div>
                                        <div className="group">
                                            <span className="block font-bold text-gray-400 uppercase tracking-wide text-[10px] mb-1 group-hover:text-red-600 transition-colors">Location</span>
                                            <span className="text-gray-900 font-serif border-b-2 border-transparent">{alum.city}, {alum.state || "India"}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Professional & Education */}
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 border-l-4 border-red-600 pl-4 uppercase tracking-widest mb-6">Career & Education</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-6 border-l-2 border-gray-300 hover:border-red-600 transition-colors">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-white border border-gray-200"><FaBuilding className="text-gray-400" /></div>
                                                <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wide">Current Position</h4>
                                            </div>
                                            <p className="text-xl font-serif font-bold text-gray-900 mb-1">{alum.company || "Self-Employed"}</p>
                                            <p className="text-sm text-gray-600 font-medium">{alum.profession}</p>
                                            <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                                                <span className="text-[10px] font-bold uppercase text-gray-400">Experience</span>
                                                <span className="text-xs font-bold text-gray-900 bg-white px-2 py-1 border border-gray-200">{alum.experience}</span>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-6 border-l-2 border-gray-300 hover:border-red-600 transition-colors">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-white border border-gray-200"><FaGraduationCap className="text-gray-400" /></div>
                                                <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wide">Education</h4>
                                            </div>
                                            <p className="text-xl font-serif font-bold text-gray-900 mb-1">{alum.branch || "University Degree"}</p>
                                            <p className="text-sm text-gray-600 font-medium">NetGrud College</p>
                                            <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                                                <span className="text-[10px] font-bold uppercase text-gray-400">Class Of</span>
                                                <span className="text-xs font-bold text-gray-900 bg-white px-2 py-1 border border-gray-200">{alum.passingYear}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Biography */}
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 border-l-4 border-red-600 pl-4 uppercase tracking-widest mb-6">Biography</h3>
                                    <p className="text-gray-600 leading-loose text-sm font-serif border-l-2 border-gray-100 pl-6 italic">
                                        "{alum.about || "No bio available."}"
                                    </p>

                                    {/* Skills */}
                                    <div className="mt-8">
                                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Skills & Expertise</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {alum.skills && alum.skills.map((skill, index) => (
                                                <span key={index} className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wide hover:border-gray-900 transition-colors cursor-default">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MESSAGE MODAL */}
            {isMessageOpen && (
                <div className="fixed inset-0 bg-gray-900/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-lg shadow-2xl overflow-hidden border-2 border-white">
                        <div className="bg-gray-100 px-8 py-6 flex justify-between items-center border-b-2 border-gray-200">
                            <div>
                                <h3 className="font-serif font-bold text-xl text-gray-900">New Message</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Send to {alum.name}</p>
                            </div>
                            <button onClick={() => setIsMessageOpen(false)} className="text-gray-400 hover:text-red-600 transition-colors">
                                <FaTimes size={20} />
                            </button>
                        </div>
                        <div className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border-2 border-gray-200 p-3 text-sm text-gray-900 focus:border-red-600 focus:outline-none transition-all placeholder-gray-300 font-serif"
                                        placeholder="e.g. Inquiry regarding mentorship"
                                        value={formData.subject}
                                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Message</label>
                                    <textarea
                                        rows="5"
                                        className="w-full bg-white border-2 border-gray-200 p-3 text-sm text-gray-900 focus:border-red-600 focus:outline-none resize-none transition-all placeholder-gray-300 font-serif leading-relaxed"
                                        placeholder="Write your message here..."
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex justify-end gap-4 pt-4 border-t border-gray-100 mt-8">
                                    <button
                                        type="button"
                                        onClick={() => setIsMessageOpen(false)}
                                        className="px-6 py-3 text-gray-500 font-bold hover:text-gray-900 hover:bg-gray-100 transition-colors text-xs uppercase tracking-widest"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg shadow-red-600/20 transition-all text-xs uppercase tracking-widest"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AlumniProfile;
