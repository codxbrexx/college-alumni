import React from 'react'
import { CiSearch } from "react-icons/ci";


function Search() {
  return (
    <div className="w-full flex justify-center items-center  ">
      
      <div className="w-full max-w-4xl flex items-center bg-white/80 rounded-lg shadow-md p-2 mt-4">
        < CiSearch className='w-6 h-6 font-semibold text-md text-gray-500 m-2 ' />
        <input
          className="flex-1 px-4 py-2 rounded-l-lg outline-none text-gray-700 bg-transparent  "
          placeholder="Search here"
          type="text"
        />
        <button className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-2 rounded-r-lg ml-2 transition-colors">Search</button>
      </div>
    </div>
  )
}

export default Search