const { DataTypes } = require('sequelize')
const sequelize = require('./connection')

const Categorias = require('./category')
const Licencias = require('./licence')

/* Datos producto mostrado en front
    “product_id”: 1,
    “licence_id”: 1 - “Pokemon”,
    “category_id”: 1 - “Figuras coleccionables”,
    “product_name”: “Pidgeotto”,
    “product_description”: “Figura coleccionable pokemon”,
    “product_price”: 1799.99,
    "product_stock": 100,
    “dues”: 3,
    “product_sku”: “PKM001001”
    “img_front”: ”/img/pokemon/pidgeotto-1.webp”,
    “img_back”: ”/img/pokemon/pidgeotto-box.webp”
*/

const Producto = sequelize.define(
  'Producto',
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    product_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    product_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    dues: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_sku: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    img_front: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '/default-1.jpg'
    },
    img_back: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '/default-box.jpg'
    },
    payment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sticker: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    timestamps: true
  }
)

Producto.belongsTo(Categorias)
Producto.belongsTo(Licencias)

module.exports = Producto
