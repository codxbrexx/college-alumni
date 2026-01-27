import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

const SuccessStories = ({ stories }) => {
    const { isDarkMode } = useTheme();

    const defaultStories = stories || [
        { name: 'Rahul Sharma', branch: 'Computer Science', company: 'Google', package: 42, year: 2024, location: 'Bangalore' },
        { name: 'Priya Patel', branch: 'Electronics', company: 'Microsoft', package: 38, year: 2024, location: 'Hyderabad' },
        { name: 'Amit Kumar', branch: 'Computer Science', company: 'Amazon', package: 35, year: 2024, location: 'Bangalore' },
        { name: 'Sneha Reddy', branch: 'Information Technology', company: 'Meta', package: 40, year: 2024, location: 'Gurgaon' },
        { name: 'Vikram Singh', branch: 'Computer Science', company: 'Netflix', package: 45, year: 2024, location: 'Mumbai' },
        { name: 'Ananya Desai', branch: 'Electronics', company: 'Apple', package: 43, year: 2024, location: 'Bangalore' }
    ];

    const companyColors = {
        'Google': 'border-blue-600',
        'Microsoft': 'border-green-600',
        'Amazon': 'border-yellow-600',
        'Meta': 'border-purple-600',
        'Netflix': 'border-red-600',
        'Apple': 'border-gray-600'
    };

    return (
        <div className={`py-16 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className={`border-b pb-6 mb-12 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <h2 className={`text-4xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Success Stories
                    </h2>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Celebrating our students' achievements
                    </p>
                </div>

                {/* Success Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {defaultStories.map((story, index) => (
                        <div
                            key={index}
                            className={`border-l-4 ${companyColors[story.company] || 'border-red-600'} border p-6 transition hover:shadow-lg ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                                }`}
                        >
                            {/* Student Name */}
                            <h3 className={`text-2xl font-serif font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                {story.name}
                            </h3>

                            {/* Branch */}
                            <div className="flex items-center gap-2 mb-4">
                                <FaGraduationCap className={isDarkMode ? 'text-gray-500' : 'text-gray-400'} />
                                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {story.branch}
                                </span>
                            </div>

                            {/* Company */}
                            <div className={`inline-block px-3 py-1 mb-4 border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'
                                }`}>
                                <span className={`font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                    {story.company}
                                </span>
                            </div>

                            {/* Package */}
                            <div className="mb-3">
                                <p className={`text-4xl font-serif font-bold tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    ₹{story.package} LPA
                                </p>
                            </div>

                            {/* Location & Year */}
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-1">
                                    <FaMapMarkerAlt className={isDarkMode ? 'text-gray-500' : 'text-gray-400'} />
                                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                                        {story.location}
                                    </span>
                                </div>
                                <span className={`font-bold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Class of {story.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuccessStories;
