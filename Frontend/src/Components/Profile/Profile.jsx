import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

function Profile() {
  const { user } = useAuth();

  // Get first name or display name
  const displayName = user?.name ? user.name.split(' ')[0] : 'My Profile';

  // Placeholder avatar if user doesn't have one
  const avatarSrc = user?.profileImage || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  return (
    <Link to="/profile" className='flex items-center gap-3 group px-2 py-1.5 rounded-full transition-all duration-300 hover:bg-gray-50'>
      <div className="relative">
        <img
          className='size-9 rounded-full object-cover shadow-sm transition-all duration-300 group-hover:ring-2 group-hover:ring-red-500 group-hover:scale-105'
          src={avatarSrc}
          alt="Profile"
        />
        {user && (
          <span className="absolute bottom-0 right-0 size-2.5 bg-green-500 border-2 border-white rounded-full"></span>
        )}
      </div>
      <div className="hidden md:flex flex-col items-start leading-tight">
        <span className="text-sm font-semibold text-gray-800 transition-colors duration-300 group-hover:text-red-700">
          {displayName}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
          Alumni
        </span>
      </div>
    </Link>
  )
}

export default Profile