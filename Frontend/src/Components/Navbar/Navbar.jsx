import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='flex gap-8 items-center'>
            <NavLink to='/home' style={({isActive}) => (isActive ? "text-blue-700" : "text-gray-600")}>
                Home
            </NavLink>
            <div>
                Alumni
            </div>
            <div>
                Intern
            </div>
            <div>
                News
            </div>
            <div>
                Placement
            </div>
            <div>
                About Us
            </div>
        </div>
    </>
  )
}

export default Navbar