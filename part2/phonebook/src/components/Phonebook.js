import React from 'react'
import Person from './Person'

const Phonebook = ( {persons, filter, removePerson} ) => {
    const results = filter.length === 0 ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        results.map(person => 
            <div key={person.id}>
                <Person person={person} name={person.name} number={person.number}/> 
                <button type='button' value={person.id} onClick={removePerson}>delete</button>
                <br />
            </div>    
        )
    )
}

export default Phonebook