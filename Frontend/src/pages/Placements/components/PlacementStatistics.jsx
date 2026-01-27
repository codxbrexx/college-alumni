import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { FaChartLine, FaTrophy, FaUserGraduate } from 'react-icons/fa';

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
                <div className={`mb-8 pb-8 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <p className="text-sm font-bold uppercase tracking-widest text-red-600 mb-2">
                        CAREER SUCCESS
                    </p>
                    <h2 className={`text-5xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Placement Statistics
                    </h2>
                </div>

                {/* Year Tabs */}
                <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-8 py-3 font-bold transition ${selectedYear === year
                                ? isDarkMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
                                : isDarkMode
                                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className={`border-l-4 border-yellow-500 border p-8 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
                        <div className="flex justify-between items-start mb-6">
                            <p className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                Average Package
                            </p>
                            <FaChartLine className={`text-2xl ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} />
                        </div>
                        <p className={`text-5xl font-serif font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            ₹{currentData.avgPackage} LPA
                        </p>
                    </div>

                    <div className={`border-l-4 border-green-500 border p-8 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
                        <div className="flex justify-between items-start mb-6">
                            <p className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                Highest Package
                            </p>
                            <FaTrophy className={`text-2xl ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} />
                        </div>
                        <p className={`text-5xl font-serif font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            ₹{currentData.highestPackage} LPA
                        </p>
                    </div>

                    <div className={`border-l-4 border-purple-500 border p-8 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
                        <div className="flex justify-between items-start mb-6">
                            <p className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                Placement Rate
                            </p>
                            <FaUserGraduate className={`text-2xl ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} />
                        </div>
                        <p className={`text-5xl font-serif font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {currentData.placementRate}%
                        </p>
                    </div>
                </div>

                {/* Trusted Partners Section */}
                <div className="mb-16">
                    <h3 className={`text-3xl font-serif font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Our Trusted Partners
                    </h3>
                    <p className={`text-center text-base mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Leading companies from across the globe hire our graduates, a testament to the quality of education and talent at NetGrud.
                    </p>

                    {/* Company Grid */}
                    <div className={`border p-12 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                            {companies.map((company, index) => (
                                <div key={index} className="flex flex-col items-center justify-center text-center">
                                    <div className={`w-12 h-12 mb-3 flex items-center justify-center text-2xl font-bold ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                        🏢
                                    </div>
                                    <span className={`font-bold text-xs uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {company}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 text-white p-10">
                        <p className="text-sm font-bold uppercase tracking-widest mb-4">
                            Total Students Placed
                        </p>
                        <p className="text-6xl font-serif font-bold mb-4 text-pink-500 tabular-nums">
                            {currentData.placed}+
                        </p>
                        <p className="text-sm text-gray-400">
                            Across various industries including Tech, Finance, and Consulting.
                        </p>
                    </div>

                    <div className={`p-10 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Companies Visited
                        </p>
                        <p className={`text-6xl font-serif font-bold mb-4 tabular-nums ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            {currentData.companies}+
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                            Including Fortune 500 companies and high-growth startups.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlacementStatistics;
