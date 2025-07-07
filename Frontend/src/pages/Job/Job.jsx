import React from 'react'

function Job() {
  return (
    <>
      <div className="w-screen flex justify-center">
        <div className="w-3xl">
          <Search />
        </div>
        <div className="w-3xl flex justify-evenly">
          <FilterButton filterOptions={year} labelName={"Year"}/>
          <FilterButton filterOptions={branch} labelName={"Branch"}/>
          <FilterButton filterOptions={skills} labelName={"Skills"}/>
          <FilterButton filterOptions={cities} labelName={"City"}/>
          <FilterButton filterOptions={rollNo} labelName={"Roll No"}/>
        </div>
      </div>
    </>
  )
}

export default Job