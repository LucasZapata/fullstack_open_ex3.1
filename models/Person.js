const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const mongodb_uri = process.env.MONGODB_URI

mongoose.connect('mongodb+srv://test_user:test_password@cluster0.swjwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(result =>
    console.log('connected to MongoDB'))
    .catch(error =>
        console.log('Error connecting to MongoDB:', error.message))

const entrySchema = new mongoose.Schema({
    'name': { type: String,
        minlength: 3,
        required: true },
    'number': { type: String,
        minlength: 8,
        required: true }
})
entrySchema.plugin(uniqueValidator)

entrySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject._v
    }
})

module.exports = mongoose.model('Person', entrySchema)

