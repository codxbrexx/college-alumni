import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProfileStepIdentity from './components/ProfileStepIdentity';
import ProfileStepProfessional from './components/ProfileStepProfessional';
import ProfileStepSocial from './components/ProfileStepSocial';

export default function Postprofile() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    profession: '',
    companyExperience: '',
    aboutYou: '',
    rollNo: '',
    branch: '',
    yearOfPassout: '',
    skills: '',
    city: '',
    state: '',
    linkedInProfileLink: '',
    gitHubProfileLink: '',
    companyDetails: ''
  });

  // Pre-fill form if user data exists
  useEffect(() => {
    if (user) {
      setForm(prev => ({
        ...prev,
        fullName: user.fullName || '',
        profession: user.profession || '',
        companyExperience: user.companyExperience || '',
        aboutYou: user.aboutYou || '',
        rollNo: user.rollNo || '',
        branch: user.branch || '',
        yearOfPassout: user.yearOfPassout || '',
        skills: Array.isArray(user.skills) ? user.skills.join(', ') : (user.skills || ''),
        city: user.city || '',
        state: user.state || '',
        linkedInProfileLink: user.linkedInProfileLink || '',
        gitHubProfileLink: user.gitHubProfileLink || '',
        companyDetails: user.companyDetails || ''
      }));
    }
  }, [user]);

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
    if (currentStep === 1) {
      if (!form.fullName || !form.rollNo || !form.branch || !form.yearOfPassout || !form.city) {
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
      if (!form.aboutYou) {
        alert("Please provide a bio");
        return false;
      }
    }
    return true;
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formCheck()) return;

    setLoading(true);
    try {
      await updateProfile(form);
      alert('Profile updated successfully!');
      navigate('/profile'); // Redirect to view profile
    } catch (error) {
      console.error(error);
      alert('Failed to update profile: ' + error.message);
    } finally {
      setLoading(false);
    }
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
                {currentStep === 1 && <ProfileStepIdentity form={form} handleFormChange={handleFormChange} />}
                {currentStep === 2 && <ProfileStepProfessional form={form} handleFormChange={handleFormChange} />}
                {currentStep === 3 && <ProfileStepSocial form={form} handleFormChange={handleFormChange} />}
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
                  disabled={loading}
                  className="flex-1 py-4 bg-black hover:bg-gray-900 text-white font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? 'Saving...' : 'Save Profile'}
                </button>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
