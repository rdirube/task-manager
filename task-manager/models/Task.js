const mongoose = require('mongoose')


const TaskSchema =  new mongoose.Schema({
    name:{
        // se le puede agregar propiedades a los objetos enviados a mongo
        type:String,
        required: [true, 'must provide name'],
        trim:true,
        maxlength:[20, 'name can not be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)