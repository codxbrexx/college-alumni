import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import axios from 'axios';
import { FaBookmark, FaTrash, FaExternalLinkAlt, FaBuilding, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const SavedJobs = () => {
    const { isDarkMode } = useTheme();
    const [savedJobs, setSavedJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({ page: 1, total: 0, pages: 1 });

    const fetchSavedJobs = React.useCallback(async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            const response = await axios.get(`${API_BASE}/api/jobs/saved/all`, {
                params: { page: pagination.page, limit: 10 },
                headers: { Authorization: `Bearer ${token}` }
            });
            setSavedJobs(response.data?.data?.savedJobs || []);
            setPagination(response.data?.data?.pagination || { page: 1, total: 0, pages: 1 });
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch saved jobs');
        } finally {
            setLoading(false);
        }
    }, [pagination.page]);

    useEffect(() => {
        fetchSavedJobs();
    }, [fetchSavedJobs]);

    const handleUnsave = async (jobId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`${API_BASE}/api/jobs/${jobId}/save`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchSavedJobs();
        } catch (err) {
            alert(err.response?.data?.message || 'Failed to unsave job');
        }
    };

    if (loading) {
        return (
            <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
                <div className="max-w-5xl mx-auto px-6 py-20">
                    <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Loading saved jobs...
                    </p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
                <div className="max-w-5xl mx-auto px-6 py-20">
                    <p className="text-red-600 text-center">{error}</p>
                    <button
                        onClick={fetchSavedJobs}
                        className="mt-4 mx-auto block px-4 py-2 border border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white transition"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
            <div className="max-w-5xl mx-auto px-6 py-12">
                {/* Header */}
                <div className={`border-b pb-6 mb-8 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <h1 className={`text-4xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Saved Jobs
                    </h1>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {pagination.total} saved job{pagination.total !== 1 ? 's' : ''}
                    </p>
                </div>

                {/* Empty State */}
                {savedJobs.length === 0 ? (
                    <div className={`text-center py-20 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
                        <FaBookmark className={`text-6xl mx-auto mb-4 ${isDarkMode ? 'text-gray-700' : 'text-gray-300'}`} />
                        <h3 className={`text-2xl font-serif font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            No Saved Jobs Yet
                        </h3>
                        <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Start bookmarking jobs you're interested in
                        </p>
                        <Link
                            to="/jobs"
                            className={`inline-block px-6 py-3 font-bold border transition ${isDarkMode
                                ? 'bg-white text-black border-white hover:bg-gray-200'
                                : 'bg-black text-white border-black hover:bg-gray-900'
                                }`}
                        >
                            Browse Jobs
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {savedJobs.map((savedJob) => {
                            const job = savedJob.jobId;
                            if (!job) return null;

                            return (
                                <div
                                    key={savedJob._id}
                                    className={`border p-6 ${isDarkMode ? 'bg-gray-900 border-gray-800 hover:border-gray-700' : 'bg-white border-gray-200 hover:border-gray-300'} transition`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h3 className={`text-2xl font-serif font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {job.title}
                                            </h3>
                                            <div className={`flex flex-wrap gap-4 text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                <span className="flex items-center gap-1">
                                                    <FaBuilding /> {job.company}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FaMapMarkerAlt /> {job.location}
                                                </span>
                                                <span>Duration: {job.duration}</span>
                                                <span>Stipend: {job.stipend}</span>
                                            </div>
                                            <p className={`mb-4 line-clamp-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {job.description}
                                            </p>
                                            <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                                <FaCalendar className="inline mr-1" />
                                                Saved {new Date(savedJob.savedAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-2 ml-4">
                                            <Link
                                                to={`/job/${job._id}`}
                                                className={`flex items-center gap-2 px-4 py-2 font-bold border transition whitespace-nowrap ${isDarkMode
                                                    ? 'border-white text-white hover:bg-white hover:text-black'
                                                    : 'border-black text-black hover:bg-black hover:text-white'
                                                    }`}
                                            >
                                                <FaExternalLinkAlt /> View
                                            </Link>
                                            <button
                                                onClick={() => handleUnsave(job._id)}
                                                className={`flex items-center gap-2 px-4 py-2 font-bold border transition ${isDarkMode
                                                    ? 'border-red-600 text-red-400 hover:bg-red-600 hover:text-white'
                                                    : 'border-red-600 text-red-700 hover:bg-red-600 hover:text-white'
                                                    }`}
                                            >
                                                <FaTrash /> Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Pagination */}
                {pagination.pages > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        <button
                            disabled={pagination.page === 1}
                            onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                            className={`px-4 py-2 border font-bold ${pagination.page === 1
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                } ${isDarkMode ? 'border-gray-700 text-white' : 'border-gray-300'}`}
                        >
                            Previous
                        </button>
                        <span className={`px-4 py-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Page {pagination.page} of {pagination.pages}
                        </span>
                        <button
                            disabled={pagination.page === pagination.pages}
                            onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                            className={`px-4 py-2 border font-bold ${pagination.page === pagination.pages
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                } ${isDarkMode ? 'border-gray-700 text-white' : 'border-gray-300'}`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SavedJobs;
