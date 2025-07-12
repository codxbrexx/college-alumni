import React, { useState } from "react";
import CountUp from "react-countup";
import { DollarSign, TrendingUp, Download } from "lucide-react";
import Hero from "../../Components/Hero/Herojob";
import { useTheme } from '../../context/ThemeContext';

const placementStats = [
  {
    year: 2025,
    avg: 32,        // Estimated, as 2025 data is not fully published yet
    highest: 92,    // Estimated, based on recent trends
    percent: 98,    // Placement percentage is consistently high
  },
  {
    year: 2024,
    avg: 31.42,     // Official average CTC (in LPA)
    highest: 88,    // Highest CTC (in LPA)
    percent: 98,    // Placement percentage
  },
  {
    year: 2023,
    avg: 28,        // Approximate average CTC (in LPA)
    highest: 63,    // Highest CTC (in LPA)
    percent: 97.5,  // Placement percentage
  },
  {
    year: 2022,
    avg: 25,        // Approximate average CTC (in LPA)
    highest: 59,    // Highest CTC (in LPA)
    percent: 97,    // Placement percentage
  },
  {
    year: 2021,
    avg: 21.5,      // Approximate average CTC (in LPA)
    highest: 56,    // Highest CTC (in LPA)
    percent: 96,    // Placement percentage
  },
  {
    year: 2020,
    avg: 18,        // Approximate average CTC (in LPA)
    highest: 43,    // Highest CTC (in LPA)
    percent: 95,    // Placement percentage
  },
  {
    year: 2019,
    avg: 15,        // Approximate average CTC (in LPA)
    highest: 28,    // Highest CTC (in LPA)
    percent: 93,    // Placement percentage
  },
  {
    year: 2018,
    avg: 12,        // Approximate average CTC (in LPA)
    highest: 24,    // Highest CTC (in LPA)
    percent: 91,    // Placement percentage
  },
  {
    year: 2017,
    avg: 10,        // Approximate average CTC (in LPA)
    highest: 20,    // Highest CTC (in LPA)
    percent: 90,    // Placement percentage
  },
];


const PlacementSection = () => {
  const { isDarkMode } = useTheme();
  const [selectedYear, setSelectedYear] = useState(placementStats[0].year);
  const currentStat = placementStats.find((stat) => stat.year === selectedYear);

  return (
    <section className={`py-12 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
    }`}>
      <h2 className={`text-3xl font-bold text-center mb-8 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        College Placement Highlights
      </h2>
      <div className="w-full flex justify-center items-center mb-8">
        <div className="w-full border-gray-400 flex justify-center space-x-2 p-2">
          {placementStats.map((stat) => (
            <button
              key={stat.year}
              onClick={() => setSelectedYear(stat.year)}
              className={`px-4 py-2 rounded-full flex items-center border shadow-md justify-center font-semibold transition-colors ${
                selectedYear === stat.year
                  ? "bg-teal-500 text-white"
                  : isDarkMode 
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600" 
                    : "bg-teal-100 text-teal-700 hover:bg-teal-200 border-gray-300"
              }`}
            >
              {stat.year}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className={`rounded-lg p-6 shadow-lg border flex items-center space-x-4 ${
          isDarkMode 
            ? 'bg-gray-700 border-gray-600 text-white' 
            : 'bg-white border-gray-400'
        }`}>
          <div className={`p-3 rounded-full ${
            isDarkMode ? 'bg-teal-900' : 'bg-teal-100'
          }`}>
            <DollarSign className="h-6 w-6 text-teal-500" />
          </div>
          <div>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Average Placement</p>
            <h3 className={`text-3xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <CountUp
                end={currentStat.avg}
                duration={2.5}
                decimals={0}
                prefix="₹"
                suffix=" LPA"
              />
            </h3>
          </div>
        </div>
        <div className={`rounded-lg p-6 shadow-lg border flex items-center space-x-4 ${
          isDarkMode 
            ? 'bg-gray-700 border-gray-600 text-white' 
            : 'bg-white border-gray-400'
        }`}>
          <div className={`p-3 rounded-full ${
            isDarkMode ? 'bg-teal-900' : 'bg-teal-100'
          }`}>
            <TrendingUp className="h-6 w-6 text-teal-500" />
          </div>
          <div>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Highest Placement</p>
            <h3 className={`text-3xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <CountUp
                end={currentStat.highest}
                duration={2.5}
                decimals={0}
                prefix="₹"
                suffix=" LPA"
              />
            </h3>
          </div>
        </div>
        <div className={`rounded-lg p-6 shadow-lg border flex items-center space-x-4 ${
          isDarkMode 
            ? 'bg-gray-700 border-gray-600 text-white' 
            : 'bg-white border-gray-400'
        }`}>
          <div className={`p-3 rounded-full ${
            isDarkMode ? 'bg-teal-900' : 'bg-teal-100'
          }`}>
            <Download className="h-6 w-6 text-teal-500" />
          </div>
          <div>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Placement Percentage</p>
            <h3 className={`text-3xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <CountUp
                end={currentStat.percent}
                duration={2.5}
                decimals={0}
                suffix="%"
              />
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

function Placements() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="w-fill flex justify-center">
        <Hero />
      </div>
      <PlacementSection />
    </div>
  );
}

export default Placements;
