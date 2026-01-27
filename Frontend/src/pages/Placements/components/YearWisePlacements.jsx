import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';

const YearWisePlacements = ({ yearData }) => {
    const { isDarkMode } = useTheme();
    const [selectedYear, setSelectedYear] = useState(yearData[0]?.year || 2024);

    const currentYearData = yearData.find(y => y.year === selectedYear) || yearData[0] || {
        year: 2024,
        totalPlacements: 520,
        averagePackage: 12.5,
        highestPackage: 45,
        placementRate: 92,
        topRecruiters: ['Google', 'Microsoft', 'Amazon']
    };

    return (
        <div className={`py-16 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className={`border-b pb-6 mb-8 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <h2 className={`text-4xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Year-Wise Placements
                    </h2>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Track our placement success over the years
                    </p>
                </div>

                {/* Year Tabs */}
                <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                    {yearData.map((year) => (
                        <button
                            key={year.year}
                            onClick={() => setSelectedYear(year.year)}
                            className={`px-6 py-3 font-bold border-b-4 transition whitespace-nowrap ${selectedYear === year.year
                                ? 'border-red-600 text-red-600'
                                : isDarkMode
                                    ? 'border-transparent text-gray-400 hover:text-gray-200'
                                    : 'border-transparent text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {year.year}
                        </button>
                    ))}
                </div>

                {/* Year Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className={`border p-6 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
                        <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            Total Placements
                        </h4>
                        <p className={`text-5xl font-serif font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            {currentYearData.totalPlacements}
                        </p>
                        <p className={`mt-2 text-sm ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                            {currentYearData.placementRate}% placement rate
                        </p>
                    </div>

                    <div className={`border p-6 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
                        <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            Average Package
                        </h4>
                        <p className={`text-5xl font-serif font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            ₹{currentYearData.averagePackage} LPA
                        </p>
                    </div>

                    <div className={`border p-6 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
                        <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            Highest Package
                        </h4>
                        <p className={`text-5xl font-serif font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            ₹{currentYearData.highestPackage} LPA
                        </p>
                    </div>
                </div>

                {/* Top Recruiters for Year */}
                <div className={`border p-6 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
                    <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Top Recruiters {currentYearData.year}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                        {currentYearData.topRecruiters.map((company, index) => (
                            <span
                                key={index}
                                className={`px-4 py-2 border font-bold ${isDarkMode
                                    ? 'bg-gray-800 border-gray-700 text-gray-200'
                                    : 'bg-gray-50 border-gray-300 text-gray-900'
                                    }`}
                            >
                                {company}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YearWisePlacements;
