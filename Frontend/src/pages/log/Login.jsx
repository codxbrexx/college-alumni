import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FaSpinner } from 'react-icons/fa';

// Components defined outside to avoid focus loss
const InputField = ({ label, name, type = "text", value, onChange, placeholder, icon }) => (
  <div className="group">
    <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 group-focus-within:text-red-700 transition-colors">
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-red-700 focus:bg-white focus:outline-none transition-all duration-300 placeholder-gray-400 font-medium"
        required
      />
    </div>
  </div>
);

export default function Login() {
  const { login, error: authError } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ identifier: '', password: '' });
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
    <div className="min-h-screen bg-white py-24 px-4 font-sans no-scrollbar">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-xl border border-gray-100 mx-auto min-h-[600px]">

        {/* Left Side - Info Panel */}
        <div className="bg-gray-900 p-12 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-1">
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-800 opacity-20 rotate-45"></div>
          <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-red-900 opacity-20"></div>

          <div>
            <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-2 block">
              Alumni Portal
            </span>
            <h2 className="text-4xl font-serif font-bold mb-6">Welcome Back</h2>
            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
              Sign in to verify your alumni status, connect with batchmates, and access exclusive career opportunities.
            </p>

            <div className="space-y-4 border-l-2 border-gray-800 pl-6">
              <div className="relative">
                <span className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-red-600"></span>
                <p className="text-gray-300 font-medium">Verified Network</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-gray-700"></span>
                <p className="text-gray-400">Career Support</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-gray-700"></span>
                <p className="text-gray-400">Event Access</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            * Issues logging in? Contact alumni support.
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-12 w-full flex flex-col justify-center order-2 md:order-2">

          <div className="mb-10">
            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Sign In</h3>
            <p className="text-gray-500 text-sm">Use your registered credentials.</p>
          </div>

          {/* Error Message */}
          {(error || authError) && (
            <div className="mb-6 px-4 py-3 bg-red-50 text-red-700 text-sm border-l-4 border-red-600 font-medium">
              {error || authError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              label="Email or Username"
              name="identifier"
              placeholder="ENTER EMAIL OR USERNAME"
              value={formData.identifier}
              onChange={handleChange}
            />

            <div className="space-y-2">
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="ENTER PASSWORD"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="flex justify-end">
                <Link to="/forgot" className="text-xs font-bold text-red-600 hover:text-red-800 uppercase tracking-wide">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {loading && <FaSpinner className="animate-spin" />}
                {loading ? 'Authenticating...' : 'Sign In To Account'}
              </button>
            </div>
          </form>

          <div className="mt-10 text-center pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm">
              New to the network? <Link to="/register" className="text-red-700 font-bold hover:underline">Register Now</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
