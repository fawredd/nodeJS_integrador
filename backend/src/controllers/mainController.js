//Importo data temporal
const data = require('../data/data')

/* 
Main Routes:
- GET -> /home
- GET -> /contact
- GET -> /about
- GET -> /faqs 
*/

//Controladores
const mainControllers = {
  home: (req, res) => {
    console.log('Cargando ruta /home method GET');
    res.render("index", { items: data.items, baseUrl: req.baseUrl });
  },
  contact: (req,res) => res.send('Cargando ruta /contact method GET'),
  about: (req,res) => res.send('Cargando ruta /about method GET'),
  faq: (req,res) => res.send('Cargando ruta /faq method GET'),
}

module.exports = mainControllers
