const mongoose = require('mongoose')



const entrySchema = new mongoose.Schema({
    'name': String,
    'number': String
})
const Person = mongoose.model('Person', entrySchema)

const ShowDB = () => {
    console.log(process.argv)
    mongoose.connect(mongoURI)
    Person.find({}).then(result => {
        result.forEach(entry => {
            console.log(entry)
        })
        mongoose.connection.close
    })
}

const AddDB = () => {
    console.log(process.argv)
    mongoose.connect(mongoURI)
    const newEntry = new Person({
        'name': process.argv[3],
        'number': process.argv[4]
    })
    newEntry.save().then(result => {
        console.log(`added ${process.argv[3]} number ${process.argv[4]}`)
        mongoose.connection.close()
    })
}

if (process.argv.length < 3) {
    console.log('Please provide password, or passwords and new entry, as arguments: <PASSWORD> <NAME> <NUMBER>')
    process.exit(1)
}

const password = process.argv[2]
const mongoURI = `mongodb+srv://test_user:${password}@cluster0.swjwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

if (process.argv.length === 3) {
    ShowDB()
}
else if (process.argv.length === 5) {
    AddDB()
}
else {
    console.log('Please provide password, or passwords and new entry, as arguments: <PASSWORD> <NAME> <NUMBER>')}

