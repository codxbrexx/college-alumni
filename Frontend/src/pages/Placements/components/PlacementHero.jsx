import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { FaUserGraduate, FaRupeeSign, FaTrophy, FaBuilding } from 'react-icons/fa';

const PlacementHero = ({ stats }) => {
    const { isDarkMode } = useTheme();

    const statCards = [
        {
            icon: FaUserGraduate,
            value: stats.totalPlacements || '500+',
            label: 'Students Placed',
            color: 'blue'
        },
        {
            icon: FaTrophy,
            value: stats.highestPackage ? `₹${stats.highestPackage} LPA` : '₹45 LPA',
            label: 'Highest Package',
            color: 'red'
        },
        {
            icon: FaRupeeSign,
            value: stats.averagePackage ? `₹${stats.averagePackage} LPA` : '₹12 LPA',
            label: 'Average Package',
            color: 'green'
        },
        {
            icon: FaBuilding,
            value: stats.totalCompanies || '100+',
            label: 'Top Recruiters',
            color: 'purple'
        }
    ];

    const colorMap = {
        blue: 'border-blue-600',
        red: 'border-red-600',
        green: 'border-green-600',
        purple: 'border-purple-600'
    };

    return (
        <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} py-16`}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero Text */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
                        Placement Excellence
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Empowering Careers, Building Futures
                    </p>
                </div>

                {/* Stats Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statCards.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className={`bg-white border-l-4 ${colorMap[stat.color]} p-6 border border-gray-200 transition hover:shadow-lg`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-sm font-bold uppercase tracking-widest text-gray-600">
                                        {stat.label}
                                    </span>
                                    <Icon className="text-2xl text-gray-300" />
                                </div>
                                <h3 className="text-4xl font-serif font-bold text-gray-900 tabular-nums">
                                    {stat.value}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PlacementHero;
