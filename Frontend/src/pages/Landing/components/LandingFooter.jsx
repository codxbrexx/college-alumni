import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Components/Logo/Logo';

export default function LandingFooter() {
    return (
        <footer className="py-12 bg-white text-gray-900 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="mb-4">
                            <Logo />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            The official professional network for graduates. Fostering lifelong connections since 2025.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Platform</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-red-600 transition-colors">Directory</a></li>
                            <li><a href="#" className="hover:text-red-600 transition-colors">Jobs Board</a></li>
                            <li><Link to="/support" className="hover:text-red-600 transition-colors">Support Center</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li>alumni@netgrad.edu</li>
                            <li>+1 (555) 123-4567</li>
                            <li>NetGrad Campus, Tech City</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Stay Connected</h4>
                        <p className="text-gray-500 text-sm mb-2">Subscribe to our newsletter.</p>
                        <div className="flex flex-col gap-2">
                            <input type="email" placeholder="Enter email" className="bg-gray-50 border border-gray-200 p-2 text-sm outline-none focus:border-red-600 w-full" />
                            <button className="bg-gray-900 text-white text-xs font-bold uppercase tracking-widest py-2 px-4 hover:bg-black transition-colors">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <div>&copy; 2026 NetGrad Alumni. All rights reserved.</div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-red-600 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-red-600 transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
