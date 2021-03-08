import React, { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(allPersons => {
        setPersons(allPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.map(person => person.name).includes(newName)) {
      const personToUpdate = persons.find(person => person.name === newName)
      const id = personToUpdate.id
      personService
        .update(personToUpdate, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        })
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const removePerson = (event) => {
    event.preventDefault()
    const id = parseInt(event.target.value)
    personService.remove(persons[id - 1]) //id is one more than person's idx in array
    setPersons(persons.filter(n => n.id !== id))
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>phonebook</h2>
        <Filter 
          filter={filter} 
          handleFilter={handleFilter} 
        />
      <br />
      <h2>add a new person</h2>
        <PersonForm 
          addPerson={addPerson} 
          newName={newName} 
          handleNameChange={handleNameChange} 
          newNumber={newNumber} 
          handleNumberChange={handleNumberChange}
        />
      <h2>numbers</h2>
        <Phonebook 
          persons={persons} 
          filter={filter}
          removePerson={removePerson}
        />
    </div>
    
  )
}

export default App
