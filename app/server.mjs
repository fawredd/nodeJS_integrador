import express from 'express';
const app = express();

// Middleware configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Páginas estáticas en directorio "public"
app.use(express.static('public'));

// API routes
import apiRoutes from './server/routes/api';
app.use('/api', apiRoutes);

// Otras routes
import otherRoutes from './server/routes/other';
app.use('/other', otherRoutes);

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server escuchando en puerto ${port}`);
});