import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

function TestimonialCard({ quote, author, role }) {
    return (
        <div className="p-8 relative bg-white border text-gray-900 border-gray-200 rounded-none">
            <FaQuoteLeft className="text-3xl mb-4 opacity-20 text-red-600" />
            <p className="text-lg italic mb-6 text-gray-700">"{quote}"</p>
            <div>
                <div className="font-bold text-gray-900">{author}</div>
                <div className="text-sm text-gray-500">{role}</div>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-gray-100 pl-12 pr-12">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center font-serif text-gray-900">Community Voices</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <TestimonialCard
                        quote="The alumni network has been instrumental in my startup journey. The support from fellow graduates is unmatched."
                        author="James Wilson"
                        role="CEO, FutureTech (Class of 2024)"
                    />
                    <TestimonialCard
                        quote="I found my co-founder through the Alumni Annual Meet. It's amazing to see how strong our community really is."
                        author="Anita Roy"
                        role="Partner, GreenVentures (Class of 2023)"
                    />
                </div>
            </div>
        </section>
    );
}
