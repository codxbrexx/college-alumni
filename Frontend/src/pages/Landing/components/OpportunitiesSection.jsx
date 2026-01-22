import React from 'react';
import {
    FaBriefcase,
    FaCalendarAlt,
    FaArrowRight,
    FaBuilding,
    FaMapMarkerAlt
} from 'react-icons/fa';

function JobRow({ title, company, location }) {
    return (
        <div className="flex items-center justify-between p-4 border transition-all bg-white border-gray-200 hover:shadow-md rounded-none">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-none">
                    <FaBuilding className="text-gray-400" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p className="text-sm text-gray-500">{company} • {location}</p>
                </div>
            </div>
            <button className="text-sm font-medium px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-900 rounded-none">
                Apply
            </button>
        </div>
    );
}

function EventRow({ day, month, title, type }) {
    return (
        <div className="flex items-center gap-4 p-4 border bg-white border-gray-200 rounded-none">
            <div className="flex flex-col items-center justify-center w-14 h-14 font-bold bg-gray-100 text-gray-700 rounded-none">
                <span className="text-sm opacity-60">{month}</span>
                <span className="text-xl">{day}</span>
            </div>
            <div>
                <h4 className="font-semibold text-gray-900">{title}</h4>
                <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                    <FaMapMarkerAlt size={12} />
                    {type}
                </div>
            </div>
        </div>
    );
}

export default function OpportunitiesSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

                {/* Recent Jobs */}
                <div>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                        <FaBriefcase className="text-red-600" />
                        Recent Opportunities
                    </h2>
                    <div className="space-y-4">
                        <JobRow title="Frontend Developer" company="Adobe" location="Remote" />
                        <JobRow title="Data Scientist" company="Spotify" location="New York, NY" />
                        <JobRow title="Product Manager" company="Uber" location="San Francisco, CA" />
                        <JobRow title="UX Researcher" company="Airbnb" location="Remote" />
                    </div>
                    <button className="mt-6 font-semibold flex items-center gap-2 hover:underline text-red-700">
                        View all 240+ jobs <FaArrowRight />
                    </button>
                </div>

                {/* Upcoming Events */}
                <div>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                        <FaCalendarAlt className="text-red-600" />
                        Upcoming Events
                    </h2>
                    <div className="space-y-4">
                        <EventRow day="15" month="MAR" title="Annual Alumni Reunion 2026" type="In-Person" />
                        <EventRow day="22" month="MAR" title="Tech Talk: AI in 2026" type="Virtual" />
                        <EventRow day="05" month="APR" title="Campus Mentorship Drive" type="Campus" />
                    </div>
                    <button className="mt-6 font-semibold flex items-center gap-2 hover:underline text-red-700">
                        View calendar <FaArrowRight />
                    </button>
                </div>

            </div>
        </section>
    );
}
