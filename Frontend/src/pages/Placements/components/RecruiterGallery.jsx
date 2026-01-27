import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

const RecruiterGallery = ({ recruiters }) => {
    const { isDarkMode } = useTheme();

    const defaultRecruiters = recruiters || {
        dream: ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'],
        core: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra', 'Cognizant'],
        startups: ['Razorpay', 'CRED', 'Swiggy', 'Zomato', 'PhonePe', 'Paytm']
    };

    const categories = [
        { title: 'Dream Companies', companies: defaultRecruiters.dream, color: 'red' },
        { title: 'Core Companies', companies: defaultRecruiters.core, color: 'blue' },
        { title: 'Growing Startups', companies: defaultRecruiters.startups, color: 'green' }
    ];

    const colorMap = {
        red: 'border-red-600',
        blue: 'border-blue-600',
        green: 'border-green-600'
    };

    return (
        <div className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className={`border-b pb-6 mb-12 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <h2 className={`text-4xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Our Recruiting Partners
                    </h2>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Leading companies trust our talent
                    </p>
                </div>

                {/* Categories */}
                <div className="space-y-12">
                    {categories.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className={`text-2xl font-serif font-bold mb-6 border-l-4 ${colorMap[category.color]} pl-4 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {category.companies.map((company, index) => (
                                    <div
                                        key={index}
                                        className={`border p-6 flex items-center justify-center transition hover:border-red-600 ${isDarkMode ? 'bg-gray-950 border-gray-800' : 'bg-gray-50 border-gray-200'
                                            }`}
                                    >
                                        <span className={`text-center font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-900'
                                            }`}>
                                            {company}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecruiterGallery;
