const { date, age } = require('../../lib/utils')



module.exports = {

  list(req, res) {

   return res.render("students/list")

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

    }
  },

  show(req, res) {

    return
  
  },

  edit(req, res) {
    
    return

  },

  put(req, res) {

    const keys = Object.keys(req.body)

    for(key of keys) {

      if (req.body[key] == "") {

        return res.send('Please, fill all fields!')
      }

    }

  },

  delete(req, res) {

    return

  }

}

