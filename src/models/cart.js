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

const Cart = sequelize.define(
    'Cart',
    {
        cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cart_item: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cart_item_cant: {
            type: DataTypes.INTEGER,
            allowNull: false    
        },
        cart_item_price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
    },
    {
        timestamps: true,
    }
)

module.exports = Cart
