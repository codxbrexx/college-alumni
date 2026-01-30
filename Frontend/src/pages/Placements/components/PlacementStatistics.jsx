import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';

const PlacementStatistics = () => {
    const { isDarkMode } = useTheme();
    const [selectedYear, setSelectedYear] = useState(2024);

    const years = [2025, 2024, 2023, 2022, 2021];

    const yearData = {
        2025: { avgPackage: 35, highestPackage: 95, placementRate: 99, placed: 1350, companies: 92 },
        2024: { avgPackage: 32, highestPackage: 92, placementRate: 98, placed: 1250, companies: 85 },
        2023: { avgPackage: 28, highestPackage: 85, placementRate: 96, placed: 1150, companies: 78 },
        2022: { avgPackage: 25, highestPackage: 75, placementRate: 94, placed: 1050, companies: 72 },
        2021: { avgPackage: 22, highestPackage: 68, placementRate: 92, placed: 980, companies: 65 }
    };

    const currentData = yearData[selectedYear];

    const companies = [
        'Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix',
        'Flipkart', 'Uber', 'Zomato', 'Samsung', 'Rubrik', 'LinkedIn',
        'Atlassian', 'Paypal', 'Oracle', 'Cisco', 'Adobe', 'Salesforce',
        'Nutanix', 'ServiceNow', 'J.P. Morgan', 'Morgan Stanley', 'DE Shaw', 'Amex',
        'Deloitte', 'Accenture', 'FIS', 'Paytm', 'Capgemini', 'Infosys',
        'MAQ Software', 'Neosoft', 'Zycus', 'BigBasket', 'Meesho', 'Blinkit', 'Acko'
    ];

    return (
        <div className={`${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'} py-16`}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className={`text-4xl font-serif font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        Career Success
                    </h2>
                    <h3 className={`text-2xl font-serif font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                        Placement Statistics
                    </h3>
                </div>

                {/* Year Tabs */}
                <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-6 py-2 font-bold border transition ${selectedYear === year
                                ? 'bg-red-600 text-white border-red-600'
                                : isDarkMode
                                    ? 'bg-gray-900 text-gray-300 border-gray-700 hover:border-red-600'
                                    : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className={`border p-8 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                        }`}>
                        <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            Average Package
                        </p>
                        <p className={`text-6xl font-serif font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            ₹{currentData.avgPackage} LPA
                        </p>
                    </div>

                    <div className={`border p-8 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                        }`}>
                        <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            Highest Package
                        </p>
                        <p className={`text-6xl font-serif font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            ₹{currentData.highestPackage} LPA
                        </p>
                    </div>

                    <div className={`border p-8 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                        }`}>
                        <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            Placement Rate
                        </p>
                        <p className={`text-6xl font-serif font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            {currentData.placementRate}%
                        </p>
                    </div>
                </div>

                {/* Trusted Partners Section */}
                <div className="mb-12">
                    <h3 className={`text-3xl font-serif font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        Our Trusted Partners
                    </h3>
                    <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Leading companies from across the globe hire our graduates, a testament to the quality of education and talent at NetGrad.
                    </p>

                    {/* Company Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                className={`border p-4 flex items-center justify-center text-center transition hover:border-red-600 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                                    }`}
                            >
                                <span className={`font-bold text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
                                    }`}>
                                    {company}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`border-l-4 border-red-600 p-6 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                        }`}>
                        <p className={`text-5xl font-serif font-bold mb-3 tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            {currentData.placed}+
                        </p>
                        <p className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
                            }`}>
                            Total Students Placed
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Across various industries including Tech, Finance, and Consulting.
                        </p>
                    </div>

                    <div className={`border-l-4 border-blue-600 p-6 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                        }`}>
                        <p className={`text-5xl font-serif font-bold mb-3 tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            {currentData.companies}+
                        </p>
                        <p className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
                            }`}>
                            Companies Visited
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Including Fortune 500 companies and high-growth startups.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlacementStatistics;
