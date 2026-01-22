import React, { useState } from "react";
import CountUp from "react-countup";
import { DollarSign, TrendingUp, Download, Award, Briefcase, Users } from "lucide-react";
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

  const statCards = [
    {
      label: 'Average Package',
      value: currentStat.avg,
      icon: DollarSign,
      prefix: '₹',
      suffix: ' LPA',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: isDarkMode ? 'bg-green-900/20' : 'bg-green-50'
    },
    {
      label: 'Highest Package',
      value: currentStat.highest,
      icon: TrendingUp,
      prefix: '₹',
      suffix: ' LPA',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'
    },
    {
      label: 'Placement Rate',
      value: currentStat.percent,
      icon: Award,
      prefix: '',
      suffix: '%',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: isDarkMode ? 'bg-purple-900/20' : 'bg-purple-50'
    }
  ];

  return (
    <section className={`py-16 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center mb-12">
          <span className={`inline-block px-4 py-2  font-semibold mb-4 shadow ${
            isDarkMode ? 'bg-teal-900/80 text-teal-300' : 'bg-teal-100 text-teal-700'
          }`}>Placement Statistics</span>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 tracking-tight gradient-text`}>
            Outstanding Placement Records
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Track our consistent growth and success in campus placements
          </p>
        </div>

        {/* Year Selector */}
        <div className={`w-full flex justify-center mb-8 p-4  ${
          isDarkMode ? 'bg-gray-900/50 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm shadow-lg'
        }`}>
          <div className="flex flex-wrap justify-center gap-2">
            {placementStats.map((stat) => (
              <button
                key={stat.year}
                onClick={() => setSelectedYear(stat.year)}
                className={`px-6 py-3  font-bold transition-all duration-300 transform hover:scale-105 ${
                  selectedYear === stat.year
                    ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg"
                    : isDarkMode 
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {stat.year}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {statCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`relative group  p-8 shadow-xl border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl glass-effect ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900/80 border-teal-900 hover:border-teal-500/50' 
                    : 'bg-white/80 border-teal-100 hover:border-teal-500/50'
                }`}
              >
                {/* Icon Circle */}
                <div className={`inline-flex p-4  mb-6 bg-gradient-to-br ${card.gradient} text-white shadow-lg`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <p className={`text-sm font-semibold mb-2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {card.label}
                </p>
                
                <h3 className={`text-4xl md:text-5xl font-extrabold gradient-text`}>
                  <CountUp
                    end={card.value}
                    duration={2.5}
                    decimals={card.label === 'Average Package' ? 0 : 0}
                    prefix={card.prefix}
                    suffix={card.suffix}
                  />
                </h3>

                {/* Animated Background */}
                <div className={`absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${card.gradient}`} style={{ opacity: 0.05 }} />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
          isDarkMode ? '' : ''
        }`}>
          {/* Top Recruiters */}
          <div className={`p-8  border shadow-lg ${
            isDarkMode 
              ? 'bg-gray-900/50 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3  ${
                isDarkMode ? 'bg-teal-900/50' : 'bg-teal-100'
              }`}>
                <Briefcase className={`h-6 w-6 ${
                  isDarkMode ? 'text-teal-400' : 'text-teal-600'
                }`} />
              </div>
              <h3 className={`text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Top Recruiters</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Microsoft', 'Google', 'Amazon', 'TCS', 'Infosys', 'Wipro'].map((company, idx) => (
                <div
                  key={idx}
                  className={`p-3  font-semibold text-center transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>

          {/* Placement Insights */}
          <div className={`p-8  border shadow-lg ${
            isDarkMode 
              ? 'bg-gray-900/50 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3  ${
                isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100'
              }`}>
                <Users className={`h-6 w-6 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
              <h3 className={`text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Placement Insights</h3>
            </div>
            <div className="space-y-4">
              <div className={`p-4  ${
                isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <p className={`text-sm font-semibold mb-1 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Total Students Placed</p>
                <p className={`text-3xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <CountUp end={450} duration={2.5} />+
                </p>
              </div>
              <div className={`p-4  ${
                isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
              }`}>
                <p className={`text-sm font-semibold mb-1 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Companies Visited</p>
                <p className={`text-3xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <CountUp end={85} duration={2.5} />+
                </p>
              </div>
            </div>
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
      isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="w-fill flex justify-center">
        <Hero />
      </div>
      <PlacementSection />
    </div>
  );
}

export default Placements;
