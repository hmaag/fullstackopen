import React from 'react'

const Country = ( {country} ) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>
            <div>
                languages:
                <ul>
                    {country.languages.map(language => 
                        <li key={language.name}>{language.name}</li>
                    )}
                </ul>
            </div>
            <img 
                src={country.flag} 
                alt={`Flag of ${country.name}`} 
                height="60" 
                width="110" 
            />
        </div>
    )
}

export default Country