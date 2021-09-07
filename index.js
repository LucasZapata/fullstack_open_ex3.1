const http = require('http')
const express = require('express')
const morgan = require('morgan')
const { request, response } = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        JSON.stringify(req.body)].join(' ')
}))

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)})

app.get('/api/info', (request, response) => {
    const date = new Date().toLocaleString()
    response.send(`<div><p>Phonebook has info for ${persons.length} persons</p>`
        + `<p>${date} ${Intl.DateTimeFormat().resolvedOptions().timeZone}+</p></div>`)})

app.get('/api/persons/:id', (request, response) => {
    console.log('a')
    const id = Number(request.params.id)
    const personReq = persons.find(p => p.id === id)
    if (personReq){
        response.json(personReq)}
    else{
        response.status(404).end()
    }})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        response.status(400).json({
            error:"invalid content"}).end()
    }
    const id = Math.floor(Math.random()*256)
    const personReq = persons.find(p => p.name === body.name)
    if (personReq){
        response.status(400).json({
            error:"person already in database"}).end()
    }
    else{
        const newPerson ={
            id: id,
            name: body.name,
            number: body.number
        }
        persons = persons.concat(newPerson)
        response.json(newPerson)
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

    