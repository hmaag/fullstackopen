import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterTextField from './components/FilterTextField'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect (() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const showCountry = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
  }

  return (
    <div>
      <FilterTextField 
        filter={filter} 
        handleFilter={handleFilter} 
      />
      <Countries 
        countries={countries} 
        filter={filter}
        showCountry={showCountry}
      />
    </div>
  )
}

export default App
