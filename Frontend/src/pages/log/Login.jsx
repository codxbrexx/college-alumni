import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../hooks/useAuth';
import { FaEye, FaEyeSlash, FaUser, FaLock, FaSpinner } from 'react-icons/fa';

export default function Login() {
  const { isDarkMode } = useTheme();
  const { login, error: authError } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
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

    if (!formData.identifier || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await login(formData.identifier, formData.password);
      navigate('/home');
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex justify-center items-center font-['Inter'] transition-colors duration-200 px-4 py-12 ${
      isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      {/* Login Form Card */}
      <div className={`w-full max-w-md  p-8 md:p-10 shadow-lg transition-all duration-200 ${
        isDarkMode
          ? 'bg-gray-900 border border-gray-700'
          : 'bg-white border border-gray-200'
      }`}>
        <div className="w-full">
          {/* Logo/Header */}
          <div className="mb-8">
            <h1 className={`text-2xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Welcome Back</h1>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Sign in to your account to continue</p>
          </div>

          {/* Tab Toggle */}
          <div className={`flex gap-2 p-1 mb-8  ${
            isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'
          }`}>
            <div className={`flex-1 py-2.5  text-sm font-medium text-center transition-all ${
              isDarkMode
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white text-gray-900 shadow-sm'
            }`}>
              Login
            </div>
            <Link to="/register" className={`flex-1 py-2.5  text-sm font-medium text-center transition-all ${
              isDarkMode ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}>
              Register
            </Link>
          </div>

          {/* Error Message */}
          {(error || authError) && (
            <div className={`mb-6 p-3.5  text-sm ${
              isDarkMode 
                ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                : 'bg-red-50 text-red-700 border border-red-100'
            }`}>
              {error || authError}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username/Email Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email or Username
              </label>
              <div className="relative">
                <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  <FaUser className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                  placeholder="Enter your email or username"
                  className={`w-full h-11 pl-10 pr-4  border focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Password
              </label>
              <div className="relative">
                <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  <FaLock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full h-11 pl-10 pr-11  border focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3.5 top-1/2 -translate-y-1/2 p-1  transition-colors ${
                    isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {showPassword ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4  border-2 text-teal-600 focus:ring-teal-500"
                />
                <span className={`ml-2 text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Remember me
                </span>
              </label>
              <Link 
                to="/forgot" 
                className={`text-sm font-medium transition-colors ${
                  isDarkMode 
                    ? 'text-teal-400 hover:text-teal-300' 
                    : 'text-teal-600 hover:text-teal-700'
                }`}
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full h-11  font-medium text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                isDarkMode
                  ? 'bg-teal-600 hover:bg-teal-700'
                  : 'bg-teal-600 hover:bg-teal-700'
              }`}
            >
              {loading ? (
                <>
                  <FaSpinner className="w-4 h-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className={`flex-1 h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
            <span className={`px-3 text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              OR
            </span>
            <div className={`flex-1 h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
          </div>

          {/* Register Link */}
          <p className={`text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Don't have an account?{' '}
            <Link
              to="/register"
              className={`font-medium ${
                isDarkMode
                  ? 'text-teal-400 hover:text-teal-300'
                  : 'text-teal-600 hover:text-teal-700'
              }`}
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
