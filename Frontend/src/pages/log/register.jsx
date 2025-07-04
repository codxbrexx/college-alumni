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
  "Andhra Pradesh": [
    { value: "Visakhapatnam", label: "Visakhapatnam" },
    { value: "Vijayawada", label: "Vijayawada" },
    { value: "Guntur", label: "Guntur" },
    { value: "Nellore", label: "Nellore" }
  ],
  "Arunachal Pradesh": [
    { value: "Itanagar", label: "Itanagar" },
    { value: "Naharlagun", label: "Naharlagun" }
  ],
  "Assam": [
    { value: "Guwahati", label: "Guwahati" },
    { value: "Silchar", label: "Silchar" },
    { value: "Dibrugarh", label: "Dibrugarh" }
  ],
  "Bihar": [
    { value: "Patna", label: "Patna" },
    { value: "Gaya", label: "Gaya" },
    { value: "Muzaffarpur", label: "Muzaffarpur" },
    { value: "Bhagalpur", label: "Bhagalpur" },
    { value: "Purnia", label: "Purnia" },
    { value: "Darbhanga", label: "Darbhanga" },
    { value: "Arrah", label: "Arrah" },
    { value: "Siwan", label: "Siwan" },
    { value: "Begusarai", label: "Begusarai"},
    { value: "samastipur", label: "samastipur" },
  ],
  "Chhattisgarh": [
    { value: "Raipur", label: "Raipur" },
    { value: "Bhilai", label: "Bhilai" },
    { value: "Bilaspur", label: "Bilaspur" }
  ],
  "Goa": [
    { value: "Panaji", label: "Panaji" },
    { value: "Margao", label: "Margao" },
    { value: "Vasco da Gama", label: "Vasco da Gama" }
  ],
  "Gujarat": [
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Surat", label: "Surat" },
    { value: "Vadodara", label: "Vadodara" },
    { value: "Rajkot", label: "Rajkot" }
  ],
  "Haryana": [
    { value: "Faridabad", label: "Faridabad" },
    { value: "Gurugram", label: "Gurugram" },
    { value: "Panipat", label: "Panipat" }
  ],
  "Himachal Pradesh": [
    { value: "Shimla", label: "Shimla" },
    { value: "Mandi", label: "Mandi" },
    { value: "Solan", label: "Solan" }
  ],
  "Jharkhand": [
    { value: "Ranchi", label: "Ranchi" },
    { value: "Jamshedpur", label: "Jamshedpur" },
    { value: "Dhanbad", label: "Dhanbad" }
  ],
  "Karnataka": [
    { value: "Bengaluru", label: "Bengaluru" },
    { value: "Mysuru", label: "Mysuru" },
    { value: "Hubli", label: "Hubli" }
  ],
  "Kerala": [
    { value: "Thiruvananthapuram", label: "Thiruvananthapuram" },
    { value: "Kochi", label: "Kochi" },
    { value: "Kozhikode", label: "Kozhikode" }
  ],
  "Madhya Pradesh": [
    { value: "Bhopal", label: "Bhopal" },
    { value: "Indore", label: "Indore" },
    { value: "Gwalior", label: "Gwalior" }
  ],
  "Maharashtra": [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Nashik", label: "Nashik" }
  ],
  "Manipur": [
    { value: "Imphal", label: "Imphal" }
  ],
  "Meghalaya": [
    { value: "Shillong", label: "Shillong" }
  ],
  "Mizoram": [
    { value: "Aizawl", label: "Aizawl" }
  ],
  "Nagaland": [
    { value: "Kohima", label: "Kohima" },
    { value: "Dimapur", label: "Dimapur" }
  ],
  "Odisha": [
    { value: "Bhubaneswar", label: "Bhubaneswar" },
    { value: "Cuttack", label: "Cuttack" },
    { value: "Rourkela", label: "Rourkela" }
  ],
  "Punjab": [
    { value: "Ludhiana", label: "Ludhiana" },
    { value: "Amritsar", label: "Amritsar" },
    { value: "Jalandhar", label: "Jalandhar" }
  ],
  "Rajasthan": [
    { value: "Jaipur", label: "Jaipur" },
    { value: "Jodhpur", label: "Jodhpur" },
    { value: "Udaipur", label: "Udaipur" }
  ],
  "Sikkim": [
    { value: "Gangtok", label: "Gangtok" }
  ],
  "Tamil Nadu": [
    { value: "Chennai", label: "Chennai" },
    { value: "Coimbatore", label: "Coimbatore" },
    { value: "Madurai", label: "Madurai" }
  ],
  "Telangana": [
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Warangal", label: "Warangal" },
    { value: "Nizamabad", label: "Nizamabad" }
  ],
  "Tripura": [
    { value: "Agartala", label: "Agartala" }
  ],
  "Uttar Pradesh": [
    { value: "Lucknow", label: "Lucknow" },
    { value: "Kanpur", label: "Kanpur" },
    { value: "Varanasi", label: "Varanasi" },
    { value: "Agra", label: "Agra" },
    { value: "Prayagraj", label: "Prayagraj" }
  ],
  "Uttarakhand": [
    { value: "Dehradun", label: "Dehradun" },
    { value: "Haridwar", label: "Haridwar" },
    { value: "Haldwani", label: "Haldwani" }
  ],
  "West Bengal": [
    { value: "Kolkata", label: "Kolkata" },
    { value: "Asansol", label: "Asansol" },
    { value: "Siliguri", label: "Siliguri" }
  ]
};


export default function Register() {
  const [selectedYear, setSelectedYear] = useState();
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  // Filter cities based on selected state
  const filteredCities = selectedState ? citiesByState[selectedState.value] || [] : [];

  // Reset city when state changes
  const handleStateChange = (newState) => {
    setSelectedState(newState);
    setSelectedCity(null); // Reset city when state changes
  };

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
                onChange={handleStateChange}
                placeholder="Select your state"
                className="react-select-container w-full"
                classNamePrefix="react-select"
                styles={customSelectStyles}
              />
            </div>
            <div>
              <label className="block text-sm font-medium pl-2 text-gray-700 mb-1">City</label>
              <Select
                options={filteredCities}
                value={selectedCity}
                onChange={setSelectedCity}
                placeholder={selectedState ? "Select your city" : "Please select a state first"}
                isDisabled={!selectedState}
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