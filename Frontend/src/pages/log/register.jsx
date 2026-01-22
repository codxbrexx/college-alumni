import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useAuth } from "../../hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa";

// Constants & Data
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

// UI Components
const InputField = ({ label, name, type = "text", value, onChange, placeholder, required = false }) => (
  <div className="group">
    <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 group-focus-within:text-red-700 transition-colors">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-red-700 focus:bg-white focus:outline-none transition-all duration-300 placeholder-gray-400 font-medium"
        required={required}
      />
    </div>
  </div>
);

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: 'transparent',
    borderBottom: state.isFocused ? '2px solid #b91c1c' : '2px solid #e5e7eb', // red-700 : gray-200
    borderRadius: 0,
    backgroundColor: state.isFocused ? 'white' : '#f9fafb', // gray-50
    boxShadow: 'none',
    minHeight: '3.1rem',
    paddingLeft: '0.5rem',
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'transparent',
      borderBottom: '2px solid #b91c1c'
    }
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#374151',
    fontWeight: 500
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#9ca3af',
    fontSize: '1rem'
  })
};

export default function Register() {
  const { register, error: authError } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "", username: "", email: "", password: "", confirmPassword: "",
    rollNo: "", yearOfPassout: null, state: null, city: null,
    profession: "", linkedInProfileLink: "", companyExperience: "", aboutYou: "", skills: ""
  });

  const filteredCities = formData.state ? citiesByState[formData.state.value] || [] : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === "state") setFormData(prev => ({ ...prev, city: null }));
    setError("");
  };

  // Validation Logic
  const validateStep = () => {
    if (step === 1 && (!formData.fullName || !formData.username)) return "Please fill all required fields";
    if (step === 2) {
      if (!formData.email || !formData.rollNo || !formData.password || !formData.confirmPassword) return "Values missing";
      if (formData.password !== formData.confirmPassword) return "Passwords do not match";
      if (formData.password.length < 6) return "Password too short";
    }
    return null;
  };

  const handleNextStep = () => {
    const err = validateStep();
    if (err) { setError(err); return; }
    if (step < totalSteps) setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setError("");
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (step < totalSteps) {
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

  return (
    <div className="min-h-screen bg-white py-24 px-4 font-sans no-scrollbar">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-xl border border-gray-100 mx-auto min-h-[700px]">

        {/* Left Side - Info Panel */}
        <div className="bg-gray-900 p-12 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-1">
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-800 opacity-20 rotate-45"></div>
          <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-red-900 opacity-20"></div>

          <div>
            <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-4 block">
              Step {step} of {totalSteps}
            </span>
            <h2 className="text-4xl font-serif font-bold mb-6">Join the Community</h2>
            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
              Create your alumni profile to unlock the full potential of your network.
            </p>

            <div className="space-y-6">
              {[
                { id: 1, label: "Basic Identity" },
                { id: 2, label: "Credentials" },
                { id: 3, label: "Professional Info" },
                { id: 4, label: "About You" }
              ].map((item) => (
                <div key={item.id} className="flex items-center gap-4 opacity-100">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step >= item.id ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-400'
                    }`}>
                    {item.id}
                  </div>
                  <span className={`text-sm font-medium tracking-wide transition-all duration-300 ${step >= item.id ? 'text-white' : 'text-gray-500'
                    }`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            * Aligns with University alumni verification policy.
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-12 w-full flex flex-col relative order-2 md:order-2">

          <div className="mb-6">
            <h3 className="text-2xl font-bold font-serif text-gray-900">Create Account</h3>
            <p className="text-gray-500 text-sm">Already a member? <Link to="/login" className="text-red-700 font-bold hover:underline">Sign In</Link></p>
          </div>

          {/* Error Message */}
          {(error || authError) && (
            <div className="mb-6 px-4 py-3 bg-red-50 text-red-700 text-sm border-l-4 border-red-600 font-medium">
              {error || authError}
            </div>
          )}

          <form className="flex-1 flex flex-col" onSubmit={handleSubmit}>
            <AnimatePresence mode='wait'>
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex-1 space-y-6"
              >
                {step === 1 && (
                  <>
                    <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="ENTER FULL NAME" required />
                    <InputField label="Username" name="username" value={formData.username} onChange={handleChange} placeholder="CHOOSE USERNAME" required />
                  </>
                )}

                {step === 2 && (
                  <>
                    <InputField label="Email Address" name="email" value={formData.email} onChange={handleChange} placeholder="ENTER EMAIL" required type="email" />
                    <InputField label="Roll Number" name="rollNo" value={formData.rollNo} onChange={handleChange} placeholder="COLLEGE ROLL NO" required />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputField label="Password" name="password" value={formData.password} onChange={handleChange} type="password" placeholder="********" required />
                      <InputField label="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type="password" placeholder="********" required />
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="group">
                      <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 group-focus-within:text-red-700 transition-colors">Year of Passing</label>
                      <Select options={years} value={formData.yearOfPassout} onChange={(v) => handleSelectChange("yearOfPassout", v)} placeholder="SELECT YEAR" styles={customSelectStyles} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 group-focus-within:text-red-700 transition-colors">State</label>
                        <Select options={states} value={formData.state} onChange={(v) => handleSelectChange("state", v)} placeholder="SELECT STATE" styles={customSelectStyles} />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 group-focus-within:text-red-700 transition-colors">City</label>
                        <Select options={filteredCities} value={formData.city} onChange={(v) => handleSelectChange("city", v)} placeholder="SELECT CITY" isDisabled={!formData.state} styles={customSelectStyles} />
                      </div>
                    </div>
                    <InputField label="Current Profession" name="profession" value={formData.profession} onChange={handleChange} placeholder="e.g. Software Engineer" />
                  </>
                )}

                {step === 4 && (
                  <>
                    <InputField label="LinkedIn Profile" name="linkedInProfileLink" value={formData.linkedInProfileLink} onChange={handleChange} placeholder="HTTPS://LINKEDIN.COM/IN/..." type="url" />
                    <InputField label="Skills (Comma Separate)" name="skills" value={formData.skills} onChange={handleChange} placeholder="React, Node, Java..." />
                    <div className="group">
                      <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 group-focus-within:text-red-700 transition-colors">About You</label>
                      <textarea name="aboutYou" value={formData.aboutYou} onChange={handleChange} rows="4" className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-red-700 focus:bg-white focus:outline-none resize-none transition-all duration-300 placeholder-gray-400 font-medium" placeholder="Brief bio..." />
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 mt-auto pt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="flex-1 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-xs uppercase tracking-widest transition-all duration-300"
                >
                  Back
                </button>
              )}

              <button
                type="submit"
                className="flex-1 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 flex justify-center items-center gap-2"
              >
                {loading && <FaSpinner className="animate-spin" />}
                {step < totalSteps ? 'Next Step' : (loading ? 'Creating Account...' : 'Complete Registration')}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}