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
    console.log(`\n------- Ruta /admin/create GET --------`)
  
    const categorias = await CategoriasModel.findAll(
      {order: [["nombre", "ASC"]],}
    )
    const licencias = await LicenciasModel.findAll(
      {order: [["nombre", "ASC"]],}
    )

    res.render('pages/admin/create', {categorias: categorias, licencias: licencias, header: 'admin'})
  },
  store: async (req, res) => {
    console.log(`\n------- Ruta /admin/create POST --------`)
    console.log("req.body: " + JSON.stringify(req.body))
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      try {
        const categorias = await CategoriasModel.findAll({
          order: [["nombre", "ASC"]],
        });
        const licencias = await LicenciasModel.findAll({
          order: [["nombre", "ASC"]],
        });
        return res.render("pages/admin/create", {
          categorias,
          licencias,
          values: req.body,
          errors: errors.array(),
        });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    }
    try {
      const producto = await ProductoModel.create(req.body);
      /*
      if (req.files) {
        req.files.foreach((file, indice)=>{
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
                `../../public/img/${producto.categoria.name}/producto_${producto.id}${finalNombre}.jpg`
              )
            );
        })
      }
      */
      res.redirect("/admin/");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  adminEdit: async (req,res) => {
    console.log(`\n------- Ruta /admin/edit/xx GET --------`)
    console.log("req.body: " + JSON.stringify(req.body) + "\nreq.params: " + JSON.stringify(req.params))
    try {
      const categorias = await CategoriasModel.findAll(
        {order: [["nombre", "ASC"]],}
      )
      const licencias = await LicenciasModel.findAll(
        {order: [["nombre", "ASC"]],}
      )
      const productos = await ProductoModel.findByPk(
        req.params.id,  
        {
          include: LicenciasModel, CategoriasModel 
        })
      if (productos) {
        res.render("pages/admin/edit", { values: productos, categorias, licencias });
      } else {
        res.status(404).send("No existe el producto");
      }
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  adminEditUpdate: async (req,res) => {
    console.log(`\n------- Ruta /admin/create/edit/x PUT --------`)
    console.log("req.body: " + JSON.stringify(req.body) + "\nreq.params: " + JSON.stringify(req.params))
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      try {
        const categorias = await CategoriasModel.findAll({
          order: [["nombre", "ASC"]],
        });
        const licencias = await LicenciasModel.findAll({
          order: [["nombre", "ASC"]],
        });
        return res.render("pages/admin/edit", {
          categorias,
          licencias,
          values: req.body,
          errors: errors.array(),
        });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    }
    try {
      const count = await ProductoModel.update(req.body, {
        where: {
          product_id: req.params.id,
        },
      });
      /*
      if (req.files) {
        req.files.foreach((file, indice)=>{
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
                `../../public/img/${producto.categoria.name}/producto_${producto.id}${filaNombre}.jpg`
              )
            );
        })
      }
      */
      res.redirect("/admin/");
    } catch (error) {
      console.log(error);
      res.send(error);
    }

  },
  adminDelete: async (req,res) => {
    console.log(`\n------- Ruta /x DELETE --------`)
    console.log("req.body: " + JSON.stringify(req.body) + "\nreq.params: " + JSON.stringify(req.params))
    try {
      const destroyed = await ProductoModel.destroy({
        where: {
          product_id: req.params.id,
        },
      });
      /*
      if (destroyed == 1 && 0) {
        fs.unlink(
          path.resolve(
            __dirname,
            `../../../public/img/ /producto_${req.params.id}-1.jpg`
          ),
          (error) => {
            if (error) {
              console.log(error);
            }
          }
        );
        fs.unlink(
          path.resolve(
            __dirname,
            `../../../public/img/ /producto_${req.params.id}-box.jpg`
          ),
          (error) => {
            if (error) {
              console.log(error);
            }
          }
        );
      }
      */
      res.redirect("/admin/");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
}


module.exports = adminControllers
