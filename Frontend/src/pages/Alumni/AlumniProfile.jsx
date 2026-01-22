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
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

            {/* Top Navigation Bar Component */}
            <div className="bg-white border-b border-gray-200 h-14 flex items-center px-6 text-sm sticky top-0 z-40">
                <Link to="/alumni" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium">
                    <FaArrowLeft /> Back to Directory
                </Link>
            </div>

            <div className="py-10 px-4 min-h-[calc(100vh-56px)]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-start">

                    {/* LEFT SIDEBAR: BASIC ID CARD */}
                    <div className="w-full md:w-1/4 flex-shrink-0">
                        <div className="bg-white border border-gray-200 p-0 overflow-hidden rounded-sm">
                            {/* Initials Photo */}
                            <div className="aspect-square bg-gray-50 flex items-center justify-center border-b border-gray-100 relative">
                                <span className="text-6xl font-serif text-gray-400 font-bold tracking-widest">{initials}</span>
                                {/* Optional Status Dot */}
                                <div className="absolute bottom-4 right-4 w-3 h-3 bg-green-500 rounded-full border-2 border-white" title="Active Member"></div>
                            </div>

                            <div className="p-6">
                                <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2 font-serif">{alum.name}</h1>
                                <p className="text-gray-600 text-sm font-medium mb-4">{alum.profession}</p>

                                <div className="text-xs text-gray-500 space-y-2 mb-6 border-t border-gray-100 pt-4">
                                    <p className="flex items-center gap-2"><FaUser className="text-gray-400" /> {alum.role || "Member"}</p>
                                    <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-gray-400" /> {alum.city || "Remote"}</p>
                                </div>

                                <button
                                    onClick={() => setIsMessageOpen(true)}
                                    className="w-full py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-sm rounded-sm shadow-sm transition-colors uppercase tracking-wide"
                                >
                                    Message
                                </button>

                                <div className="mt-6 flex justify-center gap-4 border-t border-gray-100 pt-4">
                                    {alum.linkedin && <a href={alum.linkedin} className="text-gray-400 hover:text-[#0077b5] transition-colors"><FaLinkedin size={20} /></a>}
                                    {alum.social && <a href={alum.social} className="text-gray-400 hover:text-black transition-colors"><ImTwitter size={20} /></a>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT MAIN CONTENT: INFO ONLY */}
                    <div className="w-full md:w-3/4 flex-grow space-y-6">

                        {/* Title Header Box */}
                        <div className="bg-white p-8 border border-gray-200 rounded-sm">
                            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">{alum.name}</h2>
                            <p className="text-gray-500 text-lg">{alum.profession} {alum.company && `at ${alum.company}`}</p>
                        </div>

                        {/* DATA SECTIONS */}
                        <div className="bg-white border border-gray-200 p-8 space-y-10 rounded-sm">

                            {/* 1. Contact Info */}
                            <div>
                                <h3 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Contact Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-sm">
                                    <div className="flex justify-between border-b border-gray-50 pb-2">
                                        <span className="font-bold text-gray-500 uppercase tracking-wide text-xs">Email Address</span>
                                        <a href={`mailto:${alum.email}`} className="text-gray-900 font-medium hover:text-red-700 truncate max-w-[200px]">{alum.email || "N/A"}</a>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-2">
                                        <span className="font-bold text-gray-500 uppercase tracking-wide text-xs">Location</span>
                                        <span className="text-gray-900">{alum.city}, {alum.state || "India"}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-2">
                                        <span className="font-bold text-gray-500 uppercase tracking-wide text-xs">Profile Link</span>
                                        {alum.linkedin ? <a href={alum.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 font-medium hover:underline">LinkedIn Profile</a> : <span className="text-gray-400">Unavailable</span>}
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-2">
                                        <span className="font-bold text-gray-500 uppercase tracking-wide text-xs">Graduation Year</span>
                                        <span className="text-gray-900 font-bold">{alum.passingYear}</span>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Professional & Education */}
                            <div>
                                <h3 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Professional & Academic</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                                        <div className="flex items-center gap-2 mb-3">
                                            <FaBuilding className="text-gray-400" />
                                            <h4 className="font-bold text-gray-700 text-sm uppercase tracking-wide">Current Employment</h4>
                                        </div>
                                        <p className="text-lg font-bold text-gray-900">{alum.company || "Self-Employed"}</p>
                                        <p className="text-sm text-gray-600">{alum.profession}</p>
                                        <p className="text-xs text-gray-400 mt-2">{alum.experience} Experience</p>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                                        <div className="flex items-center gap-2 mb-3">
                                            <FaGraduationCap className="text-gray-400" />
                                            <h4 className="font-bold text-gray-700 text-sm uppercase tracking-wide">Education</h4>
                                        </div>
                                        <p className="text-lg font-bold text-gray-900">{alum.branch || "University Degree"}</p>
                                        <p className="text-sm text-gray-600">Alumni Member</p>
                                        <p className="text-xs text-gray-400 mt-2">Class of {alum.passingYear}</p>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Biography */}
                            <div>
                                <h3 className="text-lg font-serif font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">About Me</h3>
                                <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line font-light">
                                    {alum.about || "No bio available."}
                                </p>

                                {/* Skills */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {alum.skills && alum.skills.map((skill, index) => (
                                        <span key={index} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-semibold uppercase tracking-wide">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* MESSAGE MODAL */}
            {isMessageOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-lg shadow-2xl rounded-sm overflow-hidden border border-gray-200">
                        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b border-gray-100">
                            <h3 className="font-serif font-bold text-gray-900">New Message</h3>
                            <button onClick={() => setIsMessageOpen(false)} className="text-gray-400 hover:text-red-700 transition-colors">
                                <FaTimes size={16} />
                            </button>
                        </div>
                        <div className="p-8">
                            <div className="mb-6 text-sm text-gray-500">
                                To: <span className="font-bold text-gray-900">{alum.name}</span>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-300 p-3 rounded-sm text-sm text-gray-900 focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none transition-all placeholder-gray-400"
                                        placeholder="e.g. Inquiry regarding mentorship"
                                        value={formData.subject}
                                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                                    <textarea
                                        rows="5"
                                        className="w-full bg-white border border-gray-300 p-3 rounded-sm text-sm text-gray-900 focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none resize-none transition-all placeholder-gray-400"
                                        placeholder="Write your message here..."
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex justify-end gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsMessageOpen(false)}
                                        className="px-5 py-2 text-gray-500 font-bold hover:text-red-700 hover:bg-gray-50 rounded-sm transition-colors text-xs uppercase tracking-widest"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-red-700 hover:bg-red-800 text-white font-bold rounded-sm shadow-sm transition-colors text-xs uppercase tracking-widest"
                                    >
                                        Send
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
