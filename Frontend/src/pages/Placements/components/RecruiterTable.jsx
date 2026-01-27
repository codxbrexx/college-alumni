import React from 'react';
import { useTheme } from '../../../../context/ThemeContext';
import { FaMedal } from 'react-icons/fa';

const RecruiterTable = ({ data }) => {
    const { isDarkMode } = useTheme();

    if (!data || data.length === 0) {
        return (
            <div className={`p-8 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                <h3 className={`text-2xl font-serif font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Top Recruiters
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>No recruiter data available</p>
            </div>
        );
    }

    const getMedalColor = (rank) => {
        if (rank === 1) return 'text-yellow-500';
        if (rank === 2) return 'text-gray-400';
        if (rank === 3) return 'text-amber-700';
        return 'text-gray-500';
    };

    // Calculate max hires for bar chart scaling
    const maxHires = Math.max(...data.map((item) => item.hires));

    return (
        <div className={`p-8 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className={`text-2xl font-serif font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Top Recruiters
            </h3>
            <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Companies ranked by number of hires
            </p>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className={`border-b-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                            <th className={`text-left py-3 px-4 text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                Rank
                            </th>
                            <th className={`text-left py-3 px-4 text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                Company
                            </th>
                            <th className={`text-left py-3 px-4 text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                Hires
                            </th>
                            <th className={`text-left py-3 px-4 text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                Avg Package
                            </th>
                            <th className={`text-left py-3 px-4 text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                Max Package
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((recruiter, index) => {
                            const rank = index + 1;
                            const barWidth = (recruiter.hires / maxHires) * 100;

                            return (
                                <tr
                                    key={index}
                                    className={`border-b transition-colors ${isDarkMode
                                            ? 'border-gray-800 hover:bg-gray-800/50'
                                            : 'border-gray-200 hover:bg-gray-100'
                                        }`}
                                >
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-2">
                                            {rank <= 3 && <FaMedal className={getMedalColor(rank)} />}
                                            <span className={`font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {rank}
                                            </span>
                                        </div>
                                    </td>
                                    <td className={`py-4 px-4 font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {recruiter.company}
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="relative flex-1 max-w-[120px]">
                                                <div className={`h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                                                <div
                                                    className="absolute top-0 left-0 h-6 bg-red-600"
                                                    style={{ width: `${barWidth}%` }}
                                                ></div>
                                            </div>
                                            <span className={`font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {recruiter.hires}
                                            </span>
                                        </div>
                                    </td>
                                    <td className={`py-4 px-4 font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        ₹{recruiter.avgPackage} LPA
                                    </td>
                                    <td className={`py-4 px-4 font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        ₹{recruiter.maxPackage} LPA
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
                {data.map((recruiter, index) => {
                    const rank = index + 1;
                    const barWidth = (recruiter.hires / maxHires) * 100;

                    return (
                        <div
                            key={index}
                            className={`p-4 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    {rank <= 3 && <FaMedal className={getMedalColor(rank)} />}
                                    <span className={`text-sm font-bold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        #{rank}
                                    </span>
                                </div>
                                <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {recruiter.company}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Hires:
                                    </span>
                                    <div className="relative flex-1">
                                        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                                        <div
                                            className="absolute top-0 left-0 h-4 bg-red-600"
                                            style={{ width: `${barWidth}%` }}
                                        ></div>
                                    </div>
                                    <span className={`font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {recruiter.hires}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Avg Package:
                                    </span>
                                    <span className={`font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        ₹{recruiter.avgPackage} LPA
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className={`text-xs font-bold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Max Package:
                                    </span>
                                    <span className={`font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        ₹{recruiter.maxPackage} LPA
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecruiterTable;
