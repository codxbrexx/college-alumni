import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function Heroplacement() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`w-full border-b-2 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      {/* Top Bar with Title */}
      <div className={`border-b-4 border-red-600 py-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-red-100 font-bold mb-2">NetGrad College</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">
              Placement Records
            </h1>
          </div>
          <p className="text-lg text-red-50 mt-4 max-w-2xl font-light border-l-2 border-red-400 pl-4">
            Celebrating outstanding placement achievements and career success of our graduates across leading companies worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Heroplacement;
