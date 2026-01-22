import React from 'react';

function AlumniCard({ name, role, batch }) {
    return (
        <div className="p-6 border transition-all hover:shadow-lg bg-white border-gray-200 rounded-none">
            <div className="w-16 h-16 mb-4 flex items-center justify-center text-xl font-bold bg-gray-100 text-gray-600 rounded-none">
                {name.charAt(0)}
            </div>
            <h3 className="font-bold text-lg mb-1 text-gray-900">{name}</h3>
            <p className="text-sm mb-3 text-red-600">{role}</p>
            <div className="text-xs font-medium px-2 py-1 inline-block bg-gray-100 text-gray-500 rounded-none">
                {batch}
            </div>
        </div>
    );
}

export default function DistinguishedAlumniSection() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl font-bold mb-2 text-gray-900">Distinguished Alumni</h2>
                    <p className="text-lg text-gray-600">Graduates making waves in the industry.</p>
                </div>
                <button className="font-semibold hover:underline text-red-700">View All</button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <AlumniCard
                    name="Sarah Jenkins"
                    role="Senior Engineer at Google"
                    batch="Batch of 2015"
                />
                <AlumniCard
                    name="David Chen"
                    role="Software Engineer at TechFlow"
                    batch="Batch of 2018"
                />
                <AlumniCard
                    name="Priya Patel"
                    role="Product Director at Microsoft"
                    batch="Batch of 2018"
                />
            </div>
        </section>
    );
}
