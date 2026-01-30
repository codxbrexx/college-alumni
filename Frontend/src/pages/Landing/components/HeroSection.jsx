import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative h-[660px] flex items-center justify-center text-center overflow-hidden bg-gray-900">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/college_hero2.png"
                    alt="NetGrad Alumni Association"
                    className="w-full h-full object-cover opacity-70"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 text-white pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded-none">
                        NetGrad Alumni Association
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-tight leading-tight">
                        Welcome Home
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed font-light font-serif">
                        Helping you keep your alma mater close, wherever your journey takes you. Join a lifelong community of achievers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/register">
                            <button className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-red-900/20 rounded-none border-2 border-transparent">
                                Join the Community
                            </button>
                        </Link>
                        <Link to="/home">
                            <button className="px-10 py-4 bg-transparent hover:bg-white text-white hover:text-gray-900 border-2 border-white font-bold text-sm uppercase tracking-widest transition-all rounded-none">
                                Explore Directory
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
