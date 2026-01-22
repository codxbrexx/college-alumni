import React from 'react';
import {
    FaBriefcase,
    FaHandHoldingHeart,
    FaGraduationCap,
    FaTicketAlt,
    FaGlobeAmericas,
    FaUserGraduate
} from 'react-icons/fa';

function BenefitCard({ icon, title, desc }) {
    return (
        <div className="p-6 border transition-all hover:-translate-y-1 hover:shadow-lg bg-white border-gray-200 rounded-none">
            <div className="w-12 h-12 flex items-center justify-center text-xl mb-4 bg-red-50 text-red-600 rounded-none">
                {icon}
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
        </div>
    );
}

export default function BenefitsSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 pl-12 pr-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 font-serif text-gray-900">Membership Benefits</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Unlock a suite of exclusive resources designed to help you succeed at every stage of your career.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <BenefitCard
                        icon={<FaBriefcase />}
                        title="Career Support"
                        desc="Access exclusive job boards, resume reviews, and career coaching sessions."
                    />
                    <BenefitCard
                        icon={<FaHandHoldingHeart />}
                        title="Mentorship Programs"
                        desc="Connect with industry leaders or become a mentor to guide the next generation."
                    />
                    <BenefitCard
                        icon={<FaGraduationCap />}
                        title="Lifelong Learning"
                        desc="Get discounts on continuing education courses and access to the university library."
                    />
                    <BenefitCard
                        icon={<FaTicketAlt />}
                        title="Exclusive Events"
                        desc="Priority access to reunions, networking mixers, and guest lectures."
                    />
                    <BenefitCard
                        icon={<FaGlobeAmericas />}
                        title="Global Chapters"
                        desc="Join regional alumni chapters to stay connected wherever you live."
                    />
                    <BenefitCard
                        icon={<FaUserGraduate />}
                        title="Give Back"
                        desc="Opportunities to volunteer, donate, and support current students."
                    />
                </div>
            </div>
        </section>
    );
}
