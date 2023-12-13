require("dotenv").config();

// Inicializo el server
const express = require("express");
const app = express();
const path = require("path");

// Sesiones
const session = require("cookie-session");
app.use(
    session({
        keys: ["S3cr3t01", "S3cr3t02"],
    })
);  
app.use(async (req, res, next) => {
    res.locals.userId = req.session.userId;
    next();
});
const isLogin = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect("/login");
    }
    next();
};

//Cargo expressLayouts
const expressLayouts = require("express-ejs-layouts");
//Permito modificar el method
const methodOverride = require("method-override");

const sequelize = require("./src/models/connection");

const {Cart,CartItems} = require("./src/models/cart");

app.use(async (req, res, next) => {
    res.locals.cartCant = 4;
/*     try {
        const cart = await Cart.findAll({
            where: {
                UserId: 1,
            },    
            include: [
                    {
                        model: CartItems
                    },
                    ],
        });
        let sumaCantTotal = 0
        cart[0].CartItems.forEach((item) => {
            sumaCantTotal += item.cartItem_cant
        })
        res.locals.cartCant = sumaCantTotal
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }*/
    next();
});

//Defino el static path
app.use(express.static(path.join(__dirname, "/public")));

//Defino que voy a utlizar ejs como view engine
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

//Indico donde se encuentran los layouts
app.use(expressLayouts);
app.set("layout", "layouts/layout");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

app.use(require("./src/routes/mainRoutes"));
app.use(
    "/shop",
    require("./src/routes/shopRoutes")
);
app.use(
    "/admin/categorias",
    isLogin,
    require("./src/routes/categoriasRoutes")
);
app.use(
    "/admin/licencias",
    isLogin,
    require("./src/routes/licenciasRoutes")
);
app.use(
    "/admin",
    isLogin,
    require("./src/routes/adminRoutes")
);
app.use(
    "/auth",
    require("./src/routes/authRoutes")
);

// Middleware para manejar el error 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
    });

const PORT = 3000;
app.listen(PORT, async () => {
    try {
        await sequelize.sync({alter:false});
    } catch (error) {
        console.log(error);
    }
    console.log(`http://localhost:${PORT}`)
    }
);
