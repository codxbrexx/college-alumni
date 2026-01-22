import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaBug, FaLock, FaQuestionCircle, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Support() {
    const { isDarkMode } = useTheme();
    const [topic, setTopic] = useState('general');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setSubmitted(true), 1000);
    };

    return (
        <div className={`min-h-screen py-24 px-4 font-sans ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link to="/login" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-red-600 transition-colors">
                        &larr; Back to Login
                    </Link>
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold font-serif mb-4">Support Center</h1>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Having trouble? We're here to help you get back on track.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Quick Help Cards */}
                    <div className={`p-6 border ${topic === 'login' ? 'border-red-600 ring-1 ring-red-600' : 'border-gray-200'} rounded-none cursor-pointer hover:shadow-lg transition-all`}
                        onClick={() => setTopic('login')}>
                        <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center text-xl mb-4">
                            <FaLock />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Login Issues</h3>
                        <p className="text-sm text-gray-500">Can't sign in? Forgot password? Account locked?</p>
                    </div>

                    <div className={`p-6 border ${topic === 'bug' ? 'border-red-600 ring-1 ring-red-600' : 'border-gray-200'} rounded-none cursor-pointer hover:shadow-lg transition-all`}
                        onClick={() => setTopic('bug')}>
                        <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center text-xl mb-4">
                            <FaBug />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Report a Bug</h3>
                        <p className="text-sm text-gray-500">Something not working right? Let us know.</p>
                    </div>

                    <div className={`p-6 border ${topic === 'general' ? 'border-red-600 ring-1 ring-red-600' : 'border-gray-200'} rounded-none cursor-pointer hover:shadow-lg transition-all`}
                        onClick={() => setTopic('general')}>
                        <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center text-xl mb-4">
                            <FaQuestionCircle />
                        </div>
                        <h3 className="font-bold text-lg mb-2">General Inquiry</h3>
                        <p className="text-sm text-gray-500">Membership questions, event info, and more.</p>
                    </div>
                </div>

                {/* Dynamic Content Based on Topic */}
                <div className={`p-8 md:p-12 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>

                    {submitted ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                                ✓
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Request Received</h3>
                            <p className="text-gray-500">Ticket #38291 created. We'll get back to you within 24 hours.</p>
                            <button onClick={() => setSubmitted(false)} className="mt-8 text-red-600 font-bold hover:underline">
                                Submit another request
                            </button>
                        </div>
                    ) : (
                        <>
                            {topic === 'login' && (
                                <div className="mb-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 text-sm">
                                    <strong>Quick Fix:</strong> Most login issues are resolved by resetting your password.
                                    <Link to="/forgot" className="underline ml-2 font-bold">Try Resetting Password</Link>
                                </div>
                            )}

                            <h2 className="text-2xl font-bold mb-6 font-serif">
                                {topic === 'login' && 'Recover Your Account'}
                                {topic === 'bug' && 'Submit Bug Report'}
                                {topic === 'general' && 'How can we help?'}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest mb-2">Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-red-600 focus:outline-none" required />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-red-600 focus:outline-none" required />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">Subject</label>
                                    <input type="text" defaultValue={topic === 'login' ? 'Login Issue: ' : ''} className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-red-600 focus:outline-none" required />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                                        {topic === 'bug' ? 'Steps to Reproduce / Details' : 'Message'}
                                    </label>
                                    <textarea
                                        rows="5"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-red-600 focus:outline-none resize-none"
                                        placeholder={topic === 'bug' ? '1. Go to Login page\n2. Enter credentials\n3. Click Submit...' : 'Describe your issue...'}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2">
                                    <FaPaperPlane /> Submit Ticket
                                </button>
                            </form>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
}
