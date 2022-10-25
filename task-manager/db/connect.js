const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://rdirube:malingas143@cluster0.nb9nfkg.mongodb.net/task-manager?retryWrites=true&w=majority'


const connectDB = (url) => {
    return mongoose.connect(connectionString).then(() => {
        console.log('connected to the db...')
    }).catch((err) => console.log(err) )
}


module.exports = connectDB
