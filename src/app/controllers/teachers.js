const { date, age } = require("../../lib/utils")


module.exports = {

  list(req, res) {

   return res.render("teachers/list")

  },

  create(req, res) {

   return res.render('teachers/create')

  },

  post(req, res) {

    const keys = Object.keys(req.body)

    for(key of keys) {

      if (req.body[key] == "") {

        return res.send('Please, fill all fields!')
      }

      let { avatar_url, birth, name, occupation_areas, typeofclass, educationllevel } = req.body

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

      let { avatar_url, birth, name, occupation_areas, typeofclass, educationllevel } = req.body

    }

  },

  delete(req, res) {

    return

  }

}








