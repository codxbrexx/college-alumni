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

export default function ProfileStepIdentity({ form, handleFormChange }) {
    return (
        <div className="space-y-6">
            <h3 className="text-xl font-bold font-serif mb-8 text-gray-900 border-b-2 border-red-100 pb-2 inline-block">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Full Name" name="fullName" value={form.fullName} onChange={handleFormChange} placeholder="Enter Full Name" required />
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
                    name="yearOfPassout"
                    value={form.yearOfPassout}
                    onChange={handleFormChange}
                    required
                    options={[...Array(10)].map((_, i) => ({ value: 2025 - i, label: 2025 - i }))}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="City" name="city" value={form.city} onChange={handleFormChange} placeholder="Current City" required />
                <InputField label="State" name="state" value={form.state} onChange={handleFormChange} placeholder="Current State" required />
            </div>
        </div>
    );
}
