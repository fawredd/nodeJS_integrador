//Importo data temporal
const data = require('../data/data')

const path = require("path");
const sharp = require("sharp");

const { validationResult } = require("express-validator");
const model = require("../../models/Producto");

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
    try {
      const productos = await model.findAll({
        // attributes: ["id", "nombre", "precio"],
      });
      res.render('pages/admin/admin', {items:productos, header: 'admin'})
      //res.render('pages/admin/admin', {items:data.items, header: 'admin'})

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  adminCreate: (req, res) => {
    res.render('pages/admin/admin', {items:data.items, header: 'admin'})
  },
  adminEdit: (req,res) => {
    
    res.send('Cargando ruta /admin/edit method GET o PUT')
  },
  adminDelete: (req,res) => res.send('Cargando ruta /admin/delete method DELETE'),
}


module.exports = adminControllers
