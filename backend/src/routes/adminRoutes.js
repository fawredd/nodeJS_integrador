const express = require("express");
const router = express.Router();

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
router.get("/admin", adminControllers.admin);
router.get("/admin/create", adminControllers.admin);
router.post("/admin/create", adminControllers.admin);
router.get("/admin/edit/:id", adminControllers.adminEdit);
router.put("/admin/edit/:id", adminControllers.adminEdit);
router.delete("/admin/delete/:id", adminControllers.adminDelete);

module.exports = router;
