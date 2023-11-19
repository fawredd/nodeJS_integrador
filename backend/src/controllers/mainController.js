let items = [
  {
    "id": "0",
    "image": "/img/star-wars/trooper-1.webp",
    "alt": "Figura coleccionable Funko de un Stormtrooper",
    "title": "STORMTROOPER LIGHTSABER",
    "brand": "STAR WARS",
    "price": "1799.99",
    "payment": "3 CUOTAS SIN INTERÉS",
    "sticker": "NUEVO"
  },
  {
    "id": "1",
    "image": "/img/pokemon/pidgeotto-1.webp",
    "alt": "Figura coleccionable Funko de Pidgeotto",
    "title": "PIDGEOTTO",
    "brand": "POKEMON",
    "price": "1799.99",
    "payment": "3 CUOTAS SIN INTERÉS",
    "sticker": "NUEVO"
  },
  {
    "id": "2",
    "image": "/img/harry-potter/luna-1.webp",
    "alt": "Figura coleccionable Funko de Luna Lovegood",
    "title": "LUNA LOVEGOOD LION MASK",
    "brand": "HARRY POTTER",
    "price": "1799.99",
    "payment": "3 CUOTAS SIN INTERÉS",
    "sticker": "NUEVO"
  },
  {
    "id": "3",
    "image": "/img/star-wars/baby-yoda-1.webp",
    "alt": "Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.",
    "title": "BABY YODA BLUEBALL",
    "brand": "STAR WARS",
    "price": "1799.99",
    "payment": "3 CUOTAS SIN INTERÉS",
    "sticker": "NUEVO"
  }
]

let cart = {
  items:[],
  cartItems:0,
  importe:0,
  envio:0,
  totalCart:0
}

const index = (req, res) => {
  console.log('Cargando ruta index method GET');
  res.render("index", { items });
  // res.render("index", { tareas, layout: "layouts/admin" });
};

const shop = (req, res) => {
  console.log('Cargando ruta Shop method GET');
  res.render("pages/shop/shop", { brand:req.query.brand , items });
  // res.render("index", { tareas, layout: "layouts/admin" });
};

const item = (req, res) => {
  console.log('Cargando ruta Item method GET');
  res.render("pages/shop/item", { id:req.params.id , items});
  // res.render("index", { tareas, layout: "layouts/admin" });
};

const carrito = (req, res) => {
  console.log('Cargando ruta Cart method GET');
  res.render("pages/shop/cart", { cart , items });
  // res.render("index", { tareas, layout: "layouts/admin" });
};

const modificaCarrito = (req, res) => {
  let accion = req.params.action
  if (accion="sumar"){

  }
 
  cart.items.push(tarea);

  res.redirect("/cart");
};

const update = (req, res) => {
  tareas.forEach((tarea) => {
    if (tarea.id == req.params.id) {
      tarea.completed = !tarea.completed;
    }
  });

  res.redirect("/");
};

const destroy = (req, res) => {
  tareas = tareas.filter((tarea) => tarea.id != req.params.id);

  res.redirect("/");
};

module.exports = {
  index,
  shop,
  item,
  carrito,
  update,
  destroy,
};
