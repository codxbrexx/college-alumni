import React from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "home", label: "Home" },
  { to: "alumni", label: "Alumni" },
  { to: "job", label: "Job" },
  { to: "news", label: "News" },
  { to: "placement", label: "Placement"},
  { to: "about", label: "About Us" },
  { to: "contact", label: "Contact Us" },
];

function Navbar({ navClass }) {
  return (
    <nav
      className={
        navClass ||
        "flex items-center gap-2 text-sm sm:gap-3 sm:text-base lg:gap-8 lg:text-lg"
      }
    >
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `group relative px-2 py-0.5 whitespace-nowrap transition-colors duration-300  
            ${isActive ? "text-teal-600" : "text-gray-600 hover:text-teal-500"}
            hover:scale-102 transition-transform duration-300   
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:rounded-full
            after:bg-teal-500 after:transition-[width,opacity] after:duration-500 after:ease-in-out


            
            ${isActive ? "after:w-full after:opacity-100" : "after:w-0 after:opacity-0 group-hover:after:w-full group-hover:after:opacity-100"}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
