const express = require("express");
const router = express.Router();

const controller = require("../controllers/mainController");

router.get("/", controller.index);
router.get("/shop", controller.shop);
router.get("/item/:id", controller.item);
router.get("/cart", controller.carrito);
router.post("/cart/:action", controller.modificaCarrito);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
