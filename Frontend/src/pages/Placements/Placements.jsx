import React, { useState } from "react";
import CountUp from "react-countup";
import { FaGoogle, FaMicrosoft, FaAmazon, FaApple, FaFacebook, FaLinkedin, FaUber, FaAirbnb, FaBuilding, FaChartLine, FaUniversity, FaUserGraduate, FaPaypal, FaCcAmex, FaAtlassian } from "react-icons/fa";
import { SiNetflix, SiTesla, SiSamsung } from "react-icons/si";
import { MdBusiness } from "react-icons/md";
import Hero from "../../Components/Hero/Herojob";
import { useTheme } from '../../context/ThemeContext';

const placementStats = [
  {
    year: 2025,
    avg: 32,
    highest: 92,
    percent: 98,
  },
  {
    year: 2024,
    avg: 31.42,
    highest: 88,
    percent: 98,
  },
  {
    year: 2023,
    avg: 28,
    highest: 63,
    percent: 97.5,
  },
  {
    year: 2022,
    avg: 25,
    highest: 59,
    percent: 97,
  },
  {
    year: 2021,
    avg: 21.5,
    highest: 56,
    percent: 96,
  },
];

const companies = [
  // Tech Giants
  { name: "Google", icon: FaGoogle, color: "text-red-500" },
  { name: "Microsoft", icon: FaMicrosoft, color: "text-blue-500" },
  { name: "Amazon", icon: FaAmazon, color: "text-yellow-600" },
  { name: "Apple", icon: FaApple, color: "text-gray-800 dark:text-gray-200" },
  { name: "Meta", icon: FaFacebook, color: "text-blue-600" },
  { name: "Netflix", icon: SiNetflix, color: "text-red-600" },

  // Major Tech & Product
  { name: "Flipkart", icon: MdBusiness, color: "text-blue-500" },
  { name: "Uber", icon: FaUber, color: "text-black dark:text-white" },
  { name: "Zomato", icon: MdBusiness, color: "text-red-500" },
  { name: "Samsung", icon: SiSamsung, color: "text-blue-800" },
  { name: "Rubrik", icon: FaBuilding, color: "text-gray-600" }, // Generic
  { name: "LinkedIn", icon: FaLinkedin, color: "text-blue-700" },
  { name: "Atlassian", icon: FaAtlassian, color: "text-blue-500" },
  { name: "Paypal", icon: FaPaypal, color: "text-blue-700" },
  { name: "Oracle", icon: FaBuilding, color: "text-red-600" },
  { name: "Cisco", icon: FaBuilding, color: "text-blue-400" },
  { name: "Adobe", icon: FaBuilding, color: "text-red-600" },
  { name: "Salesforce", icon: FaBuilding, color: "text-blue-400" },
  { name: "Nutanix", icon: FaBuilding, color: "text-purple-600" },
  { name: "ServiceNow", icon: FaBuilding, color: "text-green-700" },

  // Finance & Consulting
  { name: "J.P. Morgan", icon: MdBusiness, color: "text-blue-900" },
  { name: "Morgan Stanley", icon: FaBuilding, color: "text-gray-700" },
  { name: "DE Shaw", icon: FaChartLine, color: "text-blue-600" },
  { name: "Amex", icon: FaCcAmex, color: "text-blue-600" },
  { name: "Deloitte", icon: FaBuilding, color: "text-green-600" },
  { name: "Accenture", icon: FaBuilding, color: "text-purple-500" },
  { name: "FIS", icon: MdBusiness, color: "text-gray-600" },

  // Service & Others
  { name: "Paytm", icon: MdBusiness, color: "text-blue-900" },
  { name: "Capgemini", icon: FaBuilding, color: "text-blue-600" },
  { name: "Infosys", icon: FaBuilding, color: "text-blue-500" },
  { name: "MAQ Software", icon: FaBuilding, color: "text-red-500" },
  { name: "Neosoft", icon: MdBusiness, color: "text-gray-600" },
  { name: "Zycus", icon: FaBuilding, color: "text-blue-500" },
  { name: "BigBasket", icon: FaBuilding, color: "text-green-600" },
  { name: "Meesho", icon: FaBuilding, color: "text-pink-600" },
  { name: "Blinkit", icon: FaBuilding, color: "text-yellow-500" },
  { name: "Acko", icon: FaBuilding, color: "text-purple-600" },
];

const PlacementSection = () => {
  const { isDarkMode } = useTheme();
  const [selectedYear, setSelectedYear] = useState(placementStats[0].year);
  const currentStat = placementStats.find((stat) => stat.year === selectedYear);

  const statCards = [
    {
      label: 'Average Package',
      value: currentStat.avg,
      icon: FaChartLine,
      prefix: '₹',
      suffix: ' LPA',
      border: 'border-l-4 border-yellow-400',
    },
    {
      label: 'Highest Package',
      value: currentStat.highest,
      icon: FaBuilding,
      prefix: '₹',
      suffix: ' LPA',
      border: 'border-l-4 border-green-600',
    },
    {
      label: 'Placement Rate',
      value: currentStat.percent,
      icon: FaUserGraduate,
      prefix: '',
      suffix: '%',
      border: 'border-l-4 border-purple-600',
    }
  ];

  return (
    <section className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'
      }`}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b pb-8 border-gray-200 dark:border-gray-800">
          <div>
            <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'bg-red-900/40 text-red-400' : 'bg-red-50 text-red-700'
              }`}>
              Career Success
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Placement Statistics
            </h2>
          </div>

          {/* Year Selector - Minimal */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {placementStats.map((stat) => (
              <button
                key={stat.year}
                onClick={() => setSelectedYear(stat.year)}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 border ${selectedYear === stat.year
                  ? isDarkMode
                    ? "bg-white text-black border-white"
                    : "bg-black text-white border-black"
                  : isDarkMode
                    ? "text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white"
                    : "text-gray-500 border-gray-200 hover:border-gray-400 hover:text-black"
                  }`}
              >
                {stat.year}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {statCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`relative p-8 border transition-all duration-300 hover:shadow-md group ${card.border} ${isDarkMode
                  ? 'bg-gray-900 border-gray-800'
                  : 'bg-white border-gray-200'
                  }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`text-sm font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                    {card.label}
                  </div>
                  <Icon className={`text-2xl ${isDarkMode ? 'text-gray-600' : 'text-gray-300'
                    }`} />
                </div>

                <h3 className={`text-5xl md:text-6xl font-serif font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  <CountUp
                    end={card.value}
                    duration={2.5}
                    decimals={card.label === 'Average Package' || card.label === 'Placement Rate' ? 1 : 0}
                    prefix={card.prefix}
                    suffix={card.suffix}
                  />
                </h3>
              </div>
            );
          })}
        </div>

        {/* Recruiters Section */}
        <div className="mb-16">
          <h3 className={`text-3xl font-serif font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Our Trusted Partners
          </h3>
          <p className={`text-center mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Leading companies from across the globe hire our graduates, a testament to the quality of education and talent at NetGrud.
          </p>

          <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-8 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'
            }`}>
            {companies.map((company, idx) => {
              const Icon = company.icon;
              return (
                <div key={idx} className={`flex flex-col items-center justify-center p-6 transition-all hover:bg-black/5 dark:hover:bg-white/5 group bg-transparent rounded-sm text-center`}>
                  <Icon className={`text-4xl mb-4 transition-transform group-hover:scale-110 ${company.color} opacity-80 group-hover:opacity-100`} />
                  <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-500 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-700'
                    }`}>
                    {company.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Placement Insights */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
          <div className={`p-10 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-black text-white'
            }`}>
            <h4 className={`text-2xl font-bold font-serif mb-4 ${isDarkMode ? 'text-white' : 'text-white'
              }`}>
              Total Students Placed
            </h4>
            <p className={`text-6xl font-bold mb-2 text-red-500`}>
              <CountUp end={1250} duration={2.5} />+
            </p>
            <p className="text-gray-400">Across various industries including Tech, Finance, and Consulting.</p>
          </div>

          <div className={`p-10 border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 text-gray-900 border-gray-200'
            }`}>
            <h4 className={`text-2xl font-bold font-serif mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Companies Visited
            </h4>
            <p className={`text-6xl font-bold mb-2 text-blue-600`}>
              <CountUp end={85} duration={2.5} />+
            </p>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Including Fortune 500 companies and high-growth startups.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

function Placements() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
      <div className="w-fill flex justify-center">
        <Hero />
      </div>
      <PlacementSection />
    </div>
  );
}

export default Placements;
