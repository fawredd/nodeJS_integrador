const { validationResult } = require('express-validator')

const model = require('../models/licence')

const index = async (req, res) => {
  try {
    const licencias = await model.findAll()
    res.render('pages/admin/licences/index', { licencias })
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}

const create = (req, res) => {
  res.render('pages/admin/licences/create')
}

const store = async (req, res) => {
  console.log(req.body)

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.render('pages/admin/licences/create', {
      values: req.body,
      errors: errors.array()
    })
  }

  try {
    const licencias = await model.create(req.body)
    // console.log(categoria);

    res.redirect('/admin/licencias')
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

const edit = async (req, res) => {
  try {
    const licencias = await model.findByPk(req.params.id)

    if (licencias) {
      res.render('pages/admin/licences/edit', { values: licencias })
    } else {
      res.status(404).send('No existe el categoria')
    }
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

const update = async (req, res) => {
  console.log(req.params, req.body)

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.render('pages/admin/licences/edit', {
      values: { ...req.params, ...req.body },
      errors: errors.array()
    })
  }

  try {
    const count = await model.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    // console.log(count);

    res.redirect('/admin/licencias')
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

const destroy = async (req, res) => {
  console.log(req.params)

  try {
    const destroyed = await model.destroy({
      where: {
        id: req.params.id
      }
    })
    console.log(destroyed)

    res.redirect('/admin/licencias')
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

module.exports = {
  index,
  create,
  store,
  edit,
  update,
  destroy
}
