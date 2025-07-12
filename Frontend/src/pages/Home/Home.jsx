import React from 'react'
import AboutUs from '../AboutUs/AboutUs.jsx'
import { useTheme } from '../../context/ThemeContext'

function Home() {
  const { isDarkMode } = useTheme();

  return (


    <AboutUs/>
  )
}

export default Home