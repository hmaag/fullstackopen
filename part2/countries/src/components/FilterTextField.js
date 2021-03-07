import React from 'react'

const Filter = ( {filter, handleFilter} ) => {
    return (
        <>
            <label>find countries: </label>
            <input value={filter} onChange={handleFilter}/>
        </>
    )
}

export default Filter