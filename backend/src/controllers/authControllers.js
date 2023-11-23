//Importo data temporal
const data = require('../data/data')

/* 
Auth Routes:
- GET -> /auth/login
- POST -> /auth/login
- GET -> /auth/register
- POST -> /auth/register
- GET -> /auth/logout
*/

//Controladores
const authControllers = {
  login: (req, res) => {
    res.send('Cargando ruta /login method GET and POST')
  },
  register: (req,res) => res.send('Cargando ruta /register method GET and POST'),
  logout: (req,res) => res.send('Cargando ruta /logout method GET and POST'),
}

module.exports = authControllers
