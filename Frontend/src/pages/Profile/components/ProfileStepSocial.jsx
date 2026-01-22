import React from 'react';

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

export default function ProfileStepSocial({ form, handleFormChange }) {
    return (
        <div className="space-y-6">
            <h3 className="text-xl font-bold font-serif mb-8 text-gray-900 border-b-2 border-red-100 pb-2 inline-block">About & Social</h3>
            <div className="group">
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2 group-focus-within:text-red-700">Bio *</label>
                <textarea
                    name="aboutYou"
                    value={form.aboutYou}
                    onChange={handleFormChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-red-700 focus:bg-white focus:outline-none resize-none transition-all duration-300 placeholder-gray-400"
                    placeholder="Share a brief bio..."
                    required
                ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="LinkedIn URL" name="linkedInProfileLink" value={form.linkedInProfileLink} onChange={handleFormChange} placeholder="https://linkedin.com/in/..." type="url" />
                <InputField label="GitHub URL" name="gitHubProfileLink" value={form.gitHubProfileLink} onChange={handleFormChange} placeholder="https://github.com/..." type="url" />
            </div>
        </div>
    );
}
