import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import axios from 'axios';
import StatsCards from './StatsCards';
import BranchChart from './BranchChart';
import TrendChart from './TrendChart';
import RecruiterTable from './RecruiterTable';

const PlacementDashboard = () => {
    const { isDarkMode } = useTheme();
    const [availableYears, setAvailableYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

    // Fetch available years
    useEffect(() => {
        const fetchYears = async () => {
            try {
                const response = await axios.get(`${API_BASE}/api/placements/years`);
                const years = response.data?.data?.years || [];
                setAvailableYears(years);
                if (years.length > 0) {
                    setSelectedYear(years[0]); // Default to latest year
                } else {
                    setError('No placement data available');
                    setLoading(false);
                }
            } catch (err) {
                console.error('Error fetching years:', err);
                setError('Failed to load placement years');
                setLoading(false);
            }
        };

        fetchYears();
    }, [API_BASE]);

    // Fetch stats when year changes
    useEffect(() => {
        if (!selectedYear) return;

        const fetchStats = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${API_BASE}/api/placements/stats`, {
                    params: { year: selectedYear }
                });
                setStats(response.data?.data || null);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching stats:', err);
                setError('Failed to load placement statistics');
                setLoading(false);
            }
        };

        fetchStats();
    }, [selectedYear, API_BASE]);

    if (loading) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                <div className="text-center">
                    <div className={`text-xl font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Loading placement data...
                    </div>
                </div>
            </div>
        );
    }

    if (error || !stats) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                <div className="text-center max-w-lg px-6">
                    <h3 className={`text-2xl font-serif font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {error || 'No Data Available'}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {error || 'Placement data for the selected year is not available.'}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className={`mt-6 px-6 py-3 border font-bold transition-all ${isDarkMode
                            ? 'bg-white text-black border-white hover:bg-gray-100'
                            : 'bg-black text-white border-black hover:bg-gray-900'
                            }`}
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header with Year Selector */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b pb-8 border-gray-200 dark:border-gray-800">
                    <div>
                        <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'bg-red-900/40 text-red-400' : 'bg-red-50 text-red-700'
                            }`}>
                            Analytics Dashboard
                        </span>
                        <h2 className={`text-4xl md:text-5xl font-bold font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            Placement Statistics
                        </h2>
                    </div>

                    {/* Year Selector */}
                    {availableYears.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                            {availableYears.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    className={`px-4 py-2 text-sm font-bold transition-all duration-300 border ${selectedYear === year
                                        ? isDarkMode
                                            ? 'bg-white text-black border-white'
                                            : 'bg-black text-white border-black'
                                        : isDarkMode
                                            ? 'text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white'
                                            : 'text-gray-500 border-gray-200 hover:border-gray-400 hover:text-black'
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Stats Cards */}
                <StatsCards stats={stats.overview} />

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Branch Analysis */}
                    <BranchChart data={stats.byBranch} />

                    {/* Year-over-Year Trend */}
                    <TrendChart selectedYear={selectedYear} availableYears={availableYears} />
                </div>

                {/* Top Recruiters */}
                <RecruiterTable data={stats.topRecruiters} />
            </div>
        </section>
    );
};

export default PlacementDashboard;
