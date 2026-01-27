import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaUser, FaBriefcase, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const OnboardingWizard = ({ user, onComplete }) => {
    const { isDarkMode } = useTheme();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Basic Info
        fullName: user?.fullName || '',
        bio: user?.bio || '',
        location: user?.location || '',
        // Step 2: Education
        batch: user?.batch || '',
        degree: user?.degree || '',
        branch: user?.branch || '',
        // Step 3: Professional
        currentCompany: user?.currentCompany || '',
        designation: user?.designation || '',
        experience: user?.experience || '',
        skills: user?.skills?.join(', ') || '',
        // Privacy
        privacy: {
            showEmail: user?.privacy?.showEmail !== false,
            showPhone: user?.privacy?.showPhone !== false,
            showCompany: user?.privacy?.showCompany !== false
        }
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const steps = [
        { id: 1, title: 'Basic Info', icon: FaUser },
        { id: 2, title: 'Education', icon: FaGraduationCap },
        { id: 3, title: 'Professional', icon: FaBriefcase },
        { id: 4, title: 'Privacy', icon: FaCheckCircle }
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name.startsWith('privacy.')) {
            const privacyField = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                privacy: { ...prev.privacy, [privacyField]: checked }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const validateStep = (step) => {
        const newErrors = {};
        if (step === 1) {
            if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
            if (!formData.location.trim()) newErrors.location = 'Location is required';
        } else if (step === 2) {
            if (!formData.batch) newErrors.batch = 'Batch is required';
            if (!formData.degree) newErrors.degree = 'Degree is required';
            if (!formData.branch) newErrors.branch = 'Branch is required';
        } else if (step === 3) {
            if (!formData.currentCompany.trim()) newErrors.currentCompany = 'Company is required';
            if (!formData.designation.trim()) newErrors.designation = 'Designation is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 4));
        }
    };

    const handleBack = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleSubmit = async () => {
        if (!validateStep(currentStep)) return;

        const token = localStorage.getItem('token');
        if (!token) {
            alert('Please log in to complete onboarding');
            return;
        }

        setLoading(true);
        try {
            const payload = {
                ...formData,
                skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean),
                onboardingComplete: true
            };

            await axios.put(`${API_BASE}/api/auth/profile`, payload, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (onComplete) onComplete();
        } catch (err) {
            alert(err.response?.data?.message || 'Failed to complete onboarding');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'} py-12 px-4`}>
            <div className={`max-w-3xl w-full border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-8`}>
                {/* Header */}
                <h1 className={`text-4xl font-serif font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Complete Your Profile
                </h1>
                <p className={`mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Help fellow alumni discover you
                </p>

                {/* Progress Bar */}
                <div className="flex justify-between mb-12">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = currentStep >= step.id;
                        const isCurrent = currentStep === step.id;

                        return (
                            <div key={step.id} className="flex-1">
                                <div className="flex flex-col items-center">
                                    <div className={`w-12 h-12 border-2 flex items-center justify-center transition ${isActive
                                            ? isDarkMode
                                                ? 'border-white bg-white text-black'
                                                : 'border-black bg-black text-white'
                                            : isDarkMode
                                                ? 'border-gray-700 text-gray-700'
                                                : 'border-gray-300 text-gray-300'
                                        }`}>
                                        <Icon />
                                    </div>
                                    <span className={`text-xs mt-2 font-bold ${isCurrent
                                            ? isDarkMode ? 'text-white' : 'text-black'
                                            : isDarkMode ? 'text-gray-600' : 'text-gray-400'
                                        }`}>
                                        {step.title}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Step Content */}
                <div className="mb-8">
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <h2 className={`text-2xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Basic Information</h2>
                            <div>
                                <label className={`block mb-2 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} ${errors.fullName ? 'border-red-600' : ''}`}
                                />
                                {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                            </div>
                            <div>
                                <label className={`block mb-2 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Bio</label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows="4"
                                    className={`w-full p-3 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}
                                    placeholder="Tell us about yourself..."
                                />
                            </div>
                            <div>
                                <label className={`block mb-2 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Location *</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} ${errors.location ? 'border-red-600' : ''}`}
                                    placeholder="e.g., San Francisco, CA"
                                />
                                {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <h2 className={`text-2xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Education Details</h2>
                            <div>
                                <label className={`block mb-2 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Batch *</label>
                                <input
                                    type="text"
                                    name="batch"
                                    value={formData.batch}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} ${errors.batch ? 'border-red-600' : ''}`}
                                    placeholder="e.g., 2020"
                                />
                                {errors.batch && <p className="text-red-600 text-sm mt-1">{errors.batch}</p>}
                            </div>
                            <div>
                                <label className={`block mb-2 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Degree *</label>
                                <select
                                    name="degree"
                                    value={formData.degree}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} ${errors.degree ? 'border-red-600' : ''}`}
                                >
                                    <option value="">Select Degree</option>
                                    <option value="BTech">B.Tech</option>
                                    <option value="MTech">M.Tech</option>
                                    <option value="PhD">PhD</option>
                                    <option value="MBA">MBA</option>
                                </select>
                                {errs.degree && <p className="text-red-600 text-sm mt-1">{errors.degree}</p>}
                            </div>
                            <div>
                                <label className={`block mb-2 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Branch *</label>
                                <input
                                    type="text"
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} ${errors.branch ? 'border-red-600' : ''}`}
                                    placeholder="e.g., Computer Science"
                                />
                                {errors.branch && <p className="text-red-600 text-sm mt-1">{errors.branch}</p>}
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <h2 className={`text-2xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Professional Info</h2>
                            <div>
                                <label className={`block mb-2 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Current Company *</label>
                                <input
                                    type="text"
                                    name="currentCompany"
                                    value={formData.currentCompany}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} ${errors.currentCompany ? 'border-red-600' : ''}`}
                                />
                                {errors.currentCompany && <p className="text-red-600 text-sm mt-1">{errors.currentCompany}</p>}
                            </div>
                            <div>
                                <label className={`block mb-2 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Designation *</label>
                                <input
                                    type="text"
                                    name="designation"
                                    value={formData.designation}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} ${errors.designation ? 'border-red-600' : ''}`}
                                />
                                {errors.designation && <p className="text-red-600 text-sm mt-1">{errors.designation}</p>}
                            </div>
                            <div>
                                <label className={`block mb-2 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Years of Experience</label>
                                <input
                                    type="number"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}
                                />
                            </div>
                            <div>
                                <label className={`block mb-2 font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Skills (comma-separated)</label>
                                <input
                                    type="text"
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleChange}
                                    className={`w-full p-3 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}
                                    placeholder="e.g., JavaScript, React, Node.js"
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <h2 className={`text-2xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Privacy Settings</h2>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Control what information is visible to other alumni
                            </p>
                            <div className="space-y-4">
                                <label className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        name="privacy.showEmail"
                                        checked={formData.privacy.showEmail}
                                        onChange={handleChange}
                                        className="w-5 h-5"
                                    />
                                    <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Show email address</span>
                                </label>
                                <label className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        name="privacy.showPhone"
                                        checked={formData.privacy.showPhone}
                                        onChange={handleChange}
                                        className="w-5 h-5"
                                    />
                                    <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Show phone number</span>
                                </label>
                                <label className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        name="privacy.showCompany"
                                        checked={formData.privacy.showCompany}
                                        onChange={handleChange}
                                        className="w-5 h-5"
                                    />
                                    <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Show current company</span>
                                </label>
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className={`px-6 py-3 border font-bold ${currentStep === 1
                                ? 'opacity-50 cursor-not-allowed'
                                : isDarkMode
                                    ? 'border-gray-700 text-white hover:bg-gray-800'
                                    : 'border-gray-300 hover:bg-gray-100'
                            }`}
                    >
                        Back
                    </button>
                    {currentStep < 4 ? (
                        <button
                            onClick={handleNext}
                            className={`px-6 py-3 font-bold ${isDarkMode
                                    ? 'bg-white text-black hover:bg-gray-200'
                                    : 'bg-black text-white hover:bg-gray-900'
                                }`}
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className={`px-6 py-3 font-bold ${loading
                                    ? 'opacity-50 cursor-not-allowed'
                                    : ''
                                } ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-900'}`}
                        >
                            {loading ? 'Saving...' : 'Complete'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OnboardingWizard;
