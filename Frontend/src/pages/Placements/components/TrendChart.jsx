import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../../context/ThemeContext';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TrendChart = ({ selectedYear, availableYears }) => {
    const { isDarkMode } = useTheme();
    const [trendData, setTrendData] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

    useEffect(() => {
        const fetchTrendData = async () => {
            setLoading(true);
            try {
                // Fetch stats for last 5 years or all available years
                const yearsToFetch = availableYears.slice(0, 5);
                const promises = yearsToFetch.map((year) =>
                    axios.get(`${API_BASE}/api/placements/stats`, { params: { year } })
                );

                const responses = await Promise.all(promises);
                const trends = responses.map((res, idx) => ({
                    year: yearsToFetch[idx],
                    ...res.data?.data?.overview,
                }));

                setTrendData(trends.reverse()); // Oldest to newest
                setLoading(false);
            } catch (err) {
                console.error('Error fetching trend data:', err);
                setLoading(false);
            }
        };

        if (availableYears && availableYears.length > 0) {
            fetchTrendData();
        }
    }, [availableYears, API_BASE]);

    if (loading || !trendData) {
        return (
            <div className={`p-8 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                <h3 className={`text-2xl font-serif font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Year-over-Year Trends
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Loading trend data...</p>
            </div>
        );
    }

    const chartData = {
        labels: trendData.map((item) => item.year),
        datasets: [
            {
                label: 'Average Package (₹ LPA)',
                data: trendData.map((item) => item.avgPackage || 0),
                borderColor: 'rgba(220, 38, 38, 1)', // Red-600
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                tension: 0.3,
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
            {
                label: 'Highest Package (₹ LPA)',
                data: trendData.map((item) => item.maxPackage || 0),
                borderColor: 'rgba(34, 197, 94, 1)', // Green-500
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                tension: 0.3,
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
            {
                label: 'Total Placements',
                data: trendData.map((item) => item.totalPlacements || 0),
                borderColor: 'rgba(59, 130, 246, 1)', // Blue-500
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.3,
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                yAxisID: 'y1',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                    padding: 15,
                    usePointStyle: true,
                    font: {
                        size: 12,
                        weight: 'bold',
                    },
                },
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
                    font: {
                        weight: 'bold',
                    },
                },
                border: {
                    display: false,
                },
            },
            y: {
                type: 'linear',
                position: 'left',
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
            y1: {
                type: 'linear',
                position: 'right',
                grid: {
                    display: false,
                },
                ticks: {
                    color: isDarkMode ? '#9ca3af' : '#6b7280',
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
                Year-over-Year Trends
            </h3>
            <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Placement trends over the last {trendData.length} years
            </p>
            <div style={{ height: '400px' }}>
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default TrendChart;
