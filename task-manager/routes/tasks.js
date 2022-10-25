const express = require('express');
const router = express.Router();
const { getAllTask,getTask, createTask, updateTask, deleteTask , editTask} = require('../controllers/tasks') 
//middlewares

//se pueden concatenar funciones
router.route('/').get(getAllTask).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask)
// se pasa la ruta y despues el callback



module.exports = router