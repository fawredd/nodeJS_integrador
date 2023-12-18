const express = require('express')
const router = express.Router()
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const { body } = require('express-validator')

const validations = [
  body('product_name')
    .not()
    .isEmpty()
    .withMessage('El nombre es obligatorio'),
  body('LicenceId')
    .not()
    .isEmpty()
    .withMessage('La licencia es obligarotia'),
  body('CategoryId')
    .not()
    .isEmpty()
    .withMessage('La categoria es obligatoria')
]

const adminControllers = require('../controllers/adminControllers')
/*
Admin Routes:
- GET -> /admin
- GET -> /admin/create
- POST -> /admin/create
- GET -> /admin/edit/:id
- PUT -> /admin/edit/:id
- DELETE -> /admin/delete/:id
*/

router.get('/create', adminControllers.adminCreate)
//router.post('/create', validations, adminControllers.store)
router.post("/create", upload.single('img_front'), validations, adminControllers.store);
router.get('/', (req, res) => res.redirect('/admin/1'))
router.get('/:page', adminControllers.admin)

router.get('/edit/:id', adminControllers.adminEdit)
//router.put('/edit/:id', validations, adminControllers.adminEditUpdate)
router.put("/edit/:id", upload.single("img_front"), validations, adminControllers.adminEditUpdate);
router.delete('/:id', adminControllers.adminDelete)

module.exports = router
