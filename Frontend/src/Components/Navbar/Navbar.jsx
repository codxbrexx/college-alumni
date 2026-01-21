import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { to: "home", label: "Home" },
  { to: "alumni", label: "Alumni" },
  { to: "job", label: "Jobs" },
  { to: "news", label: "News" },
  { to: "placement", label: "Placements"},
  { to: "about", label: "About" },
  { to: "contact", label: "Contact" },
];

function Navbar({ navClass }) {
  const { isDarkMode } = useTheme();

  return (
    <nav
      className={
        navClass ||
        "flex items-center gap-1 text-sm sm:gap-2 sm:text-sm lg:gap-6 lg:text-base"
      }
    >
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `relative px-3 py-2 whitespace-nowrap font-medium rounded-lg transition-all duration-200
            ${isActive 
              ? isDarkMode 
                ? "text-white bg-teal-600" 
                : "text-white bg-teal-600" 
              : isDarkMode 
                ? "text-gray-300 hover:text-white hover:bg-gray-700" 
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
