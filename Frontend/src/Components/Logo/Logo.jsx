import React from 'react'
import { useTheme } from '../../context/ThemeContext'

function Logo() {
  const { isDarkMode } = useTheme();

  return (
    <div>
        <div className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64">
            <img 
              className='size-20' 
              src={isDarkMode ? "/NetGrad-Darktheme.png" : "/NetGrud.png"}  //change logo according to mode
              alt="NetGrud Logo" 
            />
        </div>
    </div>
  )
}

export default Logo