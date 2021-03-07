import React from 'react'

const PersonForm = ( props ) => {
    return (
        <form onSubmit={props.addPerson}>
        <div>
          <label>name </label>
          <input value={props.newName} onChange={props.handleNameChange} />
        </div>
        <div>
            <label>number </label>
            <input type='tel' value={props.newNumber} onChange={props.handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm