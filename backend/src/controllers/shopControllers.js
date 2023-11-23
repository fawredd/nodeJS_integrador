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
    res.send('Cargando ruta /shop method GET')
  },
  cart: (req,res) => res.send('Cargando ruta /cart method GET'),
}

module.exports = shopControllers
