import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={`w-full shadow-sm overflow-x-hidden transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-gray-900 text-white border-b border-gray-700' 
        : 'bg-white text-gray-900 border-b border-gray-200'
    }`}>
      <div className="flex items-center justify-between px-4 py-3 md:py-4 w-full min-w-0">
        <div className="flex-shrink-0 flex items-center min-w-0">
          <div className="w-20 sm:w-28 md:w-32 lg:w-40 xl:w-48">
            <Logo />
          </div>
        </div>

        {/* except small devices */}
        <div className="hidden md:flex flex-1 items-center justify-center ml-8 min-w-0">
          <Navbar />
        </div>
        <div className="flex items-center ml-4 min-w-0 gap-4">
          {/* theme  Button */}
          <button
            onClick={toggleTheme}
            className={`p-2  transition-all duration-200 ${
              isDarkMode
                ? 'bg-gray-700 text-teal-400 hover:bg-gray-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FaSun className="w-4 h-4" />
            ) : (
              <FaMoon className="w-4 h-4" />
            )}
          </button>
          <Profile />
        </div>
      </div>
      {/* small devices nav */}
      <div className="block md:hidden px-4 pb-2">
        <Navbar navClass="flex items-center justify-center gap-1 text-xs overflow-x-auto" />
      </div>
    </header>
  );
}

export default Header;
