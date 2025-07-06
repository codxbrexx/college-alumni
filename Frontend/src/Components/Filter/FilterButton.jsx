import React from 'react'

function FilterButton({labelName,filterOptions}) {
  return (
    <>
        <div>
            <label htmlFor={labelName}>{labelName}</label>
            <select name={labelName} id={labelName}>
                {filterOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    </>
  )
}

export default FilterButton