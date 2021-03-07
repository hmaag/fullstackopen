import React from 'react'

const Filter = ( {filter, handleFilter} ) => {
    return (
        <>
            <label>filter names with : </label>
            <input value={filter} onChange={handleFilter}/>
        </>
    )
}

export default Filter