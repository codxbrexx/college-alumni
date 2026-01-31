import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaEdit, FaUserCircle, FaEnvelope, FaBuilding, FaChevronDown, FaSignOutAlt, FaCog } from 'react-icons/fa';

export default function ProfileView() {
    const { user, loading, logout } = useAuth();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center font-serif text-gray-500 animate-pulse bg-gray-50">
            Loading Profile...
        </div>
    );

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">You are not logged in</h2>
                    <Link to="/login" className="px-6 py-2 bg-red-700 text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-black transition-colors">Login to View Profile</Link>
                </div>
            </div>
        );
    }

    // Role Logic
    // Role Logic
    // const currentYear = new Date().getFullYear(); // Unused
    // const passYear = user.yearOfPassout || user.passingYear; // Unused
    // const role = passYear > currentYear ? "Student" : "Alumni"; // Unused

    // Avatar Fallback
    const avatarUrl = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName || 'User')}&background=random`;

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

            {/* TOP NAVBAR */}
            <div className="bg-white border-b border-gray-200 h-16 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
                    {/* Brand */}
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-xl font-serif font-bold text-gray-900 tracking-tighter">
                            NETGRAD
                        </Link>
                        <span className="h-4 w-px bg-gray-300 hidden sm:block"></span>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest hidden sm:block">My Profile</span>
                    </div>

                    {/* User Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-3 hover:bg-gray-50 px-3 py-2 rounded-sm transition-colors"
                        >
                            <img src={avatarUrl} alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-gray-200" />
                            <span className="text-sm font-bold text-gray-700 hidden sm:block">{user.fullName?.split(' ')[0]}</span>
                            <FaChevronDown className={`text-gray-400 text-xs transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 shadow-xl rounded-sm z-50 py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="px-4 py-3 border-b border-gray-50">
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Signed in as</p>
                                        <p className="text-sm font-bold text-gray-900 truncate">{user.email}</p>
                                    </div>

                                    <Link to="/profile/edit" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700 transition-colors">
                                        <FaEdit className="text-gray-400" /> Edit Profile
                                    </Link>
                                    <Link to="/support" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-700 transition-colors">
                                        <FaCog className="text-gray-400" /> Support
                                    </Link>

                                    <div className="border-t border-gray-50 mt-1 pt-1">
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm text-red-700 font-bold hover:bg-red-50 transition-colors"
                                        >
                                            <FaSignOutAlt /> Log Out
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Sidebar (3 Columns on Large) */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Profile Summary Card */}
                        <div className="bg-white border border-gray-200 rounded-sm overflow-hidden p-6 text-center">
                            <div className="relative inline-block">
                                <img src={avatarUrl} alt={user.fullName} className="w-32 h-32 rounded-full border-4 border-gray-50 object-cover mx-auto mb-4" />
                            </div>
                            <h1 className="text-2xl font-serif font-bold text-gray-900 leading-tight">{user.fullName || "User Name"}</h1>
                            <p className="text-red-700 font-medium text-sm mt-1">{user.profession || "Profession Not Added"}</p>

                            <div className="mt-6 flex justify-center gap-3">
                                <Link to="/profile/edit" className="flex-1 py-2 bg-gray-900 text-white font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-black transition-colors">
                                    Edit Profile
                                </Link>
                            </div>
                        </div>

                        {/* Account Info Card */}
                        <div className="bg-white border border-gray-200 rounded-sm p-6">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-3 mb-4">
                                Account Details
                            </h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-bold uppercase mb-1">Roll Number</span>
                                    <span className="font-mono text-gray-900 bg-gray-50 px-2 py-1 rounded border border-gray-100 w-max">{user.rollNo}</span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-bold uppercase mb-1">Email Address</span>
                                    <span className="text-gray-900 font-medium truncate">{user.email}</span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-bold uppercase mb-1">Location</span>
                                    <span className="text-gray-900 flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-gray-400" />
                                        {user.city ? `${user.city}, ${user.state}` : "Not updated"}
                                    </span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-bold uppercase mb-1">Member Since</span>
                                    <span className="text-gray-900 font-medium">{new Date(user.createdAt).toLocaleDateString()}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white border border-gray-200 rounded-sm p-6">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-3 mb-4">
                                Connect
                            </h3>
                            <div className="space-y-3">
                                {user.linkedInProfileLink ? (
                                    <a href={user.linkedInProfileLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#0077b5] transition-colors p-2 hover:bg-gray-50 rounded-sm">
                                        <FaLinkedin className="text-lg" /> LinkedIn Profile
                                    </a>
                                ) : (
                                    <span className="text-sm text-gray-400 italic flex items-center gap-3 p-2">No LinkedIn added</span>
                                )}
                                {user.gitHubProfileLink ? (
                                    <a href={user.gitHubProfileLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-gray-600 hover:text-black transition-colors p-2 hover:bg-gray-50 rounded-sm">
                                        <FaGithub className="text-lg" /> GitHub Profile
                                    </a>
                                ) : (
                                    <span className="text-sm text-gray-400 italic flex items-center gap-3 p-2">No GitHub added</span>
                                )}
                            </div>
                        </div>

                    </div>

                    {/* Right Content (8 Columns) */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* About Me Section */}
                        <div className="bg-white border border-gray-200 rounded-sm p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <FaUserCircle className="text-red-700 text-xl" />
                                <h2 className="text-2xl font-serif font-bold text-gray-900">About Me</h2>
                            </div>
                            <div className="prose prose-sm text-gray-600 max-w-none">
                                {user.aboutYou ? (
                                    <p className="whitespace-pre-line leading-relaxed">{user.aboutYou}</p>
                                ) : (
                                    <div className="bg-gray-50 border border-dashed border-gray-300 rounded p-6 text-center">
                                        <p className="text-gray-500 italic mb-3">You haven't written a bio yet.</p>
                                        <Link to="/profile/edit" className="text-red-700 font-bold text-xs uppercase hover:underline">Add Bio</Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Professional & Academic Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Experience */}
                            <div className="bg-white border border-gray-200 rounded-sm p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <FaBriefcase className="text-gray-400" />
                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Experience</h3>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase mb-1">Current Role</p>
                                        <p className="text-lg font-bold text-gray-900">{user.profession || "N/A"}</p>
                                        {user.companyDetails && <p className="text-red-700 text-sm font-medium">{user.companyDetails}</p>}
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase mb-1">Total Experience</p>
                                        <p className="font-mono text-gray-900">{user.companyExperience || "0"} Years</p>
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="bg-white border border-gray-200 rounded-sm p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <FaGraduationCap className="text-gray-400" />
                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Education</h3>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase mb-1">Branch / Degree</p>
                                        <p className="text-lg font-bold text-gray-900">{user.branch || "N/A"}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase mb-1">Class Of</p>
                                        <p className="font-mono text-gray-900">{user.yearOfPassout || "N/A"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="bg-white border border-gray-200 rounded-sm p-8">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-100 pb-3 mb-6">
                                Skills & Expertise
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {user.skills && user.skills.length > 0 ? (
                                    (Array.isArray(user.skills) ? user.skills : user.skills.split(',')).map((skill, index) => (
                                        <span key={index} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-bold rounded-sm shadow-sm">
                                            {typeof skill === 'string' ? skill.trim() : skill}
                                        </span>
                                    ))
                                ) : (
                                    <p className="text-gray-400 italic text-sm">No skills added yet.</p>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
