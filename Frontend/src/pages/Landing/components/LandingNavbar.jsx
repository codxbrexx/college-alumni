import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogoHeader } from '../../../Components/Logo/Logo';
import { FaBars, FaTimes } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';

export default function LandingNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed w-full z-50 border-b transition-colors duration-300 bg-white/95 border-gray-100 backdrop-blur-sm">
            <div className="w-full px-6 md:px-8 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <LogoHeader />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/login" className="font-serif uppercase tracking-widest text-sm font-medium hover:underline underline-offset-8 transition-all text-gray-600 hover:text-black decoration-red-600">
                        Log In
                    </Link>
                    <Link to="/register">
                        <button className="px-8 py-2.5 font-serif uppercase tracking-widest text-xs font-bold border transition-all duration-300 bg-white text-gray-900 hover:bg-black hover:text-white border-gray-900 hover:bg-black hover:border-black rounded-none">
                            Join Platform
                        </button>
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-900 p-2 focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 flex flex-col items-center justify-center gap-8 shadow-xl overflow-hidden"
                    >
                        <Link
                            to="/login"
                            onClick={toggleMenu}
                            className="font-serif uppercase tracking-widest text-lg font-bold text-gray-900 hover:text-red-700"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/register"
                            onClick={toggleMenu}
                        >
                            <button className="px-10 py-4 font-serif uppercase tracking-widest text-sm font-bold border-2 border-gray-900 bg-white text-gray-900 hover:bg-red-700 hover:text-white hover:border-red-700 transition-all rounded-none">
                                Join Platform
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
