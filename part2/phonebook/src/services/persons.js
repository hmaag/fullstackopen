import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
  
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}
  
const update = (person, newObject) => {
    const request = axios.put(`${baseUrl}/${person.id}`, newObject)
    return request.then(response => response.data)
}

const remove = (person) => {
    const request = axios.delete(`${baseUrl}/${person.id}`)
    return request.then(response => response) // returning for response codes
}
  
export default { getAll, create, update, remove }