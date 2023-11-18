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

const index = (req, res) => {
  console.log('Cargando ruta index method GET');
  res.render("index", { items });
  // res.render("index", { tareas, layout: "layouts/admin" });
};

const store = (req, res) => {
  const tarea = {
    id: Date.now(),
    title: req.body.title,
    completed: false,
  };

  tareas.push(tarea);

  res.redirect("/");
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
  store,
  update,
  destroy,
};
