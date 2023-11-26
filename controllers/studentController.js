// const db = require('../models/indexStart')
const db = require('../models/indexStart');

const createError = require('http-errors');

const Student = db.students;

module.exports={
    addStudent :async(req, res, next)=>{
        try{
            let info ={
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.gender
            }
            const addStore = await Student.create(info)
            res.status(200).send(addStore)
            
        }catch(error){
            next(error)
        }
    },
    getStudents :async(req, res, next)=>{
        try{
            let allStudents = await Student.findAll({})
        }catch(error){
            next(error)
        }
    },
    getStudent :async(req, res, next)=>{
        try{
            let id = req.params.id
            let student = await Student.findOne({where: {student_id: id}})
            
            if(!student){
                throw(createError(404, "Student does not exist"))
            }
            res.status(200).send(student)
        }catch(error){
            next(error)
        }
    },
    updateStudent :async(req, res, next)=>{
        try{
            let id = req.params.id

            const student = await Student.update(req.body, {where: {student_id: id}})
            if(!student){
                throw(createError(404, 'student does not exist'))
            }
            res.status(200).send(student)
        }catch(error){
            next(error)
        }
    },
    deleteStudent :async(req, res ,next)=>{
        try{
            let id = req.params.id

            await Student.destroy({ where: {student_id: id}})
            res.status(200).send("student deleted successfully")
        }catch(error){
            next(error)
        }
    }

}