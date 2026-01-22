import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { to: "home", label: "Home" },
  { to: "alumni", label: "Alumni" },
  { to: "job", label: "Jobs" },
  { to: "news", label: "News" },
  { to: "placement", label: "Placements" },
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
            `relative px-4 py-2 font-serif uppercase tracking-widest text-xs font-bold transition-all duration-300 border
            ${isActive
              ? isDarkMode
                ? "text-black bg-white border-white"
                : "text-white bg-black border-black"
              : isDarkMode
                ? "text-gray-400 border-transparent hover:text-white hover:border-white"
                : "text-gray-500 border-transparent hover:text-black hover:border-black"
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
