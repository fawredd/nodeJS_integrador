//Importo data temporal
//const data = require('../data/data')
const productsModel = require("../models/producto");
const cartModel = require("../models/cart");
/* 
Main Routes:
- GET -> /shop
- GET -> /shop/item/:id
- POST -> /shop/item/:id/add
- GET -> /shop/cart
- POST -> /shop/cart
*/

//Controladores
const shopControllers = {
  shop: async (req, res) => {
    try {
      // Página y tamaño de la página
      let page
      if(req.params.page){
        page = req.params.page;
      } else {
        page = 1
      }
      const pageSize = 6;
      const totalCount = await productsModel.count({});
      // Calcular el número total de páginas
      const totalPages = Math.ceil(totalCount / pageSize);

      const productos = await productsModel.findAll({
        limit: pageSize, // Tamaño de la página
        offset: (page - 1) * pageSize, // Desplazamiento
      });
      res.render('pages/shop/shop',{items:productos,baseUrl: req.baseUrl, page:page, totalPages: totalPages})
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  shopItem: async (req, res) => {
    try {
      const productos = await productsModel.findAll({
        
      });
      res.render('pages/shop/item',{items:productos,id:req.params.id, baseUrl: req.baseUrl})

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  cart: async (req, res) => {
    try {
      const productos = await productsModel.findAll({});
      const cart = await cartModel.findAll({});
      res.render('pages/shop/cart',{items:productos,cart:cart, baseUrl: req.baseUrl})
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
}

module.exports = shopControllers
