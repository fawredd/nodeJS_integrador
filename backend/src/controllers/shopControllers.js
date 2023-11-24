//Importo data temporal
const data = require('../data/data')

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
  shop: (req, res) => {
    res.render('pages/shop/shop',{items:data.items,baseUrl: req.baseUrl})
  },
  shopItem: (req, res) => {
    res.render('pages/shop/item',{items:data.items,id:req.params.id, baseUrl: req.baseUrl})
  },
  cart: (req, res) => {
    res.render('pages/shop/cart',{items:data.items,cart:data.cart, baseUrl: req.baseUrl})
  },
}

module.exports = shopControllers
