import React from "react";
import Logo, { LogoHeader } from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function Header() {
  const { isDarkMode } = useTheme();

  return (
    <header className={`w-full shadow-sm overflow-x-hidden transition-colors duration-200 ${isDarkMode
      ? 'bg-gray-900 text-white border-b border-gray-700'
      : 'bg-white text-gray-900 border-b border-gray-200'
      }`}>
      <div className="flex items-center justify-between px-4 py-3 md:py-4 w-full min-w-0">
        <div className="flex-shrink-0 flex items-center min-w-0">
          <div className="w-20 sm:w-28 md:w-32 lg:w-40 xl:w-48 ml-2">
            <LogoHeader />
          </div>
        </div>

        {/* except small devices */}
        <div className="hidden md:flex flex-1 items-center justify-center ml-8 min-w-0">
          <Navbar />
        </div>
        <div className="flex items-center ml-4 mr-4 min-w-0 gap-4">
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
