import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative h-[640px] flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 mt-12">
                <img
                    src="/college_hero2.png"
                    alt="NetGrud Alumni Association"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 text-white pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-lg md:text-xl font-medium mb-4 tracking-wide font-serif">
                        NetGrud Alumni Association
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 font-serif">
                        Welcome Home
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white leading-relaxed font-light">
                        Helping you keep your alma mater close, wherever your journey takes you.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/register">
                            <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-xl rounded-none">
                                Join the Community
                            </button>
                        </Link>
                        <Link to="/home">
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 font-semibold text-lg transition-all rounded-none">
                                Explore Directory
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
