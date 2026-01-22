import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

function Profile() {
  const { user } = useAuth();

  // Get first name or display name
  const displayName = user?.fullName ? user.fullName.split(' ')[0] : (user?.name ? user.name.split(' ')[0] : 'My Profile');

  // Placeholder avatar if user doesn't have one
  const avatarSrc = user?.profileImage || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  // Calculate Role
  const currentYear = new Date().getFullYear();
  const passYear = user?.yearOfPassout || user?.passingYear;
  const role = passYear && passYear > currentYear ? "Student" : "Alumni";

  return (
    <Link to="/profile" className='flex items-center gap-3 group px-2 py-1.5 rounded-full transition-all duration-300 hover:bg-gray-50'>
      <div className="relative">
        <img
          className='size-9 rounded-full object-cover shadow-sm transition-all duration-300 group-hover:ring-2 group-hover:ring-red-500 group-hover:scale-105'
          src={avatarSrc}
          alt="Profile"
        />
        {user && (
          <span className={`absolute bottom-0 right-0 size-2.5 border-2 border-white rounded-full ${role === 'Student' ? 'bg-blue-500' : 'bg-red-500'}`}></span>
        )}
      </div>
      <div className="hidden md:flex flex-col items-start leading-tight">
        <span className="text-sm font-semibold text-gray-800 transition-colors duration-300 group-hover:text-red-700">
          {displayName}
        </span>
        <span className={`text-[10px] uppercase tracking-wider font-bold ${role === 'Student' ? 'text-blue-600' : 'text-red-600'}`}>
          {role}
        </span>
      </div>
    </Link>
  )
}

export default Profile