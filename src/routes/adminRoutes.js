const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const { body } = require("express-validator");

const validations = [
/*     
    “product_id”: 1,
    “licence_name”: “Pokemon”,
    “category_name”: “Figuras coleccionables”,
    “product_name”: “Pidgeotto”,
    “product_description”: “Figura coleccionable pokemon”,
    “product_price”: 1799.99,
    “dues”: 10,
    “product_sku”: “PKM001001”
    “img_front”: ”/img/pokemon/pidgeotto-1.webp”,
    “img_back”: ”/img/pokemon/pidgeotto-box.webp” 
*/
/*     
    body("licence")
        .not()
        .isEmpty()
        .withMessage("La licencia es obligarotia")
    body("category").not().isEmpty().withMessage("La categoria es obligatoria"),
*/
];

const adminControllers = require("../controllers/adminControllers");
/* 
Admin Routes:
- GET -> /admin
- GET -> /admin/create
- POST -> /admin/create
- GET -> /admin/edit/:id
- PUT -> /admin/edit/:id
- DELETE -> /admin/delete/:id
*/
router.get("/admin", (req,res) => res.redirect('/admin/1'));
router.get("/admin/create", adminControllers.adminCreate);

router.get("/admin/:page", adminControllers.admin);

/* router.post("/admin/create", upload.single("imagen"), validations, adminControllers.store); */
router.get("/admin/edit/:id", adminControllers.adminEdit);
router.put("/admin/edit/:id", upload.single("imagen"), validations, adminControllers.adminEdit);
router.delete("/admin/delete/:id", adminControllers.adminDelete);

module.exports = router;
