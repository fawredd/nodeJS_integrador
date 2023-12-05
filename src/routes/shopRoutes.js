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
router.get("/shop", (req,res) => res.redirect('/shop/1'));
router.get("/shop/cart", shopControllers.cart);
router.post("/shop/cart", shopControllers.cart);
router.get("/shop/item/:id", shopControllers.shopItem);
router.post("/shop/item/:id/add", shopControllers.shopItem);

router.get("/shop/:page", shopControllers.shop);

module.exports = router;
