import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
// import { useTheme } from '../../context/ThemeContext';

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

export default function PostJob() {
  // const { isDarkMode } = useTheme(); // Unused

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [form, setForm] = useState({
    company: '',
    title: '',
    description: '',
    location: '',
    type: 'Full Time',
    salary: '',
    experience: '',
    skills: '',
    alumnus: '',
    batch: '',
    contact: '',
    isInternship: false,
  });

  const handleFormChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (formCheck()) {
      if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const formCheck = () => {
    if (currentStep === 1) {
      if (!form.company || !form.title || !form.description) {
        alert("Please fill all required fields");
        return false;
      }
    }
    if (currentStep === 2) {
      if (!form.location || !form.salary || !form.experience || !form.skills) {
        alert("Please fill all required fields");
        return false;
      }
    }
    if (currentStep === 3) {
      if (!form.alumnus || !form.batch || !form.contact) {
        alert("Please fill all required fields");
        return false;
      }
    }
    return true;
  }

  //   handled through backend
  const handleFormSubmit = e => {
    e.preventDefault();
    if (!formCheck()) return;

    alert('it will controled by backend (not done yet)');
    setForm({
      company: '', title: '', description: '', location: '', type: 'Full Time',
      salary: '', experience: '', skills: '', alumnus: '', batch: '', contact: '', isInternship: false
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
              {currentStep === 1 && "Post Opportunity"}
              {currentStep === 2 && "The Details"}
              {currentStep === 3 && "Final Touch"}
            </h2>
            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
              {currentStep === 1 && "Start by defining the core role. What are you looking for?"}
              {currentStep === 2 && "Add specifics like salary, location, and required skills."}
              {currentStep === 3 && "Tell applicants who you are and how they can reach you."}
            </p>

            <div className="space-y-6">
              {[
                { step: 1, label: 'Role Basics' },
                { step: 2, label: 'Specifications' },
                { step: 3, label: 'Contact Info' }
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

          <div className="mt-12 text-sm text-gray-500">
            * Verified Alumni can post unlimited free listings.
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

                {/* Section 1 */}
                {currentStep === 1 && (
                  <div>
                    <h3 className="text-xl font-bold font-serif mb-8 text-gray-900 border-b-2 border-red-100 pb-2 inline-block">Role Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Company Name" name="company" value={form.company} onChange={handleFormChange} placeholder="ENTER COMPANY" required />
                      <InputField label="Job Title" name="title" value={form.title} onChange={handleFormChange} placeholder="ENTER TITLE" required />
                    </div>

                    <div className="mt-6 group">
                      <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 group-focus-within:text-red-700 transition-colors">
                        Job Description *
                      </label>
                      <textarea
                        name="description"
                        value={form.description}
                        onChange={handleFormChange}
                        rows="4"
                        className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-red-700 focus:bg-white focus:outline-none resize-none transition-all duration-300 placeholder-gray-400"
                        placeholder="Describe role, responsibilities, and perks..."
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Section 2 */}
                {currentStep === 2 && (
                  <div>
                    <h3 className="text-xl font-bold font-serif mb-8 text-gray-900 border-b-2 border-red-100 pb-2 inline-block">Specifics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Location" name="location" value={form.location} onChange={handleFormChange} placeholder="e.g. REMOTE" required />
                      <div className="group">
                        <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 group-focus-within:text-red-700 transition-colors">Employment Type *</label>
                        <select
                          name="type"
                          value={form.type}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-red-700 focus:bg-white focus:outline-none transition-all duration-300 text-gray-700 font-medium"
                        >
                          <option value="Full Time">Full Time</option>
                          <option value="Part Time">Part Time</option>
                          <option value="Contract">Contract</option>
                          <option value="Freelance">Freelance</option>
                          <option value="Internship">Internship</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <InputField label="Salary Range" name="salary" value={form.salary} onChange={handleFormChange} placeholder="e.g. 15 LPA" required />
                      <InputField label="Experience Reqd." name="experience" value={form.experience} onChange={handleFormChange} placeholder="e.g. 1-3 YEARS" required />
                    </div>

                    <div className="mt-6">
                      <InputField label="Skills" name="skills" value={form.skills} onChange={handleFormChange} placeholder="REACT, NODE, DESIGN" required />
                    </div>
                  </div>
                )}

                {/* Section 3 */}
                {currentStep === 3 && (
                  <div>
                    <h3 className="text-xl font-bold font-serif mb-8 text-gray-900 border-b-2 border-red-100 pb-2 inline-block">Your Info</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Your Name" name="alumnus" value={form.alumnus} onChange={handleFormChange} placeholder="FULL NAME" required />
                      <InputField label="Batch" name="batch" value={form.batch} onChange={handleFormChange} placeholder="e.g. 2021" required />
                    </div>

                    <div className="mt-6">
                      <InputField label="Contact Email/Link" name="contact" value={form.contact} onChange={handleFormChange} placeholder="WHERE TO APPLY?" required />
                    </div>

                    <div className="mt-6 flex items-center p-4 bg-gray-50 border border-gray-100">
                      <input
                        type="checkbox"
                        name="isInternship"
                        id="isInternship"
                        checked={form.isInternship}
                        onChange={handleFormChange}
                        className="w-5 h-5 text-red-600 rounded bg-white border-gray-300 focus:ring-red-500 focus:ring-2"
                      />
                      <label htmlFor="isInternship" className="ml-3 block text-sm font-bold text-gray-700 uppercase tracking-wide cursor-pointer">
                        Mark as Internship Opportunity
                      </label>
                    </div>
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
                  Submit Opportunity
                </button>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
