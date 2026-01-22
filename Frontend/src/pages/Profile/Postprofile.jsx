import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Defined outside to prevent re-render focus loss
const InputField = ({ label, name, value, onChange, placeholder, required = false, type = "text" }) => (
  <div className="group">
    <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 group-focus-within:text-red-700 transition-colors">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
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
);

const SelectField = ({ label, name, value, onChange, options, required = false }) => (
  <div className="group">
    <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 group-focus-within:text-red-700 transition-colors">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-red-700 focus:bg-white focus:outline-none transition-all duration-300 text-gray-700 font-medium"
      required={required}
    >
      <option value="">Select {label}</option>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

export default function Postprofile() {

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [form, setForm] = useState({
    name: '',
    profession: '',
    experience: '',
    about: '',
    rollNo: '',
    branch: '',
    passingYear: '',
    skills: '',
    city: '',
    linkedin: '',
    twitter: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    profileImage: '',
  });

  const handleFormChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (formCheck()) {
      if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
    }
  };

  const formCheck = () => {
    // Basic validation for required fields
    if (currentStep === 1) {
      if (!form.name || !form.rollNo || !form.branch || !form.passingYear || !form.city) {
        alert("Please fill all required fields");
        return false;
      }
    }
    if (currentStep === 2) {
      if (!form.profession || !form.skills) {
        alert("Please fill all required fields");
        return false;
      }
    }
    if (currentStep === 3) {
      if (!form.email || !form.about) {
        alert("Please fill all required fields");
        return false;
      }
    }
    return true;
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!formCheck()) return;

    alert('Profile submitted! (This is a placeholder, no backend yet)');
    setForm({
      name: '', profession: '', experience: '', about: '', rollNo: '',
      branch: '', passingYear: '', skills: '', city: '', linkedin: '',
      twitter: '', email: '', phone: '', company: '', designation: '', profileImage: ''
    });
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-white py-24 px-4 font-sans no-scrollbar">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-xl border border-gray-100 mx-auto min-h-[600px]">

        {/* Left Side - Info Panel */}
        <div className="bg-gray-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-800 opacity-20 rotate-45"></div>
          <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-red-900 opacity-20"></div>

          <div>
            <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-4 block">
              Step {currentStep} of {totalSteps}
            </span>
            <h2 className="text-4xl font-serif font-bold mb-6">
              {currentStep === 1 && "Personal Details"}
              {currentStep === 2 && "Professional Info"}
              {currentStep === 3 && "Connect & Bio"}
            </h2>
            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
              {currentStep === 1 && "Start by verifying your alumni identity. This helps us maintain a trusted network."}
              {currentStep === 2 && "Share your career journey. Help peers finding opportunities in your field."}
              {currentStep === 3 && "Add your social handles and a short bio to let others know who you are."}
            </p>

            {/* Progress Steps */}
            <div className="space-y-6">
              {[
                { step: 1, label: 'Identity Verification' },
                { step: 2, label: 'Work Experience' },
                { step: 3, label: 'Social Presence' }
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4 opacity-100">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${currentStep >= item.step ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-400'
                    }`}>
                    {item.step}
                  </div>
                  <span className={`text-sm font-medium tracking-wide transition-all duration-300 ${currentStep >= item.step ? 'text-white' : 'text-gray-500'
                    }`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-12 w-full flex flex-col relative">
          <form className="flex-1 flex flex-col" onSubmit={handleFormSubmit}>

            <AnimatePresence mode='wait'>
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex-1"
              >
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold font-serif mb-8 text-gray-900 border-b-2 border-red-100 pb-2 inline-block">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Full Name" name="name" value={form.name} onChange={handleFormChange} placeholder="Enter Full Name" required />
                      <InputField label="Roll Number" name="rollNo" value={form.rollNo} onChange={handleFormChange} placeholder="LCS20240XX" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <SelectField
                        label="Branch"
                        name="branch"
                        value={form.branch}
                        onChange={handleFormChange}
                        required
                        options={[
                          { value: 'CSE', label: 'Computer Science' },
                          { value: 'CSB', label: 'CS Business' },
                          { value: 'CSAI', label: 'CS & AI' },
                          { value: 'IT', label: 'Information Tech' }
                        ]}
                      />
                      <SelectField
                        label="Batch"
                        name="passingYear"
                        value={form.passingYear}
                        onChange={handleFormChange}
                        required
                        options={[...Array(10)].map((_, i) => ({ value: 2025 - i, label: 2025 - i }))}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="City" name="city" value={form.city} onChange={handleFormChange} placeholder="CURRENT CITY" required />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold font-serif mb-8 text-gray-900 border-b-2 border-red-100 pb-2 inline-block">Career Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Profession" name="profession" value={form.profession} onChange={handleFormChange} placeholder="Software Engineer" required />
                      <InputField label="Experience" name="experience" value={form.experience} onChange={handleFormChange} placeholder="e.g. 2 Years" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Company" name="company" value={form.company} onChange={handleFormChange} placeholder="Company Name" />
                      <InputField label="Designation" name="designation" value={form.designation} onChange={handleFormChange} placeholder="e.g. Senior Engineer" />
                    </div>
                    <InputField label="Skills" name="skills" value={form.skills} onChange={handleFormChange} placeholder="React, Node, AWS" required />
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold font-serif mb-8 text-gray-900 border-b-2 border-red-100 pb-2 inline-block">About & Social</h3>
                    <div className="group">
                      <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 group-focus-within:text-red-700">Bio *</label>
                      <textarea
                        name="about"
                        value={form.about}
                        onChange={handleFormChange}
                        rows="3"
                        className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-red-700 focus:bg-white focus:outline-none resize-none transition-all duration-300 placeholder-gray-400"
                        placeholder="Share a brief bio..."
                        required
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="LinkedIn URL" name="linkedin" value={form.linkedin} onChange={handleFormChange} placeholder="https://linkedin.com/in/..." type="url" />
                      <InputField label="Twitter URL" name="twitter" value={form.twitter} onChange={handleFormChange} placeholder="https://twitter.com/..." type="url" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Email" name="email" value={form.email} onChange={handleFormChange} placeholder="Email Address" type="email" required />
                      <InputField label="Phone" name="phone" value={form.phone} onChange={handleFormChange} placeholder="Phone Number" type="tel" />
                    </div>
                    <InputField label="Profile Image URL" name="profileImage" value={form.profileImage} onChange={handleFormChange} placeholder="https://..." type="url" />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 mt-auto pt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-xs uppercase tracking-widest transition-all duration-300"
                >
                  Back
                </button>
              )}

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex-1 py-4 bg-black hover:bg-gray-900 text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Create Profile
                </button>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
