const { request, response } = require('express')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const BASE_URL ='/api/persons'

app.use(express.json())
app.use(cors())

morgan.token('post', (req, res) => JSON.stringify(req.body))
app.use(morgan(function (tokens, req, res) {
  if (tokens.method(req, res) === 'POST'){
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      tokens.post(req, res)
    ].join(' ')
  } else {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }
}))

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
]

app.get('/info', (request, response) => {
  const output = `<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`

  response.send(output)
})

app.get(BASE_URL, (request, response) => {
  response.json(persons)
})

app.get(BASE_URL + '/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
      response.json(person)
  } else {
      response.status(404).end()
  }
})

app.delete(BASE_URL + '/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  return Math.floor(Math.random() * Math.floor(1000));
}

app.post(BASE_URL, (request, response) => {
  const body = request.body

  if (!body.name) {
      return response.status(400).json({ 
          error: 'name missing' 
      })
  } else if (!body.number) {
      return response.status(400).json({ 
          error: 'number missing' 
      })
  } else if (persons.map(person => person.name).includes(body.name)) {
      return response.status(400).json({ 
          error: 'name must be unique' 
      })
  }

  const person = {
      name: body.name,
      number: body.number,
      id: generateId()
  }

  persons = persons.concat(person)

  response.json(person)
})

app.put(BASE_URL + '/:id', (request, response) => {
  const body = request.body
  
  response.json(body)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})