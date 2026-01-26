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
                        title="Career Acceleration"
                        desc="Access exclusive job boards, resume reviews, and fast-tracked referrals to top companies."
                    />
                    <BenefitCard
                        icon={<FaHandHoldingHeart />}
                        title="Mentorship & Guidance"
                        desc="Connect with experienced alumni who can guide you through your early career challenges."
                    />
                    <BenefitCard
                        icon={<FaGraduationCap />}
                        title="Skill Development"
                        desc="Participate in workshops, hackathons, and guest lectures to stay ahead of industry trends."
                    />
                    <BenefitCard
                        icon={<FaTicketAlt />}
                        title="Exclusive Events"
                        desc="Priority access to annual reunions, networking mixers, and tech talks."
                    />
                    <BenefitCard
                        icon={<FaGlobeAmericas />}
                        title="Global Network"
                        desc="Join a worldwide community of professionals across 25+ countries."
                    />
                    <BenefitCard
                        icon={<FaUserGraduate />}
                        title="Community Impact"
                        desc="Give back by volunteering, mentoring students, or supporting scholarship funds."
                    />
                </div>
            </div>
        </section>
    );
}
