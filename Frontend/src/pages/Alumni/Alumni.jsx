import React from "react";
import Heroalumni from "../../Components/Hero/Heroalumni";
import Alumnicard from "./Alumnicard";
import { useTheme } from '../../context/ThemeContext';

function Alumni() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="w-full flex justify-center">
        <Heroalumni/>
      </div>
      <div className="">
        <Alumnicard/>
      </div>
    </div>
  );
}

export default Alumni;
