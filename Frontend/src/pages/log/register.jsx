import React, { useState } from "react";
import Select from "react-select";


  
  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '0.75rem',
      borderColor: state.isFocused ? '#14b8a6' : '#f3f4f6', 
      boxShadow: state.isFocused ? '0 0 0 1px #14b8a6, 0 1px 2px 0 rgb(0 0 0 / 0.05)' : '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      
      minHeight: '3rem', // h-12
      // backgroundColor: 'rgba(255,255,255,0.5)',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '0.75rem',
      zIndex: 20,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#99f6e4' : 'white', // teal-100 on hover
      color: '#0f172a', // slate-900
      cursor: 'pointer',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#0f172a', // slate-900
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#64748b', // slate-400
    }),
  };

const years = Array.from({ length: 50 }, (_, i) => {
  const year = new Date().getFullYear()+4 - i;
  return { value: year, label: year };
});

const states = [
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Delhi", label: "Delhi" },
  // ...add more states
];

const cities = [
  { value: "Mumbai", label: "Mumbai" },
  { value: "Bangalore", label: "Bangalore" },
  { value: "Delhi", label: "Delhi" },
  // ...add more cities
];

export default function Register() {
  const [selectedYear, setSelectedYear] = useState();
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300 font-['Poppins']">
      <div className="w-full max-w-md rounded-2xl flex flex-col items-center justify-center p-12 bg-white/50 border border-white/30 shadow-2xl backdrop-blur-md">
        <div className="w-full max-w-md">
          {/* hdr */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Welcome to Net Gurd</h1>
            {/* Tab button */}
            <div className="inline-flex bg-gray-100 shadow-md rounded-full p-1 mb-8">
              <button className="px-8 py-2 rounded-full text-sm font-medium cursor-pointer text-gray-600">Login</button>
              <button className="px-8 py-2 rounded-full text-sm font-medium bg-teal-400 cursor-pointer text-white">Register</button>
            </div>
            <p className="text-gray-600 text-sm mb-8">
              Create your account to connect with college.
            </p>
          </div>

          {/* from section */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium pl-2 text-gray-700  mb-1">Year of Passing</label>
              <Select
                options={years}
                value={selectedYear}
                onChange={setSelectedYear}
                placeholder="Select year of passing"
                className="react-select-container w-full"
                classNamePrefix="react-select"
                styles={customSelectStyles}
              />
            </div>
            <div>
              <label className="block text-sm font-medium pl-2 text-gray-700 mb-1">State</label>
              <Select
                options={states}
                value={selectedState}
                onChange={setSelectedState}
                placeholder="Select your state"
                className="react-select-container w-full"
                classNamePrefix="react-select"
                styles={customSelectStyles}
              />
            </div>
            <div>
              <label className="block text-sm font-medium pl-2 text-gray-700 mb-1">City</label>
              <Select
                options={cities}
                value={selectedCity}
                onChange={setSelectedCity}
                placeholder="Select your city"
                className="react-select-container w-full"
                classNamePrefix="react-select"
                styles={customSelectStyles}
              />
            </div>
            <div>
              <label className="block text-sm font-medium pl-2 text-gray-700 mb-1">Profession</label>
              <input
                type="text"
                placeholder="Enter your profession"
                styles={customSelectStyles}
                className="w-full h-12 px-4 rounded-xl border border-gray-50 bg-white shadow-sm focus:border-teal-500 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium pl-2 text-gray-700 mb-1">LinkedIn URL</label>
              <input
                type="text"
                placeholder="Enter your LinkedIn URL"
                className="w-full h-12 px-4 rounded-xl border bg-white border-gray-50 shadow-sm hover:border-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium pl-2 text-gray-700 mb-1">Work Experience</label>
              <input
                type="text"
                placeholder="Enter your work experience"
                className="w-full h-12 px-4 rounded-xl bg-white border border-gray-50 shadow-sm hover:border-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 "
              />
            </div>
            <div>
              <label className="block text-sm font-medium pl-2 text-gray-700 mb-1">About You</label>
              <textarea
                placeholder="About You"
                rows={3}
                className="w-full px-4 py-2 rounded-xl border bg-white border-gray-50 shadow-sm hover:border-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500  resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full h-12 bg-teal-500 shadow-md hover:bg-teal-600 text-white font-medium rounded-xl transition-colors mt-2"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}