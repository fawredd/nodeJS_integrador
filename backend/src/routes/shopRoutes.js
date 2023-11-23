const express = require("express");
const router = express.Router();

const shopControllers = require("../controllers/shopControllers");
/* 
Shop Routes:
- GET -> /shop
- GET -> /shop/item/:id
- POST -> /shop/item/:id/add
- GET -> /shop/cart
- POST -> /shop/cart
*/
router.get("/shop", shopControllers.shop);
router.get("/shop/item/:id", shopControllers.shop);
router.post("/shop/item/:id/add", shopControllers.shop);
router.get("/shop/cart", shopControllers.cart);
router.post("/shop/cart", shopControllers.cart);

module.exports = router;
