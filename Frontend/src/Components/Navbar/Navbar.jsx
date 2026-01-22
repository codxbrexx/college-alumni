import React from "react";
import { NavLink } from "react-router-dom";


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
            `relative px-2 py-1 font-serif uppercase tracking-widest text-xs font-bold transition-all duration-300
            ${isActive
              ? "text-red-700 underline underline-offset-8 decoration-2"
              : "text-gray-500 hover:text-red-700 hover:underline underline-offset-8 decoration-2"
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
