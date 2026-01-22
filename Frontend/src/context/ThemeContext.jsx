import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// we can use this for all otehr project this os the prefect darkmode toggle context

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Force light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Ensure dark class is removed
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  const toggleTheme = () => {
    // Disabled
    setIsDarkMode(false);
  };

  const value = {
    isDarkMode,
    toggleTheme,
    theme: 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 