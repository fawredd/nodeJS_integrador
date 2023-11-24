//Importo data temporal
const data = require('../data/data')

/* 
Admin Routes:
- GET -> /admin
- GET -> /admin/create
- POST -> /admin/create
- GET -> /admin/edit/:id
- PUT -> /admin/edit/:id
- DELETE -> /admin/delete/:id
*/

//Controladores
const adminControllers = {
  admin: (req, res) => {
    res.render('pages/admin/admin', {items:data.items, header: 'admin'})
  },
  adminEdit: (req,res) => res.send('Cargando ruta /admin/edit method GET o PUT'),
  adminDelete: (req,res) => res.send('Cargando ruta /admin/delete method DELETE'),
}

module.exports = adminControllers
