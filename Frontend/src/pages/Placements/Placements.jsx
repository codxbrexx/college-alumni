import React from "react";
import Hero from "../../Components/Hero/Herojob";
import { useTheme } from '../../context/ThemeContext';
import PlacementDashboard from "./components/PlacementDashboard";

function Placements() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
      <div className="w-fill flex justify-center">
        <Hero />
      </div>
      <PlacementDashboard />
    </div>
  );
}

export default Placements;
