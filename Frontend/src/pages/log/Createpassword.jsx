import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

function Createpassword() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.newPassword || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      // API call to reset password
      // await resetPassword(formData.newPassword);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (err) {
      setError(err.message || 'Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex justify-center items-center font-['Inter'] transition-colors duration-200 px-4 py-12 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className={`w-full max-w-md rounded-2xl p-8 md:p-10 shadow-lg transition-all duration-200 ${
        isDarkMode
          ? 'bg-gray-800 border border-gray-700'
          : 'bg-white border border-gray-200'
      }`}>
        <div className="w-full">
          {/* Header */}
          <div className="mb-8">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
              isDarkMode ? 'bg-teal-600' : 'bg-teal-500'
            }`}>
              <FaLock className="w-6 h-6 text-white" />
            </div>
            <h1 className={`text-2xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Create New Password</h1>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Set a strong password to protect your account</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className={`mb-6 p-3.5 rounded-lg text-sm ${
              isDarkMode 
                ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                : 'bg-red-50 text-red-700 border border-red-100'
            }`}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* New Password */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                New Password
              </label>
              <div className="relative">
                <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  <FaLock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  className={`w-full h-11 pl-10 pr-11 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded transition-colors ${
                    isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {showPassword ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Confirm Password
              </label>
              <div className="relative">
                <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  <FaLock className="w-4 h-4" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter new password"
                  className={`w-full h-11 pl-10 pr-11 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={`absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded transition-colors ${
                    isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {showConfirmPassword ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className={`p-3 rounded-lg text-xs ${
              isDarkMode ? 'bg-gray-700/50 text-gray-400' : 'bg-gray-50 text-gray-600'
            }`}>
              <p className="font-medium mb-1">Password must contain:</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>At least 6 characters</li>
                <li>Mix of letters, numbers and symbols</li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full h-11 rounded-lg font-medium text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                isDarkMode
                  ? 'bg-teal-600 hover:bg-teal-700'
                  : 'bg-teal-600 hover:bg-teal-700'
              }`}
            >
              {loading ? (
                <>
                  <FaSpinner className="w-4 h-4 animate-spin" />
                  Confirming...
                </>
              ) : (
                'Confirm & Continue'
              )}
            </button>
          </form>

          {/* Back to Login */}
          <div className="flex items-center my-6">
            <div className={`flex-1 h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
            <span className={`px-3 text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              OR
            </span>
            <div className={`flex-1 h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
          </div>

          <p className={`text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Back to{' '}
            <Link
              to="/login"
              className={`font-medium ${
                isDarkMode
                  ? 'text-teal-400 hover:text-teal-300'
                  : 'text-teal-600 hover:text-teal-700'
              }`}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Createpassword;