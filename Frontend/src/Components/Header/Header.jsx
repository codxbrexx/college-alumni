import React, { useState } from "react";
import Logo, { LogoHeader } from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import { useTheme } from "../../context/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

function Header() {
  const { isDarkMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Helper for mobile links to close menu on click
  const MobileNavLink = ({ to, children }) => (
    <NavLink
      to={to}
      onClick={toggleMobileMenu}
      className={({ isActive }) =>
        `block py-3 px-4 text-center font-serif uppercase tracking-widest text-sm font-bold transition-all border-b ${isDarkMode ? "border-gray-800" : "border-gray-100"
        } ${isActive
          ? "text-red-600 bg-red-50/10"
          : isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
        }`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <header className={`w-full shadow-sm sticky top-0 z-40 transition-colors duration-200 ${isDarkMode ? 'bg-gray-900 text-white border-gray-700' : 'bg-white text-gray-900 border-b border-gray-200'
      }`}>
      <div className="flex items-center justify-between px-4 py-3 md:py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex-shrink-0 w-32 md:w-40">
          <LogoHeader />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center justify-center px-8">
          <Navbar />
        </div>

        {/* Right Actions & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Profile />

          <button
            onClick={toggleMobileMenu}
            className={`md:hidden p-2 rounded-md transition-colors ${isDarkMode ? 'hover:bg-gray-800 text-gray-200' : 'hover:bg-gray-100 text-gray-700'
              }`}
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden border-t ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'
              }`}
          >
            <div className="flex flex-col py-2">
              <MobileNavLink to="/home">Home</MobileNavLink>
              <MobileNavLink to="/alumni">Alumni</MobileNavLink>
              <MobileNavLink to="/job">Jobs</MobileNavLink>
              <MobileNavLink to="/news">News</MobileNavLink>
              <MobileNavLink to="/placement">Placements</MobileNavLink>
              <MobileNavLink to="/about">About Us</MobileNavLink>
              <MobileNavLink to="/contact">Contact</MobileNavLink>
              <MobileNavLink to="/support">Support</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
