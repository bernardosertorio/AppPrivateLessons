const Student = require("../models/Student")
const { date, age } = require('../../lib/utils')


module.exports = {

  list(req, res) {

   Student.all(function(students) {

    return res.render("students/list", { students })
   })

  },

  create(req, res) {

   return res.render('students/create')

  },

  post(req, res) {

    const keys = Object.keys(req.body)

    for(key of keys) {

      if (req.body[key] == "") {

        return res.send('Please, fill all fields!')
      }

      Student.create(req.body, function(student) {

        return res.redirect(`/students/${student.id}`)
      })

    }
  },

  show(req, res) {

    Student.find(req.params.id, function(student) {

      if(!student) return res.send("Student not found!")

      student.birth = age(student.birth)
      student.subjects_taught = student.subjects_taught.split(",")
      student.created_at = date(student.created_at).format

      return res.render("students/show", { student })

    })
  
  },

  edit(req, res) {
    
    Student.find(req.params.id, function(student) {

      if(!student) return res.send("Student not found!")

      student.birth = date(student.birth).iso

      return res.render("students/show", { student })

    })

  },

  put(req, res) {

    const keys = Object.keys(req.body)

    for(key of keys) {

      if (req.body[key] == "") {

        return res.send('Please, fill all fields!')
      }

      Student.update( req.body, function() {

        return res.redirect(`/students/${req.body.id}`)
      })

    }

  },

  delete(req, res) {

    Student.delete( req.body.id, function() {

      return res.redirect('/students')

    })

  }

}

