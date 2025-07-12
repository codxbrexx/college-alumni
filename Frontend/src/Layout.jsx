import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'

function Layout() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Header />
      <main className={`transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout