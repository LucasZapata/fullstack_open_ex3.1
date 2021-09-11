const http = require('http')
const express = require('express')
const morgan = require('morgan')
const { request, response } = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const Person = require('./models/Person')
const { nextTick } = require('process')
/* const { default: NewEntry } = require('../excercise_3.1_F/src/components/NewEntry') */

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
app.use(express.static('build'))
const port = process.env.PORT

const ErrorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError'){
        return response.status(400).send({ error: 'malformatted id' })}
    else if (error.name === 'ValidationError'){
        return response.status(400).json({ name: error.name, message: error.message })}
    next(error)
}

let persons = [
    {
        'id': 1,
        'name': 'Arto Hellas',
        'number': '040-123456'
    },
    {
        'id': 2,
        'name': 'Ada Lovelace',
        'number': '39-44-5323523'
    },
    {
        'id': 3,
        'name': 'Dan Abramov',
        'number': '12-43-234345'
    },
    {
        'id': 4,
        'name': 'Mary Poppendieck',
        'number': '39-23-6423122'
    }
]


app.get('/api/persons', (request, response) => {
    Person.find({}).then(person =>
        response.json(person))
    /* response.json(persons) */
})

app.get('/api/info', (request, response, next) => {
    const date = new Date().toLocaleString()
    Person.count()
        .then(count =>
            response.send(`<div><p>Phonebook has info for ${count} persons</p>`
            + `<p>${date} ${Intl.DateTimeFormat().resolvedOptions().timeZone}+</p></div>`))
        .catch(error => next(error))

})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id)
        .then(req => response.json(req))
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
    if (!body.name || !body.number) {
        response.status(400).json({
            error:'invalid content' }).end()
    }
    const newEntry = {
        'name': body.name,
        'number': body.number
    }
    console.log('aaaaa', newEntry)

    Person.findByIdAndUpdate(request.params.id, newEntry, { new: true })
        .then(edit => {response.json(edit)})
        .catch(error => next(error))
    /* console.log('a')
    const id = Number(request.params.id)
    const personReq = persons.find(p => p.id === id)
    if (personReq){
        response.json(personReq)}
    else{
        response.status(404).end()
    } */
})

app.delete('/api/persons/:id', (request, response, next) => {
    console.log(request.params)
    Person.findByIdAndDelete(request.params.id)
        .then(response.status(204).end())
        .catch(error => next(error))
    /* const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)
    response.status(204).end() */
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    if (!body.name || !body.number) {
        response.status(400).json({
            error:'invalid content' }).end()
    }
    const newEntry = new Person({
        'name': body.name,
        'number': body.number
    })
    newEntry.save().then(savedEntry => {
        response.json(savedEntry)})
        .catch(error => next(error))
})
/* const body = request.body

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
    } */

app.use(ErrorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

