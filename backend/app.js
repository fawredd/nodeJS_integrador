// Inicializo el server
const express = require("express");
const app = express();

const path = require("path");
//Cargo expressLayouts
const expressLayouts = require("express-ejs-layouts");
//Permito modificar el method
const methodOverride = require("method-override");
//Defino el static path
app.use(express.static(path.join(__dirname, "/public")));
//Defino que voy a utlizar ejs como view engine
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");
console.debug (__dirname)
//Indico donde se encuentran los layouts
app.use(expressLayouts);
app.set("layout", "layouts/layout");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(require("./src/routes/mainRoutes"));
app.use(require("./src/routes/shopRoutes"));
app.use(require("./src/routes/adminRoutes"));
app.use(require("./src/routes/authRoutes"));
// Middleware para manejar el error 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
    });

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
