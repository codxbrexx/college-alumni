import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BranchChart = ({ data }) => {
    const { isDarkMode } = useTheme();

    if (!data || data.length === 0) {
        return (
            <div className={`p-8 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                <h3 className={`text-2xl font-serif font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Branch-wise Analysis
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>No branch data available</p>
            </div>
        );
    }

    // Sort by average package (descending)
    const sortedData = [...data].sort((a, b) => b.avgPackage - a.avgPackage);

    const chartData = {
        labels: sortedData.map((item) => item.branch),
        datasets: [
            {
                label: 'Average Package (₹ LPA)',
                data: sortedData.map((item) => item.avgPackage),
                backgroundColor: 'rgba(220, 38, 38, 0.8)', // Red-600
                borderColor: 'rgba(220, 38, 38, 1)',
                borderWidth: 0,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                backgroundColor: isDarkMode ? '#000' : '#1f2937',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: isDarkMode ? '#374151' : '#9ca3af',
                borderWidth: 1,
                cornerRadius: 0,
                padding: 12,
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        return `Average Package: ₹${context.parsed.x} LPA`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    color: isDarkMode ? '#1f2937' : '#e5e7eb',
                    borderDash: [3, 3],
                },
                ticks: {
                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                    callback: function (value) {
                        return '₹' + value;
                    },
                },
                border: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                    font: {
                        size: 12,
                        weight: 'bold',
                    },
                },
                border: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className={`p-8 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className={`text-2xl font-serif font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Branch-wise Analysis
            </h3>
            <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Average package by branch (sorted by highest)
            </p>
            <div style={{ height: '400px' }}>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

export default BranchChart;
