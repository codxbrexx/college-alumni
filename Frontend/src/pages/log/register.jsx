import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../hooks/useAuth";
import { FaUser, FaEnvelope, FaLock, FaIdCard, FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa";

const years = Array.from({ length: 50 }, (_, i) => {
  const year = new Date().getFullYear() + 4 - i;
  return { value: year, label: year };
});

const states = [
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "West Bengal", label: "West Bengal" }
];

const citiesByState = {
  "Bihar": [
    { value: "Patna", label: "Patna" },
    { value: "Gaya", label: "Gaya" },
    { value: "Muzaffarpur", label: "Muzaffarpur" },
    { value: "Bhagalpur", label: "Bhagalpur" },
    { value: "Purnia", label: "Purnia" },
    { value: "Darbhanga", label: "Darbhanga" },
  ],
  "Karnataka": [
    { value: "Bengaluru", label: "Bengaluru" },
    { value: "Mysuru", label: "Mysuru" },
    { value: "Hubli", label: "Hubli" }
  ],
  "Maharashtra": [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Nagpur", label: "Nagpur" },
  ],
  "Uttar Pradesh": [
    { value: "Lucknow", label: "Lucknow" },
    { value: "Kanpur", label: "Kanpur" },
    { value: "Varanasi", label: "Varanasi" },
  ],
};

export default function Register() {
  const { isDarkMode } = useTheme();
  const { register, error: authError } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rollNo: "",
    yearOfPassout: null,
    state: null,
    city: null,
    profession: "",
    linkedInProfileLink: "",
    companyExperience: "",
    aboutYou: "",
    skills: ""
  });

  const filteredCities = formData.state ? citiesByState[formData.state.value] || [] : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "state") {
      setFormData(prev => ({ ...prev, city: null }));
    }
    setError("");
  };

  const validateStep1 = () => {
    if (!formData.fullName || !formData.username) {
      setError("Please fill in all required fields");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.email || !formData.rollNo || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all required fields");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    return true;
  };

  const handleNextStep = () => {
    setError("");
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    } else if (step === 3 && validateStep3()) {
      setStep(4);
    }
  };

  const handlePrevStep = () => {
    setError("");
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (step < 4) {
      handleNextStep();
      return;
    }

    setLoading(true);
    try {
      await register({
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        rollNo: formData.rollNo,
        yearOfPassout: formData.yearOfPassout?.value,
        state: formData.state?.value,
        city: formData.city?.value,
        profession: formData.profession,
        linkedInProfileLink: formData.linkedInProfileLink,
        companyExperience: formData.companyExperience ? parseInt(formData.companyExperience) : undefined,
        aboutYou: formData.aboutYou,
        skills: formData.skills
      });
      navigate("/home");
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      // borderRadius: '0.5rem', removed
      borderColor: state.isFocused
        ? isDarkMode ? '#ffffff' : '#000000'
        : isDarkMode ? '#4b5563' : '#d1d5db',
      backgroundColor: isDarkMode ? '#030712' : 'white',
      boxShadow: 'none',
      borderWidth: '1px',
      minHeight: '3rem',
      fontFamily: 'serif',
      fontSize: '0.875rem',
      '&:hover': {
        borderColor: isDarkMode ? '#ffffff' : '#000000'
      }
    }),
    menu: (provided) => ({
      ...provided,
      // borderRadius: '0.5rem', removed
      backgroundColor: isDarkMode ? '#030712' : 'white',
      border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
      zIndex: 20,
      fontFamily: 'serif',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? isDarkMode ? '#1f2937' : '#f3f4f6'
        : 'transparent',
      color: isDarkMode ? '#e5e7eb' : '#111827',
      cursor: 'pointer',
      fontFamily: 'serif',
      fontSize: '0.875rem',
      padding: '10px 14px',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: isDarkMode ? '#e5e7eb' : '#111827',
      fontFamily: 'serif',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: isDarkMode ? '#6b7280' : '#9ca3af',
      fontFamily: 'serif',
    }),
    input: (provided) => ({
      ...provided,
      color: isDarkMode ? '#e5e7eb' : '#111827',
      fontFamily: 'serif',
    }),
  };

  const inputClassName = `w-full h-11 pl-10 pr-4  border focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${isDarkMode
    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
    }`;

  return (
    <div className={`min-h-screen flex justify-center items-center font-['Inter'] transition-colors duration-200 px-4 py-12 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
      }`}>
      <div className={`w-full max-w-lg  p-8 md:p-10 shadow-lg transition-all duration-200 ${isDarkMode
        ? 'bg-gray-900 border border-gray-700'
        : 'bg-white border border-gray-200'
        }`}>
        <div className="w-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Create Account
            </h1>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Join the alumni network
            </p>
          </div>

          {/* Tab Toggle */}
          <div className={`flex gap-2 p-1 mb-8  ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'
            }`}>
            <Link to="/login" className={`flex-1 py-2.5  text-sm font-medium text-center transition-all ${isDarkMode ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}>
              Login
            </Link>
            <div className={`flex-1 py-2.5  text-sm font-medium text-center transition-all ${isDarkMode
              ? 'bg-red-600 text-white shadow-sm'
              : 'bg-white text-gray-900 shadow-sm'
              }`}>
              Register
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className={`w-2.5 h-2.5  transition-all ${step >= 1 ? 'bg-red-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
            <div className={`w-8 h-0.5  transition-all ${step >= 2 ? 'bg-red-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
            <div className={`w-2.5 h-2.5  transition-all ${step >= 2 ? 'bg-red-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
            <div className={`w-8 h-0.5  transition-all ${step >= 3 ? 'bg-red-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
            <div className={`w-2.5 h-2.5  transition-all ${step >= 3 ? 'bg-red-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
            <div className={`w-8 h-0.5  transition-all ${step >= 4 ? 'bg-red-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
            <div className={`w-2.5 h-2.5  transition-all ${step >= 4 ? 'bg-red-600' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
          </div>

          {/* Error Message */}
          {(error || authError) && (
            <div className={`mb-6 p-3.5  text-sm ${isDarkMode
              ? 'bg-red-500/10 text-red-400 border border-red-500/20'
              : 'bg-red-50 text-red-700 border border-red-100'
              }`}>
              {error || authError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 && (
              <>
                {/* Step 1: Basic Identity */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Full Name *
                  </label>
                  <div className="relative">
                    <FaUser className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Username *
                  </label>
                  <div className="relative">
                    <FaUser className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Choose a username"
                      className={inputClassName}
                    />
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                {/* Step 2: Credentials */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email *
                  </label>
                  <div className="relative">
                    <FaEnvelope className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Roll Number *
                  </label>
                  <div className="relative">
                    <FaIdCard className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    <input
                      type="text"
                      name="rollNo"
                      value={formData.rollNo}
                      onChange={handleChange}
                      placeholder="Enter your roll number"
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Password *
                  </label>
                  <div className="relative">
                    <FaLock className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      className={`${inputClassName} pr-11`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className={`absolute right-3.5 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}
                    >
                      {showPassword ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <FaLock className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className={inputClassName}
                    />
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                {/* Step 3: Professional Info */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Year of Passing
                  </label>
                  <Select
                    options={years}
                    value={formData.yearOfPassout}
                    onChange={(v) => handleSelectChange("yearOfPassout", v)}
                    placeholder="Select year"
                    styles={customSelectStyles}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      State
                    </label>
                    <Select
                      options={states}
                      value={formData.state}
                      onChange={(v) => handleSelectChange("state", v)}
                      placeholder="Select state"
                      styles={customSelectStyles}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      City
                    </label>
                    <Select
                      options={filteredCities}
                      value={formData.city}
                      onChange={(v) => handleSelectChange("city", v)}
                      placeholder="Select city"
                      isDisabled={!formData.state}
                      styles={customSelectStyles}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Profession
                  </label>
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    placeholder="e.g., Software Engineer"
                    className={`w-full h-11 px-4  border focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                  />
                </div>
              </>
            )}

            {step === 4 && (
              <>
                {/* Step 4: Additional Details */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedInProfileLink"
                    value={formData.linkedInProfileLink}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className={`w-full h-11 px-4  border focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Skills (comma separated)
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="React, Node.js, Python"
                    className={`w-full h-11 px-4  border focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    About You
                  </label>
                  <textarea
                    name="aboutYou"
                    value={formData.aboutYou}
                    onChange={handleChange}
                    placeholder="Tell us about yourself..."
                    rows={3}
                    className={`w-full px-4 py-2.5  border focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none ${isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                  />
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className={`flex gap-3 pt-2`}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className={`flex-1 h-11  font-medium transition-all border ${isDarkMode
                    ? 'border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-400'
                    : 'border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-600'
                    }`}
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`${step === 1 ? 'w-full' : 'flex-1'} h-11  font-medium text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${isDarkMode
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-red-600 hover:bg-red-700'
                  }`}
              >
                {loading ? (
                  <>
                    <FaSpinner className="w-4 h-4 animate-spin" />
                    Creating Account...
                  </>
                ) : step < 4 ? (
                  'Continue'
                ) : (
                  'Create Account'
                )}
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className={`text-center mt-6 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Already have an account?{' '}
            <Link to="/login" className={`font-medium ${isDarkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-700'}`}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}