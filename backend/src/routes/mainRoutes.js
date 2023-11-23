const express = require("express");
const router = express.Router();

const mainControllers = require("../controllers/mainController");
/* 
Main Routes:
- GET -> /home
- GET -> /contact
- GET -> /about
- GET -> /faqs 
*/
router.get("/", (req,res)=> res.redirect('/home'));
router.get("/home", mainControllers.home);
router.get("/contact", mainControllers.contact);
router.get("/about", mainControllers.about);
router.get("/faq", mainControllers.faq);

module.exports = router;
