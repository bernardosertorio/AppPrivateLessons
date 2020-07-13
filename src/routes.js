const express = require('express')
const routes = express.Router()
const teachers = require('./app/controllers/teachers')
const students = require('./app/controllers/students')


routes.get('/', function(req, res) {
  return res.render("teachers/home")
})
routes.get("/teachers", teachers.list)
routes.get('/teachers/create', teachers.create) 
routes.post("/teachers", teachers.post)
routes.get('/teachers/:id', teachers.show)
routes.get('/teachers/:id/edit', teachers.edit)
routes.put("/teachers", teachers.put)
routes.delete("/teachers", teachers.delete)



routes.get("/students", students.list)
routes.get('/students/create', students.create)
routes.post("/students", students.post)
routes.get('/students/:id', students.show)
routes.get('/students/:id/edit', students.edit)
routes.put("/students", students.put)
routes.delete("/students", students.delete)


module.exports = routes
