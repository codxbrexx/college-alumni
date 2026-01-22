import React from 'react';
import { Link } from 'react-router-dom';
import { LogoHeader } from '../../../Components/Logo/Logo';

export default function LandingNavbar() {
    return (
        <nav className="fixed w-full z-50 border-b transition-colors duration-300 bg-white/95 border-gray-100">
            <div className="w-full px-8 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <LogoHeader />
                </div>

                <div className="flex items-center gap-6">
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
                </div>
            </div>
        </nav>
    );
}
