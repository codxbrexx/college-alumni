import React from 'react'

function Search() {
  return (
    <>
      <div className='w-full flex justify-around gap-5'>
        <input className='w-3xl' placeholder='Search your Alumni' type="text" />
        <button>Search</button>
      </div>
    </>
  )
}

export default Search