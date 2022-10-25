const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
//middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send('COMO VA')
});

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)

// se inicializa el servidor y se conecta a la base de datos con esta funcion
const start = async () => {
 try {
    console.log(process.env.MONGO_URI)
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, console.log('dale loco media pila'))
 } catch (error) {
    console.log(error)
 }
}

start()

