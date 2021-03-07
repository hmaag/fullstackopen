import React from 'react'
import Person from './Person'

const Phonebook = ( {persons, filter} ) => {
    const results = filter.length === 0 ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul>
            {results.map(person => <Person key={person.id} person={person} name={person.name} number={person.number}/>)}
        </ul>
    )
}

export default Phonebook