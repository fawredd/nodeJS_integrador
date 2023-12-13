const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const { validationResult } = require("express-validator");
const ProductoModel = require("../models/producto");
const CategoriasModel = require("../models/category");
const LicenciasModel = require("../models/licence");

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
      const totalCount = await ProductoModel.count({});
      // Calcular el número total de páginas
      const totalPages = Math.ceil(totalCount / pageSize);

      const productos = await ProductoModel.findAll({
        limit: pageSize, // Tamaño de la página
        offset: (page - 1) * pageSize, // Desplazamiento
      });

      res.render('pages/admin/admin', {items:productos, page:page, totalPages: totalPages, header: 'admin'})
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  adminCreate: async (req, res) => {
    const categorias = await CategoriasModel.findAll(
      {order: [["nombre", "ASC"]],}
    )
    const licencias = await LicenciasModel.findAll(
      {order: [["nombre", "ASC"]],}
    )

    res.render('pages/admin/create', {categorias: categorias, licencias: licencias, header: 'admin'})
  },
  store: async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.render("pages/admin/create", {
        values: req.body,
        errors: errors.array(),
      });
    }
    try {
      const producto = await ProductoModel.create(req.body);

      if (req.file) {
        req.file.foreach((file, indice)=>{
          let finalNombre = ''
          if (indice == 0) {
            finalNombre = '-1'
          } else {
            finalNombre = '-box'
          }
          sharp(file.buffer)
            .resize(300)
            .toFile(
              path.resolve(
                __dirname,
                `../../public/img/${producto.categoria.name}/producto_${producto.id}${finañNombre}.jpg`
              )
            );
        })
      }
      res.redirect("/admin/productos");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  adminEdit: (req,res) => {
    res.send('Cargando ruta /admin/edit method GET o PUT')
  },
  adminDelete: (req,res) => res.send('Cargando ruta /admin/delete method DELETE'),
}


module.exports = adminControllers
