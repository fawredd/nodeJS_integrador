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
router.get("/", (req,res) => res.redirect('/shop/1'));
router.get("/cart", shopControllers.cart);
router.post("/cart", shopControllers.cart);
router.get("/item/:id", shopControllers.shopItem);
router.post("/item/:id/add", shopControllers.shopItem);

router.get("/:page", shopControllers.shop);

module.exports = router;
