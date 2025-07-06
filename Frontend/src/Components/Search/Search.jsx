import React from 'react'

function Search() {
  return (
    <>
      <div className='w-2xl flex justify-around gap-5'>
        <input className='w-2xl' placeholder='Search your Alumni' type="text" />
        <button>Search</button>
      </div>
    </>
  )
}

export default Search