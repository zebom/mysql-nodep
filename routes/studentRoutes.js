const express = require('express')
const routes = express.Router();
const studentController = require('../controllers/studentController')



routes.post('/addStudent',studentController.addStudent)
routes.get('/getStudents',studentController.getStudents )
routes.get('/getStudent/:id', studentController.getStudent)                                                                        
routes.put('/updateStudent/:id',studentController.updateStudent)
routes.delete('/deleteStudent/:id',studentController.deleteStudent)

module.exports = routes;