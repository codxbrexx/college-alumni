import React from 'react';
import { useTheme } from '../../../../context/ThemeContext';
import { FaChartLine, FaBuilding, FaUserGraduate, FaUniversity } from 'react-icons/fa';

const StatsCards = ({ stats }) => {
    const { isDarkMode } = useTheme();

    if (!stats) return null;

    const statCards = [
        {
            label: 'Total Placements',
            value: stats.totalPlacements || 0,
            icon: FaUserGraduate,
            prefix: '',
            suffix: '',
            border: 'border-l-4 border-blue-500',
        },
        {
            label: 'Average Package',
            value: stats.avgPackage || 0,
            icon: FaChartLine,
            prefix: '₹',
            suffix: ' LPA',
            border: 'border-l-4 border-yellow-400',
        },
        {
            label: 'Highest Package',
            value: stats.maxPackage || 0,
            icon: FaBuilding,
            prefix: '₹',
            suffix: ' LPA',
            border: 'border-l-4 border-green-600',
        },
        {
            label: 'Companies Visited',
            value: stats.totalCompanies || 0,
            icon: FaUniversity,
            prefix: '',
            suffix: '',
            border: 'border-l-4 border-purple-600',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {statCards.map((card, index) => {
                const Icon = card.icon;
                return (
                    <div
                        key={index}
                        className={`relative p-6 border transition-all duration-300 hover:shadow-md group ${card.border
                            } ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div className={`text-xs font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                {card.label}
                            </div>
                            <Icon className={`text-xl ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} />
                        </div>

                        <h3 className={`text-4xl md:text-5xl font-serif font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            {card.prefix}{card.value}{card.suffix}
                        </h3>
                    </div>
                );
            })}
        </div>
    );
};

export default StatsCards;
