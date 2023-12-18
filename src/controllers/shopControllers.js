// Importo data temporal
// const data = require('../data/data')
const productsModel = require('../models/producto')
const categoriasModel = require('../models/producto')
const licenciasModel = require('../models/producto')
const { Cart, CartItems } = require('../models/cart')
/*
Main Routes:
- GET -> /shop
- GET -> /shop/item/:id
- POST -> /shop/item/:id/add
- GET -> /shop/cart
- POST -> /shop/cart
*/

// Controladores
const shopControllers = {
  shop: async (req, res) => {
    try {
      // Página y tamaño de la página
      let page
      if (req.params.page) {
        page = req.params.page
      } else {
        page = 1
      }
      const pageSize = 6
      const totalCount = await productsModel.count({})
      // Calcular el número total de páginas
      const totalPages = Math.ceil(totalCount / pageSize)

      const productos = await productsModel.findAll({
        limit: pageSize, // Tamaño de la página
        offset: (page - 1) * pageSize // Desplazamiento
      })
      res.render('pages/shop/shop', { items: productos, baseUrl: req.baseUrl, page, totalPages })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },
  shopItem: async (req, res) => {
    console.log('------ /shop/item/x GET --------')
    console.log('req.params: ' + JSON.stringify(req.params))
    try {
      const productos = await productsModel.findByPk(req.params.id)
      const itemsGaleria = await productsModel.findAll()
      res.render('pages/shop/item', { items: productos, itemsGaleria, baseUrl: req.baseUrl })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },
  cart: async (req, res) => {
    try {
      const cart = await Cart.findAll({
        where: {
          UserId: 1
        },
        include: [
          {
            model: CartItems,
            include: [
              {
                model: productsModel
              }
            ]
          }
        ]
      })
      res.render('pages/shop/cart', { cart, baseUrl: req.baseUrl })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },
  cartStore: async (req, res) => {
    console.log("------ /shop/cart/:id POST")
    try {
      console.log(JSON.stringify(req.body))
      const newCart = await Cart.create(req.body)
      console.log("Agregado al cart:" + JSON.stringify(newCart))
      const cart = await Cart.findAll({
        where: {
          UserId: 1
        },
        include: [
          {
            model: CartItems,
            include: [
              {
                model: productsModel
              }
            ]
          }
        ]
      })
      res.render('pages/shop/cart', { cart, baseUrl: req.baseUrl })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
}

module.exports = shopControllers
