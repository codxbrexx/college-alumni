import React from 'react'
import Search from '../../Components/Search/Search'
import Post from '../../Components/Post/Post'

function News() {
  return (
    <>
      <div className="w-screen flex-col justify-center">
        <div className="w-3xl">
          <Search />
        </div>
        <div className="w-3xl flex justify-evenly">
          <Post />
          {/* <FilterButton filterOptions={year} labelName={"Year"}/>
          <FilterButton filterOptions={branch} labelName={"Branch"}/>
          <FilterButton filterOptions={skills} labelName={"Skills"}/>
          <FilterButton filterOptions={cities} labelName={"City"}/>
          <FilterButton filterOptions={rollNo} labelName={"Roll No"}/> */}
        </div>
      </div>
    </>
  )
}

export default News