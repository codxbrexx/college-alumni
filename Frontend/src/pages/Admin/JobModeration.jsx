import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import axios from 'axios';
import { FaCheckCircle, FaTimesCircle, FaUser, FaBuilding, FaCalendar, FaEye } from 'react-icons/fa';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const JobModeration = () => {
    const { isDarkMode } = useTheme();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);
    const [showRejectModal, setShowRejectModal] = useState(false);
    const [rejectionReason, setRejectionReason] = useState('');
    const [notes, setNotes] = useState('');
    const [pagination, setPagination] = useState({ page: 1, total: 0, pages: 1 });

    useEffect(() => {
        fetchPendingJobs();
    }, [pagination.page]);

    const fetchPendingJobs = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            const response = await axios.get(`${API_BASE}/api/jobs/moderation/pending`, {
                params: { page: pagination.page, limit: 10 },
                headers: { Authorization: `Bearer ${token}` }
            });
            setJobs(response.data?.data?.jobs || []);
            setPagination(response.data?.data?.pagination || { page: 1, total: 0, pages: 1 });
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch pending jobs');
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (jobId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(`${API_BASE}/api/jobs/${jobId}/approve`,
                { notes },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchPendingJobs();
            setNotes('');
        } catch (err) {
            alert(err.response?.data?.message || 'Failed to approve job');
        }
    };

    const handleReject = async () => {
        if (!rejectionReason.trim()) {
            alert('Rejection reason is required');
            return;
        }
        try {
            const token = localStorage.getItem('token');
            await axios.post(`${API_BASE}/api/jobs/${selectedJob._id}/reject`,
                { reason: rejectionReason, notes },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setShowRejectModal(false);
            setRejectionReason('');
            setNotes('');
            fetchPendingJobs();
        } catch (err) {
            alert(err.response?.data?.message || 'Failed to reject job');
        }
    };

    if (loading) {
        return (
            <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Loading pending jobs...
                    </p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <p className="text-red-600 text-center">{error}</p>
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
                        Job Moderation
                    </h1>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Review and approve pending job postings
                    </p>
                    <div className="mt-4">
                        <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                            {pagination.total} pending job{pagination.total !== 1 ? 's' : ''}
                        </span>
                    </div>
                </div>

                {/* Jobs List */}
                {jobs.length === 0 ? (
                    <div className={`text-center py-20 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        No pending jobs to review
                    </div>
                ) : (
                    <div className="space-y-6">
                        {jobs.map((job) => (
                            <div
                                key={job._id}
                                className={`border p-6 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}
                            >
                                {/* Job Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className={`text-2xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {job.title}
                                        </h3>
                                        <div className={`flex items-center gap-4 mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            <span className="flex items-center gap-1">
                                                <FaBuilding /> {job.company}
                                            </span>
                                            <span>{job.location}</span>
                                            <span className="flex items-center gap-1">
                                                <FaUser /> {job.user?.fullName || job.user?.username}
                                            </span>
                                        </div>
                                    </div>
                                    <span className={`px-3 py-1 text-xs font-bold uppercase border ${isDarkMode ? 'border-yellow-600 text-yellow-400' : 'border-yellow-600 text-yellow-700'
                                        }`}>
                                        Pending
                                    </span>
                                </div>

                                {/* Job Details */}
                                <div className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <p className="line-clamp-3">{job.description}</p>
                                </div>

                                <div className={`flex gap-4 text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    <span>Duration: {job.duration}</span>
                                    <span>Stipend: {job.stipend}</span>
                                    <span className="flex items-center gap-1">
                                        <FaCalendar /> {new Date(job.createdAt).toLocaleDateString()}
                                    </span>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => handleApprove(job._id)}
                                        className={`flex items-center gap-2 px-4 py-2 font-bold border transition ${isDarkMode
                                                ? 'border-green-600 text-green-400 hover:bg-green-600 hover:text-white'
                                                : 'border-green-600 text-green-700 hover:bg-green-600 hover:text-white'
                                            }`}
                                    >
                                        <FaCheckCircle /> Approve
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSelectedJob(job);
                                            setShowRejectModal(true);
                                        }}
                                        className={`flex items-center gap-2 px-4 py-2 font-bold border transition ${isDarkMode
                                                ? 'border-red-600 text-red-400 hover:bg-red-600 hover:text-white'
                                                : 'border-red-600 text-red-700 hover:bg-red-600 hover:text-white'
                                            }`}
                                    >
                                        <FaTimesCircle /> Reject
                                    </button>
                                </div>
                            </div>
                        ))}
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

            {/* Reject Modal */}
            {showRejectModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className={`max-w-lg w-full p-6 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
                        <h3 className={`text-2xl font-serif font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Reject Job Posting
                        </h3>
                        <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {selectedJob?.title} at {selectedJob?.company}
                        </p>
                        <div className="mb-4">
                            <label className={`block mb-2 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Rejection Reason *
                            </label>
                            <textarea
                                value={rejectionReason}
                                onChange={(e) => setRejectionReason(e.target.value)}
                                className={`w-full p-3 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}
                                rows="3"
                                placeholder="e.g., Spam, Inappropriate content, Incomplete information..."
                            />
                        </div>
                        <div className="mb-6">
                            <label className={`block mb-2 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Internal Notes (Optional)
                            </label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                className={`w-full p-3 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}
                                rows="2"
                                placeholder="Internal moderation notes..."
                            />
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={handleReject}
                                className="flex-1 px-4 py-2 bg-red-600 text-white font-bold hover:bg-red-700 transition"
                            >
                                Confirm Rejection
                            </button>
                            <button
                                onClick={() => {
                                    setShowRejectModal(false);
                                    setRejectionReason('');
                                    setNotes('');
                                }}
                                className={`flex-1 px-4 py-2 border font-bold ${isDarkMode ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobModeration;
