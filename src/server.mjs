import express from 'express';
const app = express();

// Middleware configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Páginas estáticas en directorio "public"
app.use(express.static('public'));

// Ruta raiz
app.get('/', handleRootRoute);

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server escuchando en puerto ${port}`);
});