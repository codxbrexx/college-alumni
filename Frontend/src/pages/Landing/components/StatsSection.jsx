import React from 'react';

function StatItem({ number, label }) {
    return (
        <div>
            <div className="text-3xl font-bold mb-1 text-gray-900">{number}</div>
            <div className="text-sm tracking-uppercase font-semibold text-gray-500">{label}</div>
        </div>
    );
}

export default function StatsSection() {
    return (
        <section className="py-12 border-y bg-gray-50 border-gray-200">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <StatItem number="2015" label="Established" />
                <StatItem number="5k+" label="Alumni" />
                <StatItem number="150+" label="Companies" />
                <StatItem number="42" label="Chapters" />
            </div>
        </section>
    );
}
