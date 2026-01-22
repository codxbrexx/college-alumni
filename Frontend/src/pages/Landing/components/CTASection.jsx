import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
    return (
        <section className="py-12 bg-red-900 text-white text-center">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
                    All Alumni, all together, <br /> all in one place.
                </h2>
                <p className="text-lg text-gray-100 mb-2 leading-relaxed">
                    The Alumni Directory is your gateway to the global community. Update your profile, connect with old friends, and unlock exclusive opportunities.
                </p>
                <Link to="/home" className="text-red-200 font-semibold text-lg hover:underline underline-offset-4">
                    Explore the Directory &rarr;
                </Link>
            </div>
        </section>
    );
}
