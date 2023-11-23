const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/authControllers");
/* 
Auth Routes:
- GET -> /auth/login
- POST -> /auth/login
- GET -> /auth/register
- POST -> /auth/register
- GET -> /auth/logout
*/
router.get("/auth/login", authControllers.login);
router.post("/auth/login", authControllers.login);
router.get("/auth/register", authControllers.register);
router.post("/auth/register", authControllers.register);
router.get("/auth/logout", authControllers.logout);

module.exports = router;
