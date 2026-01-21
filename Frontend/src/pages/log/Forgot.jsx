import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbShieldCheckFilled } from "react-icons/tb";
import { FaEnvelope, FaSpinner } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../hooks/useAuth';

export default function Forgot() {
  const { isDarkMode } = useTheme();
  const { forgotPassword, error: authError } = useAuth();
  
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOTP = async () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      await forgotPassword(email);
      setOtpSent(true);
    } catch (err) {
      setError(err.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = () => {
    if (!otp) {
      setError('Please enter OTP');
      return;
    }
    // Verification logic here
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
              <FaEnvelope className="w-6 h-6 text-white" />
            </div>
            <h1 className={`text-2xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Forgot Password</h1>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Enter your email to receive a password reset link</p>
          </div>

          {/* Tab Toggle */}
          <div className={`flex gap-2 p-1 mb-8 rounded-lg ${
            isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'
          }`}>
            <div className={`flex-1 py-2.5 rounded-md text-sm font-medium text-center transition-all ${
              isDarkMode
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white text-gray-900 shadow-sm'
            }`}>
              Reset Password
            </div>
            <Link to="/login" className={`flex-1 py-2.5 rounded-md text-sm font-medium text-center transition-all ${
              isDarkMode ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}>
              Login
            </Link>
          </div>

          {/* Error Message */}
          {(error || authError) && (
            <div className={`mb-6 p-3.5 rounded-lg text-sm ${
              isDarkMode 
                ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                : 'bg-red-50 text-red-700 border border-red-100'
            }`}>
              {error || authError}
            </div>
          )}

          <form className="space-y-5">
            {/* Email Input */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email Address
              </label>
              <div className="relative">
                <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full h-11 pl-10 pr-24 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
                <button
                  type="button"
                  onClick={handleSendOTP}
                  disabled={loading || otpSent}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 h-8 px-3 text-xs font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    isDarkMode 
                      ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                      : 'bg-teal-600 hover:bg-teal-700 text-white'
                  }`}
                >
                  {loading ? 'Sending...' : otpSent ? 'Sent' : 'Send OTP'}
                </button>
              </div>
            </div>

            {/* OTP Input */}
            {otpSent && (
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  OTP
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    maxLength="6"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Enter 6-digit OTP"
                    className={`w-full h-11 pl-4 pr-24 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                      isDarkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={handleVerifyOTP}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 h-8 px-3 text-xs font-medium rounded-md flex items-center gap-1 transition-colors ${
                      isDarkMode 
                        ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                        : 'bg-teal-600 hover:bg-teal-700 text-white'
                    }`}
                  >
                    <TbShieldCheckFilled className="w-3.5 h-3.5" />
                    Verify
                  </button>
                </div>
              </div>
            )}

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
                  Processing...
                </>
              ) : (
                'Reset Password'
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
            Remember your password?{' '}
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
