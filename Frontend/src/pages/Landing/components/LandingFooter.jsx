import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Components/Logo/Logo';

export default function LandingFooter() {
    return (
        <footer className="py-12 bg-white text-gray-900 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-4">
                            <Logo />
                        </div>
                        <p className="text-gray-500 max-w-xs leading-relaxed">
                            The official professional network for graduates. Fostering lifelong connections, career growth, and community impact since 2015.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Platform</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-red-600 transition-colors">Directory</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Jobs Board</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Mentorship</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Events</a></li>
                            <li><Link to="/support" className="hover:text-red-600 transition-colors">Support Center</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>alumni@iiitl.ac.in</li>
                            <li>+91 1234567890</li>
                            <li>123 IIIT Lucknow</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <div>&copy; 2026 NetGrud Alumni. All rights reserved.</div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-red-600 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-red-600 transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
