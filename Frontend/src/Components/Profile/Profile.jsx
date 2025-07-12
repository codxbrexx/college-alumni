import React from 'react'
import { useTheme } from '../../context/ThemeContext'

function Profile() {
  const { isDarkMode } = useTheme();

  return (
    <div className='flex-col'>
        <div  >
            <img className='size-10' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" />
        </div>
        <div className={`text-center font-400 transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
            User
        </div>
    </div>
  )
}

export default Profile