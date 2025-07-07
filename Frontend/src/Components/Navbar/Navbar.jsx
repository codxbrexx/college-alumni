import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='flex gap-8 items-center'>
            <div>
                <NavLink to='home' className={({isActive}) => (isActive ? "text-blue-700" : "text-gray-600")}>
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to='alumni' className={({isActive}) => (isActive ? "text-blue-700" : "text-gray-600")}>
                    Alumni
                </NavLink>
            </div>
            <div>
                <NavLink to='job' className={({isActive}) => (isActive ? "text-blue-700" : "text-gray-600")}>
                    Job
                </NavLink>
            </div>
            <div>
                <NavLink to='news' className={({isActive}) => (isActive ? "text-blue-700" : "text-gray-600")}>
                    News
                </NavLink>
            </div>
            <div>
                <NavLink to='about' className={({isActive}) => (isActive ? "text-blue-700" : "text-gray-600")}>
                    About Us
                </NavLink>
            </div>
            <div>
                <NavLink to='contact' className={({isActive}) => (isActive ? "text-blue-700" : "text-gray-600")}>
                    Contact Us
                </NavLink>
            </div>
        </div>
    </>
  )
}

export default Navbar