import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
  
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}
  
const update = (person, newObject) => {
    if (window.confirm(`${person.name} is already added to the phonebook. Replace the old number with a new one?`)) {
        const request = axios.put(`${baseUrl}/${person.id}`, newObject)
        return request.then(response => response.data)
    }
}

const remove = (person) => {
    if (window.confirm(`Delete ${person.name}`)) {
        const request = axios.delete(`${baseUrl}/${person.id}`)
        return request.then(response => response) // returning for response codes
    }
}
  
export default { getAll, create, update, remove }