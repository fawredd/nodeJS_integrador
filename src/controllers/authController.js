const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')

const model = require('../models/user')

const register = (req, res) => {
  res.render('pages/auth/register')
}
const postRegister = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.render('pages/auth/register', {
      values: req.body,
      errors: errors.array()
    })
  }

  try {
    const user = await model.create(req.body)
    res.redirect('/')
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

const login = (req, res) => {
  res.render('pages/auth/login')
}
const postLogin = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.render('pages/auth/login', {
      values: req.body,
      errors: errors.array()
    })
  }

  try {
    const user = await model.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!user) {
      res.render('pages/auth/login', {
        values: req.body,
        errors: [{ msg: 'El correo y/o contraseña son incorrectos (email)' }]
      })
    } else if (!(await bcryptjs.compare(req.body.password, user.password))) {
      res.render('pages/auth/login', {
        values: req.body,
        errors: [
          { msg: 'El correo y/o contraseña son incorrectos (password)' }
        ]
      })
    } else {
      req.session.userId = user.id

      res.redirect('/')
    }
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

const logout = (req, res) => {
  req.session = null
  res.redirect('/')
}

module.exports = {
  register,
  postRegister,
  login,
  postLogin,
  logout
}
