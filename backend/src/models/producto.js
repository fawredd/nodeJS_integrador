const { DataTypes } = require('sequelize')
const sequelize = require('./connection')

/* Datos producto mostrado en front   
    “product_id”: 1,
    “licence_name”: “Pokemon”,
    “category_name”: “Figuras coleccionables”,
    “product_name”: “Pidgeotto”,
    “product_description”: “Figura coleccionable pokemon”,
    “product_price”: 1799.99,
    “dues”: 10,
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
        autoIncrement: true,
        },
        licence_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cgory_nameate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false    
        },
        product_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        product_price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        dues: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        product_sku: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img_front: {
            type: DataTypes.STRING,
            allowNull: true
        },
        img_back: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: true,
    }
)

;(async () => {
  // await sequelize.sync();
  // await sequelize.sync({ force: true });
    await sequelize.sync({ alter: true })
})()

module.exports = Producto
