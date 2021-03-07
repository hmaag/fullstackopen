import React from 'react'
import Country from './Country'

const Countries = ( {countries, filter, showCountry }) => {
    const filteredCountries = filter.length === 0 ? countries : countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

    if (filteredCountries.length === 1) {
        return (
            <Country 
                country={filteredCountries[0]} 
            />
        )
    } else if (filteredCountries.length <= 10) {
        return (
            filteredCountries.map(country =>
                <div key={country.name}>
                  <span>{country.name}</span>
                  <button type='button' value={country.name} onClick={showCountry}>show</button>
                  <br />
                </div>
            )
        )
    } else {
        return (
            <div>Too many matches; specify another filter</div>
        )
    }
    
}

export default Countries