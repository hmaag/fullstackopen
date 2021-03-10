import React, { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState(null)

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
      if (window.confirm(`${personToUpdate.name} is already added to the phonebook. Replace the old number with a new one?`)) {
        personObject['id'] = id // make sure we send the right id over
        personService
        .update(personToUpdate, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
          setMessage(`${personToUpdate.name}'s phone number has been updated`)
          setNewName('')
          setNewNumber('')
          setTimeout(() => {
            setMessage(null)
          }, 3000)
        })
        .catch(error => {
          setMessage(`${personToUpdate.name} has already been removed from the phonebook`)
          setTimeout(() => {
            setMessage(null)
          }, 3000)
          setPersons(persons.filter(n => n.id !== id))
        })
      }
      return
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setMessage(`${newName} has been added to the phonebook`)
          setTimeout(() => {
          setMessage(null)
          }, 3000)
        })
        .catch(error => {
          setMessage(`${JSON.stringify(error.response.data)}`)
          setTimeout(() => {
            setNewName('')
            setNewNumber('')
            setMessage(null)
          }, 5000)
        })
    }
  }

  const removePerson = (event) => {
    event.preventDefault()
    const id = event.target.value
    const personToRemove = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${personToRemove.name}`)) {
      personService
      .remove(personToRemove).then(() => {
        setPersons(persons.filter(n => n.id !== id))
        setMessage(`${personToRemove.name} has been removed from the phonebook`)
        setTimeout(() => {
          setMessage(null)
        }, 3000)
      }) //id is one more than person's idx in array
      .catch(error => {
        setMessage(`${personToRemove.name} has already been removed from the phonebook`)
        setTimeout(() => {
          setMessage(null)
        }, 3000)
        setPersons(persons.filter(n => n.id !== id))
      })
    }
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
        <Notification message={message} />
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
