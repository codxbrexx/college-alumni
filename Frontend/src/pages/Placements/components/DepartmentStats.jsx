import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

const DepartmentStats = ({ departments }) => {
    const { isDarkMode } = useTheme();

    const defaultDepartments = departments || [
        { branch: 'Computer Science & Engineering', placementRate: 95, avgPackage: 15, placed: 285, total: 300 },
        { branch: 'Information Technology', placementRate: 92, avgPackage: 13.5, placed: 184, total: 200 },
        { branch: 'Electronics & Communication', placementRate: 90, avgPackage: 12, placed: 162, total: 180 },
        { branch: 'Mechanical Engineering', placementRate: 85, avgPackage: 10, placed: 136, total: 160 },
        { branch: 'Electrical Engineering', placementRate: 88, avgPackage: 11, placed: 132, total: 150 },
        { branch: 'Civil Engineering', placementRate: 80, avgPackage: 9, placed: 96, total: 120 }
    ];

    const getColorClass = (rate) => {
        if (rate >= 90) return 'bg-green-600';
        if (rate >= 80) return 'bg-blue-600';
        if (rate >= 70) return 'bg-yellow-600';
        return 'bg-red-600';
    };

    return (
        <div className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className={`border-b pb-6 mb-12 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <h2 className={`text-4xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Department-Wise Statistics
                    </h2>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Placement performance across all branches
                    </p>
                </div>

                {/* Department Stats List */}
                <div className="space-y-6">
                    {defaultDepartments.map((dept, index) => (
                        <div
                            key={index}
                            className={`border p-6 ${isDarkMode ? 'bg-gray-950 border-gray-800' : 'bg-gray-50 border-gray-200'}`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h3 className={`text-xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {dept.branch}
                                    </h3>
                                    <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {dept.placed} of {dept.total} students placed
                                    </p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div>
                                        <p className={`text-sm uppercase tracking-wider ${isDarkMode ? 'text-gray-500' : 'text-gray-500'
                                            }`}>
                                            Avg Package
                                        </p>
                                        <p className={`text-2xl font-serif font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>
                                            ₹{dept.avgPackage} LPA
                                        </p>
                                    </div>
                                    <div>
                                        <p className={`text-sm uppercase tracking-wider ${isDarkMode ? 'text-gray-500' : 'text-gray-500'
                                            }`}>
                                            Placement Rate
                                        </p>
                                        <p className={`text-3xl font-serif font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>
                                            {dept.placementRate}%
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-300 h-3 overflow-hidden">
                                <div
                                    className={`h-full ${getColorClass(dept.placementRate)} transition-all`}
                                    style={{ width: `${dept.placementRate}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DepartmentStats;
