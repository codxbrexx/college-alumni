import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaEdit, FaUserCircle, FaEnvelope } from 'react-icons/fa';

export default function ProfileView() {
    const { user, loading } = useAuth();

    if (loading) return <div className="min-h-screen flex items-center justify-center font-serif text-gray-500 animate-pulse">Loading Profile...</div>;

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <Link to="/login" className="px-6 py-2 bg-red-700 text-white rounded">Login</Link>
                </div>
            </div>
        );
    }

    // Determine Role for Badge
    const currentYear = new Date().getFullYear();
    const passYear = user.yearOfPassout || user.passingYear;
    const role = passYear > currentYear ? "Student" : "Alumni";
    const isStudent = role === 'Student';

    // Avatar Fallback
    const avatarUrl = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullName || 'User')}&background=random`;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto">

                {/* Profile Header Card */}
                <div className="bg-white border border-gray-200 overflow-hidden mb-8 relative">

                    {/* Cover / Background Pattern */}
                    <div className="h-32 bg-gray-900 relative">
                        <div className="absolute inset-0 bg-red-900/10"></div>
                        <div className="absolute top-4 right-4">
                            <Link to="/profile/edit" className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-red-700 transition-all text-xs uppercase font-bold tracking-widest border border-white/20">
                                <FaEdit /> Edit Profile
                            </Link>
                        </div>
                    </div>

                    <div className="px-8 pb-8">
                        <div className="relative flex flex-col items-center -mt-16 mb-6">
                            <div className="relative">
                                <img src={avatarUrl} alt={user.fullName} className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover" />
                                <span className={`absolute bottom-2 right-2 px-3 py-1 text-xs font-bold text-white uppercase tracking-widest rounded-full shadow-sm ${isStudent ? 'bg-blue-600' : 'bg-red-700'}`}>
                                    {role}
                                </span>
                            </div>
                            <h1 className="text-3xl font-serif font-bold text-gray-900 mt-4 text-center">{user.fullName || 'Your Name'}</h1>
                            <p className="text-red-700 font-medium tracking-wide uppercase text-sm">{user.profession || 'Profession Not Set'}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-100 pt-8">
                            <div>
                                <div className="flex justify-center items-center gap-2 text-gray-500 mb-1">
                                    <FaBriefcase className="text-red-700" /> <span className="text-xs uppercase tracking-widest font-bold">Experience</span>
                                </div>
                                <p className="font-semibold text-gray-900">{user.companyExperience || 0} Years</p>
                                <p className="text-sm text-gray-500">{user.companyDetails || 'No Company Details'}</p>
                            </div>
                            <div className="border-l border-r border-gray-100 px-4">
                                <div className="flex justify-center items-center gap-2 text-gray-500 mb-1">
                                    <FaGraduationCap className={isStudent ? "text-blue-600" : "text-red-700"} /> <span className="text-xs uppercase tracking-widest font-bold">Education</span>
                                </div>
                                <p className="font-semibold text-gray-900">{user.branch || 'Branch N/A'}</p>
                                <p className="text-sm text-gray-500">Class of {user.yearOfPassout || 'N/A'}</p>
                            </div>
                            <div>
                                <div className="flex justify-center items-center gap-2 text-gray-500 mb-1">
                                    <FaMapMarkerAlt className="text-red-700" /> <span className="text-xs uppercase tracking-widest font-bold">Location</span>
                                </div>
                                <p className="font-semibold text-gray-900">{user.city || 'N/A'}</p>
                                <p className="text-sm text-gray-500">{user.state || ''}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* About Section */}
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-white p-8 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FaUserCircle className="text-red-700" /> About Me
                            </h3>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                {user.aboutYou || "Tell us about yourself by editing your profile."}
                            </p>
                        </div>

                        <div className="bg-white p-8 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {user.skills && user.skills.length > 0 ? (
                                    Array.isArray(user.skills) ? user.skills : user.skills.split(',')
                                ).map((skill, i) => (
                                    <span key={i} className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-semibold border border-gray-200">
                                        {typeof skill === 'string' ? skill.trim() : skill}
                                    </span>
                                )) : (
                                    <p className="text-gray-400 italic">No skills listed yet.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Socials */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Connect</h3>
                            <div className="space-y-4">
                                {user.linkedInProfileLink ? (
                                    <a href={user.linkedInProfileLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-[#0077b5] text-white hover:bg-[#005e93] transition-colors shadow-md">
                                        <FaLinkedin className="text-xl" />
                                        <span className="font-bold text-sm uppercase tracking-wider">LinkedIn</span>
                                    </a>
                                ) : (
                                    <div className="p-4 bg-gray-100 text-gray-400 text-sm italic text-center">No LinkedIn Linked</div>
                                )}

                                {user.gitHubProfileLink ? (
                                    <a href={user.gitHubProfileLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-[#333] text-white hover:bg-black transition-colors shadow-md">
                                        <FaGithub className="text-xl" />
                                        <span className="font-bold text-sm uppercase tracking-wider">GitHub</span>
                                    </a>
                                ) : (
                                    <div className="p-4 bg-gray-100 text-gray-400 text-sm italic text-center">No GitHub Linked</div>
                                )}
                            </div>
                        </div>

                        <div className="bg-white p-8 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Account Info</h3>
                            <div className="space-y-2 text-sm">
                                <p className="flex justify-between border-b border-gray-50 py-2">
                                    <span className="text-gray-500">Roll No</span>
                                    <span className="font-mono font-bold text-gray-900">{user.rollNo || 'N/A'}</span>
                                </p>
                                <p className="flex justify-between border-b border-gray-50 py-2">
                                    <span className="text-gray-500">Email</span>
                                    <span className="font-medium text-gray-900">{user.email || 'N/A'}</span>
                                </p>
                                <p className="flex justify-between py-2">
                                    <span className="text-gray-500">Joined</span>
                                    <span className="font-medium text-gray-900">{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
