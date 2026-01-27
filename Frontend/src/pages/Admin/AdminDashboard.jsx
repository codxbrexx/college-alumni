import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { FaUsers, FaBriefcase, FaNewspaper, FaChartBar, FaCheckCircle, FaClock, FaTimesCircle } from 'react-icons/fa';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const AdminDashboard = () => {
    const { isDarkMode } = useTheme();
    const [stats, setStats] = useState({
        users: { total: 0, newToday: 0 },
        jobs: { total: 0, pending: 0, approved: 0, rejected: 0 },
        news: { total: 0 },
        placements: { total: 0 }
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            // Fetch stats from various endpoints
            const [jobsRes] = await Promise.all([
                axios.get(`${API_BASE}/api/jobs/moderation/pending`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
            ]);

            setStats(prev => ({
                ...prev,
                jobs: {
                    ...prev.jobs,
                    pending: jobsRes.data?.data?.pagination?.total || 0
                }
            }));
        } catch (err) {
            console.error('Failed to fetch stats', err);
        } finally {
            setLoading(false);
        }
    };

    const statCards = [
        {
            title: 'Total Users',
            value: stats.users.total,
            subtitle: `\+${stats.users.newToday} today`,
            icon: FaUsers,
            color: 'blue',
            link: '/admin/users'
        },
        {
            title: 'Pending Jobs',
            value: stats.jobs.pending,
            subtitle: `${stats.jobs.approved} approved`,
            icon: FaBriefcase,
            color: 'yellow',
            link: '/admin/jobs'
        },
        {
            title: 'News Articles',
            value: stats.news.total,
            subtitle: 'Published',
            icon: FaNewspaper,
            color: 'green',
            link: '/admin/news'
        },
        {
            title: 'Placements',
            value: stats.placements.total,
            subtitle: 'Total records',
            icon: FaChartBar,
            color: 'purple',
            link: '/placements'
        }
    ];

    const quickActions = [
        { title: 'Moderate Jobs', description: 'Review pending job postings', link: '/admin/jobs', icon: FaBriefcase },
        { title: 'Manage Users', description: 'View and manage user accounts', link: '/admin/users', icon: FaUsers },
        { title: 'View Analytics', description: 'Placement statistics dashboard', link: '/placements', icon: FaChartBar }
    ];

    if (loading) {
        return (
            <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Loading admin dashboard...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Header */}
                <div className={`border-b pb-6 mb-8 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <h1 className={`text-4xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Admin Dashboard
                    </h1>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Manage your alumni platform
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {statCards.map((card, index) => {
                        const Icon = card.icon;
                        const colorMap = {
                            blue: 'border-blue-600',
                            yellow: 'border-yellow-600',
                            green: 'border-green-600',
                            purple: 'border-purple-600'
                        };

                        return (
                            <Link
                                key={index}
                                to={card.link}
                                className={`border-l-4 ${colorMap[card.color]} p-6 border transition hover:shadow-md ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`text-sm font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                        {card.title}
                                    </span>
                                    <Icon className={`text-2xl ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} />
                                </div>
                                <h3 className={`text-5xl font-serif font-bold mb-2 tabular-nums ${isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    {card.value}
                                </h3>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                    {card.subtitle}
                                </p>
                            </Link>
                        );
                    })}
                </div>

                {/* Quick Actions */}
                <div className="mb-12">
                    <h2 className={`text-2xl font-serif font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {quickActions.map((action, index) => {
                            constIcon = action.icon;
                            return (
                                <Link
                                    key={index}
                                    to={action.link}
                                    className={`border p-6 transition hover:border-red-600 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                                        }`}
                                >
                                    <Icon className={`text-3xl mb-4 ${isDarkMode ? 'text-red-500' : 'text-red-600'}`} />
                                    <h3 className={`text-xl font-serif font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {action.title}
                                    </h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {action.description}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Recent Activity */}
                <div>
                    <h2 className={`text-2xl font-serif font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Recent Activity
                    </h2>
                    <div className={`border p-8 text-center ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Activity log will appear here
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
