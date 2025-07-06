import React from 'react'

function FilterButton({labelName,filterOptions}) {
  return (
    <>
        <div>
            <label htmlFor={labelName}>{labelName}</label>
            <select name={labelName} id={labelName}>
            </select>
        </div>
    </>
  )
}

export default FilterButton