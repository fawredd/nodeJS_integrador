// Importo data temporal
// const data = require('../data/data')
const model = require('../models/producto')

/*
Main Routes:
- GET -> /home
- GET -> /contact
- GET -> /about
- GET -> /faqs
*/

// Controladores
const mainControllers = {
  home: async (req, res) => {
    try {
      const productos = await model.findAll({
        // attributes: ["id", "nombre", "precio"],
      })
      res.render('index', { items: productos, baseUrl: req.baseUrl })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },
  contact: (req, res) => res.send('Cargando ruta /contact method GET'),
  about: (req, res) => res.send('Cargando ruta /about method GET'),
  faq: (req, res) => res.send('Cargando ruta /faq method GET')
}

module.exports = mainControllers
