import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
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
    <div className={`min-h-screen flex justify-center items-center font-['Poppins'] transition-colors duration-300 px-4 py-8 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-teal-50 via-white to-blue-50'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl ${
          isDarkMode ? 'bg-teal-500' : 'bg-teal-300'
        }`} />
        <div className={`absolute bottom-20 -right-20 w-96 h-96 rounded-full opacity-20 blur-3xl ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
        }`} />
      </div>

      {/* Login Form Card */}
      <div className={`relative w-full max-w-md rounded-3xl flex flex-col items-center justify-center p-8 md:p-12 border shadow-2xl backdrop-blur-md transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-800/80 border-gray-700 text-white'
          : 'bg-white/80 border-white/50 text-gray-900'
      }`}>
        <div className="w-full">
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-teal-600 to-blue-600' 
                : 'bg-gradient-to-br from-teal-500 to-blue-500'
            }`}>
              <FaUser className="w-8 h-8 text-white" />
            </div>
            <h1 className={`text-3xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Welcome Back</h1>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Sign in to continue to NetGrud Alumni Network</p>
          </div>

          {/* Tab Toggle */}
          <div className={`flex rounded-xl p-1 mb-8 ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
          }`}>
            <Link to="/login" className={`flex-1 py-3 rounded-lg text-sm font-semibold text-center transition-all ${
              isDarkMode
                ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                : 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
            }`}>
              Login
            </Link>
            <Link to="/register" className={`flex-1 py-3 rounded-lg text-sm font-semibold text-center transition-all ${
              isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              Register
            </Link>
          </div>

          {/* Error Message */}
          {(error || authError) && (
            <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${
              isDarkMode 
                ? 'bg-red-900/30 text-red-400 border border-red-800' 
                : 'bg-red-50 text-red-600 border border-red-200'
            }`}>
              {error || authError}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username/Email Field */}
            <div>
              <label className={`block text-sm font-semibold mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email or Username
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 ${
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
                  className={`w-full h-14 pl-12 pr-4 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-500 focus:border-teal-500'
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-teal-500'
                  }`}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className={`block text-sm font-semibold mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Password
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 ${
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
                  className={`w-full h-14 pl-12 pr-14 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-500 focus:border-teal-500'
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-teal-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded transition-colors ${
                    isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
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
                  className={`w-4 h-4 rounded border-2 focus:ring-teal-500 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-teal-500' 
                      : 'bg-white border-gray-300 text-teal-600'
                  }`}
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
              className={`w-full h-14 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500'
                  : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600'
              }`}
            >
              {loading ? (
                <>
                  <FaSpinner className="w-5 h-5 animate-spin" />
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
            <span className={`px-4 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              New to NetGrud?
            </span>
            <div className={`flex-1 h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
          </div>

          {/* Register Link */}
          <Link
            to="/register"
            className={`block w-full py-4 rounded-xl font-semibold text-center border-2 transition-all duration-300 hover:scale-[1.02] ${
              isDarkMode
                ? 'border-gray-600 text-gray-300 hover:border-teal-500 hover:text-teal-400'
                : 'border-gray-300 text-gray-700 hover:border-teal-500 hover:text-teal-600'
            }`}
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}
