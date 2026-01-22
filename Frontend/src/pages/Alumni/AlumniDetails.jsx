import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { alumniData } from '../../data/alumniData';
import { FaLinkedin, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaEnvelope, FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

function AlumniDetails() {
    const { id } = useParams();
    const [alum, setAlum] = useState(null);
    const [formData, setFormData] = useState({ subject: '', message: '' });

    useEffect(() => {
        const foundAlum = alumniData.find(p => p.id === parseInt(id));
        setAlum(foundAlum);
        window.scrollTo(0, 0);
    }, [id]);

    if (!alum) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Alumni Not Found</h2>
                    <Link to="/alumni" className="text-red-700 font-semibold hover:underline bg-transparent border-b-2 border-red-700 pb-1">Back to Directory</Link>
                </div>
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent to ${alum.name}!`);
        setFormData({ subject: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-white pb-20 font-sans">

            {/* Hero Header - Sharp & Editorial */}
            <div className="relative h-96 bg-gray-900 overflow-hidden">
                <img src="/alumnibg.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" />
                <div className="absolute inset-0 bg-red-900/40 mix-blend-multiply"></div>
                <div className="absolute top-8 left-4 md:left-8 z-20">
                    <Link to="/alumni" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
                        <FaArrowLeft /> Back to Directory
                    </Link>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative -mt-40 z-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* Profile Sidebar Card - Sharp Corners */}
                    <div className="w-full md:w-1/3 bg-white shadow-xl border-t-4 border-red-700 sticky top-24">
                        <div className="p-8 flex flex-col items-center border-gray-100">
                            <div className="relative mb-6">
                                <img src={alum.image} alt={alum.name} className="w-48 h-48 rounded-full object-cover border-4 border-white" />
                                {/* <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white" title="Active"></div> */}
                            </div>
                            <h1 className="text-3xl font-serif font-bold text-gray-900 text-center mb-1">{alum.name}</h1>
                            <p className="text-red-700 font-medium text-lg text-center mb-6 uppercase tracking-wider text-sm">{alum.profession}</p>

                            <div className="flex gap-4 mt-2">
                                <a href={alum.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-gray-50 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300">
                                    <FaLinkedin size={18} />
                                </a>
                                <a href={alum.social} target="_blank" rel="noreferrer" className="p-3 bg-gray-50 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300">
                                    <ImTwitter size={18} />
                                </a>
                                <a href={`mailto:${alum.email}`} className="p-3 bg-gray-50 text-gray-600 hover:bg-red-700 hover:text-white transition-all duration-300">
                                    <FaEnvelope size={18} />
                                </a>
                            </div>
                        </div>

                        <div className="p-8 bg-gray-50/50 space-y-5 text-sm text-gray-700">
                            <div className="flex items-start gap-4">
                                <FaBriefcase className="text-red-700 mt-1" />
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Work</p>
                                    <span className="font-serif font-bold text-lg text-gray-900">{alum.company}</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-red-700 mt-1" />
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                                    <span className="font-bold text-gray-900">{alum.city}</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaGraduationCap className="text-red-700 mt-1" />
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Education</p>
                                    <span className="font-bold text-gray-900">Class of {alum.passingYear}</span>
                                    <p className="text-gray-600">{alum.branch}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Info */}
                    <div className="w-full md:w-2/3 space-y-6">

                        {/* About Section - Minimalist */}
                        <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gray-100 group-hover:bg-red-700 transition-colors duration-500"></div>
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-3">
                                About Me
                            </h2>
                            <p className="text-gray-600 leading-Relaxed text-lg font-light">
                                {alum.about}
                            </p>
                        </div>

                        {/* Skills Section - Sharp Badges */}
                        <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-sm relative">
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                                Expertise
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {alum.skills.map((skill, index) => (
                                    <span key={index} className="px-5 py-2 bg-gray-50 text-gray-800 font-semibold text-sm border-l-2 border-red-700 hover:bg-gray-100 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Contact / Ask Me Anything Form - Boxy & Sharp */}
                        <div className="bg-white shadow-xl">
                            <div className="bg-gray-900 p-8 md:p-10 text-white relative overflow-hidden">
                                <div className="absolute right-0 top-0 text-white/5 text-9xl font-serif font-bold pointer-events-none -mr-10 -mt-10">?</div>
                                <h2 className="text-3xl font-serif font-bold mb-3">Ask me anything</h2>
                                <p className="text-gray-300 font-light text-lg">Send a direct message to {alum.name.split(' ')[0]} seeking guidance, referrals, or mentorship.</p>
                            </div>
                            <div className="p-8 md:p-10 border border-gray-200 border-t-0">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Subject</label>
                                        <div className="relative">
                                            <select
                                                className="w-full h-12 px-4 bg-gray-50 border border-gray-300 focus:border-red-700 focus:ring-0 focus:outline-none transition-all appearance-none rounded-none"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                required
                                            >
                                                <option value="">Select a topic...</option>
                                                <option value="mentorship">Mentorship Request</option>
                                                <option value="referral">Job Referral</option>
                                                <option value="guidance">Career Guidance</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Message</label>
                                        <textarea
                                            rows={5}
                                            className="w-full p-4 bg-gray-50 border border-gray-300 focus:border-red-700 focus:ring-0 focus:outline-none transition-all resize-none rounded-none"
                                            placeholder={`Hi ${alum.name.split(' ')[0]}, I would like to ask about...`}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="w-full py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-sm uppercase tracking-widest shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 rounded-none">
                                        <FaPaperPlane /> Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlumniDetails;
