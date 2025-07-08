import React from 'react'
import Post from '../../Components/Post/Post'
import Hero from '../../Components/Hero/Herojob'

function News() {
  return (
    <>
      <div className="w-fill flex justify-center">
        <Hero/>
        
      </div>
      <div className="w-3xl flex justify-evenly">
          <Post />

        </div>
    </>
  )
}

export default News