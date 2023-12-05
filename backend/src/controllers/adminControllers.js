//Importo data temporal
//const data = require('../data/data')

const path = require("path");
const sharp = require("sharp");

const { validationResult } = require("express-validator");
const model = require("../models/producto");

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
  admin: async (req, res) => {
    try {
      // Página y tamaño de la página
      let page
      if(req.params.page){
        page = req.params.page;
      } else {
        page = 1
      }
      const pageSize = 6;
      const totalCount = await model.count({});
      // Calcular el número total de páginas
      const totalPages = Math.ceil(totalCount / pageSize);

      const productos = await model.findAll({
        limit: pageSize, // Tamaño de la página
        offset: (page - 1) * pageSize, // Desplazamiento
      });
      res.render('pages/admin/admin', {items:productos, page:page, totalPages: totalPages, header: 'admin'})
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  adminCreate: (req, res) => {
      res.render('pages/admin/create', {header: 'admin'})
  },
  store: async (req, res) => {
    console.log(req.body, req.file)
    const errors = validationResult(req)
    /*
    if (!errors.isEmpty()) {
      return res.render("pages/admin/create", {
        values: req.body,
        errors: errors.array(),
      });
    }
    try {
      const producto = await model.create(req.body);
      console.log(producto);
      if (req.file) {
        sharp(req.file.buffer)
          .resize(300)
          .toFile(
            path.resolve(
              __dirname,
              `../../../public/uploads/productos/producto_${producto.id}.jpg`
            )
          );
      }
      res.redirect("/admin/productos");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
 */},
  adminEdit: (req,res) => {
    res.send('Cargando ruta /admin/edit method GET o PUT')
  },
  adminDelete: (req,res) => res.send('Cargando ruta /admin/delete method DELETE'),
}


module.exports = adminControllers
